import { ArrowUpRight, GitBranch, GitCommitHorizontal } from "lucide-react";
export function GitHubActivity() {
  return (
    <section id="github" className="shell evidence-section">
      <div>
        <p className="eyebrow">
          <span>06</span> Nachvollziehbare Projektarbeit
        </p>
        <h2>
          Nicht nur das Ergebnis.
          <br />
          Auch der Weg dorthin.
        </h2>
        <p>
          In meinen öffentlichen Repositories und im Devlog dokumentiere ich
          Änderungen, Lernschritte und die KI-gestützte Umsetzung.
        </p>
      </div>
      <div className="evidence-links">
        <a
          href="https://github.com/celtechstarter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitBranch size={24} />
          <span>
            <strong>GitHub</strong>
            <small>Repositories & Änderungsverlauf</small>
          </span>
          <ArrowUpRight size={22} />
        </a>
        <a href="/devlog">
          <GitCommitHorizontal size={24} />
          <span>
            <strong>Projekt-Devlog</strong>
            <small>Entscheidungen & Weiterentwicklung</small>
          </span>
          <ArrowUpRight size={22} />
        </a>
      </div>
    </section>
  );
}
