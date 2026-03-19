import React from "react";
import Image from "next/image";
import Link from "next/link";
import { localizeHref } from "@/lib/i18n";

import BuconeroTipografia from "@/public/instrumentos/buconero.svg";
import VellutoTipografia from "@/public/instrumentos/velluto.svg";
import EiraTipografia from "@/public/instrumentos/eira.svg";

const instrumentos = [
  {
    nombre: "Buconero",
    imagen: BuconeroTipografia,
    href: "/instrumentos/buconero",
    width: 150,
    height: 150,
  },
  {
    nombre: "Velluto",
    imagen: VellutoTipografia,
    href: "/instrumentos/velluto",
    width: 150,
    height: 150,
  },
  {
    nombre: "Eira",
    imagen: EiraTipografia,
    href: "/instrumentos/eira",
    width: 100,
    height: 100,
  },
];

const HeaderInstrumentos = ({ locale = "es" }) => {
  return (
    <>
      <section className="grid grid-cols-3 seamless-grid">
        {instrumentos.map((instrumento) => (
          <figure
            key={instrumento.nombre}
            className="flex justify-center align-middle col-span-1 bg-[var(--panel)] border border-[var(--border)] hover:bg-[var(--panel-strong)]"
          >
              <Link
                className="flex justify-center align-middle w-full"
                href={localizeHref(instrumento.href, locale)}
              >
              <Image
                src={instrumento.imagen}
                alt={`Fotografía de una guitarra, modelo ${instrumento.nombre}. Diseñada y fabricada por Esteban M. Di corato.`}
                width={instrumento.width}
                height={instrumento.height}
                className="py-6 lg:py-8"
              />
            </Link>
          </figure>
        ))}
      </section>
    </>
  );
};

export default HeaderInstrumentos;
