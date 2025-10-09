"use client";

import Link from "next/link";
import * as React from "react";
import {
  FilterConfig,
  ChipFilterBoard,
} from "../components/filter-board-component";

// --- Types ---
type Etiqueta =
  | "comida"
  | "cafe"
  | "running"
  | "surf"
  | "fiesta"
  | "otros"
  | "museos"
  | "caminar"
  | "malecon";

type Duración = "1-2h" | "2-4h" | "Medio día" | "Día completo";

type Itinerary = {
  id: string;
  title: string;
  duration: Duración;
  region: string;
  tags: Etiqueta[];
  best: string;
  areas: string[];
  steps: string[];
  notes?: string[];
  price?: string;
  links?: { href: string; label: string }[];
};

// --- Data (unchanged content, trimmed for brevity) ---
const ITINERARIOS: Itinerary[] = [
  {
    id: "medio-dia-costero-miraflores-barranco",
    title: "1/2 día costero (Miraflores → Barranco)",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["cafe"],
    best: "tarde / atardecer",
    areas: ["Miraflores", "Barranco"],
    steps: [
      "Café en Miraflores (cerca del malecón).",
      "Paseo por el malecón con paradas en miradores.",
      "Baja a Barranco: murales y Puente de los Suspiros.",
      "Sunset en mirador + bar o cena ligera.",
    ],
    notes: [
      "Traslados en app si se hace tarde.",
      "Bloqueador + cortaviento según clima.",
    ],
    price: "400 soles",
    links: [
      { href: "/actividades/paseo-malecon", label: "Ver itinerario completo" },
    ],
  },
  {
    id: "dia-mixto-facil-museo-parques-sunset",
    title: "Día mixto fácil (museo + parques + sunset)",
    duration: "Día completo",
    region: "Lima Metropolitana",
    tags: ["cafe"],
    best: "mañana y tarde",
    areas: ["Barranco", "Miraflores", "San Isidro"],
    steps: [
      "Museo en la mañana (MATE/MAC o Larco).",
      "Almuerzo tranquilo.",
      "Parque o bici suave por el malecón.",
      "Atardecer y bar/cena en Barranco.",
    ],
    notes: ["Revisa horarios (varios museos cierran lunes)."],
    links: [
      { href: "/actividades/museos-sitios", label: "Museos & sitios" },
      { href: "/actividades/bici-malecon", label: "Bici por el malecón" },
      { href: "/copete", label: "Copete" },
    ],
  },
  {
    id: "manana-activa-running-5k-desayuno",
    title: "Mañana activa (running 5K + desayuno)",
    duration: "1-2h",
    region: "Lima Metropolitana",
    tags: ["cafe"],
    best: "temprano",
    areas: ["Miraflores"],
    steps: [
      "Running 5K por el malecón (Faro ↔ Parque del Amor).",
      "Estiraciones y fotos.",
      "Desayuno/ café cerca del malecón.",
    ],
    notes: [
      "Hidrátate y usa bloqueador.",
      "Audífonos a volumen bajo; atento a cruces de ciclovía.",
    ],
    links: [
      {
        href: "/actividades/correr-bici-malecon",
        label: "Correr/Bici por malecón",
      },
      { href: "/cafe", label: "Café" },
    ],
  },
  {
    id: "surf-principiantes-ceviche",
    title: "Surf principiantes + ceviche",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["surf"],
    best: "mañana",
    areas: ["Costa Verde"],
    steps: [
      "Clase de surf (tabla + traje).",
      "Ducha/ cambio.",
      "Ceviche del día o menú marino.",
    ],
    notes: [
      "Lleva toalla, muda de ropa y deja objetos de valor en el alojamiento.",
    ],
    links: [
      {
        href: "/actividades/surf-principiantes",
        label: "Surf para principiantes",
      },
    ],
  },
  {
    id: "centro-historico-express-dia",
    title: "Centro histórico express (de día)",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["cafe"],
    best: "mañana",
    areas: ["Centro de Lima"],
    steps: [
      "Plaza Mayor y balcones.",
      "Museo cercano + café.",
      "Fotos y regreso en app desde punto acordado.",
    ],
    notes: [
      "Ir de día y mantenerse en zonas concurridas.",
      "Define punto de recojo para volver.",
    ],
    links: [
      {
        href: "/actividades/centro-historico-dia",
        label: "Centro histórico (día)",
      },
      { href: "/barrios/lima-centro", label: "Barrio: Lima Centro" },
    ],
  },
  {
    id: "media-jornada-barranco-creativo",
    title: "Media jornada Barranco creativo",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["cafe"],
    best: "tarde / atardecer",
    areas: ["Barranco"],
    steps: [
      "Murales y galerías.",
      "Puente de los Suspiros.",
      "Atardecer en mirador + bar tranquilo.",
    ],
    notes: ["De noche, vuelve en app. Evita caminar largas distancias."],
    links: [
      { href: "/actividades/barranco-creativo", label: "Barranco creativo" },
      { href: "/barrios/barranco", label: "Barrio: Barranco" },
    ],
  },
  {
    id: "ruta-museos-pueblo-libre",
    title: "Ruta de museos en Pueblo Libre (Larco + MNAAHP)",
    duration: "Medio día",
    region: "Lima Metropolitana",
    tags: ["museos", "caminar"],
    best: "mañana o tarde",
    areas: ["Pueblo Libre"],
    steps: [
      "Visita al Museo Larco.",
      "Café/descanso en el patio del museo.",
      "Caminata hacia el MNAAHP y recorrido principal.",
      "Paseo corto por el Parque Bolívar y retorno.",
    ],
    notes: ["Checa horarios; algunos museos cierran lunes."],
    links: [
      { href: "/actividades/museos-sitios", label: "Museos & sitios" },
      { href: "/cafe", label: "Café" },
      { href: "/barrios/pueblo-libre", label: "Barrio: Pueblo Libre" },
    ],
  },
  {
    id: "museos-barranco-mate-mac",
    title: "Barranco de museos (MATE + MAC) + paseo",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["museos", "caminar"],
    best: "tarde",
    areas: ["Barranco"],
    steps: [
      "Ingreso al MATE (Mario Testino).",
      "Cruce al MAC y recorrido breve.",
      "Caminata por calles con murales.",
      "Café final cerca del Puente de los Suspiros.",
    ],
    notes: ["Compra entradas online si es posible; evita horas de mayor sol."],
    links: [
      { href: "/actividades/museos-sitios", label: "Museos & sitios" },
      { href: "/barrios/barranco", label: "Barrio: Barranco" },
      { href: "/cafe", label: "Café" },
    ],
  },
  {
    id: "coffee-crawl-miraflores",
    title: "Coffee crawl Miraflores (3 paradas)",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["cafe", "caminar"],
    best: "mañana",
    areas: ["Miraflores"],
    steps: [
      "Primera parada: espresso/cortado.",
      "Caminata por el malecón (miradores).",
      "Segunda parada: filtrado (V60/aeropress).",
      "Tercera parada: algo dulce + cappuccino.",
    ],
    notes: ["Hidrátate; el sol pega incluso con brisa marina."],
    links: [
      { href: "/cafe", label: "Guía de café" },
      { href: "/actividades/paseo-malecon", label: "Paseo por el malecón" },
    ],
  },
  {
    id: "coffee-crawl-barranco",
    title: "Coffee crawl Barranco bohemio",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["cafe", "caminar"],
    best: "tarde",
    areas: ["Barranco"],
    steps: [
      "Primera cafetería cerca de la Bajada de Baños.",
      "Murales y fotos por las callecitas.",
      "Segunda cafetería de especialidad (metodologías).",
      "Puente de los Suspiros + helado para cerrar.",
    ],
    notes: [
      "Si oscurece, vuelve en app; evita caminar largas cuadras de noche.",
    ],
    links: [
      { href: "/cafe", label: "Guía de café" },
      { href: "/actividades/barranco-creativo", label: "Barranco creativo" },
    ],
  },
  {
    id: "malecon-a-pie-completo",
    title: "Malecón a pie (San Isidro → Barranco)",
    duration: "Medio día",
    region: "Lima Metropolitana",
    tags: ["caminar", "malecon"],
    best: "tarde / atardecer",
    areas: ["San Isidro", "Miraflores", "Barranco"],
    steps: [
      "Inicio en el Faro de la Marina.",
      "Parques y miradores (Mariscal Castilla, Amor, Raimondi).",
      "Bajada opcional a la playa (Bajada Balta o Armendáriz).",
      "Llegada a Barranco para sunset y descanso.",
    ],
    notes: ["Gorro, bloqueador y corta viento; brisa fría al atardecer."],
    links: [
      { href: "/actividades/paseo-malecon", label: "Paseo por el malecón" },
      { href: "/barrios/barranco", label: "Barrio: Barranco" },
    ],
  },
];

