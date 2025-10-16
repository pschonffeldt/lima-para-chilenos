// lib/content/intro.ts
import { TwoWaySectionItem } from "../components/2way-column-section-component";
import type { ThreeWaySectionItem } from "../components/3way-column-section-component";
import { ContentGridWithTagItem } from "../components/content-grid-tag-component";

// HomePage content
export const SECTIONS = [
  {
    href: "/introduccion",
    label: "Introducción",
    icon: "👋",
    blurb:
      "Cómo usar la guía y qué esperar de Lima: clima, horarios, propinas, barrios para alojarse, cambio de dinero y normas básicas para moverte tranquilo desde el día 1.",
  },
  {
    href: "/advertencias",
    label: "Advertencias",
    icon: "⚠️",
    blurb:
      "Estafas frecuentes (taxis, cambio, comisiones), zonas y horarios a evitar, cajeros más seguros, cómo actuar ante imprevistos y teléfonos de emergencia útiles.",
  },
  {
    href: "/transporte",
    label: "Transporte",
    icon: "🛵",
    blurb:
      "Desde/hacia el aeropuerto, apps (Cabify/Uber), Metropolitano y combis, scooters/bicis, tarifas de referencia, tiempos reales y consejos de seguridad por zona.",
  },
  {
    href: "/barrios",
    label: "Barrios",
    icon: "🏙️",
    blurb:
      "Compara Miraflores, Barranco, San Isidro y más: ambiente, presupuesto, pros y contras, alojamiento y lugares cercanos para comer, salir y caminar seguro.",
  },
  {
    href: "/mapa",
    label: "Mapa",
    icon: "🧭",
    blurb:
      "Mapa interactivo con capas: restaurantes, cafés con Wi-Fi, miradores, cajeros, spots de surf y museos. Filtros por barrio y enlaces directos a Google Maps.",
  },
  {
    href: "/comida",
    label: "Comida",
    icon: "🍽️",
    blurb:
      "Qué probar (ceviche, chifa, nikkei, anticuchos), rangos de precio, reservas y horarios, menús del día, mercados y picadas para comer bien sin gastar de más.",
  },
  {
    href: "/copete",
    label: "Copete",
    icon: "🍸",
    blurb:
      "Barras de autor, pisco y chilcanos, cervecerías artesanales y happy hours. Revisa reglas de ingreso, reservas y horarios por zona; además, dónde comprar rápido (botillerías/supers).",
  },
  {
    href: "/cafe",
    label: "Café",
    icon: "☕️",
    blurb:
      "Cafeterías de especialidad para trabajar o descansar: Wi-Fi, enchufes, mesas, tostadores locales y horarios. Recomendaciones prácticas por barrio.",
  },
  {
    href: "/actividades",
    label: "Actividades",
    icon: "🗺️",
    blurb:
      "Malecón, surf y bici, museos y galerías, tours a pie, compras y miradores; todo con duración, dificultad, costos aproximados y enlaces a tickets cuando aplique.",
  },
  {
    href: "/carretes",
    label: "Carretes",
    icon: "🕺",
    blurb:
      "Clubs y fiestas por estilo musical, cover y acceso. Consejos de listas/RSVP, dress code, horarios y cómo volver de noche de forma segura.",
  },
  {
    href: "/itinerarios",
    label: "Itinerarios",
    icon: "📘",
    blurb:
      "Itinerarios por duración (2–4 h, medio día, día completo) y estilo (foodie, arte, mar). Con mapa, tiempos de traslado y enlaces a cada lugar.",
  },
  {
    href: "/contacto",
    label: "Contacto",
    icon: "📞",
    blurb:
      "Tines alguna suferencia o eres una marca interesada en participar? Ponte en contacto con nosotros.",
  },
] as const;

export const DISTRICTS = [
  {
    id: "miraflores",
    slug: "/barrios/miraflores",
    name: "Miraflores",
    note: "Sector recomendado para alojarse: malecón, ciclovías, parques, cafés para trabajar y muchos restaurantes. Seguro de día y bien conectado; ojo con el ruido cerca de Kennedy/Larco y los fines de semana.",
  },
  {
    id: "barranco",
    slug: "/barrios/barranco",
    name: "Barranco",
    note: "Bohemio y caminable: galerías, murales, bares y música en vivo. Ideal para salir de noche y pasear de día por bajadas al mar. Mantente por las avenidas principales y usa apps de transporte si vuelves tarde.",
  },
  {
    id: "san-isidro",
    slug: "/barrios/san-isidro",
    name: "San Isidro",
    note: "Residencial/empresarial, muy ordenado y seguro. Parques (Bosque El Olivar), restaurantes top y cafés tranquilos. Vida nocturna más baja y precios más altos; excelente para hospedaje tranquilo y trabajo.",
  },
] as const;

// IntroPage Content
export const ESSENTIALS: ThreeWaySectionItem[] = [
  {
    href: "/barrios",
    label: "¿Donde alojar?",
    icon: "👋",
    blurb: [
      "Miraflores — cómoda, caminable, parques frente al mar",
      "Barranco — arte y bares, bohemio.",
      "San Isidro — seguro, oficinas y restaurantes top.",
    ],
  },
  {
    href: "/transporte",
    label: "Transporte a la ciudad",
    icon: "🛵",
    blurb: [
      "El tráfico en Lima es horrible.",
      "Salir del aeropuerto puede ser desafiante",
      "Evita taxi de calle y la combis.",
      "Usa los servicios oficiales o apps de transporte.",
    ],
  },
  {
    href: "/pagos-conectividad",
    label: "Pagos & conectividad",
    icon: "🍽️",
    blurb: [
      "Trae USD y habilita tu tarjeta bancaria Chilena.",
      "Cambia un poco de Soles en el aeropuerto",
      "El resto lo puedes cambiar en la calle o en casas de cambio",
      "eSIM o roaming, no compres una SIM fisica en Lima",
    ],
  },
];

