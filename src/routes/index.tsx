import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, HeartHandshake, ShieldCheck, Sparkles, Smile, X, MessageCircle, ScanLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clinicImage from '@/assets/dental-clinic.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Sorria | Odontologia com cuidado e leveza' },
    { name: 'description', content: 'Cuidado odontológico acolhedor para a saúde e a beleza do seu sorriso. Conheça nossos tratamentos e agende sua avaliação.' },
    { property: 'og:title', content: 'Sorria | Odontologia com cuidado e leveza' },
    { property: 'og:description', content: 'Um cuidado completo, humano e personalizado para o seu sorriso.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Tooth({ className, size = 24 }: { className?: string; size?: number }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4c-3-2-7-2-8 2-1 3 1 6 2 10 1 5 3 6 4 1 .6-3 3.4-3 4 0 1 5 3 4 4-1 1-4 3-7 2-10-1-4-5-4-8-2Z" /><path d="M9 3c1 2 3 3 5 3" /></svg>;
}

const services = [
  { icon: Tooth, title: 'Clínica geral', description: 'Prevenção, limpeza e cuidado completo para manter sua saúde bucal em dia.' },
  { icon: Sparkles, title: 'Estética dental', description: 'Clareamento e facetas para realçar a beleza natural do seu sorriso.' },
  { icon: Smile, title: 'Ortodontia', description: 'Alinhamento dos dentes com soluções pensadas para cada fase da vida.' },
  { icon: ScanLine, title: 'Implantes', description: 'Recupere a confiança e o conforto de sorrir com segurança.' },
];

function Index() {
  const [contactOpen, setContactOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!contactOpen) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setContactOpen(false);
      if (event.key === 'Tab') { event.preventDefault(); closeRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKey); previousFocus.current?.focus(); };
  }, [contactOpen]);
  return (
    <>
      <header className="site-header site-wrap">
        <a href="#inicio" className="brand" aria-label="Sorria — início"><Tooth className="brand-symbol" /><div><div className="brand-name">sorria.</div><div className="brand-subtitle">odontologia</div></div></a>
        <nav className="nav-links" aria-label="Navegação principal"><a href="#tratamentos">Tratamentos</a><a href="#sobre">Nosso cuidado</a><a href="#contato">Contato</a></nav>
        <Button variant="clinic" onClick={() => setContactOpen(true)}>Agendar avaliação <ArrowUpRight /></Button>
      </header>
      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <img src={clinicImage} width={1536} height={1024} className="hero-photo" alt="Consultório odontológico iluminado, com cadeira moderna e vista para um jardim" fetchPriority="high" />
          <div className="hero-inner site-wrap"><div className="hero-copy">
            <div className="eyebrow">Cuidado que faz você sorrir</div>
            <h1 id="hero-title">Odontologia.<br />Com cuidado.<br />Com <em>leveza.</em></h1>
            <p className="hero-description">Seu sorriso merece atenção de verdade. Unimos tecnologia e um olhar humano para cuidar de você em cada detalhe.</p>
            <div className="hero-actions"><Button variant="clinic" size="clinic" onClick={() => setContactOpen(true)}>Agendar minha avaliação <ArrowUpRight /></Button><a href="#tratamentos">Conheça os tratamentos</a></div>
            <div className="hero-footnote"><ShieldCheck size={13} /> Um novo sorriso começa com uma boa conversa.</div>
          </div></div>
        </section>
        <div className="trust-strip"><div className="trust-inner site-wrap"><div className="trust-item"><HeartHandshake /><span>Atendimento humanizado</span></div><div className="trust-item"><ScanLine /><span>Tecnologia e precisão</span></div><div className="trust-item"><ShieldCheck /><span>Cuidado em cada detalhe</span></div></div></div>
        <section className="section site-wrap" id="tratamentos">
          <div className="section-heading"><div><div className="eyebrow">Nossos tratamentos</div><h2>Para cada sorriso,<br />um cuidado especial.</h2></div><p>Da prevenção à transformação, encontre o tratamento ideal para você.</p></div>
          <div className="service-grid">{services.map(({ icon: Icon, title, description }) => <article className="service" key={title}><Icon className="service-icon" /><h3>{title}</h3><p>{description}</p><Button variant="service" className="service-link" onClick={() => setContactOpen(true)} aria-label={`Conversar sobre ${title}`}>Saiba mais <ArrowUpRight /></Button></article>)}</div>
        </section>
        <section className="about-band" id="sobre"><div className="section site-wrap about-inner"><div><div className="eyebrow">Nosso jeito de cuidar</div><h2>Você é muito mais<br />que um sorriso.</h2></div><div className="about-copy"><p>Entender você vem antes de qualquer tratamento. Aqui, cada consulta é um espaço de escuta, acolhimento e cuidado, sem pressa e sem julgamentos.</p><p>Porque a melhor experiência começa quando você se sente à vontade.</p><div className="about-points"><span><Check size={14} /> Escuta e acolhimento</span><span><Check size={14} /> Cuidado personalizado</span></div></div></div></section>
        <section id="contato" className="contact site-wrap"><div className="eyebrow">Vamos conversar?</div><h2>Seu próximo sorriso começa aqui.</h2><p>Dê o primeiro passo para cuidar de você. Estamos aqui para ajudar.</p><Button variant="clinic" size="clinic" onClick={() => setContactOpen(true)}><MessageCircle /> Agendar uma avaliação <ArrowRight /></Button></section>
      </main>
      <footer className="footer site-wrap"><a href="#inicio" className="brand" aria-label="Voltar ao início"><Tooth size={26} /><span className="brand-name">sorria.</span></a><p>© 2026 Sorria Odontologia. Cuidar é o que nos move.</p></footer>
      {contactOpen && <div className="modal-backdrop" onClick={() => setContactOpen(false)}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" aria-describedby="contact-description" onClick={event => event.stopPropagation()}><Button ref={closeRef} variant="ghost" size="icon" className="modal-close" aria-label="Fechar" onClick={() => setContactOpen(false)}><X /></Button><MessageCircle size={30} /><h2 id="contact-title">Vamos cuidar<br />do seu sorriso?</h2><p id="contact-description">O agendamento estará disponível assim que o contato da clínica for cadastrado. Nenhuma solicitação foi enviada.</p></section></div>}
    </>
  );
}
