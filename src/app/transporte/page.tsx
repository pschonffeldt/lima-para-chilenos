import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import {
  AIRPORT_TO_CITY,
  COMMON_ROUTES,
  METROPOLITANO_INFO,
  MOVE_WITH_APPS,
  OTHER_MEANS,
  TRANSPORT_QUICK_TIPS,
} from "../lib/copy-content";
import { TwoWaySection } from "../components/2way-column-section-component";
import { CtaBanner } from "../components/cta-component";

export const metadata = {
  title: "Transporte — Lima para Chilenos",
  description:
    "Cómo moverte en Lima: apps (Uber/Cabify), aeropuerto, Metropolitano, horarios punta y tips de seguridad para chilenos.",
};

export default function TransportPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Transporte"
        description={
          <>
            Lo más práctico es usar aplicaciones de transporte (Uber, Cabify).
            Evita taxis de calle. Aquí tienes tiempos y consejos para moverte
            entre Miraflores, Barranco, San Isidro y el aeropuerto de forma
            segura.
          </>
        }
      />

      {/* Upon arrival tips section */}
      <ThreeWaySection
        srTitle="Esenciales al llegar"
        sectionTitle="Esenciales al llegar"
        items={TRANSPORT_QUICK_TIPS}
        defaultCtaVariant="primary"
      />

      {/* Airport transport section  */}
      <TwoWaySection
        srTitle="Traslado del aeropuerto a la zona turística"
        sectionTitle="Traslado del aeropuerto a la zona turística"
        items={AIRPORT_TO_CITY}
      />

      {/* Transportation apps section */}
      <ThreeWaySection
        srTitle="Moverse con Apps"
        sectionTitle="Moverse con Apps"
        items={MOVE_WITH_APPS}
        defaultCtaVariant="primary"
      />

      {/* Public transportation section */}
      <ThreeWaySection
        srTitle="Metropolitano (sistema de transporte público)"
        sectionTitle="Metropolitano (sistema de transporte público)"
        items={METROPOLITANO_INFO}
        defaultCtaVariant="primary"
      />

      {/* Common routes section  */}
      <TwoWaySection
        srTitle="Rutas comunes (tiempos aprox.)"
        sectionTitle="Rutas comunes (tiempos aprox.)"
        items={COMMON_ROUTES}
      />

      {/* Other ways of moving section */}
      <ThreeWaySection
        srTitle="Otros medios"
        sectionTitle="Otros medios"
        items={OTHER_MEANS}
        defaultCtaVariant="primary"
      />

      {/* CTA section */}
      <CtaBanner
        title="Primero decide dónde y qué hacer"
        description="Elige tu barrio base y arma actividades por tiempo y estilo."
        actions={[
          {
            href: "/barrios",
            label: "Ver Barrios",
            variant: "primary",
          },
          { href: "/actividades", label: "Abrir Actividades", variant: "dark" },
        ]}
      />
    </main>
  );
}
