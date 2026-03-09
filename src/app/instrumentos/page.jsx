import Image from "next/image";
import Link from "next/link";
import PageIntroHeader from "@/components/PageIntroHeader";

import BuconeroHorz from "@/public/croquis/buconero-horz.svg";
import VellutoHorz from "@/public/croquis/velluto-horz.webp";
import EiraHorz from "@/public/croquis/eira-horz.webp";

import BuconeroTipografia from "@/public/instrumentos/buconero.svg";
import VellutoTipografia from "@/public/instrumentos/velluto.svg";
import EiraTipografia from "@/public/instrumentos/eira.svg";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Instrumentos",
  description:
    "Modelos Buconero, Velluto y Eira: especificaciones, fichas técnicas e imágenes de cada instrumento.",
  path: "/instrumentos",
  keywords: ["instrumentos de cuerda", "guitarras artesanales", "modelos de guitarras"],
});

export default function Buconero() {
  return (
    <>
      <section className="grid my-2 grid-cols-1 lg:grid lg:grid-cols-2 seamless-grid">
        <h1 className="sr-only">Instrumentos</h1>
        <PageIntroHeader
          kicker="Colección"
          title="Instrumentos"
          description="Compará modelos, especificaciones y accesos directos a cada ficha técnica completa."
        />
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4">
          {/* <p className=" text-3xl text-gray-400 font-thin">Modelo</p> */}
          <Image
            className="m-auto p-4 md:p-6"
            src={BuconeroTipografia}
            alt="Fotografía de una guitarra, modelo Buconero. Diseñada y fabricada por Esteban M. Di Corato."
            width={300}
            height={300}
          />
        </figure>
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-10 lg:py-10">
          <Image
            src={BuconeroHorz}
            alt="Fotografía de una guitarra, modelo Buconero. Diseñada y fabricada por Esteban M. Di Corato."
            className="h-auto w-full p-4 md:p-6"
          />
          <Link
            href="/instrumentos/buconero"
            className="absolute bottom-0 right-0 detalles mono-ui inline-flex items-center justify-center text-xs lg:text-sm text-center w-[130px] lg:w-[200px] m-0 px-2 py-1 lg:px-4 lg:py-3 border border-[var(--border)] border-r-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
          >
            Abrí ficha
          </Link>
        </figure>
        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4">
          {/* <p className=" text-3xl text-gray-400 font-thin">Modelo</p> */}
          <Image
            className="m-auto p-4 md:p-6"
            src={VellutoTipografia}
            alt="Fotografía de una guitarra, modelo Buconero. Diseñada y fabricada por Esteban M. Di Corato."
            width={300}
            height={300}
          />
        </figure>
        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-10 lg:p-10">
          <Image
            src={VellutoHorz}
            alt="Fotografía de una guitarra, modelo Velluto. Diseñada y fabricada por Esteban M. Di Corato."
            className="h-auto w-full p-4 md:p-6"
          />
          <Link
            href="/instrumentos/velluto"
            className="absolute bottom-0 right-0 detalles mono-ui inline-flex items-center justify-center text-xs lg:text-sm text-center w-[130px] lg:w-[200px] m-0 px-2 py-1 lg:px-4 lg:py-3 border border-[var(--border)] border-r-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
          >
            Abrí ficha
          </Link>
        </figure>
        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4">
          <Image
            className="m-auto p-4 md:p-6"
            src={EiraTipografia}
            alt="Fotografía de una guitarra, modelo Eira. Diseñada y fabricada por Esteban M. Di Corato."
            width={200}
            height={250}
          />
        </figure>
        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-10 lg:p-10">
          <Image
            src={EiraHorz}
            alt="Fotografía de una guitarra, modelo Eira. Diseñada y fabricada por Esteban M. Di Corato."
            className="h-auto w-full p-4 md:p-6"
          />
          <Link
            href="/instrumentos/eira"
            className="absolute bottom-0 right-0 detalles mono-ui inline-flex items-center justify-center text-xs lg:text-sm text-center w-[130px] lg:w-[200px] m-0 px-2 py-1 lg:px-4 lg:py-3 border border-[var(--border)] border-r-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
          >
            Abrí ficha
          </Link>
        </figure>
      </section>
    </>
  );
}
