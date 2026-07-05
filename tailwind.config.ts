import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          red: "#FF0000",
        },
        navy: "#18093A",
        neon: {
          cyan: "#00E5FF",
          magenta: "#FF2D9E",
        },
        surface: {
          light: "#F1F2F4",
          muted: "#E8E8EB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        chip: "12px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(24, 9, 58, 0.08)",
        "glow-cyan": "0 0 0 1px rgba(0, 229, 255, 0.4), 0 0 24px rgba(0, 229, 255, 0.35)",
        "glow-magenta": "0 0 0 1px rgba(255, 45, 158, 0.4), 0 0 24px rgba(255, 45, 158, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(0,229,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.18) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
