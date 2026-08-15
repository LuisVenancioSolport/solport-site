import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { DiagnosticoForm } from "@/components/diagnostico-form";

export const metadata: Metadata = {
  title: "Diagnóstico 360° | Solport",
  description:
    "Diagnóstico 360° gratuito: avaliação completa de segurança eletrônica e/ou viabilidade técnica de eletropostos para o seu condomínio, sem compromisso.",
  alternates: { canonical: "/diagnostico" },
};

export default function DiagnosticoPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Diagnóstico 360°"
        eyebrow="Sem compromisso"
        title="Diagnóstico 360° para o seu condomínio"
        subtitle="Conte um pouco sobre o condomínio e o que precisa — segurança eletrônica, eletromobilidade ou os dois. Nosso time analisa e retorna com uma proposta personalizada."
        hideCtaRow
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <DiagnosticoForm />
        </div>
      </section>
    </>
  );
}
