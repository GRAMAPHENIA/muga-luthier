const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://dicorato-luthier.com").replace(/\/$/, "");

export const siteConfig = {
  url: SITE_URL,
  name: "Di Corato Luthier",
  locale: "es_AR",
  title: "Di Corato Luthier | Instrumentos de cuerda de autor",
  description:
    "Luthería artesanal en Argentina: instrumentos de cuerda de autor, reparaciones y calibraciones profesionales.",
  defaultOgImage: "/icon.png",
};

export const absoluteUrl = (path = "/") => new URL(path, `${siteConfig.url}/`).toString();

export function createPageMetadata({ title, description, path, keywords = [] }) {
  const pageTitle = title || siteConfig.title;
  const socialTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const canonical = absoluteUrl(path || "/");

  return {
    title: pageTitle,
    description: pageDescription,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: socialTitle,
      description: pageDescription,
      url: canonical,
      images: [
        {
          url: absoluteUrl(siteConfig.defaultOgImage),
          width: 512,
          height: 512,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: pageDescription,
      images: [absoluteUrl(siteConfig.defaultOgImage)],
    },
  };
}
