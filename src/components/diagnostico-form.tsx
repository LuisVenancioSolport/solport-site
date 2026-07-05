"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
  TextField,
  RadioGroup,
  CheckboxGroup,
  ConsentCheckbox,
  HoneypotField,
  SubmitButton,
  FormStatus,
  type FieldOption,
} from "@/components/lead-form-fields";
import { trackEvent } from "@/lib/analytics";

const INTERESSE_OPTIONS: FieldOption[] = [
  { value: "seguranca", label: "Segurança" },
  { value: "eletromobilidade", label: "Eletromobilidade" },
  { value: "ambos", label: "Ambos" },
];

const SOLUCOES_OPTIONS: FieldOption[] = [
  { value: "portaria-virtual", label: "Portaria Virtual" },
  { value: "cftv", label: "CFTV" },
  { value: "controle-de-acesso", label: "Controle de Acesso" },
  { value: "alarmes", label: "Alarme e Vídeo Alarme" },
];

const CARGA_OPTIONS: FieldOption[] = [
  { value: "nao-sei", label: "Não sei" },
  { value: "baixa", label: "Baixa" },
  { value: "media", label: "Média" },
  { value: "alta", label: "Alta" },
];

const CABEAMENTO_OPTIONS: FieldOption[] = [
  { value: "nao-sei", label: "Não sei" },
  { value: "dedicado", label: "Dedicado por vaga" },
  { value: "compartilhado", label: "Compartilhado" },
];

const HORARIO_OPTIONS: FieldOption[] = [
  { value: "manha", label: "Manhã" },
  { value: "tarde", label: "Tarde" },
  { value: "noite", label: "Noite" },
];

function DiagnosticoFormInner() {
  const searchParams = useSearchParams();

  const [nome, setNome] = useState("");
  const [condominio, setCondominio] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [interesse, setInteresse] = useState(searchParams.get("interesse") ?? "");
  const [solucoes, setSolucoes] = useState<string[]>(() => {
    const solucao = searchParams.get("solucao");
    return solucao ? [solucao] : [];
  });
  const [unidades, setUnidades] = useState("");
  const [ocorrencias, setOcorrencias] = useState("");
  const [vagas, setVagas] = useState("");
  const [vagasEletroposto, setVagasEletroposto] = useState("");
  const [carga, setCarga] = useState("");
  const [cabeamento, setCabeamento] = useState("");
  const [melhorHorario, setMelhorHorario] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [consentimento, setConsentimento] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const showSeguranca = interesse === "seguranca" || interesse === "ambos";
  const showEletromobilidade = interesse === "eletromobilidade" || interesse === "ambos";

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const detalhes: Record<string, unknown> = {};
    if (showSeguranca) {
      if (unidades) detalhes.unidades = unidades;
      if (ocorrencias) detalhes.ocorrencias_recentes = ocorrencias;
    }
    if (showEletromobilidade) {
      if (vagas) detalhes.vagas = vagas;
      if (vagasEletroposto) detalhes.vagas_eletroposto = vagasEletroposto;
      if (carga) detalhes.carga_disponivel = carga;
      if (cabeamento) detalhes.cabeamento = cabeamento;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo_formulario: "diagnostico",
          nome,
          telefone,
          condominio,
          cidade: cidade || undefined,
          interesse: interesse || undefined,
          solucoes_interesse: showSeguranca && solucoes.length ? solucoes : undefined,
          detalhes: Object.keys(detalhes).length ? detalhes : undefined,
          melhor_horario: melhorHorario || undefined,
          mensagem: mensagem || undefined,
          consentimento_lgpd: consentimento,
          honeypot,
          utm_source: searchParams.get("utm_source") ?? undefined,
          utm_medium: searchParams.get("utm_medium") ?? undefined,
          utm_campaign: searchParams.get("utm_campaign") ?? undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Não foi possível enviar seu diagnóstico agora.");
      }

      trackEvent("diagnostico_submit", { interesse });
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
        message="Recebemos seu Diagnóstico 360°! Nosso time entra em contato no horário indicado. Se preferir, fale agora pelo WhatsApp."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">Etapa 1 — Sobre você</p>
        <div className="grid gap-5 sm:grid-cols-2">
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
          <TextField label="Cidade" name="cidade" value={cidade} onChange={setCidade} placeholder="Cidade em SP" />
        </div>
        <RadioGroup
          label="Qual seu interesse?"
          name="interesse"
          value={interesse}
          onChange={setInteresse}
          options={INTERESSE_OPTIONS}
          required
        />
      </div>

      {(showSeguranca || showEletromobilidade) && (
        <div className="space-y-5 border-t border-surface-muted pt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">Etapa 2 — Detalhes do diagnóstico</p>

          {showSeguranca && (
            <div className="space-y-5">
              <CheckboxGroup
                label="Quais soluções têm interesse?"
                values={solucoes}
                onChange={setSolucoes}
                options={SOLUCOES_OPTIONS}
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  label="Número de unidades"
                  name="unidades"
                  value={unidades}
                  onChange={setUnidades}
                  type="number"
                  placeholder="Ex.: 80"
                />
                <TextField
                  label="Já teve ocorrências de segurança recentes?"
                  name="ocorrencias"
                  value={ocorrencias}
                  onChange={setOcorrencias}
                  placeholder="Descreva brevemente (opcional)"
                />
              </div>
            </div>
          )}

          {showEletromobilidade && (
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  label="Número de vagas de garagem"
                  name="vagas"
                  value={vagas}
                  onChange={setVagas}
                  type="number"
                  placeholder="Ex.: 120"
                />
                <TextField
                  label="Vagas destinadas a eletroposto (estimativa)"
                  name="vagasEletroposto"
                  value={vagasEletroposto}
                  onChange={setVagasEletroposto}
                  type="number"
                  placeholder="Ex.: 10"
                />
              </div>
              <RadioGroup
                label="Carga elétrica disponível"
                name="carga"
                value={carga}
                onChange={setCarga}
                options={CARGA_OPTIONS}
              />
              <RadioGroup
                label="Cabeamento existente"
                name="cabeamento"
                value={cabeamento}
                onChange={setCabeamento}
                options={CABEAMENTO_OPTIONS}
              />
            </div>
          )}
        </div>
      )}

      <div className="space-y-5 border-t border-surface-muted pt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">Etapa 3 — Finalizar</p>
        <RadioGroup
          label="Melhor horário para contato"
          name="melhorHorario"
          value={melhorHorario}
          onChange={setMelhorHorario}
          options={HORARIO_OPTIONS}
        />
        <TextField
          label="Mensagem adicional"
          name="mensagem"
          value={mensagem}
          onChange={setMensagem}
          textarea
          placeholder="Conte mais detalhes, se quiser (opcional)"
        />
        <ConsentCheckbox checked={consentimento} onChange={setConsentimento} />
        <HoneypotField value={honeypot} onChange={setHoneypot} />

        {status === "error" && <FormStatus status="error" message={errorMessage} />}

        <SubmitButton label="Enviar Diagnóstico 360°" loading={status === "loading"} />
      </div>
    </form>
  );
}

export function DiagnosticoForm() {
  return (
    <Suspense fallback={null}>
      <DiagnosticoFormInner />
    </Suspense>
  );
}
