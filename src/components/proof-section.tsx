"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Conteúdo de exemplo — substituir por depoimentos e cases reais (RPD Seção 8)
const CASES = [
  {
    label: "Case de segurança",
    title: "Condomínio Jardins do Vale — Portaria Virtual 24/7",
    metrics: ["-38% custo mensal de portaria", "0 ocorrências não registradas em 12 meses", "SLA médio de resposta: 4min"],
  },
  {
    label: "Case de eletromobilidade",
    title: "Residencial Alto da Serra — Eletropostos em garagem",
    metrics: ["18 vagas com carregador instalado", "Implantação em 21 dias", "Payback estimado em 14 meses"],
  },
];

// Conteúdo de exemplo — substituir por depoimentos reais (nome, condomínio, cargo)
const TESTIMONIALS = [
  {
    quote:
      "A transição para a portaria virtual foi simples e o suporte é rápido sempre que precisamos.",
    name: "[Nome do síndico]",
    role: "Síndico — [Nome do condomínio]",
  },
  {
    quote:
      "Como administradora de múltiplos condomínios, o SLA documentado facilitou muito nossa gestão.",
    name: "[Nome da administradora]",
    role: "Administradora de condomínios",
  },
  {
    quote:
      "A instalação dos eletropostos foi rápida e o laudo técnico deu segurança para aprovar em assembleia.",
    name: "[Nome do síndico profissional]",
    role: "Síndico profissional",
  },
];

// Conteúdo de exemplo — substituir pelas marcas realmente trabalhadas
const BRANDS = ["Intelbras", "Hikvision", "Control iD"];

export function ProofSection() {
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
          Provas e resultados
        </motion.h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-card border border-surface-muted bg-surface-light p-6"
            >
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${
                  i === 1 ? "text-neon-magenta" : "text-brand-red"
                }`}
              >
                {c.label}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-navy">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-navy/75">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col rounded-card border border-surface-muted p-6"
            >
              <Quote className="h-5 w-5 text-brand-red" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-sm text-navy/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="block font-semibold text-navy">{t.name}</span>
                <span className="text-navy/60">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-16 border-t border-surface-muted pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-navy/50">
            Marcas e certificações
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {BRANDS.map((brand) => (
              <span key={brand} className="text-lg font-heading font-bold text-navy/40">
                {brand}
              </span>
            ))}
            <span className="rounded-full border border-navy/15 px-3 py-1 text-xs font-semibold text-navy/60">
              CREA/ART
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
