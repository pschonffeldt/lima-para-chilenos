export type Slug =
  | "miraflores"
  | "barranco"
  | "san-isidro"
  | "chorrillos"
  | "lima-centro"
  | "callao";

export const DISTRICTS_DATA: Record<
  Slug,
  {
    title: string;
    intro: string;
    quick: { title: string; items: string[] }[];
    highlights: { title: string; items: string[] }[];
    caution?: string;
    details?: string;
  }
> = {
  miraflores: {
    title: "Miraflores",
    intro:
      "Caminable y seguro, con malecón, ciclovías y parques (Kennedy) a mano. Mucha oferta gastronómica, cafés y shopping, además de acceso rápido a la Costa Verde para playa y surf. Ideal como “base” si quieres moverte a pie y tener de todo cerca.",
    quick: [
      {
        title: "Por qué elegir",
        items: [
          "Caminable y seguro de día",
          "Malecón y parques",
          "Cafés para trabajar",
        ],
      },
      {
        title: "Moverse",
        items: [
          "Muy caminable durante el día",
          "Apps detransportes para trayectos",
          "Metropolitano cercano (Benavides / 28 de Julio)",
        ],
      },
      {
        title: "Ideal para",
        items: [
          "Primera vez en Lima",
          "Correr/caminar junto al mar",
          "Trabajo remoto",
        ],
      },
    ],
    highlights: [
      {
        title: "Qué hacer",
        items: [
          "Paseo por el malecón y miradores",
          "Parque del Amor · Faro",
          "Bajada a la costa",
        ],
      },
      {
        title: "Comer",
        items: ["Cevicherías y nikkei", "Sangucherías y pollerías de noche"],
      },
      {
        title: "Tips",
        items: [
          "Celular guardado en esquinas concurridas",
          "Pide un auto desde la puerta del local",
        ],
      },
    ],
    details:
      "Base cómoda para primera visita. Quédate cerca del malecón (Parque del Amor ↔ Faro) o a unas pocas cuadras de Kennedy para caminar a cafés y restaurantes. Evita dormir justo en el entorno de Parque Kennedy/Larco si te molesta el ruido nocturno (fin de semana hay música y bocinas). Para traslados, las apps funcionan muy bien; un viaje a Barranco suele tomar 10–20 min según tráfico. Accesos a la costa por Bajada Balta y Armendáriz (rampa larga). Cajeros y supermercados: Larcomar, Balta Shopping y tiendas Wong/Metro en avenidas principales. Lleva cortaviento: incluso con nubes hay brisa. En esquinas concurridas guarda el celular; cruza con atención ciclovías y patinetas. Si sales tarde, pide el auto desde la puerta del local o desde un hotel/centro comercial cercano.",
  },

  barranco: {
    title: "Barranco",
    intro:
      "Bohemio y creativo: galerías, murales, Puente de los Suspiros, bares y música en vivo. Ambiente más nocturno y festivo, con alojamientos boutique y buen café. Perfecto si te gusta la cultura, salir en la noche y pasear entre arte y mar.",
    quick: [
      {
        title: "Por qué elegir",
        items: [
          "Arte y terrazas",
          "Ambiente nocturno",
          "Caminatas fotogénicas",
        ],
      },
      {
        title: "Moverse",
        items: [
          "Muy caminable durante el día",
          "Apps de transporte para llegar/volver",
          "Camina de día; de noche usa app de transporte",
        ],
      },
      {
        title: "Ideal para",
        items: ["Salir a tomar algo", "Murales y fotos", "Fin de semana"],
      },
    ],
    highlights: [
      {
        title: "Qué hacer",
        items: [
          "Puente icónico y bajada",
          "Murales y galerías",
          "Atardecer desde el malecón",
        ],
      },
      {
        title: "Comer",
        items: [
          "Bistrós y cocina fusión",
          "Buenas barras para cerrar",
          "Carrete, carrete y más carrete",
        ],
      },
      {
        title: "Tips",
        items: [
          "Define punto de recojo",
          "Cuida el celu al salir del bar",
          "Te van a ofrecer droga en la calle, esa no es buena",
        ],
      },
    ],
    details:
      "Barrio bohemio y fotogénico. Hospédate cerca del Parque Municipal, San Martín o la Bajada de Baños para estar a pasos de murales, terrazas y el Puente de los Suspiros. Es más nocturno que Miraflores: viernes/sábado puede haber música hasta tarde; si quieres silencio, busca calles internas lejos de los bares. De día es ideal para caminar; de noche vuelve en app y evita tramos largos a pie por calles poco iluminadas. Menos supermercados grandes; hay minis y cajeros alrededor del Parque Municipal y en la Av. Grau. Conexión rápida al malecón y a Miraflores por la parte alta (15–25 min en app). Calles con pendientes/adoquines: usa calzado cómodo.",
  },

  "san-isidro": {
    title: "San Isidro",
    intro:
      "Tranquilo y seguro, con parques amplios —como el Olivar— y calles arboladas. Tiene oferta gastronómica de muy buen nivel, cafés y servicios de primera, con un ritmo más residencial que turístico. Ideal si priorizas calma y orden, y te gusta caminar sin apuro pero con buena conectividad hacia Miraflores y Barranco.",
    quick: [
      {
        title: "Por qué elegir",
        items: [
          "Parques y áreas verdes",
          "Restaurantes top",
          "Ambiente residencial y oficinas",
        ],
      },
      {
        title: "Moverse",
        items: [
          "Muy caminable durante el día",
          "Apps de transporte para trayectos mas largos",
          "Conexión rápida a Miraflores",
        ],
      },
      {
        title: "Ideal para",
        items: [
          "Descanso y trabajo",
          "Viajes de negocios",
          "Correr en parques",
        ],
      },
    ],
    highlights: [
      {
        title: "Qué hacer",
        items: [
          "Parques para trotar/picnic",
          "Restaurantes de alta gama",
          "Centros culturales y museos cercanos",
        ],
      },
      {
        title: "Comer",
        items: [
          "Restaurantes de autor",
          "Opciones tranquilas para conversar",
          "Entorno más exclusivo",
        ],
      },
      {
        title: "Tips",
        items: [
          "Haz reserva en restaurantes top",
          "Disfruta de sus parques",
          "Usa app de transporte de noche",
        ],
      },
    ],
    details:
      "Residencial y muy ordenado, con parques amplios (El Olivar) y veredas tranquilas para caminar o trotar. Alojar cerca de Conquistadores, Dasso o Dos de Mayo deja restaurantes y cafés de calidad a pocas cuadras. Es más caro que otros distritos y con menos vida nocturna; muchos locales cierran temprano. Excelente para descansar o trabajar: hoteles de negocios, buena señal móvil y bancos/ATMs en avenidas principales. Traslados: 10–20 min a Miraflores y 20–35 min a Barranco, dependiendo del tráfico. De noche también es seguro, pero menos animado; si sales, muévete en app. Evita cruzar vías rápidas sin pasos peatonales (Arequipa, Javier Prado).",
  },

  chorrillos: {
    title: "Chorrillos",
    intro:
      "Más local y amplio, con playas familiares (Agua Dulce) y spots como La Herradura y el Morro Solar. Buenos mariscos y vista a la bahía; menos turístico y con seguridad que varía por sector. Recomendable para día de playa/surf y comer rico, no tanto como base.",
    quick: [
      {
        title: "Por qué ir",
        items: [
          "Playas y miradores",
          "Extender corrida/pedaleada desde Barranco",
          "Morro Solar",
        ],
      },
      {
        title: "Moverse",
        items: [
          "Caminable durante el día",
          "Usa app de transporte en la noche",
          "Evita caminar de noche tramos largos",
        ],
      },
      {
        title: "Ideal para",
        items: [
          "Deporte al aire libre",
          "Paseo de día con vistas",
          "Visita al Morro Solar",
        ],
      },
    ],
    highlights: [
      {
        title: "Qué hacer",
        items: [
          "Subida al Morro Solar (vistas de la costa)",
          "Playas (mejor fuera de hora punta)",
          "Surf en playa La Herradura",
        ],
      },
      {
        title: "Para combinar",
        items: ["Barranco (almuerzo/coffee) + atardecer en malecón"],
      },
      {
        title: "Tips",
        items: [
          "No lleves objetos de valor a la playa",
          "Punto de recojo para la app de transporte",
        ],
      },
    ],
    caution:
      "Recomendado de día y con traslado por app. Evita zonas poco concurridas y llevar objetos de valor.",
    details:
      "Zona más local, útil para playa y miradores. Lo mejor está pegado a Barranco (Malecón Grau) y hacia Agua Dulce/La Herradura. De día puedes combinar surf/comida con vistas al Morro Solar; de noche conviene volver en app y evitar caminatas largas por sectores poco iluminados. Para una visita sencilla: llega en app a la playa o al mirador, guarda pertenencias y define de antemano un punto de recojo para el regreso. Los Pantanos de Villa (humedales) son buena salida de mañana con guía. No se recomienda como base de alojamiento para primera visita: servicios están más dispersos y la seguridad varía por sector.",
  },

  "lima-centro": {
    title: "Centro de Lima (Casco histórico)",
    intro:
      "Corazón histórico: Plaza Mayor, iglesias, balcones coloniales y museos. Intenso y caótico en horas punta, con seguridad variable. Mejor para visitar de día (ideal con tour) y volver a dormir a Miraflores/Barranco si buscas tranquilidad.",
    quick: [
      {
        title: "Por qué ir",
        items: [
          "Plaza Mayor y balcones",
          "Catedrales e iglesias",
          "Museos cercanos",
        ],
      },
      {
        title: "Moverse",
        items: [
          "Llega y vuelve en app de transporte",
          "Define punto de recojo (plaza/parque)",
          "Caminable dentro del casco histórico",
        ],
      },
      {
        title: "Ideal para",
        items: [
          "Paseo cultural diurno",
          "Fotos y arquitectura",
          "Almuerzos populares",
        ],
      },
    ],
    highlights: [
      {
        title: "Qué hacer",
        items: [
          "Recorrido de plazas y balcones",
          "Museo + café",
          "Compras puntuales en galerías",
        ],
      },
      {
        title: "Para combinar",
        items: ["Tarde en malecón de Miraflores o Barranco"],
      },
      {
        title: "Tips",
        items: [
          "Cuida el celular en aglomeraciones",
          "Evita llevar mochilas a la vista",
        ],
      },
    ],
    caution:
      "Evita de noche si no conoces la zona. Mantente en áreas concurridas y vuelve en app.",
    details:
      "Planéalo para la mañana o tarde y quédate en las áreas más concurridas: Plaza San Martín, Jirón de la Unión y Plaza Mayor. Funciona bien como paseo cultural breve: plaza + museo + café. Hay carteras y celulares a la vista que “vuelan” en aglomeraciones—usa bolsos que cierren y evita sacar el teléfono al caminar. Muchos museos cierran lunes; revisa horarios. Para llegar/volver, usa app y define un punto claro (Plaza San Martín suele ser práctico). No es recomendable para alojarse si buscas calma; mejor dormir en Miraflores/Barranco y venir solo de día.",
  },

  callao: {
    title: "Callao (aeropuerto)",
    intro:
      "Aeropuerto y puerto. En general, meramente para llegar y salir de Lima, ya que es una zona bastante peligrosa para pasear. Existen excepciones puntuales (La Punta, Monumental) pero, si vas, que sea en visita guiada y con operador confiable.",
    quick: [
      {
        title: "Por qué ir",
        items: [
          "Aeropuerto y logística de viaje",
          "De lo contrario, no vale la pena",
        ],
      },
      {
        title: "Moverse",
        items: [
          "Traslados puerta a puerta en app",
          "Servicios oficiales hacia Barranco y Miraflores",
          "Evita taxis de la calle",
        ],
      },
      {
        title: "Ideal para",
        items: ["Llegadas/salidas", "Conexiones tempranas/tardías"],
      },
    ],
    highlights: [
      {
        title: "Si decides visitar",
        items: [
          "Visitas guiadas puntuales (p. ej. áreas culturales) y siempre de día",
          "Confirma horarios y rutas; evita improvisar",
        ],
      },
      {
        title: "Alternativa",
        items: [
          "Quédate en Miraflores/Barranco y organiza un traslado directo",
        ],
      },
      {
        title: "Tips",
        items: [
          "Define punto de encuentro seguro",
          "1 hora del aeropuerto a Miraflores/Barranco",
          "No exhibas equipaje ni dispositivos",
        ],
      },
    ],
    caution:
      "Recomendación general: usa Callao solo para el aeropuerto. Cualquier paseo debe ser diurno, planificado y con traslado seguro.",
    details:
      "Úsalo principalmente para aeropuerto y logística. El entorno general del puerto no es turístico ni especialmente seguro para pasear sin guía. Si te interesa Monumental Callao o La Punta, hazlo en visita diurna, planificada y con operador confiable; evita improvisar rutas. Traslados puerta a puerta en app u operadores del aeropuerto son la regla. Calcula 50–70 min entre el aeropuerto y Miraflores/Barranco según tráfico. Para conexiones muy tempranas/tardías, vale más alojar en Miraflores/Barranco y coordinar transporte que dormir en zonas cercanas al puerto.",
  },
};
