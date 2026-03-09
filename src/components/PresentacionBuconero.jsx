import Link from "next/link";
import PageIntroHeader from "@/components/PageIntroHeader";

export default function PresentacionBuconero() {
  return (
    <>
      <PageIntroHeader
        kicker="Sección"
        title="Galería"
        description="Recorré procesos reales del taller y resultados finales en cada instrumento terminado."
        className="border-0 bg-transparent p-6 lg:p-10"
      />

      <section className="flex justify-start">
        <Link
          className="detalles mono-ui inline-flex items-center justify-center text-sm text-[var(--text)] text-center w-full max-w-[220px] m-0 px-4 py-3 border border-[var(--border)] border-l-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
          href="/galeria"
        >
          Ver colección
        </Link>
      </section>
    </>
  );
}