// --- Chips (options) ---
const DURATION_CHIPS: Array<{
  label: "Todos" | Duración;
  value: "Todos" | Duración;
}> = [
  { label: "Todos", value: "Todos" },
  { label: "1-2h", value: "1-2h" },
  { label: "2-4h", value: "2-4h" },
  { label: "Medio día", value: "Medio día" },
  { label: "Día completo", value: "Día completo" },
];

const TAG_CHIPS: Array<{ label: string; value: Etiqueta | "Todos" }> = [
  { label: "Todos", value: "Todos" },
  { label: "Comida", value: "comida" },
  { label: "Café", value: "cafe" },
  { label: "Running", value: "running" },
  { label: "Surf", value: "surf" },
  { label: "Fiesta", value: "fiesta" },
  { label: "Otros", value: "otros" },
  { label: "Museos", value: "museos" },
  { label: "Caminar", value: "caminar" },
  { label: "Malecón", value: "malecon" },
];

// --- Filter configs for ChipFilterBoard (string-only) ---
const DURATION_FILTER: FilterConfig<Itinerary> = {
  id: "duration",
  label: "Duración",
  options: DURATION_CHIPS,
  defaultValue: "Todos",
  isMatch: (g, v) => v === "Todos" || g.duration === v,
};

const TAG_FILTER: FilterConfig<Itinerary> = {
  id: "tag",
  label: "Etiqueta",
  options: TAG_CHIPS,
  defaultValue: "Todos",
  isMatch: (g, v) => v === "Todos" || g.tags.includes(v as Etiqueta),
};

