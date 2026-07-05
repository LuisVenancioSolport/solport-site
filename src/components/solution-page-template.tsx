"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ, type FAQItem } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export interface SolutionFeature {
  icon: ReactNode;
  title: string;
  text: string;
}

interface SolutionPageTemplateProps {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroBullets: string[];
  ctaLabel: string;
  features: SolutionFeature[];
  faqItems: FAQItem[];
  diagnosticoQuery?: string;
}

export function SolutionPageTemplate({
  breadcrumbLabel,
  eyebrow,
  title,
  subtitle,
  heroBullets,
  ctaLabel,
  features,
  faqItems,
  diagnosticoQuery = "",
}: SolutionPageTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbLabel={breadcrumbLabel}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        bullets={heroBullets}
        ctaLabel={ctaLabel}
        whatsappMessage={WHATSAPP_MESSAGES.diagnostico}
        accent="cyan"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl font-extrabold text-navy sm:text-4xl"
          >
            Como funciona a solução
          </motion.h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 rounded-card border border-surface-muted bg-surface-light p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-chip bg-navy text-neon-cyan">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">{f.title}</h3>
                  <p className="mt-1 text-sm text-navy/70">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQ items={faqItems} />
      <FinalCTA primaryHref={`/diagnostico${diagnosticoQuery}`} />
    </>
  );
}
