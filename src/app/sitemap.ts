import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";

const SITE_URL = "https://www.solport.com.br";

const ROUTES = [
  "",
  "/eletromobilidade",
  "/app-solport",
  "/solucoes/portaria-virtual",
  "/solucoes/cftv",
  "/solucoes/controle-de-acesso",
  "/solucoes/alarmes",
  "/solucoes/watching-u",
  "/diagnostico",
  "/agendar",
  "/privacidade",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
