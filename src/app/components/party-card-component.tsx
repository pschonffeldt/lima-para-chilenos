import * as React from "react";
import { PartiesLima } from "../lib/parties-content";
import Button from "./button-component";

export function PartyCard({ party }: { party: PartiesLima }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
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

      <div className="mt-4 flex flex-wrap gap-2">
        {party.googleMapsUrl && (
          <Button
            href={party.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Ver ubicación
          </Button>
        )}

        {party.socialMedia && (
          <Button
            href={party.socialMedia}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Ver perfil en RRSS
          </Button>
        )}

        {party.website && (
          <Button
            href={party.website}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Visitar website
          </Button>
        )}
      </div>
    </article>
  );
}
