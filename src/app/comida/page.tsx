import Link from "next/link";
import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import {
  DINING_ETIQUETTE,
  DINING_STYLES,
  HOODS,
  OTHER_TIPS,
  SCHEDULE_TIPPING_HYGIENE,
  WHAT_TO_EAT,
} from "../lib/copy-content";
import { ContentGridWithTag } from "../components/content-grid-tag-component";
import InfoBox from "../components/info-box";
import { TwoWaySection } from "../components/2way-column-section-component";
import { CtaBanner } from "../components/cta-component";

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
            Lima es capital gastronómica. Aquí tienes una guía rápida para comer
            bien, evitar sorpresas y entender horarios y costumbres sin dar
            vueltas.
          </>
        }
      />

      {/* Quick facts */}
      <ThreeWaySection
        srTitle="¿Cómo comer en Lima?"
        sectionTitle="¿Cómo comer en Lima?"
        items={SCHEDULE_TIPPING_HYGIENE}
        defaultCtaVariant="primary"
      />

      {/* Qué probar section */}
      <ContentGridWithTag
        items={WHAT_TO_EAT}
        sectionTitle="Barrios"
        srTitle="Listado de barrios"
        cols={{ sm: 3, lg: 3 }}
        className="mt-6"
      />

      {/* Dónde comer (por estilo) section */}
      <ThreeWaySection
        srTitle="Dónde comer (por estilo de salida)"
        sectionTitle="Dónde comer (por estilo de salida)"
        items={DINING_STYLES}
        defaultCtaVariant="primary"
      />

      {/* Menú del día (cómo funciona) section */}
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

      {/* Consejos para pedir section */}
      <TwoWaySection
        srTitle="Consejos para pedir"
        sectionTitle="Consejos para pedir"
        items={DINING_ETIQUETTE}
      />

      {/* Zonas para comer (barrios) */}
      <div className="space-y-3" id="barrios-para-comer">
        <h2 className="text-lg font-semibold">Barrios con buena oferta</h2>
        <ul className="space-y-2">
          {[
            {
              name: "Miraflores",
              note: "Gran mezcla: cevicherías, nikkei, bistrós y cafés.",
              href: "/barrios/miraflores",
            },
            {
              name: "Barranco",
              note: "Bares y restaurantes con onda; ideal noche y finde.",
              href: "/barrios/barranco",
            },
            {
              name: "San Isidro",
              note: "Restaurantes de nivel y propuestas de autor.",
              href: "/barrios/san-isidro",
            },
          ].map((b) => (
            <li
              key={b.name}
              className="flex items-center justify-between rounded-lg border px-3 py-2"
            >
              <div className="min-w-0">
                <p className="font-medium">{b.name}</p>
                <p className="truncate text-sm text-muted-foreground">
                  {b.note}
                </p>
              </div>
              <Link
                href={b.href}
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA section */}
      <CtaBanner
        title="¿Acompañarlo con algo?"
        description="Revisa bares y botillerías en la sección Copete o
            mira qué hacer luego de comer."
        actions={[
          {
            href: "/copete",
            label: "Ir a Copete",
            variant: "primary",
          },
          { href: "/actividades", label: "Ver Actividades", variant: "dark" },
        ]}
      />
    </main>
  );
}
