"use client";

import * as React from "react";

export type TextSectionProps = {
  /** H2 by default; you can switch to H3/H4 to keep a clean outline */
  as?: "h2" | "h3" | "h4";
  /** Title can be string or custom node */
  title: React.ReactNode;
  /** Paragraph under the title (rich or plain) */
  description?: React.ReactNode;
  /** Align text and width */
  align?: "left" | "center";
  /** Quick background presets (overridden by bgClassName) */
  variant?: "default" | "muted" | "brand" | "dark";
  /** Override background classes (e.g., gradients, images) */
  bgClassName?: string;
  /** Extra classes for the <section> */
  className?: string;
  /** Extra classes for the inner container */
  containerClassName?: string;
  /** aria-labelledby hook */
  id?: string;
  /** Anything else you want to render after the copy */
  children?: React.ReactNode;
};

const VARIANTS = {
  default: "bg-white",
  muted: "bg-gray-50",
  brand: "bg-indigo-50/50",
  dark: "bg-gray-900",
} as const;

export default function TextSection({
  as = "h2",
  title,
  description,
  align = "left",
  variant = "default",
  bgClassName,
  className = "",
  containerClassName = "",
  id,
  children,
}: TextSectionProps) {
  const HeadingTag = as;
  const isCenter = align === "center";
  const isDark = (bgClassName ?? VARIANTS[variant]).includes("gray-900");

  const wrapperBg = bgClassName ?? VARIANTS[variant];
  const headingBase =
    "font-semibold tracking-tight " +
    (as === "h2"
      ? "text-2xl sm:text-3xl"
      : as === "h3"
        ? "text-xl sm:text-2xl"
        : "text-lg sm:text-xl");
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const descColor = isDark ? "text-gray-300" : "text-gray-600";
  const descLayout = isCenter
    ? "mx-auto max-w-prose text-center"
    : "max-w-prose";

  return (
    <section
      aria-labelledby={id}
      className={`border-b border-gray-100/60 ${wrapperBg} ${className}`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 ${containerClassName}`}
      >
        <div className={isCenter ? "text-center" : ""}>
          {/* Title: render as-is if node; fallback to default heading if string */}
          {typeof title === "string" ? (
            <HeadingTag id={id} className={`${headingBase} ${headingColor}`}>
              {title}
            </HeadingTag>
          ) : (
            title
          )}

          {description ? (
            typeof description === "string" ? (
              <p className={`mt-3 sm:text-lg ${descColor} ${descLayout}`}>
                {description}
              </p>
            ) : (
              <div className={`mt-3 sm:text-lg ${descColor} ${descLayout}`}>
                {description}
              </div>
            )
          ) : null}
        </div>

        {children}
      </div>
    </section>
  );
}
