import React from "react";
import Image from "next/image";
import Link from "next/link";
import Diliberto from "@/public/svgs/marcas/diliberto.svg";
import Gotoh from "@/public/svgs/marcas/gotoh.svg";
import Hosco from "@/public/svgs/marcas/hosco.svg";
import DSPickups from "@/public/svgs/marcas/dspickups.svg";

const marcas = [
  {
    src: Diliberto,
    alt: "Logo de marca Diliberto",
    id: "diliberto",
    href: "https://www.dilibertopickups.com/",
  },
  {
    src: Gotoh,
    alt: "Logo de marca Gotoh",
    id: "gotoh",
    href: "https://g-gotoh.com/?lang=en",
  },
  {
    src: Hosco,
    alt: "Logo de marca Hosco",
    id: "hosco",
    href: "/",
  },
  {
    src: DSPickups,
    alt: "Logo de marca DS Pickups",
    id: "ds",
    href: "https://www.dspickups.com.ar/",
  },
];

const ConectorMarcasEira = () => {
  return (
    <section className="grid grid-cols-4 seamless-grid">
      {marcas.map((marca) => (
        <Link
          key={marca.id}
          href={marca.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir sitio de ${marca.id}`}
          className="block"
        >
          <figure className="relative flex justify-center bg-[var(--panel)] hover:bg-[var(--panel-strong)]">
            <Image
              src={marca.src}
              alt={marca.alt}
              width={100}
              height={100}
              className="py-4"
            />
          </figure>
        </Link>
      ))}
    </section>
  );
};

export default ConectorMarcasEira;
