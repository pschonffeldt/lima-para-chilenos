import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import {
  CULTURA_Y_PASEOS,
  DEPORTE_Y_NATURALEZA,
  MALECON_Y_COSTA,
  MINI_ITINERARIES,
  QUICK_BASICS,
} from "../lib/copy-content";
import { ContentGridWithTag } from "../components/content-grid-tag-component";
import { CtaBanner } from "../components/cta-component";
import { TwoWaySection } from "../components/2way-column-section-component";

export const metadata = {
  title: "Actividades — Lima para Chilenos",
  description:
    "Qué hacer en Lima: malecón y costa, cultura y museos, deporte y naturaleza. Ideas de 1/2 día y día completo, con tips simples y seguros.",
};

export default function ActividadesPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Actividades"
        description={
          <>
            Planes fáciles para conocer Lima sin complicarte: malecón, cultura,
            deporte y naturaleza. Ideas de medio día y día completo con foco en
            Miraflores, Barranco y San Isidro.
          </>
        }
      />

      {/* Get organized section */}
      <ThreeWaySection
        srTitle="Cómo organizarte en Lima"
        sectionTitle="Cómo organizarte en Lima"
        items={QUICK_BASICS}
        defaultCtaVariant="primary"
      />

      {/* Malecón section */}
      <ContentGridWithTag
        items={MALECON_Y_COSTA}
        sectionTitle="Malecón y costa"
        srTitle="Malecón y costa"
        cols={{ sm: 3, lg: 3 }}
        className="mt-6"
      />

      {/* Cultire section */}
      <ContentGridWithTag
        items={CULTURA_Y_PASEOS}
        sectionTitle="Cultura y paseos"
        srTitle="Cultura y paseos"
        cols={{ sm: 3, lg: 3 }}
        className="mt-6"
      />

      {/* Sports section */}
      <ContentGridWithTag
        items={DEPORTE_Y_NATURALEZA}
        sectionTitle="Deporte y naturaleza"
        srTitle="Deporte y naturaleza"
        cols={{ sm: 3, lg: 3 }}
        className="mt-6"
      />

      {/* Itineraries section */}
      <TwoWaySection
        srTitle="Itinerarios fáciles"
        sectionTitle="Itinerarios fáciles"
        items={MINI_ITINERARIES}
      />

      {/* CTA */}
      <CtaBanner
        title="Encuentra tu ruta"
        description="Compara barrios y abre el mapa con puntos clave."
        actions={[
          {
            href: "/barrios",
            label: "Ver Barrios",
            variant: "primary",
          },
          { href: "/mapa", label: "Ver Mapa", variant: "dark" },
        ]}
      />
    </main>
  );
}
