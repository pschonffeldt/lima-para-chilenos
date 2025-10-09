"use client";

import * as React from "react";

type ChipOption = { label: string; value: string };

export type FilterConfig<T> = {
  /** unique key for this filter (e.g., "gen", "tag", "duration") */
  id: string;
  /** heading shown above the chips */
  label: string;
  /** chip options to render (values are strings for simplicity) */
  options: ChipOption[];
  /** initial chip value (should exist in options) */
  defaultValue: string;
  /** decides if an item passes this single filter (use string compares inside) */
  isMatch: (item: T, selected: string) => boolean;
};

type ChipFilterBoardProps<T> = {
  /** full list of items to filter */
  items: T[];
  /** 1..N filters */
  filters: ReadonlyArray<FilterConfig<T>>;
  /** render the UI for the filtered list */
  children: (filtered: T[]) => React.ReactNode;
  /** optional wrapper class */
  className?: string;
};

export function ChipFilterBoard<T>({
  items,
  filters,
  children,
  className,
}: ChipFilterBoardProps<T>) {
  // Map filter.id -> selected value
  const [selectedValues, setSelectedValues] = React.useState<
    Record<string, string>
  >(
    () =>
      Object.fromEntries(
        filters.map((filter) => [filter.id, filter.defaultValue])
      ) as Record<string, string>
  );

  const setFilterValue = (id: string, value: string) =>
    setSelectedValues((prev) => ({ ...prev, [id]: value }));

  const filteredItems = React.useMemo(() => {
    return items.filter((item) =>
      filters.every((filter) => {
        const selected = selectedValues[filter.id] ?? filter.defaultValue; // guard
        return filter.isMatch(item, selected);
      })
    );
  }, [items, filters, selectedValues]);

  return (
    <section className={className}>
      {/* Filter blocks */}
      <div className="mb-6 grid gap-3 md:grid-cols-2">
        {filters.map((filter) => {
          const selected = selectedValues[filter.id] ?? filter.defaultValue;
          return (
            <div
              key={filter.id}
              className="rounded-xl border border-gray-200 bg-white p-4"
            >
              <div className="mb-2 text-sm font-semibold text-gray-900">
                {filter.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {filter.options.map((option) => {
                  const active = option.value === selected;
                  return (
                    <button
                      key={`${filter.id}:${option.value}`}
                      type="button"
                      onClick={() => setFilterValue(filter.id, option.value)}
                      className={[
                        "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                        active
                          ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                      ].join(" ")}
                      aria-pressed={active}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Caller renders the list */}
      {children(filteredItems)}
    </section>
  );
}

/* -----------------------------------------------------------------------------
  ChipFilterBoard — Implementation Guide
  ======================================

  What this is:
  -------------
  A tiny, reusable “chips + filtering + render prop” panel.
  - You pass it your ITEMS array and an array of FILTER CONFIGS.
  - It renders chip groups and returns the filtered items to your render function.
  - Values are plain strings to keep it universal across different datasets.

  Quickstart (5 steps):
  ---------------------
  1) Import the component:
     import { ChipFilterBoard, type FilterConfig } from "../components/filter-board-component";

  2) Prepare your data in the page (or import from /lib):
     const ITEMS = [...] // your array of objects

  3) Prepare chip options (values are strings; include an "All"/"Todos"):
     const DURATION_CHIPS = [
       { label: 'Todos', value: 'Todos' },
       { label: '1-2h', value: '1-2h' },
       { label: '2-4h', value: '2-4h' },
       { label: 'Medio día', value: 'Medio día' },
       { label: 'Día completo', value: 'Día completo' },
     ];

  4) Create FilterConfig objects (define how each filter matches):
     const DURATION_FILTER: FilterConfig<Item> = {
       id: 'duration',
       label: 'Duración',
       options: DURATION_CHIPS,
       defaultValue: 'Todos',
       isMatch: (item, selected) => selected === 'Todos' || item.duration === selected,
     };

     const TAG_FILTER: FilterConfig<Item> = {
       id: 'tag',
       label: 'Etiqueta',
       options: [
         { label: 'Todos', value: 'Todos' },
         { label: 'Café', value: 'cafe' },
         { label: 'Museos', value: 'museos' },
         { label: 'Caminar', value: 'caminar' },
       ],
       defaultValue: 'Todos',
       isMatch: (item, selected) => selected === 'Todos' || item.tags.includes(selected),
     };

  5) Render:
     <ChipFilterBoard items={ITEMS} filters={[DURATION_FILTER, TAG_FILTER]}>
       {(filtered) => (
         <ul>
           {filtered.map((it) => <li key={it.id}>{it.title}</li>)}
         </ul>
       )}
     </ChipFilterBoard>

  Example A — Itinerarios (Lima):
  -------------------------------
  type Etiqueta = 'comida' | 'cafe' | 'running' | 'surf' | 'fiesta' | 'otros' | 'museos' | 'caminar' | 'malecon';
  type Duración = '1-2h' | '2-4h' | 'Medio día' | 'Día completo';
  type Itinerary = {
    id: string; title: string; duration: Duración; tags: Etiqueta[]; areas: string[];
    // ...otros campos
  };

  const DURATION_FILTER: FilterConfig<Itinerary> = {
    id: 'duration',
    label: 'Duración',
    options: [
      { label: 'Todos', value: 'Todos' },
      { label: '1-2h', value: '1-2h' },
      { label: '2-4h', value: '2-4h' },
      { label: 'Medio día', value: 'Medio día' },
      { label: 'Día completo', value: 'Día completo' },
    ],
    defaultValue: 'Todos',
    isMatch: (g, v) => v === 'Todos' || g.duration === v,
  };

  const TAG_FILTER_IT: FilterConfig<Itinerary> = {
    id: 'tag',
    label: 'Etiqueta',
    options: [
      { label: 'Todos', value: 'Todos' },
      { label: 'Café', value: 'cafe' },
      { label: 'Museos', value: 'museos' },
      { label: 'Caminar', value: 'caminar' },
      { label: 'Surf', value: 'surf' },
    ],
    defaultValue: 'Todos',
    isMatch: (g, v) => v === 'Todos' || g.tags.includes(v),
  };

  <ChipFilterBoard items={ITINERARIOS} filters={[DURATION_FILTER, TAG_FILTER_IT]}>
    {(filtered) => (
      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((g) => (
          <article key={g.id} className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">{g.title}</h3>
            <div className="text-xs text-gray-600">
              {g.areas[0]} • {g.duration}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {g.tags.map((t) => (
                <span key={t} className="rounded-full border px-2 py-0.5 text-[11px] lowercase first-letter:uppercase">
                  {t.replaceAll('-', ' ')}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    )}
  </ChipFilterBoard>
----------------------------------------------------------------------------- */
