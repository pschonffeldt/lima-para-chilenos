import Link from "next/link";
import * as React from "react";

type CtaVariant = "primary" | "dark" | "outline";

type CtaAction = {
  href: string;
  label: string;
  variant?: CtaVariant;
  prefetch?: boolean;
};

type CtaBannerProps = {
  title: string;
  description: React.ReactNode;
  actions: CtaAction[];
  className?: string;
};

function ctaActionClass(variant: CtaVariant = "outline") {
  const base =
    "rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    dark: "bg-gray-900 text-white hover:bg-black",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
  } as const;
  return `${base} ${variants[variant]}`;
}

export function CtaBanner({
  title,
  description,
  actions,
  className,
}: CtaBannerProps) {
  return (
    <div
      className={[
        "rounded-xl border border-gray-200 p-4 shadow-sm transition hover:shadow-md sm:flex sm:items-center sm:justify-between",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mt-3 flex gap-2 sm:mt-0">
        {actions.map(({ href, label, prefetch, variant }, i) => (
          <Link
            key={`${href}-${i}`}
            href={href}
            prefetch={prefetch}
            className={ctaActionClass(variant)}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
