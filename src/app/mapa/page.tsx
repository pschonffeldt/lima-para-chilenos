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

      {/* Introducción explicativa section */}
      <ThreeWaySection
        srTitle="Qué encontrarás"
        sectionTitle="Qué encontrarás"
        items={INTRO_MAP_BASICS}
        defaultCtaVariant="primary"
      />

      {/* MAP */}
      <MapEmbed iframeClassName="w-full h-[500px]" />

      {/* CTA section */}
      <CtaBanner
        title="Aprovecha el mapa al máximo"
        description="Tip: abre el mapa en una pestaña aparte para alternar capas, guardar marcadores y usar navegación paso a paso. Si el mapa no carga, asegúrate de no bloquear contenido embebido."
        actions={[]}
      />
    </main>
  );
}
