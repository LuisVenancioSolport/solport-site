const WHATSAPP_NUMBER = "551147599009";

export type WhatsAppIntent = "diagnostico" | "eletropostos" | "smartSampa";

const INTENT_TEXT: Record<WhatsAppIntent, string> = {
  diagnostico: "Quero agendar o Diagnóstico 360° (Segurança/Eletromobilidade).",
  eletropostos: "Preciso da análise de carga e viabilidade técnica para eletropostos.",
  smartSampa: "Quero integrar meu condomínio ao Smart Sampa / Muralha Paulista através do Watching U.",
};

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildIntentMessage(intent: WhatsAppIntent, lead?: { nome?: string; condominio?: string }): string {
  const intro =
    lead?.nome?.trim() && lead?.condominio?.trim()
      ? `Olá, sou ${lead.nome.trim()}, do condomínio ${lead.condominio.trim()}. `
      : "Olá! ";
  return intro + INTENT_TEXT[intent];
}
