import Image from "next/image";
import AcercaDeImage from "/public/acercade.webp";
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
        <figure className="lg:col-start-1 lg:col-end-5 bg-[var(--panel)] border border-[var(--border)] w-full p-0">
          <div className="grid grid-cols-12 gap-px bg-[var(--border)] w-full">
            <aside className="hidden lg:block col-span-1 bg-[var(--panel)] dot-grid-surface" aria-hidden="true" />

            <div className="col-span-12 lg:col-span-10 grid grid-cols-1 gap-px bg-[var(--border)]">
              <div className="bg-[var(--panel)] flex items-center justify-center p-8 lg:p-10">
                <Image width={150} height={150} src={Isotipo} alt="Isotype" className="block" />
              </div>

              <div className="bg-[var(--panel)] px-8 py-10 lg:px-16 lg:py-14">
                <p className="text-center lg:text-2xl font-extralight text-[#7d8c9d]">
                  In the mid-90s I became curious about building guitars and basses. Through different
                  training paths, I consolidated my knowledge and hands-on experience. In 2010, I decided
                  to launch Di Corato string instruments.
                </p>
              </div>

              <div className="bg-[var(--panel)] p-0">
                <Image
                  src={AcercaDeImage}
                  alt="Luthier working at the workshop bench"
                  className="block w-full h-auto"
                />
              </div>
            </div>

            <aside className="hidden lg:block col-span-1 bg-[var(--panel)] dot-grid-surface" aria-hidden="true" />
          </div>
        </figure>
      </section>
    </>
  );
}
