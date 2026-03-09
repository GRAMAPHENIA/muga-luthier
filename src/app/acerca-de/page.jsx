import Image from "next/image";
import Esteban from "/public/croquis/esteban.svg";
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
        <figure className="flex flex-col align-middle items-center justify-center lg:col-start-1 lg:col-end-5 bg-[var(--panel)] border border-[var(--border)] w-full p-12 lg:p-20">
          <Image
            width={150}
            height={150}
            src={Isotipo}
            alt="Isotipo"
            className="lg:px-4 pb-4"
          ></Image>
          <p className="text-center lg:text-2xl font-extralight text-[#7d8c9d] mb-10 lg:mx-40">
            A mediados de la década de los 90 me surge la intriga de comenzar la
            construcción de guitarras y bajos, y capacitándome de varias maneras
            logro afianzarme en conocimientos y experiencia. Es así que en el
            año 2010 decido crear Di Corato instrumentos de cuerda pulsada.
          </p>
          <Image
            width={600}
            height={250}
            src={Esteban}
            alt="Logo"
            className="lg:px-4 opacity-50"
          ></Image>
        </figure>
      </section>
    </>
  );
}
