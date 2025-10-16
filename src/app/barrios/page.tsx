import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import { WHY_MOVE_LITTLE, HOODS } from "../lib/copy-content";
import { ContentGridWithTag } from "../components/content-grid-tag-component";
import { CtaBanner } from "../components/cta-component";

export const metadata = {
  title: "Barrios — Lima para Chilenos",
  description:
    "Miraflores, Barranco y San Isidro cubren casi todo lo que necesita un visitante chileno. Menciones rápidas: Chorrillos, Centro de Lima y Callao (solo aeropuerto).",
};

export default function BarriosPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Barrios"
        description={
          <>
            Como visitante chileno, no necesitas cruzar toda la ciudad. Casi
            todo lo que buscas —alojar cómodo, caminar, comer rico, salir de
            noche y trabajar desde cafés— está concentrado en{" "}
            <strong>Miraflores</strong>, <strong>Barranco</strong> y{" "}
            <strong>San Isidro</strong>.
          </>
        }
      />

      {/* Districts section */}
      <ContentGridWithTag
        items={HOODS}
        sectionTitle="Barrios"
        srTitle="Listado de barrios"
        cols={{ sm: 3, lg: 3 }}
        className="mt-6"
      />

      {/* Why move a little section */}
      <ThreeWaySection
        srTitle="Cómo optimizar traslados"
        sectionTitle="Cómo optimizar traslados"
        items={WHY_MOVE_LITTLE}
        defaultCtaVariant="primary"
      />

      {/* CTA section */}
      <CtaBanner
        title="Muévete seguro"
        description="Dónde alojar y cómo moverte bien con apps de transporte."
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
