"use client";

import {
  Monitor,
  Code2,
  Bot,
  Cloud,
  Award,
  Terminal,
  Box,
  Layers,
  Globe,
  GitBranch,
  Code,
  FileCode,
  GitFork,
  Key,
  Server,
  Palette,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface Certificate {
  title: string;
  issuer: string;
  url?: string;
}

interface SkillIcon {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skillIcons: SkillIcon[] = [
  { name: "Linux", icon: <Terminal size={22} />, color: "#f97316" },
  { name: "Docker", icon: <Box size={22} />, color: "#378ADD" },
  { name: "AWS", icon: <Layers size={22} />, color: "#f97316" },
  { name: "Azure", icon: <Globe size={22} />, color: "#378ADD" },
  { name: "CI/CD", icon: <GitBranch size={22} />, color: "#1D9E75" },
  { name: "React", icon: <Code size={22} />, color: "#D4537E" },
  { name: "TypeScript", icon: <FileCode size={22} />, color: "#5B8FD8" },
  { name: "Git", icon: <GitFork size={22} />, color: "#f97316" },
  { name: "SSH", icon: <Key size={22} />, color: "#fbbf24" },
  { name: "Node.js", icon: <Server size={22} />, color: "#1D9E75" },
  { name: "Tailwind", icon: <Palette size={22} />, color: "#5B8FD8" },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Produkt & KI-Workflows",
    icon: <Bot size={24} />,
    skills: [
      "Anforderungen strukturieren",
      "Nutzerabläufe planen",
      "Multi-Agent-Workflows",
      "n8n-Prototypen",
    ],
  },
  {
    title: "Technische Kenntnisse",
    icon: <Code2 size={24} />,
    skills: [
      "JavaScript & Python",
      "Frontend & Backend",
      "APIs, HTTP & JSON",
      "React / Next.js: KI-Projekte",
    ],
  },
  {
    title: "Prüfung & Betrieb",
    icon: <Cloud size={24} />,
    skills: [
      "Testfälle & KI-gestützte Reviews",
      "Dokumentation & Refactoring mit KI",
      "Linux / VPS",
      "AWS, Azure & Docker",
    ],
  },
  {
    title: "Meine Werkzeuge",
    icon: <Monitor size={24} />,
    skills: [
      "Claude Code",
      "Claude Cowork",
      "ChatGPT",
      "Lovable",
      "n8n",
      "GitHub & Vercel",
    ],
  },
];

const certificates: Certificate[] = [
  { title: "Cloud- und Webentwicklung", issuer: "Techstarter · Weiterbildung" },
  {
    title: "Linux Essentials",
    issuer: "Linux Professional Institute",
    url: "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000601206/68tg2avpp5",
  },
  {
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com/badges/4ede2f7b-4d7f-4be0-983a-848926348c38/linked_in_profile",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/de-de/users/marcelwelk-5271/credentials/9641b0c7905438cd",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic · Kursabschluss",
    url: "https://verify.skilljar.com/c/wax4356idoe9",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic · Kursabschluss",
    url: "https://verify.skilljar.com/c/mc26kuoa47b2",
  },
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic · Kursabschluss",
    url: "https://verify.skilljar.com/c/5uwkjhqir3ix",
  },
];

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>04</span> Kompetenzen & Werkzeuge
            </p>
            <h2>
              Mein Beitrag.
              <br />
              <em>Meine Werkzeuge.</em>
            </h2>
          </div>
          <p>
            Konzeption, Agentenkoordination und Ergebnisprüfung. Technische
            Kenntnisse aus meiner Weiterbildung verbinde ich mit eigener
            KI-gestützter Projektpraxis.
          </p>
        </div>
        <div className="bento-grid">
          <article className="bento-brief">
            <p className="eyebrow">01 / Anforderungen verstehen</p>
            <h3>
              Aus einer Idee
              <br />
              werden klare Aufgaben.
            </h3>
            <p>
              Ich strukturiere Ziele und Nutzerabläufe, bevor ich die Umsetzung
              mit KI-Werkzeugen koordiniere.
            </p>
            <div className="brief-sheet">
              <span className="brief-label">
                So strukturiere ich ein Arbeitspaket
              </span>
              <h4>Ziel</h4>
              <p>Welches Problem soll die Anwendung vereinfachen?</p>
              <h4>Nutzerablauf</h4>
              <p>Welche Schritte führen Menschen zu ihrem Ergebnis?</p>
              <h4>Prüfkriterien</h4>
              <ul>
                <li>Verständliche Inhalte</li>
                <li>Nachvollziehbare Bedienung</li>
                <li>Überprüfbare Funktionen</li>
              </ul>
            </div>
          </article>
          <article className="bento-agents">
            <p className="eyebrow">02 / KI-Agenten koordinieren</p>
            <h3>
              Passende Werkzeuge.
              <br />
              Klar verteilte Aufgaben.
            </h3>
            <p>
              Ich teile Aufgaben auf und nutze weitere Modelle zur Gegenprüfung.
            </p>
            <div className="agent-flow">
              <span>Konzeption</span>
              <span aria-hidden="true">→</span>
              <span>KI-Umsetzung</span>
              <span aria-hidden="true">→</span>
              <span>Review</span>
            </div>
            <div className="tag-list">
              {[
                "Claude Code",
                "Claude Cowork",
                "ChatGPT",
                "Lovable",
                "n8n",
              ].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
          {skillCategories.slice(1, 3).map((category, i) => (
            <article className="bento-small" key={category.title}>
              <div className="bento-icon">{category.icon}</div>
              <p className="eyebrow">0{i + 3} / Projektpraxis</p>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="tech-line">
          <p>Technologien aus Weiterbildung und KI-Projekten</p>
          <div>
            {skillIcons.map((item) => (
              <span key={item.name}>
                {item.icon}
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div className="certificates">
          <div className="section-heading">
            <h3>Weiterbildung & Zertifikate</h3>
            <p>Technische Kenntnisse und gezielte Weiterbildung.</p>
          </div>
          <div className="certificate-grid">
            {certificates.map((cert) => (
              <article key={cert.title}>
                <Award size={19} />
                <div>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Nachweis ansehen ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
