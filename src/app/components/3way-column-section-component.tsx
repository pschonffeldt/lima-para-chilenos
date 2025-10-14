"use client";

import * as React from "react";

export type ThreeWaySectionItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  blurb?: string[];
};

type ThreeWaySectionProps = {
  items: ThreeWaySectionItem[];
  srTitle?: string;
  sectionTitle?: string;
  className?: string;
};

export function ThreeWaySection({
  items,
  srTitle = "Contenido esencial",
  sectionTitle,
}: ThreeWaySectionProps) {
  return (
    <section className="py-2 sm:py-2">
      {/* SR title */}
      <h2 className="sr-only">{srTitle}</h2>
      {/* Title */}
      <h2 className="text-lg font-semibold pb-3">{sectionTitle}</h2>
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ href, label, icon, blurb }) => (
          <article
            key={href}
            className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
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
