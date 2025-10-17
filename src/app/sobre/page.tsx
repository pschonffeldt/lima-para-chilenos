import InfoBox from "../components/info-box";
import HeroSection from "../components/hero-component";
import { TwoWaySection } from "../components/2way-column-section-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import { WHAT_IS, WHO_BEHIND } from "../lib/copy-content";
import { CtaBanner } from "../components/cta-component";

export const metadata = {
  title: "Advertencias — Lima para Chilenos",
  description:
    "Consejos de seguridad, estafas comunes, zonas y horarios a evitar, cajeros, apps confiables y números de emergencia en Lima.",
};

export default function AboutPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Sobre el proyecto"
        description={
          <>
            Guía independiente para chilenos en Lima: barrios caminables,
            actividades simples y mapa útil. Priorizamos Miraflores, Barranco y
            San Isidro para moverte con calma y aprovechar el tiempo.
          </>
        }
      />

      {/* Brief section */}
      <InfoBox
        title="En breve"
        variant="plain"
        items={[
          <>Qué es: Guía independiente para chilenos en Lima.</>,
          <>
            Para quién: Para quienes visitan por primera vez; foco en moverse
            fácil.
          </>,
          <>
            Cobertura: Miraflores, Barranco, San Isidro (y alrededores útiles).
          </>,
          <>
            Cómo usar: Revisa Barrios, elige Actividades y apóyate en el Mapa.
          </>,
          <>
            Criterios: Caminabilidad, horarios claros, seguridad básica y valor
            real.
          </>,
          <>Actualización: Ajustes continuos con feedback de usuarios.</>,
          <>Independencia: proyecto autofinanciado.</>,
          <>
            Contacto/feedback: correcciones y sugerencias simpre bienvenidas.
          </>,
          <>Última revisión: Octubre - 2025.</>,
        ]}
      />

      {/* What is rection */}
      <ThreeWaySection
        srTitle="Qué es, alcance y cómo se actualiza"
        sectionTitle="Qué es, alcance y cómo se actualiza"
        items={WHAT_IS}
        defaultCtaVariant="primary"
      />

      {/* Whi is behind section  */}
      <TwoWaySection
        srTitle="Quién está detrás y cómo aportar"
        sectionTitle="Quién está detrás y cómo aportar"
        items={WHO_BEHIND}
      />

      {/* CTA */}
      <CtaBanner
        title="Ponte en contacto"
        description="Nos interesa saber lo que piensas sobre mi proyecto. Ponte en contacto conmigo"
        actions={[
          {
            href: "/contacto",
            label: " Ponte en contacto",
            variant: "primary",
          },
        ]}
      />
    </main>
  );
}
