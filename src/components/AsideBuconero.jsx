import { BlurFade } from "@/components/ui/blur-fade";

export default function AsideBuconero({ locale = "es" }) {
  const alt =
    locale === "en"
      ? "Close-up detail of gallery guitar"
      : "Detalle en primer plano de guitarra de galería";

  return (
    <aside className="flex h-full justify-center items-center col-span-1 py-2 px-0 overflow-hidden">
      <BlurFade inView delay={0.08} offset={10} className="w-full h-full">
        <figure
          aria-label={alt}
          role="img"
          className="relative w-full min-h-[280px] h-[300px] md:h-[360px] lg:h-[420px] overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/croquis/svgs/02.svg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "46% 46%",
              backgroundSize: "205%",
              transform: "scaleY(-1)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
        </figure>
      </BlurFade>
    </aside>
  );
}
