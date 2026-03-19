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
  title: "Instruments",
  description:
    "Buconero, Velluto, and Eira models: specifications, technical sheets, and images for each instrument.",
  path: "/en/instruments",
  locale: "en",
  alternates: {
    es: "/instrumentos",
    en: "/en/instruments",
  },
  keywords: ["string instruments", "handcrafted guitars", "guitar models"],
});

export default function InstrumentsPage() {
  return (
    <>
      <section className="grid my-2 grid-cols-1 lg:grid lg:grid-cols-2 seamless-grid">
        <h1 className="sr-only">Instruments</h1>
        <PageIntroHeader
          locale="en"
          kicker="Collection"
          title="Instruments"
          description="Compare models, specs, and quick access to each complete technical sheet."
        />
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4">
          <Image
            className="m-auto p-4 md:p-6"
            src={BuconeroTipografia}
            alt="Buconero model guitar by Esteban M. Di Corato"
            width={300}
            height={300}
          />
        </figure>
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-10 lg:py-10">
          <Image
            src={BuconeroHorz}
            alt="Buconero model guitar by Esteban M. Di Corato"
            className="h-auto w-full p-4 md:p-6"
          />
          <Link
            href="/en/instruments/buconero"
            className="absolute bottom-0 right-0 detalles mono-ui inline-flex items-center justify-center text-xs lg:text-sm text-center w-[130px] lg:w-[200px] m-0 px-2 py-1 lg:px-4 lg:py-3 border border-[var(--border)] border-r-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
          >
            Open sheet
          </Link>
        </figure>
        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4">
          <Image
            className="m-auto p-4 md:p-6"
            src={VellutoTipografia}
            alt="Velluto model guitar by Esteban M. Di Corato"
            width={300}
            height={300}
          />
        </figure>
        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-10 lg:p-10">
          <Image
            src={VellutoHorz}
            alt="Velluto model guitar by Esteban M. Di Corato"
            className="h-auto w-full p-4 md:p-6"
          />
          <Link
            href="/en/instruments/velluto"
            className="absolute bottom-0 right-0 detalles mono-ui inline-flex items-center justify-center text-xs lg:text-sm text-center w-[130px] lg:w-[200px] m-0 px-2 py-1 lg:px-4 lg:py-3 border border-[var(--border)] border-r-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
          >
            Open sheet
          </Link>
        </figure>
        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4">
          <Image
            className="m-auto p-4 md:p-6"
            src={EiraTipografia}
            alt="Eira model guitar by Esteban M. Di Corato"
            width={200}
            height={250}
          />
        </figure>
        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-2 p-10 lg:p-10">
          <Image
            src={EiraHorz}
            alt="Eira model guitar by Esteban M. Di Corato"
            className="h-auto w-full p-4 md:p-6"
          />
          <Link
            href="/en/instruments/eira"
            className="absolute bottom-0 right-0 detalles mono-ui inline-flex items-center justify-center text-xs lg:text-sm text-center w-[130px] lg:w-[200px] m-0 px-2 py-1 lg:px-4 lg:py-3 border border-[var(--border)] border-r-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
          >
            Open sheet
          </Link>
        </figure>
      </section>
    </>
  );
}
