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
    "Cómo moverte en Lima: apps (Uber/Cabify/InDrive), aeropuerto, Metropolitano, horarios punta y tips de seguridad para chilenos.",
};

export default function TransportPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Transporte"
        description={
          <>
            Lo más práctico es usar <strong>aplicaciones de taxi</strong>. Para
            trayectos definidos, el <strong>Metropolitano</strong> funciona
            bien. Evita tomar taxis directamente en la calle. Aquí lo esencial
            para moverte entre Miraflores, Barranco, San Isidro y el aeropuerto.
          </>
        }
        // If need buttons uncomment below code
        // actions={[
        //   {
        //     href: "/introduccion",
        //     label: "Empezar por la Introducción",
        //     variant: "primary",
        //   },
        //   { href: "/mapa", label: "Ver mapa con destinos", variant: "dark" },
        // ]}
      />

      {/* Transpor quick tips section */}
      <ThreeWaySection
        srTitle="Esenciales al llegar"
        sectionTitle="Esenciales al llegar"
        items={TRANSPORT_QUICK_TIPS}
        defaultCtaVariant="primary"
      />

      {/* Airport section  */}
      <TwoWaySection
        srTitle="Traslado del aeropuerto a la zona turística"
        sectionTitle="Traslado del aeropuerto a la zona turística"
        items={AIRPORT_TO_CITY}
      />

      {/* Transpor apps section */}
      <ThreeWaySection
        srTitle="Moverse con Apps"
        sectionTitle="Moverse con Apps"
        items={MOVE_WITH_APPS}
        defaultCtaVariant="primary"
      />

      {/* Metropolitano */}
      <ThreeWaySection
        srTitle="Metropolitano (sistema de transporte público)"
        sectionTitle="Metropolitano (sistema de transporte público)"
        items={METROPOLITANO_INFO}
        defaultCtaVariant="primary"
      />

      {/* Rutas comunes section  */}
      <TwoWaySection
        srTitle="Rutas comunes (tiempos aprox.)"
        sectionTitle="Rutas comunes (tiempos aprox.)"
        items={COMMON_ROUTES}
      />

      {/* Otros medios */}
      <ThreeWaySection
        srTitle="Otros medios"
        sectionTitle="Otros medios"
        items={OTHER_MEANS}
        defaultCtaVariant="primary"
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
