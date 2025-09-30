import Link from "next/link";

export const metadata = {
  title: "Advertencias — Lima para Chilenos",
  description:
    "Consejos de seguridad, estafas comunes, zonas y horarios a evitar, cajeros, apps confiables y números de emergencia en Lima.",
};

export default function AdvertenciasPage() {
  return (
    <section className="space-y-10 py-10">
      {/* Title */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Advertencias</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Reglas simples para moverte tranqui: qué evitar, cómo usar efectivo y
          apps, y qué hacer si algo sale mal. Enfocado en Miraflores, Barranco y
          San Isidro.
        </p>
      </header>

      {/* Antes de salir */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">Antes de salir</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            ✅ Taxi <strong>por app</strong>. Evita tomarlo en la calle.
          </li>
          <li>
            ✅ Lleva <strong>solo</strong> lo necesario; guarda pasaporte en el
            alojamiento (usa copia digital).
          </li>
          <li>
            ✅ Celular guardado en esquinas/semáforos y al subir/bajar del auto.
          </li>
          <li>
            ✅ Define un <em>punto de recojo</em> seguro para volver (parque,
            hotel, mall).
          </li>
        </ul>
      </div>

      {/* Estafas comunes */}
      <div id="estafas" className="space-y-3">
        <h2 className="text-lg font-semibold">
          Estafas comunes (y cómo evitarlas)
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Taxis informales
            </p>
            <ul className="space-y-1 text-sm">
              <li>Evita “ofertas” de taxi en la calle/aeropuerto.</li>
              <li>
                Usa Cabify/Uber y verifica la{" "}
                <strong>patente & conductor</strong>.
              </li>
              <li>Si no te cuadra, cancela y pide otro.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Cambio de dinero
            </p>
            <ul className="space-y-1 text-sm">
              <li>No hay problema en cambiar USD en la calle.</li>
              <li>Cuenta y guarda el dinero sin hacerlo a la vista.</li>
              <li>Evita montos grandes en público.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Distracciones
            </p>
            <ul className="space-y-1 text-sm">
              <li>Empujones o “derrame” para distraer.</li>
              <li>No dejes el celu sobre la mesa cerca de la calle.</li>
              <li>Usa bolsos que cierren y llévalos al frente.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Zonas y horarios */}
      <div id="zonas" className="space-y-3">
        <h2 className="text-lg font-semibold">Zonas y horarios</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">De día</p>
            <ul className="space-y-1 text-sm">
              <li>
                Malecón, parques y zonas turísticas: ok con precauciones
                básicas.
              </li>
              <li>
                Centro Histórico: preferible en tour o con plan claro; vuelve en
                app.
              </li>
              <li>Si llevas cámara, usa correa.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">De noche</p>
            <ul className="space-y-1 text-sm">
              <li>Prefiere calles iluminadas y concurridas.</li>
              <li>
                Evita caminar largas distancias; usa app desde la puerta del
                local.
              </li>
              <li>Define punto de recojo antes de pagar la cuenta.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cajeros y pagos */}
      <div id="cajeros" className="space-y-3">
        <h2 className="text-lg font-semibold">Cajeros, tarjetas y efectivo</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Cajeros (ATMs)
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                Usa ATMs <strong>dentro</strong> de malls/bancos/hoteles.
              </li>
              <li>Cubre el teclado y guarda el dinero.</li>
              <li>Evita retirar montos grandes; mejor varios chicos.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Tarjetas & apps
            </p>
            <ul className="space-y-1 text-sm">
              <li>Tarjeta aceptada en casi todas partes</li>
              <li>Lleva algo de S/ para imprevistos.</li>
              <li>Activa alertas de tu banco y revisa movimientos.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Efectivo
            </p>
            <ul className="space-y-1 text-sm">
              <li>No muestres fajos y lleves todo junto.</li>
              <li>Guarda una tarjeta de “reserva” separada del resto.</li>
              <li>Evita contar dinero en la calle.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Qué hacer si… */}
      <div id="que-hacer" className="space-y-3">
        <h2 className="text-lg font-semibold">Qué hacer si…</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">
              Te roban el celular/cartera
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Busca un lugar seguro.</li>
              <li>
                Bloquea líneas y sesiones (Google/Apple, banco, WhatsApp).
              </li>
              <li>Llama a la policía y pide constancia para el seguro.</li>
              <li>Rastreo: solo si es seguro y con apoyo policial.</li>
            </ol>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">
              Tienes una urgencia médica
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>
                Si es grave, llama al <strong>SAMU 106</strong>{" "}
                (ambulancia/teleasistencia).
              </li>
              <li>
                Indica dirección de referencia (cruce de avenidas/punto
                notable).
              </li>
              <li>Contacta a tu seguro de viaje y sigue sus indicaciones.</li>
              <li>Si puedes, anda a la Clinica Delgado, es de las mejores.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Números útiles */}
      <div id="emergencias" className="space-y-3">
        <h2 className="text-lg font-semibold">Números de emergencia</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Policía Nacional del Perú
            </p>
            <p className="text-sm">
              Emergencias: <strong>105</strong>
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              SAMU (ambulancia)
            </p>
            <p className="text-sm">
              Urgencias médicas: <strong>106</strong>
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Bomberos
            </p>
            <p className="text-sm">
              Incendios/rescate: <strong>116</strong>
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Ten a mano también el número de tu <strong>seguro</strong>,
          alojamiento y un contacto local. Guarda la dirección de tu hotel en
          notas.
        </p>
        <p className="text-sm text-muted-foreground">
          Además de Policías, verás a los llamados Serenazgos, son algo así como
          los seguritos municipales.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">Muévete con plan</h3>
          <p className="text-sm text-muted-foreground">
            Abre el{" "}
            <Link href="/mapa" className="underline underline-offset-4">
              mapa
            </Link>{" "}
            y revisa{" "}
            <Link href="/transporte" className="underline underline-offset-4">
              Transporte
            </Link>{" "}
            para volver seguro.
          </p>
        </div>
        <div className="mt-3 flex gap-2 sm:mt-0">
          <Link
            href="/introduccion"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Ver Introducción
          </Link>
          <Link
            href="/barrios"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Ver Barrios
          </Link>
        </div>
      </div>
    </section>
  );
}
