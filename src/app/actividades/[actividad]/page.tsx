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

export default function Page({ params }: Params) {
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
    <section className="space-y-10 py-10">
      {/* Header */}
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
          <span aria-hidden>{activity.icon}</span>
          <span>Actividades</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{activity.title}</h1>
        <p className="max-w-[70ch] text-muted-foreground">{activity.summary}</p>

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
      </header>

      {/* Sections */}
      <div className="grid gap-3 sm:grid-cols-3">
        {activity.sections.map((block) => (
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

      {/* Map (optional) */}
      {activity.map && (
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Mapa</h2>
          <div className="mt-3 overflow-hidden rounded-xl border">
            <iframe
              title={`Mapa ${activity.title}`}
              src={activity.map.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full sm:h-[420px] lg:h-[520px]"
              allowFullScreen
            />
          </div>
          {activity.map.note && (
            <p className="mt-2 text-sm text-muted-foreground">
              {activity.map.note}
            </p>
          )}
        </div>
      )}

      {/* Tags & CTAs */}
      <div className="flex flex-wrap items-center gap-2">
        {activity.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
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
              className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
            >
              {callToAction.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
