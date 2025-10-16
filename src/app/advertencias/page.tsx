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
            href: "/transport",
            label: "Ir a transporte",
            variant: "primary",
          },
          { href: "/mapa", label: "Ver mapa con destinos", variant: "dark" },
        ]}
      />

      {/* Before leaving section */}
      <InfoBox
        title="Antes de salir"
        variant="plain"
        items={[
          <>
            ✅ Transporte: usa apps de taxi (Uber / Cabify). Evita tomar taxi en
            la calle.
          </>,
          <>
            ✅ Lleva solo lo necesario; guarda pasaporte en el alojamiento (usa
            copia digital).
          </>,
          <>
            ✅ Celular guardado en esquinas/semáforos y al subir/bajar del auto.
          </>,
          <>
            ✅ Fija un lugar de encuentro para el regreso (parque, hotel, mall).
          </>,
        ]}
      />

      {/* Scams rection */}
      <ThreeWaySection
        srTitle="Estafas comunes (y cómo evitarlas)"
        sectionTitle="Estafas comunes (y cómo evitarlas)"
        items={COMMON_SCAMS}
        defaultCtaVariant="primary"
      />

      {/* Zones and times section  */}
      <TwoWaySection
        srTitle="Zonas y horarios"
        sectionTitle="Zonas y horarios"
        items={ZONES_AND_HOURS}
      />

      {/* ATMs and payments section */}
      <ThreeWaySection
        srTitle="Cajeros, tarjetas y efectivo"
        sectionTitle="Cajeros, tarjetas y efectivo"
        items={CASH_CARDS_CASH}
        defaultCtaVariant="primary"
      />

      {/* What to do if section  */}
      <TwoWaySection
        srTitle="Qué hacer si…"
        sectionTitle="Qué hacer si…"
        items={WHAT_TO_DO}
      />

      {/* Useful numbers section */}
      <ThreeWaySection
        srTitle="Números de emergencia"
        sectionTitle="Números de emergencia"
        items={EMERGENCY_NUMBERS}
        defaultCtaVariant="primary"
      />

      {/* CTA section */}
      <CtaBanner
        title="Planifica tu día"
        description="Elige qué hacer por tiempo y estilo. Revisa actividades, mapas y tiempos de traslado."
        actions={[
          {
            href: "/actividades",
            label: "Ver Actividades",
            variant: "primary",
          },
          { href: "/barrios", label: "Ver Barrios", variant: "dark" },
        ]}
      />
    </main>
  );
}
