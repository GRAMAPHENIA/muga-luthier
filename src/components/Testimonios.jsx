import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

export default function Testimonios({ testimonio }) {
  return (
    <>
      <div className="seamless-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonio.map((testimonio, index) => (
          <BlurFade
            key={testimonio.img || `${testimonio.author}-${index}`}
            inView
            delay={Math.min(index * 0.05, 0.24)}
            offset={10}
            className="h-full bg-[var(--panel)] content-auto"
          >
            <MagicCard
              className="h-full border-0"
              gradientSize={180}
              gradientOpacity={0.18}
              gradientColor="rgba(0, 255, 225, 0.35)"
              gradientFrom="var(--accent)"
              gradientTo="#7c818b"
            >
              <div className="flex h-[260px] min-h-[260px] flex-col">
                <section className="border-b border-[var(--border)] px-6 py-4">
                  <strong className="mono-ui text-xs text-[var(--accent)]">
                    {testimonio.author}
                  </strong>
                </section>
                <div className="flex-1 px-6 py-5 break-words">
                  <span className="text-[var(--text)] leading-relaxed">
                    {testimonio.comment}
                  </span>
                </div>
                <div
                  className="mt-auto h-12 border-t border-[var(--border)] px-6 flex items-center justify-start gap-1 text-[var(--muted)]"
                  aria-hidden="true"
                >
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </>
  );
}
