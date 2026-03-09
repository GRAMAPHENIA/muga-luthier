import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";
import CroquiseiraVert from "@/public/croquis/guitarras-numeracion/eira-vert.svg";
import CroquiseiraHorz from "@/public/croquis/guitarras-numeracion/eira-horz.svg";
import eiraCuerpo from "@/public/guitarras/eira.webp";

import HeaderInstrumentos from "@/app/instrumentos/components/HeaderInstrumentos";
import ConectorMarcasEira from "@/app/instrumentos/components/ConectorMarcasEira";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Modelo Eira",
  description:
    "Ficha técnica del modelo Eira: materiales, herrajes y configuración de componentes.",
  path: "/instrumentos/eira",
  keywords: ["modelo eira", "ficha técnica guitarra", "luthier"],
});

const SPECIFICATIONS = [
  {
    descripcion: "Pintura poliuretano brillante en cuerpo, mate en mango.",
  },
  {
    descripcion: "Cuerpo de Lenga fueguina.",
  },
  {
    descripcion: "Mango de maple, perfil C Modern.",
  },
  {
    descripcion: "Diapasón de 22 trastes M, radio 12.",
  },
  {
    descripcion: "Clavijas Locking.",
  },
  {
    descripcion: "Micrófonos DS Pickups Pickguard tricapa tortoise.",
  },
  {
    descripcion: "Electrónica ICA Alfa.",
  },
  {
    descripcion: "Puente Wilkinson de 3 selletas compensadas.",
  },
  {
    descripcion: "Maderas provistas por maderas Del Vigo.",
  },
];

export default function Buconero() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-8 seamless-grid">
        <h1 className="sr-only">Modelo Eira</h1>
        <PageIntroHeader
          title="Modelo Eira"
          description="Consultá especificaciones, marcas asociadas y vista detallada del modelo."
          kicker="Ficha"
        />
        <figure className="relative bg-[var(--panel)] border border-[var(--border)] col-span-8 p-10 lg:p-10">
          <Image
            src={CroquiseiraVert}
            alt="croquis eira numerado"
            className="mx-auto h-auto w-full p-4 md:p-6 max-w-[320px] max-h-[62vh] sm:max-w-[380px] sm:max-h-[66vh] lg:hidden"
          />
          <Image
            src={CroquiseiraHorz}
            alt="croquis eira numerado"
            className="hidden lg:block p-6"
          />
        </figure>
        <section className="animate col-span-8">
          <ConectorMarcasEira />
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
            src={eiraCuerpo}
            alt="croquis eira numerado"
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
