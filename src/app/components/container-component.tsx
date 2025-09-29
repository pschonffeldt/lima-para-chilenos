// src/app/components/container-component.tsx
import type { ReactNode } from "react";

export default function ContainerComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    // takes remaining width, scrolls vertically
    <main className="flex-1 h-[100svh] min-w-0 overflow-y-auto">
      {/* centered, 80% width content */}
      <div className="mx-auto w-[80%] max-w-2xl min-w-0 p-4 md:p-8">
        {children}
      </div>
    </main>
  );
}
