"use client";

import * as React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "dark" | "outline";

function buttonClass(variant: ButtonVariant = "primary") {
  const base =
    "rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    dark: "bg-gray-900 text-white hover:bg-black",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
  } as const;
  return `${base} ${variants[variant]}`;
}

export type ThreeWaySectionItem = {
  href?: string; // if present, renders a CTA
  label: string;
  icon?: React.ReactNode;
  blurb?: React.ReactNode[]; // ← allow links
  ctaLabel?: string; // defaults to "Ver {label.toLowerCase()}"
  ctaVariant?: ButtonVariant; // overrides section default
};

type ThreeWaySectionProps = {
  items: ThreeWaySectionItem[];
  srTitle?: string;
  sectionTitle?: string;
  className?: string;
  defaultCtaVariant?: ButtonVariant;
};

export function ThreeWaySection({
  items,
  srTitle = "Contenido esencial",
  sectionTitle,
  className,
  defaultCtaVariant = "dark",
}: ThreeWaySectionProps) {
  return (
    <section className={["py-2 sm:py-2", className].filter(Boolean).join(" ")}>
      {/* SR title */}
      <h2 className="sr-only">{srTitle}</h2>
      {/* Visible title */}
      {sectionTitle ? (
        <h2 className="pb-3 text-lg font-semibold">{sectionTitle}</h2>
      ) : null}

      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ href, label, icon, blurb, ctaLabel, ctaVariant }) => (
          <article
            key={`${label}-${href ?? "nohref"}`}
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

              {href ? (
                <div className="mt-auto pt-5">
                  <Link
                    href={href}
                    className={buttonClass(ctaVariant ?? defaultCtaVariant)}
                  >
                    {ctaLabel ?? `Ver ${label}`}
                  </Link>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
