"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Conteúdo de exemplo — substituir pelos cases reais assim que o cliente
// enviar dados e autorização de uso (RPD Seção 8 e 14).
const CASES = [
  {
    label: "Case de segurança",
    title: "Condomínio Jardins do Vale — Portaria Virtual 24/7",
    challenge:
      "Portaria presencial com custo elevado e registros de ocorrência inconsistentes entre turnos.",
    solution:
      "Migração para Portaria Virtual Integral 24/7, com CFTV e controle de acesso integrados.",
    metrics: [
      "-38% custo mensal de portaria",
      "0 ocorrências não registradas em 12 meses",
      "SLA médio de resposta: 4min",
    ],
  },
  {
    label: "Case de eletromobilidade",
    title: "Residencial Alto da Serra — Eletropostos em garagem",
    challenge:
      "Moradores pedindo carregadores próprios sem saber se a carga elétrica disponível suportava a demanda.",
    solution:
      "Análise de carga, projeto de infraestrutura com ART e instalação com billing individualizado por unidade.",
    metrics: ["18 vagas com carregador instalado", "Implantação em 21 dias", "Payback estimado em 14 meses"],
  },
];

// Conteúdo de exemplo — substituir por depoimentos reais (nome, condomínio, cargo)
const TESTIMONIALS = [
  {
    quote: "A transição para a portaria virtual foi simples e o suporte é rápido sempre que precisamos.",
    name: "[Nome do síndico]",
    role: "Síndico — [Nome do condomínio]",
  },
  {
    quote: "Como administradora de múltiplos condomínios, o SLA documentado facilitou muito nossa gestão.",
    name: "[Nome da administradora]",
    role: "Administradora de condomínios",
  },
  {
    quote: "A instalação dos eletropostos foi rápida e o laudo técnico deu segurança para aprovar em assembleia.",
    name: "[Nome do síndico profissional]",
    role: "Síndico profissional",
  },
];

// Conteúdo de exemplo — substituir pelas marcas realmente trabalhadas
const BRANDS = ["Intelbras", "Hikvision", "Control iD"];

export function CasesContent() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-card border border-surface-muted bg-surface-light p-7"
            >
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${
                  i === 1 ? "text-neon-magenta" : "text-brand-red"
                }`}
              >
                {c.label}
              </span>
              <h2 className="mt-2 font-heading text-xl font-bold text-navy">{c.title}</h2>

              <div className="mt-4 space-y-3 text-sm text-navy/75">
                <p>
                  <span className="font-semibold text-navy">Desafio: </span>
                  {c.challenge}
                </p>
                <p>
                  <span className="font-semibold text-navy">Solução: </span>
                  {c.solution}
                </p>
              </div>

              <ul className="mt-5 space-y-2 border-t border-surface-muted pt-5">
                {c.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm font-medium text-navy/85">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.article>
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
