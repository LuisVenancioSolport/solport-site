"use client";

import { motion } from "framer-motion";
import { Gauge, FileCheck2, Zap, MessageCircle, Building2, Home as HomeIcon } from "lucide-react";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const SERVICES = [
  {
    icon: Gauge,
    title: "Análise de carga",
    text: "Avaliamos a carga elétrica disponível no condomínio para dimensionar quantos pontos de recarga cabem com segurança.",
  },
  {
    icon: FileCheck2,
    title: "Infraestrutura",
    text: "Projeto de infraestrutura elétrica para eletropostos, com Anotação de Responsabilidade Técnica (ART).",
  },
  {
    icon: Zap,
    title: "Instalação",
    text: "Execução em vaga privada ou em áreas comuns, com billing individualizado por unidade.",
  },
];

export function ViabilityStudy() {
  return (
    <section className="bg-surface-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-extrabold text-navy sm:text-4xl"
            >
              Estudo de viabilidade técnica
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-xl text-navy/70"
            >
              Avaliamos número de unidades, vagas disponíveis, carga elétrica e
              cabeamento existente para indicar o melhor projeto de eletropostos
              para o seu condomínio.
            </motion.p>
          </div>

          {/*
            Nota: RPD Seção 13.1 prevê um formulário guiado (unidades, vagas,
            carga disponível, cabeamento) integrado ao Supabase — fora do escopo
            desta rodada (só páginas internas). Por ora, a coleta é feita via
            WhatsApp com a mensagem pré-preenchida do Apêndice B.
          */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-card border border-neon-magenta/30 bg-white p-6 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-neon-magenta">
              Em breve, formulário guiado no site
            </p>
            <p className="mt-2 text-sm text-navy/70">
              Enquanto isso, fale direto com nosso time e receba a análise de
              carga e viabilidade técnica pelo WhatsApp.
            </p>
            <a
              href={buildWhatsAppLink(WHATSAPP_MESSAGES.eletropostos)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-chip bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-glow-magenta"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Solicitar pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ThreeServices() {
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
          Do diagnóstico à instalação
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-card border border-surface-muted bg-surface-light p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-chip bg-navy text-neon-magenta">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ComercialResidencial() {
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
          Residencial ou comercial, o projeto se adapta
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-card border border-surface-muted bg-white p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-chip bg-navy text-neon-magenta">
              <HomeIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-navy">Condomínio residencial</h3>
            <p className="mt-2 text-sm text-navy/70">
              Instalação na vaga privada do morador, com billing individualizado
              por unidade e projeto apresentável em assembleia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-card border border-surface-muted bg-white p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-chip bg-navy text-neon-magenta">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold text-navy">Condomínio comercial</h3>
            <p className="mt-2 text-sm text-navy/70">
              Eletropostos em áreas comuns e compartilhadas, atendendo frota
              própria, visitantes e colaboradores.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function NormasIntegracao() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-navy/70"
        >
          Projetos seguem as normas técnicas da ABNT aplicáveis a instalações
          elétricas de recarga veicular, com Anotação de Responsabilidade
          Técnica (ART) emitida por engenheiro responsável — segurança e
          conformidade documentadas do início ao fim.
        </motion.p>
      </div>
    </section>
  );
}
