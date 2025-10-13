"use client";

import Link from "next/link";
import * as React from "react";
import {
  FilterConfig,
  ChipFilterBoard,
} from "../components/filter-board-component";

// Barrios object
const BARRIOS = [
  {
    name: "Barranco — Terrazas & Clubes",
    icon: "🎶",
    note: "Zona bohemia con bares de autor, música en vivo y clubes pequeños. Ideal viernes/sábado.",
    tags: ["terrazas", "club", "reggaeton", "cocteleria"],
    href: "/carretes/barranco",
  },
  {
    name: "Miraflores — Rooftops & Pubs",
    icon: "🌆",
    note: "Rooftops con vista al mar y pubs para pre y after. Fácil combinar con cena.",
    tags: ["rooftop", "pub", "cerveza-artesanal", "vista-mar"],
    href: "/carretes/miraflores",
  },
  {
    name: "San Isidro — After-office",
    icon: "🍸",
    note: "Barras de coctelería y ambiente adulto. Ideal para jueves/viernes.",
    tags: ["after-office", "cocteleria", "wine-bar"],
    href: "/carretes/san-isidro",
  },
];

// Parties links types
type GoogleMapsUrl =
  | `https://www.google.com/maps${string}`
  | `https://maps.app.goo.gl/${string}`
  | `https://goo.gl/maps/${string}`;

type SocialMediaUrl =
  | `https://www.instagram.com/${string}`
  | `https://instagram.com/${string}`
  | `https://www.facebook.com/${string}`
  | `https://facebook.com/${string}`
  | `https://fb.me/${string}`
  | `https://www.tiktok.com/${string}`
  | `https://tiktok.com/${string}`;

type WebsiteUrl = `http${"s" | ""}://${string}`; // allows http:// and https://

// Start of Chips

type PartiesLima = {
  id: string;
  title: string;
  description: string;
  price: Price;
  location: Location[];
  googleMapsUrl?: GoogleMapsUrl;
  socialMedia?: SocialMediaUrl;
  website?: WebsiteUrl;
  tips?: string[];
};