export const COMMUNICATIONS: ThreeWaySectionItem[] = [
  {
    label: "Operadores recomendados",
    icon: "📡",
    blurb: [
      "Claro — buena cobertura en zonas céntricas",
      "Entel — alternativa estable",
      "Movistar — muy extendido, señal variable por distrito",
    ],
  },
  {
    label: "Dónde comprar eSIM",
    icon: "📱",
    blurb: [
      <>
        <a
          href="https://www.mobimatter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:no-underline"
        >
          Mobimatter
        </a>{" "}
        — marketplace de eSIM
      </>,
      <>
        <a
          href="https://esim.holafly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:no-underline"
        >
          Holafly
        </a>{" "}
        — seguramente has visto sus comerciales
      </>,
      <>
        <a
          href="https://www.maya.net"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:no-underline"
        >
          Maya
        </a>{" "}
        — no es tan famoso, pero igual es bueno
      </>,
    ],
  },
  {
    label: "Tips rápidos",
    icon: "⁉️",
    blurb: [
      "Activa datos/roaming solo si tu plan lo permite",
      "Al usar eSIM guarda el QR y el código de activación y anota tu número peruano.",
      "En cafés y malls suele haber Wi-Fi. Usa tu VPN para proteger tus datos.",
    ],
  },
];

export const MONEY: TwoWaySectionItem[] = [
  {
    // href: "/introduccion#cambio",
    label: "Cambio de divisa",
    icon: "💱",
    blurb: [
      "Casas de cambio formales (en locales comerciales).",
      "Casas de cambio informales (en calle).",
      "Evita cambiar montos grandes en público.",
    ],
  },
  {
    // href: "/introduccion#dinero",
    label: "Tarjeta & cajeros",
    icon: "💳",
    blurb: [
      "Tarjeta aceptada en la mayoría de locales.",
      "Cajeros de bancos grandes para retirar soles.",
      "Bajas comisiones para tarjetas Chilenas.",
    ],
  },
];

export const WHERE_TO_STAY: ThreeWaySectionItem[] = [
  {
    href: "/barrios/miraflores",
    label: "Miraflores",
    icon: "🌊",
    blurb: [
      "Un muy buen lugar para tu primera visita.",
      "Parques frente al mar, ciclovías y miradores para caminar/pedalear.",
      "Cafés para trabajar y restaurantes para todos los bolsillos.",
      "Seguro de día y bien conectado; puede haber ruido cerca de Kennedy/Larco y fines de semana.",
    ],
  },
  {
    href: "/barrios/barranco",
    label: "Barranco",
    icon: "🎨",
    blurb: [
      "Bohemio y caminable: arte callejero, galerías y bares con música.",
      "Conexión rápida a Miraflores (10–15 min en taxi sin taco).",
      "Vida nocturna animada; algo de ruido cerca del Puente de los Suspiros/zonas de bares.",
      "Alojamientos boutique y buena oferta gastronómica emergente.",
    ],
  },
  {
    href: "/barrios/san-isidro",
    label: "San Isidro",
    icon: "🌳",
    blurb: [
      "Residencial, seguro y tranquilo.",
      "Parques amplios (Olivar) y restaurantes top; cafés más tranquilos para trabajar.",
      "Menos vida nocturna y distancias mayores a pie.",
      "Traslados fáciles a Miraflores (10–20 min en taxi fuera de punta).",
    ],
  },
];

export const OTHER_TIPS: TwoWaySectionItem[] = [
  {
    href: "/introduccion#horarios",
    label: "Horarios & costumbres",
    icon: "🕒",
    blurb: [
      "Almuerzo 1–3 pm; cena 8–10 pm.",
      "Restaurantes top piden reserva.",
      "Propina no obligatoria; 10% es bien recibida.",
    ],
  },
  {
    href: "/introduccion#clima",
    label: "Clima & seguridad ligera",
    icon: "🌤️",
    blurb: [
      "Clima templado con cielos nublados en invierno.",
      "En verano el sol pega fuerte (dic–mar)",
      "Evita exhibir el celular en esquinas muy concurridas.",
    ],
  },
];

// TransportPage Content
export const TRANSPORT_QUICK_TIPS: ThreeWaySectionItem[] = [
  {
    // href: "/transporte#apps",
    label: "Apps recomendadas",
    icon: "🚕",
    blurb: [
      "Cabify — precios claros, soporte y muy seguro.",
      "Uber — menos seguro y peores autos.",
      "Siempre revisa patente y conductor antes de subir.",
    ],
  },
  {
    // href: "/transporte#horarios",
    label: "Horarios punta",
    icon: "🕒",
    blurb: [
      "El tráfico en Lima es horrible.",
      "Mañana 7–9 am · Tarde 6–9 pm.",
      "Viernes y lluvias = más tráfico.",
      "Días con partidos de futbol.",
    ],
  },
  {
    // href: "/transporte#seguridad",
    label: "Seguridad",
    icon: "🛡️",
    blurb: [
      "Transporte: pide por app; no pares taxis en la calle.",
      "Comparte tu viaje y activa “follow my ride”.",
      "Uber en Lima: usa el código de verificación (PIN).",
    ],
  },
];

