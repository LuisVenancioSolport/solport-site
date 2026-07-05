import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendLeadNotification } from "@/lib/resend";
import { checkRateLimit } from "@/lib/rate-limit";
import type { LeadPayload } from "@/lib/leads";

export async function POST(req: NextRequest) {
  let body: Partial<LeadPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Corpo da requisição inválido." }, { status: 400 });
  }

  // Honeypot: bots costumam preencher todo campo disponível. Se veio
  // preenchido, respondemos como se tivesse dado certo, sem gravar nada.
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (
    !body.tipo_formulario ||
    !body.nome?.trim() ||
    !body.telefone?.trim() ||
    !body.condominio?.trim() ||
    !body.consentimento_lgpd
  ) {
    return NextResponse.json(
      { ok: false, error: "Preencha os campos obrigatórios e aceite a política de privacidade." },
      { status: 400 }
    );
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 }
    );
  }

  const lead: LeadPayload = {
    tipo_formulario: body.tipo_formulario,
    nome: body.nome.trim(),
    telefone: body.telefone.trim(),
    condominio: body.condominio.trim(),
    cidade: body.cidade?.trim() || undefined,
    interesse: body.interesse,
    solucoes_interesse: body.solucoes_interesse,
    detalhes: body.detalhes,
    melhor_horario: body.melhor_horario,
    mensagem: body.mensagem?.trim() || undefined,
    consentimento_lgpd: true,
    utm_source: body.utm_source,
    utm_medium: body.utm_medium,
    utm_campaign: body.utm_campaign,
  };

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("leads").insert(lead);
    if (error) {
      console.error("[api/lead] Erro ao gravar no Supabase:", error);
      return NextResponse.json({ ok: false, error: "Erro ao salvar seus dados. Tente novamente." }, { status: 500 });
    }
  } else {
    console.warn("[api/lead] Supabase não configurado — lead recebido mas não persistido:", lead);
  }

  try {
    await sendLeadNotification(lead);
  } catch (error) {
    console.error("[api/lead] Erro ao enviar notificação por e-mail:", error);
  }

  return NextResponse.json({ ok: true });
}
