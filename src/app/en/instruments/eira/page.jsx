import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";
import CroquiseiraVert from "@/public/croquis/guitarras-numeracion/eira-vert.svg";
import CroquiseiraHorz from "@/public/croquis/guitarras-numeracion/eira-horz.svg";
import EiraBody from "@/public/guitarras/eira.webp";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasEira from "@/app/instrumentos/components/ConectorMarcasEira";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Eira Model",
  description: "Eira model technical sheet: materials, hardware, and component setup.",
  path: "/en/instruments/eira",
  locale: "en",
  alternates: {
    es: "/instrumentos/eira",
    en: "/en/instruments/eira",
  },
  keywords: ["eira model", "guitar technical sheet", "luthier"],
});

const SPECIFICATIONS = [
  { descripcion: "Gloss polyurethane finish on body, matte on neck." },
  { descripcion: "Fuegian lenga body." },
  { descripcion: "Maple neck, Modern C profile." },
  { descripcion: "22-fret fingerboard, 12-inch radius." },
  { descripcion: "Locking tuners." },
  { descripcion: "DS Pickups with tortoise 3-ply pickguard." },
  { descripcion: "ICA Alfa electronics." },
  { descripcion: "Wilkinson bridge with 3 compensated saddles." },
  { descripcion: "Woods supplied by Maderas Del Vigo." },
];

export default function EiraEn() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 seamless-grid">
        <h1 className="sr-only">Eira Model</h1>
        <PageIntroHeader
          locale="en"
          title="Eira Model"
          description="Check specs, partner brands, and detailed model view."
          kicker="Sheet"
        />
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-8 p-10 lg:p-10">
          <Image
            src={CroquiseiraVert}
            alt="Eira numbered technical sketch"
            className="mx-auto h-auto w-full p-4 md:p-6 max-w-[320px] max-h-[62vh] sm:max-w-[380px] sm:max-h-[66vh] lg:hidden"
          />
          <Image
            src={CroquiseiraHorz}
            alt="Eira numbered technical sketch"
            className="hidden lg:block p-6"
          />
        </figure>
        <section className="animate col-span-8">
          <ConectorMarcasEira />
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
            src={EiraBody}
            alt="Eira body"
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