export const AIRPORT_TO_CITY: TwoWaySectionItem[] = [
  {
    // href: "/transporte#aeropuerto-opciones",
    label: "Opciones",
    icon: "🛫",
    blurb: [
      "Cabify: pide desde la zona indicada por la app; verifica patente, cuesta desde 55 soles.",
      "Quickllama: pregunta por la parada oficial dentro del estacionamiento; cuesta desde 20 soles.",
      "Bus expreso: parada oficial dentro del estacionamiento; salidas cada 1 hora, desde 20 soles.",
    ],
  },
  {
    // href: "/transporte#aeropuerto-tiempo",
    label: "Tiempo y costo (aprox.)",
    icon: "⏱️",
    blurb: [
      "Hacia Miraflores/Barranco: 35–70 min según tráfico.",
      "Apps de transporte: desde S/ 50 (estimado).",
      "Evita ofertas de taxi en calle/aeropuerto.",
      "QuickLlama: S/ 20, hacia Miraflores, 24/7.",
      "Airport Express: desde S/ 15, paradas en Miraflores; salidas aprox. cada hora.",
    ],
  },
];

export const MOVE_WITH_APPS: ThreeWaySectionItem[] = [
  {
    // href: "/transporte#apps-configuracion",
    label: "Configuración",
    icon: "⚙️",
    blurb: [
      "Activa roaming o compra eSIM.",
      "Agrega método de pago; efectivo también existe.",
      "Escribe destinos claros (hotel, mall, cruce de avenidas).",
    ],
  },
  {
    // href: "/transporte#apps-buenas-practicas",
    label: "Buenas prácticas",
    icon: "👍",
    blurb: [
      "Confirma patente y nombre del conductor.",
      "No subas si ves otro pasajero no indicado.",
      "Si dudas, cancela y pide otro. Mejor perder 1 min.",
    ],
  },
  {
    // href: "/transporte#apps-precios-propina",
    label: "Precios & propina",
    icon: "💸",
    blurb: [
      "Tarifa varía por tráfico/lluvia/demanda.",
      "No deberían haber peajes en el trayecto.",
    ],
  },
];

export const METROPOLITANO_INFO: ThreeWaySectionItem[] = [
  {
    // href: "/transporte#metropolitano-que-es",
    label: "Qué es",
    icon: "🚌",
    blurb: [
      "Buses rápidos por vía exclusiva (N–S).",
      "Útil para evitar tacos en horas punta si tu ruta coincide con sus estaciones.",
    ],
  },
  {
    // href: "/transporte#metropolitano-como-usar",
    label: "Cómo usar",
    icon: "🎫",
    blurb: [
      "Compra tarjeta recargable en estaciones.",
      "Entra por torniquetes; revisa mapa de rutas y expresos.",
      "Cerca de Miraflores: estaciones 28 de Julio / Benavides.",
    ],
  },
  {
    // href: "/transporte#metropolitano-consejos",
    label: "Consejos",
    icon: "💡",
    blurb: [
      "Evita horas punta si vas con equipaje.",
      "Cuida bolsillos y mochila en andenes llenos.",
      "Para turismo casual, las apps suelen ser más cómodas.",
    ],
  },
];

export const COMMON_ROUTES: TwoWaySectionItem[] = [
  {
    href: "/transporte#rutas-miraflores",
    label: "Desde Miraflores",
    icon: "📍",
    blurb: [
      "→ Barranco: 10–20 min (app).",
      "→ San Isidro: 10–25 min (app).",
      "→ Centro Histórico: 30–50 min (app).",
    ],
  },
  {
    href: "/transporte#rutas-barranco",
    label: "Desde Barranco",
    icon: "🧭",
    blurb: [
      "→ Miraflores (Kennedy): 10–20 min (app).",
      "→ San Isidro: 15–30 min (app).",
      "→ Aeropuerto: 45–80 min (app).",
    ],
  },
];

export const OTHER_MEANS: ThreeWaySectionItem[] = [
  {
    // href: "/transporte#otros-micros",
    label: "Micros / combis",
    icon: "🚐",
    blurb: [
      "Muy baratas, pero confusas para visitantes y suelen ir llenas.",
      "Si es tu primera vez, no recomendado.",
    ],
  },
  {
    // href: "/transporte#otros-bicicleta",
    label: "Bicicleta & malecón",
    icon: "🚲",
    blurb: [
      "Para pasear, el malecón es ideal de día.",
      "Como transporte diario, evalúa cruces y tráfico; no todas las vías son amigables.",
    ],
  },
  {
    // href: "/transporte#otros-estacionamientos",
    label: "Estacionamientos",
    icon: "🅿️",
    blurb: [
      "Malls y hoteles suelen tener estacionamiento pagado.",
      "En Perú les dicen “playas de estacionamiento”.",
      "En calle, fíjate en parquímetros/señalización y evita dejar objetos a la vista.",
    ],
  },
];

