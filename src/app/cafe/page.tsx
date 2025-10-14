import Link from "next/link";
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
        srTitle="¿Por qué moverte poco?"
        sectionTitle="¿Por qué moverte poco?"
        items={COFFEE_BASICS}
        defaultCtaVariant="primary"
      />

      {/* DÓNDE IR Section */}
      <ContentGridWithTag
        items={COFFEE_SPOTS}
        sectionTitle="Dónde tomar café"
        srTitle="Listado de barrios"
        cols={{ sm: 3, lg: 3 }}
        className="mt-6"
      />

      {/* CÓMO PEDIR Section */}
      <ThreeWaySection
        srTitle="Cómo pedir (rápido y sin drama)"
        sectionTitle="Cómo pedir (rápido y sin drama)"
        items={HOW_TO_ORDER}
        defaultCtaVariant="primary"
      />

      {/* COMPRAR GRANOS Section */}
      <ThreeWaySection
        srTitle="Comprar granos para llevar"
        sectionTitle="Comprar granos para llevar"
        items={BUY_BEANS}
        defaultCtaVariant="primary"
      />

      {/* MAPA */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Mapa de cafés</h2>
          <Link
            href="/mapa"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Abrir mapa completo →
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border">
          <iframe
            title="Mapa de cafés en Lima"
            src="https://www.google.com/maps/d/embed?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&ehbc=2E312F"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[360px] sm:h-[420px] lg:h-[520px]"
            allowFullScreen
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Capas con cafeterías de especialidad en Miraflores, Barranco, San
          Isidro y Centro. Súmale tus favoritos y arma tu propia ruta.
        </p>
      </div>

      {/* CTA section */}
      <CtaBanner
        title="¿Listo para un café?"
        description="Revisa los barrios y encuentra la mejor opción para ti"
        actions={[
          { href: "/barrios", label: "Ver barrios", variant: "primary" },
        ]}
      />
    </main>
  );
}
