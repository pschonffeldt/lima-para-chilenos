// src/app/components/sidebar-component.tsx
import React from "react";

export default function SidebarComponent() {
  return (
    <aside className="w-[200px] shrink-0 h-full border-r bg-gray-100">
      <div className="flex h-full flex-col p-6">
        <h3 className="text-xl font-semibold text-gray-900">Pokédex</h3>
        <p className="mt-2 text-sm text-gray-600">
          Fast search, regional filters, and type tags. See stats at a glance
          and build shortlists in seconds.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-gray-700">
          <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
            Find by name or # (e.g., Pikachu, 25 — supports Mr. Mime,
            Nidoran♀/♂)
          </li>
          <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
            Quick view: types & stats (height/weight, base stats at a glance)
          </li>
          <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
            Roll a random Pokémon (discover something new fast)
          </li>
        </ul>
        <div className="mt-auto pt-5" />
      </div>
    </aside>
  );
}
