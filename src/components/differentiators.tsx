"use client";

import { motion } from "framer-motion";
import { Clock, FileBadge2, ShieldCheck, Timer, MapPinned } from "lucide-react";

const ITEMS = [
  { icon: Clock, text: "Suporte 24/7" },
  { icon: ShieldCheck, text: "SLA documentado" },
  { icon: FileBadge2, text: "CREA/ART para projetos de eletropostos" },
  { icon: Timer, text: "Tempo de implantação ágil" },
  { icon: MapPinned, text: "Atuação em todo o estado de São Paulo" },
];

export function Differentiators() {
  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-start gap-3"
              >
                <Icon className="h-6 w-6 text-neon-cyan" aria-hidden="true" />
                <span className="text-sm font-medium text-white/85">{item.text}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