// BarriosPage Content
export const HOODS: ContentGridWithTagItem[] = [
  {
    name: "Miraflores",
    href: "/barrios/miraflores",
    icon: "🌊",
    note: "Caminable, parques costeros (malecón) y cafés para trabajar. Recomendado para primera visita.",
    tags: ["Malecón", "Caminable", "Cafés"],
  },
  {
    name: "Barranco",
    href: "/barrios/barranco",
    icon: "🎨",
    note: "Bohemio: arte, terrazas y bares. Conexión rápida a Miraflores.",
    tags: ["Arte", "Bares", "Bohemio"],
  },
  {
    name: "San Isidro",
    href: "/barrios/san-isidro",
    icon: "🌳",
    note: "Tranquilo y seguro, parques amplios y restaurantes top.",
    tags: ["Parques", "Tranquilo", "Restaurantes"],
  },
  {
    name: "Chorrillos",
    href: "/barrios/chorrillos",
    icon: "🏖️",
    note: "Playas y Morro Solar; mejor de día. De noche muévete en app.",
    tags: ["Playa", "Morro Solar", "Vistas"],
  },
  {
    name: "Centro de Lima",
    href: "/barrios/lima-centro",
    icon: "🏛️",
    note: "Casco histórico: arquitectura y plazas. Visítalo de día y vuelve en app.",
    tags: ["Historia", "Arquitectura", "Día"],
  },
  {
    name: "Callao (solo aeropuerto)",
    href: "/barrios/callao",
    icon: "✈️",
    note: "Úsalo para el aeropuerto. Fuera de rutas turísticas puede ser inseguro; evita paseos improvisados.",
    tags: ["Aeropuerto", "Logística", "Evitar"],
  },
];

export const WHY_MOVE_LITTLE: ThreeWaySectionItem[] = [
  {
    // href: "/barrios",
    label: "Zonas de alojamiento",
    icon: "🏠",
    blurb: [
      "Miraflores: caminable + malecón + cafés.",
      "Barranco: arte + terrazas + bares.",
      "San Isidro: parques + restaurantes top.",
    ],
  },
  {
    // href: "/barrios#salidas",
    label: "Salidas puntuales",
    icon: "🧭",
    blurb: [
      "Callao: aeropuerto y logística, nada más.",
      "Chorrillos: running/bici o Morro Solar, mejor de día.",
      "Centro de Lima: “casco histórico”, ideal de día.",
    ],
  },
  {
    // href: "/barrios#resultado",
    label: "Resultado",
    icon: "✅",
    blurb: [
      "Menos traslados largos y menos tráfico.",
      "Te mueves más seguro y con más tiempo útil.",
      "Experiencia muy similar a la que te gusta en 🇨🇱.",
    ],
  },
];

// AdvertenciasPage Content
export const COMMON_SCAMS: ThreeWaySectionItem[] = [
  {
    // href: "/advertencias#taxis-informales",
    label: "Apps de transporte",
    icon: "🚕",
    blurb: [
      "Evita ofertas de taxi en calle o aeropuerto.",
      "Usa apps y confirma patente + conductor.",
      "No te cuadra? Cancela y pide otro de inmediato.",
    ],
  },
  {
    // href: "/advertencias#cambio",
    label: "Cambio de dinero",
    icon: "💵",
    blurb: [
      "Si traes cash, conviene traer USD más que pesos chilenos.",
      "Cambiar USD en casas de cambio es común y seguro (mejor que en la calle).",
      "Cuenta y guarda el dinero sin hacerlo a la vista.",
    ],
  },
  {
    // href: "/advertencias#distracciones",
    label: "Distracciones",
    icon: "🎒",
    blurb: [
      "Empujones o “derrame” para distraer.",
      "No dejes el celu sobre la mesa cerca de la calle.",
      "Protege tus pertenencias, sin importar el barrio.",
    ],
  },
];

export const ZONES_AND_HOURS: TwoWaySectionItem[] = [
  {
    href: "/advertencias#dia",
    label: "De día",
    icon: "🌞",
    blurb: [
      "Malecón, parques y zonas turísticas: ok con precauciones básicas.",
      "Centro Histórico: preferible en tour o con plan claro; vuelve en app.",
      "Si llevas cámara, usa correa.",
    ],
  },
  {
    href: "/advertencias#noche",
    label: "De noche",
    icon: "🌙",
    blurb: [
      "Prefiere calles iluminadas y concurridas.",
      "Evita caminar largas distancias; usa app desde la puerta del local.",
      "Define punto de recojo antes de pagar la cuenta.",
    ],
  },
];

export const CASH_CARDS_CASH: ThreeWaySectionItem[] = [
  {
    // href: "/introduccion#atms",
    label: "Cajeros (ATMs)",
    icon: "🏧",
    blurb: [
      "Usa cajeros dentro de malls, bancos o hoteles.",
      "Cubre el teclado y guarda el dinero.",
      "Evita retirar montos grandes; mejor varios chicos.",
    ],
  },
  {
    // href: "/introduccion#tarjetas",
    label: "Tarjetas & apps",
    icon: "💳",
    blurb: [
      "Tarjeta aceptada en casi todas partes.",
      "Lleva algo de S/ para imprevistos.",
      "Activa alertas de tu banco y revisa movimientos.",
    ],
  },
  {
    // href: "/introduccion#efectivo",
    label: "Efectivo",
    icon: "💵",
    blurb: [
      "No muestres fajos y lleves todo junto.",
      "Guarda una tarjeta de “reserva” separada del resto.",
      "Evita contar dinero en la calle.",
    ],
  },
];

export const WHAT_TO_DO: TwoWaySectionItem[] = [
  {
    href: "/advertencias#robo",
    label: "Te roban el celular/cartera",
    icon: "🚨",
    blurb: [
      "Busca un lugar seguro.",
      "Bloquea líneas y sesiones (Google/Apple, banco, WhatsApp).",
      "Llama a la policía y pide constancia para el seguro.",
      "Rastreo: solo si es seguro y con apoyo policial.",
    ],
  },
  {
    href: "/advertencias#emergencia",
    label: "Tienes una urgencia médica",
    icon: "🚑",
    blurb: [
      "Si es grave, llama al SAMU 106 (ambulancia/teleasistencia).",
      "Indica dirección de referencia (cruce de avenidas/punto notable).",
      "Contacta a tu seguro de viaje y sigue sus indicaciones.",
      "Si puedes, anda a la Clínica Delgado, es de las mejores.",
    ],
  },
];

