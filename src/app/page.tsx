import Link from "next/link";

// Top essentials
const ESSENTIALS = [
  {
    title: "Pago & cambio",
    items: [
      "Yape/Plin: para tiendas pequeñas",
      "Tarjeta: aceptada en la mayoría",
      "Efectivo: lleva dólares o habilita tus tarjetas",
    ],
  },
  {
    title: "Conectividad",
    items: [
      "Roaming: Claro, Entel, Movistar",
      "4G/5G en zonas céntricas",
      "Wi-Fi en cafés y malls",
    ],
  },
  {
    title: "Seguridad",
    items: [
      "App de transporte; evita taxis informales",
      "Cuida el teléfono en esquinas concurridas",
      "Malecón: ok de día; ojo de noche",
    ],
  },
] as const;

// Districts (no leading slash in slug)
const DISTRICTS = [
  {
    slug: "miraflores",
    name: "Miraflores",
    note: "malecón, parques, cafés para trabajar",
  },
  {
    slug: "barranco",
    name: "Barranco",
    note: "arte y bares, caminable y con onda",
  },
  {
    slug: "san-isidro",
    name: "San Isidro",
    note: "seguro, restaurantes top, parques",
  },
] as const;

// Sections
const SECTIONS = [
  {
    href: "/introduccion",
    label: "Introducción",
    icon: "👋",
    blurb: "Primeros pasos: barrios, horarios y costumbres.",
  },
  {
    href: "/transporte",
    label: "Transporte",
    icon: "🛵",
    blurb: "Apps, buses, taxis y tips.",
  },
  {
    href: "/comida",
    label: "Comida",
    icon: "🍽️",
    blurb: "Ceviche, chifa, menú del día y más.",
  },
  {
    href: "/copete",
    label: "Copete",
    icon: "🍸",
    blurb: "Barras, pisco y compras rápidas.",
  },
  {
    href: "/actividades",
    label: "Actividades",
    icon: "🗺️",
    blurb: "Malecón, surf, museos y panoramas.",
  },
  {
    href: "/advertencias",
    label: "Advertencias",
    icon: "⚠️",
    blurb: "Estafas comunes, zonas a evitar, apps confiables.",
  },
] as const;

export default function Home() {
  return (
    // Rely on ContainerComponent for width; just spacing here
    <section className="space-y-10 py-10">
      {/* HERO */}
      <header className="space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
          🇨🇱→🇵🇪 <span>Lima para Chilenos</span>
        </span>

        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Lima para chilenos, crudo y sin censura.
        </h1>

        <p className="max-w-[70ch] text-muted-foreground">
          Consejos de un chileno que vive en Lima, con mapas y listas para que
          te adaptes en horas — no en días. Menos bla bla y más datos útiles.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/introduccion"
            className="rounded-lg border bg-white/60 px-4 py-2 text-sm font-medium shadow-sm hover:bg-white"
          >
            Empezar por la Introducción
          </Link>
          <a
            href="#mapa"
            className="rounded-lg border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60"
          >
            Ver mapa con destinos
          </a>
        </div>
      </header>

      {/* ESSENTIALS */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {ESSENTIALS.map((card) => (
          <div key={card.title} className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {card.title}
            </p>
            <ul role="list" className="space-y-1 text-sm">
              {card.items.map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* DISTRICTS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Distritos recomendados</h2>
          <Link
            href="/barrios"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Ver todos los distritos →
          </Link>
        </div>

        <ul role="list" className="space-y-2">
          {DISTRICTS.map((district) => (
            <li
              key={district.slug}
              className="flex items-center justify-between rounded-lg border px-3 py-2"
            >
              <div className="min-w-0">
                <p className="font-medium">{district.name}</p>
                <p className="truncate text-sm text-muted-foreground">
                  {district.note}
                </p>
              </div>
              <Link
                href={`/barrios/${district.slug}`}
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver detalles del distrito
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* EXPLORE SECTIONS */}
      <section aria-labelledby="explora" className="space-y-3">
        <h2 id="explora" className="text-lg font-semibold">
          Explora secciones por temática
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 items-stretch">
          {SECTIONS.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group flex h-full flex-col rounded-xl border p-5 shadow-sm transition-colors hover:bg-muted/40"
              aria-label={`Abrir sección ${section.label}`}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  {section.icon}
                </span>
                <h3 className="text-base font-semibold">{section.label}</h3>
              </div>

              <p className="text-sm text-muted-foreground">{section.blurb}</p>

              <div className="mt-auto pt-5">
                <span className="inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                  Abrir sección →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MAP */}
      <div id="mapa" className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Mapa rápido</h2>
          <Link
            href="/mapa"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Abrir mapa completo →
          </Link>
        </div>

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
      </div>

      {/* SAFETY CTA */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">¿Primera vez en Lima?</h3>
          <p className="text-sm text-muted-foreground">
            Lee las advertencias rápidas. Son 2 minutos que te ahorran malos
            ratos.
          </p>
        </div>
        <Link
          href="/advertencias"
          className="mt-3 inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80 sm:mt-0"
        >
          Ver Advertencias
        </Link>
      </div>
    </section>
  );
}
