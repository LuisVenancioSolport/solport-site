"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { buildFaqJsonLd } from "@/lib/faq-schema";

export interface FAQItem {
  question: string;
  answer: string;
}

const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como a Solport trata os dados pessoais coletados no site (LGPD)?",
    answer:
      "Os dados enviados nos formulários são armazenados com controle de acesso restrito e usados apenas para contato comercial. Consulte nossa Política de Privacidade para detalhes sobre retenção e exclusão de dados.",
  },
  {
    question: "A portaria virtual é realmente segura?",
    answer:
      "Sim. Combinamos monitoramento (humano ou tecnológico, conforme a modalidade escolhida) com CFTV, controle de acesso e SLA de resposta documentado.",
  },
  {
    question: "Qual o payback de um eletroposto instalado no condomínio?",
    answer:
      "Varia conforme número de vagas, uso e modelo de billing. Nossa análise de carga e viabilidade técnica estima prazo e custo antes da instalação.",
  },
  {
    question: "Como funciona a manutenção dos equipamentos?",
    answer:
      "Manutenção preventiva e corretiva incluídas no contrato de SLA, com suporte 24/7 para chamados críticos.",
  },
  {
    question: "É possível integrar com sistemas que já usamos no condomínio?",
    answer:
      "Sim, avaliamos a infraestrutura existente durante o Diagnóstico 360° e propomos a integração possível com câmeras, interfones e sistemas de gestão já instalados.",
  },
];

interface FAQProps {
  title?: string;
  items?: FAQItem[];
}

export function FAQ({ title = "Perguntas frequentes", items = DEFAULT_FAQ_ITEMS }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface-light py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(items)) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-extrabold text-navy sm:text-4xl"
        >
          {title}
        </motion.h2>

        <div className="mt-8 divide-y divide-surface-muted overflow-hidden rounded-card border border-surface-muted bg-white">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-base font-semibold text-navy">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-red transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden px-6 pb-5 text-sm text-navy/70"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
