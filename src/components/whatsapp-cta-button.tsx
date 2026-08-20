"use client";

import { useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { WhatsAppLeadModal } from "@/components/whatsapp-lead-modal";
import type { WhatsAppIntent } from "@/lib/whatsapp";

interface WhatsAppCTAButtonProps extends Omit<HTMLMotionProps<"button">, "onClick" | "type"> {
  intent: WhatsAppIntent;
  origin: string;
}

export function WhatsAppCTAButton({ intent, origin, children, ...motionProps }: WhatsAppCTAButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button type="button" onClick={() => setOpen(true)} {...motionProps}>
        {children}
      </motion.button>
      {open && <WhatsAppLeadModal intent={intent} origin={origin} onClose={() => setOpen(false)} />}
    </>
  );
}
