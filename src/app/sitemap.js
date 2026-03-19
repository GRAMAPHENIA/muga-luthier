import { absoluteUrl } from "@/lib/seo";

const routes = [
  { es: "/", en: "/en" },
  { es: "/instrumentos", en: "/en/instruments" },
  { es: "/instrumentos/buconero", en: "/en/instruments/buconero" },
  { es: "/instrumentos/velluto", en: "/en/instruments/velluto" },
  { es: "/instrumentos/eira", en: "/en/instruments/eira" },
  { es: "/galeria", en: "/en/gallery" },
  { es: "/reparaciones", en: "/en/repairs" },
  { es: "/taller", en: "/en/workshop" },
  { es: "/acerca-de", en: "/en/about" },
];

export default function sitemap() {
  const now = new Date();

  return routes.flatMap((route) => {
    const alternates = {
      languages: {
        es: absoluteUrl(route.es),
        en: absoluteUrl(route.en),
      },
    };

    const isHome = route.es === "/";

    return [
      {
        url: absoluteUrl(route.es),
        lastModified: now,
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 1 : 0.8,
        alternates,
      },
      {
        url: absoluteUrl(route.en),
        lastModified: now,
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 0.9 : 0.7,
        alternates,
      },
    ];
  });
}
