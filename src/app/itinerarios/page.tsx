import Link from "next/link";

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

export const metadata = {
  title: "Itinerarios — Lima para Chilenos",
  description:
    "Rutas simples de 1/2 día y día completo: malecón, Barranco creativo, centro histórico, surf y mañanas activas. Con enlaces a actividades clave y barrios.",
};

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

export default function ItinerariosPage() {
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
    </section>
  );
}
