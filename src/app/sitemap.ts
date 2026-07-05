import type { MetadataRoute } from "next";

const SITE_URL = "https://www.solport.com.br";

const ROUTES = [
  "",
  "/eletromobilidade",
  "/solucoes/portaria-virtual",
  "/solucoes/cftv",
  "/solucoes/controle-de-acesso",
  "/solucoes/alarmes",
  "/diagnostico",
  "/agendar",
  "/cases",
  "/privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
