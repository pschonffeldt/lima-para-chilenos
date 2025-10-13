import type { ReactNode } from "react";

export default function ContainerComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    // column child of layout; this is the scroll area
    <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
      {/* centered content; no bottom padding bleeding into footer */}
      <div className="mx-auto px-4 sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%]">
        {children}
      </div>
    </main>
  );
}
