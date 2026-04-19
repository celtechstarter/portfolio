import type { Metadata } from "next"
import Image from "next/image"
import {
  Phone,
  Mail,
  Globe,
  Github,
  Download,
  ExternalLink,
  MapPin,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProtectedContactLinks } from "@/components/protected-contact-links"

export const metadata: Metadata = {
  title: "Lebenslauf | Marcel Welk",
  description:
    "Lebenslauf von Marcel Welk — IT-Techniker, Cloud & Web-Entwickler. Projekte, Zertifikate und Fähigkeiten.",
}

// ─── Local helper components ─────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-1.5 font-mono text-xs tracking-widest text-primary uppercase">
        {label}
      </p>
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to right, rgba(230,138,46,0.35), transparent)",
          }}
        />
      </div>
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  )
}

function CertBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-primary/25 bg-primary/8 px-3 py-2 font-mono text-xs text-primary">
      {children}
    </span>
  )
}

function StatusBadge({
  label,
  color,
}: {
  label: string
  color: "green" | "blue" | "purple"
}) {
  const styles = {
    green: "border-green-500/30 bg-green-500/10 text-green-400",
    blue: "border-blue-400/30 bg-blue-400/10 text-blue-300",
    purple: "border-purple-400/30 bg-purple-400/10 text-purple-300",
  }
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 font-mono text-xs ${styles[color]}`}
    >
      {label}
    </span>
  )
}

function TimelineDot({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`absolute left-0 top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 bg-background ${
        active ? "border-primary" : "border-border"
      }`}
    >
      <div
        className={`h-2 w-2 rounded-full ${
          active ? "bg-primary" : "bg-muted-foreground/40"
        }`}
      />
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
          {item}
        </li>
      ))}
    </ul>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LebenslaufPage() {
  return (
    <>
      <Navbar basePath="/" />

      <main className="min-h-screen px-6 pb-24 pt-28">
        <div className="mx-auto max-w-4xl space-y-20">

          {/* ── 1. Header Card ─────────────────────────────────────────────── */}
          <section>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">

                {/* Profile image */}
                <div className="flex shrink-0 justify-center md:justify-start">
                  <div className="relative h-[160px] w-[160px] rounded-full ring-2 ring-primary/30 ring-offset-4 ring-offset-background">
                    <Image
                      src="/cel.jpg"
                      alt="Marcel Welk"
                      fill
                      sizes="160px"
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col text-center md:text-left">
                  <h1 className="mb-1 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    Marcel Welk
                  </h1>
                  <p className="mb-3 font-mono text-sm text-primary">
                    IT-Techniker · Cloud &amp; Web-Entwickler · AI Enthusiast
                  </p>
                  <div className="mb-5 flex items-center justify-center gap-1.5 md:justify-start">
                    <MapPin size={13} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Dortmund, Deutschland
                    </span>
                  </div>

                  <ProtectedContactLinks />
                </div>
              </div>
            </div>
          </section>

          {/* ── 2. Über mich ───────────────────────────────────────────────── */}
          <section>
            <SectionHeader label="Profil" title="Über mich" />
            <p className="text-base leading-relaxed text-muted-foreground">
              IT-Techniker und Entwickler aus Dortmund mit Schwerpunkt auf
              Linux-Administration, Cloud-Infrastruktur und Web-Entwicklung.
              Nach meiner Weiterbildung zum Cloud &amp; Web-Experten bei
              Techstarter setze ich auf einen praxisorientierten Ansatz: Ich
              baue echte Projekte, nutze moderne KI-Tools als
              Produktivitätsmultiplikator und dokumentiere meinen Lernprozess
              öffentlich. Aktuell suche ich eine Stelle im Bereich IT-Support,
              Cloud Administration, Linux Sysadmin oder Junior DevOps.
            </p>
          </section>

          {/* ── 3. Projekte ────────────────────────────────────────────────── */}
          <section>
            <SectionHeader label="Portfolio" title="Projekte" />
            <div className="flex flex-col gap-5">

              {/* Poke-Scan V2 */}
              <div className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40">
                <div className="mb-3 flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-semibold text-foreground">
                    Poke-Scan V2
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    2025–2026
                  </span>
                  <StatusBadge label="Aktives Projekt" color="green" />
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  Pokémon-Karten Scanner mit KI-Integration
                </p>
                <div className="mb-4 flex flex-wrap gap-4">
                  <a
                    href="https://poke-scan-v2.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary transition-colors hover:text-primary/80"
                  >
                    <ExternalLink size={12} />
                    Live: poke-scan-v2.vercel.app
                  </a>
                  <a
                    href="https://github.com/celtechstarter/poke-scan-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github size={12} />
                    GitHub
                  </a>
                </div>
                <BulletList
                  items={[
                    "VPS-Server konfiguriert (Ubuntu mit SSH)",
                    "Docker Container für Backend-Services erstellt",
                    "OpenClaw Agent (KI-Automatisierung) installiert und konfiguriert",
                    "Vercel Deployment mit GitHub Actions CI/CD",
                    "Supabase PostgreSQL Datenbank eingerichtet",
                    "API-Integration (NVIDIA NIM, Kimi K2.5 Vision API)",
                    "Mobile Bug selbstständig debuggt und gefixt",
                    "Komplettes Projekt von 0 auf produktiv gebracht",
                  ]}
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Linux VPS",
                    "Docker",
                    "SSH",
                    "Git",
                    "CI/CD",
                    "React",
                    "TypeScript",
                    "PostgreSQL",
                  ].map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              {/* BewerbungsPilot */}
              <div className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40">
                <div className="mb-3 flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-semibold text-foreground">
                    BewerbungsPilot
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    2025
                  </span>
                  <StatusBadge label="Fertig" color="blue" />
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  KI-gestützte Bewerbungsplattform — in unter 2 Tagen gebaut
                </p>
                <div className="mb-4">
                  <a
                    href="https://bewerbungspilot.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary transition-colors hover:text-primary/80"
                  >
                    <ExternalLink size={12} />
                    bewerbungspilot.vercel.app
                  </a>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Vollständige Web-App für KI-gestütztes
                  Bewerbungsmanagement als persönlicher Speed-Benchmark.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Vercel"].map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              {/* Coaching-Website */}
              <div className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40">
                <div className="mb-3 flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-semibold text-foreground">
                    Coaching-Website
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    2026
                  </span>
                  <StatusBadge label="Kundenprojekt" color="purple" />
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  Professionelle Website für Python &amp; Linux Trainer
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  Kompletter Website-Relaunch für einen freiberuflichen
                  Trainer. Design, Entwicklung und Deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "Vercel"].map(
                    (tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    )
                  )}
                </div>
              </div>

              {/* PromptCrafter */}
              <div className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40">
                <div className="mb-3 flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-semibold text-foreground">
                    PromptCrafter
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    2024
                  </span>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  KI-gesteuerte Lernplattform (48h Hackathon &quot;$40k Build
                  Challenge&quot;)
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  React Frontend mit Node.js Backend, deployed auf Google
                  Cloud &amp; Vercel.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Google Cloud"].map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 4. Bildung ─────────────────────────────────────────────────── */}
          <section>
            <SectionHeader label="Qualifikationen" title="Bildung & Weiterbildung" />
            <div className="relative">
              <div className="absolute left-[10px] top-0 bottom-0 w-px bg-border/50" />
              <div className="flex flex-col gap-10">

                {/* Techstarter */}
                <div className="relative pl-9">
                  <TimelineDot active />
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-foreground">
                      Techstarter GmbH
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      2024–2025
                    </span>
                  </div>
                  <p className="mb-3 font-mono text-sm text-primary">
                    Expert:in für Cloud- und Webentwicklung
                  </p>
                  <BulletList
                    items={[
                      "Windows und Linux Systemadministration",
                      "Virtuelle Maschinen und Container (Docker)",
                      "Cloud-Infrastruktur (AWS, Azure)",
                      "Netzwerk-Administration (TCP/IP, DNS, DHCP)",
                      "CI/CD, Git, Automatisierung",
                      "Infrastructure as Code (Terraform, Ansible)",
                    ]}
                  />
                </div>

                {/* Bosch Berufskolleg */}
                <div className="relative pl-9">
                  <TimelineDot />
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-foreground">
                      Robert Bosch Berufskolleg
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      2004–2006
                    </span>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">
                    Fachschule für Technik, Fachrichtung Elektrotechnik
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 5. Berufserfahrung ─────────────────────────────────────────── */}
          <section>
            <SectionHeader label="Karriere" title="Berufserfahrung" />
            <div className="relative">
              <div className="absolute left-[10px] top-0 bottom-0 w-px bg-border/50" />
              <div className="flex flex-col gap-8">

                {/* Grünbau */}
                <div className="relative pl-9">
                  <TimelineDot active />
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-foreground">
                      Grünbau gGmbH Kreativwerkstatt
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      Dortmund · 2019–2024
                    </span>
                  </div>
                  <BulletList
                    items={[
                      "Mitarbeit an kreativen Projekten (Textilien, Keramik, Holz, Farben)",
                      "Zusammenarbeit im Team bei der Umsetzung gemeinsamer Projekte",
                      "Anwendung von Techniken zur Problemlösung im kreativen Prozess",
                    ]}
                  />
                </div>

                {/* Compact entries */}
                {[
                  {
                    name: "Medienhaus Lensing Druck",
                    location: "Dortmund",
                    period: "2017",
                  },
                  {
                    name: "Diakonisches Werk Dortmund",
                    location: "Dortmund",
                    period: "2011–2012",
                  },
                  {
                    name: "Jugendzentrum Scharnhorst",
                    location: "Dortmund",
                    period: "2008–2009",
                  },
                ].map((entry) => (
                  <div key={entry.name} className="relative pl-9">
                    <TimelineDot />
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-semibold text-foreground">
                        {entry.name}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {entry.location} · {entry.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 6. Zertifikate ─────────────────────────────────────────────── */}
          <section>
            <SectionHeader label="Nachweise" title="Zertifikate" />
            <div className="flex flex-wrap gap-3">
              {[
                "Expert:in für Cloud- und Webentwicklung (2025)",
                "LPIC-1 Linux (2024)",
                "AWS re/Start Graduate (2024)",
                "Azure Fundamentals AZ-900 (2024)",
              ].map((cert) => (
                <CertBadge key={cert}>{cert}</CertBadge>
              ))}
            </div>
          </section>

          {/* ── 7. Fähigkeiten ─────────────────────────────────────────────── */}
          <section>
            <SectionHeader label="Kenntnisse" title="Fähigkeiten" />
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Betriebssysteme",
                  skills: [
                    "Windows 10/11 (Installation, Konfiguration, Troubleshooting)",
                    "Linux/Ubuntu Server & Desktop (LPIC-1 zertifiziert)",
                  ],
                },
                {
                  title: "Virtualisierung & Server",
                  skills: [
                    "VPS-Server einrichten und verwalten",
                    "Docker Container",
                    "SSH Remote-Administration",
                    "Server-Monitoring und Wartung",
                  ],
                },
                {
                  title: "Tools & Technologien",
                  skills: [
                    "Git & GitHub",
                    "CI/CD mit GitHub Actions",
                    "Vercel Deployment",
                    "Supabase / PostgreSQL",
                  ],
                },
                {
                  title: "Entwicklung",
                  skills: [
                    "JavaScript, TypeScript, React, Next.js",
                    "Python (Grundlagen)",
                    "Tailwind CSS",
                    "REST APIs",
                  ],
                },
                {
                  title: "KI & Automatisierung",
                  skills: [
                    "Claude (Strategie & Planung)",
                    "Claude Code (Implementierung)",
                    "v0.dev (UI-Generierung)",
                    "AI Agentic Engineering",
                    "Fast Prototyping mit KI-Unterstützung",
                  ],
                },
              ].map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/30"
                >
                  <h3 className="mb-3 text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 8. Sprachen ────────────────────────────────────────────────── */}
          <section>
            <SectionHeader label="Kommunikation" title="Sprachen" />
            <div className="flex flex-wrap gap-4">
              {[
                { lang: "Deutsch", level: "Muttersprache" },
                { lang: "Englisch", level: "B1" },
              ].map(({ lang, level }) => (
                <div
                  key={lang}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4"
                >
                  <span className="font-semibold text-foreground">{lang}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ── 9. Interessen ──────────────────────────────────────────────── */}
          <section>
            <SectionHeader label="Persönliches" title="Interessen" />
            <div className="flex flex-wrap gap-2.5">
              {[
                "Gameserver-Administration",
                "Pokémon-Karten sammeln",
                "Gartenarbeit (Hochbeete, Gewächshaus)",
                "PCs & Laptops reparieren",
              ].map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-secondary px-4 py-2 text-sm text-muted-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* ── 10. Arbeitsweise ───────────────────────────────────────────── */}
          <section>
            <SectionHeader label="Methodik" title="Meine Arbeitsweise" />
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                Ich arbeite nach dem Prinzip &quot;Fast Prototyping mit KI
                &amp; Learning by Doing&quot;. Mein Workflow kombiniert
                strategische Planung mit Claude, UI-Generierung über v0.dev
                und Implementierung via Claude Code. Ich verstehe nicht immer
                jeden Codeblock sofort — aber ich lerne durch Bauen, Debuggen
                und Dokumentieren. Ehrlichkeit über den eigenen Skill-Level
                ist mir wichtiger als aufgeblasene Selbstdarstellung.
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
