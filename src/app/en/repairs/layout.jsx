import Header from "@/components/Header";
import Contactos from "@/components/Contactos";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <section>
        <Header locale="en" />
      </section>
      <div>{children}</div>
      <section>
        <Contactos locale="en" />
        <Footer locale="en" />
      </section>
    </>
  );
}
