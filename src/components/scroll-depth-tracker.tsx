"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

interface ScrollDepthTrackerProps {
  threshold?: number;
  eventName?: string;
}

export function ScrollDepthTracker({ threshold = 0.75, eventName = "scroll_75" }: ScrollDepthTrackerProps) {
  const firedRef = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (firedRef.current) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= threshold) {
        firedRef.current = true;
        trackEvent(eventName);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, eventName]);

  return null;
}
