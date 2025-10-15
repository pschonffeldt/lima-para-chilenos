export type Etiqueta =
  | "comida"
  | "cafe"
  | "running"
  | "surf"
  | "fiesta"
  | "otros"
  | "museos"
  | "caminar"
  | "malecon";

export type Duración = "1-2h" | "2-4h" | "Medio día" | "Día completo";

export type Itinerary = {
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

export const ITINERARIOS: Itinerary[] = [
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
