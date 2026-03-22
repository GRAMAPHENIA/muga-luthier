"use client";

import { useEffect, useRef, useState } from "react";

const FORM_FIELDS = ["name", "email", "phone", "message"];
const FORM_FIELDS_SET = new Set(FORM_FIELDS);
const SUBMIT_RESET_DELAY = 3000;

const copy = {
  es: {
    formTitle: "Formulario",
    formDescription: "Completa los campos y te respondemos para continuar la consulta.",
    name: "Nombre",
    email: "Correo Electrónico",
    phone: "Teléfono",
    message: "Mensaje",
    placeholderName: "Tu nombre",
    placeholderEmail: "tuemail@dominio.com",
    placeholderPhone: "Tu teléfono (opcional)",
    placeholderMessage: "Contanos brevemente tu consulta",
    submit: "Enviar consulta",
    submitting: "Enviando...",
    success: "Se ha enviado tu correo satisfactoriamente",
    fallbackError: "No se pudo enviar. Revisa los campos marcados e intenta de nuevo.",
  },
  en: {
    formTitle: "Form",
    formDescription: "Complete the fields and we will reply to continue with your inquiry.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    placeholderName: "Your name",
    placeholderEmail: "youremail@domain.com",
    placeholderPhone: "Your phone (optional)",
    placeholderMessage: "Tell us briefly about your inquiry",
    submit: "Send inquiry",
    submitting: "Sending...",
    success: "Your message was sent successfully",
    fallbackError: "Unable to send. Check the highlighted fields and try again.",
  },
};

const ContactForm = ({ locale = "es" }) => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const hideMessageTimeoutRef = useRef(null);
  const t = copy[locale] || copy.es;

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

      const fallbackMessage = t.fallbackError;
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
      setMessage(t.success);
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
      className="relative w-full max-w-2xl mx-auto bg-[var(--panel)]"
    >
      <header className="border-b border-[var(--border)] px-4 py-4 md:px-6 md:py-5 bg-[var(--panel)]">
        <p className="mono-ui text-xs text-[var(--muted)] mb-2">{t.formTitle}</p>
        <p className="text-sm text-[var(--muted)]">
          {t.formDescription}
        </p>
      </header>

      <div className="dot-grid-surface px-4 py-5 md:px-6 md:py-7">

      <div className="mb-4 space-y-2">
        <label
          className="mono-ui block text-[var(--muted)] text-xs"
          htmlFor="name"
        >
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          autoComplete="name"
          placeholder={t.placeholderName}
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
            {t.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            autoComplete="email"
            spellCheck={false}
            placeholder={t.placeholderEmail}
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
            {t.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            autoComplete="tel"
            inputMode="tel"
            placeholder={t.placeholderPhone}
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
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          autoComplete="off"
          placeholder={t.placeholderMessage}
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

      <footer className="dot-grid-surface flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="detalles mono-ui inline-flex items-center justify-center text-sm text-[var(--text)] text-center w-full m-0 px-4 py-3 border border-[var(--border)] border-r-0 border-b-0 bg-[var(--panel)] hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
        >
          {isSubmitting ? t.submitting : t.submit}
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
