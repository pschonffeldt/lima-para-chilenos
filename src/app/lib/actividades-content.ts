// ---------- Types ----------
export type Activity = {
  slug: string; // e.g. "paseo-malecon"
  icon: string; // emoji
  title: string; // "Paseo por el malecón"
  summary: string; // short blurb
  description?: string; // long description
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

export const ACTIVIDADES = {
  // Malecón y costa
  "paseo-malecon": {
    slug: "paseo-malecon",
    icon: "🌊",
    title: "Paseo por el malecón",
    summary:
      "Caminata fácil con miradores y acantilados entre Miraflores y Barranco.",
    description: `El malecón es la gran terraza de Lima: un paseo peatonal sobre los acantilados con
      vista abierta al Pacífico. La ruta es casi plana y muy fácil, con parques, miradores y bancas para
      detenerse. Es el mejor primer contacto con la ciudad porque ayuda a orientarse entre Miraflores y
      Barranco sin entrar en calles complicadas. Hay cafés y heladerías a pocos minutos de la senda, y
      varias bajadas hacia la costa si quieres acercarte al mar. Suele haber brisa incluso con cielo
      nublado (“panza de burro”), así que un cortaviento ligero salva. De tarde el atardecer es precioso,
      pero baja la temperatura rápido. Si se hace de noche, prefiere zonas iluminadas y vuelve en app
      (Cabify/Uber). Lleva bloqueador, agua y cámara; los mejores puntos de foto están cerca del Faro,
      Parque del Amor y los miradores de Barranco.`,
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
    ctas: [{ href: "/transporte", label: "Ver Miraflores" }],
  },

  // Correr & bicicleta
  "correr-bici-malecon": {
    slug: "correr-bici-malecon",
    icon: "🚴‍♂️",
    title: "Correr o bici por el malecón",
    summary:
      "Loops 5K/10K y ciclovías con vista al mar. Ideal temprano o al final de la tarde.",
    description: `Entre parques y miradores encontrarás un corredor continuo para trotar o pedalear con
      muy poco desnivel—perfecto si vienes de viaje y no quieres complicarte con rutas. La ciclovía está
      señalizada, pero hay tramos compartidos con peatones: reduce la velocidad en cruces y sé amable con
      el timbre. Temprano hay menos gente y el viento es más suave; al final de la tarde el ambiente es
      lindo, aunque puede soplar fuerte. Hay puntos para estirar y comprar agua a pocas cuadras del
      circuito. Si sales de noche, usa luces/casco y evita zonas muy vacías; lo más cómodo es volver en
      app. Un cortaviento ligero y bloqueador son tus mejores amigos, incluso con nubes. Si no traes
      bicicleta, en Miraflores hay arriendos por horas cerca del malecón.`,
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
    description: `Las playas de la Costa Verde (Makaha, Waikiki, Redondo) son el patio de los
      principiantes: olas nobles, escuelas serias y clases donde el instructor te acompaña en la orilla
      hasta que te paras por primera vez. Incluyen tabla y traje corto; el agua es fría todo el año, así
      que no te confíes con el clima nublado. Suele haber duchas y estacionamiento, pero lo más práctico
      es llegar y volver en app para no cargar con cosas. Evita llevar objetos de valor a la playa; deja
      lo importante en el alojamiento. Lleva toalla, sandalias y muda de ropa. Después de la clase, un
      ceviche cercano es el plan clásico. Las mañanas son más tranquilas y con mejor marea para
      aprender.`,
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
    description: `El Centro de Lima condensa balcones de madera, iglesias coloniales y plazas muy
      fotogénicas. Es ideal para una salida cultural corta combinando una plaza, un museo y un café. Ve de
      día (mejor luz, más movimiento) y quédate en calles concurridas; procura no alejarte por pasajes
      vacíos. El sol puede pegar fuerte cuando despeja—bloqueador y agua ayudan mucho. Define un punto
      claro para pedir la app de regreso antes de terminar el paseo y evita caminar largas cuadras con el
      celular en la mano. Si te interesan museos, revisa horarios: varios espacios cierran los lunes. Con
      niños o adultos mayores, planifica descansos en cafés cerca de la Plaza Mayor.`,
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
    description: `Lima tiene museos para todos los gustos y repartidos en varios distritos: fotografía
      contemporánea (MATE), arte moderno (MAC), arqueología de primer nivel (Museo Larco) y colecciones
      nacionales (MALI). Es un plan perfecto para días nublados o cuando quieres bajar el ritmo. Compra
      entradas online si existe la opción y revisa horarios con antelación—muchos lugares cierran los
      lunes. Moverse entre museos en app es lo más sencillo; no necesitas cruzar toda la ciudad en
      transporte público. Cerca de casi todos hay cafés para descansar y baños limpios. Si vas con poco
      tiempo, el Larco + café en su patio es una combinación redonda.`,
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
    description: `Barranco es el lado bohemio de Lima: murales, galerías pequeñas y callecitas que
      bajan hacia el mar. El recorrido clásico une el Puente de los Suspiros con la Bajada de Baños y los
      miradores cercanos. De día los colores lucen mejor y hay buenas fotos en cada esquina; por la tarde
      aparecen terrazas y bares con música suave. Es un sector muy caminable, pero las distancias largos
      de noche no son buena idea: termina en una avenida principal y pide la app desde ahí. Lleva
      bloqueador, agua y calzado cómodo; el piso puede tener adoquines y desniveles. Si te gusta el arte,
      pregunta por exposiciones temporales en MATE y el MAC a pocas cuadras.`,
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
    slug: "parques-verdes",
    icon: "🌳",
    title: "Parques & áreas verdes",
    summary:
      "Parques amplios para trotar o picnic. Zonas planas y seguras de día.",
    description: `Para respirar un poco fuera del tráfico, los parques de San Isidro y Miraflores son
      perfectos. El Olivar ofrece sombra y senderos entre olivos centenarios; es ideal para trotar suave o
      hacer picnic. El Parque Kennedy tiene más movimiento, puestos y cafés alrededor. Sobre el malecón
      encontrarás parques con bancas y vista al mar, muy agradables para leer o pasear con niños. Son
      espacios seguros y amables **de día**; por la noche baja la luz y conviene volver en app si estás
      lejos del hotel. Lleva agua, algo ligero para picar y mantén a la vista tus pertenencias. Si viajas
      con mascotas, varios parques son pet-friendly (lleva bolsitas).`,
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
    description: `Los Pantanos de Villa, en Chorrillos, son un área natural protegida donde se mezclan
      lagunas, totorales y una gran variedad de aves residentes y migratorias. Es una salida distinta al
      perfil urbano de Lima y se disfruta mucho temprano por la mañana, cuando hay más canto y menos
      calor. El recorrido es sencillo por senderos marcados; con guía aprenderás a identificar especies y
      usar binoculares. Lleva gorro, protector solar, repelente, agua y calzado cómodo que puedas ensuciar
      un poco. Es una zona alejada del circuito turístico: llega y vuelve en app, y evita llevar objetos
      de alto valor. Si te gusta la fotografía de naturaleza, considera un lente largo.`,
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
    description: `Media jornada bien aprovechada para ver “lo Lima” sin cruzar media ciudad. Parte por
      el malecón (miradores y brisa), baja a Barranco para murales y el Puente de los Suspiros, súmale un
      museo cercano (MATE/MAC) o un café, y cierra con atardecer en un mirador. Es un itinerario muy
      amigable para el primer o segundo día porque combina mar, cultura ligera y descanso. Lleva
      bloqueador y un abrigo liviano: la temperatura cae después de las 5 pm. Si se hace de noche, pide la
      app desde una avenida principal; evita caminar tramos largos con el celular a la vista. Excelente
      para viajeros que quieren “sentir” Lima sin maratones ni tráfico eterno.`,
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

export type ItineraryDur =
  | "1-2h"
  | "2-4h"
  | "día"
  | "Medio día"
  | "Día completo";

export type ItineraryLink = { href: string; label: string };

export type Itinerary = {
  title: string;
  duration: ItineraryDur;
  best: string;
  areas: string[];
  steps: string[];
  notes?: string[];
  price?: string;
  links?: ItineraryLink[];
};

export const ITINERARIOS: Itinerary[] = [
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
    price: "Aprox 200 soles",
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
    price: "Aprox 200 soles",
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
