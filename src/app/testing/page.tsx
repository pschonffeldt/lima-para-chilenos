"use client";

import * as React from "react";
import {
  FilterConfig,
  ChipFilterBoard,
} from "../components/filter-board-component";

// --- Demo types & data (replace with your own) ---
type DemoTag = "cafe" | "museos" | "caminar";
type DemoDuration = "1-2h" | "2-4h" | "Medio día" | "Día completo";

type DemoItem = {
  id: string;
  title: string;
  duration: DemoDuration;
  tags: DemoTag[];
  area: string;
};

const DEMO_ITEMS: DemoItem[] = [
  {
    id: "a",
    title: "Coffee crawl Miraflores",
    duration: "2-4h",
    tags: ["cafe", "caminar"],
    area: "Miraflores",
  },
  {
    id: "b",
    title: "Museo Larco + MNAAHP",
    duration: "Medio día",
    tags: ["museos"],
    area: "Pueblo Libre",
  },
  {
    id: "c",
    title: "Paseo malecón al sunset",
    duration: "1-2h",
    tags: ["caminar"],
    area: "Barranco",
  },
];

// --- Chips (options) ---
const DURATION_CHIPS: Array<{
  label: "Todos" | DemoDuration;
  value: "Todos" | DemoDuration;
}> = [
  { label: "Todos", value: "Todos" },
  { label: "1-2h", value: "1-2h" },
  { label: "2-4h", value: "2-4h" },
  { label: "Medio día", value: "Medio día" },
  { label: "Día completo", value: "Día completo" },
];

const TAG_CHIPS: Array<{ label: string; value: DemoTag | "Todos" }> = [
  { label: "Todos", value: "Todos" },
  { label: "Café", value: "cafe" },
  { label: "Museos", value: "museos" },
  { label: "Caminar", value: "caminar" },
];

// --- Filter configs wired to ChipFilterBoard (note: single generic) ---
const DURATION_FILTER: FilterConfig<DemoItem> = {
  id: "duration",
  label: "Duración",
  options: DURATION_CHIPS, // values are strings, OK
  defaultValue: "Todos",
  isMatch: (item, selected) =>
    selected === "Todos" || item.duration === selected,
};

const TAG_FILTER: FilterConfig<DemoItem> = {
  id: "tag",
  label: "Etiqueta",
  options: TAG_CHIPS,
  defaultValue: "Todos",
  isMatch: (item, selected) =>
    selected === "Todos" || item.tags.includes(selected as DemoTag),
};

// --- The page ---
export default function TestPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          ChipFilterBoard — Test
        </h1>
        <p className="text-muted-foreground">
          Tiny demo showing reusable chips + filtering.
        </p>
      </header>

      <ChipFilterBoard
        items={DEMO_ITEMS}
        filters={[DURATION_FILTER, TAG_FILTER]}
      >
        {(filtered) => (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((it) => (
              <article
                key={it.id}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {it.title}
                </h3>
                <div className="mt-1 text-xs text-gray-600">
                  {it.area} • {it.duration}
                </div>

                {/* tags as chips (sentence case, no helper) */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[11px] font-medium text-gray-700 lowercase first-letter:uppercase"
                    >
                      {t.replaceAll("-", " ")}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                No results with the current filters.
              </div>
            )}
          </div>
        )}
      </ChipFilterBoard>
    </main>
  );
}
