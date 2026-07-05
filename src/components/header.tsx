"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

const SOLUTIONS_LINKS = [
  { label: "Portaria Virtual", href: "/solucoes/portaria-virtual" },
  { label: "CFTV", href: "/solucoes/cftv" },
  { label: "Controle de Acesso", href: "/solucoes/controle-de-acesso" },
  { label: "Alarme e Vídeo Alarme", href: "/solucoes/alarmes" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-muted bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Solport — página inicial">
          <Image src="/logo-icon.png" alt="" width={190} height={136} className="h-9 w-auto" priority />
          <span className="font-heading text-lg font-extrabold tracking-tight text-navy">
            SOLPORT
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          <Link href="/eletromobilidade" className="text-sm font-medium text-navy/80 transition hover:text-brand-red">
            Eletromobilidade
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-navy/80 transition hover:text-brand-red"
              aria-haspopup="true"
            >
              Soluções
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="overflow-hidden rounded-card border border-surface-muted bg-white shadow-soft">
                {SOLUTIONS_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-sm font-medium text-navy/80 transition hover:bg-surface-light hover:text-brand-red"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/diagnostico" className="text-sm font-medium text-navy/80 transition hover:text-brand-red">
            Diagnóstico 360°
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/diagnostico"
            className="hidden rounded-chip bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow-cyan sm:inline-flex"
          >
            Solicitar Diagnóstico
          </Link>
          <a
            href={buildWhatsAppLink(WHATSAPP_MESSAGES.diagnostico)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { origem: "header" })}
            className="inline-flex items-center gap-1.5 rounded-chip border border-navy/15 px-3 py-2 text-sm font-semibold text-navy transition hover:border-[#25D366] sm:px-4"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-chip border border-navy/15 text-navy lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegação principal (mobile)"
          className="border-t border-surface-muted bg-white px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/eletromobilidade"
                onClick={() => setMenuOpen(false)}
                className="block rounded-chip px-3 py-2.5 text-sm font-medium text-navy/80 transition hover:bg-surface-light hover:text-brand-red"
              >
                Eletromobilidade
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen((open) => !open)}
                aria-expanded={mobileSolutionsOpen}
                aria-controls="mobile-solutions"
                className="flex w-full items-center justify-between rounded-chip px-3 py-2.5 text-sm font-medium text-navy/80 transition hover:bg-surface-light hover:text-brand-red"
              >
                Soluções
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {mobileSolutionsOpen && (
                <ul id="mobile-solutions" className="mt-1 flex flex-col gap-1 pl-3">
                  {SOLUTIONS_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-chip px-3 py-2 text-sm text-navy/70 transition hover:bg-surface-light hover:text-brand-red"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/diagnostico"
                onClick={() => setMenuOpen(false)}
                className="block rounded-chip px-3 py-2.5 text-sm font-medium text-navy/80 transition hover:bg-surface-light hover:text-brand-red"
              >
                Diagnóstico 360°
              </Link>
            </li>
            <li>
              <Link
                href="/diagnostico"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-chip bg-brand-red px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Solicitar Diagnóstico
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
