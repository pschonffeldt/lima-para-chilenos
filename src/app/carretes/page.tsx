"use client";

import Link from "next/link";

const BARRIOS = [
  {
    name: "Barranco — Terrazas & Clubes",
    icon: "🎶",
    note: "Zona bohemia con bares de autor, música en vivo y clubes pequeños. Ideal viernes/sábado.",
    tags: ["terrazas", "club", "reggaeton", "cocteleria"],
    href: "/carretes/barranco",
  },
  {
    name: "Miraflores — Rooftops & Pubs",
    icon: "🌆",
    note: "Rooftops con vista al mar y pubs para pre y after. Fácil combinar con cena.",
    tags: ["rooftop", "pub", "cerveza-artesanal", "vista-mar"],
    href: "/carretes/miraflores",
  },
  {
    name: "San Isidro — After-office",
    icon: "🍸",
    note: "Barras de coctelería y ambiente adulto. Ideal para jueves/viernes.",
    tags: ["after-office", "cocteleria", "wine-bar"],
    href: "/carretes/san-isidro",
  },
];

export default function CarretesPage() {
  return (
    <section className="space-y-10 py-10">
      {/* Título */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Carretes</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Si vienes a Lima a pasarlo bien, no necesitas cruzar toda la ciudad.
          La mayor parte de la vida nocturna —bares, terrazas, clubes y
          rooftops— se concentra en <strong>Miraflores</strong>,{" "}
          <strong>Barranco</strong> y <strong>San Isidro</strong>.
        </p>
      </header>

      {/* Introducción explicativa */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">Cómo salir sin complicarte</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Zonas para salir
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Miraflores</strong>: rooftops, pubs y afters tranquilos.
              </li>
              <li>
                <strong>Barranco</strong>: terrazas, bares con música y clubes.
              </li>
              <li>
                <strong>San Isidro</strong>: after-office y coctelería fina.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Traslados y seguridad
            </p>
            <ul className="space-y-1 text-sm">
              <li>Usa apps (Cabify/Uber) ida y vuelta.</li>
              <li>Define punto de recojo antes de cerrar la cuenta.</li>
              <li>Evita caminar tramos largos de noche.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Consejos rápidos
            </p>
            <ul className="space-y-1 text-sm">
              <li>Reservas recomendadas en lugares populares.</li>
              <li>Dress code casual; algunos clubes piden lista.</li>
              <li>Hidrátate y cuida tus pertenencias.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tarjetas de opciones (mantenemos exactamente la estructura) */}
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

              {/* Usa este campo para describir el tipo de noche: música, ambiente, rango de precios */}
              <p className="text-sm text-muted-foreground">{barrio.note}</p>

              {/* Etiquetas como: “rooftop”, “reggaetón”, “coctelería”, “cerveza artesanal”, “club”, “after-office” */}
              <div className="mt-3 flex flex-wrap gap-1">
                {barrio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground lowercase first-letter:uppercase"
                  >
                    {String(tag).replaceAll("-", " ")}
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
        Consejo: muévete entre <strong>Miraflores</strong> y{" "}
        <strong>Barranco</strong> para la noche; usa{" "}
        <Link href="/transporte" className="underline underline-offset-4">
          apps de transporte
        </Link>{" "}
        para volver al alojamiento. Si vas al <strong>Centro de Lima</strong>,
        haz pregame temprano y regresa en app. <strong>Callao</strong>, solo
        para aeropuerto/logística.
      </p>
    </section>
  );
}
