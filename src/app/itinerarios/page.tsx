"use client";

import Link from "next/link";
import React from "react";

type Itinerary = {
  title: string;
  duration: "1-2h" | "2-4h" | "día";
  best: string;
  areas: string[];
  steps: string[];
  notes?: string[];
  price?: string;
  links?: { href: string; label: string }[];
};

// export const metadata = {
//   title: "Itinerarios — Lima para Chilenos",
//   description:
//     "Rutas simples de 1/2 día y día completo: malecón, Barranco creativo, centro histórico, surf y mañanas activas. Con enlaces a actividades clave y barrios.",
// };

const ITINERARIOS: Itinerary[] = [
  {
    title: "1/2 día costero (Miraflores → Barranco)",
    duration: "2-4h",
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
    title: "Día mixto fácil (museo + parques + sunset)",
    duration: "día",
    best: "mañana y tarde",
    areas: ["Barranco / Miraflores / San Isidro"],
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
    title: "Mañana activa (running 5K + desayuno)",
    duration: "1-2h",
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
    title: "Surf principiantes + ceviche",
    duration: "2-4h",
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
    title: "Centro histórico express (de día)",
    duration: "2-4h",
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
    title: "Media jornada Barranco creativo",
    duration: "2-4h",
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

// The special stuff

type Etiqueta = "main" | "third" | "remake" | "open-world" | "dlc" | "legends";
type Platform = "GB" | "GBC" | "GBA" | "DS" | "3DS" | "Switch";
type Duración = "1-2h" | "2-4h" | "Medio día" | "Día compreto";

type Game = {
  id: string;
  title: string;
  year: number | string;
  gen: Duración;
  region: string;
  platform: Platform;
  tags: Etiqueta[];
  highlights: string[];
  guideHref?: string; // to an eventual game/guide page
  generationHref: string; // /learn/pokemon-generations#gen-x
  regionHref: string | URL; // /learn/pokemon-regions/<region>
  pokedexHref?: string; // /pokedex?region=<region>
};

const GAMES: Game[] = [
  /* 2-4h */
  {
    id: "rb",
    title: "1/2 día costero (Miraflores → Barranco)",
    year: 1998,
    gen: "2-4h",
    region: "Kanto",
    platform: "GB",
    tags: ["main"],
    highlights: [
      "The beginning—151 to catch",
      "Classic gym path",
      "Version exclusives",
    ],
    generationHref: "/learn/pokemon-generations/gen-i",
    regionHref: "/learn/pokemon-regions/kanto",
    pokedexHref: "/pokedex?region=Kanto",
  },
  {
    id: "yellow",
    title: "Yellow",
    year: 1999,
    gen: "2-4h",
    region: "Kanto",
    platform: "GB",
    tags: ["third"],
    highlights: [
      "Anime-inspired follow-up",
      "Pikachu partner",
      "QoL tweaks for the run",
    ],
    generationHref: "/learn/pokemon-generations/gen-i",
    regionHref: "/learn/pokemon-regions/kanto",
  },

  /* Gen II */
  {
    id: "gs",
    title: "Gold & Silver",
    year: "1999–2000",
    gen: "1-2h",
    region: "Johto",
    platform: "GBC",
    tags: ["main"],
    highlights: [
      "Day/Night + breeding",
      "Post-game Kanto return",
      "100 new Pokémon",
    ],
    generationHref: "/learn/pokemon-generations/gen-ii",
    regionHref: "/learn/pokemon-regions/johto",
  },
  {
    id: "crystal",
    title: "Crystal",
    year: 2001,
    gen: "1-2h",
    region: "Johto",
    platform: "GBC",
    tags: ["third"],
    highlights: [
      "Suicune story",
      "Battle Tower debut",
      "First playable female hero",
    ],
    generationHref: "/learn/pokemon-generations/gen-ii",
    regionHref: "/learn/pokemon-regions/johto",
  },

  /* Gen III */
  {
    id: "rs",
    title: "Ruby & Sapphire",
    year: 2003,
    gen: "Medio día",
    region: "Hoenn",
    platform: "GBA",
    tags: ["main"],
    highlights: [
      "Abilities & Natures arrive",
      "Double battles",
      "Secret Bases",
    ],
    generationHref: "/learn/pokemon-generations/gen-iii",
    regionHref: "/learn/pokemon-regions/hoenn",
  },
  {
    id: "emerald",
    title: "Emerald",
    year: 2005,
    gen: "Medio día",
    region: "Hoenn",
    platform: "GBA",
    tags: ["third"],
    highlights: [
      "Battle Frontier",
      "Team Magma/Aqua combined",
      "Best Gen III single-cartridge pick",
    ],
    generationHref: "/learn/pokemon-generations/gen-iii",
    regionHref: "/learn/pokemon-regions/hoenn",
  },
  {
    id: "frlg",
    title: "FireRed & LeafGreen (Kanto Remakes)",
    year: 2004,
    gen: "Medio día",
    region: "Kanto",
    platform: "GBA",
    tags: ["remake"],
    highlights: [
      "Modernized Kanto",
      "Wireless adapter multiplayer",
      "Sevii Islands post-game",
    ],
    generationHref: "/learn/pokemon-generations/gen-iii",
    regionHref: "/learn/pokemon-regions/kanto",
  },

  /* Gen IV */
  {
    id: "dp",
    title: "Diamond & Pearl",
    year: 2006,
    gen: "Día compreto",
    region: "Sinnoh",
    platform: "DS",
    tags: ["main"],
    highlights: [
      "Physical/Special split",
      "Online trading era begins",
      "Underground",
    ],
    generationHref: "/learn/pokemon-generations/gen-iv",
    regionHref: "/learn/pokemon-regions/sinnoh",
  },
  {
    id: "plat",
    title: "Platinum",
    year: 2008,
    gen: "Día compreto",
    region: "Sinnoh",
    platform: "DS",
    tags: ["third"],
    highlights: [
      "Refined Sinnoh pacing",
      "Distortion World",
      "The “correct” Gen IV pick",
    ],
    generationHref: "/learn/pokemon-generations/gen-iv",
    regionHref: "/learn/pokemon-regions/sinnoh",
  },
  {
    id: "hgss",
    title: "HeartGold & SoulSilver",
    year: 2009,
    gen: "Día compreto",
    region: "Johto",
    platform: "DS",
    tags: ["remake"],
    highlights: [
      "Beloved remakes",
      "Pokéwalker accessory",
      "Two regions in one save",
    ],
    generationHref: "/learn/pokemon-generations/gen-iv",
    regionHref: "/learn/pokemon-regions/johto",
  },

  /* Gen V */
  {
    id: "bw",
    title: "Black & White",
    year: 2010,
    gen: "Gen V",
    region: "Unova",
    platform: "DS",
    tags: ["main"],
    highlights: [
      "All-new Dex until post-game",
      "Animated sprites",
      "Strong story",
    ],
    generationHref: "/learn/pokemon-generations/gen-v",
    regionHref: "/learn/pokemon-regions/unova",
  },
  {
    id: "bw2",
    title: "Black 2 & White 2",
    year: 2012,
    gen: "Gen V",
    region: "Unova",
    platform: "DS",
    tags: ["third"],
    highlights: [
      "Direct sequels",
      "Challenge/Assist Modes",
      "PokéStar Studios & Join Avenue",
    ],
    generationHref: "/learn/pokemon-generations/gen-v",
    regionHref: "/learn/pokemon-regions/unova",
  },

  /* Gen VI */
  {
    id: "xy",
    title: "X & Y",
    year: 2013,
    gen: "Gen VI",
    region: "Kalos",
    platform: "3DS",
    tags: ["main"],
    highlights: ["3D jump", "Fairy type introduced", "Mega Evolutions"],
    generationHref: "/learn/pokemon-generations/gen-vi",
    regionHref: "/learn/pokemon-regions/kalos",
  },
  {
    id: "oras",
    title: "Omega Ruby & Alpha Sapphire",
    year: 2014,
    gen: "Gen VI",
    region: "Hoenn",
    platform: "3DS",
    tags: ["remake"],
    highlights: ["Modern Hoenn", "DexNav hunting", "Delta Episode post-game"],
    generationHref: "/learn/pokemon-generations/gen-vi",
    regionHref: "/learn/pokemon-regions/hoenn",
  },

  /* Gen VII */
  {
    id: "sm",
    title: "Sun & Moon",
    year: 2016,
    gen: "Gen VII",
    region: "Alola",
    platform: "3DS",
    tags: ["main"],
    highlights: ["Trials instead of Gyms", "Z-Moves", "Regional forms"],
    generationHref: "/learn/pokemon-generations/gen-vii",
    regionHref: "/learn/pokemon-regions/alola",
  },
  {
    id: "usum",
    title: "Ultra Sun & Ultra Moon",
    year: 2017,
    gen: "Gen VII",
    region: "Alola",
    platform: "3DS",
    tags: ["third"],
    highlights: ["Expanded story", "Ultra Wormholes", "Better endgame"],
    generationHref: "/learn/pokemon-generations/gen-vii",
    regionHref: "/learn/pokemon-regions/alola",
  },
  {
    id: "lets-go",
    title: "Let's Go Pikachu & Eevee",
    year: 2018,
    gen: "Gen VII",
    region: "Kanto",
    platform: "Switch",
    tags: ["remake"],
    highlights: [
      "Streamlined catching",
      "Great on-ramp for new players",
      "Local co-op",
    ],
    generationHref: "/learn/pokemon-generations/gen-vii",
    regionHref: "/learn/pokemon-regions/kanto",
  },

  /* Gen VIII */
  {
    id: "swsh",
    title: "Sword & Shield",
    year: 2019,
    gen: "Gen VIII",
    region: "Galar",
    platform: "Switch",
    tags: ["main"],
    highlights: ["Dynamax", "Wild Area hub", "Strong online/co-op support"],
    generationHref: "/learn/pokemon-generations/gen-viii",
    regionHref: "/learn/pokemon-regions/galar",
  },
  {
    id: "swsh-dlc",
    title: "Isle of Armor & Crown Tundra",
    year: 2020,
    gen: "Gen VIII",
    region: "Galar",
    platform: "Switch",
    tags: ["dlc"],
    highlights: [
      "Open exploration zones",
      "Raid legendaries",
      "Great endgame loop",
    ],
    generationHref: "/learn/pokemon-generations/gen-viii",
    regionHref: "/learn/pokemon-regions/galar",
  },
  {
    id: "pla",
    title: "Legends: Arceus",
    year: 2022,
    gen: "Gen VIII",
    region: "Hisui",
    platform: "Switch",
    tags: ["legends", "open-world"],
    highlights: [
      "Action-forward catching",
      "Agile/Strong styles",
      "Exploration-first design",
    ],
    generationHref: "/learn/pokemon-generations/gen-viii",
    regionHref: "/learn/pokemon-regions/sinnoh",
  },

  /* Gen IX */
  {
    id: "sv",
    title: "Scarlet & Violet",
    year: 2022,
    gen: "Gen IX",
    region: "Paldea",
    platform: "Switch",
    tags: ["main", "open-world"],
    highlights: ["Fully open-world", "Terastallization", "Three-path campaign"],
    generationHref: "/learn/pokemon-generations/gen-ix",
    regionHref: "/learn/pokemon-regions/paldea",
  },
  {
    id: "sv-dlc",
    title: "Teal Mask & Indigo Disk",
    year: 2023,
    gen: "Gen IX",
    region: "Paldea",
    platform: "Switch",
    tags: ["dlc"],
    highlights: [
      "New areas & mons",
      "BB League & Blueberry quests",
      "Great late-game variety",
    ],
    generationHref: "/learn/pokemon-generations/gen-ix",
    regionHref: "/learn/pokemon-regions/paldea",
  },
];

const GEN_CHIPS: Array<{
  label: "All" | Duración;
  value: "All" | Duración;
}> = [
  { label: "Todos", value: "Todos" },
  { label: "1-2h", value: "1-2h" },
  { label: "2-4h", value: "2-4h" },
  { label: "Medio día", value: "Medio día" },
  { label: "Día completo", value: "Día completo" },
];

const TAG_CHIPS: Array<{ label: string; value: Etiqueta | "Cualquiera" }> = [
  { label: "Cualquiera", value: "Cualquiera" },
  { label: "Main series", value: "main" },
  { label: "Third version", value: "third" },
  { label: "Remakes", value: "remake" },
  { label: "Open-world", value: "open-world" },
  { label: "DLC", value: "dlc" },
  { label: "Legends", value: "legends" },
];

// End of special stuff

export default function ItinerariosPage() {
  const [gen, setGen] = React.useState<"Todos" | Duración>("Todos");
  const [tag, setTag] = React.useState<Etiqueta | "Cualquiera">("Cualquiera");

  const filtered = React.useMemo(() => {
    return GAMES.filter((g) => (gen === "Todos" ? true : g.gen === gen)).filter(
      (g) => (tag === "Cualquiera" ? true : g.tags.includes(tag))
    );
  }, [gen, tag]);

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

      {/* Cards */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Rutas sugeridas</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {ITINERARIOS.map((it) => (
            <div key={it.title} className="flex flex-col rounded-xl border p-5">
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold">{it.title}</h3>
                <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {it.duration}
                </span>
                <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {it.best}
                </span>
              </div>

              <p className="text-sm text-muted-foreground">
                Zonas: {it.areas.join(" • ")}
              </p>

              {it.price && (
                <p className="text-sm text-muted-foreground">
                  Costo: {it.price}
                </p>
              )}

              <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm">
                {it.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>

              {it.notes && (
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {it.notes.map((n, i) => (
                    <li key={i}>• {n}</li>
                  ))}
                </ul>
              )}

              {it.links && it.links.length > 0 && (
                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  {it.links.map((l) => (
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
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">¿Quieres afinar tu plan?</h3>
          <p className="text-sm text-muted-foreground">
            Abre el{" "}
            <Link href="/mapa" className="underline underline-offset-4">
              mapa
            </Link>{" "}
            y combina con{" "}
            <Link href="/comida" className="underline underline-offset-4">
              Comida
            </Link>{" "}
            o{" "}
            <Link href="/copete" className="underline underline-offset-4">
              Copete
            </Link>
            .
          </p>
        </div>
        <Link
          href="/advertencias"
          className="mt-3 inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80 sm:mt-0"
        >
          Ver advertencias rápidas
        </Link>
      </div>

      {/* Filter section and logic */}
      <div className="">
        <div className="mb-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-2 text-sm font-semibold text-gray-900">
              Duración
            </div>
            {/* Filter by generation */}
            <div className="flex flex-wrap gap-2">
              {GEN_CHIPS.map((c) => {
                const active = c.value === gen;
                return (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setGen(c.value)}
                    className={[
                      "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                      active
                        ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    {c.label}
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
              {TAG_CHIPS.map((c) => {
                const active = c.value === tag;
                return (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setTag(c.value)}
                    className={[
                      "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                      active
                        ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Game list */}
      <div className="">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <article
              key={g.id}
              className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {g.title}
                </h3>
                <Link href={g.generationHref}>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200">
                    {g.gen}
                  </span>
                </Link>
              </div>

              <div className="mt-1 text-xs text-gray-600">
                {g.region} • {g.platform} • {g.year}
              </div>

              {/* Highlights */}
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {g.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[11px] font-medium text-gray-700"
                  >
                    {t.replace("-", " ")}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
