"use client";

import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import {
  TextField,
  ConsentCheckbox,
  HoneypotField,
  SubmitButton,
  FormStatus,
} from "@/components/lead-form-fields";
import { buildIntentMessage, buildWhatsAppLink, type WhatsAppIntent } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

interface WhatsAppLeadModalProps {
  intent: WhatsAppIntent;
  origin: string;
  onClose: () => void;
}

export function WhatsAppLeadModal({ intent, origin, onClose }: WhatsAppLeadModalProps) {
  const [nome, setNome] = useState("");
  const [condominio, setCondominio] = useState("");
  const [email, setEmail] = useState("");
  const [consentimento, setConsentimento] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  function openWhatsApp(lead?: { nome?: string; condominio?: string }) {
    window.open(buildWhatsAppLink(buildIntentMessage(intent, lead)), "_blank", "noopener,noreferrer");
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo_formulario: "whatsapp",
          nome,
          condominio,
          email,
          consentimento_lgpd: consentimento,
          honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Não foi possível salvar seus dados agora.");
      }

      trackEvent("whatsapp_lead_submit", { origem: origin });
      openWhatsApp({ nome, condominio });
      onClose();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.");
    }
  }

  function handleSkip() {
    trackEvent("whatsapp_lead_skip", { origem: origin });
    openWhatsApp({ nome, condominio });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/60 px-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-lead-modal-title"
        className="relative w-full max-w-md rounded-card border border-surface-muted bg-white p-6 shadow-soft sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 rounded-chip p-1 text-navy/40 transition hover:text-navy"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="mb-5 flex items-center gap-2">
          <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
          <h2 id="whatsapp-lead-modal-title" className="font-heading text-lg font-bold text-navy">
            Antes de abrir o WhatsApp
          </h2>
        </div>
        <p className="mb-5 text-sm text-navy/70">
          Deixe seu nome, condomínio e e-mail — assim conseguimos te dar retorno mesmo se a conversa
          não continuar.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField label="Nome" name="nome" value={nome} onChange={setNome} required placeholder="Seu nome completo" />
          <TextField
            label="Condomínio"
            name="condominio"
            value={condominio}
            onChange={setCondominio}
            required
            placeholder="Nome do condomínio"
          />
          <TextField
            label="E-mail"
            name="email"
            value={email}
            onChange={setEmail}
            required
            type="email"
            placeholder="seu@email.com"
          />
          <ConsentCheckbox checked={consentimento} onChange={setConsentimento} />
          <HoneypotField value={honeypot} onChange={setHoneypot} />

          {status === "error" && <FormStatus status="error" message={errorMessage} />}

          <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <SubmitButton label="Continuar para o WhatsApp" loading={status === "loading"} />
            <button
              type="button"
              onClick={handleSkip}
              className="text-xs font-medium text-navy/50 underline underline-offset-2 transition hover:text-navy/80"
            >
              Prefiro ir direto, sem deixar meus dados
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
