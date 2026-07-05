"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Camera, Fingerprint, BellRing, Zap, type LucideIcon } from "lucide-react";

interface ServiceCallout {
  icon: LucideIcon;
  label: string;
  detail: string;
  accent: "cyan" | "magenta";
  position: string;
}

const SERVICES: ServiceCallout[] = [
  {
    icon: ShieldCheck,
    label: "Portaria Virtual",
    detail: "Monitoramento contínuo 24/7",
    accent: "cyan",
    position: "left-[2%] top-[10%] sm:left-[-6%]",
  },
  {
    icon: Camera,
    label: "CFTV",
    detail: "Imagens nítidas e auditoria",
    accent: "cyan",
    position: "right-[2%] top-[22%] sm:right-[-8%]",
  },
  {
    icon: Fingerprint,
    label: "Controle de Acesso",
    detail: "Biometria e QR Code",
    accent: "cyan",
    position: "left-[0%] top-[48%] sm:left-[-10%]",
  },
  {
    icon: BellRing,
    label: "Alarme e Vídeo Alarme",
    detail: "Acionamento remoto e resposta rápida",
    accent: "cyan",
    position: "right-[0%] top-[62%] sm:right-[-6%]",
  },
  {
    icon: Zap,
    label: "Eletromobilidade",
    detail: "Análise de carga e eletropostos",
    accent: "magenta",
    position: "left-[6%] top-[82%] sm:left-[-2%]",
  },
];

const ACCENT_CLASSES = {
  cyan: {
    border: "border-neon-cyan/50",
    text: "text-neon-cyan",
    glow: "shadow-glow-cyan",
    dot: "bg-neon-cyan",
  },
  magenta: {
    border: "border-neon-magenta/50",
    text: "text-neon-magenta",
    glow: "shadow-glow-magenta",
    dot: "bg-neon-magenta",
  },
} as const;

function BuildingIllustration() {
  const windowSeed = [
    2, 5, 9, 13, 18, 21, 26, 30, 3, 11, 16, 24, 29, 6, 14, 19, 27,
  ];

  return (
    <svg viewBox="0 0 320 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="towerA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241134" />
          <stop offset="100%" stopColor="#18093A" />
        </linearGradient>
        <linearGradient id="towerB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1040" />
          <stop offset="100%" stopColor="#140828" />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="372" rx="130" ry="14" fill="#00E5FF" opacity="0.08" />

      <rect x="205" y="150" width="70" height="205" rx="6" fill="url(#towerB)" stroke="#FF2D9E" strokeOpacity="0.25" />
      <rect x="55" y="120" width="60" height="235" rx="6" fill="url(#towerB)" stroke="#00E5FF" strokeOpacity="0.25" />
      <rect x="120" y="55" width="100" height="300" rx="8" fill="url(#towerA)" stroke="#00E5FF" strokeOpacity="0.35" />

      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => {
          const idx = row * 4 + col;
          const lit = windowSeed.includes(idx);
          const accent = idx % 7 === 0 ? "#FF2D9E" : "#00E5FF";
          return (
            <motion.rect
              key={`a-${row}-${col}`}
              x={134 + col * 21}
              y={75 + row * 33}
              width="12"
              height="18"
              rx="1.5"
              fill={lit ? accent : "#ffffff"}
              opacity={lit ? 0.5 : 0.08}
              animate={lit ? { opacity: [0.25, 0.65, 0.25] } : undefined}
              transition={lit ? { duration: 2.6 + (idx % 3), repeat: Infinity, ease: "easeInOut" } : undefined}
            />
          );
        })
      )}

      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 2 }).map((_, col) => (
          <rect
            key={`b-${row}-${col}`}
            x={65 + col * 26}
            y={140 + row * 33}
            width="12"
            height="18"
            rx="1.5"
            fill="#ffffff"
            opacity={(row + col) % 3 === 0 ? 0.3 : 0.08}
          />
        ))
      )}

      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 2 }).map((_, col) => (
          <rect
            key={`c-${row}-${col}`}
            x={215 + col * 26}
            y={168 + row * 33}
            width="12"
            height="18"
            rx="1.5"
            fill="#ffffff"
            opacity={(row + col) % 4 === 0 ? 0.3 : 0.08}
          />
        ))
      )}
    </svg>
  );
}

export function HeroInfographic() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SERVICES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
      <BuildingIllustration />

      <AnimatePresence mode="wait">
        {SERVICES.map((service, i) => {
          if (i !== activeIndex) return null;
          const Icon = service.icon;
          const a = ACCENT_CLASSES[service.accent];
          return (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -8 }}
              transition={{ duration: 0.35 }}
              className={`absolute z-10 w-48 rounded-chip border ${a.border} bg-navy/90 p-3 backdrop-blur-sm ${a.glow} ${service.position}`}
            >
              <div className="flex items-center gap-2">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 ${a.text}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-bold text-white">{service.label}</span>
              </div>
              <p className="mt-1.5 text-xs text-white/70">{service.detail}</p>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {SERVICES.map((service, i) => (
          <span
            key={service.label}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? `w-5 ${ACCENT_CLASSES[service.accent].dot}` : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
