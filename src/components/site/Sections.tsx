import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

import { aboutPoints, services, trustItems } from "./content";
import { Tooth } from "./Tooth";

type BookProps = { onBook: () => void };

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <ul className="trust-inner site-wrap">
        {trustItems.map(({ icon: Icon, label }) => (
          <li className="trust-item" key={label}>
            <Icon />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services({ onBook }: BookProps) {
  return (
    <section className="section site-wrap" id="tratamentos" aria-labelledby="tratamentos-title">
      <div className="section-heading">
        <div>
          <div className="eyebrow">Nossos tratamentos</div>
          <h2 id="tratamentos-title">
            Para cada sorriso,
            <br />
            um cuidado especial.
          </h2>
        </div>
        <p>Da prevenção à transformação, encontre o tratamento ideal para você.</p>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, description }) => (
          <article className="service" key={title}>
            <Icon className="service-icon" />
            <h3>{title}</h3>
            <p>{description}</p>
            <Button
              variant="service"
              className="service-link"
              onClick={onBook}
              aria-label={`Conversar sobre ${title}`}
            >
              Saiba mais <ArrowUpRight />
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="about-band" id="sobre" aria-labelledby="sobre-title">
      <div className="section site-wrap about-inner">
        <div>
          <div className="eyebrow">Nosso jeito de cuidar</div>
          <h2 id="sobre-title">
            Você é muito mais
            <br />
            que um sorriso.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            Entender você vem antes de qualquer tratamento. Aqui, cada consulta é um espaço de
            escuta, acolhimento e cuidado, sem pressa e sem julgamentos.
          </p>
          <p>Porque a melhor experiência começa quando você se sente à vontade.</p>
          <ul className="about-points">
            {aboutPoints.map((point) => (
              <li key={point}>
                <Check size={14} aria-hidden="true" /> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Contact({ onBook }: BookProps) {
  return (
    <section id="contato" className="contact site-wrap" aria-labelledby="contato-title">
      <div className="eyebrow">Vamos conversar?</div>
      <h2 id="contato-title">Seu próximo sorriso começa aqui.</h2>
      <p>Dê o primeiro passo para cuidar de você. Estamos aqui para ajudar.</p>
      <Button variant="clinic" size="clinic" onClick={onBook}>
        <MessageCircle /> Agendar uma avaliação <ArrowRight />
      </Button>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer site-wrap">
      <a href="#inicio" className="brand" aria-label="Voltar ao início">
        <Tooth size={26} />
        <span className="brand-name">sorria.</span>
      </a>
      <p>© {new Date().getFullYear()} Sorria Odontologia. Cuidar é o que nos move.</p>
    </footer>
  );
}
