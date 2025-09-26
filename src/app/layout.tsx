import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lima para Chilenos",
  description: "Guía práctica para chilenos en Lima.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
