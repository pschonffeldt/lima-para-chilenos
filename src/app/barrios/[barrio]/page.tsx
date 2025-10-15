import InfoBox from "@/app/components/info-box";
import { MapEmbed } from "@/app/components/map-component";
import { Slug, DISTRICTS_DATA } from "@/app/lib/barrios-content";
import type { Metadata } from "next";
import Link from "next/link";

type Params = { params: { barrio: Slug } };

export function generateMetadata({ params }: Params): Metadata {
  const district = DISTRICTS_DATA[params.barrio];
  return district
    ? {
        title: `${district.title} — Barrios — Lima para Chilenos`,
        description: district.intro,
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

export default function BarrioPage({ params }: Params) {
  const district = DISTRICTS_DATA[params.barrio];

  if (!district) {
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
      {/* Hero section */}
      <header className="space-y-2">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 bg-indigo-50/50">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {district.title}
          </h1>
          <p className="mt-3 max-w-prose text-gray-600 sm:text-lg">
            {district.intro}
          </p>
          {district.caution && (
            <p className="mt-2 rounded-lg border bg-amber-50 px-3 py-2 text-sm text-amber-900">
              ⚠️ {district.caution}
            </p>
          )}
        </div>
      </header>

      {/* Instructions section */}
      <InfoBox
        title={`Detalles de ${district.title}`}
        variant="plain"
        items={[<>{district.details}</>]}
      />

      {/* Details Sections */}
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {district.quick.map((card) => (
          <div
            key={card.title}
            className="group p-6 h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <p className="flex items-center gap-2 text-xl font-semibold text-gray-900">
              {card.title}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
              {card.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {district.highlights.map((card) => (
          <div
            key={card.title}
            className="group p-6 h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <p className="flex items-center gap-2 text-xl font-semibold text-gray-900">
              {card.title}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
              {card.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Map */}
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
          <Link
            href="/barrios"
            className="rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Volver a Barrios
          </Link>
        </div>
      </div>
    </section>
  );
}
