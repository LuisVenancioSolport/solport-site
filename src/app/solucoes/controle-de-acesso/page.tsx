import type { Metadata } from "next";
import { Fingerprint, QrCode, Lock, ClipboardList } from "lucide-react";
import { SolutionPageTemplate, type SolutionFeature } from "@/components/solution-page-template";
import type { FAQItem } from "@/components/faq";

export const metadata: Metadata = {
  title: "Controle de Acesso para Condomínios em SP | Solport",
  description:
    "Biometria e QR Code para moradores, visitantes e prestadores, com registro automático de cada acesso, em condomínios de todo o estado de São Paulo.",
};

const FEATURES: SolutionFeature[] = [
  {
    icon: <Fingerprint className="h-5 w-5" aria-hidden="true" />,
    title: "Biometria para moradores",
    text: "Reconhecimento facial ou digital, sem necessidade de cartões ou chaves físicas.",
  },
  {
    icon: <QrCode className="h-5 w-5" aria-hidden="true" />,
    title: "QR Code para visitantes",
    text: "Acesso temporário e rastreável para visitantes, prestadores e entregadores.",
  },
  {
    icon: <Lock className="h-5 w-5" aria-hidden="true" />,
    title: "Bloqueio e liberação remota",
    text: "Portaria virtual e síndico liberam ou bloqueiam acessos remotamente, quando necessário.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" aria-hidden="true" />,
    title: "Relatório por unidade",
    text: "Histórico de acessos disponível por unidade, útil para auditoria e ocorrências.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como é feito o cadastro dos moradores?",
    answer:
      "O cadastro biométrico é feito uma única vez, presencialmente, e passa a valer para entradas futuras sem necessidade de cartão ou chave.",
  },
  {
    question: "O controle de acesso se integra à Portaria Virtual?",
    answer:
      "Sim, ambos operam de forma integrada: a portaria virtual pode liberar ou bloquear acessos remotamente com base nos registros do controle de acesso.",
  },
  {
    question: "Prestadores recorrentes precisam gerar QR Code toda vez?",
    answer:
      "Não. É possível cadastrar prestadores recorrentes com liberação por período, mantendo o registro individual de cada entrada.",
  },
  {
    question: "Como a LGPD é aplicada aos dados biométricos?",
    answer:
      "Os dados biométricos são armazenados com controle de acesso restrito e usados exclusivamente para autenticação de entrada. Consulte nossa Política de Privacidade para detalhes de retenção e exclusão.",
  },
];

export default function ControleDeAcessoPage() {
  return (
    <SolutionPageTemplate
      breadcrumbLabel="Controle de Acesso"
      eyebrow="Segurança 24/7"
      title="Controle de Acesso por biometria e QR Code"
      subtitle="Gestão de entrada para moradores, visitantes e prestadores, com registro automático de cada acesso."
      heroBullets={[
        "Biometria facial ou digital para moradores",
        "QR Code temporário para visitantes e prestadores",
      ]}
      ctaLabel="Agendar Diagnóstico 360°"
      features={FEATURES}
      faqItems={FAQ_ITEMS}
      diagnosticoQuery="?interesse=seguranca&solucao=controle-de-acesso"
    />
  );
}
