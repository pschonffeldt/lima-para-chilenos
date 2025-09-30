// src/app/components/container-component.tsx
import type { ReactNode } from "react";

export default function ContainerComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    // takes remaining width, scrolls vertically
    <main className="flex-1 h-[100svh] overflow-y-auto">
      {/* centered, 80% width content */}
      <div className="mx-auto p-4 sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%]">
        {children}
      </div>
    </main>
  );
}
