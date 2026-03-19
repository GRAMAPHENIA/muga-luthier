import Image from "next/image";
import croquiVelluto from "@/public/croquis/aside-velluto.svg";
import { BlurFade } from "@/components/ui/blur-fade";

export default function AsideBuconero({ locale = "es" }) {
  const alt = locale === "en" ? "Velluto guitar photo" : "Foto de la guitarra Velluto";

  return (
    <aside className="flex h-full justify-center items-center col-span-1 p-6 lg:p-8">
      <BlurFade inView delay={0.08} offset={10}>
        <figure>
          <Image
            width={380}
            height={270}
            src={croquiVelluto}
            alt={alt}
            className="w-full h-auto max-w-[280px] max-h-[200px] md:max-w-[340px] md:max-h-[240px] lg:max-w-[380px] lg:max-h-[270px] rotate-90"
          />
        </figure>
      </BlurFade>
    </aside>
  );
}
