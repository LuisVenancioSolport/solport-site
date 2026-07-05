import type { Metadata } from "next";
import { Camera, HardDrive, Link2, Smartphone } from "lucide-react";
import { SolutionPageTemplate, type SolutionFeature } from "@/components/solution-page-template";
import type { FAQItem } from "@/components/faq";

export const metadata: Metadata = {
  title: "CFTV para Condomínios em SP | Solport",
  description:
    "Câmeras de alta definição, gravação contínua e monitoramento integrado à Portaria Virtual para condomínios em todo o estado de São Paulo.",
};

const FEATURES: SolutionFeature[] = [
  {
    icon: <Camera className="h-5 w-5" aria-hidden="true" />,
    title: "Cobertura estratégica",
    text: "Câmeras HD/4K posicionadas em portaria, garagem e áreas comuns.",
  },
  {
    icon: <HardDrive className="h-5 w-5" aria-hidden="true" />,
    title: "Gravação contínua",
    text: "Retenção configurável de imagens, com acesso rápido a gravações antigas.",
  },
  {
    icon: <Link2 className="h-5 w-5" aria-hidden="true" />,
    title: "Integração total",
    text: "Conectado à Portaria Virtual e ao Controle de Acesso para uma visão única de segurança.",
  },
  {
    icon: <Smartphone className="h-5 w-5" aria-hidden="true" />,
    title: "Acesso remoto",
    text: "Síndico e administradora acompanham as imagens de qualquer lugar, em tempo real.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Por quanto tempo as imagens ficam armazenadas?",
    answer:
      "O período de retenção é configurável conforme a necessidade e o orçamento do condomínio, respeitando a LGPD.",
  },
  {
    question: "As câmeras funcionam à noite?",
    answer:
      "Sim, utilizamos câmeras com visão noturna/infravermelho nos pontos que exigem cobertura 24h.",
  },
  {
    question: "O CFTV se integra com a portaria que já temos?",
    answer:
      "Avaliamos a infraestrutura existente durante o Diagnóstico 360° e propomos a integração possível com câmeras e sistemas já instalados.",
  },
  {
    question: "Como funciona a manutenção das câmeras?",
    answer:
      "Manutenção preventiva e corretiva incluídas no contrato de SLA, com suporte 24/7 para chamados críticos.",
  },
];

export default function CFTVPage() {
  return (
    <SolutionPageTemplate
      breadcrumbLabel="CFTV"
      eyebrow="Segurança 24/7"
      title="CFTV com imagens nítidas e auditoria completa"
      subtitle="Câmeras de alta definição, gravação contínua e monitoramento integrado à Portaria Virtual para dar rastreabilidade total ao seu condomínio."
      heroBullets={[
        "Câmeras HD/4K em pontos estratégicos (portaria, garagem, áreas comuns)",
        "Gravação contínua com retenção configurável",
      ]}
      ctaLabel="Agendar Diagnóstico 360°"
      features={FEATURES}
      faqItems={FAQ_ITEMS}
      diagnosticoQuery="?interesse=seguranca&solucao=cftv"
    />
  );
}
