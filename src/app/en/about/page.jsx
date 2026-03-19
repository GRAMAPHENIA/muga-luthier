import Image from "next/image";
import Esteban from "/public/croquis/esteban.svg";
import Isotipo from "@/public/isotipo.svg";
import PageIntroHeader from "@/components/PageIntroHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Story and trajectory of Di Corato Luthier: approach, vision, and handcrafted work on string instruments.",
  path: "/en/about",
  locale: "en",
  alternates: {
    es: "/acerca-de",
    en: "/en/about",
  },
  keywords: ["luthier", "workshop history", "about"],
});

export default function AboutEn() {
  return (
    <>
      <section className="w-full grid lg:grid-cols-4 my-2 seamless-grid" id="sobremi">
        <h1 className="sr-only">About</h1>
        <PageIntroHeader
          locale="en"
          kicker="Section"
          title="About"
          description="Discover the luthier's journey and vision behind each construction decision."
        />
        <figure className="flex flex-col align-middle items-center justify-center lg:col-start-1 lg:col-end-5 bg-[var(--panel)] border border-[var(--border)] w-full p-12 lg:p-20">
          <Image width={150} height={150} src={Isotipo} alt="Isotype" className="lg:px-4 pb-4" />
          <p className="text-center lg:text-2xl font-extralight text-[#7d8c9d] mb-10 lg:mx-40">
            In the mid-90s I became curious about building guitars and basses. Through different
            training paths, I consolidated my knowledge and hands-on experience. In 2010, I decided
            to launch Di Corato string instruments.
          </p>
          <Image width={600} height={250} src={Esteban} alt="Signature" className="lg:px-4 opacity-50" />
        </figure>
      </section>
    </>
  );
}
