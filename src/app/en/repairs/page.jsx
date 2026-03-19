import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";

import uno from "@/public/reparaciones/1.webp";
import dos from "@/public/reparaciones/2.webp";
import tres from "@/public/reparaciones/3.webp";
import cuatro from "@/public/reparaciones/4.webp";
import cinco from "@/public/reparaciones/5.webp";
import seis from "@/public/reparaciones/6.webp";
import siete from "@/public/reparaciones/7.webp";
import ocho from "@/public/reparaciones/8.webp";
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

const TILE_CLASS =
  "animate content-auto relative overflow-hidden bg-[var(--panel)] border border-[var(--border)] h-[170px] sm:h-[190px] lg:h-[200px] p-0";
const TILE_IMAGE_CLASS = "block h-full w-full object-cover object-center";

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
        <figure className={`${TILE_CLASS} col-span-6`}>
          <Image src={uno} alt="Lutherie workshop" width={1000} height={600} className={TILE_IMAGE_CLASS} />
        </figure>
        <figure className={`${TILE_CLASS} col-span-6 lg:col-span-2`}>
          <Image src={dos} alt="Lutherie workshop" width={1000} height={600} className={TILE_IMAGE_CLASS} />
        </figure>
        <figure className={`${TILE_CLASS} col-span-6 lg:col-span-2`}>
          <Image src={tres} alt="Lutherie workshop" width={1000} height={600} className={TILE_IMAGE_CLASS} />
        </figure>
        <figure className={`${TILE_CLASS} col-span-6 lg:col-span-2`}>
          <Image src={cuatro} alt="Lutherie workshop" width={1000} height={600} className={TILE_IMAGE_CLASS} />
        </figure>
        <figure className={`${TILE_CLASS} col-span-6`}>
          <Image src={cinco} alt="Lutherie workshop" width={1000} height={600} className={TILE_IMAGE_CLASS} />
        </figure>
        <figure className={`${TILE_CLASS} col-span-2`}>
          <Image src={seis} alt="Lutherie workshop" width={1000} height={600} className={TILE_IMAGE_CLASS} />
        </figure>
        <figure className={`${TILE_CLASS} col-span-2`}>
          <Image src={siete} alt="Lutherie workshop" width={1000} height={600} className={TILE_IMAGE_CLASS} />
        </figure>
        <figure className={`${TILE_CLASS} col-span-6 lg:col-span-2`}>
          <Image src={ocho} alt="Lutherie workshop" width={1000} height={600} className={TILE_IMAGE_CLASS} />
        </figure>
      </section>
    </>
  );
}
