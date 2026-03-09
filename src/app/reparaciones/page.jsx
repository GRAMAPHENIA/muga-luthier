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
  title: "Reparaciones",
  description:
    "Servicio de reparación, mantenimiento y puesta a punto de guitarras y bajos en taller especializado.",
  path: "/reparaciones",
  keywords: ["reparación de guitarras", "mantenimiento de instrumentos", "calibración"],
});

const TILE_CLASS =
  "animate content-auto relative overflow-hidden bg-[var(--panel)] border border-[var(--border)] h-[170px] sm:h-[190px] lg:h-[200px] p-0";
const TILE_IMAGE_CLASS = "block h-full w-full object-cover object-center";

export default function Reparaciones() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 lg:grid lg:grid-cols-6 seamless-grid object-contain">
        <h1 className="sr-only">Reparaciones</h1>
        <PageIntroHeader
          kicker="Sección"
          title="Reparaciones"
          description="Revisá trabajos de mantenimiento, restauración y puesta a punto realizados en taller."
        />
        <figure className={`${TILE_CLASS} col-span-6`}>
          <Image
            src={uno}
            alt="Imagen del taller de luthería"
            width={1000}
            height={600}
            className={TILE_IMAGE_CLASS}
          />
        </figure>

        <figure className={`${TILE_CLASS} col-span-6 lg:col-span-2`}>
          <Image
            src={dos}
            alt="Imagen del taller de luthería"
            width={1000}
            height={600}
            className={TILE_IMAGE_CLASS}
          />
        </figure>

        <figure className={`${TILE_CLASS} col-span-6 lg:col-span-2`}>
          <Image
            src={tres}
            alt="Imagen del taller de luthería"
            width={1000}
            height={600}
            className={TILE_IMAGE_CLASS}
          />
        </figure>
        <figure className={`${TILE_CLASS} col-span-6 lg:col-span-2`}>
          <Image
            src={cuatro}
            alt="Imagen del taller de luthería"
            width={1000}
            height={600}
            className={TILE_IMAGE_CLASS}
          />
        </figure>

        <figure className={`${TILE_CLASS} col-span-6`}>
          <Image
            src={cinco}
            alt="Imagen del taller de luthería"
            width={1000}
            height={600}
            className={TILE_IMAGE_CLASS}
          />
        </figure>

        <figure className={`${TILE_CLASS} col-span-2`}>
          <Image
            src={seis}
            alt="Imagen del taller de luthería"
            width={1000}
            height={600}
            className={TILE_IMAGE_CLASS}
          />
        </figure>
        <figure className={`${TILE_CLASS} col-span-2`}>
          <Image
            src={siete}
            alt="Imagen del taller de luthería"
            width={1000}
            height={600}
            className={TILE_IMAGE_CLASS}
          />
        </figure>
        <figure className={`${TILE_CLASS} col-span-6 lg:col-span-2`}>
          <Image
            src={ocho}
            alt="Imagen del taller de luthería"
            width={1000}
            height={600}
            className={TILE_IMAGE_CLASS}
          />
        </figure>
      </section>
    </>
  );
}
