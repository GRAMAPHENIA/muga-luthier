import Testimonios from "../components/Testimonios";

const testimoniosData = [
  {
    comment:
      "Gran profesional, dispuesto y dedicado al trabajo. Llevé 2 instrumentos para calibración y reparación y realizó un trabajo espectacular.",
    author: "Renzo Di Lorenzo",
    img: "/miniaturas/comentarios/dilorenzo.webp",
  },
  {
    comment: "Un lujoooo, sigan así.",
    author: "Martin Cioffi",
    img: "/miniaturas/comentarios/martin_cioffi.webp",
  },
  {
    comment: "Excelente servicio!!!",
    author: "Juan L.",
    img: "/miniaturas/comentarios/juanl.webp",
  },
  {
    comment: "Zarpado lugar.",
    author: "Franco Fuentes",
    img: "/miniaturas/comentarios/francofuentes.webp",
  },
  {
    comment:
      "Súper recomendable, buena predisposición, la mejor onda, un grande Esteban!",
    author: "Emiliano Foglia",
    img: "/miniaturas/comentarios/emilianofoglia.webp",
  },
  {
    comment: "Recomiendo.",
    author: "Ezequiel Carpena",
    img: "/miniaturas/comentarios/carpena.webp",
  },
];

const Comentarios = () => {
  return (
    <section className="animate w-full my-2 gap-2" id="comentarios">
      <figure className="flex flex-col align-middle justify-center p-0 bg-[var(--panel)] w-full">
        <div className="font-light text-[var(--accent)]">
          <Testimonios testimonio={testimoniosData} />
        </div>
      </figure>
    </section>
  );
};

export default Comentarios;
