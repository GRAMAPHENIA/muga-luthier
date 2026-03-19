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
  title: "Photo Gallery",
  description:
    "Gallery of finished instruments with detailed photos of handcrafted lutherie models.",
  path: "/en/gallery",
  locale: "en",
  alternates: {
    es: "/galeria",
    en: "/en/gallery",
  },
  keywords: ["guitar gallery", "instrument photos", "lutherie"],
});

export default function GalleryPageEn() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 my-2 seamless-grid seamless-grid-no-top">
        <h1 className="sr-only">Gallery</h1>
        <PageIntroHeader
          locale="en"
          kicker="Collection"
          title="Model Gallery"
          description="Open each card and review detailed images of the workshop's different models."
        />
        {guitarCards.length === 0 ? (
          <p className="col-span-1 md:col-span-2 bg-[var(--panel)] px-6 py-8 text-[var(--muted)]">
            There are no models to display right now.
          </p>
        ) : (
          guitarCards.map((guitar) => <GuitarItem key={guitar.id} guitar={guitar} locale="en" />)
        )}
      </section>
    </>
  );
}
