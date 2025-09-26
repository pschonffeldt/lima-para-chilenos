import Link from "next/link";

export const metadata = {
  title: "Lima para Chilenos — Guía práctica",
  description:
    "Guía local para chilenos en Lima: barrios, transporte, comida, copete, actividades y advertencias — todo en un solo lugar.",
};

const sections = [
  {
    href: "/introduccion",
    label: "Introducción",
    emoji: "👋",
    blurb: "Qué esperar al aterrizar, cómo orientarte y primeros pasos.",
  },
  {
    href: "/transporte",
    label: "Transporte",
    emoji: "🛵",
    blurb: "Apps, taxis seguros, Metropolitano, scooters y tips por distrito.",
  },
  {
    href: "/comida",
    label: "Comida",
    emoji: "🍽️",
    blurb: "Dónde comer bien (y a buen precio), horarios y costumbres.",
  },
  {
    href: "/copete",
    label: "Copete",
    emoji: "🍸",
    blurb: "Barras, pisco, cervezas, botillerías y dónde comprar hielo/tónica.",
  },
  {
    href: "/actividades",
    label: "Actividades",
    emoji: "🗺️",
    blurb: "Paseos, cultura, surf, running en malecón y planes de noche.",
  },
  {
    href: "/advertencias",
    label: "Advertencias",
    emoji: "⚠️",
    blurb: "Seguridad, estafas comunes, apps confiables y números útiles.",
  },
];

const featuredDistricts = [
  {
    slug: "miraflores",
    name: "Miraflores",
    note: "malecón, parques, base cómoda",
  },
  { slug: "barranco", name: "Barranco", note: "arte, bares, caminable" },
  { slug: "san-isidro", name: "San Isidro", note: "seguro, restaurantes" },
  {
    slug: "centro",
    name: "Centro Histórico",
    note: "plaza, iglesias, peatonales",
  },
];

export default function GuideHome() {
  return (
    <div className="min-h-[100svh] bg-background">
      {/* hero */}
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,hsl(0_0%_100%/.06),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-[1.2fr,1fr] md:py-16">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <span>🇨🇱→🇵🇪</span> <span>Lima para Chilenos</span>
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Tu guía **real** para llegar, moverte y disfrutar Lima
            </h1>
            <p className="max-w-[60ch] text-pretty text-muted-foreground">
              Rutas claras, mapas, listas curadas y consejos locales para que te
              adaptes en horas, no en días. Sin humo, sin scroll infinito.
            </p>

            {/* quick actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/introduccion"
                className="rounded-xl border bg-white/50 px-4 py-2 text-sm font-medium shadow-sm hover:bg-white"
              >
                Empezar por la Introducción
              </Link>
              <a
                href="#mapa"
                className="rounded-xl border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/50"
              >
                Ver mapa rápido
              </a>
            </div>

            {/* essentials strip */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Essential
                title="Pago & cambio"
                items={["Yape/Plin (locales)", "Tarjeta ↑", "Soles (S/.)"]}
              />
              <Essential
                title="Conectividad"
                items={[
                  "SIM: Claro/Entel/Movistar",
                  "eSIM ok",
                  "Velocidad 4G/5G",
                ]}
              />
              <Essential
                title="Seguridad"
                items={[
                  "Taxi por app",
                  "Evita exhibir celu",
                  "Malecón de día/noche",
                ]}
              />
            </div>
          </div>

          {/* mini highlights */}
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">
              Distritos recomendados
            </h3>
            <ul className="space-y-2">
              {featuredDistricts.map((d) => (
                <li
                  key={d.slug}
                  className="flex items-center justify-between rounded-lg border px-3 py-2 hover:bg-muted/60"
                >
                  <div className="min-w-0">
                    <p className="font-medium">{d.name}</p>
                    <p className="truncate text-sm text-muted-foreground">
                      {d.note}
                    </p>
                  </div>
                  <Link
                    href={`/barrios/${d.slug}`}
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    Ver
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-right">
              <Link
                href="/barrios"
                className="text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                Ver todos los barrios →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* nav sections */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          Explora la guía
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl border p-5 shadow-sm transition-colors hover:bg-muted/50"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  {s.emoji}
                </span>
                <h3 className="text-lg font-semibold">{s.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{s.blurb}</p>
              <span className="mt-4 inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* map */}
      <section id="mapa" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Mapa rápido</h2>
          <Link
            href="/mapa"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Abrir mapa completo →
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border">
          <iframe
            title="Mapa Lima"
            src="https://www.google.com/maps/d/u/0/embed?mid=YOUR_MYMAPS_ID" // ← pega tu MyMaps ID
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full"
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Incluye marcadores de barrios, spots para correr, cafés para trabajar,
          restaurantes y más.
        </p>
      </section>

      {/* safety CTA */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border bg-background p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold">¿Primera vez en Lima?</h3>
              <p className="text-sm text-muted-foreground">
                Lee las advertencias rápidas antes de salir. Son 2 minutos que
                te ahorran malos ratos.
              </p>
            </div>
            <Link
              href="/advertencias"
              className="rounded-xl border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
            >
              Ver Advertencias
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Essential({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border p-4">
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <ul className="space-y-1 text-sm">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-foreground/50"
            />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
