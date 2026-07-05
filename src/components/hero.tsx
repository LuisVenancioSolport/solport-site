"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { HeroInfographic } from "@/components/hero-infographic";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#321E42] to-navy" />
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-neon-cyan/25 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-neon-magenta/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-neon-cyan/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-neon-cyan"
          >
            Atuação em todo o estado de São Paulo
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Segurança inteligente e eletromobilidade para condomínios de São Paulo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-white/80"
          >
            Portaria Virtual, CFTV, Controle de Acesso, Alarme e Eletropostos — com
            implantação rápida em todo o estado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/diagnostico"
              onClick={() => trackEvent("diagnostico_cta_click", { origem: "hero" })}
              className="inline-flex items-center justify-center gap-2 rounded-chip bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:shadow-glow-cyan"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Agendar Diagnóstico 360°
            </Link>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.diagnostico)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { origem: "hero" })}
              className="inline-flex items-center justify-center gap-2 rounded-chip border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-[#25D366] hover:shadow-glow-cyan"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 grid gap-4 text-sm text-white/75 sm:grid-cols-3 lg:grid-cols-1"
          >
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
              Redução de custos de portaria com mais controle e registro
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
              SLA 24/7 com tempos de resposta claros
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-magenta" />
              Eletropostos com análise de carga, billing individual e laudos/ART
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <HeroInfographic />
        </motion.div>
      </div>
    </section>
  );
}
