"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

const PARTNERS = [
  {
    icon: Building2,
    name: "Smart Sampa",
    text: "Programa da Prefeitura de São Paulo que integra câmeras públicas e privadas — incluindo condomínios — a uma central municipal de monitoramento, hoje uma das maiores redes de videomonitoramento da América Latina.",
  },
  {
    icon: ShieldCheck,
    name: "Muralha Paulista",
    text: "Sistema do Governo do Estado de São Paulo que conecta câmeras, leitores de placas e reconhecimento facial diretamente aos centros de comando da Polícia e da GCM, com cobertura em mais de 300 municípios.",
  },
];

export function WatchingUPartnership() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-neon-cyan/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-neon-cyan"
        >
          Parceria oficial
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 max-w-2xl font-heading text-3xl font-extrabold text-white sm:text-4xl"
        >
          Conectado ao Smart Sampa e à Muralha Paulista
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/75"
        >
          O Watching U não fica isolado no seu muro: ele conecta condomínios, escolas, comércios e
          residências às duas maiores redes de videomonitoramento público do estado de São Paulo.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PARTNERS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-card border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-chip bg-navy text-neon-cyan">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-white/70">{p.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 max-w-2xl text-sm text-white/70"
        >
          Com o Watching U, as imagens captadas pelo totem podem ser compartilhadas com essas
          centrais — ampliando a cobertura de segurança da sua rua e aumentando a chance de
          resposta rápida em caso de ocorrência.
        </motion.p>

        <p className="mt-4 max-w-2xl text-xs text-white/45">
          *A integração com Smart Sampa e Muralha Paulista é feita mediante adesão formal ao
          programa público, conforme critérios de cada iniciativa. A Solport auxilia o condomínio
          em todo o processo de cadastro.
        </p>

        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          href={buildWhatsAppLink(WHATSAPP_MESSAGES.smartSampa)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { origem: "watching_u_smart_sampa" })}
          className="mt-8 inline-flex items-center gap-2 rounded-chip bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:shadow-glow-cyan"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Quero integrar meu condomínio ao Smart Sampa / Muralha Paulista
        </motion.a>
      </div>
    </section>
  );
}
