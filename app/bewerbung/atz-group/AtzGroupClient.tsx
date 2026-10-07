"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
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
} from "lucide-react"

// ─── ATZ-Farben, direkt von der echten atz-group.de-Seite übernommen ────────
const ATZ_BLAU = "#04305e"
const ATZ_BLAU_DUNKEL = "#01162c"
const ATZ_GELB = "#ffed00"
const ATZ_HELLBLAU = "#E6EBEF"
const ATZ_GRAU = "#575756"
const ATZ_VERLAUF =
  "radial-gradient(circle, rgba(4,48,94,1) 0%, rgba(3,35,69,1) 67%, rgba(1,22,44,1) 100%)"

// Museo Sans (die echte ATZ-Schrift) ist eine lizenzierte, selbst gehostete
// Schrift und kann hier nicht einfach übernommen werden. Poppins kommt der
// runden, geometrischen Anmutung am nächsten und ist frei nutzbar.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-atz",
})

// ─── Button, nachgebaut nach dem echten .button/.button--stroke der ATZ-Seite ─
// Farben laufen komplett über Klassen (nicht per Inline-Style), sonst kann
// eine Hover-Regel eine per Inline-Style gesetzte Farbe nie überschreiben.
const BUTTON_VARIANTS: Record<string, string> = {
  navy: "text-[#04305e] border-[#04305e] bg-transparent hover:bg-[#04305e] hover:text-white hover:border-[#04305e]",
  yellow:
    "text-[#04305e] border-[#ffed00] bg-transparent hover:bg-[#ffed00] hover:text-[#575756] hover:border-[#ffed00]",
  "navy-solid": "text-white border-[#04305e] bg-[#04305e] hover:bg-[#01162c] hover:border-[#01162c]",
  hero: "text-[#E6EBEF] border-[#ffed00] bg-transparent hover:bg-[#ffed00] hover:text-[#04305e] hover:border-[#ffed00]",
}

function AtzButton({
  children,
  variant = "navy",
  href,
  onClick,
  icon,
}: {
  children: React.ReactNode
  variant?: "navy" | "yellow" | "navy-solid" | "hero"
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
}) {
  const Comp = href ? "a" : "button"
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
  )
}

