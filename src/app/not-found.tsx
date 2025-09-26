import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">404 – Página no encontrada</h1>
      <p className="mt-4 text-gray-600">
        Disculpa, no hemos podido encontrat esa página.
      </p>
      <Link href="/" className="mt-6 text-primary hover:underline">
        Volver al inicio
      </Link>
    </main>
  );
}
