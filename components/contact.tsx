"use client";
import { useState } from "react";
import { ArrowUpRight, Mail, Copy, Check } from "lucide-react";
export function Contact() {
  const [email, setEmail] = useState<string | null>(null),
    [status, setStatus] = useState(""),
    [loading, setLoading] = useState(false);
  async function reveal() {
    setLoading(true);
    setStatus("");
    try {
      const r = await fetch("/api/contact");
      if (!r.ok) throw new Error();
      const d = await r.json();
      if (typeof d.email !== "string") throw new Error();
      setEmail(d.email);
    } catch {
      setStatus(
        "Die Adresse konnte nicht geladen werden. Bitte versuche es erneut oder nutze LinkedIn.",
      );
    } finally {
      setLoading(false);
    }
  }
  async function copy() {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setStatus("E-Mail-Adresse kopiert.");
    } catch {
      setStatus("Bitte markiere und kopiere die angezeigte Adresse.");
    }
  }
  return (
    <section id="kontakt" className="contact-section">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">
            <span>08</span> Kontakt
          </p>
          <h2>
            Gute Ideen brauchen
            <br />
            jemanden, der sie
            <br />
            <em>weiterbringt.</em>
          </h2>
        </div>
        <div className="contact-copy">
          <span className="availability">
            <i /> Offen für eine Festanstellung
          </span>
          <h3>Lernen wir uns kennen.</h3>
          <p>
            Ich suche eine Festanstellung in KI-gestützter Produktentwicklung
            oder Automatisierung — bevorzugt remote. Mein Schwerpunkt:
            Anforderungen, KI-Workflows und Ergebnisprüfung.
          </p>
          <div className="button-row">
            {email ? (
              <>
                <a className="button button-primary" href={"mailto:" + email}>
                  <Mail size={17} /> E-Mail schreiben
                </a>
                <button
                  className="button button-secondary"
                  onClick={copy}
                  aria-label="E-Mail-Adresse kopieren"
                >
                  {status === "E-Mail-Adresse kopiert." ? (
                    <Check size={17} />
                  ) : (
                    <Copy size={17} />
                  )}
                </button>
              </>
            ) : (
              <button
                className="button button-primary"
                onClick={reveal}
                disabled={loading}
              >
                <Mail size={17} />
                {loading ? "Wird geladen …" : "E-Mail anzeigen"}
              </button>
            )}
          </div>
          {email && <p className="revealed-email">{email}</p>}
          <p role="status" className="contact-status">
            {status}
          </p>
          <div className="contact-links">
            <a
              className="text-link"
              href="https://linkedin.com/in/marcel-welk-572a412ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>
            <a
              className="text-link"
              href="/lebenslauf.pdf"
              download="Lebenslauf_Marcel_Welk.pdf"
            >
              Lebenslauf (PDF) <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
