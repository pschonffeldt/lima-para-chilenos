import Link from "next/link";

export const metadata = {
  title: "Café — Lima para Chilenos",
  description:
    "Perú tiene café espectacular y muchísimas cafeterías de especialidad. Dónde ir por barrio, cómo pedir, y tips para comprar granos.",
};

export default function CafePage() {
  return (
    <section className="space-y-10 py-10">
      {/* HERO */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Café de especialidad en Lima
        </h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Perú produce algunos de los mejores cafés del mundo (Cajamarca, Cusco,
          Amazonas, Junín) y Lima está llena de cafeterías de especialidad. Si
          te gusta el espresso, los métodos de filtro o llevar granos a casa,
          aquí vas a ser feliz.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="#por-que-peru"
            className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            ¿Por qué Perú es top?
          </Link>
          <Link
            href="#donde-ir"
            className="rounded-lg border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60"
          >
            Ver dónde ir
          </Link>
        </div>
      </header>

      {/* QUICK FACTS */}
      <div id="por-que-peru" className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Origen & perfiles
          </p>
          <ul className="space-y-1 text-sm">
            <li>Regiones: Cajamarca, Cusco, Amazonas, Junín, Puno.</li>
            <li>Perfiles que se repiten: chocolate, panela, frutal.</li>
            <li>Mucho enfoque en trazabilidad y tueste reciente.</li>
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Métodos
          </p>
          <ul className="space-y-1 text-sm">
            <li>Espresso & leche: espresso, cappuccino, flat white, latte.</li>
            <li>Filtro: V60, Kalita, Aeropress, Chemex (según cafetería).</li>
            <li>Fríos: cold brew, espresso tonic (verano).</li>
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Tips rápidos
          </p>
          <ul className="space-y-1 text-sm">
            <li>Pide el origen del día y fecha de tueste.</li>
            <li>Si compras granos: tueste &lt; 30 días y molienda a pedido.</li>
            <li>Mejor horario: mañana / media tarde (menos fila).</li>
          </ul>
        </div>
      </div>

      {/* DÓNDE IR */}
      <div id="donde-ir" className="space-y-3">
        <h2 className="text-lg font-semibold">Dónde ir (por barrios)</h2>
        <p className="text-sm text-muted-foreground">
          Te dejamos una guía por zonas habituales de turistas chilenos. Suma
          tus favoritos al mapa y arma tu mini-ruta: café → paseo → algo dulce.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Miraflores */}
          <div className="flex flex-col rounded-lg border p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full border bg-background">
                🌊
              </span>
              <p className="text-sm font-medium">Miraflores</p>
            </div>
            <ul className="space-y-1 text-sm">
              <li>Espresso bar y filtro a pasos del malecón.</li>
              <li>Buenas opciones para comprar granos de origen.</li>
              <li>Combina con paseo por el malecón y parques.</li>
            </ul>
            <div className="mt-auto pt-4">
              <Link
                href="/barrios/miraflores"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver Miraflores →
              </Link>
            </div>
          </div>

          {/* Barranco */}
          <div className="flex flex-col rounded-lg border p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full border bg-background">
                🎨
              </span>
              <p className="text-sm font-medium">Barranco</p>
            </div>
            <ul className="space-y-1 text-sm">
              <li>Cafecitos con terrazas, arte y murales cerca.</li>
              <li>Ideal para espresso tonic o cold brew en verano.</li>
              <li>Ruta: café → puente icónico → sunset en mirador.</li>
            </ul>
            <div className="mt-auto pt-4">
              <Link
                href="/barrios/barranco"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver Barranco →
              </Link>
            </div>
          </div>

          {/* San Isidro */}
          <div className="flex flex-col rounded-lg border p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full border bg-background">
                🌳
              </span>
              <p className="text-sm font-medium">San Isidro</p>
            </div>
            <ul className="space-y-1 text-sm">
              <li>Cafeterías tranquilas cerca de parques (El Olivar).</li>
              <li>Perfecto para trabajar un rato con buen Wi-Fi.</li>
              <li>Compra granos y vuelve caminando por áreas verdes.</li>
            </ul>
            <div className="mt-auto pt-4">
              <Link
                href="/barrios/san-isidro"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver San Isidro →
              </Link>
            </div>
          </div>

          {/* Centro de Lima */}
          <div className="flex flex-col rounded-lg border p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full border bg-background">
                🏛️
              </span>
              <p className="text-sm font-medium">Centro de Lima (de día)</p>
            </div>
            <ul className="space-y-1 text-sm">
              <li>Cafés de especialidad cerca de plazas y museos.</li>
              <li>Plan: museo + café + fotos, y regreso en app.</li>
              <li>Evita alejarte de las zonas concurridas.</li>
            </ul>
            <div className="mt-auto pt-4">
              <Link
                href="/barrios/lima-centro"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Ver Lima Centro →
              </Link>
            </div>
          </div>

          {/* Para trabajar */}
          <div className="flex flex-col rounded-lg border p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full border bg-background">
                💻
              </span>
              <p className="text-sm font-medium">Para trabajar un rato</p>
            </div>
            <ul className="space-y-1 text-sm">
              <li>Busca enchufes, Wi-Fi estable y mesas cómodas.</li>
              <li>Compra algo cada cierto tiempo (buena práctica).</li>
              <li>Si vas en grupo, prefiere mesas grandes afuera.</li>
            </ul>
          </div>

          {/* Dulces & panadería */}
          <div className="flex flex-col rounded-lg border p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full border bg-background">
                🥐
              </span>
              <p className="text-sm font-medium">Dulces y panadería</p>
            </div>
            <ul className="space-y-1 text-sm">
              <li>Muchas cafeterías hornean y rotan pastelería propia.</li>
              <li>Combina con un paseo por el malecón o por Barranco.</li>
              <li>
                Dato: pregunta por la torta del día o “galleta de la casa”.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CÓMO PEDIR */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">
          Cómo pedir (rápido y sin drama)
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Espresso & leche
            </p>
            <ul className="space-y-1 text-sm">
              <li>Flat white (más café, menos leche).</li>
              <li>Cappuccino (equilibrado).</li>
              <li>Latte (más leche, suave).</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Filtro
            </p>
            <ul className="space-y-1 text-sm">
              <li>V60 / Kalita (limpio y aromático).</li>
              <li>Chemex (suave y claro, para compartir).</li>
              <li>Aeropress (cuerpo medio, versátil).</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Leches & frío
            </p>
            <ul className="space-y-1 text-sm">
              <li>Entera, descremada, avena, almendra (según local).</li>
              <li>Cold brew o espresso tonic para el calor.</li>
              <li>
                Azúcar: prueba primero — muchos orígenes son dulces solos.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* COMPRAR GRANOS */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">Comprar granos para llevar</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Qué pedir
            </p>
            <ul className="space-y-1 text-sm">
              <li>Origen, proceso y fecha de tueste (&lt; 30 días).</li>
              <li>Molienda a tu método (espresso, V60, prensa, etc.).</li>
              <li>250 g es buen tamaño para probar 1–2 semanas.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Perfiles recomendados
            </p>
            <ul className="space-y-1 text-sm">
              <li>Chocolate/nuez (todo público, va bien con leche).</li>
              <li>Frutal/cítrico (ideal en filtro).</li>
              <li>Panela/caramelo (dulzor natural, muy peruano).</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Conservación
            </p>
            <ul className="space-y-1 text-sm">
              <li>Bolsa cerrada, lejos de luz/calor/humedad.</li>
              <li>Evita congelar si lo vas a consumir pronto.</li>
              <li>Mejor moler justo antes de preparar.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MAPA */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Mapa de cafés</h2>
          <Link
            href="/mapa"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Abrir mapa completo →
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border">
          <iframe
            title="Mapa de cafés en Lima"
            src="https://www.google.com/maps/d/embed?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&ehbc=2E312F"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[360px] sm:h-[420px] lg:h-[520px]"
            allowFullScreen
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Capas con cafeterías de especialidad en Miraflores, Barranco, San
          Isidro y Centro. Súmale tus favoritos y arma tu propia ruta.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">¿Listo para un café?</h3>
          <p className="text-sm text-muted-foreground">
            Revisa los{" "}
            <Link href="/barrios" className="underline underline-offset-4">
              barrios
            </Link>{" "}
            y combínalo con un{" "}
            <Link href="/actividades" className="underline underline-offset-4">
              paseo
            </Link>{" "}
            por el malecón.
          </p>
        </div>
        <Link
          href="/advertencias"
          className="mt-3 inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80 sm:mt-0"
        >
          Ver advertencias rápidas
        </Link>
      </div>
    </section>
  );
}
