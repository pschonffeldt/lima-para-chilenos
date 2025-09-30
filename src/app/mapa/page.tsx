import Link from "next/link";

export const metadata = {
  title: "Mapa — Lima para Chilenos",
  description:
    "Mapa con barrios recomendados, cafés para trabajar, restaurantes, running por el malecón y puntos útiles.",
};

const MAP_EMBED =
  "https://www.google.com/maps/d/embed?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&ehbc=2E312F";
const MAP_LINK =
  "https://www.google.com/maps/d/viewer?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&hl=es&usp=sharing";

export default function MapaPage() {
  return (
    <section className="space-y-10 py-10">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Mapa</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Marcadores curados para moverte fácil: barrios recomendados, cafés
          para trabajar, restaurantes, spots para correr y puntos útiles.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Abrir en Google Maps →
          </Link>
          <Link
            href="/barrios"
            className="rounded-lg border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted/60"
          >
            Ver Barrios
          </Link>
          <Link
            href="/transporte"
            className="rounded-lg border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted/60"
          >
            Transporte
          </Link>
        </div>
      </header>

      {/* Quick legend / “layers” explanation (pure UI text, no filtering) */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">Qué encontrarás</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Barrios base
            </p>
            <ul className="space-y-1 text-sm">
              <li>Miraflores, Barranco y San Isidro</li>
              <li>Puntos para caminar, cafés y miradores</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Vida diaria
            </p>
            <ul className="space-y-1 text-sm">
              <li>Cafés para trabajar, restaurantes, barras</li>
              <li>ATMs / casas de cambio (cuando aplique)</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Movimiento
            </p>
            <ul className="space-y-1 text-sm">
              <li>Rutas para correr por el malecón</li>
              <li>Referencias para pedir app con seguridad</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big map */}
      <div className="overflow-hidden rounded-xl border">
        <iframe
          title="Mapa Lima para Chilenos"
          src={MAP_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[70vh] w-full"
          allowFullScreen
        />
      </div>

      <div className="text-sm text-muted-foreground">
        <p>
          Tip: abre el mapa en una pestaña aparte para alternar capas, guardar
          marcadores y usar navegación paso a paso. Si el mapa no carga,
          asegúrate de no bloquear contenido embebido.
        </p>
        <p className="mt-2">
          ¿Ves algo desactualizado?{" "}
          <Link href="/contacto" className="underline underline-offset-4">
            Avísanos aquí
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
