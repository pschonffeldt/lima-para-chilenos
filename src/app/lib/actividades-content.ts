// src/app/lib/actividades-content.ts

// ---------- Types ----------
export type Activity = {
  slug: string; // e.g. "paseo-malecon"
  icon: string; // emoji
  title: string; // "Paseo por el malecón"
  summary: string; // short blurb
  duration: "1-2h" | "2-4h" | "día";
  bestTime: string[]; // ["mañana", "atardecer"]
  areas: string[]; // ["Miraflores", "Barranco"]
  tags: string[]; // ["caminata", "vista al mar"]
  sections: { title: string; items: string[] }[];
  map?: { embedUrl: string; note?: string };
  cautions?: string[];
  ctas?: { href: string; label: string }[];
};

const MAP_EMBED =
  "https://www.google.com/maps/d/embed?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&ehbc=2E312F";

// ---------------------------------
// Activities (detail data) — LITERAL
// ---------------------------------
// Use `satisfies` so values are validated as Activity
// while **preserving the exact literal keys**.
export const ACTIVIDADES = {
  // Malecón y costa
  "paseo-malecon": {
    slug: "paseo-malecon",
    icon: "🌊",
    title: "Paseo por el malecón",
    summary:
      "Caminata fácil con miradores y acantilados entre Miraflores y Barranco.",
    duration: "1-2h",
    bestTime: ["mañana", "atardecer"],
    areas: ["Miraflores", "Barranco"],
    tags: ["caminata", "vista al mar", "foto"],
    sections: [
      {
        title: "Ruta sugerida",
        items: [
          "Parque del Amor → Faro → Bajada a Barranco (miradores).",
          "Paradas para fotos y café en el camino.",
        ],
      },
      {
        title: "Qué llevar",
        items: ["Bloqueador", "Cortaviento ligero", "Agua"],
      },
      {
        title: "Tips",
        items: [
          "Mejor de día; al atardecer hay buen ambiente.",
          "Celular guardado al cruzar esquinas y miradores.",
        ],
      },
    ],
    map: { embedUrl: MAP_EMBED, note: "Sigue el borde del malecón." },
    ctas: [
      { href: "/barrios/miraflores", label: "Ver Miraflores" },
      { href: "/barrios/barranco", label: "Ver Barranco" },
    ],
  },

  // Correr & bicicleta
  "correr-bici-malecon": {
    slug: "correr-bici-malecon",
    icon: "🚴‍♂️",
    title: "Correr o bici por el malecón",
    summary:
      "Loops 5K/10K y ciclovías con vista al mar. Ideal temprano o al final de la tarde.",
    duration: "1-2h",
    bestTime: ["mañana", "tarde"],
    areas: ["Miraflores", "Barranco"],
    tags: ["running", "bici", "vista al mar"],
    sections: [
      {
        title: "Rutas sugeridas",
        items: [
          "Running 5K: Faro ↔ Parque del Amor (extiende a 10K sumando Barranco).",
          "Bici: ciclovía Miraflores ↔ Barranco con paradas en miradores.",
        ],
      },
      {
        title: "Consejos",
        items: [
          "Hidratación y bloqueador.",
          "Respeta cruces; volumen bajo en audífonos.",
        ],
      },
      {
        title: "Seguridad",
        items: ["Mejor de día", "Evita zonas muy vacías de noche"],
      },
    ],
    map: { embedUrl: MAP_EMBED },
  },

  // Surf para principiantes
  "surf-principiantes": {
    slug: "surf-principiantes",
    icon: "🏄‍♂️",
    title: "Playa & surf para principiantes (Costa Verde)",
    summary:
      "Clases con tabla y traje. Ideal en la mañana, agua fría todo el año.",
    duration: "2-4h",
    bestTime: ["mañana"],
    areas: ["Costa Verde"],
    tags: ["deporte", "mar"],
    sections: [
      {
        title: "Cómo funciona",
        items: [
          "Clases en playas de la Costa Verde",
          "Incluye tabla y traje corto",
          "Coach te guía en la orilla",
        ],
      },
      {
        title: "Qué llevar",
        items: ["Bloqueador", "Agua", "Toalla", "Muda de ropa"],
      },
      {
        title: "Tips",
        items: [
          "Deja objetos de valor en el alojamiento",
          "Ve y vuelve en app",
        ],
      },
    ],
    map: { embedUrl: MAP_EMBED },
  },

  // Cultura y paseos urbanos
  "centro-historico-dia": {
    slug: "centro-historico-dia",
    icon: "🏛️",
    title: "Centro histórico (de día)",
    summary:
      "Plazas, balcones y museos. Plan cultural breve con regreso en app.",
    duration: "2-4h",
    bestTime: ["mañana"],
    areas: ["Centro de Lima"],
    tags: ["cultura", "arquitectura"],
    sections: [
      {
        title: "Itinerario",
        items: [
          "Plaza Mayor + balcones",
          "Museo cercano + café",
          "Fotos y regreso en app desde punto acordado",
        ],
      },
      { title: "Qué llevar", items: ["Documento", "Agua", "Bloqueador"] },
      {
        title: "Tips",
        items: [
          "Mejor de día",
          "Mantente en zonas concurridas",
          "Define punto de recojo para volver",
        ],
      },
    ],
    map: { embedUrl: MAP_EMBED },
    ctas: [{ href: "/barrios/lima-centro", label: "Ver Lima Centro" }],
  },

  // Museos & sitios
  "museos-sitios": {
    slug: "museos-sitios",
    icon: "🖼️",
    title: "Museos & sitios",
    summary:
      "Arte, historia y arqueología en varios distritos. Verifica horarios (muchos cierran lunes).",
    duration: "2-4h",
    bestTime: ["mañana", "tarde"],
    areas: ["Barranco", "Miraflores", "Pueblo Libre", "Centro de Lima"],
    tags: ["museos", "cultura"],
    sections: [
      {
        title: "Sugerencias",
        items: [
          "Museo Larco (Pueblo Libre) + cafetería",
          "MATE + MAC (Barranco)",
          "Huaca Pucllana (Miraflores)",
          "MALI (Centro) — revisar agenda",
        ],
      },
      {
        title: "Tips",
        items: [
          "Compra entrada online si existe opción",
          "Revisa que no sea lunes (cierres)",
          "Traslados en app",
        ],
      },
    ],
    map: { embedUrl: MAP_EMBED },
  },

  // Barranco creativo
  "barranco-creativo": {
    slug: "barranco-creativo",
    icon: "🎨",
    title: "Barranco creativo",
    summary:
      "Murales, puente icónico y terrazas. Camina de día; de noche vuelve en app.",
    duration: "2-4h",
    bestTime: ["tarde", "atardecer"],
    areas: ["Barranco"],
    tags: ["paseo", "foto", "bar"],
    sections: [
      {
        title: "Plan",
        items: [
          "Murales y galerías",
          "Puente de los Suspiros",
          "Atardecer en mirador",
          "Bares/cena al cierre",
        ],
      },
      {
        title: "Consejos",
        items: [
          "Llega en app",
          "Evita caminar largas distancias de noche",
          "Define punto de recojo antes de pagar",
        ],
      },
    ],
    map: { embedUrl: MAP_EMBED },
  },

  // Deporte y naturaleza
  "parques-areas-verdes": {
    slug: "parques-areas-verdes",
    icon: "🌳",
    title: "Parques & áreas verdes",
    summary:
      "Parques amplios para trotar o picnic. Zonas planas y seguras de día.",
    duration: "1-2h",
    bestTime: ["mañana", "tarde"],
    areas: ["San Isidro", "Miraflores"],
    tags: ["parques", "familia", "running"],
    sections: [
      {
        title: "Sugerencias",
        items: [
          "El Olivar (San Isidro): área verde y senderos",
          "Parque Kennedy (Miraflores): movimiento y cafés",
          "Parques del malecón: bancas y miradores",
        ],
      },
      {
        title: "Consejos",
        items: [
          "Siempre guarda tus cosas a la vista",
          "Mejor de día",
          "Traslados largos en app",
        ],
      },
    ],
    map: { embedUrl: MAP_EMBED },
  },

  "aves-humedales": {
    slug: "aves-humedales",
    icon: "🐦",
    title: "Observación de aves / humedales",
    summary: "Reserva y camina por humedales; ideal con guía por la mañana.",
    duration: "2-4h",
    bestTime: ["mañana"],
    areas: ["Chorrillos (Pantanos de Villa)"],
    tags: ["naturaleza", "aves"],
    sections: [
      {
        title: "Cómo ir",
        items: [
          "Reserva ingreso/paseo si es posible",
          "Ve y vuelve en app; está alejado",
          "Lleva gorro, agua y protección solar",
        ],
      },
      {
        title: "Qué ver",
        items: ["Aves residentes y migratorias", "Humedales y miradores"],
      },
    ],
    map: { embedUrl: MAP_EMBED },
    cautions: [
      "Evita llevar objetos de valor; zona alejada del circuito turístico",
    ],
  },

  "media-jornada-barranco": {
    slug: "media-jornada-barranco",
    icon: "🧭",
    title: "Salida de media jornada (Barranco + costa)",
    summary:
      "Costa y miradores + cafés en Barranco. Combina con museo o atardecer.",
    duration: "2-4h",
    bestTime: ["tarde", "atardecer"],
    areas: ["Miraflores", "Barranco"],
    tags: ["paseo", "foto", "bar"],
    sections: [
      {
        title: "Itinerario",
        items: [
          "Malecón → Barranco (murales/puente)",
          "MATE/MAC o cafetería",
          "Sunset y bar/cena",
        ],
      },
      {
        title: "Consejos",
        items: ["Traslados en app", "Evita caminar largos tramos de noche"],
      },
    ],
    map: { embedUrl: MAP_EMBED },
    ctas: [
      { href: "/actividades/paseo-malecon", label: "Paseo por el malecón" },
      { href: "/actividades/barranco-creativo", label: "Barranco creativo" },
    ],
  },
} satisfies Record<string, Activity>;

// -------------------------------------
// Derived types & exports (type-safe)
// -------------------------------------

// Union of valid slugs derived from the object above
export type ActividadSlug = keyof typeof ACTIVIDADES;

// Preferred display/order in grids
export const ACTIVIDADES_ORDER: ActividadSlug[] = [
  "paseo-malecon",
  "correr-bici-malecon",
  "surf-principiantes",
  "centro-historico-dia",
  "museos-sitios",
  "barranco-creativo",
  "parques-areas-verdes",
  "aves-humedales",
  "media-jornada-barranco",
];

// Strict list of activities in that order (no undefined)
export const ACTIVIDADES_LIST: Activity[] = ACTIVIDADES_ORDER.map(
  (s) => ACTIVIDADES[s]
);

// Slugs array (typed union, but also usable as string[])
export const ACTIVIDADES_SLUGS = Object.keys(ACTIVIDADES) as ActividadSlug[];

// Helper lookups
export function getActividad(slug: string): Activity | undefined {
  return ACTIVIDADES[slug as ActividadSlug];
}
export const toActividadHref = (slug: ActividadSlug) => `/actividades/${slug}`;
