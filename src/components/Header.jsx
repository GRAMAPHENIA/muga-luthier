import Image from "next/image";
import Link from "next/link";

import Modal from "@/components/Modal.jsx";

import LogoApellido from "@/public/dicorato-logo-solo-apellido.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 grid grid-cols-4 bg-[var(--bg-soft)] p-3 border border-[var(--border)] border-b-[1px]">
      <figure className="flex justify-start col-start-1 col-end-2">
        <Link href="/">
          <Image
            className="ml-1"
            src={LogoApellido}
            alt="Logo de la marca con el apellido solamente"
            width={132}
            height={30}
          />
        </Link>
      </figure>
      <Modal />
    </header>
  );
}
