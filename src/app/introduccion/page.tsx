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
          horas (no días).
        </p>
        <p className="max-w-[70ch] text-muted-foreground">
          Si vienes de 🇨🇱, esta es la guía rápida para partir bien.
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
            <li>San Isidro — seguro, oficinas y restaurantes top.</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Transporte rápido
          </p>
          <ul className="space-y-1 text-sm">
            <li>Taxi por app (El más seguro es Cabify).</li>
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

      {/* Checklist al aterrizar */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">Checklist al aterrizar</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm">
          <li>Conéctate: compra eSIM o activa plan internacional.</li>
          <li>Plata: cambia un poco a soles o usa cajero de banco grande.</li>
          <li>
            Traslado: pide taxi por app; destino Miraflores/Barranco/San Isidro.
          </li>
          <li>Ubícate: malecón = norte-sur; vía expresa = eje central.</li>
          <li>Cuídate: Guarda el teléfono en esquinas muy concurridas.</li>
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
              Dónde comprar eSIM
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="https://mobimatter.com/"
                  className="hover:underline text-primary"
                >
                  Mobimatter
                </a>
                , marketplace de eSIM.
              </li>
              <li>
                <a
                  href="https://esim.holafly.com//"
                  className="hover:underline text-primary"
                >
                  Holafly
                </a>
                , segúramente has visto sus comerciales.
              </li>
              <li>
                <a
                  href="https://maya.net//"
                  className="hover:underline text-primary"
                >
                  Maya
                </a>
                , no es tan famoso, pero igual es bueno.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Tips rápidos
            </p>
            <ul className="space-y-1 text-sm">
              <li>Activa datos/roaming solo si tu plan lo permite.</li>
              <li>Guarda el QR de eSIM y anota tu número local.</li>
              <li>
                Wi-Fi en cafés y malls, usa siempre un{" "}
                <span className="font-semibold">VPN</span>.
              </li>
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
              <li>Casas de cambio informales (en calle).</li>
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

      {/* Barrios para alojar */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">
          Barrios recomendados para alojar
        </h2>
        <ul className="space-y-2">
          {[
            {
              name: "Miraflores",
              note: "Un buen lugar para quedarte en tu primera visita: el malecón, con parques y cafés cerca.",
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
              <li>Restaurantes top piden reserva.</li>
              <li>Propina no obligatoria; 10% es bien recibida.</li>
              <li>A las rotondas les dicen óvalos</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <ul className="space-y-1 text-sm">
              <li>Clima templado con cielos nublados en invierno.</li>
              <li>Sol fuerte en verano; bloqueador siempre.</li>
              <li>Evita exhibir el celular en esquinas muy concurridas.</li>
              <li>Para correr/caminar: malecón de día es tu mejor opción.</li>
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
              <li>Pide taxi por Cabify y verifica patente/conductor.</li>
              <li>Lleva algo de efectivo (S/.) para emergencias.</li>
              <li>No comas ceviche todos los días, te vas a enfermar.</li>
              <li>Usa malecón y parques de día para pasear o trabajar.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-sm font-medium">Evita</p>
            <ul className="space-y-1 text-sm">
              <li>Tomar taxi de calle o subir sin precio claro.</li>
              <li>Mostrar el celu en esquinas/semáforos concurridos.</li>
              <li>Comprar droga en la calle, esa es la mala.</li>
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
