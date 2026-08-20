"use client";

import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WhatsAppCTAButton } from "@/components/whatsapp-cta-button";

const NAV_LINKS = [
  { label: "Eletromobilidade", href: "/eletromobilidade" },
  { label: "App Solport", href: "/app-solport" },
  { label: "Portaria Virtual", href: "/solucoes/portaria-virtual" },
  { label: "CFTV", href: "/solucoes/cftv" },
  { label: "Controle de Acesso", href: "/solucoes/controle-de-acesso" },
  { label: "Alarme e Vídeo Alarme", href: "/solucoes/alarmes" },
  { label: "Watching U", href: "/solucoes/watching-u" },
  { label: "Diagnóstico 360°", href: "/diagnostico" },
  { label: "Agendar", href: "/agendar" },
  { label: "Blog", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-muted bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src="/logo-solport.png"
              alt="Solport Soluções Tecnológicas"
              width={215}
              height={200}
              className="h-24 w-auto"
            />
            <p className="mt-2 max-w-xs text-sm text-navy/60">
              Soluções Tecnológicas em segurança eletrônica e eletromobilidade
              para condomínios em todo o estado de São Paulo.
            </p>
            <WhatsAppCTAButton
              intent="diagnostico"
              origin="footer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition hover:text-[#25D366]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              +55 11 4759-9009
            </WhatsAppCTAButton>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-col gap-2 text-sm text-navy/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-brand-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Institucional">
            <ul className="flex flex-col gap-2 text-sm text-navy/70">
              <li>
                <Link href="/privacidade" className="transition hover:text-brand-red">
                  Política de Privacidade e LGPD
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-surface-muted pt-6 text-xs text-navy/45">
          © {new Date().getFullYear()} Solport Soluções Tecnológicas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
