import type { Metadata } from "next";
import Link from "next/link";

type Slug =
  | "miraflores"
  | "barranco"
  | "san-isidro"
  | "chorrillos"
  | "lima-centro"
  | "callao";

const DATA: Record<
  Slug,
  {
    title: string;
    intro: string;
    quick: { title: string; items: string[] }[];
    highlights: { title: string; items: string[] }[];
    caution?: string;
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
          "Apps de taxi para cualquier trayecto",
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
          "Apps detransportes para trayectos",
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
          "Haz reserva lugares restaurantes top",
          "Disfruta de sus parques",
          "Usa app de transporte de noche",
        ],
      },
    ],
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
  },
};

type Params = { params: { barrio: Slug } };

export function generateMetadata({ params }: Params): Metadata {
  const d = DATA[params.barrio];
  return d
    ? {
        title: `${d.title} — Barrios — Lima para Chilenos`,
        description: d.intro,
      }
    : { title: "Barrio — Lima para Chilenos" };
}

export function generateStaticParams(): Params["params"][] {
  return [
    "miraflores",
    "barranco",
    "san-isidro",
    "chorrillos",
    "lima-centro",
    "callao",
  ].map((s) => ({ barrio: s as Slug }));
}

export default function Page({ params }: Params) {
  const d = DATA[params.barrio];

  if (!d) {
    // notFound(); // if you prefer a 404
    return (
      <section className="space-y-6 py-10">
        <h1 className="text-2xl font-bold">Barrio no encontrado</h1>
        <p className="text-muted-foreground">
          Vuelve a{" "}
          <Link href="/barrios" className="underline underline-offset-4">
            Barrios
          </Link>{" "}
          para ver las opciones disponibles.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-10 py-10">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
        <p className="max-w-[70ch] text-muted-foreground">{d.intro}</p>
        {d.caution && (
          <p className="mt-2 rounded-lg border bg-amber-50 px-3 py-2 text-sm text-amber-900">
            ⚠️ {d.caution}
          </p>
        )}
      </header>

      {/* Quick facts */}
      <div className="grid gap-3 sm:grid-cols-3">
        {d.quick.map((card) => (
          <div key={card.title} className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {card.title}
            </p>
            <ul className="space-y-1 text-sm">
              {card.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid gap-3 sm:grid-cols-3">
        {d.highlights.map((block) => (
          <div key={block.title} className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {block.title}
            </p>
            <ul className="space-y-1 text-sm">
              {block.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">Mapa del barrio</h2>
        <div className="mt-3 overflow-hidden rounded-xl border">
          <iframe
            title={`Mapa ${d.title}`}
            src="https://www.google.com/maps/d/embed?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&ehbc=2E312F"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full sm:h-[420px] lg:h-[520px]"
            allowFullScreen
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Abre el{" "}
          <Link href="/mapa" className="underline underline-offset-4">
            mapa completo
          </Link>{" "}
          para ver marcadores por barrios.
        </p>
      </div>

      {/* Cross-links */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">¿Qué sigue?</h3>
          <p className="text-sm text-muted-foreground">
            Mira{" "}
            <Link href="/comida" className="underline underline-offset-4">
              Comida
            </Link>
            ,{" "}
            <Link href="/actividades" className="underline underline-offset-4">
              Actividades
            </Link>{" "}
            y{" "}
            <Link href="/transporte" className="underline underline-offset-4">
              Transporte
            </Link>
            .
          </p>
        </div>
        <Link
          href="/barrios"
          className="mt-3 inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80 sm:mt-0"
        >
          Volver a Barrios
        </Link>
      </div>
    </section>
  );
}
