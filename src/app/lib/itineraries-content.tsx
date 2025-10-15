export type ActivityTag =
  | "comida"
  | "cafe"
  | "running"
  | "surf"
  | "otros"
  | "museos"
  | "caminata"
  | "parques"
  | "malecon";

export type Duration = "1-2h" | "2-4h" | "Medio día" | "Día completo";
export type Schedule =
  | "Amanecer o atardecer"
  | "Mañana y tarde"
  | "Mañana o tarde"
  | "Mañana"
  | "Tarde";

export type Itinerary = {
  id: string;
  title: string;
  duration: Duration;
  region: string;
  tags: ActivityTag[];
  best: Schedule;
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
    tags: ["cafe", "caminata"],
    best: "Amanecer o atardecer",
    areas: ["Miraflores", "Barranco"],
    steps: [
      "Café en Miraflores (cerca del malecón).",
      "Paseo por el malecón con paradas en miradores.",
      "Cruza el nuevo puente de la Paz.",
      "Baja a Barranco: murales y Puente de los Suspiros.",
      "Sunset en mirador + bar o cena ligera.",
    ],
    notes: [
      "Bloqueador + cortaviento según clima.",
      "Traslados en app si se hace tarde al volver.",
    ],
    price: "200 soles",
    links: [
      { href: "/actividades/paseo-malecon", label: "Ver itinerario completo" },
    ],
  },
  {
    id: "dia-mixto-facil-museo-parques-sunset",
    title: "Día mixto cultural (museo + parques + sunset)",
    duration: "Día completo",
    region: "Lima Metropolitana",
    tags: ["cafe", "museos", "parques", "caminata"],
    best: "Mañana y tarde",
    areas: ["Barranco", "Miraflores", "San Isidro"],
    steps: [
      "Museo en la mañana (MATE/MAC o Larco).",
      "Almuerzo tranquilo en San Isidro.",
      "Caminara o bici suave por el malecón.",
      "Atardecer y bar/cena en Barranco.",
    ],
    notes: [
      "Revisa horarios (varios museos cierran lunes).",
      "Haz una reservación para el restaurante en San Isidro",
    ],
    price: "300 soles",
    links: [{ href: "/actividades/museos-sitios", label: "Museos & sitios" }],
  },
  {
    id: "manana-activa-running-5k-desayuno",
    title: "Mañana activa (running 5K + desayuno)",
    duration: "1-2h",
    region: "Lima Metropolitana",
    tags: ["cafe", "running"],
    best: "Mañana",
    areas: ["Miraflores"],
    steps: [
      "Running 5K/10k por el malecón (Larcomar ↔ Parque del Amor).",
      "Estiraciones y fotos.",
      "Pista dedicada y vistas al mar",
      "Desayuno / café cerca del malecón.",
    ],
    notes: [
      "Hidrátate y usa bloqueador.",
      "Audífonos a volumen bajo; atento a cruces de ciclovía.",
    ],
    price: "100 soles",
    links: [
      {
        href: "/actividades/correr-bici-malecon",
        label: "Correr por malecón",
      },
    ],
  },
  {
    id: "surf-principiantes-almuerzo",
    title: "Surf principiantes + almuerzo",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["surf", "comida"],
    best: "Mañana",
    areas: ["Costa Verde"],
    steps: [
      "Clase de surf con arriendo de equipo.",
      "Ducha/ cambio.",
      "Ceviche del día o menú marino.",
    ],
    notes: [
      "Lleva toalla, muda de ropa y deja objetos de valor en el alojamiento.",
    ],
    price: "200 soles",
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
    tags: ["cafe", "museos"],
    best: "Mañana",
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
    price: "200 soles",
    links: [
      {
        href: "/actividades/centro-historico-dia",
        label: "Centro histórico (día)",
      },
    ],
  },
  {
    id: "media-jornada-barranco-creativo",
    title: "Media jornada Barranco creativo",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["cafe", "otros"],
    best: "Tarde",
    areas: ["Barranco"],
    steps: [
      "Murales y galerías.",
      "Puente de los Suspiros.",
      "Atardecer en mirador + bar tranquilo.",
    ],
    notes: ["De noche, vuelve en app. Evita caminar largas distancias."],
    price: "200 soles",
    links: [
      { href: "/actividades/barranco-creativo", label: "Barranco creativo" },
    ],
  },
  {
    id: "ruta-museos-pueblo-libre",
    title: "Ruta de museos en Pueblo Libre (Larco + MNAAHP)",
    duration: "Medio día",
    region: "Lima Metropolitana",
    tags: ["museos", "caminata"],
    best: "Mañana",
    areas: ["Pueblo Libre"],
    steps: [
      "Visita al Museo Larco.",
      "Café/descanso en el patio del museo.",
      "Caminata hacia el MNAAHP de 20 minutos.",
    ],
    notes: ["Revisa horarios; algunos museos cierran lunes."],
    price: "200 soles",
    links: [{ href: "/actividades/museos-sitios", label: "Museos & sitios" }],
  },
  {
    id: "museos-barranco-mate-mac",
    title: "Barranco de museos (MATE + MAC) + paseo",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["museos", "caminata"],
    best: "Mañana o tarde",
    areas: ["Barranco"],
    steps: [
      "Ingreso al MATE (Mario Testino).",
      "Cruce al MAC y recorrido.",
      "Caminata por calles con murales.",
      "Café final cerca del Puente de los Suspiros.",
    ],
    notes: ["Compra entradas online si es posible; evita horas de mayor sol."],
    price: "200 soles",
    links: [{ href: "/actividades/museos-sitios", label: "Museos & sitios" }],
  },
  {
    id: "coffee-crawl-miraflores",
    title: "Coffee crawl Miraflores",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["cafe", "caminata"],
    best: "Mañana",
    areas: ["Miraflores"],
    steps: [
      "Primera parada: Raiz Coffee cerca del Parque Kennedy.",
      "Caminata por el malecón hacia el norte.",
      "Segunda parada: Punto Café.",
      "Caminata por el malecón hacia el sur.",
      "Tercera parada: algo dulce + cappuccino cerca de Larcomar.",
    ],
    notes: ["Hidrátate; el sol pega incluso con brisa marina."],
    links: [{ href: "/cafe", label: "Guía de café" }],
  },
  {
    id: "coffee-crawl-barranco",
    title: "Coffee crawl Barranco bohemio",
    duration: "2-4h",
    region: "Lima Metropolitana",
    tags: ["cafe", "caminata"],
    best: "Tarde",
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
    price: "200 soles",
    links: [{ href: "/cafe", label: "Guía de café" }],
  },
  {
    id: "malecon-a-pie-completo",
    title: "Malecón a pie (Barranco → San Isidro)",
    duration: "Medio día",
    region: "Lima Metropolitana",
    tags: ["caminata", "malecon"],
    best: "Mañana o tarde",
    areas: ["Barranco", "Miraflores", "San Isidro"],
    steps: [
      "Inicio en el Faro de la Marina.",
      "Parques y miradores (Mariscal Castilla, Amor, Raimondi).",
      "Bajada opcional a la playa (Bajada Balta o Armendáriz).",
      "Llegada a Barranco para sunset y descanso.",
    ],
    notes: ["Gorro, bloqueador y corta viento; brisa fría al atardecer."],
    price: "200 soles",
    links: [
      { href: "/actividades/paseo-malecon", label: "Paseo por el malecón" },
    ],
  },
];
