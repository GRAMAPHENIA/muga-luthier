import { absoluteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/instrumentos",
  "/instrumentos/buconero",
  "/instrumentos/velluto",
  "/instrumentos/eira",
  "/galeria",
  "/reparaciones",
  "/taller",
  "/acerca-de",
];

export default function sitemap() {
  const now = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
