"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, swapLocalePath } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  const esHref = swapLocalePath(pathname, "es");
  const enHref = swapLocalePath(pathname, "en");

  return (
    <div className="flex items-center gap-0 border border-[var(--border)]">
      <Link
        href={esHref}
        className={`mono-ui px-2 py-1 text-[10px] ${
          locale === "es"
            ? "bg-[var(--panel-strong)] text-[var(--accent)]"
            : "bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--accent)]"
        }`}
        aria-label="Cambiar idioma a espanol"
      >
        ES
      </Link>
      <Link
        href={enHref}
        className={`mono-ui px-2 py-1 text-[10px] ${
          locale === "en"
            ? "bg-[var(--panel-strong)] text-[var(--accent)]"
            : "bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--accent)]"
        }`}
        aria-label="Switch language to English"
      >
        EN
      </Link>
    </div>
  );
}
