"use client";

import { useEffect, useRef, useState } from "react";

const FORM_FIELDS = ["name", "email", "phone", "message"];
const FORM_FIELDS_SET = new Set(FORM_FIELDS);
const SUBMIT_RESET_DELAY = 3000;

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const hideMessageTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (hideMessageTimeoutRef.current) {
        clearTimeout(hideMessageTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowMessage(false);
    setFieldErrors({});

    const form = event.target;
    const data = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const nextFieldErrors = {};
      const errors = Array.isArray(result?.errors) ? result.errors : [];

      errors.forEach((error) => {
        const field = error?.field || error?.path || error?.name;
        if (typeof field === "string" && FORM_FIELDS_SET.has(field)) {
          nextFieldErrors[field] = error.message;
        }
      });

      setFieldErrors(nextFieldErrors);

      const fallbackMessage = "No se pudo enviar. Revisá los campos marcados e intentá de nuevo.";
      const firstApiMessage = errors[0]?.message;
      setMessage(firstApiMessage ? `${fallbackMessage} ${firstApiMessage}` : fallbackMessage);
      setShowMessage(true);

      const firstErrorField = FORM_FIELDS.find((field) => nextFieldErrors[field]);
      if (firstErrorField) {
        const fieldElement = form.elements.namedItem(firstErrorField);
        if (fieldElement && "focus" in fieldElement) {
          fieldElement.focus();
        }
      }
    } else {
      setMessage("Se ha enviado tu correo satisfactoriamente");
      event.target.reset();
      setFieldErrors({});
      setShowMessage(true);

      if (hideMessageTimeoutRef.current) {
        clearTimeout(hideMessageTimeoutRef.current);
      }

      hideMessageTimeoutRef.current = setTimeout(() => {
        setShowMessage(false);
      }, SUBMIT_RESET_DELAY);
    }
    setIsSubmitting(false);
  };

  return (
    <form
      action="https://formspree.io/f/mqkrlako"
      method="POST"
      onSubmit={handleSubmit}
      autoComplete="off"
      className="relative w-full max-w-2xl mx-auto"
    >
      <header className="border-b border-[var(--border)] px-4 py-4 md:px-6 md:py-5">
        <p className="mono-ui text-xs text-[var(--muted)] mb-2">Formulario</p>
        <p className="text-sm text-[var(--muted)]">
          Completa los campos y te respondemos para continuar la consulta.
        </p>
      </header>

      <div className="px-4 py-5 md:px-6 md:py-7">

      <div className="mb-4 space-y-2">
        <label
          className="mono-ui block text-[var(--muted)] text-xs"
          htmlFor="name"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          autoComplete="name"
          placeholder="Ejemplo: Esteban Di Corato…"
          className="w-full px-3 py-3 border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text)] text-sm md:text-base"
          required
        />
        {fieldErrors.name && (
          <p id="name-error" className="mt-2 text-sm text-[var(--danger)]" aria-live="polite">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            className="mono-ui block text-[var(--muted)] text-xs"
            htmlFor="email"
          >
            Correo Electronico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            autoComplete="email"
            spellCheck={false}
            placeholder="ejemplo@correo.com…"
            className="w-full px-3 py-3 border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text)] text-sm md:text-base"
            required
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-2 text-sm text-[var(--danger)]" aria-live="polite">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            className="mono-ui block text-[var(--muted)] text-xs"
            htmlFor="phone"
          >
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+54 11 1234 5678…"
            className="w-full px-3 py-3 border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text)] text-sm md:text-base"
          />
          {fieldErrors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-[var(--danger)]" aria-live="polite">
              {fieldErrors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4 space-y-2">
        <label
          className="mono-ui block text-[var(--muted)] text-xs"
          htmlFor="message"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          autoComplete="off"
          placeholder="Conta brevemente tu consulta…"
          className="w-full px-3 py-3 border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text)] text-sm md:text-base min-h-[140px]"
          rows="5"
          maxLength="300"
          required
        ></textarea>
        {fieldErrors.message && (
          <p id="message-error" className="mt-2 text-sm text-[var(--danger)]" aria-live="polite">
            {fieldErrors.message}
          </p>
        )}
      </div>

      </div>

      <footer className="border-t border-[var(--border)] flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="detalles mono-ui inline-flex items-center justify-center text-sm text-[var(--text)] text-center w-full sm:w-[240px] m-0 px-4 py-3 border border-[var(--border)] border-r-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
        >
          {isSubmitting ? "Enviando…" : "Enviar consulta"}
        </button>
      </footer>

      {showMessage && (
        <p
          className="mt-4 border border-[var(--border)] p-4 bg-[var(--accent-soft)] backdrop-blur-2xl text-sm"
          aria-live="polite"
        >
          <span className="text-[var(--accent)]">✓</span> {message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
