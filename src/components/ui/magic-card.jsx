"use client";

import { useCallback } from "react";
import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 180,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
}) {
  const handlePointerEnter = useCallback((event) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    event.currentTarget.dataset.active = "true";
  }, []);

  const handlePointerMove = useCallback((event) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    event.currentTarget.dataset.active = "true";
  }, []);

  const handlePointerLeave = useCallback((event) => {
    event.currentTarget.dataset.active = "false";
  }, []);

  return (
    <div
      className={cn("magic-card-lite group relative overflow-hidden rounded-[inherit]", className)}
      data-active="false"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        "--magic-card-size": `${gradientSize * 4}px`,
        "--magic-card-from": gradientFrom,
        "--magic-card-to": gradientTo,
        "--magic-card-overlay": gradientColor,
        "--magic-card-overlay-opacity": gradientOpacity,
      }}
    >
      <div className="magic-card-lite-overlay" aria-hidden="true" />
      <div className="magic-card-lite-content">{children}</div>
    </div>
  );
}
