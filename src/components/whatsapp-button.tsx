"use client";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WhatsAppCTAButton } from "@/components/whatsapp-cta-button";

export function WhatsAppButton() {
  return (
    <WhatsAppCTAButton
      intent="diagnostico"
      origin="botao_flutuante"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      aria-label="Falar com a Solport no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:shadow-glow-cyan sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </WhatsAppCTAButton>
  );
}
