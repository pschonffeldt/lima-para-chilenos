import type { ReactNode } from "react";

type Props = { children: ReactNode };

export default function ContainerComponent({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-1">
      {/* centered content area at 80% of the right pane */}
      <div className="mx-auto w-[80%] min-w-0 p-4 md:p-8">{children}</div>
    </main>
  );
}
