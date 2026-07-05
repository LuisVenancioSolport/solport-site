import { Resend } from "resend";
import {
  INTERESSE_LABELS,
  MELHOR_HORARIO_LABELS,
  type LeadPayload,
} from "@/lib/leads";

function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

function renderLeadEmailHtml(lead: LeadPayload): string {
  const rows: [string, string | undefined][] = [
    ["Formulário", lead.tipo_formulario === "diagnostico" ? "Diagnóstico 360°" : "Agendar"],
    ["Nome", lead.nome],
    ["Telefone", lead.telefone],
    ["Condomínio", lead.condominio],
    ["Cidade", lead.cidade],
    ["Interesse", lead.interesse ? INTERESSE_LABELS[lead.interesse] : undefined],
    ["Soluções de interesse", lead.solucoes_interesse?.join(", ")],
    ["Melhor horário", lead.melhor_horario ? MELHOR_HORARIO_LABELS[lead.melhor_horario] : undefined],
    ["Mensagem", lead.mensagem],
    ["Detalhes", lead.detalhes ? JSON.stringify(lead.detalhes) : undefined],
    ["UTM", [lead.utm_source, lead.utm_medium, lead.utm_campaign].filter(Boolean).join(" / ") || undefined],
  ];

  const rowsHtml = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#18093A;font-weight:600;">${label}</td><td style="padding:6px 12px;color:#18093A;">${value}</td></tr>`
    )
    .join("");

  return `<div style="font-family:Arial,sans-serif;max-width:560px;">
    <h2 style="color:#18093A;">Novo lead pelo site</h2>
    <table style="border-collapse:collapse;width:100%;">${rowsHtml}</table>
  </div>`;
}

export async function sendLeadNotification(lead: LeadPayload): Promise<void> {
  const resend = getResendClient();
  if (!resend) {
    console.warn("[resend] RESEND_API_KEY não configurado — notificação por e-mail não enviada.");
    return;
  }

  const to = process.env.LEAD_NOTIFICATION_EMAIL ?? "contato@solport.com.br";

  await resend.emails.send({
    from: "Solport Site <onboarding@resend.dev>",
    to,
    subject: `Novo lead (${lead.tipo_formulario}) — ${lead.nome}`,
    html: renderLeadEmailHtml(lead),
  });
}
