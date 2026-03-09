import PageIntroHeader from "@/components/PageIntroHeader";

export default function HeaderTestimonios() {
  return (
    <section className="grid grid-cols-1 my-2 seamless-grid seamless-grid-no-top">
      <PageIntroHeader
        kicker="Sección"
        title="Testimonios"
        description="Opiniones de clientes sobre procesos, reparaciones y construcciones del taller."
      />
    </section>
  );
}
