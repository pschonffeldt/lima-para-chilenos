import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import { INTRO_MAP_BASICS } from "../lib/copy-content";
import { CtaBanner } from "../components/cta-component";
import { MapEmbed } from "../components/map-component";

export const metadata = {
  title: "Mapa — Lima para Chilenos",
  description:
    "Mapa con barrios recomendados, cafés para trabajar, restaurantes, running por el malecón y puntos útiles.",
};

export default function MapaPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Mapa"
        description={
          <>
            Marcadores curados para moverte fácil: barrios recomendados, cafés
            para trabajar, restaurantes, spots para correr y puntos útiles.
          </>
        }
      />

      {/* Expectations section */}
      <ThreeWaySection
        srTitle="Qué encontrarás"
        sectionTitle="Qué encontrarás"
        items={INTRO_MAP_BASICS}
        defaultCtaVariant="primary"
      />

      {/* MAP section */}
      <MapEmbed iframeClassName="w-full h-[500px]" />

      {/* CTA section */}
      <CtaBanner
        title="Cómo usar el mapa
"
        description="Haz zoom y muévete con gestos o el mouse. Para verlo grande, ábrelo en una pestaña nueva."
        actions={[]}
      />
    </main>
  );
}
