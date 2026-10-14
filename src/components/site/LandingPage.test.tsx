import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("renders every in-page section the navigation points to", () => {
    render(<LandingPage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    for (const id of ["inicio", "tratamentos", "sobre", "contato"]) {
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it("discloses that no request is sent instead of simulating a booking", () => {
    render(<LandingPage />);

    fireEvent.click(screen.getByRole("button", { name: /agendar avaliação/i }));

    expect(screen.getByRole("dialog")).toHaveTextContent("Nenhuma solicitação foi enviada");
  });

  it("closes the dialog with Escape", () => {
    render(<LandingPage />);

    fireEvent.click(screen.getByRole("button", { name: /agendar avaliação/i }));
    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("toggles the mobile menu", () => {
    render(<LandingPage />);

    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);

    expect(screen.getByRole("button", { name: "Fechar menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
