import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";
import CroquisvellutoVert from "@/public/croquis/guitarras-numeracion/velluto-vert.svg";
import CroquisvellutoHorz from "@/public/croquis/guitarras-numeracion/velluto-horz.svg";
import BuconeroCuerpo from "@/public/guitarras/velluto.webp";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasVelluto from "@/app/instrumentos/components/ConectorMarcasVelluto";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Modelo Velluto",
  description:
    "Ficha técnica del modelo Velluto con especificaciones de componentes, maderas y terminaciones.",
  path: "/instrumentos/velluto",
  keywords: ["modelo velluto", "ficha técnica guitarra", "instrumento de autor"],
});

const SPECIFICATIONS = [
  {
    descripcion: "Terminación Tahitian Moral Mate de Twang Factory.",
  },
  {
    descripcion: "Cuerpo de Okume.",
  },
  {
    descripcion: "Mango de Jequetiva.",
  },
  {
    descripcion: "Diapasón de guayubira.",
  },
  {
    descripcion: "Trastes Sintoms LTD 2.2 M",
  },
  {
    descripcion: "Clavijas Gotoh Vintage 3+3",
  },
  {
    descripcion: "Tensor de doble acción termosellado.",
  },
  {
    descripcion: "Cejuela de grafito",
  },
  {
    descripcion: "Dots de Madreperla",
  },
  {
    descripcion: "Micrófonos Diliberto.",
  },
  {
    descripcion: "Electrónica Gotoh/Hosco.",
  },
  {
    descripcion: "Perillas metálicas con detalle en nácar.",
  },
  {
    descripcion: "Puente Tune-o-Matic Gotoh.",
  },
];

export default function velluto() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 seamless-grid">
        <h1 className="sr-only">Modelo Velluto</h1>
        <PageIntroHeader
          title="Modelo Velluto"
          description="Consultá especificaciones, marcas asociadas y vista detallada del modelo."
          kicker="Ficha"
        />
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-8 p-10 lg:p-10">
          <Image
            src={CroquisvellutoVert}
            alt="croquis velluto numerado"
            className="mx-auto h-auto w-full p-4 md:p-6 max-w-[320px] max-h-[62vh] sm:max-w-[380px] sm:max-h-[66vh] lg:hidden"
          />
          <Image
            src={CroquisvellutoHorz}
            alt="croquis velluto numerado"
            className="hidden lg:block p-6"
          />
        </figure>
        <section className="animate col-span-8">
          <ConectorMarcasVelluto />
        </section>

        <figure className="animate relative bg-[var(--panel)] border border-[var(--border)] col-span-8 lg:col-span-5 p-0">
          <section className="border-b border-[var(--border)] px-10 py-4">
            <p className="mono-ui text-xs text-[var(--muted)]">Especificaciones</p>
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
            alt="croquis velluto numerado"
            width={150}
            height={150}
            className="mx-auto h-auto w-full object-contain max-w-[220px] max-h-[240px] sm:max-w-[250px] sm:max-h-[280px] lg:max-w-[280px] lg:max-h-[320px]"
          />
        </figure>
      </section>
      <section className="animate">
        <HeaderInstrumentos />
      </section>
    </>
  );
}
