import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/ContactForm";
import PageIntroHeader from "@/components/PageIntroHeader";
import { localizeHref } from "@/lib/i18n";

import Instagram from "@/public/instagram.svg";
import Facebook from "@/public/facebook.svg";
import Youtube from "@/public/youtube.svg";
import Wsap from "@/public/wsap.svg";
import Email from "@/public/email.svg";
import Pua from "@/public/pua.svg";

const copy = {
  es: {
    igLabel: "Abrir Instagram de Di Corato Luthier",
    fbLabel: "Abrir Facebook de Di Corato Luthier",
    ytLabel: "Abrir canal de YouTube de Di Corato Luthier",
    waLabel: "Abrir chat de WhatsApp",
    mailLabel: "Enviar correo a Di Corato Luthier",
    homeLabel: "Volver al inicio",
    section: "Seccion",
    title: "Contacto",
    description: "Escribi tu consulta y recibi una respuesta para coordinar el siguiente paso.",
  },
  en: {
    igLabel: "Open Di Corato Luthier Instagram",
    fbLabel: "Open Di Corato Luthier Facebook",
    ytLabel: "Open Di Corato Luthier YouTube channel",
    waLabel: "Open WhatsApp chat",
    mailLabel: "Send email to Di Corato Luthier",
    homeLabel: "Back to home",
    section: "Section",
    title: "Contact",
    description: "Send your inquiry and receive a reply to coordinate the next step.",
  },
};

export default function BodyBuconero({ locale = "es" }) {
  const t = copy[locale] || copy.es;

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
          aria-label={t.igLabel}
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
          aria-label={t.fbLabel}
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
          aria-label={t.ytLabel}
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
          aria-label={t.waLabel}
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
          aria-label={t.mailLabel}
        >
          <span className="flex h-full w-full items-center justify-center p-2">
            <Image className="block h-5 w-5 md:h-6 md:w-6" src={Email} alt="Icono del Email"></Image>
          </span>
        </Link>
        <Link
          href={localizeHref("/", locale)}
          className="tile-link w-full h-full min-h-[64px] md:min-h-[72px] p-0"
          aria-label={t.homeLabel}
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
            kicker={t.section}
            title={t.title}
            description={t.description}
            className="border-0 bg-transparent p-6 lg:p-10"
          />
        </figure>
        <figure className="flex flex-col align-middle justify-center p-0 lg:col-start-3 lg:col-end-6 bg-[var(--panel)] border border-[var(--border)] w-full">
          <ContactForm locale={locale} />
        </figure>
      </section>
    </>
  );
}