export const EMERGENCY_NUMBERS: ThreeWaySectionItem[] = [
  {
    // href: "/advertencias#policia",
    label: "Policía Nacional del Perú",
    icon: "👮‍♂️",
    blurb: ["Emergencias: 105"],
  },
  {
    // href: "/advertencias#samu",
    label: "SAMU (ambulancia)",
    icon: "🚑",
    blurb: ["Urgencias médicas: 106"],
  },
  {
    // href: "/advertencias#bomberos",
    label: "Bomberos",
    icon: "🚒",
    blurb: ["Incendios/rescate: 116"],
  },
];

// FoodPage content
export const SCHEDULE_TIPPING_HYGIENE: ThreeWaySectionItem[] = [
  {
    // href: "/introduccion#horarios",
    label: "Horarios",
    icon: "🕰️",
    blurb: [
      "Almuerzo 1–3 pm; cena 8–10 pm.",
      "Restaurantes top: reserva (finde se llena).",
      "Muchos locales cierran entre 4–7 pm.",
    ],
  },
  {
    // href: "/introduccion#propina",
    label: "Propina & pagos",
    icon: "💳",
    blurb: [
      "Propina no obligatoria; 10% si fue bueno.",
      "Tarjeta funciona en casi todos los restaurantes.",
      "Pregunta si incluyen “servicio” antes de pagar.",
    ],
  },
  {
    // href: "/introduccion#higiene",s
    label: "Agua & higiene",
    icon: "💧",
    blurb: [
      "Solo toma agua embotellada.",
      "Hielo suele ser seguro en zonas turísticas.",
      "Ceviche al mediodía y en locales bien conocidos.",
    ],
  },
];

export const WHAT_TO_EAT: ContentGridWithTagItem[] = [
  {
    name: "Ceviche",
    // href: "/comida/ceviche",
    icon: "🐟",
    note: "Pescado del día, limón, ají. Mejor a la hora de almuerzo.",
    tags: ["marino", "almuerzo"],
  },
  {
    name: "Lomo saltado",
    // href: "/comida/lomo-saltado",
    icon: "🥩",
    note: "Salteado criollo con papas y arroz. Infaltable.",
    tags: ["criollo", "carne", "clásico"],
  },
  {
    name: "Chifa",
    // href: "/comida/chifa",
    icon: "🥢",
    note: "China-peruana. Arroz chaufa, taypá, wantán.",
    tags: ["china-peruana", "arroz", "wok"],
  },
  {
    name: "Nikkei",
    // href: "/comida/nikkei",
    icon: "🍣",
    note: "Peruano-japonés. Tiraditos, makis con ajíes.",
    tags: ["fusión", "tiraditos", "makis"],
  },
  {
    name: "Pollo a la brasa",
    // href: "/comida/pollo-a-la-brasa",
    icon: "🍗",
    note: "Clásico para la noche o compartir.",
    tags: ["pollo", "noche", "compartir"],
  },
  {
    name: "Anticuchos",
    // href: "/comida/anticuchos",
    icon: "🍢",
    note: "Brochetas a la parrilla, típicas de noche.",
    tags: ["parrilla", "brochetas", "noche"],
  },
  {
    name: "Causa",
    // href: "/comida/causa",
    icon: "🥔",
    note: "Plato frío de papa amarilla con relleno.",
    tags: ["frío", "papa", "entrada"],
  },
  {
    name: "Ají de gallina",
    // href: "/comida/aji-de-gallina",
    icon: "🍛",
    note: "Guiso cremoso con ají amarillo.",
    tags: ["guiso", "ají amarillo", "cremoso"],
  },
  {
    name: "Suspiro limeño",
    // href: "/comida/suspiro-limeno",
    icon: "🍮",
    note: "Postre tradicional, dulce y cremoso.",
    tags: ["postre", "dulce", "tradicional"],
  },
];

export const DINING_STYLES: ThreeWaySectionItem[] = [
  {
    // href: "/comida#rapido",
    label: "Rápido & bueno",
    icon: "⚡️",
    blurb: [
      "“Menú del día”: entrada + fondo + bebida.",
      "Pollerías y sangucherías para la noche.",
      "Cevicherías informales solo al almuerzo.",
    ],
  },
  {
    // href: "/comida#sentarse",
    label: "Para sentarse tranqui",
    icon: "🪑",
    blurb: [
      "Bistrós y nikkei con carta variada.",
      "Chifas de barrio (porciones generosas).",
      "Reservas recomendadas viernes/sábado.",
    ],
  },
  {
    // href: "/comida#top",
    label: "Experiencia top",
    icon: "👨‍🍳",
    blurb: [
      "Restaurantes de autor: reserva con tiempo.",
      "Degustaciones/menús largos (2–3 horas).",
      "Dress code casual cuidado; llega puntual.",
    ],
  },
];

export const DINING_ETIQUETTE: TwoWaySectionItem[] = [
  {
    // href: "/comida#pedir",
    label: "Al pedir",
    icon: "🍽️",
    blurb: [
      "Pide recomendaciones de la casa (suelen acertar).",
      "Indica picor: “suave / medio / picante”.",
      "Si compartes, pregunta por medias porciones.",
    ],
  },
  {
    // href: "/comida#cuenta",
    label: "Bebida, propina y boleta",
    icon: "💧",
    blurb: [
      "Agua: embotellada sin hielo si prefieres ir a la segura.",
      "Propina: agrega 10% si el servicio fue bueno.",
      "Boleta/factura: pídela al final si la necesitas.",
    ],
  },
];

