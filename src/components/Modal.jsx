"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Menu from "@/public/menu.svg";
import NavegacionMenu from "@/components/NavegacionMenu.jsx";

const BLOCKED_SCROLL_KEYS = new Set([
  " ",
  "Spacebar",
  "PageUp",
  "PageDown",
  "End",
  "Home",
  "ArrowUp",
  "ArrowDown",
]);

const copy = {
  es: {
    openNav: "Abrir menu de navegacion",
    closeNav: "Cerrar menu de navegacion",
    title: "Menu principal",
    close: "Cerrar",
  },
  en: {
    openNav: "Open navigation menu",
    closeNav: "Close navigation menu",
    title: "Main menu",
    close: "Close",
  },
};

export default function Modal({ locale = "es" }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = copy[locale] || copy.es;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const preventScroll = (event) => {
      event.preventDefault();
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (BLOCKED_SCROLL_KEYS.has(event.key)) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <figure className="flex justify-end col-start-4 col-end-5">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={t.openNav}
          className="tile-link w-10 h-10"
        >
          <Image
            className="text-center p-2"
            src={Menu}
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
          />
        </button>
      </figure>

      {isOpen && (
        <div
          className="container-modal container-modal-open"
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-modal-title"
        >
          <button
            type="button"
            aria-label={t.closeNav}
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          />
          <div className="content-modal relative z-10">
            <header className="modal-menu-header">
              <h2 id="menu-modal-title" className="mono-ui text-xs text-[var(--muted)]">
                {t.title}
              </h2>
              <button
                type="button"
                aria-label={t.close}
                className="mono-ui text-xs text-[var(--muted)] hover:text-[var(--accent)] border border-[var(--border)] px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t.close}
              </button>
            </header>
            <NavegacionMenu locale={locale} />
          </div>
        </div>
      )}
    </>
  );
}
