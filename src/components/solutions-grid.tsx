"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Camera, Fingerprint, BellRing, ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    icon: ShieldCheck,
    title: "Portaria Virtual",
    text: "Três modalidades: Integral 24/7, Por Turno e Autônoma — cada uma com escopo próprio.",
    tags: ["Integral 24/7", "Por Turno", "Autônoma"],
    href: "/solucoes/portaria-virtual",
  },
  {
    icon: Camera,
    title: "CFTV",
    text: "Câmeras com imagens nítidas e auditoria, monitoramento contínuo.",
    tags: [],
    href: "/solucoes/cftv",
  },
  {
    icon: Fingerprint,
    title: "Controle de Acesso",
    text: "Biometria e QR Code para moradores, visitantes e prestadores.",
    tags: [],
    href: "/solucoes/controle-de-acesso",
  },
  {
    icon: BellRing,
    title: "Alarme e Vídeo Alarme",
    text: "Detecção de invasão com acionamento remoto e resposta rápida.",
    tags: [],
    href: "/solucoes/alarmes",
  },
];

export function SolutionsGrid() {
  return (
    <section id="solucoes" className="bg-surface-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-extrabold text-navy sm:text-4xl"
        >
          Soluções de segurança 24/7
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.6,
                    delay: i * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -12, transition: { duration: 0.2 } }}
                  className="flex h-full flex-col rounded-card border border-surface-muted bg-white p-6 shadow-soft transition-shadow hover:shadow-glow-cyan"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-chip bg-navy text-neon-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy">{sol.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-navy/70">{sol.text}</p>
                  {sol.tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {sol.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-neon-cyan/40 bg-neon-cyan/5 px-2.5 py-1 text-xs font-medium text-navy"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href={sol.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red"
                  >
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
