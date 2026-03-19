import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";
import CroquisvellutoVert from "@/public/croquis/guitarras-numeracion/velluto-vert.svg";
import CroquisvellutoHorz from "@/public/croquis/guitarras-numeracion/velluto-horz.svg";
import VellutoBody from "@/public/guitarras/velluto.webp";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasVelluto from "@/app/instrumentos/components/ConectorMarcasVelluto";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Velluto Model",
  description:
    "Velluto model technical sheet with component specs, woods, and finishing details.",
  path: "/en/instruments/velluto",
  locale: "en",
  alternates: {
    es: "/instrumentos/velluto",
    en: "/en/instruments/velluto",
  },
  keywords: ["velluto model", "guitar technical sheet", "author instrument"],
});

const SPECIFICATIONS = [
  { descripcion: "Tahitian Moral matte finish by Twang Factory." },
  { descripcion: "Okume body." },
  { descripcion: "Jequetiva neck." },
  { descripcion: "Guayubira fingerboard." },
  { descripcion: "Sintoms LTD 2.2 M frets." },
  { descripcion: "Gotoh Vintage 3+3 tuners." },
  { descripcion: "Heat-sealed dual-action truss rod." },
  { descripcion: "Graphite nut." },
  { descripcion: "Mother-of-pearl dots." },
  { descripcion: "Diliberto pickups." },
  { descripcion: "Gotoh/Hosco electronics." },
  { descripcion: "Metal knobs with nacre detail." },
  { descripcion: "Gotoh Tune-o-Matic bridge." },
];

export default function VellutoEn() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 seamless-grid">
        <h1 className="sr-only">Velluto Model</h1>
        <PageIntroHeader
          locale="en"
          title="Velluto Model"
          description="Check specs, partner brands, and detailed model view."
          kicker="Sheet"
        />
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-8 p-10 lg:p-10">
          <Image
            src={CroquisvellutoVert}
            alt="Velluto numbered technical sketch"
            className="mx-auto h-auto w-full p-4 md:p-6 max-w-[320px] max-h-[62vh] sm:max-w-[380px] sm:max-h-[66vh] lg:hidden"
          />
          <Image
            src={CroquisvellutoHorz}
            alt="Velluto numbered technical sketch"
            className="hidden lg:block p-6"
          />
        </figure>
        <section className="animate col-span-8">
          <ConectorMarcasVelluto />
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
            src={VellutoBody}
            alt="Velluto body"
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
