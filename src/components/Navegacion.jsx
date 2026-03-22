import Link from "next/link";
import { localizeHref } from "@/lib/i18n";

const copy = {
  es: {
    aria: "Navegación principal",
    home: "Inicio",
    instruments: "Instrumentos",
    repairs: "Reparaciones",
    about: "Acerca de",
    workshop: "Taller",
    contact: "Contacto",
  },
  en: {
    aria: "Main navigation",
    home: "Home",
    instruments: "Instruments",
    repairs: "Repairs",
    about: "About",
    workshop: "Workshop",
    contact: "Contact",
  },
};

export default function Navegacion({ locale = "es" }) {
  const t = copy[locale] || copy.es;

  return (
    <nav aria-label={t.aria} className="w-full seamless-grid text-center">
      <ul className="grid grid-cols-3 lg:grid-cols-6">
        <li>
          <Link href={localizeHref("/", locale)} className="tile-link p-4 w-full">
            {t.home}
          </Link>
        </li>
        <li>
          <Link href={localizeHref("/instrumentos", locale)} className="tile-link p-4 w-full">
            {t.instruments}
          </Link>
        </li>
        <li>
          <Link href={localizeHref("/reparaciones", locale)} className="tile-link p-4 w-full">
            {t.repairs}
          </Link>
        </li>
        <li>
          <Link href={localizeHref("/acerca-de", locale)} className="tile-link p-4 w-full">
            {t.about}
          </Link>
        </li>
        <li>
          <Link href={localizeHref("/taller", locale)} className="tile-link p-4 w-full">
            {t.workshop}
          </Link>
        </li>
        <li>
          <Link href={localizeHref("#contactos", locale)} className="tile-link p-4 w-full">
            {t.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
