import { ArrowUpRight, ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <span className="brand-mark">
            M<span>W</span>
          </span>
          <p>Marcel Welk</p>
          <span>Menschenzentrierte Web- &amp; KI-Lösungen.</span>
          <small>
            Konzeption. KI-Agenten koordinieren. Ergebnisse bewerten.
          </small>
        </div>
        <nav aria-label="Entdecken">
          <h2>Entdecken</h2>
          <a href="/#projekte">Projekte</a>
          <a href="/ki-workflow">Arbeitsweise</a>
          <a href="/#ueber-mich">Über mich</a>
          <a href="/devlog">Devlog</a>
        </nav>
        <nav aria-label="Kontakt und Unterlagen">
          <h2>In Verbindung bleiben</h2>
          <a href="/#kontakt">
            Kontakt <ArrowUpRight size={13} />
          </a>
          <a
            href="https://linkedin.com/in/marcel-welk-572a412ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={13} />
          </a>
          <a
            href="https://github.com/celtechstarter"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={13} />
          </a>
          <a href="/lebenslauf">Lebenslauf</a>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} Marcel Welk · Dortmund · Remote bevorzugt
        </span>
        <div>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="#seitenanfang">
            Nach oben <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
