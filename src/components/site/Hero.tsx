import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import clinicImage from "@/assets/dental-clinic.jpg";

type HeroProps = { onBook: () => void };

export function Hero({ onBook }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        src={clinicImage}
        width={1536}
        height={1024}
        className="hero-photo"
        alt="Consultório odontológico iluminado, com cadeira moderna e vista para um jardim"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-inner site-wrap">
        <div className="hero-copy">
          <div className="eyebrow">Cuidado que faz você sorrir</div>
          <h1 id="hero-title">
            Odontologia.
            <br />
            Com cuidado.
            <br />
            Com <em>leveza.</em>
          </h1>
          <p className="hero-description">
            Seu sorriso merece atenção de verdade. Unimos tecnologia e um olhar humano para cuidar
            de você em cada detalhe.
          </p>
          <div className="hero-actions">
            <Button variant="clinic" size="clinic" onClick={onBook}>
              Agendar minha avaliação <ArrowUpRight />
            </Button>
            <Button asChild variant="link" size="clinic" className="underline">
              <a href="#tratamentos">Conheça os tratamentos</a>
            </Button>
          </div>
          <div className="hero-footnote">
            <ShieldCheck size={14} aria-hidden="true" /> Um novo sorriso começa com uma boa
            conversa.
          </div>
        </div>
      </div>
    </section>
  );
}
