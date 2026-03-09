import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";

import CroquisBuconeroVert from "@/public/croquis/guitarras-numeracion/buconero-vert.svg";
import CroquisBuconeroHorz from "@/public/croquis/guitarras-numeracion/buconero-horz.svg";

import BuconeroCuerpo from "@/public/guitarras/buconero.webp";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasBuconero from "@/app/instrumentos/components/ConectorMarcasBuconero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Modelo Buconero",
  description:
    "Ficha técnica del modelo Buconero: maderas, herrajes, electrónica y detalles de construcción.",
  path: "/instrumentos/buconero",
  keywords: ["modelo buconero", "ficha técnica guitarra", "luthería artesanal"],
});

const SPECIFICATIONS = [
  {
    descripcion: "Acabado poliuretano mate y brillante.",
  },
  {
    descripcion: "Cuerpo de caroba en una pieza.",
  },
  {
    descripcion: "Mango laminado de jequetivá/ guatambú/viraró, perfil fino.",
  },
  {
    descripcion: "Diapasón de ébano macasar, radio 20.",
  },
  {
    descripcion: "24 trastes hosco 2.4 M.",
  },
  {
    descripcion: "Clavijas Gotoh.",
  },
  {
    descripcion: "Tensor de doble acción termosellado.",
  },
  {
    descripcion: "Incrustación en traste 12 de ébano Gabón y resina fotoluminiscente.",
  },
  {
    descripcion: "Micrófonos Diliberto C9 Special.",
  },
  {
    descripcion: "Electrónica Gotoh/Switchcraft.",
  },
  {
    descripcion: "Perillas en madera.",
  },
  {
    descripcion: "Puente tremolo Wilkinson wvp.",
  },
  {
    descripcion: "Tapa de raíz de maple y resina epoxi.",
  },
];

export default function Buconero() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 seamless-grid">
        <h1 className="sr-only">Modelo Buconero</h1>
        <PageIntroHeader
          title="Modelo Buconero"
          description="Consultá especificaciones, marcas asociadas y vista detallada del modelo."
          kicker="Ficha"
        />
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-8 p-10 lg:p-10">
          <Image
            src={CroquisBuconeroVert}
            alt="Logo de marca"
            className="mx-auto h-auto w-full p-4 md:p-6 max-w-[320px] max-h-[62vh] sm:max-w-[380px] sm:max-h-[66vh] lg:hidden"
          />
          <Image
            src={CroquisBuconeroHorz}
            alt="Logo de marca"
            className="hidden lg:block p-6"
          />
        </figure>

        <section className="animate col-span-8">
          <ConectorMarcasBuconero />
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
            alt="Logo de marca"
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
