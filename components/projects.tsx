"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Sparkles,
  Brain,
  Briefcase,
  Send,
  Lock,
  Headset,
  Construction,
  X,
  Globe,
  HeartPulse,
  Play,
} from "lucide-react";

type ProjectStatus = "aktiv" | "fertig" | "in_arbeit" | "erprobung";

interface Project {
  title: string;
  description: string;
  contribution?: string;
  practice?: string;
  details?: string;
  tags: string[];
  icon: React.ReactNode;
  image?: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  githubPrivate?: boolean;
  comingSoon?: boolean;
  wip?: boolean;
  status?: ProjectStatus;
  badge?: string;
}

const aiProjects: Project[] = [
  {
    title: "Therapieplatz Finder",
    description:
      "Hilft Menschen, passende Therapiepraxen zu finden und ihre Kontaktversuche im Blick zu behalten.",
    contribution: "Konzeption, Nutzerabläufe und Steuerung der KI-gestützten Umsetzung.",
    practice: "Wird im ambulant betreuten Wohnen für die Arbeit mit Klient:innen erprobt.",
    details: "Die Anwendung verbindet Praxisinformationen und Suchfilter mit E-Mail-Versand und einer Dokumentation der Kontaktversuche. Zur Umsetzung gehören Datenaufbereitung, Tests und Veröffentlichung. Erste Rückmeldungen aus der Erprobung beschreiben eine Erleichterung bei der Unterstützung der Suche.",
    tags: [
      "Python",
      "Anthropic API",
      "Supabase",
      "Resend",
      "GitHub Actions",
      "Vercel",
    ],
    icon: <HeartPulse size={24} />,
    image: "/projects/therapieplatzfinder.png",
    video: "/projects/therapieplatzfinder.webm",
    liveUrl: "https://therapieplatz-finder.de",
    githubPrivate: true,
    status: "erprobung",
  },
  {
    title: "Poke-Scan V2",
    description:
      "Webanwendung zur Erkennung von Pokémon-Karten anhand eines Fotos und zur Anzeige von Preisinformationen. Mein Beitrag: Anforderungen, KI-gestützte Umsetzung mit mehreren Vision-Modellen und Koordination automatisierter Prüfungen.",
    tags: ["React", "TypeScript", "KI Vision", "Vercel"],
    icon: <Sparkles size={24} />,
    image: "/projects/pokescan.png",
    video: "/projects/pokescan.webm",
    liveUrl: "https://poke-scan-v2.vercel.app",
    githubUrl: "https://github.com/celtechstarter/poke-scan-v2",
    status: "aktiv",
  },
  {
    title: "BewerbungsPilot",
    description:
      "Erstellt aus Lebenslauf und Stellenanzeige einen Anschreiben-Entwurf zur persönlichen Prüfung und Überarbeitung. Eigenes Projekt zur KI-gestützten Verarbeitung von Dokumenten und zur schnellen Erprobung eines vollständigen Nutzerablaufs.",
    tags: ["React", "TypeScript", "KI", "Vercel"],
    icon: <Send size={24} />,
    image: "/projects/bewerbungspilot.png",
    video: "/projects/bewerbungspilot.webm",
    liveUrl: "https://bewerbungspilot.vercel.app/",
    githubPrivate: true,
    status: "fertig",
  },
  {
    title: "MARCEL.AI",
    description:
      "Eigener KI-Chatbot, der Besucherfragen zu mir beantwortet. Anthropic API über abgesicherten Next.js-Proxy, Rate-Limiting, E-Mail-Anbindung via Resend. Läuft live auf dieser Seite — einfach unten rechts ausprobieren.",
    tags: ["React", "TypeScript", "Anthropic API", "Next.js"],
    icon: <Brain size={24} />,
    status: "aktiv",
  },
  {
    title: "CELDESK",
    description:
      "Eigenbau IT-Helpdesk mit Ticketsystem, Asset-Verwaltung und Wissensdatenbank. Lernprojekt zur praktischen Auseinandersetzung mit Supportabläufen und internen IT-Werkzeugen.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    icon: <Headset size={24} />,
    image: "/projects/celdesk.png",
    wip: true,
    status: "in_arbeit",
  },
  {
    title: "Marcel CV Boost",
    description:
      "Bewerbungshilfe-Plattform mit Terminbuchung und Admin-Dashboard. Mit Supabase-Backend und Nutzeranmeldung — mein erstes Projekt mit einem Auth-System.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    icon: <Briefcase size={24} />,
    image: "/projects/cvboost.png",
    liveUrl: "https://marcel-cv-boost.lovable.app",
    githubUrl: "https://github.com/celtechstarter/marcel-cv-boost",
    status: "fertig",
  },
];

