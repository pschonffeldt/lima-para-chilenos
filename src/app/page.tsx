import Link from "next/link";
import HeroSection from "./components/hero-component";
import Button from "./components/button-component";
import InfoBox from "./components/info-box";
import TextSection from "./components/content-section-component";
import { CtaBanner } from "./components/cta-component";
import { MapEmbed } from "./components/map-component";
import { DISTRICTS, SECTIONS } from "./lib/copy-content";

// Metadata
export const metadata = {
  title: "Lima para Chilenos",
  description: "Descubre Lima de la forma más eficiente",
};

export default function HomePage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="🇨🇱→🇵🇪 Lima para chilenos, crudo y sin censura."
        description={
          <>
            Consejos de un chileno que vive en Lima, con mapas y listas para que
            te adaptes en horas — no en días. Menos bla bla y más datos útiles.
          </>
        }
        actions={[
          {
            href: "/introduccion",
            label: "Empezar por la Introducción",
            variant: "primary",
          },
          { href: "/mapa", label: "Ver mapa con destinos", variant: "dark" },
        ]}
      />
      {/* Quick help section */}
      <InfoBox
        title="Ayuda rápida"
        variant="plain"
        items={[
          <>
            ¿Recién llegaste? Parte por{" "}
            <Link
              href="/introduccion"
              className="underline underline-offset-4 hover:no-underline"
            >
              Introducción
            </Link>{" "}
            para clima, dinero, horarios y apps básicas.
          </>,
          <>
            ¿Dónde quedarte? Compara{" "}
            <Link
              href="/barrios"
              className="underline underline-offset-4 hover:no-underline"
            >
              Barrios
            </Link>{" "}
            y abre el{" "}
            <Link
              href="/mapa"
              className="underline underline-offset-4 hover:no-underline"
            >
              Mapa
            </Link>{" "}
            con puntos clave cerca.
          </>,
          <>
            Muévete fácil: revisa{" "}
            <Link
              href="/transporte"
              className="underline underline-offset-4 hover:no-underline"
            >
              Transporte
            </Link>{" "}
            (aeropuerto, apps y Metropolitano) y guarda rutas rápidas.
          </>,
          <>
            ¿Hambre o cafecito? Pasa por{" "}
            <Link
              href="/comida"
              className="underline underline-offset-4 hover:no-underline"
            >
              Comida
            </Link>
            ,{" "}
            <Link
              href="/cafe"
              className="underline underline-offset-4 hover:no-underline"
            >
              Café
            </Link>{" "}
            y{" "}
            <Link
              href="/copete"
              className="underline underline-offset-4 hover:no-underline"
            >
              Copete
            </Link>{" "}
            para opciones por barrio y rangos de precio.
          </>,
          <>
            ¿Plan armado? Usa{" "}
            <Link
              href="/itinerarios"
              className="underline underline-offset-4 hover:no-underline"
            >
              Itinerarios
            </Link>{" "}
            1–2 h, 2–4 h, medio día o día completo con mapas listos.
          </>,
          <>
            ¿Salida nocturna? Mira{" "}
            <Link
              href="/carretes"
              className="underline underline-offset-4 hover:no-underline"
            >
              Carretes
            </Link>{" "}
            (listas/RSVP, dress code, horarios) y ubica la entrada en Maps.
          </>,
          <>
            Antes de salir, revisa{" "}
            <Link
              href="/advertencias"
              className="underline underline-offset-4 hover:no-underline"
            >
              Advertencias
            </Link>{" "}
            para evitar estafas y saber qué zonas evitar de noche.
          </>,
        ]}
      />

      {/* Core topics grid section */}
      <section className="py-2 sm:py-2">
        <h2 className="sr-only">Introducción a Lima</h2>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Core topics (Introducción, Transporte, etc.) */}
          {SECTIONS.map(({ href, label, icon, blurb }) => (
            <article
              key={href}
              className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <span aria-hidden>{icon}</span>
                    {label}
                  </h3>
                </div>

                <p className="mt-2 text-sm text-gray-600">{blurb}</p>

                <div className="mt-auto pt-5">
                  <Button variant="dark" href={href}>
                    Ir a {label.toLowerCase()}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Districs cards and map section */}
      <section aria-labelledby="types-heading" className="py-2">
        {/* Section title */}
        <div className="pb-12">
          <TextSection
            as="h3"
            title="Distritos destacados en Lima"
            description="Estos son los barrios principales donde tú como Chileno, quieres invertir tu tiempo. Apreta el botón para ver los detalles de cada distrto."
            bgClassName="bg-indigo-50/50"
          />
        </div>
        <div className="">
          <h2 id="types-heading" className="sr-only">
            Distritos destacados
          </h2>

          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DISTRICTS.map((district) => (
              <article
                id={district.id}
                key={district.id}
                className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      <span className="mr-1 text-lg" aria-hidden="true">
                        Distrito: {district.name}
                      </span>
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="mr-1 text-md" aria-hidden="true">
                      Características:
                    </span>
                  </div>

                  <ul role="list" className="space-y-1 text-sm">
                    <li key={district.id} className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="rounded-full bg-foreground/50"
                      />
                      <span>{district.note}</span>
                    </li>
                  </ul>

                  {/* CTAs pinned bottom */}
                  <div className="mt-auto pt-5 flex flex-wrap gap-2">
                    <Button href={district.slug}>Ver detalles</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* MAP */}
        <MapEmbed iframeClassName="w-full h-[500px]" />

        {/* CTA */}
        <CtaBanner
          title="Revisa nuestro mapa"
          description="Marcadores de barrios, cafés para trabajar, restaurantes y spots para."
          actions={[
            {
              href: "/mapa",
              label: "Ver mapa",
              variant: "primary",
            },
            { href: "/itinerarios", label: "Ver itinerarios", variant: "dark" },
          ]}
        />
      </section>
    </main>
  );
}
