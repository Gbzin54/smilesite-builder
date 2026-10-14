import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { navLinks } from "./content";
import { Tooth } from "./Tooth";

type SiteHeaderProps = { onBook: () => void };

export function SiteHeader({ onBook }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header-bar">
      <div className="site-header site-wrap">
        <a href="#inicio" className="brand" aria-label="Sorria — início">
          <Tooth className="brand-symbol" />
          <div>
            <div className="brand-name">sorria.</div>
            <div className="brand-subtitle">odontologia</div>
          </div>
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <Button variant="clinic" className="header-cta" onClick={onBook}>
            Agendar avaliação <ArrowUpRight />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-movel"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <nav
        id="menu-movel"
        className="mobile-menu site-wrap"
        aria-label="Navegação móvel"
        hidden={!menuOpen}
      >
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
