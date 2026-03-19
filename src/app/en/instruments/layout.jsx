import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <section>
        <Header locale="en" />
      </section>
      <div>{children}</div>
      <Footer locale="en" />
    </>
  );
}
