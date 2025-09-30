"use client";

import { useState } from "react";

const CONTACT_EMAIL = "info@mitkof.cl";

const TOPICS = [
  "Sugerencia",
  "Corrección de datos",
  "Error en el mapa",
  "Problema técnico",
  "Otro",
] as const;

export default function ContactForm() {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("Sugerencia");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // opcional
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!msg.trim()) return;

    setBusy(true);
    const subject = `[Lima para Chilenos] ${topic}`;
    const bodyLines = [
      name ? `Nombre: ${name}` : null,
      email ? `Email: ${email}` : null,
      `Tema: ${topic}`,
      "",
      msg,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines)}`;

    // open email client
    window.location.href = mailto;
    setTimeout(() => setBusy(false), 400);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border p-5">
      <div>
        <label htmlFor="topic" className="mb-1 block text-sm font-medium">
          Tema
        </label>
        <select
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value as (typeof TOPICS)[number])}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Nombre (opcional)
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 text-sm"
            placeholder="Tu nombre"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email (opcional)
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 text-sm"
            placeholder="tucorreo@dominio.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="msg" className="mb-1 block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="msg"
          required
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="min-h-32 w-full rounded-lg border px-3 py-2 text-sm"
          placeholder="Cuéntanos qué habría que mejorar o corregir…"
        />
        <p className="mt-1 text-xs text-muted-foreground">
          No compartas datos sensibles. Tu mensaje se abrirá en tu app de
          correo.
        </p>
      </div>

      <div className="flex flex-col flex-wrap gap-2">
        <h3 className="mb-1 block text-m font-medium text-center">
          ⚠️ Formulario en reparación, usa el boton verde para abrir tu correo y
          enviar un correo directamente a nuestro equipo. ⚠️
        </h3>
        <button
          type="submit"
          disabled={busy || !msg.trim()}
          className="rounded-lg border bg-red-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? "Preparando…" : "Formulario temporalmente desactivado"}
        </button>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded-lg border px-4 py-2 text-sm bg-emerald-400 text-white hover:bg-emerald-600"
        >
          Apreta para abrir tu correo y escribir directamente.
        </a>
      </div>
    </form>
  );
}
