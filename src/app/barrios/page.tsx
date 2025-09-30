import Link from "next/link";

export const metadata = {
  title: "Barrios — Lima para Chilenos",
  description:
    "Miraflores, Barranco y San Isidro cubren casi todo lo que necesita un visitante chileno. Menciones rápidas: Chorrillos, Centro de Lima y Callao (solo aeropuerto).",
};

type BarrioCard = {
  name: string;
  note: string;
  tags: string[];
  icon: string;
  href: string;
};

const BARRIOS: BarrioCard[] = [
  // Con páginas detalladas
  {
    href: "barrios/miraflores",
    name: "Miraflores",
    note: "Caminable, malecón, cafés para trabajar. Base cómoda para primera visita.",
    tags: ["malecón", "caminable", "cafés"],
    icon: "🌊",
  },
  {
    href: "barrios/barranco",
    name: "Barranco",
    note: "Bohemio: arte, terrazas y bares. Conexión rápida a Miraflores.",
    tags: ["arte", "bares", "bohemio"],
    icon: "🎨",
  },
  {
    href: "barrios/san-isidro",
    name: "San Isidro",
    note: "Tranquilo y seguro, parques amplios y restaurantes top.",
    tags: ["parques", "tranquilo", "restaurantes"],
    icon: "🌳",
  },

  // Mención rápida (sin página aún)
  {
    href: "barrios/chorrillos",
    name: "Chorrillos",
    note: "Playas y Morro Solar; mejor de día. De noche muévete en app.",
    tags: ["playa", "Morro Solar", "vistas"],
    icon: "🏖️",
  },
  {
    href: "barrios/lima-centro",
    name: "Centro de Lima",
    note: "Casco histórico: arquitectura y plazas. Visítalo de día y vuelve en app.",
    tags: ["historia", "arquitectura", "día"],
    icon: "🏛️",
  },
  {
    href: "barrios/callao",
    name: "Callao (solo aeropuerto)",
    note: "Úsalo para el aeropuerto. Fuera de rutas turísticas puede ser inseguro; evita paseos improvisados.",
    tags: ["aeropuerto", "logística", "evitar"],
    icon: "✈️",
  },
];

export default function Page() {
  return (
    <section className="space-y-10 py-10">
      {/* Título */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Barrios</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Como visitante chileno, no necesitas cruzar toda la ciudad. Casi todo
          lo que buscas —alojar cómodo, caminar, comer rico, salir de noche y
          trabajar desde cafés— está concentrado en <strong>Miraflores</strong>,{" "}
          <strong>Barranco</strong> y <strong>San Isidro</strong>.
        </p>
      </header>

      {/* Introducción explicativa */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">¿Por qué moverte poco?</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Base principal
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Miraflores</strong>: caminable + malecón + cafés.
              </li>
              <li>
                <strong>Barranco</strong>: arte + terrazas + bares.
              </li>
              <li>
                <strong>San Isidro</strong>: parques + restaurantes top.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Salidas puntuales
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Callao</strong>: aeropuerto y logística, nada más.
              </li>
              <li>
                <strong>Chorrillos</strong>: running/bici o Morro Solar, mejor
                de día.
              </li>
              <li>
                <strong>Centro de Lima</strong>: “casco histórico”, ideal de
                día.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Resultado
            </p>
            <ul className="space-y-1 text-sm">
              <li>Menos traslados largos y menos tráfico.</li>
              <li>Te mueves más seguro y con más tiempo útil.</li>
              <li>
                Experiencia <em>muy similar</em> a la que te gusta en 🇨🇱.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tarjetas de barrios */}
      <ul className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {BARRIOS.map((barrio) => {
          return (
            <li
              key={barrio.name}
              className="flex flex-col rounded-xl border p-5"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  {barrio.icon}
                </span>
                <h3 className="text-base font-semibold">{barrio.name}</h3>
              </div>

              <p className="text-sm text-muted-foreground">{barrio.note}</p>

              <div className="mt-3 flex flex-wrap gap-1">
                {barrio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <Link
                  href={barrio.href}
                  className="text-sm text-primary underline-offset-4 hover:underline"
                  aria-label={`Ver detalles de ${barrio.name}`}
                >
                  Ver detalles →
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Nota de cierre */}
      <p className="text-sm text-muted-foreground">
        Consejo: alójate en <strong>Miraflores</strong> o{" "}
        <strong>Barranco</strong> y usa{" "}
        <Link href="/transporte" className="underline underline-offset-4">
          apps de transporte
        </Link>{" "}
        para moverte. Si visitas el <strong>Centro de Lima</strong>, hazlo de
        día y vuelve en app. <strong>Callao</strong>, solo para el aeropuerto.
      </p>
    </section>
  );
}
