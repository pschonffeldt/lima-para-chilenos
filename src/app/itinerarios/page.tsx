"use client";

import Link from "next/link";
import React from "react";

// export const metadata = {
//   title: "Itinerarios — Lima para Chilenos",
//   description:
//     "Rutas simples de 1/2 día y día completo: malecón, Barranco creativo, centro histórico, surf y mañanas activas. Con enlaces a actividades clave y barrios.",
// };

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
    price: "Aprox 400 soles",
    links: [
      { href: "/actividades/paseo-malecon", label: "Paseo por el malecón" },
      { href: "/actividades/barranco-creativo", label: "Barranco creativo" },
      { href: "/cafe", label: "Café" },
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
];

type Etiqueta = "comida" | "cafe" | "running" | "surf" | "fiesta" | "otros";
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
];

export default function ItinerariosPage() {
  const [duration, setDuration] = React.useState<"Todos" | Duración>("Todos");
  const [type, setType] = React.useState<Etiqueta | "Todos">("Todos");

  const filtered = React.useMemo(() => {
    return ITINERARIOS.filter((g) =>
      duration === "Todos" ? true : g.duration === duration
    ).filter((g) => (type === "Todos" ? true : g.tags.includes(type)));
  }, [duration, type]);

  return (
    <section className="space-y-10 py-10">
      {/* Agregar aca el codigo que deje en la otra pestanna */}
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

      {/* Quick advice */}
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

      {/* Filter section and logic */}
      <div className="mb-6 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="mb-2 text-sm font-semibold text-gray-900">
            Duración
          </div>
          {/* Filter by generation */}
          <div className="flex flex-wrap gap-2">
            {DURATION_CHIPS.map((chips) => {
              const active = chips.value === duration;
              return (
                <button
                  key={chips.value}
                  type="button"
                  onClick={() => setDuration(chips.value)}
                  className={[
                    "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                    active
                      ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {chips.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter by tag */}
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="mb-2 text-sm font-semibold text-gray-900">
            Etiqueta
          </div>
          <div className="flex flex-wrap gap-2">
            {TAG_CHIPS.map((chips) => {
              const active = chips.value === type;
              return (
                <button
                  key={chips.value}
                  type="button"
                  onClick={() => setType(chips.value)}
                  className={[
                    "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                    active
                      ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {chips.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Itinerary list */}
      <div className="mb-6 grid gap-3">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filtered.map((g) => (
            <article
              key={g.id}
              className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              {/* Title */}
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {g.title}
                </h3>
              </div>
              {/* NAME THIS!!!!! */}
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {g.duration}
                </span>
                <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {g.best}
                </span>
              </div>
              {/* District */}
              <div className="mt-1 text-xs text-gray-600">
                <p className="text-sm text-muted-foreground">
                  Zonas: {g.areas.join(" • ")}
                </p>
                {g.price && (
                  <p className="text-sm text-muted-foreground">
                    Costo: {g.price}
                  </p>
                )}
              </div>

              {/* Instructions */}
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {g.steps.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {/* Tips */}
              {g.notes && (
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {g.notes.map((n, i) => (
                    <li key={i}>• {n}</li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {g.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[11px] font-medium text-gray-700"
                  >
                    {tag.replace("-", " ")}
                  </span>
                ))}
              </div>
              {/* Kinks */}
              <div className="mt-3 flex flex-wrap gap-2">
                {g.links && g.links.length > 0 && (
                  <div className="mt-auto pt-5 flex flex-wrap gap-2">
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
        </div>
      </div>
    </section>
  );
}
