import InfoBox from "../components/info-box";
import HeroSection from "../components/hero-component";
import { TwoWaySection } from "../components/2way-column-section-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import {
  COMMON_SCAMS,
  ZONES_AND_HOURS,
  CASH_CARDS_CASH,
  WHAT_TO_DO,
  EMERGENCY_NUMBERS,
} from "../lib/copy-content";
import { CtaBanner } from "../components/cta-component";

export const metadata = {
  title: "Advertencias — Lima para Chilenos",
  description:
    "Consejos de seguridad, estafas comunes, zonas y horarios a evitar, cajeros, apps confiables y números de emergencia en Lima.",
};

export default function AdvertenciasPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Advertencias"
        description={
          <>
            Reglas simples para moverte tranqui: qué evitar, cómo usar efectivo
            y apps, y qué hacer si algo sale mal. Enfocado en Miraflores,
            Barranco y San Isidro.
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

      {/* Quick help section */}
      <InfoBox
        title="Antes de salir"
        variant="plain"
        items={[
          <>✅ Taxi por app. Evita tomarlo en la calle.</>,
          <>
            ✅ Lleva solo lo necesario; guarda pasaporte en el alojamiento (usa
            copia digital).
          </>,
          <>
            ✅ Celular guardado en esquinas/semáforos y al subir/bajar del auto.
          </>,
          <>
            ✅ Define un punto de recojo seguro para volver (parque, hotel,
            mall).
          </>,
        ]}
      />

      {/* Estafas rection */}
      <ThreeWaySection
        srTitle="Estafas comunes (y cómo evitarlas)"
        sectionTitle="Estafas comunes (y cómo evitarlas)"
        items={COMMON_SCAMS}
        defaultCtaVariant="primary"
      />

      {/* Zonas y horarios section  */}
      <TwoWaySection
        srTitle="Zonas y horarios"
        sectionTitle="Zonas y horarios"
        items={ZONES_AND_HOURS}
      />

      {/* Cajeros y pagos section */}
      <ThreeWaySection
        srTitle="Cajeros, tarjetas y efectivo"
        sectionTitle="Cajeros, tarjetas y efectivo"
        items={CASH_CARDS_CASH}
        defaultCtaVariant="primary"
      />

      {/* Qué hacer si section  */}
      <TwoWaySection
        srTitle="Qué hacer si…"
        sectionTitle="Qué hacer si…"
        items={WHAT_TO_DO}
      />

      {/* Números útiles section */}
      <ThreeWaySection
        srTitle="Números de emergencia"
        sectionTitle="Números de emergencia"
        items={EMERGENCY_NUMBERS}
        defaultCtaVariant="primary"
      />

      {/* CTA section */}
      <CtaBanner
        title="Muévete con plan"
        description="Abre el mapa y revisa Transporte para volver seguro."
        actions={[
          {
            href: "/introduccion",
            label: "Ver Introducción",
            variant: "primary",
          },
          { href: "/barrios", label: "Ver Barrios", variant: "dark" },
        ]}
      />
    </main>
  );
}
