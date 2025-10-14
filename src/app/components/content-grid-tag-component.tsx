"use client";

import * as React from "react";
import Button from "./button-component";

export type ContentGridWithTagItem = {
  name: string;
  href?: string;
  icon?: React.ReactNode;
  note?: string;
  tags?: string[];
  /** Override link text (defaults to "Ver detalles →") */
  linkLabel?: string;
};

type ContentGridWithTagProps = {
  items: ContentGridWithTagItem[];
  /** Optional visually-hidden section title for a11y */
  srTitle?: string;
  /** Optional visible section title above the grid */
  sectionTitle?: string;
  /** Extra classes for the outer <section> */
  className?: string;
  /** Change responsive columns (defaults: sm=2, lg=3) */
  cols?: { sm?: 1 | 2 | 3 | 4; lg?: 1 | 2 | 3 | 4 };
};

export function ContentGridWithTag({
  items,
  srTitle,
  sectionTitle,
  className = "",
  cols,
}: ContentGridWithTagProps) {
  const smCols = cols?.sm ?? 2;
  const lgCols = cols?.lg ?? 3;

  return (
    <section className={className}>
      {srTitle ? <h2 className="sr-only">{srTitle}</h2> : null}
      {sectionTitle ? (
        <h2 className="pb-3 text-lg font-semibold">{sectionTitle}</h2>
      ) : null}

      <ul
        className={[
          "grid items-stretch gap-6",
          `sm:grid-cols-${smCols}`,
          `lg:grid-cols-${lgCols}`,
        ].join(" ")}
      >
        {items.map((barrio) => (
          <li
            key={barrio.name}
            className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md p-5"
          >
            <div className="mb-2 flex items-center gap-3">
              {barrio.icon ? (
                <span
                  aria-hidden
                  className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg"
                >
                  {barrio.icon}
                </span>
              ) : null}
              <h3 className="text-base font-semibold">{barrio.name}</h3>
            </div>

            {barrio.note ? (
              <p className="text-sm text-muted-foreground">{barrio.note}</p>
            ) : null}

            {barrio.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-1">
                {barrio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {barrio.href ? (
              <div className="mt-auto pt-5">
                <Button
                  href={barrio.href}
                  className="text-sm text-primary underline-offset-4"
                  aria-label={`Ver detalles de ${barrio.name}`}
                >
                  {barrio.linkLabel ?? "Ver detalles →"}
                </Button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
