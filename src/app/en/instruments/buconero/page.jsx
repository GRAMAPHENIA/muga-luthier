import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";

import CroquisBuconeroVert from "@/public/croquis/guitarras-numeracion/buconero-vert.svg";
import CroquisBuconeroHorz from "@/public/croquis/guitarras-numeracion/buconero-horz.svg";

import BuconeroCuerpo from "@/public/guitarras/buconero.webp";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasBuconero from "@/app/instrumentos/components/ConectorMarcasBuconero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Buconero Model",
  description:
    "Buconero model technical sheet: woods, hardware, electronics, and construction details.",
  path: "/en/instruments/buconero",
  locale: "en",
  alternates: {
    es: "/instrumentos/buconero",
    en: "/en/instruments/buconero",
  },
  keywords: ["buconero model", "guitar technical sheet", "artisan lutherie"],
});

const SPECIFICATIONS = [
  { descripcion: "Matte and gloss polyurethane finish." },
  { descripcion: "One-piece caroba body." },
  { descripcion: "Jequetiva/guatambu/viraro laminated neck, slim profile." },
  { descripcion: "Macassar ebony fingerboard, 20" },
  { descripcion: "24 Hosco 2.4 M frets." },
  { descripcion: "Gotoh tuners." },
  { descripcion: "Heat-sealed dual-action truss rod." },
  { descripcion: "12th fret inlay in Gabon ebony and photoluminescent resin." },
  { descripcion: "Diliberto C9 Special pickups." },
  { descripcion: "Gotoh/Switchcraft electronics." },
  { descripcion: "Wood control knobs." },
  { descripcion: "Wilkinson WVP tremolo bridge." },
  { descripcion: "Maple root top with epoxy resin." },
];

export default function BuconeroEn() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 seamless-grid">
        <h1 className="sr-only">Buconero Model</h1>
        <PageIntroHeader
          locale="en"
          title="Buconero Model"
          description="Check specs, partner brands, and detailed model view."
          kicker="Sheet"
        />
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-8 p-10 lg:p-10">
          <Image
            src={CroquisBuconeroVert}
            alt="Buconero numbered technical sketch"
            className="mx-auto h-auto w-full p-4 md:p-6 max-w-[320px] max-h-[62vh] sm:max-w-[380px] sm:max-h-[66vh] lg:hidden"
          />
          <Image
            src={CroquisBuconeroHorz}
            alt="Buconero numbered technical sketch"
            className="hidden lg:block p-6"
          />
        </figure>

        <section className="animate col-span-8">
          <ConectorMarcasBuconero />
        </section>

        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-8 lg:col-span-5 p-0">
          <section className="border-b border-[var(--border)] px-10 py-4">
            <p className="mono-ui text-xs text-[var(--muted)]">Specifications</p>
          </section>
          <ol className="space-y-3 text-sm lg:text-base px-10 py-8">
            {SPECIFICATIONS.map((item, index) => (
              <li key={item.descripcion}>
                <p className="text-[var(--text-light)] leading-relaxed">
                  <span className="text-[var(--accent)] mr-3 mono-ui">{index + 1}.</span>
                  {item.descripcion}
                </p>
              </li>
            ))}
          </ol>
        </figure>
        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-8 lg:col-span-3 p-6 lg:p-8 flex items-center justify-center">
          <Image
            src={BuconeroCuerpo}
            alt="Buconero body"
            width={150}
            height={150}
            className="mx-auto h-auto w-full object-contain max-w-[220px] max-h-[240px] sm:max-w-[250px] sm:max-h-[280px] lg:max-w-[280px] lg:max-h-[320px]"
          />
        </figure>
      </section>
      <section className="animate">
        <HeaderInstrumentos locale="en" />
      </section>
    </>
  );
}
