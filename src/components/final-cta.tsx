"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

interface FinalCTAProps {
  id?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryMessage?: string;
}

export function FinalCTA({
  id = "diagnostico",
  title = "Agende seu Diagnóstico 360°",
  subtitle = "Uma avaliação completa de segurança e/ou viabilidade de eletropostos para o seu condomínio, sem compromisso.",
  primaryLabel = "Agendar Diagnóstico 360°",
  primaryHref = "/diagnostico",
  secondaryLabel = "Falar no WhatsApp",
  secondaryMessage = WHATSAPP_MESSAGES.diagnostico,
}: FinalCTAProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-extrabold text-white sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-white/75"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href={primaryHref}
            onClick={() => trackEvent("diagnostico_cta_click", { origem: "final_cta" })}
            className="inline-flex items-center justify-center gap-2 rounded-chip bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:shadow-glow-cyan"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            {primaryLabel}
          </Link>
          <a
            href={buildWhatsAppLink(secondaryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { origem: "final_cta" })}
            className="inline-flex items-center justify-center gap-2 rounded-chip border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-[#25D366] hover:shadow-glow-cyan"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
            {secondaryLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
