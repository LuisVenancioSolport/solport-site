"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface AIExtrasGridProps {
  title?: string;
  items: string[];
}

export function AIExtrasGrid({
  title = "Soluções extras de Inteligência Artificial",
  items,
}: AIExtrasGridProps) {
  return (
    <section className="bg-surface-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-extrabold text-navy sm:text-4xl"
        >
          {title}
        </motion.h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="flex items-center gap-3 rounded-card border border-surface-muted bg-white p-5"
            >
              <Sparkles className="h-4 w-4 shrink-0 text-neon-cyan" aria-hidden="true" />
              <h3 className="font-heading text-base font-bold text-navy">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
