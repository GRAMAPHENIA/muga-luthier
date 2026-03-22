import PageIntroHeader from "@/components/PageIntroHeader";

const copy = {
  es: {
    section: "Sección",
    title: "Testimonios",
    description: "Opiniones de clientes sobre procesos, reparaciones y construcciones del taller.",
  },
  en: {
    section: "Section",
    title: "Testimonials",
    description: "Client feedback about workshop processes, repairs, and custom builds.",
  },
};

export default function HeaderTestimonios({ locale = "es" }) {
  const t = copy[locale] || copy.es;

  return (
    <section className="grid grid-cols-1 my-2 seamless-grid seamless-grid-no-top">
      <PageIntroHeader
        kicker={t.section}
        title={t.title}
        description={t.description}
      />
    </section>
  );
}
