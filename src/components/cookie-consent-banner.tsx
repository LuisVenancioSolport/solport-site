"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "solport_cookie_consent";
export const COOKIE_CONSENT_EVENT = "solport:cookie-consent-changed";

export type CookieConsent = "accepted" | "rejected";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY) as CookieConsent | null;
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) setVisible(true);
  }, []);

  function decide(value: CookieConsent) {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-surface-muted bg-white/95 px-4 py-4 shadow-soft backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-navy/75">
          Usamos cookies para analisar o tráfego do site (Google Analytics e Meta Pixel). Você pode aceitar ou
          recusar — isso não afeta o envio dos formulários. Veja nossa{" "}
          <a href="/privacidade" className="font-medium text-brand-red underline underline-offset-2">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-chip border border-navy/15 px-4 py-2 text-sm font-semibold text-navy transition hover:border-neon-cyan"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-chip bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow-cyan"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