const webProjects: Project[] = [
  {
    title: "Coaching Knobling",
    description:
      "Webauftritt als Dankeschön für meinen IT-Coach, der mir Programmieren, AWS, CI/CD und Cloud Computing beigebracht hat. Er bietet Python- und IT-Kurse an — die Seite präsentiert sein Kursangebot. Kostenlos umgesetzt mit Next.js, Tailwind und Vercel.",
    tags: ["Next.js", "Tailwind CSS", "UI/UX", "Vercel"],
    icon: <Globe size={24} />,
    image: "/projects/coachknobling.png",
    video: "/projects/coachknobling.webm",
    liveUrl: "https://coaching-knobling.vercel.app/",
    status: "fertig",
    badge: "Unentgeltliches Webprojekt",
  },
  {
    title: "Hawaii Cards",
    description:
      "Landingpage und digitaler Katalog für ein Sammelkarten-Business — unentgeltlich umgesetzt. Fokus auf visuelles Design und Mobile-First.",
    tags: ["Webentwicklung", "Responsive Design", "Asset-Optimierung"],
    icon: <Globe size={24} />,
    image: "/projects/hawaiicards.png",
    video: "/projects/hawaiicards.webm",
    liveUrl: "https://hawaii-cards.vercel.app/",
    status: "fertig",
    badge: "Unentgeltliches Webprojekt",
  },
  {
    title: "Gesunder Fuß",
    description:
      "Lokaler Webauftritt für eine Gesundheitspraxis — unentgeltlich umgesetzt. Fokus auf lokale SEO und übersichtliche Navigation.",
    tags: ["Lokale SEO", "Clean Design", "Mobile First"],
    icon: <Globe size={24} />,
    image: "/projects/gesunderfuss.png",
    video: "/projects/gesunderfuss.webm",
    liveUrl: "https://gesunderfuss.vercel.app/",
    status: "fertig",
    badge: "Unentgeltliches Webprojekt",
  },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={
        "project-status " + (status === "in_arbeit" ? "status-wip" : "")
      }
    >
      {status === "erprobung"
        ? "In Erprobung"
        : status === "in_arbeit"
          ? "In Entwicklung"
          : "Veröffentlicht"}
    </span>
  );
}
type Media = { src: string; alt: string; isVideo?: boolean };
export function Projects() {
  const [media, setMedia] = useState<Media | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (media) dialog.current?.showModal();
  }, [media]);
  function close() {
    dialog.current?.close();
    setMedia(null);
  }
  return (
    <section id="projekte" className="projects-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>03</span> Ausgewählte Arbeit
            </p>
            <h2>
              Ideen, die
              <br />
              <em>praktisch werden.</em>
            </h2>
          </div>
          <p>
            Ich konzipiere Funktionen, koordiniere KI-Werkzeuge und Agenten und
            erprobe die Ergebnisse. Die Code-Umsetzung erfolgt KI-gestützt. Die
            Technologie-Tags beschreiben den jeweiligen Projektaufbau.
          </p>
        </div>
        <div className="project-grid">
          {aiProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured={i === 0}
              onMediaClick={setMedia}
            />
          ))}
        </div>
        <div className="reference-heading">
          <h3>Lernprojekte & Referenzen</h3>
          <p>Weitere Webauftritte aus meiner Projektpraxis.</p>
        </div>
        <div className="reference-grid">
          {webProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onMediaClick={setMedia}
            />
          ))}
        </div>
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-label={media ? "Projektvorschau: " + media.alt : "Projektvorschau"}
        onCancel={close}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {media && (
          <>
            <button
              className="dialog-close"
              onClick={close}
              aria-label="Projektvorschau schließen"
            >
              <X size={22} />
            </button>
            <p>{media.alt}</p>
            {media.isVideo ? (
              <video
                src={media.src}
                controls
                playsInline
                preload="metadata"
                aria-label={media.alt}
              />
            ) : (
              <Image
                src={media.src}
                alt={media.alt}
                width={1280}
                height={720}
              />
            )}
          </>
        )}
      </dialog>
    </section>
  );
}
function ProjectCard({
  project,
  featured = false,
  onMediaClick,
}: {
  project: Project;
  featured?: boolean;
  onMediaClick: (media: Media) => void;
}) {
  const media = {
    src: project.video || project.image || "",
    alt: project.title,
    isVideo: !!project.video,
  };
  return (
    <article className={"project-card " + (featured ? "project-featured" : "")}>
      {project.image && featured ? (
        <div className="featured-media">
          <div className="featured-browser">
            <div className="featured-browser-bar" aria-hidden="true">
              <div><i /><i /><i /></div>
              <span>therapieplatz-finder.de</span>
            </div>
            <button className="featured-screen" onClick={() => onMediaClick(media)} aria-label={project.title + " – Vorschau öffnen"}>
              <Image src={project.image} alt={"Ansicht von " + project.title} fill sizes="(max-width:760px) 90vw, 50vw" />
              <span className="featured-play"><Play size={24} fill="currentColor" /><span>Projektvideo ansehen</span></span>
            </button>
          </div>
          <p className="featured-caption">Einblick in die Anwendung · Aufnahme aus der Entwicklungsphase</p>
        </div>
      ) : project.image ? (
        <button
          className="project-preview"
          onClick={() => onMediaClick(media)}
          aria-label={project.title + " – Vorschau öffnen"}
        >
          <Image
            src={project.image}
            alt={"Ansicht von " + project.title}
            fill
            sizes={
              featured
                ? "(max-width:760px) 90vw, 55vw"
                : "(max-width:760px) 90vw, 40vw"
            }
            className="object-cover object-top"
          />
          {project.video ? (
            <span className="featured-play" aria-hidden="true">
              <Play size={24} fill="currentColor" />
              <span>Projektvideo ansehen</span>
            </span>
          ) : (
            <span className="project-image-label">
              Ansicht vergrößern <ExternalLink size={13} />
            </span>
          )}
        </button>
      ) : (
        <div className="project-placeholder" aria-hidden="true">
          {project.icon}
          <span>{project.title}</span>
        </div>
      )}
      <div className="project-content">
        <div className="project-meta">
          {project.status && <StatusBadge status={project.status} />}{" "}
          {project.badge && <span>{project.badge}</span>}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.contribution && (
          <dl className="project-facts">
            <div><dt>Mein Beitrag</dt><dd>{project.contribution}</dd></div>
            <div><dt>In der Praxis</dt><dd>{project.practice}</dd></div>
          </dl>
        )}
        {project.details && (
          <details className="project-details">
            <summary>Mehr zum Projekt</summary>
            <p>{project.details}</p>
          </details>
        )}
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} /> Projekt öffnen
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.githubPrivate && (
            <span>
              <Lock size={12} /> Privates Repository
            </span>
          )}
          {project.wip && (
            <span>
              <Construction size={13} /> In Entwicklung
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
