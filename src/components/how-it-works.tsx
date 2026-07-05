"use client";

import { motion } from "framer-motion";
import { ClipboardList, Ruler, Wrench, HeadsetIcon } from "lucide-react";

const STEPS = [
  { icon: ClipboardList, title: "Diagnóstico", text: "Avaliamos o condomínio e mapeamos riscos e oportunidades." },
  { icon: Ruler, title: "Projeto", text: "Dimensionamos a solução técnica, com laudos e ART quando aplicável." },
  { icon: Wrench, title: "Instalação", text: "Equipe própria executa a implantação com prazo definido." },
  { icon: HeadsetIcon, title: "Suporte/SLA", text: "Monitoramento contínuo e atendimento 24/7 com SLA claro." },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-extrabold text-navy sm:text-4xl"
        >
          Como funciona
        </motion.h2>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-card border border-surface-muted bg-surface-light p-6"
              >
                <span className="font-heading text-sm font-bold text-brand-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-chip bg-navy text-neon-cyan">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{step.text}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
