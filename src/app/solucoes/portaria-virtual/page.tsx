import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ComparisonTable } from "@/components/comparison-table";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ, type FAQItem } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Portaria Virtual em São Paulo | Solport",
  description:
    "Portaria Virtual em três modalidades — Integral 24/7, Por Turno e Autônoma — para condomínios em todo o estado de São Paulo.",
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "A portaria virtual é realmente segura?",
    answer:
      "Sim. Combinamos monitoramento (humano ou tecnológico, conforme a modalidade escolhida) com CFTV, controle de acesso e SLA de resposta documentado.",
  },
  {
    question: "Como fica a LGPD nas imagens e dados coletados?",
    answer:
      "As imagens e registros de acesso são armazenados com controle de acesso restrito e usados apenas para fins de segurança. Consulte nossa Política de Privacidade para detalhes sobre retenção e exclusão de dados.",
  },
  {
    question: "Qual o tempo médio de implantação?",
    answer:
      "Depende da modalidade e da infraestrutura já existente no condomínio. No Diagnóstico 360° apresentamos um prazo estimado para o seu caso.",
  },
  {
    question: "Posso trocar de modalidade depois de contratar?",
    answer:
      "Sim, é possível migrar entre Integral 24/7, Por Turno e Autônoma conforme a necessidade do condomínio mudar.",
  },
  {
    question: "Como funciona a manutenção da portaria virtual?",
    answer:
      "Manutenção preventiva e corretiva incluídas no contrato de SLA, com suporte 24/7 para chamados críticos.",
  },
];

export default function PortariaVirtualPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Portaria Virtual"
        eyebrow="Segurança 24/7"
        title="Portaria Virtual em São Paulo, sem depender de porteiro fixo."
        subtitle="Monitoramento contínuo com CFTV e controle de acesso integrados, em três modalidades que se adaptam à realidade do seu condomínio."
        bullets={[
          "Monitoramento contínuo com câmeras e controle de acesso integrados",
          "Três modalidades: Integral 24/7, Por Turno e Autônoma",
          "Registro e auditoria completos de cada movimentação",
        ]}
        ctaLabel="Agendar Diagnóstico 360°"
        whatsappMessage={WHATSAPP_MESSAGES.diagnostico}
        accent="cyan"
      />
      <ComparisonTable />
      <HowItWorks />
      <FAQ title="Perguntas sobre Portaria Virtual" items={FAQ_ITEMS} />
      <FinalCTA primaryHref="/diagnostico?interesse=seguranca&solucao=portaria-virtual" />
    </>
  );
}