export default function ItinerariosPage() {
  return (
    <section className="space-y-10 py-10">
      {/* Title */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Itinerarios</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Rutas listas para usar —sin humo— pensadas para moverte entre
          Miraflores, Barranco y San Isidro. Hay opciones de 1/2 día, día
          completo y mañanas activas. Combina con{" "}
          <Link href="/mapa" className="underline underline-offset-4">
            el mapa
          </Link>{" "}
          y revisa{" "}
          <Link href="/advertencias" className="underline underline-offset-4">
            advertencias
          </Link>{" "}
          antes de salir.
        </p>
      </header>

      {/* Quick advice (unchanged) */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Traslados
          </p>
          <ul className="space-y-1 text-sm">
            <li>Usa apps (Cabify/Uber). Evita taxi de calle.</li>
            <li>Define punto de encuentro antes de pagar la cuenta.</li>
            <li>
              Revisa{" "}
              <Link href="/transporte" className="underline underline-offset-4">
                Transporte
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Horarios
          </p>
          <ul className="space-y-1 text-sm">
            <li>Mañana y atardecer para malecón.</li>
            <li>Museos: revisa horarios (muchos cierran lunes).</li>
            <li>Noches: prefiere zonas iluminadas y concurridas.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Qué llevar
          </p>
          <ul className="space-y-1 text-sm">
            <li>Bloqueador + agua + cortaviento ligero.</li>
            <li>Tarjeta/efectivo chico; documento a mano.</li>
            <li>Celular guardado en esquinas muy concurridas.</li>
          </ul>
        </div>
      </div>

      {/* Filters + list via ChipFilterBoard */}
      <ChipFilterBoard
        items={ITINERARIOS}
        filters={[DURATION_FILTER, TAG_FILTER]}
      >
        {(filtered) => (
          <div className="mb-6 grid gap-3">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {filtered.map((g) => (
                <article
                  key={g.id}
                  className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-md transition"
                >
                  {/* Title */}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {g.title}
                    </h3>
                  </div>

                  {/* Top tags */}
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-sm text-gray-700">
                        Duración y horario:
                      </h3>
                      <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                        {g.duration}
                      </span>
                      <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                        {g.best}
                      </span>
                    </div>

                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-sm text-gray-700">Etiquetas:</h3>
                      {g.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground lowercase first-letter:uppercase"
                        >
                          {tag.replaceAll("-", " ")}
                        </span>
                      ))}
                    </div>

                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-sm text-gray-700">Zonas:</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {g.areas?.length ? (
                          g.areas.map((a) => (
                            <span
                              key={a}
                              className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
                            >
                              {a}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            —
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-sm text-gray-700">
                        Costo aproximado:
                      </h3>
                      {g.price && (
                        <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                          {g.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Instructions */}
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                    {g.steps.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  {/* Notes */}
                  <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-indigo-50/50 p-6">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Tips
                    </h3>
                    {g.notes && (
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        {g.notes.map((n, i) => (
                          <li key={i}>• {n}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Links */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.links && g.links.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-2 pt-5">
                        {g.links.map((l) => (
                          <Link
                            key={l.href + l.label}
                            href={l.href}
                            className="rounded-lg border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-white/80"
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}

              {filtered.length === 0 && (
                <div className="col-span-full rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                  No hay resultados con los filtros actuales.
                </div>
              )}
            </div>
          </div>
        )}
      </ChipFilterBoard>
    </section>
  );
}
