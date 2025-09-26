import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Right section */}
      <section className="mx-auto w-[80%] min-w-0 py-20 space-y-10">
        {/* HERO */}
        <header className="space-y-5">
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Lima para chilenos, sin rodeos.
          </h1>

          <p className="max-w-[65ch] text-muted-foreground">
            Consejos locales, mapas y listas curadas para que te adaptes en
            horas — no en días. Menos humo, más datos útiles.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/intro"
              className="rounded-lg border bg-white/60 px-4 py-2 text-sm font-medium shadow-sm hover:bg-white"
            >
              Empezar por la Introducción
            </Link>
            <a
              href="#mapa"
              className="rounded-lg border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60"
            >
              Ver mapa rápido
            </a>
          </div>
        </header>
        {/* ESSENTIALS */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Pago & cambio
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                />
                Yape/Plin: para locales
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                />
                Tarjeta: aceptada en la mayoría
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                />
                Efectivo: lleva soles (S/.)
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Conectividad
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                />
                SIM/eSIM: Claro, Entel, Movistar
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                />
                4G/5G: buena en zonas céntricas
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                />
                Wi-Fi en cafés y malls
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Seguridad
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                />
                Taxi por app; evita la calle
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                />
                Cuida el celu en esquinas concurridas
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-foreground/50"
                />
                Malecón: ok de día, ojo de noche
              </li>
            </ul>
          </div>
        </div>
        {/* DISTRICTS */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Distritos recomendados</h2>
            <Link
              href="/barrios"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Ver todos →
            </Link>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center justify-between rounded-lg border px-3 py-2">
              <div className="min-w-0">
                <p className="font-medium">Miraflores</p>
                <p className="truncate text-sm text-muted-foreground">
                  malecón, parques, cafés para trabajar
                </p>
              </div>
              <Link
                href="/barrios/miraflores"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver
              </Link>
            </li>
            <li className="flex items-center justify-between rounded-lg border px-3 py-2">
              <div className="min-w-0">
                <p className="font-medium">Barranco</p>
                <p className="truncate text-sm text-muted-foreground">
                  arte y bares, caminable y con onda
                </p>
              </div>
              <Link
                href="/barrios/barranco"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver
              </Link>
            </li>
            <li className="flex items-center justify-between rounded-lg border px-3 py-2">
              <div className="min-w-0">
                <p className="font-medium">San Isidro</p>
                <p className="truncate text-sm text-muted-foreground">
                  seguro, restaurantes top, parques
                </p>
              </div>
              <Link
                href="/barrios/san-isidro"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver
              </Link>
            </li>
          </ul>
        </div>
        {/* EXPLORE SECTIONS */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Explora la guía</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <Link
              href="/intro"
              className="group rounded-xl border p-5 shadow-sm transition-colors hover:bg-muted/40"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  👋
                </span>
                <h3 className="text-base font-semibold">Introducción</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Primeros pasos: barrios, horarios y costumbres.
              </p>
              <span className="mt-3 inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </Link>

            <Link
              href="/transporte"
              className="group rounded-xl border p-5 shadow-sm transition-colors hover:bg-muted/40"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  🛵
                </span>
                <h3 className="text-base font-semibold">Transporte</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Apps, Metropolitano, taxis y tips.
              </p>
              <span className="mt-3 inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </Link>

            <Link
              href="/comida"
              className="group rounded-xl border p-5 shadow-sm transition-colors hover:bg-muted/40"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  🍽️
                </span>
                <h3 className="text-base font-semibold">Comida</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Ceviche, chifa, menú del día y más.
              </p>
              <span className="mt-3 inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </Link>

            <Link
              href="/copete"
              className="group rounded-xl border p-5 shadow-sm transition-colors hover:bg-muted/40"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  🍸
                </span>
                <h3 className="text-base font-semibold">Copete</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Barras, pisco y compras rápidas.
              </p>
              <span className="mt-3 inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </Link>

            <Link
              href="/actividades"
              className="group rounded-xl border p-5 shadow-sm transition-colors hover:bg-muted/40"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  🗺️
                </span>
                <h3 className="text-base font-semibold">Actividades</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Malecón, surf, museos y panoramas.
              </p>
              <span className="mt-3 inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </Link>

            <Link
              href="/advertencias"
              className="group rounded-xl border p-5 shadow-sm transition-colors hover:bg-muted/40"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  ⚠️
                </span>
                <h3 className="text-base font-semibold">Advertencias</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Estafas comunes, zonas a evitar, apps confiables.
              </p>
              <span className="mt-3 inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </Link>
          </div>
        </div>
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
              src="https://www.google.com/maps/d/u/0/embed?mid=YOUR_MYMAPS_ID" // replace with your MyMaps ID
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Marcadores de barrios, cafés para trabajar, restaurantes y spots
            para correr.
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
    </div>
  );
}
