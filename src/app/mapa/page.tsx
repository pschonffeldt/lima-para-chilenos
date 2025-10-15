import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import { INTRO_MAP_BASICS } from "../lib/copy-content";
import { CtaBanner } from "../components/cta-component";

export const metadata = {
  title: "Mapa — Lima para Chilenos",
  description:
    "Mapa con barrios recomendados, cafés para trabajar, restaurantes, running por el malecón y puntos útiles.",
};

const MAP_EMBED =
  "https://www.google.com/maps/d/embed?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&ehbc=2E312F";
const MAP_LINK =
  "https://www.google.com/maps/d/viewer?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&hl=es&usp=sharing";

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

      {/* Big map */}
      <div className="overflow-hidden rounded-xl border">
        <iframe
          title="Mapa Lima para Chilenos"
          src={MAP_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[70vh] w-full"
          allowFullScreen
        />
      </div>

      {/* CTA section */}
      <CtaBanner
        title="Aprovecha el mapa al máximo"
        description="Tip: abre el mapa en una pestaña aparte para alternar capas, guardar marcadores y usar navegación paso a paso. Si el mapa no carga, asegúrate de no bloquear contenido embebido."
        actions={[]}
      />
    </main>
  );
}