// CopetePage content
export const NIGHTLIFE_BASICS: ThreeWaySectionItem[] = [
  {
    // href: "/copete#edad",
    label: "Edad & documentos",
    icon: "🪪",
    blurb: [
      "Edad legal de consumo: 18 años.",
      "Lleva documento de identidad por si lo piden.",
      "Evita beber en vía pública: suele estar prohibido.",
    ],
  },
  {
    // href: "/copete#reservas",
    label: "Reservas & cover",
    icon: "🎟️",
    blurb: [
      "Viernes/sábado: reserva o llega temprano.",
      "Algunos lugares cobran cover.",
      "Vístete casual pero no con sandalias.",
    ],
  },
  {
    // href: "/copete#seguridad",
    label: "Seguridad nocturna",
    icon: "🌙",
    blurb: [
      "Vuelta a casa: apps (Cabify/Uber).",
      "Cuida el celu al salir a la calle del bar.",
      "Si decides caminar, no lo hagas solo/a.",
    ],
  },
];

export const WHAT_TO_ORDER_PERU: ThreeWaySectionItem[] = [
  {
    // href: "/copete#pisco-sour",
    label: "Pisco sour",
    icon: "🍸",
    blurb: [
      "Clásico limeño: pisco, limón, jarabe, clara y amargo.",
      "Potente; ideal para abrir.",
      "Después del segundo ya estás entrando a la zona borracha.",
    ],
  },
  {
    // href: "/copete#chilcano",
    label: "Chilcano",
    icon: "🥂",
    blurb: [
      "Pisco + ginger ale + limón.",
      "Más liviano y refrescante; va toda la noche.",
      "Algo así como una piscola blanca.",
    ],
  },
  {
    // href: "/copete#cervezas",
    label: "Cervezas locales",
    icon: "🍺",
    blurb: [
      "Las populares: Cusqueña, Pilsen, Cristal.",
      "También hay artesanales: Barbarian, Valle Sagrado.",
    ],
  },
];

export const BARS_BY_ZONE: ThreeWaySectionItem[] = [
  {
    // href: "/barrios/barranco",
    label: "Barranco",
    icon: "🎨",
    blurb: [
      "Onda bohemia, terrazas y coctelería.",
      "Bueno para viernes/sábado.",
    ],
  },
  {
    // href: "/barrios/miraflores",
    label: "Miraflores",
    icon: "🌊",
    blurb: [
      "Bares variados cerca del Parque Kennedy y malecón.",
      "Fácil volver en app.",
    ],
  },
  {
    // href: "/barrios/san-isidro",
    label: "San Isidro",
    icon: "🌳",
    blurb: [
      "Coctelería más tranquila, opciones más íntimas para conversar y comer algo.",
    ],
  },
];

export const QUICK_BUYS: TwoWaySectionItem[] = [
  {
    href: "/copete#donde-comprar",
    label: "Dónde comprar",
    icon: "🛍️",
    blurb: [
      "Minimarkets y tiendas de barrio en zonas céntricas.",
      "Supermercados: más variedad y mejores precios.",
      "Apps de delivery nocturno en distritos principales.",
    ],
  },
  {
    href: "/copete#horarios",
    label: "Horarios",
    icon: "⏰",
    blurb: [
      "Tiendas chicas cierran más tarde que supermercados.",
      "Fines de semana: más oferta abierta de noche.",
      "Respeta normas locales sobre venta y consumo.",
    ],
  },
];

export const DO_DONT_NIGHT: TwoWaySectionItem[] = [
  {
    href: "/copete#haz",
    label: "Haz",
    icon: "✅",
    blurb: [
      "Pide auto con app y verifica patente/conductor.",
      "Cuida tu vaso y no lo pierdas de vista.",
      "Camina por calles iluminadas y concurridas.",
    ],
  },
  {
    href: "/copete#evita",
    label: "Evita",
    icon: "⛔️",
    blurb: [
      "Beber en plazas o calles (es sancionado).",
      "Dejar mochilas/carteras sin supervisión.",
      "Tomar taxi de la calle sin acuerdo claro.",
    ],
  },
];

// CafePage content
export const COFFEE_BASICS: ThreeWaySectionItem[] = [
  {
    // href: "/cafe#origen",
    label: "Origen & perfiles",
    icon: "🌱",
    blurb: [
      "Regiones: Cajamarca, Cusco, Amazonas, Junín, Puno.",
      "Perfiles que se repiten: chocolate, panela, frutal.",
      "Mucho enfoque en trazabilidad y tueste reciente.",
    ],
  },
  {
    // href: "/cafe#metodos",
    label: "Métodos",
    icon: "☕️",
    blurb: [
      "Espresso & leche: espresso, cappuccino, flat white, latte.",
      "Filtro: V60, Kalita, Aeropress, Chemex (según cafetería).",
      "Fríos: cold brew, espresso tonic (verano).",
    ],
  },
  {
    // href: "/cafe#tips",
    label: "Tips rápidos",
    icon: "💡",
    blurb: [
      "Pide el origen del día y fecha de tueste.",
      "Si compras granos: tueste < 30 días y molienda a pedido.",
      "Mejor horario: mañana / media tarde (menos fila).",
    ],
  },
];

