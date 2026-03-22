import Aside from "@/components/Aside";
import Presentacion from "@/components/Presentacion";
import { MagicCard } from "@/components/ui/magic-card";

export default function Body({ locale = "es" }) {
  return (
    <section className="w-full grid lg:grid-cols-5 my-2 seamless-grid">
      <figure className="p-4 lg:col-start-1 lg:col-end-3 bg-[var(--panel)] border border-b-0 border-[var(--border)] w-full lg:min-h-[340px]">
        <Presentacion locale={locale} />
      </figure>
      <aside className="p-4 lg:col-start-3 lg:col-end-6 bg-[var(--panel)] border border-b-0 border-[var(--border)] lg:min-h-[340px]">
        <MagicCard
          className="h-full w-full border-0 no-inner-border"
          gradientSize={170}
          gradientOpacity={0.12}
          gradientColor="rgba(0, 255, 225, 0.22)"
          gradientFrom="var(--accent)"
          gradientTo="#7c818b"
        >
          <Aside locale={locale} />
        </MagicCard>
      </aside>
    </section>
  );
}
