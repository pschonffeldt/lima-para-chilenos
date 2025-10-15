import * as React from "react";
import { PartiesLima } from "../lib/parties-content";

export function PartyCard({ party }: { party: PartiesLima }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-md transition">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{party.title}</h3>
      </div>

      <div>
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-sm text-gray-700">Ubicación:</h3>
          <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
            {party.location}
          </span>
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-sm text-gray-700">Precio:</h3>
          <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground lowercase first-letter:uppercase">
            {party.price.replaceAll("-", " ")}
          </span>
        </div>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
        <li>{party.description}</li>
      </ul>

      <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-indigo-50/50 p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Recomendaciones
        </h3>
        {party.tips && (
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {party.tips.map((n, i) => (
              <li key={i}>• {n}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {party.googleMapsUrl && (
          <a
            href={party.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-white/80"
          >
            Ver ubicación
          </a>
        )}
        {party.socialMedia && (
          <a
            href={party.socialMedia}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-white/80"
          >
            Ver perfil en RRSS
          </a>
        )}
        {party.website && (
          <a
            href={party.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-white/80"
          >
            Visitar website
          </a>
        )}
      </div>
    </article>
  );
}