// ─── Marquee-Banner, nachgebaut nach .marquee-1/.marquee-2 der Startseite ───
function AtzMarquee() {
  const phrase = "AUTOMATISIERUNG · DATEN · KI · KONZEPTION UND ERPROBUNG · "
  return (
    <div className="relative overflow-hidden py-6" style={{ backgroundColor: ATZ_BLAU_DUNKEL }}>
      <div className="flex whitespace-nowrap" style={{ animation: "atz-marquee-1 40s linear infinite" }}>
        {[0, 1].map((i) => (
          <span
            key={i}
            className="px-4 text-5xl md:text-7xl font-black tracking-tight"
            style={{
              background: `linear-gradient(270deg, ${ATZ_GELB} 30%, #ffffff 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {phrase}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes atz-marquee-1 {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

// ─── Hero-Slider, nachgebaut nach dem echten fnc-slider (4 Divisions) ───────
const slides = [
  {
    label: "Das Produkt",
    heading: "Therapieplatz Finder",
    sub: "Veröffentlichte Webanwendung, derzeit in praktischer Erprobung.",
    target: "#produkt",
  },
  {
    label: "Die Automatisierung",
    heading: "n8n trifft Claude",
    sub: "Ein dokumentierter Prototyp: Daten abrufen, KI-Bericht erstellen und versenden.",
    target: "#automatisierung",
  },
  {
    label: "Warum diese Seite",
    heading: "Mein Beitrag",
    sub: "Anforderungen strukturieren, KI-Umsetzung koordinieren und Ergebnisse prüfen.",
    target: "#warum",
  },
]

// ─── Stempel-Badge zur aktuellen fachlichen Ausrichtung ────────────────
const STEMPEL_ROT = "#c0392b"

function StampBadge() {
  return (
    <div
      className="relative inline-flex -rotate-6 flex-col items-center justify-center rounded-md px-4 py-2 select-none"
      style={{ border: `3px double ${STEMPEL_ROT}`, color: STEMPEL_ROT, opacity: 0.85 }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[3px] rounded-sm"
        style={{ border: `1px solid ${STEMPEL_ROT}` }}
      />
      <span className="text-[9px] font-black uppercase tracking-widest leading-tight">Mein Schwerpunkt</span>
      <span className="text-sm font-black uppercase tracking-wide leading-tight">KI-Workflows</span>
      <span className="text-[9px] font-black uppercase tracking-widest leading-tight">Konzeption & Umsetzung</span>
    </div>
  )
}

function HeroSlider() {
  const [active, setActive] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % slides.length)
    }, 5500)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [])

  const scrollTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-6"
      style={{ background: ATZ_VERLAUF }}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:max-w-xl">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide w-fit"
              style={{ backgroundColor: ATZ_GELB, color: ATZ_BLAU }}
            >
              Bewerbung: Junior AI Automation Specialist, ATZ Group Dortmund
            </div>
          </div>

          {slides.map((slide, i) => (
            <div key={slide.label} className={i === active ? "block" : "hidden"}>
              <p className="mb-3 font-mono text-sm tracking-widest uppercase" style={{ color: ATZ_GELB }}>
                {slide.label}
              </p>
              <h1 className="mb-5 text-4xl md:text-6xl font-black tracking-tight text-white text-balance">
                {slide.heading}
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed" style={{ color: ATZ_HELLBLAU }}>
                {slide.sub}
              </p>
              <AtzButton variant="hero" onClick={() => scrollTo(slide.target)} icon={<ArrowRight size={16} />}>
                Ansehen
              </AtzButton>
            </div>
          ))}

          <div className="mt-14 flex items-center gap-3">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}: ${slide.label}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "2.5rem" : "0.5rem",
                  backgroundColor: i === active ? ATZ_GELB : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-4">
          <p
            className="text-lg font-semibold tracking-wide"
            style={{ color: ATZ_HELLBLAU }}
          >
            Marcel Welk
          </p>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[28px] blur-xl"
              style={{ backgroundColor: "rgba(255,237,0,0.18)" }}
            />
            <Image
              src="/marcel-welk-portrait.png"
              alt="Marcel Welk"
              width={240}
              height={240}
              priority
              className="relative h-[180px] w-[180px] rounded-[20px] border-2 object-cover md:h-[240px] md:w-[240px]"
              style={{ borderColor: ATZ_GELB }}
            />
          </div>
          <StampBadge />
        </div>
      </div>
    </div>
  )
}

// ─── Kontakt, gleiche Reveal-Logik wie im Rest des Portfolios, ATZ-Optik ────
type ContactData = { phone: string; email: string }
let contactCache: ContactData | null = null
async function fetchContact(): Promise<ContactData> {
  if (!contactCache) {
    const res = await fetch("/api/contact")
    contactCache = await res.json()
  }
  return contactCache!
}

function AtzContactReveal({ icon, label, getValue }: { icon: React.ReactNode; label: string; getValue: () => Promise<string> }) {
  const [value, setValue] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  if (!value) {
    return (
      <button
        onClick={async () => {
          setLoading(true)
          setValue(await getValue())
          setLoading(false)
        }}
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors"
        style={{ borderColor: "rgba(255,255,255,0.25)", color: ATZ_HELLBLAU }}
      >
        {icon}
        {loading ? "..." : label}
        <Eye size={13} className="opacity-60" />
      </button>
    )
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-mono" style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#fff" }}>
      {icon}
      {value}
    </span>
  )
}

function FadeSection({ children, id, bg }: { children: React.ReactNode; id?: string; bg?: string }) {
  return (
    <section id={id} className="px-6 py-20" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  )
}

export default function AtzGroupClient() {
  return (
    <div className={`${poppins.variable} font-[var(--font-atz)]`} style={{ color: ATZ_GRAU }}>

      <HeroSlider />
      <AtzMarquee />

      {/* Zurück-Link */}
      <div className="px-6 pt-8" style={{ backgroundColor: "#ffffff" }}>
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
      <FadeSection bg="#ffffff">
        <p className="mb-2 text-sm font-semibold tracking-widest uppercase" style={{ color: ATZ_BLAU }}>
          Kurz zu mir
        </p>
        <h2 className="mb-5 text-3xl font-bold" style={{ color: ATZ_BLAU }}>
          Marcel, KI-gestützte Produktentwicklung aus Dortmund
        </h2>
        <p className="max-w-2xl leading-relaxed">
          Ich strukturiere Anforderungen, plane Nutzerabläufe und koordiniere die Umsetzung
          mit Claude Cowork, Claude Code, ChatGPT und Agenten. Die Programmierung erfolgt
          KI-gestützt. Meine Weiterbildung vermittelte Grundlagen in JavaScript, Python,
          Frontend-/Backend-Frameworks und Cloud. Darauf habe ich einen eigenen Projektworkflow
          mit Tests, zusätzlichen Reviews und Dokumentation aufgebaut.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <AtzButton variant="navy" href="/ki-workflow" icon={<ExternalLink size={15} />}>
            Wie ich mit KI arbeite
          </AtzButton>
          <AtzButton variant="navy" href="/lebenslauf" icon={<ExternalLink size={15} />}>
            Lebenslauf
          </AtzButton>
        </div>
      </FadeSection>

      {/* ── THERAPIEPLATZ FINDER ──────────────────────────────────────── */}
      <FadeSection id="produkt" bg={ATZ_HELLBLAU}>
        <div className="rounded-[20px] bg-white p-8 shadow-sm">
          <div
            className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
            style={{ backgroundColor: ATZ_HELLBLAU, color: ATZ_BLAU }}
          >
            <HeartPulse size={24} />
          </div>
          <p className="mb-1 text-xs font-semibold tracking-widest uppercase" style={{ color: ATZ_BLAU }}>
            Veröffentlicht und in Erprobung
          </p>
          <h2 className="mb-4 text-3xl font-bold" style={{ color: ATZ_BLAU }}>
            Therapieplatz Finder
          </h2>
          <p className="leading-relaxed">
            Unterstützt Recherche, Kontaktaufnahme und Dokumentation bei der ambulanten Therapieplatzsuche. Ich habe Nutzerabläufe geplant, Praxisinformationen aufbereitet und die KI-gestützte Umsetzung mit APIs, Suchfiltern und E-Mail-Versand gesteuert. Automatisierte Tests begleiten Änderungen. Die Anwendung wird im ambulant betreuten Wohnen für die Arbeit mit Klient:innen erprobt.
          </p>
          <div className="mt-5 mb-7 flex flex-wrap gap-2">
            {["Python", "Playwright", "Anthropic API", "Supabase", "Vercel"].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: ATZ_HELLBLAU, color: ATZ_BLAU }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <AtzButton variant="navy-solid" href="https://therapieplatz-finder.de" icon={<ExternalLink size={15} />}>
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
            Die Webapp selbst bleibt privat, weil sie echte Kontaktdaten von Therapeutinnen und
            Therapeuten verarbeitet. Der Kern der Pipeline (Scraper, Filterregeln, KI-Analyse,
            Tests) ist öffentlich einsehbar.
          </p>
        </div>
      </FadeSection>

      {/* ── DIE NEUE AUTOMATISIERUNG ──────────────────────────────────── */}
      <section id="automatisierung" className="px-6 py-20" style={{ background: ATZ_VERLAUF }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-sm font-semibold tracking-widest uppercase" style={{ color: ATZ_GELB }}>
            Neu, für diese Bewerbung gebaut
          </p>
            <h2 className="mb-5 text-3xl font-bold text-white [overflow-wrap:anywhere]">
            Automatisierungsprototyp mit n8n und Claude
          </h2>
          <p className="max-w-2xl leading-relaxed" style={{ color: ATZ_HELLBLAU }}>
            Für diesen Prototyp habe ich einen n8n-Workflow aufgebaut und ausgeführt: Ein zeitgesteuerter HTTP-Abruf lädt eine Zahlen-Momentaufnahme, JavaScript bereitet sie auf, ein KI-Modell erstellt einen Bericht und Gmail versendet ihn. Die erfolgreiche Ausführung ist dokumentiert; sie ist kein Nachweis eines dauerhaft laufenden Betriebs.
          </p>

          <div className="mt-8 rounded-[20px] p-4" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
            <Image
              src="/bewerbung/atz-group/n8n-workflow.png"
              alt="n8n Workflow mit fünf Schritten, alle nach einem echten Lauf erfolgreich durchlaufen: Schedule Trigger, HTTP Request, Code in JavaScript, Anthropic Message a model, Gmail Send a message"
              width={1400}
              height={480}
              className="w-full h-auto rounded-xl"
            />
            <p className="mt-3 flex items-center gap-1.5 text-xs font-mono" style={{ color: ATZ_GELB }}>
              <CheckCircle2 size={13} />
              Kompletter Workflow nach einem echten Lauf, alle fünf Schritte erfolgreich
            </p>
          </div>

          <div className="mt-6 rounded-[20px] bg-white p-6">
            <div className="mb-4 flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: ATZ_BLAU }}>
              <Mail size={14} />
              Dokumentierter E-Mail-Testlauf
            </div>
            <p className="mb-3 text-sm font-semibold" style={{ color: ATZ_BLAU }}>
              Therapieplatz Finder, Status der Woche
            </p>
            <p className="text-sm leading-relaxed" style={{ color: ATZ_GRAU }}>
              Der dokumentierte Testlauf erzeugte aus einer Daten-Momentaufnahme einen Statusbericht und verschickte ihn per E-Mail. Die Ausgabe demonstriert den Ablauf; sie ist keine verifizierte Aussage über aktuell verfügbare Therapieplätze.
            </p>
            <p className="mt-4 text-xs opacity-50 font-mono" style={{ color: ATZ_GRAU }}>
              Automatisch verschickt mit n8n
            </p>
          </div>

          <div className="mt-6 flex gap-3 rounded-[20px] p-5" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
            <Workflow size={18} className="shrink-0 mt-0.5" style={{ color: ATZ_GELB }} />
            <p className="text-sm leading-relaxed" style={{ color: ATZ_HELLBLAU }}>
              Der Prototyp verarbeitet eine Momentaufnahme, die noch manuell aktualisiert wird. Als Ausbau plane ich einen monatlichen Abgleich neuer Praxiseinträge mit E-Mail- oder Slack-Benachrichtigung und manueller Prüfung vor der Aufnahme ins Verzeichnis.
            </p>
          </div>
        </div>
      </section>

      {/* ── WARUM ICH DAS ZEIGE ───────────────────────────────────────── */}
      <FadeSection id="warum" bg="#ffffff">
        <p className="mb-2 text-sm font-semibold tracking-widest uppercase" style={{ color: ATZ_BLAU }}>
          Warum ich das zeige
        </p>
        <h2 className="mb-5 text-3xl font-bold" style={{ color: ATZ_BLAU }}>
          Anforderungen in einen prüfbaren Ablauf übersetzen
        </h2>
        <p className="max-w-2xl leading-relaxed">
          An diesem Prototyp zeige ich meine Arbeitsweise: Ich definiere den Ablauf,
          formuliere Aufgaben für die KI-gestützte Umsetzung und dokumentiere das Ergebnis.
          Mein Beitrag liegt in Konzeption, Koordination und Erprobung. Erfolgreich ausgeführte
          Schritte und geplante Erweiterungen bleiben dabei klar getrennt. Für eine Festanstellung
          suche ich genau diesen Schwerpunkt in Produktentwicklung und Automatisierung.
        </p>
      </FadeSection>

      {/* ── KONTAKT ────────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: ATZ_BLAU_DUNKEL }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-sm font-semibold tracking-widest uppercase" style={{ color: ATZ_GELB }}>
            Kontakt
          </p>
          <h2 className="mb-7 text-3xl font-bold text-white">Fragen, gerne direkt</h2>
          <div className="flex flex-wrap gap-3">
            <AtzContactReveal icon={<Phone size={14} />} label="Handynummer anzeigen" getValue={async () => (await fetchContact()).phone} />
            <AtzContactReveal icon={<Mail size={14} />} label="Email anzeigen" getValue={async () => (await fetchContact()).email} />
            <AtzButton variant="yellow" href="https://github.com/celtechstarter" icon={<Github size={15} />}>
              GitHub
            </AtzButton>
          </div>
        </div>
      </section>

    </div>
  )
}
