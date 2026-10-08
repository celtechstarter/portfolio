import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
export function Hero() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>01</span> Konzeption · KI · Automatisierung
          </p>
          <p className="hero-name">Marcel Welk</p>
          <h1>
            Menschenzentrierte
            <br className="desktop-break" /> Web- &amp; <em>KI-Lösungen.</em>
          </h1>
          <p className="hero-description">
            Ich konzipiere menschenzentrierte Webanwendungen und steuere ihre
            Umsetzung mit KI-Werkzeugen und Agenten — von der Anforderung bis
            zur nutzbaren Lösung.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#projekte">
              Projekte ansehen <ArrowDown size={17} />
            </a>
            <a className="button button-secondary" href="#kontakt">
              Kontakt aufnehmen <ArrowUpRight size={17} />
            </a>
          </div>
          <a className="text-link hero-cv" href="/lebenslauf">
            Meinen Lebenslauf ansehen <ArrowUpRight size={15} />
          </a>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame">
            <Image
              src="/marcel-welk-portrait-transparent.png"
              alt="Marcel Welk"
              fill
              priority
              sizes="(max-width: 760px) 90vw, 42vw"
              className="object-cover"
            />
          </div>
          <figcaption>
            <span>
              <MapPin size={15} /> Dortmund · Remote bevorzugt
            </span>
            <span className="availability">
              <i /> Offen für eine Festanstellung
            </span>
          </figcaption>
        </figure>
      </section>
      <div className="tool-strip shell">
        <span>Mein Fokus</span>
        <div>
          {[
            "KI-Produktentwicklung",
            "Automatisierung",
            "Prototyping",
            "APIs",
            "Multi-Agent-Workflows",
            "Testkonzeption",
          ].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <section id="ueber-mich" className="about-section shell">
        <div>
          <p className="eyebrow">
            <span>02</span> Über mich
          </p>
          <h2>
            Technologie mit
            <br />
            <em>Menschen im Blick.</em>
          </h2>
          <a className="text-link" href="/ki-workflow">
            Meine Arbeitsweise kennenlernen <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="about-copy">
          <p className="intro">
            Ich bin Marcel Welk aus Dortmund. Ich strukturiere Anforderungen,
            plane verständliche Nutzerabläufe und koordiniere die Umsetzung mit
            KI-Werkzeugen.
          </p>
          <p>
            Die Programmierung erfolgt KI-gestützt; mein Beitrag liegt in
            Konzeption, Steuerung und der Bewertung der Ergebnisse anhand der
            Anforderungen. Aufgaben teile ich in überschaubare Arbeitspakete auf
            und wähle Modelle passend zum jeweiligen Schritt.
          </p>
          <details className="about-details">
            <summary>
              Mehr über meinen Hintergrund <span>+</span>
            </summary>
            <div>
              <p>
                Claude Cowork, Claude Code und ChatGPT nutze ich auch parallel
                für Umsetzung, Gegenprüfung und Fehlersuche.
              </p>
              <p>
                Mein Therapieplatz Finder unterstützt Menschen bei Recherche,
                Kontaktaufnahme und Dokumentation während der
                Therapieplatzsuche. Die Anwendung wird derzeit im ambulant
                betreuten Wohnen für die Arbeit mit Klient:innen erprobt.
                Rückmeldungen aus dieser Erprobung und der Austausch mit einem
                Psychotherapeuten helfen mir, die Anwendung weiterzuentwickeln.
              </p>
              <p>
                Aus meiner Weiterbildung bringe ich Kenntnisse in JavaScript,
                Python, Frontend- und Backend-Frameworks sowie
                Cloud-Technologien mit. Darauf und auf meiner Gameserver- und
                VPS-Praxis von 2017 bis 2024 habe ich meinen eigenen KI-Workflow
                aufgebaut. Ich suche eine Festanstellung in KI-gestützter
                Produktentwicklung oder Automatisierung, bevorzugt remote — mit
                Fokus auf Konzeption, Workflows und Qualitätssicherung statt
                manueller Programmierung.
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
