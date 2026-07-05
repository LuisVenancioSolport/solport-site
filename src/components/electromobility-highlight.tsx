"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, FileCheck2, Gauge, ArrowRight } from "lucide-react";

const BULLETS = [
  { icon: Gauge, text: "Análise de carga elétrica disponível no condomínio" },
  { icon: FileCheck2, text: "Projeto de infraestrutura para eletropostos com ART" },
  { icon: Zap, text: "Instalação em vaga privada ou em áreas comuns (comercial e residencial)" },
];

export function ElectromobilityHighlight() {
  return (
    <section id="eletromobilidade" className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-card border border-neon-magenta/30 bg-gradient-to-br from-[#241134] to-navy p-8 shadow-glow-magenta sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon-magenta/20 blur-3xl" />

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mt-5 max-w-2xl font-heading text-3xl font-extrabold text-white sm:text-4xl"
          >
            Leve a recarga elétrica para o seu condomínio, com segurança e o
            dimensionamento certo.
          </motion.h2>

          <ul className="relative mt-8 grid gap-4 sm:grid-cols-3">
            {BULLETS.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.li
                  key={b.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="rounded-chip border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="h-5 w-5 text-neon-magenta" aria-hidden="true" />
                  <p className="mt-3 text-sm text-white/85">{b.text}</p>
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="relative mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <Link
              href="/diagnostico?interesse=eletromobilidade"
              className="inline-flex items-center gap-2 rounded-chip bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:shadow-glow-magenta"
            >
              Solicitar Análise de Carga / Viabilidade Técnica
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/eletromobilidade"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 underline-offset-4 transition hover:text-neon-magenta hover:underline"
            >
              Saiba mais sobre Eletromobilidade
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
