import Link from "next/link";

export const metadata = {
  title: "Copete — Lima para Chilenos",
  description:
    "Bares, botillerías y qué pedir en Lima: pisco sour, chilcano, cervezas locales, horarios y tips de seguridad para salir tranqui.",
};

export default function CopetePage() {
  return (
    <section className="space-y-10 py-10">
      {/* Title */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Copete</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Dónde tomar, qué pedir y cómo moverte de noche sin enredo. Bares para
          sentarse, compras rápidas y pequeños tips para evitar malos ratos.
        </p>
      </header>

      {/* Quick facts */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Edad & documentos
          </p>
          <ul className="space-y-1 text-sm">
            <li>Edad legal de consumo: 18 años.</li>
            <li>Lleva documento de identidad por si lo piden.</li>
            <li>Evita beber en vía pública: suele estar prohibido.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Reservas & cover
          </p>
          <ul className="space-y-1 text-sm">
            <li>Viernes/sábado: reserva o llega temprano.</li>
            <li>Algunos lugares cobran cover.</li>
            <li>Vístete casual pero no con sandalias.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Seguridad nocturna
          </p>
          <ul className="space-y-1 text-sm">
            <li>Vuelta a casa: apps (Cabify/Uber).</li>
            <li>Cuida el celu al salir a la calle del bar.</li>
            <li>Si decides caminar, no lo hagas solo/a.</li>
          </ul>
        </div>
      </div>

      {/* Qué pedir */}
      <div className="space-y-3" id="que-pedir">
        <h2 className="text-lg font-semibold">Qué pedir en Perú</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="font-medium">Pisco sour</p>
            <p className="text-sm text-muted-foreground">
              Clásico limeño: pisco, limón, jarabe, clara y amargo. Potente;
              ideal para abrir. Después del segundo ya estas entrando a la zona
              borracha.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="font-medium">Chilcano</p>
            <p className="text-sm text-muted-foreground">
              Pisco + ginger ale + limón. Más liviano y refrescante; va toda la
              noche. Algo así como una piscola blanca.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="font-medium">Cervezas locales</p>
            <p className="text-sm text-muted-foreground">
              Las populares: Cusqueña, Pilsen, Cristal. También hay artesanales;
              Barbarian, Valle Sagrado.
            </p>
          </div>
        </div>
      </div>

      {/* Bares por zona */}
      <div className="space-y-3" id="bares">
        <h2 className="text-lg font-semibold">Bares por zona</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Barranco
            </p>
            <p className="text-sm">
              Onda bohemia, terrazas y coctelería. Bueno para viernes/sábado.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Miraflores
            </p>
            <p className="text-sm">
              Bares variados cerca del Parque Kennedy y malecón. Fácil volver en
              app.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              San Isidro
            </p>
            <p className="text-sm">
              Coctelería más tranquila, opciones mas íntimas para conversar y
              comer algo.
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Tip: si sales en grupo, define un <em>punto de recojo</em> seguro para
          la app antes de cerrar la cuenta.
        </p>
      </div>

      {/* Botillerías / compras rápidas */}
      <div className="space-y-3" id="botillerias">
        <h2 className="text-lg font-semibold">Botillerías y compras rápidas</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Dónde comprar
            </p>
            <ul className="space-y-1 text-sm">
              <li>Minimarkets y tiendas de barrio en zonas céntricas.</li>
              <li>Supermercados: más variedad y mejores precios.</li>
              <li>Apps de delivery nocturno en distritos principales.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Horarios
            </p>
            <ul className="space-y-1 text-sm">
              <li>Tiendas chicas cierran más tarde que supermercados.</li>
              <li>Fines de semana: más oferta abierta de noche.</li>
              <li>Respeta normas locales sobre venta y consumo.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Do / Don't noche */}
      <div className="space-y-3" id="tips-noche">
        <h2 className="text-lg font-semibold">Haz / Evita de noche</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">Haz</p>
            <ul className="space-y-1 text-sm">
              <li>Pide auto con app y verifica patente/conductor.</li>
              <li>Cuida tu vaso y no lo pierdas de vista.</li>
              <li>Camina por calles iluminadas y concurridas.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">Evita</p>
            <ul className="space-y-1 text-sm">
              <li>Beber en plazas o calles (es sancionado).</li>
              <li>Dejar mochilas/carteras sin supervisión.</li>
              <li>Tomar taxi de la calle sin acuerdo claro.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">Plan redondo</h3>
          <p className="text-sm text-muted-foreground">
            Mira{" "}
            <Link href="/comida" className="underline underline-offset-4">
              Comida
            </Link>{" "}
            para elegir dónde cenar y revisa{" "}
            <Link href="/transporte" className="underline underline-offset-4">
              Transporte
            </Link>{" "}
            para volver seguro.
          </p>
        </div>
        <div className="mt-3 flex gap-2 sm:mt-0">
          <Link
            href="/actividades"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Ver actividades
          </Link>
          <Link
            href="/advertencias"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Advertencias
          </Link>
        </div>
      </div>
    </section>
  );
}
