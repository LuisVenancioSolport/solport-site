import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AgendarForm } from "@/components/agendar-form";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Agendar | Solport",
  description:
    "Agende pelo WhatsApp com a Solport ou deixe seus dados para retorno. Segurança eletrônica e eletromobilidade para condomínios em todo o estado de São Paulo.",
  alternates: { canonical: "/agendar" },
};

export default function AgendarPage() {
  return (
    <>
      <PageHero
        breadcrumbLabel="Agendar"
        eyebrow="Atendimento"
        title="Fale agora no WhatsApp com um especialista Solport"
        subtitle="Resposta imediata, para condomínios em todo o estado de São Paulo. Prefere deixar seus dados? Nossa equipe retorna com o mesmo SLA de resposta documentado que já usamos com nossos clientes."
        bullets={[
          "WhatsApp é o canal mais rápido: fale agora com um especialista, sem esperar retorno de formulário.",
          "Deixou seus dados? Retorno em até 1 dia útil, com o SLA de resposta que já consta em contrato com nossos clientes.",
          "Segurança eletrônica ou eletromobilidade — conte o que precisa e receba uma proposta pronta para levar à assembleia.",
        ]}
        ctaLabel="Falar no WhatsApp agora"
        whatsappMessage={WHATSAPP_MESSAGES.diagnostico}
        accent="cyan"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-sm font-medium text-navy/60">
            Prefiro deixar meus dados em vez de falar agora pelo WhatsApp:
          </p>
          <AgendarForm />
        </div>
      </section>
    </>
  );
}
