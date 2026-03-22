import React from "react";
import GuitarItem from "@/components/GuitarItem";
import PageIntroHeader from "@/components/PageIntroHeader";
import data from "@/data/data.json";
import { createPageMetadata } from "@/lib/seo";

const guitarCards = data.map(({ id, titulo, foto_de_portada, galeria }) => {
  const preferredCover = id === "16" ? galeria?.[1]?.url : galeria?.[0]?.url;

  return {
    id,
    titulo,
    foto_de_portada: preferredCover || foto_de_portada,
  };
});

const mdFillerCount = (2 - (guitarCards.length % 2)) % 2;
const xlFillerCount = (3 - (guitarCards.length % 3)) % 3;

export const metadata = createPageMetadata({
  title: "Galería de fotos",
  description:
    "Galería de instrumentos terminados con fotos en detalle de modelos de luthería artesanal.",
  path: "/galeria",
  keywords: ["galería de guitarras", "fotos de instrumentos", "luthería"],
});

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-1 my-2 seamless-grid seamless-grid-no-top">
        <h1 className="sr-only">Galería</h1>
        <PageIntroHeader
          kicker="Colección"
          title="Galería de modelos"
          description="Abrí cada ficha y revisá imágenes en detalle de los distintos modelos del taller."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[var(--border)]">
          {guitarCards.length === 0 ? (
            <p className="col-span-1 md:col-span-2 xl:col-span-3 bg-[var(--panel)] px-6 py-8 text-[var(--muted)]">
              No hay modelos para mostrar por ahora.
            </p>
          ) : (
            <>
              {guitarCards.map((guitar, index) => (
                <GuitarItem key={guitar.id} guitar={guitar} index={index} />
              ))}

              {mdFillerCount > 0 ? (
                <div
                  aria-hidden="true"
                  className="hidden md:block xl:hidden h-[230px] md:h-[250px] bg-[var(--panel)] dot-grid-surface"
                />
              ) : null}

              {xlFillerCount > 0 ? (
                <div
                  aria-hidden="true"
                  className="hidden xl:block h-[230px] md:h-[250px] bg-[var(--panel)] dot-grid-surface"
                  style={{ gridColumn: `span ${xlFillerCount} / span ${xlFillerCount}` }}
                />
              ) : null}
            </>
          )}
        </div>
      </section>
    </>
  );
}
