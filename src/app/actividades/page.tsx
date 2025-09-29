import Link from "next/link";

export const metadata = {
  title: "Actividades — Lima para Chilenos",
  description:
    "Qué hacer en Lima: malecón y costa, cultura y museos, deporte y naturaleza. Ideas de 1/2 día y día completo, con tips simples y seguros.",
};

export default function ActividadesPage() {
  return (
    <section className="space-y-10 py-10">
      {/* Title */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Actividades</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Planes fáciles para conocer Lima sin complicarte: malecón, cultura,
          deporte y naturaleza. Ideas de medio día y día completo con foco en
          Miraflores, Barranco y San Isidro.
        </p>
      </header>

      {/* Quick facts */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Mejor horario
          </p>
          <ul className="space-y-1 text-sm">
            <li>Mañana y tarde (evita 1–4 pm si hay sol fuerte).</li>
            <li>Atardecer en el malecón = apuesta segura.</li>
            <li>De noche: prefiere zonas iluminadas y concurridas.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Qué llevar
          </p>
          <ul className="space-y-1 text-sm">
            <li>Bloqueador, cortaviento ligero y agua.</li>
            <li>Tarjeta/efectivo chico; documento a mano.</li>
            <li>Celular guardado en esquinas muy concurridas.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Traslados
          </p>
          <ul className="space-y-1 text-sm">
            <li>Apps (Cabify/Uber) para moverte fácil.</li>
            <li>Metropolitano sirve si tu ruta coincide.</li>
            <li>Evita taxi de calle. Nos es seguro</li>
          </ul>
        </div>
      </div>

      {/* Malecón y costa */}
      <div id="malecon" className="space-y-3">
        <h2 className="text-lg font-semibold">Malecón y costa</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex flex-col rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Caminatas & miradores
            </p>
            <ul className="space-y-1 text-sm">
              <li>Tramo Miraflores ↔ Barranco (parques y acantilados).</li>
              <li>Parque del Amor y faro: vistas clásicas.</li>
              <li>Atardeceres frente al mar, panorama seguro.</li>
            </ul>
            <div className="mt-auto pt-5">
              <span className="inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Correr & bicicleta
            </p>
            <ul className="space-y-1 text-sm">
              <li>Loops 5K/10K por malecón, en la mañana es ideal.</li>
              <li>Bici: ciclovías en buen tramo; ojo con cruces.</li>
              <li>Hidratación y bloqueador siempre.</li>
            </ul>
            <div className="mt-auto pt-5">
              <span className="inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Playa & surf
            </p>
            <ul className="space-y-1 text-sm">
              <li>Clases para principiantes disponibles en la costa.</li>
              <li>Corriente fría: traje corto ayuda.</li>
              <li>Deja objetos de valor en el alojamiento.</li>
            </ul>
            <div className="mt-auto pt-5">
              <span className="inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cultura */}
      <div id="cultura" className="space-y-3">
        <h2 className="text-lg font-semibold">Cultura y paseos urbanos</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex flex-col rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Centro Histórico
            </p>
            <ul className="space-y-1 text-sm">
              <li>Plaza Mayor, balcones y arquitectura clásica.</li>
              <li>Visítalo de día; define punto de recojo para volver.</li>
              <li>Combínalo con un museo y algo para comer.</li>
            </ul>
            <div className="mt-auto pt-5">
              <span className="inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Museos & sitios
            </p>
            <ul className="space-y-1 text-sm">
              <li>Arte, historia y arqueología en varios distritos.</li>
              <li>Verifica horarios antes de ir (muchos cierran lunes).</li>
              <li>Compra entrada online si existe esa opción.</li>
            </ul>
            <div className="mt-auto pt-5">
              <span className="inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Barranco creativo
            </p>
            <ul className="space-y-1 text-sm">
              <li>Murales, galerías y el puente icónico.</li>
              <li>Camina de día; en la noche, vuelve en app.</li>
              <li>Cafecitos y bares para cerrar el paseo.</li>
            </ul>
            <div className="mt-auto pt-5">
              <span className="inline-block text-sm text-primary underline-offset-4 group-hover:underline">
                Abrir sección →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Deporte & naturaleza */}
      <div id="deporte-naturaleza" className="space-y-3">
        <h2 className="text-lg font-semibold">Deporte y naturaleza</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Parques & áreas verdes
            </p>
            <ul className="space-y-1 text-sm">
              <li>Parques amplios para trotar o picnic.</li>
              <li>Rutas planas y seguras de día.</li>
              <li>Siempre guarda tus cosas a la vista.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Observación de aves / humedales
            </p>
            <ul className="space-y-1 text-sm">
              <li>Reserva paseos para ver fauna local.</li>
              <li>Ideal en la mañana con guía o grupo.</li>
              <li>Lleva gorro, agua y protección solar.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Salidas de media jornada
            </p>
            <ul className="space-y-1 text-sm">
              <li>Costa y miradores + café en Barranco.</li>
              <li>Parque + museo cercano + sunset en malecón.</li>
              <li>
                Combina con{" "}
                <Link href="/comida" className="underline underline-offset-4">
                  Comida
                </Link>{" "}
                o{" "}
                <Link href="/copete" className="underline underline-offset-4">
                  Copete
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Itinerarios */}
      <div id="itinerarios" className="space-y-3">
        <h2 className="text-lg font-semibold">Itinerarios fáciles</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">1/2 día costero</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Café y paseo por el malecón (miradores).</li>
              <li>Bajada a la costa, fotos y snack.</li>
              <li>Sube a Barranco, galería y puente icónico.</li>
            </ol>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">1 día mixto</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Mañana de museo + almuerzo tranquilo.</li>
              <li>Tarde de parques o bici ligera.</li>
              <li>Atardecer en malecón y bar suave para cerrar.</li>
            </ol>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Tip: define el punto de encuentro para la app transporte antes de
          terminar cada actividad.
        </p>
      </div>

      {/* CTA final */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">¿Te mueves ahora?</h3>
          <p className="text-sm text-muted-foreground">
            Abre el{" "}
            <Link href="/mapa" className="underline underline-offset-4">
              mapa
            </Link>{" "}
            y combina con{" "}
            <Link href="/transporte" className="underline underline-offset-4">
              Transporte
            </Link>{" "}
            para llegar fácil.
          </p>
        </div>
        <div className="mt-3 flex gap-2 sm:mt-0">
          <Link
            href="/barrios"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Ver barrios
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
