import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AgendarForm } from "@/components/agendar-form";

export const metadata: Metadata = {
  title: "Agendar | Solport",
  description:
    "Solicite um horário para falar com o nosso time sobre segurança eletrônica ou eletromobilidade no seu condomínio.",
};

export default function AgendarPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Agendar"
        eyebrow="Atendimento"
        title="Agende um horário com o nosso time"
        subtitle="Prefere ir direto ao ponto? Deixe seus dados e o melhor horário para contato — nós confirmamos com você."
        hideCtaRow
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <AgendarForm />
        </div>
      </section>
    </>
  );
}
