import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import {
  BUY_BEANS,
  COFFEE_BASICS,
  COFFEE_SPOTS,
  HOW_TO_ORDER,
} from "../lib/copy-content";
import { ContentGridWithTag } from "../components/content-grid-tag-component";
import { CtaBanner } from "../components/cta-component";

export const metadata = {
  title: "Café — Lima para Chilenos",
  description:
    "Perú tiene café espectacular y muchísimas cafeterías de especialidad. Dónde ir por barrio, cómo pedir, y tips para comprar granos.",
};

export default function CafePage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Café de especialidad en Lima"
        description={
          <>
            Perú produce algunos de los mejores cafés del mundo (Cajamarca,
            Cusco, Amazonas, Junín) y Lima está llena de cafeterías de
            especialidad. Si te gusta el espresso, los métodos de filtro o
            llevar granos a casa, aquí vas a ser feliz.
          </>
        }
      />

      {/* Coffee quick facts section */}
      <ThreeWaySection
        srTitle="Qué esperar del café en Lima"
        sectionTitle="Qué esperar del café en Lima"
        items={COFFEE_BASICS}
        defaultCtaVariant="primary"
      />

      {/* Where to drink coffee section */}
      <ContentGridWithTag
        items={COFFEE_SPOTS}
        sectionTitle="Dónde tomar café"
        srTitle="Listado de barrios"
        cols={{ sm: 3, lg: 3 }}
        className="mt-6"
      />

      {/* What to get section */}
      <ThreeWaySection
        srTitle="Cómo pedir (rápido y sin drama)"
        sectionTitle="Cómo pedir (rápido y sin drama)"
        items={HOW_TO_ORDER}
        defaultCtaVariant="primary"
      />

      {/* Buying beans section */}
      <ThreeWaySection
        srTitle="Comprar granos para llevar"
        sectionTitle="Comprar granos para llevar"
        items={BUY_BEANS}
        defaultCtaVariant="primary"
      />

      {/* CTA */}
      <CtaBanner
        title="Barrios con buena escena cafetera"
        description="Parques costeros, terrazas y cafeterías de especialidad cerca."
        actions={[
          { href: "/barrios", label: "Ver barrios", variant: "primary" },
        ]}
      />
    </main>
  );
}
