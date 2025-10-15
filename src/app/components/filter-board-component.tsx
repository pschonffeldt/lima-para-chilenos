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
