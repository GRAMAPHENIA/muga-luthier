import Link from "next/link";
import PageIntroHeader from "@/components/PageIntroHeader";
import { localizeHref } from "@/lib/i18n";

const copy = {
  es: {
    section: "Sección",
    title: "Galería",
    description:
      "Recorre procesos reales del taller y resultados finales en cada instrumento terminado.",
    cta: "Ver colección",
  },
  en: {
    section: "Section",
    title: "Gallery",
    description:
      "Browse real workshop processes and final results for each finished instrument.",
    cta: "View collection",
  },
};

export default function PresentacionBuconero({ locale = "es" }) {
  const t = copy[locale] || copy.es;

  return (
    <>
      <PageIntroHeader
        kicker={t.section}
        title={t.title}
        description={t.description}
        className="border-0 bg-transparent p-6 lg:p-10"
      />

      <section className="flex justify-start">
        <Link
          className="detalles mono-ui inline-flex items-center justify-center text-sm text-[var(--text)] text-center w-full max-w-[220px] m-0 px-4 py-3 border border-[var(--border)] border-l-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
          href={localizeHref("/galeria", locale)}
        >
          {t.cta}
        </Link>
      </section>
    </>
  );
}
