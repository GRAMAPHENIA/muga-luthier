import Image from "next/image";
import croquiBuconero from "@/public/croquis/croqui-buconero.svg";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Aside({ locale = "es" }) {
  const alt =
    locale === "en" ? "Buconero guitar technical sketch" : "Croquis de guitarra buconero";

  return (
    <aside className="flex h-full justify-center items-center col-span-1 p-6 lg:p-8">
      <BlurFade inView delay={0.08} offset={10}>
        <figure>
          <Image
            width={760}
            height={540}
            src={croquiBuconero}
            alt={alt}
            className="mx-auto my-auto p-6 md:p-8 w-full h-auto object-contain max-w-[320px] max-h-[220px] md:max-w-[520px] md:max-h-[360px] lg:max-w-[760px] lg:max-h-[540px] rotate-90"
          />
        </figure>
      </BlurFade>
    </aside>
  );
}
