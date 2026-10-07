"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  HeartPulse,
  Workflow,
  Mail,
  Phone,
  CheckCircle2,
  Eye,
} from "lucide-react";

// Shared portfolio palette; company-specific application content stays intact.
const ATZ_BLAU = "#f6f3eb";
const ATZ_BLAU_DUNKEL = "#142d32";
const ATZ_VERLAUF = "#142d32";
const ATZ_GELB = "#f2b08f";
const ATZ_HELLBLAU = "#b8c9cc";
const ATZ_GRAU = "#b8c9cc";

// ─── Button, nachgebaut nach dem echten .button/.button--stroke der ATZ-Seite ─
// Farben laufen komplett über Klassen (nicht per Inline-Style), sonst kann
// eine Hover-Regel eine per Inline-Style gesetzte Farbe nie überschreiben.
const BUTTON_VARIANTS: Record<string, string> = {
  navy: "text-[#f6f3eb] border-[#9bcbc5] bg-transparent hover:bg-[#142d32] hover:text-white hover:border-[#142d32]",
  yellow:
    "text-[#f6f3eb] border-[#f2b08f] bg-transparent hover:bg-[#f2b08f] hover:text-[#516367] hover:border-[#f2b08f]",
  "navy-solid":
    "text-white border-[#142d32] bg-[#142d32] hover:bg-[#216760] hover:border-[#216760]",
  hero: "text-[#E6EBEF] border-[#f2b08f] bg-transparent hover:bg-[#f2b08f] hover:text-[#142d32] hover:border-[#f2b08f]",
};

