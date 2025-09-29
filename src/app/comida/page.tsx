import Link from "next/link";

export const metadata = {
  title: "Comida — Lima para Chilenos",
  description:
    "Qué probar en Lima, cómo elegir bien y comer rico sin complicarte: ceviche, chifa, nikkei, menú del día, horarios y tips prácticos.",
};

export default function ComidaPage() {
  return (
    <section className="space-y-10 py-10">
      {/* Title */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Comida</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Lima es capital gastronómica. Aquí tienes una guía rápida para comer
          bien, evitar sorpresas y entender horarios y costumbres sin dar
          vueltas.
        </p>
      </header>

      {/* Quick facts */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Horarios
          </p>
          <ul className="space-y-1 text-sm">
            <li>Almuerzo 1–3 pm; cena 8–10 pm.</li>
            <li>Restaurantes top: reserva (finde se llena).</li>
            <li>Muchos locales cierran entre 4–7 pm.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Propina & pagos
          </p>
          <ul className="space-y-1 text-sm">
            <li>Propina no obligatoria; 10% si fue bueno.</li>
            <li>Tarjeta funciona en casi todos los restaurantes</li>
            <li>Pregunta si incluyen “servicio” antes de pagar.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Agua & higiene
          </p>
          <ul className="space-y-1 text-sm">
            <li>Solo toma agua embotellada.</li>
            <li>Hielo suele ser seguro en zonas turísticas.</li>
            <li>Ceviche al mediodía y en locales bien conocidos.</li>
          </ul>
        </div>
      </div>

      {/* Qué probar */}
      <div className="space-y-3" id="que-probar">
        <h2 className="text-lg font-semibold">Qué probar (lista express)</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Ceviche",
              note: "Pescado del día, limón, ají. Mejor a la hora de almuerzo.",
            },
            {
              name: "Lomo saltado",
              note: "Salteado criollo con papas y arroz. Infaltable.",
            },
            {
              name: "Chifa",
              note: "China-peruana. Arroz chaufa, taypá, wantán.",
            },
            {
              name: "Nikkei",
              note: "Peruano-japonés. Tiraditos, makis con ajíes.",
            },
            {
              name: "Pollo a la brasa",
              note: "Clásico para la noche o compartir.",
            },
            {
              name: "Anticuchos",
              note: "Brochetas a la parrilla, típicas de noche.",
            },
            { name: "Causa", note: "Plato frío de papa amarilla con relleno." },
            { name: "Ají de gallina", note: "Guiso cremoso con ají amarillo." },
            {
              name: "Suspiro limeño",
              note: "Postre tradicional, dulce y cremoso.",
            },
          ].map((it) => (
            <div key={it.name} className="rounded-lg border p-4">
              <p className="font-medium">{it.name}</p>
              <p className="text-sm text-muted-foreground">{it.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dónde comer (por estilo) */}
      <div className="space-y-3" id="donde-comer">
        <h2 className="text-lg font-semibold">
          Dónde comer (por estilo de salida)
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Rápido & bueno
            </p>
            <ul className="space-y-1 text-sm">
              <li>“Menú del día” entrada + fondo + bebida.</li>
              <li>Pollerías y sangucherías para la noche.</li>
              <li>Cevicherías informales solo al almuerzo.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Para sentarse tranqui
            </p>
            <ul className="space-y-1 text-sm">
              <li>Bistrós y nikkei con carta variada.</li>
              <li>Chifas de barrio (porciones generosas).</li>
              <li>Reservas recomendadas viernes/sábado.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Experiencia top
            </p>
            <ul className="space-y-1 text-sm">
              <li>Restaurantes de autor: reserva con tiempo.</li>
              <li>Degustaciones/menús largos (2–3 horas).</li>
              <li>Dress code casual cuidado; llega puntual.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menú del día (cómo funciona) */}
      <div className="rounded-xl border p-5" id="menu-del-dia">
        <h2 className="text-lg font-semibold">Menú del día: cómo funciona</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm">
          <li>Incluye entrada + fondo + bebida (a veces postre).</li>
          <li>Disponible en almuerzo; cambia según el día.</li>
          <li>Pregunta por opciones de pescado/carne/vegetariano.</li>
          <li>Si comes ceviche, mejor fresco y temprano.</li>
        </ol>
      </div>

      {/* Consejos para pedir */}
      <div className="space-y-3" id="como-pedir">
        <h2 className="text-lg font-semibold">Consejos para pedir</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <ul className="space-y-1 text-sm">
              <li>Pide recomendaciones de la casa (suelen acertar).</li>
              <li>Indica picor: “suave / medio / picante”.</li>
              <li>Si compartes, pregunta por medias porciones.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <ul className="space-y-1 text-sm">
              <li>Agua: embotellada sin hielo si prefieres ir a la segura.</li>
              <li>Propina: agrega 10% si el servicio fue bueno.</li>
              <li>Boleta/factura: pídela al final si la necesitas.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Zonas para comer (barrios) */}
      <div className="space-y-3" id="barrios-para-comer">
        <h2 className="text-lg font-semibold">Barrios con buena oferta</h2>
        <ul className="space-y-2">
          {[
            {
              name: "Miraflores",
              note: "Gran mezcla: cevicherías, nikkei, bistrós y cafés.",
              href: "/barrios/miraflores",
            },
            {
              name: "Barranco",
              note: "Bares y restaurantes con onda; ideal noche y finde.",
              href: "/barrios/barranco",
            },
            {
              name: "San Isidro",
              note: "Restaurantes de nivel y propuestas de autor.",
              href: "/barrios/san-isidro",
            },
          ].map((b) => (
            <li
              key={b.name}
              className="flex items-center justify-between rounded-lg border px-3 py-2"
            >
              <div className="min-w-0">
                <p className="font-medium">{b.name}</p>
                <p className="truncate text-sm text-muted-foreground">
                  {b.note}
                </p>
              </div>
              <Link
                href={b.href}
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">¿Acompañarlo con algo?</h3>
          <p className="text-sm text-muted-foreground">
            Revisa bares y botillerías en la sección <strong>Copete</strong> o
            mira qué hacer luego de comer.
          </p>
        </div>
        <div className="mt-3 flex gap-2 sm:mt-0">
          <Link
            href="/copete"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Ir a Copete
          </Link>
          <Link
            href="/actividades"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Ver actividades
          </Link>
        </div>
      </div>
    </section>
  );
}
