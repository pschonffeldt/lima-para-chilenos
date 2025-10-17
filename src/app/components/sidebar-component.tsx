"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  NAV_A,
  NAV_B,
  NAV_C,
  NAV_D,
  NAV_E,
  NAV,
} from "./nav-menu-parts-component";

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function SidebarComponent() {
  const pathname = usePathname();

  // Desktop collapse
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("sidebar:collapsed");
    if (saved != null) setCollapsed(saved === "1");
  }, []);
  useEffect(() => {
    localStorage.setItem("sidebar:collapsed", collapsed ? "1" : "0");
  }, [collapsed]);

  // Mobile drawer
  const [open, setOpen] = useState(false);
  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname]);
  // Esc to close + lock body scroll when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key === "\\") setCollapsed((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open]);

  // ---------- Desktop rail (md+) ----------
  const DesktopRail = (
    // Nav menu
    <aside
      className={cx(
        "relative hidden md:block h-full shrink-0 border-r bg-gray-100",
        "transition-[width] duration-200 ease-[cubic-bezier(.22,.61,.36,1)] [will-change:width]",
        collapsed ? "w-19" : "w-[220px]"
      )}
    >
      {/* Nav menu collapse toggle */}
      <button
        type="button"
        onClick={() => setCollapsed((v) => !v)}
        aria-label={collapsed ? "Expandir menú" : "Colapsar menú"}
        aria-expanded={!collapsed}
        className={cx(
          "absolute right-0 top-10 -translate-y-1/2 translate-x-1/2",
          "z-20 h-8 w-8 rounded-full border border-gray-200 bg-white text-black",
          "flex items-center justify-center align hover:bg-gray-100 transition-colors cursor-pointer"
        )}
        title={collapsed ? "Expandir (⌘/Ctrl + \\)" : "Colapsar (⌘/Ctrl + \\)"}
      >
        {collapsed ? "›" : "‹"}
      </button>

      {/* Nav menu width */}
      <div
        className={cx(
          "flex h-full flex-col",
          collapsed ? "mt-10 p-1 pt-6" : "mt-10 p-1 pt-6"
        )}
      >
        {/* Nav menu groups */}
        <nav className="mt-6 grid gap-2 text-sm border-b-1 pb-2 border-gray-300">
          {NAV_A.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={cx(
                  "group grid grid-cols-[2rem_1fr] items-center rounded-md px-2 py-2",
                  "transition-colors duration-150 ease-out hover:bg-white",
                  active ? " font-bold" : "text-gray-700",
                  collapsed && "grid-cols-[2rem_0]"
                )}
                aria-label={collapsed ? item.label : undefined}
              >
                <span
                  aria-hidden
                  className={cx(
                    "grid h-8 px-4 place-items-center rounded-xl text-base leading-none shrink-0",
                    collapsed ? "h-2 w-2" : ""
                  )}
                >
                  {item.icon}
                </span>

                {/* Labels: fades while its column collapses */}
                <span
                  className={cx(
                    "min-w-0 pl-3 whitespace-nowrap text-sm overflow-hidden",
                    "transition-opacity duration-100 ease-in-out",
                    collapsed ? "opacity-0" : "opacity-100"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <nav className="mt-2 grid gap-2 text-sm border-b-1 pb-2 border-gray-300">
          {NAV_B.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={cx(
                  "group grid grid-cols-[2rem_1fr] items-center rounded-md px-2 py-2",
                  "transition-colors duration-150 ease-out hover:bg-white",
                  active ? " font-bold" : "text-gray-700",
                  collapsed && "grid-cols-[2rem_0]"
                )}
                aria-label={collapsed ? item.label : undefined}
              >
                <span
                  aria-hidden
                  className={cx(
                    "grid h-8 px-4 place-items-center rounded-xl text-base leading-none shrink-0",
                    collapsed ? "h-2 w-2" : ""
                  )}
                >
                  {item.icon}
                </span>

                {/* Labels: fades while its column collapses */}
                <span
                  className={cx(
                    "min-w-0 pl-3 whitespace-nowrap text-sm overflow-hidden",
                    "transition-opacity duration-100 ease-in-out",
                    collapsed ? "opacity-0" : "opacity-100"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <nav className="mt-2 grid gap-2 text-sm border-b-1 pb-2 border-gray-300">
          {NAV_C.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={cx(
                  "group grid grid-cols-[2rem_1fr] items-center rounded-md px-2 py-2",
                  "transition-colors duration-150 ease-out hover:bg-white",
                  active ? " font-bold" : "text-gray-700",
                  collapsed && "grid-cols-[2rem_0]"
                )}
                aria-label={collapsed ? item.label : undefined}
              >
                <span
                  aria-hidden
                  className={cx(
                    "grid h-8 px-4 place-items-center rounded-xl text-base leading-none shrink-0",
                    collapsed ? "h-2 w-2" : ""
                  )}
                >
                  {item.icon}
                </span>

                {/* Labels: fades while its column collapses */}
                <span
                  className={cx(
                    "min-w-0 pl-3 whitespace-nowrap text-sm overflow-hidden",
                    "transition-opacity duration-100 ease-in-out",
                    collapsed ? "opacity-0" : "opacity-100"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <nav className="mt-2 grid gap-2 text-sm border-b-1 pb-2 border-gray-300">
          {NAV_D.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={cx(
                  "group grid grid-cols-[2rem_1fr] items-center rounded-md px-2 py-2",
                  "transition-colors duration-150 ease-out hover:bg-white",
                  active ? " font-bold" : "text-gray-700",
                  collapsed && "grid-cols-[2rem_0]"
                )}
                aria-label={collapsed ? item.label : undefined}
              >
                <span
                  aria-hidden
                  className={cx(
                    "grid h-8 px-4 place-items-center rounded-xl text-base leading-none shrink-0",
                    collapsed ? "h-2 w-2" : ""
                  )}
                >
                  {item.icon}
                </span>

                {/* Labels: fades while its column collapses */}
                <span
                  className={cx(
                    "min-w-0 pl-3 whitespace-nowrap text-sm overflow-hidden",
                    "transition-opacity duration-100 ease-in-out",
                    collapsed ? "opacity-0" : "opacity-100"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <nav className="mt-2 grid gap-2 text-sm">
          {NAV_E.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={cx(
                  "group grid grid-cols-[2rem_1fr] items-center rounded-md px-2 py-2",
                  "transition-colors duration-150 ease-out hover:bg-white",
                  active ? " font-bold" : "text-gray-700",
                  collapsed && "grid-cols-[2rem_0]"
                )}
                aria-label={collapsed ? item.label : undefined}
              >
                <span
                  aria-hidden
                  className={cx(
                    "grid h-8 px-4 place-items-center rounded-xl text-base leading-none shrink-0",
                    collapsed ? "h-2 w-2" : ""
                  )}
                >
                  {item.icon}
                </span>

                {/* Labels: fades while its column collapses */}
                <span
                  className={cx(
                    "min-w-0 pl-3 whitespace-nowrap text-sm overflow-hidden",
                    "transition-opacity duration-100 ease-in-out",
                    collapsed ? "opacity-0" : "opacity-100"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        {/* Copyright */}
        <div className="mt-auto" />
        <div className="flex flex-col flex-wrap p-4 gap-1 border-t-1 border-gray-300">
          <small className="text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://pschonffeldt.dev/"
              className="font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              pschonffeldt
            </a>
          </small>
          <small className="text-gray-500 text-xs	">
            Todos los derechos reservados.
          </small>
        </div>
        <div className="mb-10" />
      </div>
    </aside>
  );

  // ---------- Mobile hamburger + drawer ( < md ) ----------
  const MobileHamburger = (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="md:hidden fixed top-2 left-2 z-40 rounded-md border bg-white/90 px-2 py-1 text-sm shadow-sm backdrop-blur"
      aria-controls="mobile-drawer"
      aria-expanded={open}
      aria-label="Abrir menú"
      title="Abrir menú"
    >
      {/* Hamburger icon */}
      <span aria-hidden>☰</span>
    </button>
  );

  // Mobile nav menu
  const MobileDrawer = (
    <div
      className={cx(
        "md:hidden fixed inset-0 z-40",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* Mobile nav menu background */}
      <div
        onClick={() => setOpen(false)}
        className={cx(
          "absolute inset-0 bg-black/40 transition-opacity",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      {/* Mobile nav menu panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        className={cx(
          "absolute inset-y-0 left-0 w-72 border-r bg-gray-100 shadow-xl transition-transform",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-3">
          <span className="font-semibold">Lima</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-md border px-2 py-1 text-xs text-gray-700 hover:bg-white"
            aria-label="Cerrar menú"
            title="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <nav className="mt-1 grid gap-1 px-3 pb-3 text-sm">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "flex items-center gap-3 rounded-md px-3 py-2",
                  active
                    ? "bg-white font-semibold border border-gray-200"
                    : "hover:bg-white"
                )}
              >
                <span className="text-lg" aria-hidden>
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto" />
        <div className="flex flex-col flex-wrap p-4 gap-1 border-t-1 border-gray-300">
          <small className="text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://pschonffeldt.dev/"
              className="font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              pschonffeldt
            </a>
          </small>
          <small className="text-gray-500 text-xs	">
            Todos los derechos reservados.
          </small>
        </div>
        <div className="mb-10" />
      </div>
    </div>
  );

  return (
    <>
      {MobileHamburger}
      {MobileDrawer}
      {DesktopRail}
    </>
  );
}