export const COFFEE_SPOTS: ContentGridWithTagItem[] = [
  {
    name: "Miraflores",
    // href: "/barrios/miraflores",
    icon: "🌊",
    note: "Espresso bar y filtro a pasos del malecón. Buenas opciones para comprar granos de origen. Combínalo con paseo por el malecón y parques.",
    tags: ["malecón", "filtro", "origen"],
  },
  {
    name: "Barranco",
    // href: "/barrios/barranco",
    icon: "🎨",
    note: "Cafecitos con terrazas, arte y murales cerca. Ideal para espresso tonic o cold brew en verano. Ruta: café → puente icónico → sunset en mirador.",
    tags: ["terrazas", "espresso tonic", "murales"],
  },
  {
    name: "San Isidro",
    // href: "/barrios/san-isidro",
    icon: "🌳",
    note: "Cafeterías tranquilas cerca de parques (El Olivar). Perfecto para trabajar un rato con buen Wi-Fi. Compra granos y vuelve caminando por áreas verdes.",
    tags: ["parques", "Wi-Fi", "trabajar"],
  },
  {
    name: "Centro de Lima (de día)",
    // href: "/barrios/lima-centro",
    icon: "🏛️",
    note: "Cafés de especialidad cerca de plazas y museos. Plan: museo + café + fotos, y regreso en app. Evita alejarte de las zonas concurridas.",
    tags: ["museos", "fotos", "de día"],
  },
  {
    name: "Para trabajar un rato",
    // href: "/cafe#trabajar",
    icon: "💻",
    note: "Busca enchufes, Wi-Fi estable y mesas cómodas. Compra algo cada cierto tiempo (buena práctica). Si vas en grupo, prefiere mesas grandes afuera.",
    tags: ["Wi-Fi", "enchufes", "mesas"],
  },
  {
    name: "Dulces y panadería",
    // href: "/cafe#dulces",
    icon: "🥐",
    note: "Muchas cafeterías hornean y rotan pastelería propia. Combina con un paseo por el malecón o por Barranco. Dato: pregunta por la torta del día o la “galleta de la casa”.",
    tags: ["pastelería", "torta del día", "galleta"],
  },
];

export const HOW_TO_ORDER: ThreeWaySectionItem[] = [
  {
    label: "Espresso & leche",
    icon: "☕️",
    blurb: [
      "Flat white (más café, menos leche).",
      "Cappuccino (equilibrado).",
      "Latte (más leche, suave).",
    ],
  },
  {
    label: "Filtro",
    icon: "🫖",
    blurb: [
      "V60 / Kalita (limpio y aromático).",
      "Chemex (suave y claro, para compartir).",
      "Aeropress (cuerpo medio, versátil).",
    ],
  },
  {
    label: "Leches & frío",
    icon: "🥛",
    blurb: [
      "Entera, descremada, avena, almendra (según local).",
      "Cold brew o espresso tonic para el calor.",
      "Azúcar: prueba primero — muchos orígenes son dulces solos.",
    ],
  },
];

export const BUY_BEANS: ThreeWaySectionItem[] = [
  {
    label: "Qué pedir",
    icon: "🧾",
    blurb: [
      "Origen, proceso y fecha de tueste (< 30 días).",
      "Molienda a tu método (espresso, V60, prensa, etc.).",
      "250 g es buen tamaño para probar 1–2 semanas.",
    ],
  },
  {
    label: "Perfiles recomendados",
    icon: "🍫",
    blurb: [
      "Chocolate/nuez (todo público, va bien con leche).",
      "Frutal/cítrico (ideal en filtro).",
      "Panela/caramelo (dulzor natural, muy peruano).",
    ],
  },
  {
    label: "Conservación",
    icon: "📦",
    blurb: [
      "Bolsa cerrada, lejos de luz/calor/humedad.",
      "Evita congelar si lo vas a consumir pronto.",
      "Mejor moler justo antes de preparar.",
    ],
  },
];

// ActividadesPage content
export const QUICK_BASICS: ThreeWaySectionItem[] = [
  {
    label: "Mejor horario",
    icon: "🕒",
    blurb: [
      "Mañana y tarde (evita 1–4 pm si hay sol fuerte).",
      "Atardecer en el malecón = apuesta segura.",
      "De noche: prefiere zonas iluminadas y concurridas.",
    ],
  },
  {
    label: "Qué llevar",
    icon: "🎒",
    blurb: [
      "Bloqueador, cortaviento ligero y agua.",
      "Tarjeta/efectivo chico; documento a mano.",
      "Celular guardado en esquinas muy concurridas.",
    ],
  },
  {
    label: "Traslados",
    icon: "🚕",
    blurb: [
      "Apps (Cabify/Uber) para moverte fácil.",
      "Metropolitano sirve si tu ruta coincide.",
      "Evita taxi de calle. No es seguro.",
    ],
  },
];

export const MALECON_Y_COSTA: ContentGridWithTagItem[] = [
  {
    name: "Caminatas & miradores",
    href: "/actividades/paseo-malecon",
    icon: "🏞️",
    note: "Tramo Miraflores ↔ Barranco (parques y acantilados). Parque del Amor y faro: vistas clásicas. Atardeceres frente al mar, panorama seguro.",
    tags: ["malecón", "miradores", "atardecer"],
  },
  {
    name: "Correr & bicicleta",
    href: "/actividades/correr-bici-malecon",
    icon: "🏃‍♂️",
    note: "Loops 5K/10K por el malecón, mejor en la mañana. Bici: ciclovías en buen tramo; ojo con cruces. Hidratación y bloqueador siempre.",
    tags: ["running", "bici", "mañana"],
  },
  {
    name: "Playa & surf",
    href: "/actividades/surf-principiantes",
    icon: "🏄‍♂️",
    note: "Clases para principiantes disponibles en la costa. Corriente fría: traje corto ayuda. Deja objetos de valor en el alojamiento.",
    tags: ["surf", "principiantes", "frío"],
  },
];

