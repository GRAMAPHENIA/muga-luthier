import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/ContactForm";
import PageIntroHeader from "@/components/PageIntroHeader";

import Instagram from "@/public/instagram.svg";
import Facebook from "@/public/facebook.svg";
import Youtube from "@/public/youtube.svg";
import Wsap from "@/public/wsap.svg";
import Email from "@/public/email.svg";
import Pua from "@/public/pua.svg";

export default function BodyBuconero() {
  return (
    <>
      <section
        id="contacto"
        className="animate grid grid-cols-3 lg:grid-cols-6 w-full seamless-grid seamless-grid-no-top text-center items-stretch justify-items-stretch"
      >
        <Link
          href="https://www.instagram.com/di_corato_luthier/"
          className="tile-link w-full h-full min-h-[64px] md:min-h-[72px] p-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir Instagram de Di Corato Luthier"
        >
          <span className="flex h-full w-full items-center justify-center p-2">
            <Image className="block h-5 w-5 md:h-6 md:w-6" src={Instagram} alt="Icono de la red social Instagram"></Image>
          </span>
        </Link>
        <Link
          href="https://www.facebook.com/dicorato.luthier"
          className="tile-link w-full h-full min-h-[64px] md:min-h-[72px] p-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir Facebook de Di Corato Luthier"
        >
          <span className="flex h-full w-full items-center justify-center p-2">
            <Image className="block h-5 w-5 md:h-6 md:w-6" src={Facebook} alt="Icono de la red social Facebook"></Image>
          </span>
        </Link>
        <Link
          href="https://www.youtube.com/@dicorato.luthier"
          className="tile-link w-full h-full min-h-[64px] md:min-h-[72px] p-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir canal de YouTube de Di Corato Luthier"
        >
          <span className="flex h-full w-full items-center justify-center p-2">
            <Image className="block h-5 w-5 md:h-6 md:w-6" src={Youtube} alt="Icono de la red social Youtube"></Image>
          </span>
        </Link>
        <Link
          href="https://wa.me/5491154637450"
          className="tile-link w-full h-full min-h-[64px] md:min-h-[72px] p-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir chat de WhatsApp"
        >
          <span className="flex h-full w-full items-center justify-center p-2">
            <Image className="block h-5 w-5 md:h-6 md:w-6" src={Wsap} alt="Icono de la red social Whatsapp"></Image>
          </span>
        </Link>
        <Link
          href="mailto:dicoratoluthier@gmail.com"
          className="tile-link w-full h-full min-h-[64px] md:min-h-[72px] p-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar correo a Di Corato Luthier"
        >
          <span className="flex h-full w-full items-center justify-center p-2">
            <Image className="block h-5 w-5 md:h-6 md:w-6" src={Email} alt="Icono del Email"></Image>
          </span>
        </Link>
        <Link
          href="/"
          className="tile-link w-full h-full min-h-[64px] md:min-h-[72px] p-0"
          aria-label="Volver al inicio"
        >
          <span className="flex h-full w-full items-center justify-center p-2">
            <Image className="block h-5 w-5 md:h-6 md:w-6" src={Pua} alt="Icono del Email"></Image>
          </span>
        </Link>
      </section>
      <section
        className="animate w-full grid lg:grid-cols-5 my-2 seamless-grid seamless-grid-no-top"
        id="contactos"
      >
        <figure className="relative flex flex-col align-middle justify-between p-0 lg:col-start-1 lg:col-end-3 bg-[var(--panel)] border border-[var(--border)] w-full">
          <PageIntroHeader
            kicker="Sección"
            title="Contacto"
            description="Escribí tu consulta y recibí una respuesta para coordinar el siguiente paso."
            className="border-0 bg-transparent p-6 lg:p-10"
          />
        </figure>
        <figure className="flex flex-col align-middle justify-center p-0 lg:col-start-3 lg:col-end-6 bg-[var(--panel)] border border-[var(--border)] w-full">
          <ContactForm />
        </figure>
      </section>
    </>
  );
}
