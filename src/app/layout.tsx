import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santiago a Lima — Guía para descubrir la capital peruana",
  description:
    "Consejos prácticos para viajar de Santiago a Lima: barrios (Miraflores, Barranco, Centro), seguridad, transporte, costos, cambio de moneda, SIM, y gastronomía (¡ceviche!).",
  keywords: [
    "Santiago a Lima",
    "Lima para chilenos",
    "guía de viaje Lima",
    "qué hacer en Lima",
    "Miraflores",
    "Barranco",
    "Costa Verde",
    "gastronomía peruana",
    "seguridad en Lima",
    "transporte en Lima",
    "cambio de moneda",
    "chip SIM Perú",
  ],
  alternates: {
    canonical: "/santiago-a-lima",
  },
  openGraph: {
    title: "Santiago a Lima — Guía para descubrir la capital peruana",
    description:
      "Todo lo esencial para tu viaje: barrios, transporte, seguridad, costos y comida imperdible.",
    url: "/santiago-a-lima",
    siteName: "Lima para chilenos",
    images: [
      {
        url: "/og-santiago-lima.png",
        width: 1200,
        height: 630,
        alt: "Guía Santiago a Lima: vista de Miraflores y el Pacífico",
      },
    ],
    locale: "es_PE",
    alternateLocale: ["es_CL"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago a Lima — Guía para descubrir la capital peruana",
    description:
      "Tips rápidos y honestos para chilenos: barrios, transporte, seguridad, costos y comida.",
    images: ["/og-santiago-lima.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "viajes",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
