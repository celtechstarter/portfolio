import type { Metadata } from "next";
import Image from "next/image";
import { Github, ExternalLink, MapPin, ChevronDown } from "lucide-react";
import { ProtectedContactLinks } from "@/components/protected-contact-links";

export const metadata: Metadata = {
  title: "Lebenslauf – KI-gestützte Produktentwicklung",
  description:
    "Lebenslauf von Marcel Welk – KI-gestützte Produktentwicklung und Automatisierung aus Dortmund. Projekte, Skills in Web-Entwicklung, KI-Integration, React, Next.js und modernen Deployment-Workflows.",
  alternates: {
    canonical: "https://www.marcelwelk.de/lebenslauf",
  },
  openGraph: {
    title: "Lebenslauf | Marcel Welk",
    description:
      "Marcel Welk – KI-gestützte Produktentwicklung und Automatisierung aus Dortmund. Projekte, Skills und digitale Lösungen auf einen Blick.",
    url: "https://www.marcelwelk.de/lebenslauf",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lebenslauf Marcel Welk – Webdesign & Webentwicklung Dortmund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lebenslauf | Marcel Welk",
    description:
      "KI-gestützte Produktentwicklung und Automatisierung aus Dortmund – Skills, Projekte und digitale Lösungen.",
    images: ["/og-image.jpg"],
  },
};

// ─── Local helper components ─────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-1.5 font-mono text-xs tracking-widest text-primary uppercase">
        {label}
      </p>
      <div className="flex items-center gap-4">
        <h2 className="min-w-0 text-2xl font-bold tracking-tight text-foreground break-words">
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
  );
}

function SubSectionHeader({ title }: { title: string }) {
  return (
    <p className="mb-5 font-mono text-xs tracking-widest text-primary uppercase">
      {title}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}

function CertBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-primary/25 bg-primary/8 px-3 py-2 font-mono text-xs text-primary">
      {children}
    </span>
  );
}