const PARTIES_LIMA: PartiesLima[] = [
  {
    id: "Tardeo",
    title: "Tardeo",
    description:
      "Para partir temprano y quedar prendido: pop/latino noventero y perreo piola. Ambiente buena onda; llega antes de las 6 para poder entrar.",
    price: "Promedio",
    location: ["Barranco"],
    googleMapsUrl: "https://maps.app.goo.gl/eDKvY53tMcu2m4bY6",
    socialMedia: "https://www.instagram.com/tardeo.oficial",
    website: "https://tardeooficial.pe/",
    tips: [
      "Es formato tarde-noche: revisa el post del día para el horario (suelen anunciar 6–11 pm).",
      "La dirección suele comunicarse como Bolognesi sector Barranco; confirma en stories el acceso del día.",
      "Ojo con la fila: si vas en grupo, coordina punto de encuentro fuera para entrar juntos.",
    ],
  },
  {
    id: "Damian",
    title: "Damian",
    description:
      "Club con música electrónica/house y reggaetón. Aforo acotado; si no estás en lista, llega temprano o evalúa mesa/botella.",
    price: "Promedio",
    location: ["Barranco"],
    googleMapsUrl: "https://maps.app.goo.gl/mcd3JDnwe8Y9mDaCA",
    socialMedia: "https://www.instagram.com/damian.club",
    website:
      "https://hotspot.us5.list-manage.com/subscribe?u=bbe11d3e0d5cfe9de6101ffba&id=825da919eb",
    tips: [
      "Ubicación de referencia: Av. República de Panamá 240, Barranco.",
      "Revisa el line-up del día en el IG; suelen anunciar invitados y temática.",
      "Si hay RSVP/lista en bio, hazlo antes de las 8–9 pm para evitar sorpresas en puerta.",
    ],
  },
  {
    id: "Kova",
    title: "Kova club",
    description:
      "Reggaetón y clásicos para bailar sin apretarse. Ideal para cumpleaños y grupos: mesas, botellas y dress code relajado.",
    price: "Promedio",
    location: ["Miraflores"],
    googleMapsUrl: "https://maps.app.goo.gl/zgUWfRRwHo9x4rgD9",
    socialMedia: "https://www.instagram.com/kocaclublima",
    tips: [
      "Los jueves suelen tener ingreso libre y promos hasta las 22:00; aprovecha el happy hour.",
      "Dirección que comunican: Héroes de Tarapacá 177 (verifica en el post del día).",
      "Si vas en grupo grande, consulta por mesas con anticipación vía DM.",
    ],
  },
  {
    id: "Jarango",
    title: "Jarango",
    description:
      "Formato bar-club. Bailable latino y pop para cantar a todo pulmón. Buen spot para ir en grupo.",
    price: "Promedio",
    location: ["Miraflores"],
    googleMapsUrl: "https://maps.app.goo.gl/cPANUyUDqeUwR2Wu6",
    socialMedia: "https://www.instagram.com/jarangomiraflores",
    website: "https://grupobros.pe/locales/jarango/",
    tips: [
      "Sábados suelen activar temprano en modo ‘tardeo’; útil para pre antes de otro club.",
      "Si quieres mesa, coordina por web/DM porque los fines de semana se llena.",
      "Revisa stories por listas/happy hour del día.",
    ],
  },
  {
    id: "Bulbo",
    title: "Casa Bulbo",
    description:
      "Casa-club con música electrónica. Según la fecha puede tener DJs locales o internacionales. Se llena rápido.",
    price: "Promedio",
    location: ["Barranco"],
    googleMapsUrl: "https://maps.app.goo.gl/ZexKGiJHZ7P1qk4L8",
    socialMedia: "https://www.instagram.com/casabulbo/",
    tips: [
      "Abren típicamente de miércoles a sábado, 8 pm–3 am; revisa agenda en su IG.",
      "Reservas y QRs por DM; coordina antes si vas en grupo.",
      "Para eventos con DJs, revisa horario de apertura de puertas (a veces 23:00) y llega con tiempo.",
    ],
  },
  {
    id: "Valetodo",
    title: "Valetodo Downtown",
    description:
      "El más icónico club LGBTQ+ en Barranco: shows drag, karaoke y perreo/pop toda la noche. Ambiente muy prendido.",
    price: "Promedio",
    location: ["Barranco"],
    googleMapsUrl: "https://maps.app.goo.gl/e4Jpo5QGGxohf6QA8",
    socialMedia: "https://www.instagram.com/valetododowntownpe/",
    website:
      "https://linktr.ee/somasvala?fbclid=PAZXh0bgNhZW0CMTEAAafTjt_NWye51-5AXsnAw-oa1IOQwqIO_iGJl8a2nPBwMWTRrM5nIOr8sja1DQ_aem_rGds0lCkXIe752qF8Qi2lg",
    tips: [
      "Los shows drag tienen horarios; mira el post del evento para no perderte el principal.",
      "Abierto hasta muy tarde (finde 3–5 am).",
      "Entradas y eventos se centralizan en su link en bio.",
    ],
  },
  {
    id: "Baalsaal",
    title: "Baalsaal",
    description:
      "Sede limeña del club alemán: techno/house con line-ups seleccionados. Es un club pequeño para público más under.",
    price: "Economico",
    location: ["Centro"],
    googleMapsUrl: "https://maps.app.goo.gl/uJ2xRbCiwQCTa2C56",
    socialMedia: "https://www.instagram.com/baalsaal.club.lima/",
    website: "https://www.baalsaal.info/es/baalsaal-lima",
    tips: [
      "Dirección: Jr. Camaná 856, Centro de Lima (confirma en el evento del día).",
      "Políticas claras: no VIP y ‘all equals’; respeta el dancefloor.",
      "Para horarios/line-up compra de entradas, revisa el post del evento.",
    ],
  },
];

// ---  types & data ---
type Location = "Barranco" | "Miraflores" | "San Isidro" | "Centro";
type Price = "Economico" | "Promedio" | "Fino";

// Chips values
const PRICE_CHIPS: Array<{
  label: "Todos" | Price;
  value: "Todos" | Price;
}> = [
  { label: "Todos", value: "Todos" },
  { label: "Economico", value: "Economico" },
  { label: "Promedio", value: "Promedio" },
  { label: "Fino", value: "Fino" },
];

const LOCATION_CHIPS: Array<{ label: string; value: Location | "Todos" }> = [
  { label: "Todos", value: "Todos" },
  { label: "Miraflores", value: "Miraflores" },
  { label: "Barranco", value: "Barranco" },
  { label: "San Isidro", value: "San Isidro" },
];

// Filter configs wired to ChipFilterBoard
const PRICE_FILTER: FilterConfig<PartiesLima> = {
  id: "price",
  label: "Precio",
  options: PRICE_CHIPS,
  defaultValue: "Todos",
  isMatch: (item, selected) => selected === "Todos" || item.price === selected,
};

