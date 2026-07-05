export type TipoFormulario = "diagnostico" | "agendar";
export type Interesse = "seguranca" | "eletromobilidade" | "ambos";
export type MelhorHorario = "manha" | "tarde" | "noite";

export interface LeadPayload {
  tipo_formulario: TipoFormulario;
  nome: string;
  telefone: string;
  condominio: string;
  cidade?: string;
  interesse?: Interesse;
  solucoes_interesse?: string[];
  detalhes?: Record<string, unknown>;
  melhor_horario?: MelhorHorario;
  mensagem?: string;
  consentimento_lgpd: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  honeypot?: string;
}

export const MELHOR_HORARIO_LABELS: Record<MelhorHorario, string> = {
  manha: "Manhã",
  tarde: "Tarde",
  noite: "Noite",
};

export const INTERESSE_LABELS: Record<Interesse, string> = {
  seguranca: "Segurança eletrônica",
  eletromobilidade: "Eletromobilidade",
  ambos: "Segurança e Eletromobilidade",
};
