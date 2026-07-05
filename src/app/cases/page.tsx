import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CasesContent } from "@/components/cases-content";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Cases | Solport",
  description:
    "Resultados reais de segurança eletrônica e eletromobilidade em condomínios de São Paulo, com números de custo, prazo e SLA.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Cases"
        eyebrow="Provas e resultados"
        title="Resultados reais em condomínios de São Paulo"
        subtitle="Segurança eletrônica e eletromobilidade, com números de custo, prazo e SLA — não apenas promessas."
        hideCtaRow
      />
      <CasesContent />
      <FinalCTA />
    </>
  );
}
