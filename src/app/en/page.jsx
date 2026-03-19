import Header from "@/components/Header.jsx";
import Body from "@/components/Body.jsx";
import MagicRibbon from "@/components/MagicRibbon.jsx";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo";

import Instrumentos from "@/components/Instrumentos.jsx";
import Reparaciones from "@/components/Reparaciones.jsx";
import Galeria from "@/components/Galeria.jsx";
import HeaderTestimonios from "@/components/HeaderTestimonios.jsx";
import Comentarios from "@/components/Comentarios.jsx";
import Contactos from "@/components/Contactos.jsx";
import Footer from "@/components/Footer.jsx";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "Artisanal lutherie workshop: author instruments, repairs, and professional setups for guitars and basses.",
  path: "/en",
  locale: "en",
  alternates: {
    es: "/",
    en: "/en",
  },
  keywords: [
    "luthier",
    "artisanal lutherie",
    "custom guitars",
    "guitar repair",
    "guitar setup",
  ],
});

export default function HomeEn() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/en"),
    inLanguage: "en-US",
  };

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: absoluteUrl("/en"),
    email: "mailto:dicoratoluthier@gmail.com",
    sameAs: [
      "https://www.instagram.com/di_corato_luthier/",
      "https://www.facebook.com/dicorato.luthier",
      "https://www.youtube.com/@dicorato.luthier",
    ],
    areaServed: "AR",
    image: absoluteUrl(siteConfig.defaultOgImage),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Header locale="en" />
      <Body locale="en" />
      <MagicRibbon locale="en" />
      <Instrumentos locale="en" />
      <Reparaciones locale="en" />
      <Galeria locale="en" />
      <HeaderTestimonios locale="en" />
      <Comentarios />
      <Contactos locale="en" />
      <Footer locale="en" />
    </>
  );
}
