import type { Metadata } from "next";
import "./globals.css";
import SidebarComponent from "./components/sidebar-component";
import ContainerComponent from "./components/container-component";
import Footer from "./components/footer-component";

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
      <body className="h-[100svh] overflow-hidden bg-background text-foreground antialiased flex">
        <SidebarComponent />
        <div className="flex min-h-[100svh] flex-1 flex-col">
          <ContainerComponent>
            {children}
            <Footer />
          </ContainerComponent>
        </div>
      </body>
    </html>
  );
}
