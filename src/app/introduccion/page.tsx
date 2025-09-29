import Link from "next/link";

export const metadata = {
  title: "Introducción — Lima para Chilenos",
  description:
    "Primeros pasos para adaptarte rápido en Lima: barrios base, conectividad (SIM/eSIM), dinero (cambio, tarjetas, Yape/Plin), horarios y costumbres.",
};

export default function IntroPage() {
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

      {/* Quick facts */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Zonas base
          </p>
          <ul className="space-y-1 text-sm">
            <li>Miraflores — cómoda, caminable, malecón.</li>
            <li>Barranco — arte y bares, bohemio.</li>
            <li>San Isidro — seguro, restaurantes top.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Transporte rápido
          </p>
          <ul className="space-y-1 text-sm">
            <li>Taxi por app (Uber/Cabify/InDrive).</li>
            <li>Metropolitano para tramos fijos.</li>
            <li>Evita taxi de calle.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Plata & conectividad
          </p>
          <ul className="space-y-1 text-sm">
            <li>Cambia en casas formales; evita calle.</li>
            <li>Tarjeta ok + algo de soles (S/.).</li>
            <li>SIM/eSIM: Claro, Entel o Movistar.</li>
          </ul>
        </div>
      </div>

      {/* Checklist al aterrizar */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">Checklist al aterrizar</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm">
          <li>Conéctate: compra SIM/eSIM o activa plan internacional.</li>
          <li>Plata: cambia un poco a soles o usa cajero de banco grande.</li>
          <li>
            Traslado: pide taxi por app; destino Miraflores/Barranco/San Isidro.
          </li>
          <li>Ubícate: malecón = norte-sur; vía expresa = eje central.</li>
          <li>Guarda el celu a la vista en esquinas muy concurridas.</li>
        </ol>
      </div>

      {/* Conectividad */}
      <div id="conectividad" className="space-y-3">
        <h2 className="text-lg font-semibold">Conectividad (SIM/eSIM)</h2>
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
              Dónde comprar
            </p>
            <ul className="space-y-1 text-sm">
              <li>Centros comerciales y tiendas oficiales.</li>
              <li>Quioscos autorizados en avenidas principales.</li>
              <li>eSIM online en sitios oficiales (lleva pasaporte).</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Tips rápidos
            </p>
            <ul className="space-y-1 text-sm">
              <li>Activa datos/roaming solo si tu plan lo permite.</li>
              <li>Guarda el QR de eSIM y anota tu número local.</li>
              <li>Wi-Fi decente en cafés y malls; pide la clave.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dinero */}
      <div id="dinero" className="space-y-3">
        <h2 className="text-lg font-semibold">
          Dinero: cambio, tarjetas y Yape/Plin
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Cambio seguro
            </p>
            <ul className="space-y-1 text-sm">
              <li>Casas de cambio formales (no calle).</li>
              <li>Consulta tipo de cambio antes de ir.</li>
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
              <li>Pregunta por comisión y cupos.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Yape/Plin (apps locales)
            </p>
            <ul className="space-y-1 text-sm">
              <li>Útiles en tiendas pequeñas y delivery.</li>
              <li>No todos los turistas pueden activarlas; lleva efectivo.</li>
              <li>
                Si un chileno local te acompaña, puede pagar y tú reembolsas.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barrios para alojar */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">
          Barrios recomendados para alojar
        </h2>
        <ul className="space-y-2">
          {[
            {
              name: "Miraflores",
              note: "Base cómoda para primera visita: malecón, parques, cafés.",
              href: "/barrios/miraflores",
            },
            {
              name: "Barranco",
              note: "Arte y bares, caminable; conexión rápida a Miraflores.",
              href: "/barrios/barranco",
            },
            {
              name: "San Isidro",
              note: "Seguro y tranquilo; restaurantes top y parques amplios.",
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

      {/* Horarios & costumbres */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Horarios & costumbres</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <ul className="space-y-1 text-sm">
              <li>Almuerzo 1–3 pm; cena 8–10 pm.</li>
              <li>Restos top piden reserva (fines de semana).</li>
              <li>Propina no obligatoria; 10% es bien recibida.</li>
              <li>En direcciones usan referencias (esquina, cuadra, cruce).</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <ul className="space-y-1 text-sm">
              <li>Clima templado con garúa en invierno.</li>
              <li>Sol fuerte en verano; bloqueador siempre.</li>
              <li>Evita exhibir el celular en esquinas muy concurridas.</li>
              <li>Para correr/caminar: malecón de día es top.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Do / Don't */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Haz / Evita</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">Haz</p>
            <ul className="space-y-1 text-sm">
              <li>Pide taxi por app y verifica patente/conductor.</li>
              <li>Lleva algo de efectivo (S/.) para emergencias.</li>
              <li>Cambia en casa formal y guarda boleta.</li>
              <li>Usa malecón y parques de día para pasear o trabajar.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">Evita</p>
            <ul className="space-y-1 text-sm">
              <li>Tomar taxi de calle o subir sin precio claro.</li>
              <li>Mostrar el celu en esquinas/semáforos concurridos.</li>
              <li>Cambiar plata con cambistas informales.</li>
              <li>Caminar por zonas poco iluminadas de noche.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next steps */}
      <div className="rounded-xl border p-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold">¿Listo para moverte?</h3>
          <p className="text-sm text-muted-foreground">
            Revisa transporte y advertencias antes de salir.
          </p>
        </div>
        <div className="mt-3 flex gap-2 sm:mt-0">
          <Link
            href="/transporte"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Ir a Transporte
          </Link>
          <Link
            href="/advertencias"
            className="inline-flex rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/80"
          >
            Ver Advertencias
          </Link>
        </div>
      </div>
    </section>
  );
}
