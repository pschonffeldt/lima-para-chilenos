import Link from "next/link";
import ContactForm from "../components/contact-form";

export const metadata = {
  title: "Contacto — Lima para Chilenos",
  description:
    "Sugerencias, correcciones y reportes de errores para la guía. Escríbenos rápido.",
};

export default function ContactoPage() {
  return (
    <section className="space-y-10 py-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Contacto</h1>
        <p className="max-w-[70ch] text-muted-foreground">
          ¿Viste algo para mejorar? ¿Mapa desactualizado? Envíanos un mensaje o
          correo. Leemos todo y actualizamos seguido.
        </p>
      </header>

      {/* Atajos útiles */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Corrección rápida
          </p>
          <p className="text-sm text-muted-foreground">
            Si es algo del mapa, abre la página de{" "}
            <Link href="/mapa" className="underline underline-offset-4">
              Mapa
            </Link>{" "}
            y cuéntanos el marcador exacto que habría que corregir.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Sugerencias
          </p>
          <p className="text-sm text-muted-foreground">
            Nuevos cafés para trabajar, rutas de running o tips de seguridad son
            bienvenidos.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Problemas técnicos
          </p>
          <p className="text-sm text-muted-foreground">
            Si algo no carga o ves un error, indica el navegador y adjunta
            captura si puedes.
          </p>
        </div>
      </div>
      {/* <ContactForm /> */}
      <ContactForm />
    </section>
  );
}
