import React from "react";
import GuitarItem from "@/components/GuitarItem";
import PageIntroHeader from "@/components/PageIntroHeader";
import data from "@/data/data.json";
import { createPageMetadata } from "@/lib/seo";

const guitarCards = data.map(({ id, titulo, foto_de_portada }) => ({
  id,
  titulo,
  foto_de_portada,
}));

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
      <section className="grid grid-cols-1 md:grid-cols-2 my-2 seamless-grid seamless-grid-no-top">
        <h1 className="sr-only">Galería</h1>
        <PageIntroHeader
          kicker="Colección"
          title="Galería de modelos"
          description="Abrí cada ficha y revisá imágenes en detalle de los distintos modelos del taller."
        />
        {guitarCards.length === 0 ? (
          <p className="col-span-1 md:col-span-2 bg-[var(--panel)] px-6 py-8 text-[var(--muted)]">
            No hay modelos para mostrar por ahora.
          </p>
        ) : (
          guitarCards.map((guitar) => <GuitarItem key={guitar.id} guitar={guitar} />)
        )}
      </section>
    </>
  );
}
