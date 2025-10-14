import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import {
  NIGHTLIFE_BASICS,
  WHAT_TO_ORDER_PERU,
  BARS_BY_ZONE,
  DO_DONT_NIGHT,
  QUICK_BUYS,
} from "../lib/copy-content";
import { TwoWaySection } from "../components/2way-column-section-component";
import { CtaBanner } from "../components/cta-component";

export const metadata = {
  title: "Copete — Lima para Chilenos",
  description:
    "Bares, botillerías y qué pedir en Lima: pisco sour, chilcano, cervezas locales, horarios y tips de seguridad para salir tranqui.",
};

export default function CopetePage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Copete"
        description={
          <>
            Dónde tomar, qué pedir y cómo moverte de noche sin enredo. Bares
            para sentarse, compras rápidas y pequeños tips para evitar malos
            ratos.
          </>
        }
      />

      {/* Quick facts */}
      <ThreeWaySection
        srTitle="Los fundamentos del copete"
        sectionTitle="Los fundamentos del copete"
        items={NIGHTLIFE_BASICS}
        defaultCtaVariant="primary"
      />

      {/* Qué pedir */}
      <ThreeWaySection
        srTitle="Qué pedir en Perú"
        sectionTitle="Qué pedir en Perú"
        items={WHAT_TO_ORDER_PERU}
        defaultCtaVariant="primary"
      />

      {/* Bares por zona */}
      <ThreeWaySection
        srTitle="Bares por zona"
        sectionTitle="Bares por zona"
        items={BARS_BY_ZONE}
        defaultCtaVariant="primary"
      />

      {/* Botillerías / compras rápidas */}
      <TwoWaySection
        srTitle="Botillerías y compras rápidas"
        sectionTitle="Botillerías y compras rápidas"
        items={QUICK_BUYS}
      />

      {/* Do / Don't noche */}
      <TwoWaySection
        srTitle="Haz / Evita de noche"
        sectionTitle="Haz / Evita de noche"
        items={DO_DONT_NIGHT}
      />

      {/* CTA */}
      <CtaBanner
        title="Plan redondo"
        description="Mira Comida para elegir dónde cenar y revisa Transporte para volver seguro."
        actions={[
          {
            href: "/actividades",
            label: "Ver Actividades",
            variant: "primary",
          },
          { href: "/advertencias", label: "Advertencias", variant: "dark" },
        ]}
      />
    </main>
  );
}