function StatusBadge({
  label,
  color,
}: {
  label: string;
  color: "green" | "blue" | "purple" | "orange";
}) {
  const styles = {
    green: "border-green-500/30 bg-green-500/10 text-green-300",
    blue: "border-blue-400/30 bg-blue-400/10 text-blue-300",
    purple: "border-purple-400/30 bg-purple-400/10 text-purple-300",
    orange: "border-primary/30 bg-primary/10 text-primary",
  };
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 font-mono text-xs ${styles[color]}`}
    >
      {label}
    </span>
  );
}

function TimelineDot({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`absolute left-0 top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 bg-background ${
        active ? "border-primary" : "border-border"
      }`}
    >
      <div
        className={`h-2 w-2 rounded-full ${active ? "bg-primary" : "bg-muted-foreground/40"}`}
      />
    </div>
  );
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
  );
}

function ProjectCard({
  title,
  year,
  badge,
  badgeColor,
  subtitle,
  links,
  description,
  bullets,
  tags,
}: {
  title: string;
  year: string;
  badge: string;
  badgeColor: "green" | "blue" | "purple" | "orange";
  subtitle?: string;
  links?: { href: string; label: string; icon: "external" | "github" }[];
  description?: string;
  bullets?: string[];
  tags: string[];
}) {
  return (
    <details className="group rounded-xl border border-border bg-card transition-colors duration-300 hover:border-primary/40">
      <summary className="flex cursor-pointer list-none items-center gap-2.5 p-5">
        <div className="flex flex-1 flex-wrap items-center gap-2.5">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <span className="font-mono text-xs text-muted-foreground">
            {year}
          </span>
          <StatusBadge label={badge} color={badgeColor} />
        </div>
        <ChevronDown
          size={16}
          className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
        />
      </summary>

      <div className="border-t border-border/50 px-5 pb-5 pt-4">
        {subtitle && (
          <p className="mb-3 text-sm text-muted-foreground">{subtitle}</p>
        )}
        {links && links.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary transition-colors hover:text-primary/80"
              >
                {l.icon === "external" ? (
                  <ExternalLink size={12} />
                ) : (
                  <Github size={12} />
                )}
                {l.label}
              </a>
            ))}
          </div>
        )}
        {description && (
          <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        )}
        {bullets && <BulletList items={bullets} />}
        <div className={`flex flex-wrap gap-2 ${bullets ? "mt-4" : ""}`}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </details>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LebenslaufPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.marcelwelk.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lebenslauf",
        item: "https://www.marcelwelk.de/lebenslauf",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main className="document-page min-h-screen px-6 pb-24 pt-28">
        <div className="mx-auto max-w-4xl space-y-20">
          {/* ── 1. Header Card ─────────────────────────────────────────────── */}
          <section>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex shrink-0 justify-center md:justify-start">
                  <div className="relative h-[160px] w-[160px] rounded-full ring-2 ring-primary/30 ring-offset-4 ring-offset-background">
                    <Image
                      src="/marcel-welk-portrait.png"
                      alt="Marcel Welk"
                      fill
                      sizes="160px"
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col text-center md:text-left">
                  <h1 className="mb-1 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    Marcel Welk
                  </h1>
                  <p className="mb-3 font-mono text-sm text-primary">
                    Menschenzentrierte Web- &amp; KI-Lösungen
                  </p>
                  <div className="mb-5 flex items-center justify-center gap-1.5 md:justify-start">
                    <MapPin size={13} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Dortmund · Remote bevorzugt
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
              Ich konzipiere menschenzentrierte Webanwendungen und koordiniere
              ihre Umsetzung mit KI-Werkzeugen und Agenten. Mein Schwerpunkt
              liegt auf Anforderungen, Nutzerabläufen, Aufgabenverteilung und
              Ergebnisprüfung. Die Programmierung erfolgt KI-gestützt. Aus
              meiner Weiterbildung bringe ich technische Grundlagen mit, die ich
              in eigenen Projekten praktisch einsetze. Ich suche eine
              Festanstellung in KI-gestützter Produktentwicklung oder
              Automatisierung, bevorzugt remote, mit Schwerpunkt auf Konzeption
              und Workflows statt manueller Programmierung.
            </p>
          </section>

          {/* ── 3. Projekte ────────────────────────────────────────────────── */}
          <section>
            <SectionHeader
              label="Portfolio"
              title="KI-gestützt umgesetzte Projekte"
            />
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Die folgenden Funktionen und Technologien beschreiben die
              Projektergebnisse. Mein Beitrag umfasst Konzeption,
              Aufgabensteuerung, Erprobung und die Koordination von Tests und
              Reviews; Code und technische Änderungen entstehen mit
              KI-Werkzeugen.
            </p>

            {/* KI & App-Projekte */}
            <div className="mb-10">
              <SubSectionHeader title="KI & App Development" />
              <div className="flex flex-col gap-3">
                <ProjectCard
                  title="Therapieplatz Finder"
                  year="2026–heute"
                  badge="In Erprobung"
                  badgeColor="green"
                  subtitle="Unterstützung bei Recherche, Kontaktaufnahme und Dokumentation der Therapieplatzsuche"
                  links={[
                    {
                      href: "https://therapieplatz-finder.de",
                      label: "therapieplatz-finder.de",
                      icon: "external",
                    },
                  ]}
                  bullets={[
                    "Konzeption, Planung der Nutzerabläufe und Steuerung der KI-gestützten Umsetzung",
                    "Praxisinformationen aus mehreren Quellen aufbereitet; APIs, Suchfilter, E-Mail-Versand und Dokumentation integriert",
                    "Automatisierte Backend- und Webapp-Tests sowie GitHub Actions zur Prüfung von Änderungen",
                    "Erprobung im ambulant betreuten Wohnen für die Arbeit mit Klient:innen; erste positive Rückmeldungen zur Unterstützung der Suche",
                    "Austausch mit einem Psychotherapeuten zu konkreten Verbesserungen",
                  ]}
                  tags={[
                    "Python",
                    "REST APIs",
                    "Anthropic API",
                    "Supabase",
                    "Testing",
                    "Vercel",
                  ]}
                />
                <ProjectCard
                  title="n8n-Automatisierung"
                  year="2026"
                  badge="Prototyp"
                  badgeColor="orange"
                  description="n8n zunächst mit Docker selbst gehostet, anschließend einen Workflow in n8n Cloud aufgebaut und ausgeführt: zeitgesteuerter HTTP-Datenabruf, JavaScript-Verarbeitung, KI-Bericht und E-Mail-Versand. Ein monatlicher Datenabgleich mit Benachrichtigung und manueller Prüfung ist als Ausbau geplant."
                  tags={[
                    "n8n",
                    "Docker",
                    "HTTP",
                    "JavaScript",
                    "Anthropic API",
                  ]}
                />
                <ProjectCard
                  title="Poke-Scan V2"
                  year="2026"
                  badge="Veröffentlicht"
                  badgeColor="green"
                  subtitle="Pokémon-Karten Scanner mit KI-Vision Integration"
                  links={[
                    {
                      href: "https://poke-scan-v2.vercel.app",
                      label: "poke-scan-v2.vercel.app",
                      icon: "external",
                    },
                    {
                      href: "https://github.com/celtechstarter/poke-scan-v2",
                      label: "GitHub",
                      icon: "github",
                    },
                  ]}
                  bullets={[
                    "Lovable-Abhängigkeiten entfernt, OCR durch echte KI Vision API ersetzt",
                    "VPS-Server konfiguriert (Ubuntu mit SSH), Backend heute als Serverless Functions auf Vercel",
                    "CI-Pipeline mit GitHub Actions (Lint, Type-Check, Build), Auto-Deploy über Vercel",
                    "Supabase PostgreSQL Datenbank eingerichtet",
                    "KI-Vision mit Fallback-Kette: Gemini 2.5 Flash (primär), NVIDIA NIM – Llama 3.2 Vision & Phi-3.5 Vision",
                    "Komplettes Projekt von 0 auf produktiv gebracht",
                  ]}
                  tags={[
                    "React",
                    "TypeScript",
                    "KI Vision",
                    "PostgreSQL",
                    "CI/CD",
                    "Vercel",
                  ]}
                />
                <ProjectCard
                  title="BewerbungsPilot"
                  year=""
                  badge="Veröffentlicht"
                  badgeColor="blue"
                  subtitle="KI-gestützte Erstellung von Anschreiben-Entwürfen"
                  links={[
                    {
                      href: "https://bewerbungspilot.vercel.app",
                      label: "bewerbungspilot.vercel.app",
                      icon: "external",
                    },
                  ]}
                  description="Aus Lebenslauf und Stellenanzeige entsteht ein Entwurf, der persönlich geprüft und überarbeitet werden kann. Eigenes Projekt zur KI-gestützten Dokumentverarbeitung."
                  tags={["Next.js", "TypeScript", "KI", "Vercel"]}
                />
                <ProjectCard
                  title="CELDESK"
                  year=""
                  badge="In Entwicklung"
                  badgeColor="orange"
                  description="IT-Service-Portal mit Ticketsystem, Asset-Verwaltung, Wissensdatenbank und Onboarding-Checklisten — inkl. Dashboard und Dark Mode. Eigenbau nach dem Vorbild von Zendesk."
                  tags={["React", "TypeScript", "Supabase", "Tailwind CSS"]}
                />
                <ProjectCard
                  title="Marcel CV Boost"
                  year="2025"
                  badge="Veröffentlicht"
                  badgeColor="blue"
                  description="Barrierearme Bewerbungshilfe-Plattform. Upload von Bewerbungsunterlagen, Buchungssystem für Beratungstermine und Admin-Dashboard. Mit Nutzeranmeldung und Supabase-Backend."
                  tags={["React", "TypeScript", "Supabase", "Tailwind CSS"]}
                />
                <ProjectCard
                  title="PromptCrafter"
                  year="2024"
                  badge="Hackathon"
                  badgeColor="purple"
                  description={`KI-gesteuerte Lernplattform, entstanden im 48h Hackathon "$40k Build Challenge". React Frontend mit Node.js Backend, deployed auf Google Cloud & Vercel.`}
                  tags={["React", "Node.js", "Google Cloud", "Vercel"]}
                />
              </div>
            </div>

            {/* Lern- & Referenzprojekte */}
            <div>
              <SubSectionHeader title="Lern- & Referenzprojekte" />
              <div className="flex flex-col gap-3">
                <ProjectCard
                  title="Coaching Knobling"
                  year="2026"
                  badge="Unentgeltlich"
                  badgeColor="purple"
                  subtitle="Moderner Webauftritt für ein Coaching-Unternehmen"
                  links={[
                    {
                      href: "https://coaching-knobling.vercel.app/",
                      label: "coaching-knobling.vercel.app",
                      icon: "external",
                    },
                  ]}
                  description="Als Dankeschön für meinen IT-Lehrer Hubertus Knobling (Python, AWS, CI/CD, Azure) gebaut – kostenlos, als Freundschaftsdienst. Design, Entwicklung und Deployment, mit Fokus auf seriöses Design und klare Nutzerführung."
                  tags={["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]}
                />
                <ProjectCard
                  title="Hawaii Cards"
                  year="2025"
                  badge="Unentgeltlich"
                  badgeColor="purple"
                  subtitle="Landingpage und digitaler Katalog für ein Sammelkarten-Business"
                  links={[
                    {
                      href: "https://hawaii-cards.vercel.app/",
                      label: "hawaii-cards.vercel.app",
                      icon: "external",
                    },
                  ]}
                  description="Visuell ansprechende Produktpräsentation mit Fokus auf Responsive Design und Asset-Optimierung."
                  tags={[
                    "Webentwicklung",
                    "Responsive Design",
                    "Asset-Optimierung",
                  ]}
                />
                <ProjectCard
                  title="Gesunder Fuß"
                  year="2025"
                  badge="Unentgeltlich"
                  badgeColor="purple"
                  subtitle="Lokaler Webauftritt für eine Praxis im Gesundheitsbereich"
                  links={[
                    {
                      href: "https://gesunderfuss.vercel.app/",
                      label: "gesunderfuss.vercel.app",
                      icon: "external",
                    },
                  ]}
                  description="Fokus auf Übersichtlichkeit, lokale SEO und Mobile-First Design."
                  tags={["Lokale SEO", "Clean Design", "Mobile First"]}
                />
              </div>
            </div>
          </section>

          {/* ── 4. Bildung ─────────────────────────────────────────────────── */}
          <section>
            <SectionHeader
              label="Qualifikationen"
              title="Bildung & Weiterbildung"
            />
            <div className="relative">
              <div className="absolute left-[10px] top-0 bottom-0 w-px bg-border/50" />
              <div className="flex flex-col gap-10">
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
                      "Grundlagen: JavaScript, Python sowie Frontend- und Backend-Frameworks",
                      "Grundlagen und praktische Übungen: AWS, Azure und Linux",
                      "Virtuelle Maschinen und Container (Docker)",
                      "CI/CD, Git, Automatisierung",
                      "Infrastructure as Code (Terraform, Ansible)",
                      "Netzwerk-Administration (TCP/IP, DNS, DHCP)",
                    ]}
                  />
                </div>
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
            <SectionHeader
              label="Praxis"
              title="Praktische Erfahrung & weitere Stationen"
            />
            <div className="relative">
              <div className="absolute left-[10px] top-0 bottom-0 w-px bg-border/50" />
              <div className="flex flex-col gap-8">
                <div className="relative pl-9">
                  <TimelineDot />
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-foreground">
                      Gameserver-Administration · eigene Praxis
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      2017–2024
                    </span>
                  </div>
                  <BulletList
                    items={[
                      "Installation und Betreuung von Gameservern und VPS-Systemen",
                      "Updates, Backups und Monitoring",
                      "Unterstützung bei technischen Problemen",
                    ]}
                  />
                </div>
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
                "LPI Linux Essentials (2024)",
                "AWS re/Start Graduate (2024)",
                "Azure Fundamentals AZ-900 (2024)",
                "Claude 101 – Anthropic-Kursabschluss (2026)",
                "Claude Code 101 – Anthropic-Kursabschluss (2026)",
                "Introduction to Claude Cowork – Anthropic-Kursabschluss (2026)",
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
                  title: "Grundlagen & Projekttechnologien",
                  skills: [
                    "JavaScript / Python: Grundlagen",
                    "Frontend / Backend: Grundlagen",
                    "React / Next.js: KI-Projekte",
                    "APIs, HTTP & JSON",
                  ],
                },
                {
                  title: "KI & Automatisierung",
                  skills: [
                    "Anforderungen & Nutzerabläufe",
                    "Claude Code / Claude Cowork",
                    "ChatGPT / Lovable",
                    "Multi-Agent-Workflows",
                    "n8n-Prototypen",
                  ],
                },
                {
                  title: "Serverpraxis & Cloud-Grundlagen",
                  skills: [
                    "Linux/Ubuntu Server (praktische Erfahrung)",
                    "Docker-Grundlagen",
                    "AWS & Azure Basics",
                    "GitHub Actions in KI-Projekten",
                    "SSH Remote-Administration",
                  ],
                },
                {
                  title: "Prüfung & Weiterentwicklung",
                  skills: [
                    "Testkonzeption",
                    "KI-gestützte Code- und Textreviews",
                    "Dokumentation / Refactoring mit KI",
                    "GitHub / Vercel",
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
                {
                  lang: "Englisch",
                  level: "Gutes Lese- und Hörverständnis; mündliche Grundlagen",
                },
              ].map(({ lang, level }) => (
                <div
                  key={lang}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card px-6 py-4"
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
                Ich formuliere Anforderungen, wähle Modelle und verteile
                Aufgaben auf KI-Werkzeuge und Agenten. Ich lasse Tests,
                technische Reviews und Prüfungen der Inhalte erstellen und
                erweitern. Dokumentation und KI-gestütztes Refactoring gehören
                ebenso dazu. Prüfaufträge, gemeldete Befunde und bestätigte
                Ergebnisse unterscheide ich voneinander. Diesen Ablauf habe ich
                in eigenen Projekten entwickelt und möchte ihn im Team weiter
                ausbauen.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
