"use client";

import * as React from "react";
import { ChipFilterBoard } from "../components/filter-board-component";
import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import { OUTING_BASICS } from "../lib/copy-content";
import { ITINERARIOS } from "../lib/itineraries-content";
import ItineraryCard, {
  DURATION_FILTER,
  TAG_FILTER,
} from "../components/itinerary-card-component";

export default function ItinerariosPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Itinerarios"
        description={
          <>
            Rutas listas para usar, pensadas para moverte entre Miraflores,
            Barranco y San Isidro. Hay opciones de medio día, día completo y
            mañanas activas. Combínalas con el mapa y revisa advertencias antes
            de salir.
          </>
        }
      />

      {/* Prepare your activities section */}
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
