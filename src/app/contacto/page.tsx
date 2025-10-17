import Link from "next/link";
import ContactForm from "../components/contact-form";
import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import { CONTACT_TIPS } from "../lib/copy-content";

export const metadata = {
  title: "Contacto — Lima para Chilenos",
  description:
    "Sugerencias, correcciones y reportes de errores para la guía. Escríbenos rápido.",
};

export default function ContactoPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Contacto"
        description={
          <>
            ¿Viste algo para mejorar? ¿Mapa desactualizado? Envíanos un mensaje
            o correo. Leemos todo y actualizamos seguido.
          </>
        }
      />
      {/* Contact tips section */}
      <ThreeWaySection
        srTitle="Comentarios y mejoras"
        sectionTitle="Comentarios y mejoras"
        items={CONTACT_TIPS}
        defaultCtaVariant="primary"
      />
      {/* <Contact form section /> */}
      <ContactForm />
    </main>
  );
}
