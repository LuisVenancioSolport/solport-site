declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", name, params);
  }

  if (window.fbq) {
    window.fbq("trackCustom", name, params);
  }

  if (!window.gtag && !window.fbq) {
    console.debug(`[analytics] ${name}`, params ?? {});
  }
}
