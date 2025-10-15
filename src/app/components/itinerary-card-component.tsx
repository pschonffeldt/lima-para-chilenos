"use client";

import * as React from "react";
import Link from "next/link";

export type Etiqueta =
  | "comida"
  | "cafe"
  | "running"
  | "surf"
  | "fiesta"
  | "otros"
  | "museos"
  | "caminar"
  | "malecon";

export type Duración = "1-2h" | "2-4h" | "Medio día" | "Día completo";

export type ItineraryLink = { href: string; label: string };

export type Itinerary = {
  id: string;
  title: string;
  duration: Duración;
  region: string;
  tags: Etiqueta[];
  best: string;
  areas: string[];
  steps: string[];
  notes?: string[];
  price?: string;
  links?: ItineraryLink[];
};

type ItineraryCardProps = {
  itinerary: Itinerary;
  className?: string;
  /** Hide the Tips box (default: false = show it if notes exist) */
  hideNotes?: boolean;
  /** Hide the links row (default: false = show if links exist) */
  hideLinks?: boolean;
};

function chip(cn = "") {
  return `rounded-full border px-2 py-0.5 text-xs text-muted-foreground ${cn}`;
}

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

export default function ItineraryCard({
  itinerary: g,
  className,
  hideNotes = false,
  hideLinks = false,
}: ItineraryCardProps) {
  return (
    <article
      className={[
        "group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-md transition",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Title */}
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{g.title}</h3>
      </div>

      {/* Meta */}
      <div className="mt-1">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-sm text-gray-700">Duración y horario:</span>
          <span className={chip()}>{g.duration}</span>
          <span className={chip()}>{g.best}</span>
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-sm text-gray-700">Etiquetas:</span>
          {g.tags.map((tag) => (
            <span
              key={tag}
              className={chip("lowercase first-letter:uppercase")}
            >
              {tag.replaceAll("-", " ")}
            </span>
          ))}
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-sm text-gray-700">Zonas:</span>
          <div className="flex flex-wrap gap-1.5">
            {g.areas?.length ? (
              g.areas.map((a) => (
                <span key={a} className={chip()}>
                  {a}
                </span>
              ))
            ) : (
              <span className="text-xs text-muted-foreground">—</span>
            )}
          </div>
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-sm text-gray-700">Costo aproximado:</span>
          {g.price ? <span className={chip()}>{g.price}</span> : null}
        </div>
      </div>

      {/* Steps */}
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
        {g.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      {/* Notes */}
      {!hideNotes && g.notes?.length ? (
        <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-indigo-50/50 p-6">
          <h4 className="mb-2 text-lg font-semibold text-gray-900">Tips</h4>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {g.notes.map((n, i) => (
              <li key={i}>• {n}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Links */}
      {!hideLinks && g.links && g.links.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {g.links.map((l) =>
            isExternal(l.href) ? (
              <a
                key={l.href + l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-white/80"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href + l.label}
                href={l.href}
                className="rounded-lg border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-white/80"
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      ) : null}
    </article>
  );
}
