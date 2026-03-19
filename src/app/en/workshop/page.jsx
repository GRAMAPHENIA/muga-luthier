import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";
import tallerDos from "/public/taller/tallerdos.webp";
import tallerTres from "/public/taller/tallertres.webp";
import tallerCuatro from "/public/taller/tallercuatro.webp";
import tallerCinco from "/public/taller/tallercinco.webp";
import tallerSeis from "/public/taller/tallerseis.webp";
import tallerSiete from "/public/taller/tallersiete.webp";
import tallerOcho from "/public/taller/tallerocho.webp";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Workshop",
  description:
    "Get to know the workshop, tools, and handcrafted workflow for instrument building and repair.",
  path: "/en/workshop",
  locale: "en",
  alternates: {
    es: "/taller",
    en: "/en/workshop",
  },
  keywords: ["lutherie workshop", "handcrafted process", "guitar making"],
});

export default function WorkshopEn() {
  return (
    <>
      <section className="grid my-2 grid-cols-4 row-span-4 lg:grid lg:grid-cols-6 seamless-grid">
        <h1 className="sr-only">Workshop</h1>
        <PageIntroHeader
          locale="en"
          kicker="Section"
          title="Workshop"
          description="See tools, workspace, and real scenes from the daily handcrafted process."
        />
        <figure className="animate content-auto bg-[var(--panel)] border border-[var(--border)] col-span-4 p-4 lg:p-4">
          <Image src={tallerDos} alt="Lutherie workshop" width={1000} height={600} className="rounded-xl " />
        </figure>
        <figure className="animate content-auto bg-[var(--panel)] border border-[var(--border)] col-span-2 flex justify-center align-middle p-4 lg:p-4">
          <Image src={tallerTres} alt="Lutherie workshop" width={1000} height={600} className="rounded-xl object-fit" />
        </figure>
        <figure className="animate content-auto bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4 lg:p-4">
          <Image src={tallerCuatro} alt="Lutherie workshop" width={1000} height={600} className="rounded-xl" />
        </figure>
        <figure className="animate content-auto bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4 lg:p-4">
          <Image src={tallerCinco} alt="Lutherie workshop" width={1000} height={600} className="rounded-xl" />
        </figure>
        <figure className="animate content-auto bg-[var(--panel)] border border-[var(--border)] col-span-2 p-4 lg:p-4">
          <Image src={tallerSeis} alt="Lutherie workshop" width={1000} height={600} className="rounded-xl" />
        </figure>
        <figure className="animate content-auto bg-[var(--panel)] border border-[var(--border)] col-span-2 lg:flex justify-center align-middle p-4 lg:p-4 hidden">
          <Image src={tallerSiete} alt="Lutherie workshop" width={1000} height={600} className="rounded-xl" />
        </figure>
        <figure className="animate content-auto bg-[var(--panel)] border border-[var(--border)] col-span-4 p-4 lg:p-4">
          <Image src={tallerOcho} alt="Lutherie workshop" width={1000} height={600} className="rounded-xl " />
        </figure>
      </section>
    </>
  );
}
