import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
}) {
  return (
    <div
      className={cn("magic-card-lite group relative overflow-hidden rounded-[inherit]", className)}
      style={{
        "--magic-card-from": gradientFrom,
        "--magic-card-to": gradientTo,
        "--magic-card-overlay": gradientColor,
        "--magic-card-overlay-opacity": gradientOpacity,
      }}
    >
      <div className="magic-card-lite-overlay" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  );
}
