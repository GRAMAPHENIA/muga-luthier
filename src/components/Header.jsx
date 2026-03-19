import Image from "next/image";
import Link from "next/link";

import Modal from "@/components/Modal.jsx";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { localizeHref } from "@/lib/i18n";

import LogoApellido from "@/public/dicorato-logo-solo-apellido.svg";

export default function Header({ locale = "es" }) {
  return (
    <header className="sticky top-0 z-40 grid grid-cols-4 bg-[var(--bg-soft)] p-3 border border-[var(--border)] border-b-[1px]">
      <figure className="flex justify-start col-start-1 col-end-2">
        <Link href={localizeHref("/", locale)}>
          <Image
            className="ml-1"
            src={LogoApellido}
            alt="Logo de la marca con el apellido solamente"
            width={132}
            height={30}
          />
        </Link>
      </figure>
      <div className="col-start-3 col-end-4 flex items-center justify-end pr-2">
        <LanguageSwitcher />
      </div>
      <Modal locale={locale} />
    </header>
  );
}
