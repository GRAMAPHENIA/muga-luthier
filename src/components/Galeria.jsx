import AsideBuconero from "@/components/AsideBuconero";
import PresentacionBuconero from "@/components/PresentacionBuconero";
import { MagicCard } from "@/components/ui/magic-card";

export default function BodyBuconero() {
  return (
    <section id="galeria" className="animate w-full grid lg:grid-cols-5 my-2 seamless-grid seamless-grid-no-top">
      <aside className="order-2 lg:order-1 lg:col-start-1 lg:col-end-4 bg-[var(--panel)] border border-[var(--border)] lg:min-h-[320px]">
        <MagicCard
          className="h-full border-0"
          gradientSize={170}
          gradientOpacity={0.12}
          gradientColor="rgba(0, 255, 225, 0.22)"
          gradientFrom="var(--accent)"
          gradientTo="#7c818b"
        >
          <AsideBuconero />
        </MagicCard>
      </aside>
      <figure className="order-1 lg:order-2 relative flex flex-col align-middle justify-between p-0 lg:col-start-4 lg:col-end-6 bg-[var(--panel)] border border-[var(--border)] w-full lg:min-h-[320px]">
        <PresentacionBuconero />
      </figure> 
    </section>
  );
}
