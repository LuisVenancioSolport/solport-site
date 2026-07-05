"use client";

import { useState, type FormEvent } from "react";
import {
  TextField,
  RadioGroup,
  ConsentCheckbox,
  HoneypotField,
  SubmitButton,
  FormStatus,
  type FieldOption,
} from "@/components/lead-form-fields";
import { trackEvent } from "@/lib/analytics";

const HORARIO_OPTIONS: FieldOption[] = [
  { value: "manha", label: "Manhã" },
  { value: "tarde", label: "Tarde" },
  { value: "noite", label: "Noite" },
];

export function AgendarForm() {
  const [nome, setNome] = useState("");
  const [condominio, setCondominio] = useState("");
  const [telefone, setTelefone] = useState("");
  const [melhorHorario, setMelhorHorario] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [consentimento, setConsentimento] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo_formulario: "agendar",
          nome,
          telefone,
          condominio,
          melhor_horario: melhorHorario || undefined,
          mensagem: mensagem || undefined,
          consentimento_lgpd: consentimento,
          honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Não foi possível enviar sua solicitação agora.");
      }

      trackEvent("agendar_submit");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.");
    }
  }

  if (status === "success") {
    return (
      <FormStatus
        status="success"
        message="Solicitação de agendamento recebida! Nosso time confirma o horário com você em breve, se preferir, fale agora pelo WhatsApp."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        label="Telefone/WhatsApp"
        name="telefone"
        value={telefone}
        onChange={setTelefone}
        required
        type="tel"
        placeholder="(11) 90000-0000"
      />
      <RadioGroup
        label="Melhor horário para contato"
        name="melhorHorario"
        value={melhorHorario}
        onChange={setMelhorHorario}
        options={HORARIO_OPTIONS}
      />
      <TextField
        label="Mensagem"
        name="mensagem"
        value={mensagem}
        onChange={setMensagem}
        textarea
        placeholder="Conte brevemente o que precisa (opcional)"
      />
      <ConsentCheckbox checked={consentimento} onChange={setConsentimento} />
      <HoneypotField value={honeypot} onChange={setHoneypot} />

      {status === "error" && <FormStatus status="error" message={errorMessage} />}

      <SubmitButton label="Solicitar agendamento" loading={status === "loading"} />
    </form>
  );
}
