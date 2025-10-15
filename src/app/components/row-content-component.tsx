"use client";

import * as React from "react";
import Button from "./button-component";

export type RowContentItem = {
  /** Optional stable key */
  id?: string;
  /** Left title (e.g., barrio name) */
  name: React.ReactNode;
  /** Secondary line under the name */
  note?: React.ReactNode;
  /** Optional link on the right side */
  href?: string;
  /** Custom label for the right-side link (defaults to "Ver") */
  rightSlot?: React.ReactNode;
};

export type RowContentSectionProps = {
  /** Rows to render (any length) */
  items: RowContentItem[];
  /** Visible section title */
  sectionTitle?: React.ReactNode;
  /** Screen-reader–only title (keeps semantics) */
  srTitle?: string;
  /** Optional section id */
  id?: string;
  /** Extra classes for the outer <section> */
  className?: string;
};

export default function RowContentSection({
  items,
  sectionTitle,
  srTitle,
  id,
  className,
}: RowContentSectionProps) {
  return (
    <section
      id={id}
      className={["space-y-3", className].filter(Boolean).join(" ")}
    >
      {srTitle ? <h2 className="sr-only">{srTitle}</h2> : null}
      {sectionTitle ? (
        <h2 className="text-lg font-semibold">{sectionTitle}</h2>
      ) : null}

      <ul className="space-y-2">
        {items.map(({ id, name, note, href = "Ver", rightSlot }, idx) => {
          const key = id ?? (typeof name === "string" ? name : `row-${idx}`);

          return (
            <li
              key={key}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md px-4 py-4"
            >
              <div className="min-w-0">
                <p className="font-medium">{name}</p>
                {note ? (
                  <p className="truncate text-sm text-muted-foreground">
                    {note}
                  </p>
                ) : null}
              </div>

              <div className="ml-3 shrink-0">
                {rightSlot ??
                  (href ? (
                    <Button
                      href={href}
                      className="text-sm text-primary"
                      aria-label={"Ver detalles"}
                    >
                      {`Ver ${name}`}
                    </Button>
                  ) : null)}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
