// ---- URL template types (kept here so data is well-typed) ----
export type GoogleMapsUrl =
  | `https://www.google.com/maps${string}`
  | `https://maps.app.goo.gl/${string}`
  | `https://goo.gl/maps/${string}`;

export type SocialMediaUrl =
  | `https://www.instagram.com/${string}`
  | `https://instagram.com/${string}`
  | `https://www.facebook.com/${string}`
  | `https://facebook.com/${string}`
  | `https://fb.me/${string}`
  | `https://www.tiktok.com/${string}`
  | `https://tiktok.com/${string}`;

export type WebsiteUrl = `http${"s" | ""}://${string}`;

// ---- Domain types ----
export type Location = "Barranco" | "Miraflores" | "San Isidro" | "Centro";
export type Price = "Economico" | "Promedio" | "Fino";

export type PartiesLima = {
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

// Parties list object
export const PARTIES_LIMA: PartiesLima[] = [
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