function AtzButton({
  children,
  variant = "navy",
  href,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  variant?: "navy" | "yellow" | "navy-solid" | "hero";
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-[6.25rem] border-2 px-9 py-4 text-base font-semibold cursor-pointer transition-colors duration-300 ${BUTTON_VARIANTS[variant]}`}
    >
      {icon}
      {children}
    </Comp>
  );
}

function HeroSlider() {
  return (
    <section className="application-hero">
      <div className="shell application-grid">
        <div>
          <p className="eyebrow">Bewerbung / ATZ Group Dortmund</p>
          <h1>
            Marcel Welk.
            <br />
            <em>
              KI-Workflows mit
              <br />
              klarem Nutzerfokus.
            </em>
          </h1>
          <p className="application-role">Junior AI Automation Specialist</p>
          <p>
            Mein Beitrag: Anforderungen strukturieren, KI-Umsetzung koordinieren
            und Ergebnisse prüfen.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#automatisierung">
              Automatisierung ansehen <ArrowRight size={16} />
            </a>
            <a className="button button-secondary" href="#produkt">
              Projektpraxis
            </a>
          </div>
        </div>
        <div className="application-photo">
          <Image
            src="/marcel-welk-portrait.png"
            alt="Marcel Welk"
            width={420}
            height={420}
            priority
          />
          <p>Dortmund · Remote bevorzugt</p>
        </div>
      </div>
    </section>
  );
}

// ─── Kontakt, gleiche Reveal-Logik wie im Rest des Portfolios, ATZ-Optik ────
type ContactData = { phone: string; email: string };
let contactCache: ContactData | null = null;
async function fetchContact(): Promise<ContactData> {
  if (!contactCache) {
    const res = await fetch("/api/contact");
    contactCache = await res.json();
  }
  return contactCache!;
}

function AtzContactReveal({
  icon,
  label,
  getValue,
}: {
  icon: React.ReactNode;
  label: string;
  getValue: () => Promise<string>;
}) {
  const [value, setValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!value) {
    return (
      <button
        onClick={async () => {
          setLoading(true);
          setValue(await getValue());
          setLoading(false);
        }}
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors"
        style={{ borderColor: "rgba(255,255,255,0.25)", color: ATZ_HELLBLAU }}
      >
        {icon}
        {loading ? "..." : label}
        <Eye size={13} className="opacity-60" />
      </button>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-mono"
      style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#fff" }}
    >
      {icon}
      {value}
    </span>
  );
}

function FadeSection({
  children,
  id,
  bg,
}: {
  children: React.ReactNode;
  id?: string;
  bg?: string;
}) {
  return (
    <section id={id} className="px-6 py-20" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}

export default function AtzGroupClient() {
  return (
    <div className="application-page" style={{ color: ATZ_GRAU }}>
      <HeroSlider />

      {/* Zurück-Link */}
      <div className="px-6 pt-8" style={{ backgroundColor: "#101718" }}>
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm transition-colors hover:opacity-70"
            style={{ color: ATZ_BLAU }}
          >
            <ArrowLeft size={14} />
            Zurück zum Portfolio
          </Link>
        </div>
      </div>

      {/* ── KURZ ZU MIR ────────────────────────────────────────────────── */}
      <FadeSection bg="#101718">
        <p
          className="mb-2 text-sm font-semibold tracking-widest uppercase"
          style={{ color: ATZ_BLAU }}
        >
          Kurz zu mir
        </p>
        <h2 className="mb-5 text-3xl font-bold" style={{ color: ATZ_BLAU }}>
          Marcel, KI-gestützte Produktentwicklung aus Dortmund
        </h2>
        <p className="max-w-2xl leading-relaxed">
          Ich strukturiere Anforderungen, plane Nutzerabläufe und koordiniere
          die Umsetzung mit Claude Cowork, Claude Code, ChatGPT und Agenten. Die
          Programmierung erfolgt KI-gestützt. Meine Weiterbildung vermittelte
          Grundlagen in JavaScript, Python, Frontend-/Backend-Frameworks und
          Cloud. Darauf habe ich einen eigenen Projektworkflow mit Tests,
          zusätzlichen Reviews und Dokumentation aufgebaut.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <AtzButton
            variant="navy"
            href="/ki-workflow"
            icon={<ExternalLink size={15} />}
          >
            Wie ich mit KI arbeite
          </AtzButton>
          <AtzButton
            variant="navy"
            href="/lebenslauf"
            icon={<ExternalLink size={15} />}
          >
            Lebenslauf
          </AtzButton>
        </div>
      </FadeSection>

      {/* ── THERAPIEPLATZ FINDER ──────────────────────────────────────── */}
      <FadeSection id="produkt" bg="var(--secondary)">
        <div className="rounded-[20px] bg-card p-8 shadow-sm">
          <div
            className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
            style={{ backgroundColor: "var(--secondary)", color: ATZ_BLAU }}
          >
            <HeartPulse size={24} />
          </div>
          <p
            className="mb-1 text-xs font-semibold tracking-widest uppercase"
            style={{ color: ATZ_BLAU }}
          >
            Veröffentlicht und in Erprobung
          </p>
          <h2 className="mb-4 text-3xl font-bold" style={{ color: ATZ_BLAU }}>
            Therapieplatz Finder
          </h2>
          <p className="leading-relaxed">
            Unterstützt Recherche, Kontaktaufnahme und Dokumentation bei der
            ambulanten Therapieplatzsuche. Ich habe Nutzerabläufe geplant,
            Praxisinformationen aufbereitet und die KI-gestützte Umsetzung mit
            APIs, Suchfiltern und E-Mail-Versand gesteuert. Automatisierte Tests
            begleiten Änderungen. Die Anwendung wird im ambulant betreuten
            Wohnen für die Arbeit mit Klient:innen erprobt.
          </p>
          <div className="mt-5 mb-7 flex flex-wrap gap-2">
            {[
              "Python",
              "Playwright",
              "Anthropic API",
              "Supabase",
              "Vercel",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: "var(--secondary)", color: ATZ_BLAU }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <AtzButton
              variant="navy-solid"
              href="https://therapieplatz-finder.de"
              icon={<ExternalLink size={15} />}
            >
              Live ansehen
            </AtzButton>
            <AtzButton
              variant="navy"
              href="https://github.com/celtechstarter/therapieplatz-finder-backend"
              icon={<Github size={15} />}
            >
              Backend-Code auf GitHub
            </AtzButton>
          </div>
          <p className="mt-5 text-xs opacity-70 leading-relaxed">
            Die Webapp selbst bleibt privat, weil sie echte Kontaktdaten von
            Therapeutinnen und Therapeuten verarbeitet. Der Kern der Pipeline
            (Scraper, Filterregeln, KI-Analyse, Tests) ist öffentlich einsehbar.
          </p>
        </div>
      </FadeSection>

      {/* ── DIE NEUE AUTOMATISIERUNG ──────────────────────────────────── */}
      <section
        id="automatisierung"
        className="px-6 py-20"
        style={{ background: ATZ_VERLAUF }}
      >
        <div className="mx-auto max-w-4xl">
          <p
            className="mb-2 text-sm font-semibold tracking-widest uppercase"
            style={{ color: ATZ_GELB }}
          >
            Neu, für diese Bewerbung gebaut
          </p>
          <h2 className="mb-5 text-3xl font-bold text-white [overflow-wrap:anywhere]">
            Automatisierungsprototyp mit n8n und Claude
          </h2>
          <p
            className="max-w-2xl leading-relaxed"
            style={{ color: ATZ_HELLBLAU }}
          >
            Für diesen Prototyp habe ich einen n8n-Workflow aufgebaut und
            ausgeführt: Ein zeitgesteuerter HTTP-Abruf lädt eine
            Zahlen-Momentaufnahme, JavaScript bereitet sie auf, ein KI-Modell
            erstellt einen Bericht und Gmail versendet ihn. Die erfolgreiche
            Ausführung ist dokumentiert; sie ist kein Nachweis eines dauerhaft
            laufenden Betriebs.
          </p>

          <div
            className="mt-8 rounded-[20px] p-4"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            <Image
              src="/bewerbung/atz-group/n8n-workflow.png"
              alt="n8n Workflow mit fünf Schritten, alle nach einem echten Lauf erfolgreich durchlaufen: Schedule Trigger, HTTP Request, Code in JavaScript, Anthropic Message a model, Gmail Send a message"
              width={1400}
              height={480}
              className="w-full h-auto rounded-xl"
            />
            <p
              className="mt-3 flex items-center gap-1.5 text-xs font-mono"
              style={{ color: ATZ_GELB }}
            >
              <CheckCircle2 size={13} />
              Kompletter Workflow nach einem echten Lauf, alle fünf Schritte
              erfolgreich
            </p>
          </div>

          <div className="mt-6 rounded-[20px] bg-card p-6">
            <div
              className="mb-4 flex items-center gap-2 text-xs font-mono uppercase tracking-wider"
              style={{ color: ATZ_BLAU }}
            >
              <Mail size={14} />
              Dokumentierter E-Mail-Testlauf
            </div>
            <p
              className="mb-3 text-sm font-semibold"
              style={{ color: ATZ_BLAU }}
            >
              Therapieplatz Finder, Status der Woche
            </p>
            <p className="text-sm leading-relaxed" style={{ color: ATZ_GRAU }}>
              Der dokumentierte Testlauf erzeugte aus einer Daten-Momentaufnahme
              einen Statusbericht und verschickte ihn per E-Mail. Die Ausgabe
              demonstriert den Ablauf; sie ist keine verifizierte Aussage über
              aktuell verfügbare Therapieplätze.
            </p>
            <p
              className="mt-4 text-xs opacity-50 font-mono"
              style={{ color: ATZ_GRAU }}
            >
              Automatisch verschickt mit n8n
            </p>
          </div>

          <div
            className="mt-6 flex gap-3 rounded-[20px] p-5"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            <Workflow
              size={18}
              className="shrink-0 mt-0.5"
              style={{ color: ATZ_GELB }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: ATZ_HELLBLAU }}
            >
              Der Prototyp verarbeitet eine Momentaufnahme, die noch manuell
              aktualisiert wird. Als Ausbau plane ich einen monatlichen Abgleich
              neuer Praxiseinträge mit E-Mail- oder Slack-Benachrichtigung und
              manueller Prüfung vor der Aufnahme ins Verzeichnis.
            </p>
          </div>
        </div>
      </section>

      {/* ── WARUM ICH DAS ZEIGE ───────────────────────────────────────── */}
      <FadeSection id="warum" bg="#101718">
        <p
          className="mb-2 text-sm font-semibold tracking-widest uppercase"
          style={{ color: ATZ_BLAU }}
        >
          Warum ich das zeige
        </p>
        <h2 className="mb-5 text-3xl font-bold" style={{ color: ATZ_BLAU }}>
          Anforderungen in einen prüfbaren Ablauf übersetzen
        </h2>
        <p className="max-w-2xl leading-relaxed">
          An diesem Prototyp zeige ich meine Arbeitsweise: Ich definiere den
          Ablauf, formuliere Aufgaben für die KI-gestützte Umsetzung und
          dokumentiere das Ergebnis. Mein Beitrag liegt in Konzeption,
          Koordination und Erprobung. Erfolgreich ausgeführte Schritte und
          geplante Erweiterungen bleiben dabei klar getrennt. Für eine
          Festanstellung suche ich genau diesen Schwerpunkt in
          Produktentwicklung und Automatisierung.
        </p>
      </FadeSection>

      {/* ── KONTAKT ────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: ATZ_BLAU_DUNKEL }}
      >
        <div className="mx-auto max-w-4xl">
          <p
            className="mb-2 text-sm font-semibold tracking-widest uppercase"
            style={{ color: ATZ_GELB }}
          >
            Kontakt
          </p>
          <h2 className="mb-7 text-3xl font-bold text-white">
            Fragen, gerne direkt
          </h2>
          <div className="flex flex-wrap gap-3">
            <AtzContactReveal
              icon={<Phone size={14} />}
              label="Handynummer anzeigen"
              getValue={async () => (await fetchContact()).phone}
            />
            <AtzContactReveal
              icon={<Mail size={14} />}
              label="Email anzeigen"
              getValue={async () => (await fetchContact()).email}
            />
            <AtzButton
              variant="yellow"
              href="https://github.com/celtechstarter"
              icon={<Github size={15} />}
            >
              GitHub
            </AtzButton>
          </div>
        </div>
      </section>
    </div>
  );
}
