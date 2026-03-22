import Link from "next/link";
import PageIntroHeader from "@/components/PageIntroHeader";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { localizeHref } from "@/lib/i18n";

const copy = {
  es: {
    section: "Sección",
    title: "Reparaciones",
    description:
      "Agenda ajustes, calibraciones y restauraciones para recuperar sonido, tacto y estabilidad.",
    cta: "Ver Servicios",
  },
  en: {
    section: "Section",
    title: "Repairs",
    description:
      "Book adjustments, setups, and restorations to recover tone, feel, and tuning stability.",
    cta: "View Services",
  },
};

export default function Reparaciones({ locale = "es" }) {
  const t = copy[locale] || copy.es;
  const detailAlt =
    locale === "en"
      ? "Close-up detail of guitar repair work"
      : "Detalle en primer plano de trabajos de reparación";

  return (
    <>
      <section id="reparaciones" className="animate w-full grid lg:grid-cols-5 my-2 seamless-grid seamless-grid-no-top">
        <figure className="relative flex flex-col align-middle justify-between p-0 lg:col-start-1 lg:col-end-3 bg-[var(--panel)] border border-[var(--border)] w-full lg:min-h-[320px]">
          <PageIntroHeader
            kicker={t.section}
            title={t.title}
            description={t.description}
            className="border-0 bg-transparent p-6 lg:p-10"
          />
          <section className="flex justify-start">
            <Link
              className="detalles mono-ui inline-flex items-center justify-center text-sm text-[var(--text)] text-center w-full max-w-[220px] m-0 px-4 py-3 border border-[var(--border)] border-l-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
              href={localizeHref("/reparaciones", locale)}
            >
              {t.cta}
            </Link>
          </section>
        </figure>
        <aside className="flex justify-center align-middle lg:col-start-3 lg:col-end-6 bg-[var(--panel)] border border-[var(--border)] lg:min-h-[320px] py-4 px-0">
          <MagicCard
            className="h-full w-full border-0 no-inner-border"
            gradientSize={170}
            gradientOpacity={0.12}
            gradientColor="rgba(0, 255, 225, 0.22)"
            gradientFrom="var(--accent)"
            gradientTo="#7c818b"
          >
            <BlurFade inView delay={0.1} offset={12} className="flex h-full items-center justify-center">
              <figure
                aria-label={detailAlt}
                role="img"
                className="relative w-full min-h-[280px] h-[300px] md:h-[360px] lg:h-[420px] overflow-hidden py-4"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url("/croquis/svgs/03.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "58% 32%",
                    backgroundSize: "180%",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
              </figure>
            </BlurFade>
          </MagicCard>
        </aside>
      </section>
    </>
  );
}