const LOCATION_FILTER: FilterConfig<PartiesLima> = {
  id: "location",
  label: "Ubicación",
  options: LOCATION_CHIPS,
  defaultValue: "Todos",
  isMatch: (item, selected) =>
    selected === "Todos" || item.location.includes(selected as Location),
};

// End of Chips

export default function CarretesPage() {
  return (
    <section className="space-y-10 py-10">
      {/* Título */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Carretes</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          Si vienes a Lima a carretiar, no necesitas cruzar toda la ciudad. La
          mayor parte de la vida nocturna —bares, terrazas, clubes y rooftops—
          se concentra en <strong>Miraflores</strong>, <strong>Barranco</strong>{" "}
          y <strong>San Isidro</strong>.
        </p>
      </header>

      {/* Introducción explicativa */}
      <div className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">
          ¿Qué deberías considerar antes de ir de carrete en Lima?
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Zonas para carretiar
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Miraflores</strong>: rooftops, pubs, clubes y afters
                tranquilos.
              </li>
              <li>
                <strong>Barranco</strong>: terrazas, bares con música y clubes.
              </li>
              <li>
                <strong>San Isidro</strong>: after-office y coctelería fina.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Traslados y seguridad
            </p>
            <ul className="space-y-1 text-sm">
              <li>Usa apps (Cabify/Uber) ida y vuelta.</li>
              <li>Define punto de recojo antes de cerrar la cuenta.</li>
              <li>Evita caminar tramos largos de noche.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Consejos rápidos
            </p>
            <ul className="space-y-1 text-sm">
              <li>Necesitarás reservas para los lugares populares.</li>
              <li>Dress code casual; viste lo mismo que en Stgo.</li>
              <li>Hidrátate y cuida tus pertenencias.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barrios */}
      <ul className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {BARRIOS.map((barrio) => {
          return (
            <li
              key={barrio.name}
              className="flex flex-col rounded-xl border p-5"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border bg-background text-lg">
                  {barrio.icon}
                </span>
                <h3 className="text-base font-semibold">{barrio.name}</h3>
              </div>

              {/* Usa este campo para describir el tipo de noche: música, ambiente, rango de precios */}
              <p className="text-sm text-muted-foreground">{barrio.note}</p>

              {/* Etiquetas como: “rooftop”, “reggaetón”, “coctelería”, “cerveza artesanal”, “club”, “after-office” */}
              <div className="mt-3 flex flex-wrap gap-1">
                {barrio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground lowercase first-letter:uppercase"
                  >
                    {String(tag).replaceAll("-", " ")}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <Link
                  href={barrio.href}
                  className="text-sm text-primary underline-offset-4 hover:underline"
                  aria-label={`Ver detalles de ${barrio.name}`}
                >
                  Ver detalles →
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <h2 className="text-3xl font-bold tracking-tight">
        ¿Donde carretiar en Lima?
      </h2>

      {/* PArties Cards with filter */}
      <ChipFilterBoard
        items={PARTIES_LIMA}
        filters={[LOCATION_FILTER, PRICE_FILTER]}
      >
        {(filtered) => (
          <div className="mb-6 grid gap-3">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {filtered.map((parties) => (
                <article
                  key={parties.id}
                  className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-md transition"
                >
                  {/* Title */}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {parties.title}
                    </h3>
                  </div>

                  {/* Top tags */}
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-sm text-gray-700">Ubicación:</h3>
                      <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                        {parties.location}
                      </span>
                    </div>

                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-sm text-gray-700">Precio:</h3>

                      <span
                        key={parties.id}
                        className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground lowercase first-letter:uppercase"
                      >
                        {parties.price.replaceAll("-", " ")}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li> {parties.description}</li>
                  </ul>

                  {/* Tips */}
                  <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-indigo-50/50 p-6">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Recomendaciones
                    </h3>
                    {parties.tips && (
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        {parties.tips.map((n, i) => (
                          <li key={i}>• {n}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Links */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {parties.googleMapsUrl && (
                      <a
                        href={parties.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-white/80"
                      >
                        Ver ubicación
                      </a>
                    )}

                    {parties.socialMedia && (
                      <a
                        href={parties.socialMedia}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-white/80"
                      >
                        Ver perfil en RRSS
                      </a>
                    )}

                    {parties.website && (
                      <a
                        href={parties.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-white/80"
                      >
                        Visitar website
                      </a>
                    )}
                  </div>
                </article>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
                  No hay resultados con los filtros actuales.
                </div>
              )}
            </div>
          </div>
        )}
      </ChipFilterBoard>
      <div className="h-9"></div>
    </section>
  );
}
