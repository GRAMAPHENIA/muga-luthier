import Image from "next/image";
import Logo from "@/public/dicorato-logo-solo-apellido.svg";

import NavLink from "@/components/NavLink";
import { localizeHref } from "@/lib/i18n";

const copy = {
  es: {
    aria: "Menú principal",
    home: "Inicio",
    gallery: "Galería",
    instruments: "Instrumentos",
    repairs: "Reparaciones",
    about: "Acerca de",
    workshop: "Taller",
  },
  en: {
    aria: "Main menu",
    home: "Home",
    gallery: "Gallery",
    instruments: "Instruments",
    repairs: "Repairs",
    about: "About",
    workshop: "Workshop",
  },
};

export default function NavegacionMenu({ locale = "es" }) {
  const t = copy[locale] || copy.es;

  return (
    <section className="grid-cols-1 w-full text-center">
      <nav aria-label={t.aria}>
        <div className="modal-menu-brand">
          <Image
            className="mx-auto"
            src={Logo}
            alt="imagen del logo de la empresa"
            width={140}
            height={49}
          />
          <span className="text-[var(--muted)] mono-ui text-xs">. Luthier .</span>
        </div>
        <ul className="seamless-grid mt-6 list-none p-0">
          <li className="modal-menu-item">
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text={t.home}
              href={localizeHref("/", locale)}
            />
          </li>
          <li className="modal-menu-item">
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text={t.gallery}
              href={localizeHref("/galeria", locale)}
            />
          </li>
          <li className="modal-menu-item">
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text={t.instruments}
              href={localizeHref("/instrumentos", locale)}
            />
          </li>
          <li className="modal-menu-item">
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text={t.repairs}
              href={localizeHref("/reparaciones", locale)}
            />
          </li>
          <li className="modal-menu-item">
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text={t.about}
              href={localizeHref("/acerca-de", locale)}
            />
          </li>
          <li className="modal-menu-item">
            <NavLink
              activeClasses="flex justify-center text-[var(--accent)] px-4 py-2 bg-[var(--panel-strong)] border border-[var(--accent-soft)]"
              text={t.workshop}
              href={localizeHref("/taller", locale)}
            />
          </li>
        </ul>
      </nav>
    </section>
  );
}
