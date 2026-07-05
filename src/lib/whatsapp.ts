const WHATSAPP_NUMBER = "5511947599009";

// Mensagens pré-preenchidas — RPD v4.0, Apêndice B
export const WHATSAPP_MESSAGES = {
  diagnostico:
    "Olá, sou [Nome], do [Condomínio]. Quero agendar o Diagnóstico 360° (Segurança/Eletromobilidade). Melhor horário: [manhã/tarde/noite].",
  eletropostos:
    "Olá, preciso da análise de carga e viabilidade técnica para eletropostos no [Condomínio]. Número de vagas: [X].",
} as const;

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
