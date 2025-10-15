"use client";

import * as React from "react";
import {
  FilterConfig,
  ChipFilterBoard,
} from "../components/filter-board-component";
import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import { PREPARTY_PRIMER } from "../lib/copy-content";
import {
  PARTIES_LIMA,
  PartiesLima,
  Price,
  Location as PartyLocation,
} from "../lib/parties-content";
import { PartyCard } from "../components/party-card-component";

// Chips values
const PRICE_CHIPS: Array<{ label: "Todos" | Price; value: "Todos" | Price }> = [
  { label: "Todos", value: "Todos" },
  { label: "Economico", value: "Economico" },
  { label: "Promedio", value: "Promedio" },
  { label: "Fino", value: "Fino" },
];

const LOCATION_CHIPS = [
  { label: "Todos", value: "Todos" },
  { label: "Miraflores", value: "Miraflores" },
  { label: "Barranco", value: "Barranco" },
  { label: "San Isidro", value: "San Isidro" },
  { label: "Centro", value: "Centro" },
] satisfies Array<{ label: string; value: PartyLocation | "Todos" }>;

// Filter configs
const PRICE_FILTER: FilterConfig<PartiesLima> = {
  id: "price",
  label: "Precio",
  options: PRICE_CHIPS,
  defaultValue: "Todos",
  isMatch: (item, selected) => selected === "Todos" || item.price === selected,
};

const LOCATION_FILTER: FilterConfig<PartiesLima> = {
  id: "location",
  label: "Ubicación",
  options: LOCATION_CHIPS,
  defaultValue: "Todos",
  isMatch: (item, selected) =>
    selected === "Todos" || item.location.includes(selected as PartyLocation),
};

export default function CarretesPage() {
  return (
    <main className="space-y-10 py-10">
      <HeroSection
        title="Carretes"
        description={
          <>
            Si vienes a Lima a carretiar, no necesitas cruzar toda la ciudad. La
            mayor parte de la vida nocturna —bares, terrazas, clubes y rooftops—
            se concentra en <strong>Miraflores</strong>,{" "}
            <strong>Barranco</strong> y <strong>San Isidro</strong>.
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

      <ThreeWaySection
        srTitle="¿Qué deberías considerar antes de ir de carrete en Lima?"
        sectionTitle="¿Qué deberías considerar antes de ir de carrete en Lima?"
        items={PREPARTY_PRIMER}
        defaultCtaVariant="primary"
      />

      <h2 className="text-3xl font-bold tracking-tight">
        ¿Donde carretiar en Lima?
      </h2>

      <div className="h-9" />
      <ChipFilterBoard
        items={PARTIES_LIMA}
        filters={[LOCATION_FILTER, PRICE_FILTER]}
      >
        {(filtered) => (
          <div className="grid gap-6 sm:grid-cols-2">
            {filtered.map((p) => (
              <PartyCard key={p.id} party={p} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                No hay resultados con los filtros actuales.
              </div>
            )}
          </div>
        )}
      </ChipFilterBoard>
    </main>
  );
}
