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
  WHERE_TO_STAY,
} from "../lib/copy-content";

// Metadata
export const metadata = {
  title: "Introducción — Lima para Chilenos",
  description:
    "Cómo moverte en Lima: apps (Uber/Cabify/InDrive), aeropuerto, Metropolitano, horarios punta y tips de seguridad para chilenos.",
};

export default function IntroductionPage() {
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
          "Conéctate: compra eSIM o activa roaming.",
          "Efectivo: lleva unos soles; si no, usa cajeros de bancos grandes.",
          "Traslado aeropuerto → Miraflores/Barranco: 35–55 min fuera de punta; 60–90+ min en hora punta.",
          "Ubícate: malecón = norte-sur; vía expresa = eje central.",
          "Cuídate: Guarda el teléfono en esquinas muy concurridas.",
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
      <TwoWaySection
        srTitle="Pagos y divisas"
        sectionTitle="Pagos y divisas"
        items={MONEY}
      />

      {/* Where to stay rection */}
      <ThreeWaySection
        srTitle="Barrios recomendados para alojar"
        sectionTitle="Barrios recomendados para alojar"
        items={WHERE_TO_STAY}
        defaultCtaVariant="primary"
      />

      {/* Schedules and customs section  */}
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
