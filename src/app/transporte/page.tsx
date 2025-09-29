import Link from "next/link";

export const metadata = {
  title: "Transporte — Lima para Chilenos",
  description:
    "Cómo moverte en Lima: apps (Uber/Cabify/InDrive), aeropuerto, Metropolitano, horarios punta y tips de seguridad para chilenos.",
};

export default function TransportePage() {
  return (
    <section className="space-y-10 py-10">
      {/* Title */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Transporte</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Lo más práctico es usar <strong>aplicaciones de taxi</strong>. Para
          trayectos definidos, el <strong>Metropolitano</strong> funciona bien.
          Evita tomar taxis directamente en la calle. Aquí lo esencial para
          moverte entre Miraflores, Barranco, San Isidro y el aeropuerto.
        </p>
      </header>

      {/* Quick choices */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Apps recomendadas
          </p>
          <ul className="space-y-1 text-sm">
            <li>Cabify — precios claros, soporte y muy seguro.</li>
            <li>Uber — menos seguro y peores autos.</li>
            <li>Siempre revisa patente y conductor antes de subir.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Horarios punta
          </p>
          <ul className="space-y-1 text-sm">
            <li>El tráfico en Lima es horrible.</li>
            <li>Mañana 7–9 am · Tarde 6–9 pm.</li>
            <li>Viernes y lluvias = más tráfico.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Seguridad
          </p>
          <ul className="space-y-1 text-sm">
            <li>
              Taxi <strong>solo</strong> por app; evita la calle.
            </li>
            <li>Esquina concurrida: guarda el celu.</li>
            <li>Comparte tu viaje y activa “follow my ride”.</li>
          </ul>
        </div>
      </div>

      {/* Airport */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold pb-4">
          Aeropuerto (LIM) → ciudad
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Opciones
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Cabify</strong>: pide desde la zona indicada por la app;
                verifica patente, cuesta desde 55 soles.
              </li>
              <li>
                <strong>Quickllama</strong> pregunta por la parada oficial
                dentro del estacionamiento; cuesta desde 20 soles.
              </li>
              <li>
                <strong>Bus expreso</strong> pregunta por la parada oficial
                dentro del estacionamiento; salidas cada 1 hora, cuesta desde 20
                soles.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Tiempo y costo (aprox.)
            </p>
            <ul className="space-y-1 text-sm">
              <li>Hacia Miraflores/Barranco: 35–70 min según tráfico.</li>
              <li>
                Precio app típico: S/ 20 (para transporte compartido) – 50
                (privado) aprox.
              </li>
              <li>Evita ofertas “de la calle” dentro/fuera del terminal.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Apps: how-to */}
      <div className="space-y-3" id="apps">
        <h2 className="text-lg font-semibold">Moverse con apps</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Configuración
            </p>
            <ul className="space-y-1 text-sm">
              <li>Activa roaming o compra eSIM.</li>
              <li>Agrega método de pago; efectivo también existe.</li>
              <li>Escribe destinos claros (hotel, mall, cruce de avenidas).</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Buenas prácticas
            </p>
            <ul className="space-y-1 text-sm">
              <li>Confirma patente y nombre del conductor.</li>
              <li>No subas si ves otro pasajero no indicado.</li>
              <li>Si dudas, cancela y pide otro. Mejor perder 1 min.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Precios & propina
            </p>
            <ul className="space-y-1 text-sm">
              <li>Tarifa varía por tráfico/lluvia/demanda.</li>
              <li>Propina no es obligatoria, y nadie se la espera.</li>
              <li>No deberían haber peajes en el trayecto.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Metropolitano */}
      <div className="space-y-3" id="metropolitano">
        <h2 className="text-lg font-semibold">
          Metropolitano (sistema de transporte público)
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Qué es
            </p>
            <p className="text-sm">
              Buses rápidos por vía exclusiva (N–S). Útil para evitar tacos en
              horas punta si tu ruta coincide con sus estaciones.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Cómo usar
            </p>
            <ul className="space-y-1 text-sm">
              <li>Compra tarjeta recargable en estaciones.</li>
              <li>Entra por torniquetes; revisa mapa de rutas y expresos.</li>
              <li>Cerca de Miraflores: estaciones 28 de Julio / Benavides.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Consejos
            </p>
            <ul className="space-y-1 text-sm">
              <li>Evita horas punta si vas con equipaje.</li>
              <li>Cuida bolsillos y mochila en andenes llenos.</li>
              <li>Para turismo casual, las app suele ser más cómoda.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rutas comunes */}
      <div className="space-y-3" id="rutas">
        <h2 className="text-lg font-semibold">
          Rutas comunes (tiempos aprox.)
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">Desde Miraflores</p>
            <ul className="space-y-1 text-sm">
              <li>→ Barranco: 10–20 min (en auto).</li>
              <li>→ San Isidro (centro): 10–25 min (en auto).</li>
              <li>→ Centro Histórico: 30–50 min (en auto).</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">Desde Barranco</p>
            <ul className="space-y-1 text-sm">
              <li>→ Miraflores (Kennedy): 10–20 min (en auto).</li>
              <li>→ San Isidro: 15–30 min (en auto).</li>
              <li>→ Aeropuerto: 45–80 min (en auto).</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Tiempos y precios son referenciales; el tráfico limeño puede variar
          bastante por clima, hora, partidos de futbol, conciertos y protestas.
        </p>
      </div>

      {/* Otros medios */}
      <div className="space-y-3" id="otros">
        <h2 className="text-lg font-semibold">Otros medios</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Micros / combis
            </p>
            <p className="text-sm">
              Muy baratas, pero confusas para visitantes y suelen ir llenas. Si
              es tu primera vez, <strong>no recomendado</strong>.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Bicicleta & malecón
            </p>
            <p className="text-sm">
              Para pasear/correr, el malecón es ideal de día. Como transporte
              diario, evalúa tráfico y grandes intersecciones.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Estacionamientos
            </p>
            <p className="text-sm">
              Malls y hoteles suelen tener estacionamiento pagado. En calle,
              fíjate en parquímetros/señalización y evita dejar objetos a la
              vista.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">Primero la seguridad</h3>
          <p className="text-sm text-muted-foreground">
            Revisa las advertencias rápidas antes de salir a patear barrios.
          </p>
        </div>
        <div className="mt-3 flex gap-2 sm:mt-0">
          <Link
            href="/advertencias"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Ver Advertencias
          </Link>
          <Link
            href="/mapa"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Abrir mapa
          </Link>
        </div>
      </div>
    </section>
  );
}
