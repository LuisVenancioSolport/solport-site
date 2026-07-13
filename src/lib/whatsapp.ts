const WHATSAPP_NUMBER = "551147599009";

// Mensagens pré-preenchidas — RPD v4.0, Apêndice B
export const WHATSAPP_MESSAGES = {
  diagnostico:
    "Olá, sou [Nome], do [Condomínio]. Quero agendar o Diagnóstico 360° (Segurança/Eletromobilidade). Melhor horário: [manhã/tarde/noite].",
  eletropostos:
    "Olá, preciso da análise de carga e viabilidade técnica para eletropostos no [Condomínio]. Número de vagas: [X].",
  smartSampa:
    "Olá, quero integrar o [Condomínio] ao Smart Sampa / Muralha Paulista através do Watching U.",
} as const;

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
