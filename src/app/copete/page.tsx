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
            Dónde tomar, qué pedir y donde ir. Bares para sentarse, compras
            rápidas y pequeños tips para evitar malos ratos.
          </>
        }
      />

      {/* Drinks foudnation section */}
      <ThreeWaySection
        srTitle="Los fundamentos del copete"
        sectionTitle="Los fundamentos del copete"
        items={NIGHTLIFE_BASICS}
        defaultCtaVariant="primary"
      />

      {/* What to drink section */}
      <ThreeWaySection
        srTitle="Qué pedir en Perú"
        sectionTitle="Qué pedir en Perú"
        items={WHAT_TO_ORDER_PERU}
        defaultCtaVariant="primary"
      />

      {/* Where to drink section */}
      <ThreeWaySection
        srTitle="Bares por zona"
        sectionTitle="Bares por zona"
        items={BARS_BY_ZONE}
        defaultCtaVariant="primary"
      />

      {/* Where to buy section */}
      <TwoWaySection
        srTitle="Botillerías y compras rápidas"
        sectionTitle="Botillerías y compras rápidas"
        items={QUICK_BUYS}
      />

      {/* Do / Don't section */}
      <TwoWaySection
        srTitle="Haz / Evita de noche"
        sectionTitle="Haz / Evita de noche"
        items={DO_DONT_NIGHT}
      />

      {/* CTA */}
      <CtaBanner
        title="Barrios para alojarte"
        description="Compara Miraflores, Barranco y San Isidro: qué ofrecen y qué te conviene."
        actions={[
          {
            href: "/barrios",
            label: "Ver Barrios",
            variant: "primary",
          },
          { href: "/actividades", label: "Ver Actividaes", variant: "dark" },
        ]}
      />
    </main>
  );
}
