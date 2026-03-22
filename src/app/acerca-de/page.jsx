import Image from "next/image";
import AcercaDeImage from "/public/acercade.webp";
import Isotipo from "@/public/isotipo.svg";
import PageIntroHeader from "@/components/PageIntroHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Acerca de",
  description:
    "Historia y trayectoria de Di Corato Luthier: enfoque, visión y trabajo artesanal en instrumentos de cuerda.",
  path: "/acerca-de",
  keywords: ["luthier", "historia del taller", "acerca de"],
});

export default function AcercaDe() {
  return (
    <>
      <section className="w-full grid lg:grid-cols-4 my-2 seamless-grid" id="sobremi">
        <h1 className="sr-only">Acerca de</h1>
        <PageIntroHeader
          kicker="Sección"
          title="Acerca de"
          description="Conocé el recorrido del luthier y la visión que define cada decisión de construcción."
        />
        <figure className="lg:col-start-1 lg:col-end-5 bg-[var(--panel)] border border-[var(--border)] w-full p-0">
          <div className="grid grid-cols-12 gap-px bg-[var(--border)] w-full">
            <aside className="hidden lg:block col-span-1 bg-[var(--panel)] dot-grid-surface" aria-hidden="true" />

            <div className="col-span-12 lg:col-span-10 grid grid-cols-1 gap-px bg-[var(--border)]">
              <div className="bg-[var(--panel)] flex items-center justify-center p-8 lg:p-10">
                <Image width={150} height={150} src={Isotipo} alt="Isotipo" className="block" />
              </div>

              <div className="bg-[var(--panel)] px-8 py-10 lg:px-16 lg:py-14">
                <p className="text-center lg:text-2xl font-extralight text-[#7d8c9d]">
                  A mediados de la década de los 90 me surge la intriga de comenzar la
                  construcción de guitarras y bajos, y capacitándome de varias maneras
                  logro afianzarme en conocimientos y experiencia. Es así que en el
                  año 2010 decido crear Di Corato instrumentos de cuerda pulsada.
                </p>
              </div>

              <div className="bg-[var(--panel)] p-0">
                <Image
                  src={AcercaDeImage}
                  alt="Luthier trabajando en la mesa del taller"
                  className="block w-full h-auto"
                ></Image>
              </div>
            </div>

            <aside className="hidden lg:block col-span-1 bg-[var(--panel)] dot-grid-surface" aria-hidden="true" />
          </div>
        </figure>
      </section>
    </>
  );
}
