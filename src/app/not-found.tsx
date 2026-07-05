import Link from "next/link";
import { Home } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#241134] to-navy" />
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-neon-cyan/20 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-neon-magenta/20 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="font-heading text-7xl font-extrabold text-white/15">404</span>
        <h1 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-4 text-white/75">
          O endereço que você tentou acessar não existe ou foi movido. Volte para a página inicial ou fale
          diretamente com a gente pelo WhatsApp.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-chip bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:shadow-glow-cyan"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Voltar para a Home
          </Link>
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.diagnostico)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-chip border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-[#25D366]"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
