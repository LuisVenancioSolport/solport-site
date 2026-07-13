"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

const ACCENTS = {
  cyan: {
    blob: "bg-neon-cyan/20",
    badgeBorder: "border-neon-cyan/40",
    badgeText: "text-neon-cyan",
    dot: "bg-neon-cyan",
    glow: "hover:shadow-glow-cyan",
  },
  magenta: {
    blob: "bg-neon-magenta/20",
    badgeBorder: "border-neon-magenta/40",
    badgeText: "text-neon-magenta",
    dot: "bg-neon-magenta",
    glow: "hover:shadow-glow-magenta",
  },
} as const;

interface PageHeroProps {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets?: string[];
  ctaLabel?: string;
  whatsappMessage?: string;
  accent?: keyof typeof ACCENTS;
  hideCtaRow?: boolean;
}

export function PageHero({
  breadcrumbLabel,
  eyebrow,
  title,
  subtitle,
  bullets = [],
  ctaLabel,
  whatsappMessage,
  accent = "cyan",
  hideCtaRow = false,
}: PageHeroProps) {
  const a = ACCENTS[accent];

  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#241134] to-navy" />
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className={`absolute -left-24 top-10 h-72 w-72 rounded-full ${a.blob} blur-3xl`} />
      <div className={`absolute -right-16 bottom-0 h-80 w-80 rounded-full ${a.blob} blur-3xl`} />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white/75">{breadcrumbLabel}</span>
        </nav>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center rounded-full border ${a.badgeBorder} bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${a.badgeText}`}
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-lg text-white/80"
        >
          {subtitle}
        </motion.p>

        {bullets.length > 0 && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 grid gap-3 text-sm text-white/80 sm:grid-cols-2"
          >
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                {b}
              </li>
            ))}
          </motion.ul>
        )}

        {!hideCtaRow && ctaLabel && whatsappMessage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { origem: "page_hero_primario" })}
              className={`inline-flex items-center justify-center gap-2 rounded-chip bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-soft transition ${a.glow}`}
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              {ctaLabel}
            </a>
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { origem: "page_hero_secundario" })}
              className={`inline-flex items-center justify-center gap-2 rounded-chip border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-[#25D366] ${a.glow}`}
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
