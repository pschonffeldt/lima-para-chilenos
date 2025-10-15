"use client";

import * as React from "react";
import {
  FilterConfig,
  ChipFilterBoard,
} from "../components/filter-board-component";
import HeroSection from "../components/hero-component";
import { ThreeWaySection } from "../components/3way-column-section-component";
import { PREPARTY_PRIMER } from "../lib/copy-content";

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

export default function CarretesPage() {
  return (
    <section className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Carretes"
        description={
          <>
            Si vienes a Lima a carretiar, no necesitas cruzar toda la ciudad. La
            mayor parte de la vida nocturna —bares, terrazas, clubes y rooftops—
            se concentra en <strong>Miraflores</strong>,{" "}
            <strong>Barranco</strong> y <strong>San Isidro</strong>.
          </>
        }
        actions={[
          {
            href: "/introduccion",
            label: "Empezar por la Introducción",
            variant: "primary",
          },
          { href: "/mapa", label: "Ver mapa con destinos", variant: "dark" },
        ]}
      />

      {/* Introducción explicativa */}
      <ThreeWaySection
        srTitle="¿Qué deberías considerar antes de ir de carrete en Lima?"
        sectionTitle="¿Qué deberías considerar antes de ir de carrete en Lima?"
        items={PREPARTY_PRIMER}
        defaultCtaVariant="primary"
      />

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
