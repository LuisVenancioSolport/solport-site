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

export const metadata: Metadata = {
  title: "Eletropostos em Condomínios de São Paulo | Solport",
  description:
    "Eletropostos em condomínios de São Paulo: Diagnóstico 360° gratuito, projeto com ART conforme a NBR 17019 e simulação de prazo e payback antes da instalação.",
  alternates: { canonical: "/eletromobilidade" },
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
        title="Eletropostos em Condomínios de São Paulo: comece com um Diagnóstico 360° gratuito e um projeto conforme a NBR 17019."
        subtitle="Do Diagnóstico 360° no local ao projeto executivo com ART — simulação de prazo e payback antes de qualquer instalação."
        bullets={[
          "Diagnóstico 360° gratuito no local: levantamento técnico completo para orçamento, antes de qualquer decisão",
          "Projeto de infraestrutura para eletropostos com ART/CREA, dimensionado pelo fator de demanda real (NBR 17019)",
          "Instalação em vaga privada ou em áreas comuns (comercial e residencial), com billing individualizado por unidade",
          "Referência real: no Residencial Alto da Serra, 18 vagas foram instaladas em 21 dias, com payback estimado em 14 meses — a mesma simulação que fazemos para o seu condomínio a partir do Diagnóstico 360°",
        ]}
        ctaLabel="Solicitar Análise de Carga / Viabilidade Técnica"
        whatsappIntent="eletropostos"
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
        secondaryIntent="eletropostos"
      />
    </>
  );
}
