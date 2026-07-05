import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://www.solport.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Solport | Segurança Eletrônica e Eletromobilidade para Condomínios em SP",
  description:
    "Portaria Virtual, CFTV, Controle de Acesso, Alarme e Eletropostos para condomínios em todo o estado de São Paulo. Agende seu Diagnóstico 360°.",
  openGraph: {
    title: "Solport | Segurança inteligente e eletromobilidade para condomínios de São Paulo",
    description:
      "Portaria Virtual, CFTV, Controle de Acesso, Alarme e Eletropostos — com implantação rápida em todo o estado.",
    url: siteUrl,
    siteName: "Solport",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solport | Segurança inteligente e eletromobilidade para condomínios de São Paulo",
    description:
      "Portaria Virtual, CFTV, Controle de Acesso, Alarme e Eletropostos — com implantação rápida em todo o estado.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-white text-navy`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsentBanner />
        <AnalyticsScripts />
        <Analytics />
      </body>
    </html>
  );
}
