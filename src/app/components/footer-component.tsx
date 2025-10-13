import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-0 w-full border-gray-200 bg-gray-50 full-bleed-bg pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <small className="text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://pschonffeldt.dev/"
              className="font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              pschonffeldt
            </a>
            . Todos los derechos reservados.
          </small>

          <div className="flex gap-4 text-sm text-gray-500">
            <Link
              href="/contacto"
              className="transition-colors hover:text-blue-600"
            >
              Contacto
            </Link>
            <a
              href="mailto:info@mitkof.cl"
              className="transition-colors hover:text-blue-600"
            >
              info@mitkof.cl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
