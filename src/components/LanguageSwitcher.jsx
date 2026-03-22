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
    <div className="flex h-10 items-stretch">
      <Link
        href={esHref}
        className={`tile-link mono-ui inline-flex h-10 w-10 items-center justify-center m-0 p-0 text-[10px] leading-none ${
          locale === "es"
            ? "bg-[var(--panel-strong)] text-[var(--accent)]"
            : "bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--accent)]"
        }`}
        aria-label="Cambiar idioma a español"
      >
        ES
      </Link>
      <Link
        href={enHref}
        className={`tile-link mono-ui inline-flex h-10 w-10 items-center justify-center border-l-0 m-0 p-0 text-[10px] leading-none ${
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
