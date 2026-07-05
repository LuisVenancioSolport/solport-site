"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Gauge,
  ShieldAlert,
  Camera,
  Fingerprint,
  BellRing,
} from "lucide-react";

const CHIPS = [
  { label: "Eletropostos", href: "/eletromobilidade", icon: Zap, accent: "magenta" as const },
  { label: "Portaria Virtual", href: "/solucoes/portaria-virtual", icon: ShieldCheck, accent: "cyan" as const },
  { label: "Análise de Carga", href: "/eletromobilidade", icon: Gauge, accent: "magenta" as const },
  { label: "Análise de Risco", href: "#diagnostico", icon: ShieldAlert, accent: "cyan" as const },
  { label: "CFTV", href: "/solucoes/cftv", icon: Camera, accent: "cyan" as const },
  { label: "Controle de Acesso", href: "/solucoes/controle-de-acesso", icon: Fingerprint, accent: "cyan" as const },
  { label: "Alarme", href: "/solucoes/alarmes", icon: BellRing, accent: "cyan" as const },
];

export function QuickChips() {
  return (
    <section className="border-b border-surface-muted bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap gap-3">
          {CHIPS.map((chip, i) => {
            const Icon = chip.icon;
            const glow = chip.accent === "magenta" ? "hover:shadow-glow-magenta hover:border-neon-magenta/60" : "hover:shadow-glow-cyan hover:border-neon-cyan/60";
            return (
              <motion.li
                key={chip.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <a
                  href={chip.href}
                  className={`inline-flex items-center gap-2 rounded-chip border border-surface-muted bg-surface-light px-4 py-2 text-sm font-medium text-navy transition ${glow}`}
                >
                  <Icon className="h-4 w-4 text-brand-red" aria-hidden="true" />
                  {chip.label}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
