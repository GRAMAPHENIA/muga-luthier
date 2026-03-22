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
  title: "Inicio",
  description:
    "Taller de luthería artesanal: instrumentos de autor, reparaciones y calibraciones para guitarras y bajos.",
  path: "/",
  keywords: [
    "luthier",
    "luthería artesanal",
    "guitarras de autor",
    "reparación de guitarras",
    "calibración de guitarras",
  ],
});

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "es-AR",
  };

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
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
      <Header />
      <Body />
      <MagicRibbon />
      <Galeria />
      <Reparaciones />
      <Instrumentos />
      <HeaderTestimonios />
      <Comentarios />
      <Contactos />
      <Footer />
    </>
  );
}
