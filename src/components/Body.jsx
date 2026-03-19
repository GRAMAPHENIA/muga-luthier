import Aside from "@/components/Aside";
import Presentacion from "@/components/Presentacion";

export default function Body({ locale = "es" }) {
  return (
    <section className="w-full grid lg:grid-cols-5 my-2 seamless-grid">
      <figure className="p-4 lg:col-start-1 lg:col-end-3 bg-[var(--panel)] border border-b-0 border-[var(--border)] w-full lg:min-h-[340px]">
        <Presentacion locale={locale} />
      </figure>
      <aside className="p-4 lg:col-start-3 lg:col-end-6 bg-[var(--panel)] border border-b-0 border-[var(--border)] lg:min-h-[340px]">
        <Aside />
      </aside>
    </section>
  );
}
