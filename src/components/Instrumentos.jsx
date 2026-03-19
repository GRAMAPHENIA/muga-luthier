import Link from "next/link";
import Image from "next/image";
import PageIntroHeader from "@/components/PageIntroHeader";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { localizeHref } from "@/lib/i18n";

import Eira from "/public/croquis/svgs/eira.svg";

const copy = {
  es: {
    section: "Seccion",
    title: "Instrumentos",
    description:
      "Explora modelos para musica clasica y contemporanea, con identidad propia en cada pieza.",
    cta: "Ver Modelos",
  },
  en: {
    section: "Section",
    title: "Instruments",
    description:
      "Explore models for classical and contemporary music, each with a distinct identity.",
    cta: "View Models",
  },
};

export default function Instrumentos({ locale = "es" }) {
  const t = copy[locale] || copy.es;

  return (
    <section
      id="modelos"
      className="animate w-full grid lg:grid-cols-5 my-2 seamless-grid seamless-grid-no-top"
    >
      <figure className="relative flex flex-col align-middle justify-between p-0 lg:col-start-2 lg:col-end-5 bg-[var(--panel)] border border-[var(--border)] w-full lg:hidden">
        <PageIntroHeader
          kicker={t.section}
          title={t.title}
          description={t.description}
          className="border-0 bg-transparent p-6 lg:p-10"
        />

        <section className="flex justify-start">
          <Link
            className="detalles mono-ui inline-flex items-center justify-center text-sm text-[var(--text)] text-center w-full max-w-[220px] m-0 px-4 py-3 border border-[var(--border)] border-l-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
            href={localizeHref("/instrumentos", locale)}
          >
            {t.cta}
          </Link>
        </section>
      </figure>
      <aside className="lg:col-start-1 lg:col-end-4 bg-[var(--panel)] border border-[var(--border)] lg:min-h-[320px] flex items-center justify-center">
        <MagicCard
          className="h-full w-full border-0"
          gradientSize={170}
          gradientOpacity={0.12}
          gradientColor="rgba(0, 255, 225, 0.22)"
          gradientFrom="var(--accent)"
          gradientTo="#7c818b"
        >
          <BlurFade inView delay={0.08} offset={12} className="flex h-full items-center justify-center">
            <Image
              width={760}
              height={540}
              src={Eira}
              alt="User"
              className="mx-auto my-auto p-6 md:p-8 w-full h-auto max-w-[320px] max-h-[220px] md:max-w-[520px] md:max-h-[360px] lg:max-w-[760px] lg:max-h-[540px] rotate-90"
            ></Image>
          </BlurFade>
        </MagicCard>
      </aside>
      <figure className="relative lg:flex flex-col align-middle justify-between p-0 lg:col-start-4 lg:col-end-6 bg-[var(--panel)] border border-[var(--border)] w-full hidden lg:min-h-[320px]">
        <PageIntroHeader
          kicker={t.section}
          title={t.title}
          description={t.description}
          className="border-0 bg-transparent p-6 lg:p-10"
        />

        <section className="flex justify-start">
          <Link
            className="detalles mono-ui inline-flex items-center justify-center text-sm text-[var(--text)] text-center w-full max-w-[220px] m-0 px-4 py-3 border border-[var(--border)] border-l-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
            href={localizeHref("/instrumentos", locale)}
          >
            {t.cta}
          </Link>
        </section>
      </figure>
    </section>
  );
}