export const CULTURA_Y_PASEOS: ContentGridWithTagItem[] = [
  {
    name: "Centro histórico",
    href: "/actividades/centro-historico-dia",
    icon: "🏛️",
    note: "Plaza Mayor, balcones y arquitectura clásica. Ve de día y define punto de recojo para volver. Combínalo con un museo y algo para comer.",
    tags: ["día", "arquitectura", "balcones"],
  },
  {
    name: "Museos & sitios",
    href: "/actividades/museos-sitios",
    icon: "🖼️",
    note: "Arte, historia y arqueología en varios distritos. Revisa horarios antes (muchos cierran lunes). Compra entrada online si existe.",
    tags: ["museos", "horarios", "tickets"],
  },
  {
    name: "Barranco creativo",
    href: "/actividades/barranco-creativo",
    icon: "🎨",
    note: "Murales, galerías y el Puente de los Suspiros. Camina de día; de noche vuelve en app. Cafecitos y bares para cerrar el paseo.",
    tags: ["murales", "puente", "cafés"],
  },
];

export const DEPORTE_Y_NATURALEZA: ContentGridWithTagItem[] = [
  {
    name: "Parques & áreas verdes",
    href: "/actividades/parques-areas-verdes",
    icon: "🌳",
    note: "Parques amplios para trotar o picnic. Rutas planas y seguras de día. Siempre guarda tus cosas a la vista.",
    tags: ["parques", "picnic", "trote"],
  },
  {
    name: "Observación de aves / humedales",
    href: "/actividades/aves-humedales",
    icon: "🐦",
    note: "Reserva paseos para ver fauna local. Ideal en la mañana con guía o grupo. Lleva gorro, agua y protección solar.",
    tags: ["aves", "mañana", "humedales"],
  },
  {
    name: "Salidas de media jornada",
    href: "/actividades/media-jornada-barranco",
    icon: "🧭",
    note: "Costa y miradores + café en Barranco. Parque + museo cercano + sunset en malecón. Combina con Comida o Copete.",
    tags: ["media jornada", "sunset", "malecón"],
  },
];

export const MINI_ITINERARIES: TwoWaySectionItem[] = [
  {
    href: "/itinerarios/medio-dia-costero",
    label: "1/2 día costero",
    icon: "🌊",
    blurb: [
      "Café y paseo por el malecón (miradores).",
      "Bajada a la costa, fotos y snack.",
      "Sube a Barranco, galería y puente icónico.",
    ],
  },
  {
    href: "/itinerarios/un-dia-mixto",
    label: "1 día mixto",
    icon: "🧭",
    blurb: [
      "Mañana de museo + almuerzo tranquilo.",
      "Tarde de parques o bici ligera.",
      "Atardecer en malecón y bar suave para cerrar.",
    ],
  },
];

export const PREPARTY_PRIMER: ThreeWaySectionItem[] = [
  {
    // href: "/carretes#zonas",
    label: "Zonas para carretear",
    icon: "🎉",
    blurb: [
      "Miraflores: rooftops, pubs, clubes y afters tranquilos.",
      "Barranco: terrazas, bares con música y clubes.",
      "San Isidro: after-office y coctelería fina.",
    ],
  },
  {
    // href: "/carretes#traslados",
    label: "Traslados y seguridad",
    icon: "🚕",
    blurb: [
      "Usa apps (Cabify/Uber) ida y vuelta.",
      "Define punto de recojo antes de cerrar la cuenta.",
      "Evita caminar tramos largos de noche.",
    ],
  },
  {
    // href: "/carretes#tips",
    label: "Consejos rápidos",
    icon: "💡",
    blurb: [
      "Necesitarás reservas para los lugares populares.",
      "Dress code casual; viste lo mismo que en Stgo.",
      "Hidrátate y cuida tus pertenencias.",
    ],
  },
];

// ItinerariosPage content
export const OUTING_BASICS: ThreeWaySectionItem[] = [
  {
    // href: "/transporte",
    label: "Revisa los itineratios",
    icon: "👇🏼",
    blurb: [
      "Usa los filtros para seleccionar el tipo de actividad que más te interesa.",
      "Puedes filtrar por duración o actividad (eqiqueta)",
      "Revisa el itinerario completo apretando el boton de cada tarjeta",
    ],
  },
  {
    // href: "/transporte",
    label: "Horarios",
    icon: "🕒",
    blurb: [
      "Mañana y atardecer para malecón.",
      "Museos: revisa horarios (muchos cierran lunes).",
      "Noches: prefiere zonas iluminadas y concurridas.",
    ],
  },
  {
    // href: "/transporte",
    label: "Qué llevar",
    icon: "🎒",
    blurb: [
      "Bloqueador + agua + cortaviento ligero.",
      "Tarjeta/efectivo chico; documento a mano.",
      "Celular guardado en esquinas muy concurridas.",
    ],
  },
];

// MapPage content
export const INTRO_MAP_BASICS: ThreeWaySectionItem[] = [
  {
    label: "Barrios base",
    icon: "🏙️",
    blurb: [
      "Miraflores, Barranco y San Isidro",
      "Puntos para caminar, cafés y miradores",
    ],
  },
  {
    label: "Vida diaria",
    icon: "☕️",
    blurb: [
      "Cafés para trabajar, restaurantes, barras",
      "ATMs / casas de cambio (cuando aplique)",
    ],
  },
  {
    label: "Movimiento",
    icon: "🏃‍♂️",
    blurb: [
      "Rutas para correr por el malecón",
      "Referencias para pedir app con seguridad",
    ],
  },
];
