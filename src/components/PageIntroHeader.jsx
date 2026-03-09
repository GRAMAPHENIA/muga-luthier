import { BlurFade } from "@/components/ui/blur-fade";

export default function PageIntroHeader({
  title,
  description,
  kicker = "Colección",
  className = "",
}) {
  return (
    <header
      className={`col-span-full bg-[var(--panel)] px-6 py-5 text-left min-w-0 h-full flex flex-col items-start justify-center lg:px-8 lg:py-7 ${className}`}
    >
      <BlurFade inView delay={0.02} offset={8}>
        <p className="mono-ui text-xs text-[var(--muted)]">{kicker}</p>
      </BlurFade>
      <BlurFade inView delay={0.08} offset={10}>
        <h2 className="mt-2 text-2xl font-light text-[var(--text)] text-balance lg:text-4xl">
          {title}
        </h2>
      </BlurFade>
      {description ? (
        <BlurFade inView delay={0.14} offset={12}>
          <p className="mt-2 max-w-[60ch] break-words text-sm text-[var(--muted)] lg:text-base">
            {description}
          </p>
        </BlurFade>
      ) : null}
    </header>
  );
}
