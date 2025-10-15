"use client";

import * as React from "react";
import {
  FilterConfig,
  ChipFilterBoard,
} from "../components/filter-board-component";
import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import { OUTING_BASICS } from "../lib/copy-content";
import {
  Duración,
  Etiqueta,
  ITINERARIOS,
  Itinerary,
} from "../lib/itineraries-content";
import ItineraryCard from "../components/itinerary-card-component";

const DURATION_CHIPS: Array<{
  label: "Todos" | Duración;
  value: "Todos" | Duración;
}> = [
  { label: "Todos", value: "Todos" },
  { label: "1-2h", value: "1-2h" },
  { label: "2-4h", value: "2-4h" },
  { label: "Medio día", value: "Medio día" },
  { label: "Día completo", value: "Día completo" },
];

const TAG_CHIPS: Array<{ label: string; value: Etiqueta | "Todos" }> = [
  { label: "Todos", value: "Todos" },
  { label: "Comida", value: "comida" },
  { label: "Café", value: "cafe" },
  { label: "Running", value: "running" },
  { label: "Surf", value: "surf" },
  { label: "Fiesta", value: "fiesta" },
  { label: "Otros", value: "otros" },
  { label: "Museos", value: "museos" },
  { label: "Caminar", value: "caminar" },
  { label: "Malecón", value: "malecon" },
];

// --- Filter configs for ChipFilterBoard (string-only) ---
const DURATION_FILTER: FilterConfig<Itinerary> = {
  id: "duration",
  label: "Duración",
  options: DURATION_CHIPS,
  defaultValue: "Todos",
  isMatch: (g, v) => v === "Todos" || g.duration === v,
};

const TAG_FILTER: FilterConfig<Itinerary> = {
  id: "tag",
  label: "Etiqueta",
  options: TAG_CHIPS,
  defaultValue: "Todos",
  isMatch: (g, v) => v === "Todos" || g.tags.includes(v as Etiqueta),
};

export default function ItinerariosPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Title */}
      {/* Hero section */}
      <HeroSection
        title="Itinerarios"
        description={
          <>
            Rutas listas para usar —sin humo— pensadas para moverte entre
            Miraflores, Barranco y San Isidro. Hay opciones de 1/2 día, día
            completo y mañanas activas. Combina con el mapa y revisa
            advertencias antes de salir.
          </>
        }
        actions={[
          {
            href: "/introduccion",
            label: "Empezar por la Introducción",
            variant: "primary",
          },
          { href: "/mapa", label: "Ver mapa con destinos", variant: "dark" },
        ]}
      />

      {/* Quick advice section */}
      <ThreeWaySection
        srTitle="Prepara tus actividades"
        sectionTitle="Prepara tus actividades"
        items={OUTING_BASICS}
        defaultCtaVariant="primary"
      />

      {/* Filter component section */}
      <ChipFilterBoard
        items={ITINERARIOS}
        filters={[DURATION_FILTER, TAG_FILTER]}
      >
        {(filtered) => (
          <div className="mb-6 grid gap-3">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {filtered.map((g) => (
                <ItineraryCard key={g.id} itinerary={g} />
              ))}

              {filtered.length === 0 && (
                <div className="col-span-full rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                  No hay resultados con los filtros actuales.
                </div>
              )}
            </div>
          </div>
        )}
      </ChipFilterBoard>
    </main>
  );
}
