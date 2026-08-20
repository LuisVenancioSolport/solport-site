import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ComparisonTable } from "@/components/comparison-table";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ, type FAQItem } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Portaria Virtual em São Paulo | Solport",
  description:
    "Portaria Virtual em São Paulo: Integral 24/7, Por Turno ou Autônoma, com SLA de resposta documentado — mesmo resultado do case Jardins do Vale: -38% de custo.",
  alternates: { canonical: "/solucoes/portaria-virtual" },
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
      "As imagens e registros de acesso são armazenados com controle de acesso restrito e usados apenas para fins de segurança. A Solport atua como controladora desses dados nos termos do art. 42 da LGPD. Consulte nossa Política de Privacidade para detalhes sobre retenção e exclusão de dados.",
  },
  {
    question: "Como sei que a área está sendo monitorada?",
    answer:
      "Todo local com câmeras ou controle de acesso integrados à portaria virtual recebe sinalização visível informando o monitoramento, conforme a LGPD (art. 6º, princípio da transparência).",
  },
  {
    question: "Por quanto tempo as imagens e registros ficam armazenados?",
    answer:
      "As imagens são mantidas por um período mínimo de 30 dias e máximo de 90 dias; os registros de acesso, por até 6 meses — findo o prazo, são eliminados automaticamente, salvo obrigação legal ou determinação judicial em contrário.",
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
          "Referência real: no Jardins do Vale, a portaria virtual reduziu o custo mensal em 38% e chegou a 0 ocorrências não registradas em 12 meses, com SLA médio de resposta de 4 minutos",
        ]}
        ctaLabel="Agendar Diagnóstico 360°"
        whatsappIntent="diagnostico"
        accent="cyan"
      />
      <div className="relative h-64 w-full sm:h-80 lg:h-[420px]">
        <Image
          src="/posters/portaria-virtual.png"
          alt="Atendente da Solport realizando o atendimento de portaria virtual"
          fill
          priority
          className="object-cover"
        />
      </div>
      <ComparisonTable />
      <HowItWorks />
      <FAQ title="Perguntas sobre Portaria Virtual" items={FAQ_ITEMS} />
      <FinalCTA primaryHref="/diagnostico?interesse=seguranca&solucao=portaria-virtual" />
    </>
  );
}
