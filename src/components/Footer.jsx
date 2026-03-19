import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoApellido from "@/public/dicorato-logo-solo-apellido.svg";
import { localizeHref } from "@/lib/i18n";

const copy = {
  es: {
    sections: [
      {
        title: "Navegacion",
        links: [
          { title: "Inicio", url: "/" },
          { title: "Modelos", url: "/#modelos" },
          { title: "Galeria", url: "/#galeria" },
          { title: "Contacto", url: "/#contacto" },
        ],
      },
      {
        title: "Servicios",
        links: [
          { title: "Construcciones", url: "/#contactos" },
          { title: "Reparaciones", url: "/#reparaciones" },
        ],
      },
      {
        title: "Redes",
        links: [
          { title: "WhatsApp", url: "https://wa.me/5491154637450" },
          { title: "Instagram", url: "https://www.instagram.com/di_corato_luthier/" },
          { title: "Facebook", url: "https://www.facebook.com/dicorato.luthier" },
          { title: "YouTube", url: "https://www.youtube.com/@dicorato.luthier" },
          { title: "Email", url: "mailto:dicoratoluthier@gmail.com" },
        ],
      },
    ],
    blurb:
      "Instrumentos de autor, reparaciones y trabajo artesanal enfocado en sonido, tocabilidad y durabilidad.",
    cta: "Escribi tu consulta",
  },
  en: {
    sections: [
      {
        title: "Navigation",
        links: [
          { title: "Home", url: "/" },
          { title: "Models", url: "/#modelos" },
          { title: "Gallery", url: "/#galeria" },
          { title: "Contact", url: "/#contacto" },
        ],
      },
      {
        title: "Services",
        links: [
          { title: "Custom builds", url: "/#contactos" },
          { title: "Repairs", url: "/#reparaciones" },
        ],
      },
      {
        title: "Social",
        links: [
          { title: "WhatsApp", url: "https://wa.me/5491154637450" },
          { title: "Instagram", url: "https://www.instagram.com/di_corato_luthier/" },
          { title: "Facebook", url: "https://www.facebook.com/dicorato.luthier" },
          { title: "YouTube", url: "https://www.youtube.com/@dicorato.luthier" },
          { title: "Email", url: "mailto:dicoratoluthier@gmail.com" },
        ],
      },
    ],
    blurb:
      "Author instruments, repairs, and handcrafted work focused on tone, playability, and long-term durability.",
    cta: "Send your inquiry",
  },
};

const Footer = ({ locale = "es" }) => {
  const t = copy[locale] || copy.es;

  return (
    <>
      <footer className="animate grid grid-cols-1 md:grid-cols-5 mb-2 seamless-grid seamless-grid-no-top">
        <div className="md:col-span-2 bg-[var(--panel)] px-6 py-8 lg:px-8 lg:py-10 text-left md:min-h-[220px] flex flex-col justify-between">
          <Image
            className="mx-0"
            src={LogoApellido}
            alt="Logo de la marca con el apellido solamente"
            width={110}
            height={26}
          />
          <p className="mono-ui mt-4 text-xs text-[var(--muted)]">Di Corato Luthier</p>
          <p className="mt-3 max-w-[42ch] text-sm text-[var(--muted)] md:text-base">
            {t.blurb}
          </p>
          <div className="mt-5">
            <Link
              className="detalles mono-ui inline-flex items-center justify-center text-sm text-[var(--text)] text-center w-full sm:w-[220px] m-0 px-4 py-3 border border-[var(--border)] hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
              href={localizeHref("/#contactos", locale)}
            >
              {t.cta}
            </Link>
          </div>
        </div>
        {t.sections.map((section) => (
          <div
            key={section.title}
            className="md:col-span-1 bg-[var(--panel)] px-6 py-8 lg:px-8 lg:py-10 text-left md:min-h-[220px]"
          >
            <h3 className="mono-ui mb-5 text-xs text-[var(--muted)]">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.url}>
                  <Link
                    className="text-[var(--muted)] hover:text-[var(--accent)] font-light"
                    href={link.url.startsWith("/") ? localizeHref(link.url, locale) : link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <p className="text-center text-[var(--muted)] pb-2 font-light mono-ui text-xs">
        v2.0.0 - 2026 -{" "}
        <Link
          className="text-[var(--text)] hover:text-[var(--accent)]"
          href="https://www.muga.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          muga.dev
        </Link>
      </p>
    </>
  );
};

export default Footer;
