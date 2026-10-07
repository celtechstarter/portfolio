import { ArrowUpRight } from "lucide-react";
const nodes = [
  {
    id: "01",
    title: "Konzipieren",
    desc: "Nutzerbedarf verstehen, Anforderungen und Prüfkriterien formulieren.",
  },
  {
    id: "02",
    title: "Koordinieren",
    desc: "Arbeitspakete verteilen und die KI-gestützte Umsetzung steuern.",
  },
  {
    id: "03",
    title: "Prüfen",
    desc: "Tests, Reviews und praktische Nutzerabläufe zusammenführen.",
  },
  {
    id: "04",
    title: "Weiterentwickeln",
    desc: "Veröffentlichen, Rückmeldungen aufnehmen und nachvollziehbar verbessern.",
  },
];
export function WorkflowSteps() {
  return (
    <section className="workflow-section" id="arbeitsweise">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>05</span> Meine Arbeitsweise
            </p>
            <h2>
              Von der Idee
              <br />
              zur nutzbaren Lösung.
            </h2>
          </div>
          <p>
            KI übernimmt die Code-Umsetzung. Ich strukturiere die Aufgaben,
            koordiniere Werkzeuge und prüfe Ergebnisse gegen die Anforderungen.
          </p>
        </div>
        <ol className="workflow-grid">
          {nodes.map((node) => (
            <li key={node.id}>
              <span className="step-number">{node.id}</span>
              <h3>{node.title}</h3>
              <p>{node.desc}</p>
            </li>
          ))}
        </ol>
        <a className="text-link" href="/ki-workflow">
          Den gesamten KI-Workflow ansehen <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
