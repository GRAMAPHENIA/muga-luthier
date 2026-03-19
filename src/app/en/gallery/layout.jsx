import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactos from "@/components/Contactos";

export default function Layout({ children }) {
  return (
    <>
      <section>
        <Header locale="en" />
      </section>
      <div>{children}</div>
      <Contactos locale="en" />
      <Footer locale="en" />
    </>
  );
}
