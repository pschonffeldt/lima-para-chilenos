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
        <h1 className="text-3xl font-bold tracking-tight">Introducción</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Qué esperar al llegar, cómo orientarte y los atajos para adaptarte en
          horas (no días). Si vienes de 🇨🇱, esta es la guía rápida para partir
          bien.
        </p>
      </header>

      {/* Quick choices */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Zonas base
          </p>
          <ul className="space-y-1 text-sm">
            <li>Miraflores — cómoda, caminable, malecón.</li>
            <li>Barranco — arte y bares, bohemio.</li>
            <li>San Isidro — seguro, oficinas y restaurantes top.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Transporte rápido
          </p>
          <ul className="space-y-1 text-sm">
            <li>El tráfico en Lima es horrible.</li>
            <li>Metropolitano (micro) para tramos fijos.</li>
            <li>Evita taxi de calle y la combis.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Pagos & conectividad
          </p>
          <ul className="space-y-1 text-sm">
            <li>Cambia en la calle.</li>
            <li>Trae USD y habilita tu tarjeta bancaria Chilena.</li>
            <li>eSIM o roaming, no compres una SIM fisica en Lima</li>
          </ul>
        </div>
      </div>

      {/* Checklist */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold pb-4">Checklist al aterrizar</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <ul className="space-y-1 text-sm">
              <li>Conéctate: compra eSIM o activa plan internacional.</li>
              <li>
                Plata: cambia un poco a soles o usa cajero de banco grande.
              </li>
              <li>
                Traslado: pide taxi por app; destino Miraflores/Barranco/San
                Isidro.
              </li>
              <li>Ubícate: malecón = norte-sur; vía expresa = eje central.</li>
              <li>Cuídate: Guarda el teléfono en esquinas muy concurridas.</li>
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
              Operadores recomendados
            </p>
            <ul className="space-y-1 text-sm">
              <li>Claro — buena cobertura en zonas céntricas.</li>
              <li>Entel — alternativa estable.</li>
              <li>Movistar — muy extendido, señal variable por distrito.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Dónde comprar eSIM
            </p>
            <ul className="space-y-1 text-sm">
              <li>Mobimatter, marketplace de eSIM.</li>
              <li>Holafly, segúramente has visto sus comerciales.</li>
              <li>Maya, no es tan famoso, pero igual es bueno.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Tips rápidos
            </p>
            <ul className="space-y-1 text-sm">
              <li>Activa datos/roaming solo si tu plan lo permite.</li>
              <li>Guarda el QR de eSIM y anota tu número local.</li>
              <li>Wi-Fi en cafés y malls, usa siempre un VPN.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Metropolitano */}
      <div className="space-y-3" id="metropolitano">
        <h2 className="text-lg font-semibold">
          Dinero: cambio, tarjetas y Yape/Plin
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Dinero: cambio, tarjetas y Yape/Plin
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Cambio seguro
            </p>
            <ul className="space-y-1 text-sm">
              <li>Casas de cambio informales (en calle).</li>
              <li>Casas de cambio informales (en calle).</li>
              <li>Evita cambiar montos grandes en público.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Tarjeta & cajeros
            </p>
            <ul className="space-y-1 text-sm">
              <li>Tarjeta aceptada en la mayoría de locales.</li>
              <li>Cajeros de bancos grandes para retirar soles.</li>
              <li>Bajas comisiones para tarjetas Chilenas.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Yape/Plin (billeteras digitales)
            </p>
            <ul className="space-y-1 text-sm">
              <li>NO pierdas tiempo, no podrás usar estas Apps.</li>
              <li>Tienes que ser Peruano o tener residencia.</li>
              <li>En Perú, todos pueden Yapear, literal.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rutas comunes */}
      <div className="space-y-3" id="rutas">
        <h2 className="text-lg font-semibold">
          Barrios recomendados para alojar
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">Miraflores</p>
            <ul className="space-y-1 text-sm">
              <li>
                → Un buen lugar para quedarte en tu primera visita: el malecón,
                con parques y cafés cerca. .
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">Barranco</p>
            <ul className="space-y-1 text-sm">
              <li>
                → Arte y bares, caminable; conexión rápida a Miraflores. .
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">San Isidro</p>
            <ul className="space-y-1 text-sm">
              <li>
                → Seguro y tranquilo; restaurantes top y parques amplios. .
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Otros medios */}
      <div className="space-y-3" id="otros">
        <h2 className="text-lg font-semibold">Horarios & costumbres</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Almuerzo 1–3 pm; cena 8–10 pm.
            </p>
            <p className="text-sm">Restaurantes top piden reserva.</p>
            <p className="text-sm">
              Propina no obligatoria; 10% es bien recibida.
            </p>
            <p className="text-sm">A las rotondas les dicen óvalos</p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Clima templado con cielos nublados en invierno.
            </p>
            <p className="text-sm">Sol fuerte en verano; bloqueador siempre.</p>
            <p className="text-sm">
              Evita exhibir el celular en esquinas muy concurridas.
            </p>
            <p className="text-sm">
              Para correr/caminar: malecón de día es tu mejor opción.
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
