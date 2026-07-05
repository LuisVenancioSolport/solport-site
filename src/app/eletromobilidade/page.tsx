import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  ViabilityStudy,
  ThreeServices,
  ComercialResidencial,
  NormasIntegracao,
} from "@/components/eletromobilidade-sections";
import { FAQ, type FAQItem } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Eletromobilidade para Condomínios em SP | Solport",
  description:
    "Análise de carga, infraestrutura com ART e instalação de eletropostos em condomínios residenciais e comerciais em todo o estado de São Paulo.",
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Qual o payback de um eletroposto instalado no condomínio?",
    answer:
      "Varia conforme número de vagas, uso e modelo de billing. Nossa análise de carga e viabilidade técnica estima prazo e custo antes da instalação.",
  },
  {
    question: "Como funciona o billing individualizado por unidade?",
    answer:
      "Cada ponto de recarga é medido separadamente, de forma que o consumo de energia é cobrado do morador ou unidade que efetivamente utilizou o carregador.",
  },
  {
    question: "Preciso levar o projeto para aprovação em assembleia?",
    answer:
      "Sim, em geral a instalação em áreas comuns passa por aprovação em assembleia. Preparamos o laudo técnico e a documentação necessária para facilitar essa apresentação.",
  },
  {
    question: "A instalação atende prédio comercial e residencial?",
    answer:
      "Sim. Adaptamos o projeto para vaga privada (residencial) ou áreas comuns compartilhadas (comercial), sempre respeitando a carga elétrica disponível.",
  },
  {
    question: "Como funciona a manutenção dos equipamentos?",
    answer:
      "Manutenção preventiva e corretiva incluídas no contrato de SLA, com suporte 24/7 para chamados críticos.",
  },
];

export default function EletromobilidadePage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Eletromobilidade"
        eyebrow="Eletromobilidade"
        title="Leve a recarga elétrica para o seu condomínio, com segurança e o dimensionamento certo."
        subtitle="Análise de carga, infraestrutura com ART e instalação em vaga privada ou áreas comuns — para condomínios residenciais e comerciais em todo o estado de São Paulo."
        bullets={[
          "Análise de carga elétrica disponível no condomínio",
          "Projeto de infraestrutura para eletropostos com ART",
          "Instalação em vaga privada ou em áreas comuns (comercial e residencial)",
          "Billing individualizado por unidade",
        ]}
        ctaLabel="Solicitar Análise de Carga / Viabilidade Técnica"
        whatsappMessage={WHATSAPP_MESSAGES.eletropostos}
        accent="magenta"
      />
      <ViabilityStudy />
      <ThreeServices />
      <ComercialResidencial />
      <NormasIntegracao />
      <FAQ title="Perguntas sobre eletromobilidade" items={FAQ_ITEMS} />
      <FinalCTA
        id="viabilidade"
        title="Solicite sua Análise de Carga e Viabilidade Técnica"
        subtitle="Nosso time avalia a carga elétrica disponível e o melhor projeto de eletropostos para o seu condomínio, sem compromisso."
        primaryLabel="Solicitar Análise de Carga"
        primaryHref="/diagnostico?interesse=eletromobilidade"
        secondaryMessage={WHATSAPP_MESSAGES.eletropostos}
      />
    </>
  );
}
