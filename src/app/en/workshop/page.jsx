import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";
import tallerDos from "/public/taller/tallerdos.webp";
import tallerTres from "/public/taller/tallertres.webp";
import tallerCuatro from "/public/taller/tallercuatro.webp";
import tallerCinco from "/public/taller/tallercinco.webp";
import tallerSeis from "/public/taller/tallerseis.webp";
import tallerSiete from "/public/taller/tallersiete.webp";
import tallerOcho from "/public/taller/tallerocho.webp";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Workshop",
  description:
    "Get to know the workshop, tools, and handcrafted workflow for instrument building and repair.",
  path: "/en/workshop",
  locale: "en",
  alternates: {
    es: "/taller",
    en: "/en/workshop",
  },
  keywords: ["lutherie workshop", "handcrafted process", "guitar making"],
});

const CARD_CLASS = "group relative overflow-hidden bg-[var(--panel)]";
const CARD_IMAGE_CLASS =
  "object-cover grayscale transition duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.06]";

export default function WorkshopEn() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-6 seamless-grid">
        <h1 className="sr-only">Workshop</h1>
        <PageIntroHeader
          locale="en"
          kicker="Section"
          title="Workshop"
          description="See tools, workspace, and real scenes from the daily handcrafted process."
        />
        <section className="col-span-6 bg-[var(--panel)] border border-[var(--border)] p-0">
          <div className="grid grid-cols-12 gap-px bg-[var(--border)]">
            <aside className="hidden lg:block col-span-1 bg-[var(--panel)] dot-grid-surface" aria-hidden="true" />

            <div className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 lg:auto-rows-[180px] gap-px bg-[var(--border)]">
              <figure className={`${CARD_CLASS} h-[320px] md:h-[380px] lg:h-auto lg:col-span-6 lg:row-span-2`}>
                <Image
                  src={tallerDos}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 62vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-center`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
              </figure>

              <figure className={`${CARD_CLASS} h-[220px] md:h-[250px] lg:h-auto lg:col-span-2`}>
                <Image
                  src={tallerTres}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-center`}
                />
              </figure>

              <figure className={`${CARD_CLASS} h-[220px] md:h-[250px] lg:h-auto lg:col-span-2`}>
                <Image
                  src={tallerCuatro}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-center`}
                />
              </figure>

              <figure className={`${CARD_CLASS} h-[220px] md:h-[250px] lg:h-auto lg:col-span-2`}>
                <Image
                  src={tallerCinco}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-center`}
                />
              </figure>

              <figure className={`${CARD_CLASS} h-[220px] md:h-[250px] lg:h-auto lg:col-span-2`}>
                <Image
                  src={tallerSeis}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-center`}
                />
              </figure>

              <figure className={`${CARD_CLASS} h-[220px] md:h-[250px] lg:h-auto lg:col-span-3`}>
                <Image
                  src={tallerSiete}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-center`}
                />
              </figure>

              <figure className={`${CARD_CLASS} h-[240px] md:h-[300px] lg:h-auto lg:col-span-7`}>
                <Image
                  src={tallerOcho}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 70vw, (min-width: 768px) 100vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-center`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
              </figure>
            </div>

            <aside className="hidden lg:block col-span-1 bg-[var(--panel)] dot-grid-surface" aria-hidden="true" />
          </div>
        </section>
      </section>
    </>
  );
}
