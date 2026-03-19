import { Marquee } from "@/components/ui/marquee";

const tagsByLocale = {
  es: [
    "Luthieria Artesanal",
    "Construcciones A Medida",
    "Calibracion Profesional",
    "Maderas Recuperadas",
    "Diseno De Autor",
    "Reparaciones",
    "Setups Personalizados",
    "Hecho En Buenos Aires",
  ],
  en: [
    "Handcrafted Lutherie",
    "Custom Builds",
    "Professional Setup",
    "Reclaimed Woods",
    "Author Design",
    "Repairs",
    "Custom Setups",
    "Made In Buenos Aires",
  ],
};

export default function MagicRibbon({ locale = "es" }) {
  const tags = tagsByLocale[locale] || tagsByLocale.es;

  return (
    <section className="grid my-2 seamless-grid seamless-grid-no-top">
      <div className="relative overflow-hidden bg-[var(--panel)] py-3">
        <Marquee pauseOnHover className="[--duration:28s]">
          {tags.map((tag) => (
            <span key={tag} className="chip-ui px-4 py-2 text-xs">
              {tag}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--panel)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--panel)] to-transparent" />
      </div>
    </section>
  );
}
