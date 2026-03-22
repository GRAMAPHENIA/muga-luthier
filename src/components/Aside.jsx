import { BlurFade } from "@/components/ui/blur-fade";

export default function Aside({ locale = "es" }) {
  const alt =
    locale === "en"
      ? "Close-up detail of a handcrafted guitar"
      : "Detalle en primer plano de una guitarra artesanal";

  return (
    <aside className="flex h-full justify-center items-center col-span-1 py-2 pl-2 pr-0 overflow-hidden">
      <BlurFade inView delay={0.08} offset={10} className="w-full h-full">
        <figure
          aria-label={alt}
          role="img"
          className="relative w-full min-h-[280px] h-[300px] md:h-[360px] lg:h-[420px] overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/croquis/svgs/01.svg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0% 55%",
              backgroundSize: "210%",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
        </figure>
      </BlurFade>
    </aside>
  );
}
