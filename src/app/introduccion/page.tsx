import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import InfoBox from "../components/info-box";
import { CtaBanner } from "../components/cta-component";
import { TwoWaySection } from "../components/2way-column-section-component";
import {
  COMMUNICATIONS,
  ESSENTIALS,
  MONEY,
  OTHER_TIPS,
  ROUTES,
} from "../lib/copy-content";

// Sections content

// Metadata
export const metadata = {
  title: "Transporte — Lima para Chilenos",
  description:
    "Cómo moverte en Lima: apps (Uber/Cabify/InDrive), aeropuerto, Metropolitano, horarios punta y tips de seguridad para chilenos.",
};

export default function IntroPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Introducción"
        description={
          <>
            Qué esperar al llegar, cómo orientarte y los atajos para adaptarte
            en horas (no días). Si vienes de 🇨🇱, esta es la guía rápida para
            partir bien.
          </>
        }
        actions={[
          {
            href: "/introduccion",
            label: "Empezar por la Introducción",
            variant: "primary",
          },
          { href: "/mapa", label: "Ver mapa con destinos", variant: "dark" },
        ]}
      />

      {/* Essentials upon arrival section */}
      <ThreeWaySection
        srTitle="Esenciales al llegar"
        sectionTitle="Esenciales al llegar"
        items={ESSENTIALS}
        defaultCtaVariant="primary"
      />

      {/* Arrival checklist section */}
      <InfoBox
        title="Checklist al aterrizar"
        variant="plain"
        items={[
          <>Conéctate: compra eSIM o activa plan internacional. </>,
          <>Plata: cambia un poco a soles o usa cajero de banco grande.</>,
          <>
            Traslado: pide taxi por app; destino Miraflores/Barranco/San Isidro.
          </>,
          <>Ubícate: malecón = norte-sur; vía expresa = eje central.</>,
          <>Cuídate: Guarda el teléfono en esquinas muy concurridas.</>,
        ]}
      />

      {/* Communications section */}
      <ThreeWaySection
        srTitle="Conectividad"
        sectionTitle="Conectividad"
        items={COMMUNICATIONS}
        defaultCtaVariant="primary"
      />

      {/* Money and payments section */}
      <ThreeWaySection
        srTitle="Dinero: cambio, tarjetas y Yape/Plin"
        sectionTitle="Dinero: cambio, tarjetas y Yape/Plin"
        items={MONEY}
        defaultCtaVariant="primary"
      />

      {/* Rutas rection */}
      <ThreeWaySection
        srTitle="Barrios recomendados para alojar"
        sectionTitle="Barrios recomendados para alojar"
        items={ROUTES}
        defaultCtaVariant="primary"
      />

      {/* Horarios & costumbres section  */}
      <TwoWaySection
        srTitle="Horarios & costumbres"
        sectionTitle="Horarios & costumbres"
        items={OTHER_TIPS}
      />

      {/* CTA section */}
      <CtaBanner
        title="Primero la seguridad"
        description="Revisa las advertencias rápidas antes de salir a patear barrios."
        actions={[
          {
            href: "/advertencias",
            label: "Ver Advertencias",
            variant: "primary",
          },
          { href: "/mapa", label: "Abrir mapa", variant: "dark" },
        ]}
      />
    </main>
  );
}
