"use client";

import * as React from "react";

export type TwoWaySectionItem = {
  href?: string;
  label: string;
  icon?: React.ReactNode;
  blurb?: string[];
};

type TwoWaySectionItemProps = {
  items: TwoWaySectionItem[];
  srTitle?: string;
  sectionTitle?: string;
  className?: string;
};

export function TwoWaySection({
  items,
  srTitle = "Contenido esencial",
  sectionTitle,
  className,
}: TwoWaySectionItemProps) {
  return (
    <section className={["py-2 sm:py-2", className].filter(Boolean).join(" ")}>
      {/* Screen-reader title */}
      <h2 className="sr-only">{srTitle}</h2>

      {/* Visible title */}
      {sectionTitle ? (
        <h2 className="pb-3 text-lg font-semibold">{sectionTitle}</h2>
      ) : null}

      <div className="grid items-stretch gap-6 sm:grid-cols-2">
        {items.map(({ href, label, icon, blurb }) => (
          <article
            key={href}
            className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                  {icon && <span aria-hidden>{icon}</span>}
                  {label}
                </h3>
              </div>

              {blurb?.length ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                  {blurb.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
