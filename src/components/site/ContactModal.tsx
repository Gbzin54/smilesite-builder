import { useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const FOCUSABLE =
  'button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

type ContactModalProps = { onClose: () => void };

/**
 * Booking is not wired to a real clinic contact yet, so this dialog only discloses
 * that no request is sent. It must never simulate a successful appointment.
 */
export function ContactModal({ onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const items = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        aria-describedby="contact-description"
      >
        <Button
          ref={closeRef}
          variant="ghost"
          size="icon"
          className="modal-close"
          aria-label="Fechar"
          onClick={onClose}
        >
          <X />
        </Button>
        <MessageCircle size={30} aria-hidden="true" />
        <h2 id="contact-title">
          Vamos cuidar
          <br />
          do seu sorriso?
        </h2>
        <p id="contact-description">
          O agendamento estará disponível assim que o contato da clínica for cadastrado. Nenhuma
          solicitação foi enviada.
        </p>
        <Button variant="clinic" size="clinic" onClick={onClose}>
          Entendi
        </Button>
      </section>
    </div>
  );
}
