import InfoBox from "@/app/components/info-box";
import { MapEmbed } from "@/app/components/map-component";
import { ACTIVIDADES_SLUGS, getActividad } from "@/app/lib/actividades-content";
import type { Metadata } from "next";
import Link from "next/link";

type Params = { params: { actividad: string } };

export function generateStaticParams(): Params["params"][] {
  return ACTIVIDADES_SLUGS.map((slug) => ({ actividad: slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const a = getActividad(params.actividad);
  return a
    ? {
        title: `${a.title} — Actividades — Lima para Chilenos`,
        description: a.summary,
      }
    : { title: "Actividad — Lima para Chilenos" };
}

export default function ActividadPage({ params }: Params) {
  const activity = getActividad(params.actividad);

  if (!activity) {
    return (
      <section className="space-y-6 py-10">
        <h1 className="text-2xl font-bold">Actividad no encontrada</h1>
        <p className="text-muted-foreground">
          Vuelve a{" "}
          <Link href="/actividades" className="underline underline-offset-4">
            Actividades
          </Link>{" "}
          para ver las opciones disponibles.
        </p>
      </section>
    );
  }

  return (
    <main className="space-y-10 py-10">
      {/* Header */}
      <header className="space-y-2">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 bg-indigo-50/50">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {activity.title}
          </h1>
          <p className="mt-3 max-w-prose text-gray-600 sm:text-lg">
            {activity.summary}
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border px-2 py-0.5">
              Duración: {activity.duration}
            </span>
            <span className="rounded-full border px-2 py-0.5">
              Mejor horario: {activity.bestTime.join(" / ")}
            </span>
            <span className="rounded-full border px-2 py-0.5">
              Zonas: {activity.areas.join(", ")}
            </span>
          </div>
        </div>
      </header>

      {/* Instructions section */}
      <InfoBox
        title="Detalles de la actividad"
        variant="plain"
        items={[<>{activity.description}</>]}
      />

      {/* Sections */}
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activity.sections.map((block) => (
          <div
            key={block.title}
            className="group p-6 h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <p className="flex items-center gap-2 text-xl font-semibold text-gray-900">
              {block.title}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
              {block.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* MAP */}
      <MapEmbed iframeClassName="w-full h-[500px]" />

      {/* CTA section */}
      <div className="rounded-xl border border-gray-200 p-4 shadow-sm transition hover:shadow-md sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">¿Qué sigue?</h3>
          <p className="text-sm text-muted-foreground">
            Vuelve a{" "}
            <Link href="/actividades" className="underline underline-offset-4">
              Actividades
            </Link>{" "}
            o explora barrios cercanos.
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 sm:mt-0">
          {activity.ctas?.map((callToAction) => (
            <Link
              key={callToAction.href}
              href={callToAction.href}
              className="rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {callToAction.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
