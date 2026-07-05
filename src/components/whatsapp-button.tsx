"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      href={buildWhatsAppLink(WHATSAPP_MESSAGES.diagnostico)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { origem: "botao_flutuante" })}
      aria-label="Falar com a Solport no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:shadow-glow-cyan sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
