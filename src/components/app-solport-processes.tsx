"use client";

import { motion } from "framer-motion";
import { Package, Megaphone, MessageSquarePlus, ClipboardCheck } from "lucide-react";

const PROCESSES = [
  {
    icon: Package,
    title: "Controle de Entrega",
    text: "Registro e notificação de encomendas recebidas na portaria.",
  },
  {
    icon: Megaphone,
    title: "Mural de Avisos",
    text: "Comunicados do síndico e da administradora direto no app dos moradores.",
  },
  {
    icon: MessageSquarePlus,
    title: "Abertura de Pedidos",
    text: "Canal para solicitações e chamados dos moradores, com acompanhamento.",
  },
  {
    icon: ClipboardCheck,
    title: "Relatório de Turno",
    text: "Histórico e passagem de plantão entre porteiros, com registro de ocorrências.",
  },
];

export function AppSolportProcesses() {
  return (
    <section className="bg-surface-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-neon-cyan/40 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy"
        >
          Recursos do App Solport
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 max-w-2xl font-heading text-3xl font-extrabold text-navy sm:text-4xl"
        >
          Recursos que organizam os processos
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESSES.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-card border border-surface-muted bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-chip bg-navy text-neon-cyan">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{p.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 max-w-2xl text-sm text-navy/70"
        >
          O App Solport pode ser aplicado em diversos ambientes — condomínios residenciais e
          comerciais, prédios corporativos e comércios — em todo o estado de São Paulo. Pode ser
          operado pela equipe responsável pela portaria ou, em modelos de portaria autônoma,
          diretamente pelos próprios moradores e usuários.
        </motion.p>
      </div>
    </section>
  );
}
