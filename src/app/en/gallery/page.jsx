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
      <section className="grid grid-cols-1 my-2 seamless-grid seamless-grid-no-top">
        <h1 className="sr-only">Gallery</h1>
        <PageIntroHeader
          locale="en"
          kicker="Collection"
          title="Model Gallery"
          description="Open each card and review detailed images of the workshop's different models."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[var(--border)]">
          {guitarCards.length === 0 ? (
            <p className="col-span-1 md:col-span-2 xl:col-span-3 bg-[var(--panel)] px-6 py-8 text-[var(--muted)]">
              There are no models to display right now.
            </p>
          ) : (
            <>
              {guitarCards.map((guitar, index) => (
                <GuitarItem key={guitar.id} guitar={guitar} locale="en" index={index} />
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
