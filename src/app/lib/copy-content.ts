// lib/content/intro.ts
import { TwoWaySectionItem } from "../components/2way-column-section-component";
import type { ThreeWaySectionItem } from "../components/3way-column-section-component";
import { BarrioItem } from "../components/content-grid-tag-component";

// IntroPage Content
export const ESSENTIALS: ThreeWaySectionItem[] = [
  {
    href: "/barrios",
    label: "¿Donde te deberías quedar?",
    icon: "👋",
    blurb: [
      "Miraflores — cómoda, caminable, malecón",
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
    // href: "/introduccion",
    label: "Operadores recomendados",
    icon: "📡",
    blurb: [
      "Claro — buena cobertura en zonas céntricas",
      "Entel — alternativa estable",
      "Movistar — muy extendido, señal variable por distrito",
    ],
  },
  {
    // href: "/transporte",
    label: "Dónde comprar eSIM",
    icon: "📱",
    blurb: [
      "Mobimatter, marketplace de eSIM",
      "Holafly, segúramente has visto sus comerciales",
      "Maya, no es tan famoso, pero igual es bueno",
    ],
  },
  {
    // href: "/comida",
    label: "Tips rápidos",
    icon: "⁉️",
    blurb: [
      "Activa datos/roaming solo si tu plan lo permite",
      "Guarda el QR de eSIM y anota tu número local",
      "Wi-Fi en cafés y malls, usa siempre un VPN",
    ],
  },
];

export const MONEY: ThreeWaySectionItem[] = [
  {
    // href: "/introduccion#cambio",
    label: "Cambio seguro",
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
  {
    // href: "/introduccion#yape",
    label: "Billeteras digitales",
    icon: "📲",
    blurb: [
      "NO pierdas tiempo, no podrás usar estas Apps.",
      "Tienes que ser Peruano o tener residencia.",
      "En Perú, todos los Peruanos Yapean, los turistas pagan con tarjeta.",
    ],
  },
];

export const ROUTES: ThreeWaySectionItem[] = [
  {
    href: "/barrios/miraflores",
    label: "Miraflores",
    icon: "🌊",
    blurb: [
      "Un buen lugar para quedarte en tu primera visita.",
      "Malecón con parques y cafés cerca.",
    ],
  },
  {
    href: "/barrios/barranco",
    label: "Barranco",
    icon: "🎨",
    blurb: ["Arte y bares, caminable.", "Conexión rápida a Miraflores."],
  },
  {
    href: "/barrios/san-isidro",
    label: "San Isidro",
    icon: "🌳",
    blurb: ["Seguro y tranquilo.", "Restaurantes top y parques amplios."],
  },
];

export const OTHER_TIPS: ThreeWaySectionItem[] = [
  {
    href: "/introduccion#horarios",
    label: "Horarios & costumbres",
    icon: "🕒",
    blurb: [
      "Almuerzo 1–3 pm; cena 8–10 pm.",
      "Restaurantes top piden reserva.",
      "Propina no obligatoria; 10% es bien recibida.",
      "A las rotondas les dicen óvalos.",
    ],
  },
  {
    href: "/introduccion#clima",
    label: "Clima & seguridad ligera",
    icon: "🌤️",
    blurb: [
      "Clima templado con cielos nublados en invierno.",
      "Sol fuerte en verano; bloqueador siempre.",
      "Evita exhibir el celular en esquinas muy concurridas.",
      "Para correr/caminar: malecón de día es tu mejor opción.",
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
    ],
  },
  {
    // href: "/transporte#seguridad",
    label: "Seguridad",
    icon: "🛡️",
    blurb: [
      "Taxi solo por app; evita la calle.",
      "Esquina concurrida: guarda el celu.",
      "Comparte tu viaje y activa “follow my ride”.",
    ],
  },
];

export const AIRPORT_TO_CITY: TwoWaySectionItem[] = [
  {
    href: "/transporte#aeropuerto-opciones",
    label: "Opciones",
    icon: "🛫",
    blurb: [
      "Cabify: pide desde la zona indicada por la app; verifica patente, cuesta desde 55 soles.",
      "Quickllama: pregunta por la parada oficial dentro del estacionamiento; cuesta desde 20 soles.",
      "Bus expreso: parada oficial dentro del estacionamiento; salidas cada 1 hora, desde 20 soles.",
    ],
  },
  {
    href: "/transporte#aeropuerto-tiempo",
    label: "Tiempo y costo (aprox.)",
    icon: "⏱️",
    blurb: [
      "Hacia Miraflores/Barranco: 35–70 min según tráfico.",
      "Precio app típico: S/ 20 (compartido) – 50 (privado) aprox.",
      "Evita ofertas “de la calle” dentro/fuera del terminal.",
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
      "Propina no es obligatoria, y nadie se la espera.",
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
      "→ Barranco: 10–20 min (en auto).",
      "→ San Isidro (centro): 10–25 min (en auto).",
      "→ Centro Histórico: 30–50 min (en auto).",
    ],
  },
  {
    href: "/transporte#rutas-barranco",
    label: "Desde Barranco",
    icon: "🧭",
    blurb: [
      "→ Miraflores (Kennedy): 10–20 min (en auto).",
      "→ San Isidro: 15–30 min (en auto).",
      "→ Aeropuerto: 45–80 min (en auto).",
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
      "Para pasear/correr, el malecón es ideal de día.",
      "Como transporte diario, evalúa tráfico y grandes intersecciones.",
    ],
  },
  {
    // href: "/transporte#otros-estacionamientos",
    label: "Estacionamientos",
    icon: "🅿️",
    blurb: [
      "Malls y hoteles suelen tener estacionamiento pagado.",
      "En calle, fíjate en parquímetros/señalización y evita dejar objetos a la vista.",
    ],
  },
];

// BarriosPage Content
export const WHY_MOVE_LITTLE: ThreeWaySectionItem[] = [
  {
    // href: "/barrios",
    label: "Base principal",
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

export const HOODS: BarrioItem[] = [
  {
    name: "Miraflores",
    href: "/barrios/miraflores",
    icon: "🌊",
    note: "Caminable, malecón, cafés para trabajar. Base cómoda para primera visita.",
    tags: ["malecón", "caminable", "cafés"],
  },
  {
    name: "Barranco",
    href: "/barrios/barranco",
    icon: "🎨",
    note: "Bohemio: arte, terrazas y bares. Conexión rápida a Miraflores.",
    tags: ["arte", "bares", "bohemio"],
  },
  {
    name: "San Isidro",
    href: "/barrios/san-isidro",
    icon: "🌳",
    note: "Tranquilo y seguro, parques amplios y restaurantes top.",
    tags: ["parques", "tranquilo", "restaurantes"],
  },
  {
    name: "Chorrillos",
    href: "/barrios/chorrillos",
    icon: "🏖️",
    note: "Playas y Morro Solar; mejor de día. De noche muévete en app.",
    tags: ["playa", "Morro Solar", "vistas"],
  },
  {
    name: "Centro de Lima",
    href: "/barrios/lima-centro",
    icon: "🏛️",
    note: "Casco histórico: arquitectura y plazas. Visítalo de día y vuelve en app.",
    tags: ["historia", "arquitectura", "día"],
  },
  {
    name: "Callao (solo aeropuerto)",
    href: "/barrios/callao",
    icon: "✈️",
    note: "Úsalo para el aeropuerto. Fuera de rutas turísticas puede ser inseguro; evita paseos improvisados.",
    tags: ["aeropuerto", "logística", "evitar"],
  },
];

// Advertencias Content
export const COMMON_SCAMS: ThreeWaySectionItem[] = [
  {
    // href: "/advertencias#taxis-informales",
    label: "Taxis informales",
    icon: "🚕",
    blurb: [
      "Evita “ofertas” de taxi en la calle/aeropuerto.",
      "Usa Cabify/Uber y verifica la patente & conductor.",
      "Si no te cuadra, cancela y pide otro.",
    ],
  },
  {
    // href: "/advertencias#cambio",
    label: "Cambio de dinero",
    icon: "💵",
    blurb: [
      "No hay problema en cambiar USD en la calle.",
      "Cuenta y guarda el dinero sin hacerlo a la vista.",
      "Evita montos grandes en público.",
    ],
  },
  {
    // href: "/advertencias#distracciones",
    label: "Distracciones",
    icon: "🎒",
    blurb: [
      "Empujones o “derrame” para distraer.",
      "No dejes el celu sobre la mesa cerca de la calle.",
      "Usa bolsos que cierren y llévalos al frente.",
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
      "Usa ATMs dentro de malls/bancos/hoteles.",
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
