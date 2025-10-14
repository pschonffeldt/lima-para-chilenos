import HeroSection from "../components/hero-component";
import {
  ThreeWaySectionItem,
  ThreeWaySection,
} from "../components/3way-column-section-component";
import InfoBox from "../components/info-box";
import { CtaBanner } from "../components/cta-component";
import { TwoWaySection } from "../components/2way-column-section-component";

// Copy content
const SECTIONS: ThreeWaySectionItem[] = [
  {
    href: "/introduccion",
    label: "¿Donde te deberías quedar?",
    icon: "👋",
    blurb: [
      "Miraflores — cómoda, caminable, malecón",
      "Barranco — arte y bares, bohemio.",
      "San Isidro — seguro, oficinas y restaurantes top.",
    ],
  },
  {
    href: "/transporte",
    label: "Transporte a la ciudad",
    icon: "🛵",
    blurb: [
      "El tráfico en Lima es horrible.",
      "Salir del aeropuerto puede ser desafiante",
      "Evita taxi de calle y la combis.",
      "Usa los servicios oficiales o apps de transporte.",
    ],
  },
  {
    href: "/comida",
    label: "Pagos & conectividad",
    icon: "🍽️",
    blurb: [
      "Trae USD y habilita tu tarjeta bancaria Chilena.",
      "Cambia un poco de Soles en el aeropuerto",
      "eSIM o roaming, no compres una SIM fisica en Lima",
    ],
  },
];

const COMMUNICATIONS: ThreeWaySectionItem[] = [
  {
    href: "/introduccion",
    label: "Operadores recomendados",
    icon: "📡",
    blurb: [
      "Claro — buena cobertura en zonas céntricas",
      "Entel — alternativa estable",
      "Movistar — muy extendido, señal variable por distrito",
    ],
  },
  {
    href: "/transporte",
    label: "Dónde comprar eSIM",
    icon: "📱",
    blurb: [
      "Mobimatter, marketplace de eSIM",
      "Holafly, segúramente has visto sus comerciales",
      "Maya, no es tan famoso, pero igual es bueno",
    ],
  },
  {
    href: "/comida",
    label: "Tips rápidos",
    icon: "⁉️",
    blurb: [
      "Activa datos/roaming solo si tu plan lo permite",
      "Guarda el QR de eSIM y anota tu número local",
      "Wi-Fi en cafés y malls, usa siempre un VPN",
    ],
  },
];

const MONEY: ThreeWaySectionItem[] = [
  {
    href: "/introduccion#cambio",
    label: "Cambio seguro",
    icon: "💱",
    blurb: [
      "Casas de cambio formales (en locales comerciales).",
      "Casas de cambio informales (en calle).",
      "Evita cambiar montos grandes en público.",
    ],
  },
  {
    href: "/introduccion#dinero",
    label: "Tarjeta & cajeros",
    icon: "💳",
    blurb: [
      "Tarjeta aceptada en la mayoría de locales.",
      "Cajeros de bancos grandes para retirar soles.",
      "Bajas comisiones para tarjetas Chilenas.",
    ],
  },
  {
    href: "/introduccion#yape",
    label: "Yape/Plin (billeteras digitales)",
    icon: "📲",
    blurb: [
      "NO pierdas tiempo, no podrás usar estas Apps.",
      "Tienes que ser Peruano o tener residencia.",
      "En Perú, todos los Peruanos Yapean, los turistas pagan con tarjeta.",
    ],
  },
];

export const ROUTES: ThreeWaySectionItem[] = [
  {
    href: "/barrios/miraflores",
    label: "Miraflores",
    icon: "🌊",
    blurb: [
      "Un buen lugar para quedarte en tu primera visita.",
      "Malecón con parques y cafés cerca.",
    ],
  },
  {
    href: "/barrios/barranco",
    label: "Barranco",
    icon: "🎨",
    blurb: ["Arte y bares, caminable.", "Conexión rápida a Miraflores."],
  },
  {
    href: "/barrios/san-isidro",
    label: "San Isidro",
    icon: "🌳",
    blurb: ["Seguro y tranquilo.", "Restaurantes top y parques amplios."],
  },
];

export const OTHER_TIPS: ThreeWaySectionItem[] = [
  {
    href: "/introduccion#horarios",
    label: "Horarios & costumbres",
    icon: "🕒",
    blurb: [
      "Almuerzo 1–3 pm; cena 8–10 pm.",
      "Restaurantes top piden reserva.",
      "Propina no obligatoria; 10% es bien recibida.",
      "A las rotondas les dicen óvalos.",
    ],
  },
  {
    href: "/introduccion#clima",
    label: "Clima & seguridad ligera",
    icon: "🌤️",
    blurb: [
      "Clima templado con cielos nublados en invierno.",
      "Sol fuerte en verano; bloqueador siempre.",
      "Evita exhibir el celular en esquinas muy concurridas.",
      "Para correr/caminar: malecón de día es tu mejor opción.",
    ],
  },
];

// Metadata
export const metadata = {
  title: "Transporte — Lima para Chilenos",
  description:
    "Cómo moverte en Lima: apps (Uber/Cabify/InDrive), aeropuerto, Metropolitano, horarios punta y tips de seguridad para chilenos.",
};

export default function IntroPage() {
  return (
    <main className="space-y-10 py-10">
      {/* Hero section */}
      <HeroSection
        title="Introducción"
        description={
          <>
            Qué esperar al llegar, cómo orientarte y los atajos para adaptarte
            en horas (no días). Si vienes de 🇨🇱, esta es la guía rápida para
            partir bien.
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
      {/* Essentials upon arrival section */}
      <ThreeWaySection
        srTitle="Esenciales al llegar"
        sectionTitle="Esenciales al llegar"
        items={SECTIONS}
      />
      {/* Arrival checklist section */}
      <InfoBox
        title="Checklist al aterrizar"
        variant="plain"
        items={[
          <>Conéctate: compra eSIM o activa plan internacional. </>,
          <>Plata: cambia un poco a soles o usa cajero de banco grande.</>,
          <>
            Traslado: pide taxi por app; destino Miraflores/Barranco/San Isidro.
          </>,
          <>Ubícate: malecón = norte-sur; vía expresa = eje central.</>,
          <>Cuídate: Guarda el teléfono en esquinas muy concurridas.</>,
        ]}
      />
      {/* Communications section */}
      <ThreeWaySection
        srTitle="Conectividad"
        sectionTitle="Conectividad"
        items={COMMUNICATIONS}
      />

      {/* Money and payments section */}
      <ThreeWaySection
        srTitle="Dinero, pagos y cambios"
        sectionTitle="Dinero, pagos y cambios"
        items={MONEY}
      />

      {/* Rutas rection */}
      <ThreeWaySection
        srTitle="Barrios recomendados para alojar"
        sectionTitle="Barrios recomendados para alojar"
        items={ROUTES}
      />

      {/* Horarios & costumbres section  */}
      <TwoWaySection
        srTitle="Horarios & costumbres"
        sectionTitle="Horarios & costumbres"
        items={OTHER_TIPS}
      />

      {/* CTA section */}
      <CtaBanner
        title="Primero la seguridad"
        description="Revisa las advertencias rápidas antes de salir a patear barrios."
        actions={[
          {
            href: "/advertencias",
            label: "Ver Advertencias",
            variant: "primary",
          },
          { href: "/mapa", label: "Abrir mapa", variant: "dark" },
        ]}
      />
    </main>
  );
}
