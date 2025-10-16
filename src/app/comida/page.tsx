import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import {
  DINING_ETIQUETTE,
  DINING_STYLES,
  SCHEDULE_TIPPING_HYGIENE,
  WHAT_TO_EAT,
} from "../lib/copy-content";
import { ContentGridWithTag } from "../components/content-grid-tag-component";
import InfoBox from "../components/info-box";
import { TwoWaySection } from "../components/2way-column-section-component";
import RowContentSection from "../components/row-content-component";
import { EAT_HOODS } from "../lib/food-content";

export const metadata = {
  title: "Comida — Lima para Chilenos",
  description:
    "Qué probar en Lima, cómo elegir bien y comer rico sin complicarte: ceviche, chifa, nikkei, menú del día, horarios y tips prácticos.",
};

export default function FoodPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Comida"
        description={
          <>
            Lima es capital gastronómica. Guía rápida para comer bien sin
            sorpresas: horarios, costumbres y tips clave.
          </>
        }
      />
      {/* How ot eat in Lima section */}
      <ThreeWaySection
        srTitle="¿Cómo comer en Lima?"
        sectionTitle="¿Cómo comer en Lima?"
        items={SCHEDULE_TIPPING_HYGIENE}
        defaultCtaVariant="primary"
      />
      {/* What to eat section */}
      <ContentGridWithTag
        items={WHAT_TO_EAT}
        sectionTitle="¿Que comer?"
        srTitle="¿Que comer?"
        cols={{ sm: 3, lg: 3 }}
        className="mt-6"
      />
      {/* Where to eat section */}
      <ThreeWaySection
        srTitle="Dónde comer (por estilo de salida)"
        sectionTitle="Dónde comer (por estilo de salida)"
        items={DINING_STYLES}
        defaultCtaVariant="primary"
      />
      {/* Daily menu section */}
      <InfoBox
        title="Menú del día: cómo funciona"
        variant="plain"
        items={[
          <>Incluye entrada + fondo + bebida (a veces postre).</>,
          <>Disponible en almuerzo; cambia según el día.</>,
          <>Pregunta por opciones de pescado/carne/vegetariano. </>,
          <>Si comes ceviche, mejor fresco y temprano.</>,
        ]}
      />

      {/* Food tips section */}
      <TwoWaySection
        srTitle="Consejos para pedir"
        sectionTitle="Consejos para pedir"
        items={DINING_ETIQUETTE}
      />

      {/* Food districts section */}
      <RowContentSection
        id="barrios-para-comer"
        sectionTitle="Barrios con buena oferta"
        items={EAT_HOODS}
      />
    </main>
  );
}
