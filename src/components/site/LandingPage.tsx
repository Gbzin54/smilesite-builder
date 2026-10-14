import { useCallback, useState } from "react";

import { ContactModal } from "./ContactModal";
import { Hero } from "./Hero";
import { SiteHeader } from "./SiteHeader";
import { About, Contact, Services, SiteFooter, TrustStrip } from "./Sections";

export function LandingPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    <>
      <a href="#inicio" className="skip-link">
        Pular para o conteúdo
      </a>
      <SiteHeader onBook={openContact} />
      <main id="inicio" tabIndex={-1}>
        <Hero onBook={openContact} />
        <TrustStrip />
        <Services onBook={openContact} />
        <About />
        <Contact onBook={openContact} />
      </main>
      <SiteFooter />
      {contactOpen && <ContactModal onClose={closeContact} />}
    </>
  );
}
