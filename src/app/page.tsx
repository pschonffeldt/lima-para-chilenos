import Link from "next/link";
import HeroSection from "./components/hero-component";
import Button from "./components/button-component";
import InfoBox from "./components/info-box";
import Footer from "./components/footer-component";

// Districts
export const DISTRICTS = [
  {
    id: "miraflores",
    slug: "miraflores",
    name: "Miraflores",
    note: "Base clásica para quedarse: malecón con vista al mar, ciclovías y parques, mucha oferta de cafés para trabajar y restaurantes de todo tipo. Seguro de día y bien conectado; puede haber ruido cerca de Kennedy/Larco y fines de semana.",
  },
  {
    id: "barranco",
    slug: "barranco",
    name: "Barranco",
    note: "Bohemio y caminable: galerías, murales, bares y música en vivo. Ideal para salir de noche y pasear de día por bajadas al mar. Mantente por las avenidas principales y usa apps de transporte si vuelves tarde.",
  },
  {
    id: "san-isidro",
    slug: "san-isidro",
    name: "San Isidro",
    note: "Residencial/empresarial, muy ordenado y seguro. Parques (Bosque El Olivar), restaurantes top y cafés tranquilos. Vida nocturna más baja y precios más altos; excelente para hospedaje tranquilo y trabajo.",
  },
] as const;

// Sections
export const SECTIONS = [
  {
    href: "/",
    label: "Inicio",
    icon: "🏆",
    blurb:
      "Resumen de lo imprescindible: barrios recomendados, apps clave, atajos a secciones, mapa y destacados según temporada. Punto de partida para planear tu visita en minutos.",
  },
  {
    href: "/introduccion",
    label: "Introducción",
    icon: "👋",
    blurb:
      "Cómo usar la guía y qué esperar de Lima: clima, horarios, propinas, barrios para alojarse, cambio de dinero y normas básicas para moverte tranquilo desde el día 1.",
  },
  {
    href: "/advertencias",
    label: "Advertencias",
    icon: "⚠️",
    blurb:
      "Estafas frecuentes (taxis, cambio, comisiones), zonas y horarios a evitar, cajeros más seguros, cómo actuar ante imprevistos y teléfonos de emergencia útiles.",
  },
  {
    href: "/transporte",
    label: "Transporte",
    icon: "🛵",
    blurb:
      "Desde/hacia el aeropuerto, apps (Cabify/Uber/Beat), Metropolitano y combis, scooters/bicis, tarifas de referencia, tiempos reales y consejos de seguridad por zona.",
  },
  {
    href: "/barrios",
    label: "Barrios",
    icon: "🏙️",
    blurb:
      "Comparativa de Miraflores, Barranco, San Isidro y más: vibra, presupuesto, pros/contras, dónde alojarse y qué hay cerca para comer, salir, trabajar y caminar seguro.",
  },
  {
    href: "/mapa", // si tu ruta real es /map, cámbiala aquí
    label: "Mapa",
    icon: "🧭",
    blurb:
      "Mapa interactivo con capas: restaurantes, cafés con Wi-Fi, miradores, cajeros, spots de surf y museos. Filtros por barrio y enlaces directos a Google Maps.",
  },
  {
    href: "/comida",
    label: "Comida",
    icon: "🍽️",
    blurb:
      "Qué probar (ceviche, chifa, nikkei, anticuchos), rangos de precio, reservas y horarios, menús del día, mercados y picadas para comer bien sin gastar de más.",
  },
  {
    href: "/copete",
    label: "Copete",
    icon: "🍸",
    blurb:
      "Barras de autor, pisco y chilcanos, cervecerías artesanales, happy hours y compras rápidas (botillerías/supers). Reglas de ingreso y horarios por zona.",
  },
  {
    href: "/cafe",
    label: "Café",
    icon: "☕️",
    blurb:
      "Cafeterías de especialidad para trabajar o descansar: Wi-Fi, enchufes, mesas, tostadores locales y horarios. Recomendaciones prácticas por barrio.",
  },
  {
    href: "/actividades",
    label: "Actividades",
    icon: "🗺️",
    blurb:
      "Malecón, surf y bici; museos, galerías y tours a pie; compras y miradores. Incluye duración, dificultad, costos aproximados y enlaces a tickets cuando aplica.",
  },
  {
    href: "/carretes",
    label: "Carretes",
    icon: "🕺",
    blurb:
      "Clubs y fiestas por estilo musical, cover y políticas de acceso. Consejos de listas/RSVP, dress code, horarios y cómo volver seguro de noche.",
  },
  {
    href: "/itinerarios",
    label: "Itinerarios",
    icon: "📘",
    blurb:
      "Rutas listas por tiempo (2–4 h, medio día, día completo) y estilo (foodie, arte, mar). Con mapas, tiempos de traslado y enlaces a cada lugar.",
  },
] as const;

export default function Home() {
  return (
    <main className="space-y-10 py-10">
      {/* HERO */}
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
      {/* SAFETY CTA */}
      <InfoBox
        title="Ayuda rápida"
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

      {/* Core topics grid */}
      <section className="py-4">
        <h2 className="sr-only">Contenido esencial</h2>

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
                    Ver {label.toLowerCase()}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

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

      {/* Districs cards */}
      <section aria-labelledby="types-heading" className="py-12 ">
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
      </section>

      {/* MAP */}
      <section id="mapa" className="space-y-3">
        <div className="overflow-hidden rounded-xl border">
          <iframe
            title="Mapa Lima"
            src="https://www.google.com/maps/d/embed?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&ehbc=2E312F"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[360px] sm:h-[420px] lg:h-[520px]"
            allowFullScreen
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Marcadores de barrios, cafés para trabajar, restaurantes y spots para
          correr.
        </p>
        <div className="mt-auto pt-5 flex flex-wrap gap-2">
          <Button href="/mapa">Ver mapa completo</Button>
        </div>
      </section>
    </main>
  );
}
