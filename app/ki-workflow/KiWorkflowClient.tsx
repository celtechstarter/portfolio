import {
  Bot,
  Wand2,
  Code2,
  Rocket,
  Brain,
  Search,
  Terminal,
  ShieldCheck,
  Database,
} from "lucide-react";
const pipeline = [
  {
    step: "01",
    title: "Anforderungen",
    desc: "Problem, Nutzerablauf und Prüfkriterien",
    tool: "Claude Cowork / ChatGPT",
    icon: <Brain size={20} className="text-accent" />,
  },
  {
    step: "02",
    title: "Aufgabenverteilung",
    desc: "Arbeitspakete, Modelle und Anweisungen",
    tool: "KI-Agenten",
    icon: <Wand2 size={20} className="text-accent" />,
  },
  {
    step: "03",
    title: "KI-Umsetzung",
    desc: "Prototypen, Funktionen und Schnittstellen",
    tool: "Claude Code / Lovable / n8n",
    icon: <Code2 size={20} className="text-accent" />,
  },
  {
    step: "04",
    title: "Gegenprüfung",
    desc: "Tests, Logik und Nutzerabläufe",
    tool: "Weitere Modelle / Testläufe",
    icon: <ShieldCheck size={20} className="text-accent" />,
  },
  {
    step: "05",
    title: "Weiterentwicklung",
    desc: "Veröffentlichen, Feedback und Dokumentation",
    tool: "GitHub / Vercel",
    icon: <Rocket size={20} className="text-accent" />,
  },
];

const arsenal = [
  {
    eyebrow: "Konzeption",
    title: "Vom Problem zum Arbeitspaket",
    description:
      "Ich formuliere Anforderungen, plane Nutzerabläufe und teile Aufgaben in überschaubare Schritte auf. Mein Beitrag liegt darin, das Ziel verständlich zu machen und die KI-gestützte Umsetzung daran auszurichten.",
    tags: ["Anforderungen", "Nutzerabläufe", "Prüfkriterien"],
    icon: <Brain size={26} />,
  },
  {
    eyebrow: "Multi-Agent-Workflows",
    title: "Werkzeuge und Agenten koordinieren",
    description:
      "Claude Cowork, Claude Code und ChatGPT nutze ich auch parallel. Ich wähle Modelle passend zur Aufgabe und lasse abgegrenzte Arbeitspakete bearbeiten. Die Programmierung erfolgt mit KI; ich steuere die Aufgaben und gleiche Ergebnisse mit den Anforderungen ab.",
    tags: ["Claude Cowork", "Claude Code", "ChatGPT"],
    icon: <Terminal size={26} />,
  },
  {
    eyebrow: "Automatisierung & APIs",
    title: "Abläufe verbinden",
    description:
      "Ich konzipiere Abläufe mit Datenabruf, Verarbeitung und Ausgabe und setze sie KI-gestützt um. Mein n8n-Prototyp verbindet HTTP-Abruf, JavaScript-Verarbeitung, einen KI-Bericht und E-Mail-Versand. Weitergehende Automatisierungen kennzeichne ich als geplant.",
    tags: ["n8n", "HTTP / JSON", "APIs"],
    icon: <Bot size={26} />,
  },
  {
    eyebrow: "Qualitätsprüfung",
    title: "Tests und modellübergreifende Reviews",
    description:
      "Ich lasse Tests für Funktionen, Fehlerfälle und behobene Fehler erstellen und erweitern. Weitere Modelle setze ich für Code- und Logikreviews ein. Ein Ziel von beispielsweise 80 % Testabdeckung ist eine Vorgabe, keine Behauptung über den aktuellen Stand aller Projekte. Testläufe und reproduzierbare Befunde zählen mehr als die Zustimmung eines Modells.",
    tags: ["Testkonzeption", "Regressionstests", "KI-gestützte Reviews"],
    icon: <ShieldCheck size={26} />,
  },
  {
    eyebrow: "Wartbarkeit",
    title: "Refactoring und Dokumentation",
    description:
      "Ich beauftrage die Überarbeitung auf klarere Zuständigkeiten, verständliche Namen und weniger Wiederholungen. Dokumentation soll Zweck, Schnittstellen und wichtige Entscheidungen erklären. Änderungen sollen bestehende Funktionen erhalten und durch passende Tests begleitet werden.",
    tags: ["Refactoring mit KI", "Dokumentation", "Nachvollziehbarkeit"],
    icon: <Code2 size={26} />,
  },
  {
    eyebrow: "Inhalte & Auffindbarkeit",
    title: "Textlogik, SEO und GEO",
    description:
      "Mein Prüfprozess bezieht auch sichtbare Texte, Metadaten, Links und strukturierte Daten ein. Ich lasse Widersprüche zwischen Beschreibung und Funktion suchen und Verbesserungen ausarbeiten. Daraus leite ich keine Garantie für Rankings oder Empfehlungen durch KI-Suchen ab.",
    tags: ["Textprüfung", "SEO / GEO", "Strukturierte Daten"],
    icon: <Search size={26} />,
  },
  {
    eyebrow: "Technische Datenschutzaspekte",
    title: "Datenflüsse und Risiken hinterfragen",
    description:
      "Ich lasse prüfen, welche Daten verarbeitet werden und ob Aussagen im Interface dazu passen. KI-gestützte Sicherheits- und Datenschutzchecks helfen, mögliche Probleme zu erkennen. Sie ersetzen weder eine fachliche Rechtsprüfung noch einen unabhängigen Sicherheitsnachweis.",
    tags: ["Datenflüsse", "Risikofragen", "Offene Punkte"],
    icon: <Database size={26} />,
  },
];

export default function KiWorkflowClient() {
  return (
    <div className="shell workflow-page">
      <header className="page-intro">
        <p className="eyebrow">
          Arbeitsweise / KI-gestützte Produktentwicklung
        </p>
        <h1>
          Von der Anforderung
          <br />
          <em>zur Anwendung.</em>
        </h1>
        <p>
          Ich strukturiere Anforderungen und koordiniere die Umsetzung mit
          KI-Werkzeugen und Agenten. Automatisierte Tests, zusätzliche
          Modellreviews und praktische Nutzungsszenarien gehören zu meinem
          Ablauf. Diesen Workflow habe ich auf Grundlage meiner Weiterbildung in
          eigenen Projekten entwickelt.
        </p>
      </header>
      <ol className="pipeline-list">
        {pipeline.map((node) => (
          <li key={node.step}>
            <span className="eyebrow">
              {node.step} {node.icon}
            </span>
            <h2>{node.title}</h2>
            <p>{node.desc}</p>
            <small>{node.tool}</small>
          </li>
        ))}
      </ol>
      <div className="workflow-cards">
        {arsenal.map((card) => (
          <article key={card.title}>
            <p className="eyebrow">
              {card.icon}
              {card.eyebrow}
            </p>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className="tag-list">
              {card.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
