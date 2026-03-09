import { siteConfig } from "@/lib/seo";

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: "Di Corato",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#040405",
    theme_color: "#040405",
    lang: "es-AR",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
