import { ArrowRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="shell not-found">
      <div className="error-number" aria-hidden="true">
        4<span>0</span>4
      </div>
      <div>
        <p className="eyebrow">Seite nicht gefunden</p>
        <h1>
          Hier geht es gerade
          <br />
          nicht weiter.
        </h1>
        <p>
          Diese Seite existiert nicht oder wurde verschoben. Meine Projekte und
          Kontaktdaten findest du hier:
        </p>
        <div className="button-row">
          <a className="button button-primary" href="/">
            Zur Startseite <ArrowRight size={17} />
          </a>
          <a className="button button-secondary" href="/#projekte">
            Projekte ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
