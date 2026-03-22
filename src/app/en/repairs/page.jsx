import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";

import uno from "@/public/reparaciones/1.webp";
import tres from "@/public/reparaciones/3.webp";
import cinco from "@/public/reparaciones/5.webp";
import siete from "@/public/reparaciones/7.webp";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Repairs",
  description:
    "Repair, maintenance, and setup services for guitars and basses in a specialized workshop.",
  path: "/en/repairs",
  locale: "en",
  alternates: {
    es: "/reparaciones",
    en: "/en/repairs",
  },
  keywords: ["guitar repair", "instrument maintenance", "setup"],
});

const CARD_CLASS = "group relative overflow-hidden bg-[var(--panel)]";
const CARD_IMAGE_CLASS =
  "object-cover grayscale transition duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.06]";
const CARD_IMAGE_FIXED_SCALE_CLASS =
  "object-cover grayscale transition duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.92]";

export default function RepairsEn() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 lg:grid lg:grid-cols-6 seamless-grid object-contain">
        <h1 className="sr-only">Repairs</h1>
        <PageIntroHeader
          locale="en"
          kicker="Section"
          title="Repairs"
          description="Review maintenance, restoration, and setup work completed in the workshop."
        />
        <section className="col-span-6 bg-[var(--panel)] border border-[var(--border)] p-0">
          <div className="grid grid-cols-12 gap-px bg-[var(--border)]">
            <aside className="hidden lg:block col-span-1 bg-[var(--panel)] dot-grid-surface" aria-hidden="true" />

            <div className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 lg:auto-rows-[220px] gap-px bg-[var(--border)]">
              <figure className={`${CARD_CLASS} h-[380px] md:h-[480px] lg:h-auto lg:col-span-3 lg:row-span-2`}>
                <Image
                  src={uno}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-center`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
              </figure>

              <figure className={`${CARD_CLASS} h-[240px] md:h-[280px] lg:h-auto lg:col-span-5`}>
                <Image
                  src={cinco}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 62vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-center`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
              </figure>

              <figure className={`${CARD_CLASS} h-[240px] md:h-[280px] lg:h-auto lg:col-span-2`}>
                <Image
                  src={tres}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_FIXED_SCALE_CLASS} object-[50%_58%] scale-[1.85]`}
                />
              </figure>

              <figure className={`${CARD_CLASS} h-[240px] md:h-[280px] lg:h-auto lg:col-span-3`}>
                <Image
                  src={siete}
                  alt="Lutherie workshop"
                  fill
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw"
                  className={`${CARD_IMAGE_CLASS} object-[50%_42%]`}
                />
              </figure>
            </div>

            <aside className="hidden lg:block col-span-1 bg-[var(--panel)] dot-grid-surface" aria-hidden="true" />
          </div>
        </section>
      </section>
    </>
  );
}
