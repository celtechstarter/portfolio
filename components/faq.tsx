const faqs = [
  {
    question: "Welche berufliche Aufgabe suchst du?",
    answer:
      "Ich suche eine Festanstellung in KI-gestützter Produktentwicklung oder Automatisierung, bevorzugt remote. Mein Schwerpunkt liegt auf Anforderungsstrukturierung, Nutzerabläufen, der Koordination von KI-Werkzeugen und der Ergebnisprüfung — nicht auf einer klassischen Rolle mit überwiegend manueller Programmierung.",
  },
  {
    question: "Was ist dein eigener Beitrag zu den Projekten?",
    answer:
      "Ich entwickle die Idee und den Funktionsumfang, formuliere Anforderungen und teile Aufgaben auf. Die Code-Umsetzung erfolgt mit KI-Werkzeugen und Agenten. Ich koordiniere die Arbeit, erprobe Nutzerabläufe und lasse technische Befunde durch weitere Prüfungen und Tests untersuchen.",
  },
  {
    question: "Wie arbeitest du mit mehreren Agenten und Modellen?",
    answer:
      "Ich formuliere abgegrenzte Aufgaben und wähle dafür passende Werkzeuge und Modelle. Teilaufgaben laufen auch parallel; weitere Modelle setze ich zur Gegenprüfung ein. Mehrere übereinstimmende KI-Antworten sind für sich allein noch kein Nachweis — dafür braucht es überprüfbare Ergebnisse.",
  },
  {
    question: "Wie gehst du mit Tests und Qualität um?",
    answer:
      "Ich lasse automatisierte Tests für Funktionen und Fehlerfälle erstellen und erweitern. Zusätzlich beauftrage ich Prüfungen auf Code- und Textlogik, Wartbarkeit, Dokumentation, SEO/GEO und technische Datenschutzaspekte. Ein Coverage-Ziel ist eine Orientierung, keine Garantie für Fehlerfreiheit; eine KI-Prüfung ersetzt keine rechtliche Prüfung.",
  },
  {
    question: "Wird der Therapieplatz Finder bereits genutzt?",
    answer:
      "Die Anwendung wird im ambulant betreuten Wohnen für die Arbeit mit Klient:innen erprobt. Erste Rückmeldungen beschreiben eine Erleichterung bei der Unterstützung der Therapieplatzsuche. Ein Psychotherapeut hat mir zusätzliche Verbesserungsvorschläge gegeben. Daraus leite ich keine offizielle Partnerschaft oder Wirksamkeitsgarantie ab.",
  },
  {
    question: "Welche technische Grundlage bringst du mit?",
    answer:
      "Meine einjährige Weiterbildung vermittelte Grundlagen in JavaScript, Python, Frontend- und Backend-Frameworks, Linux und Cloud-Technologien. Dazu kommt Gameserver- und VPS-Praxis von 2017 bis 2024. Heute liegt mein Fokus auf der KI-gestützten Umsetzung eigener Projekte.",
  },
  {
    question: "Wie kann man dich erreichen?",
    answer:
      "Über die E-Mail-Adresse im Kontaktbereich oder über LinkedIn. Auf GitHub sind ausgewählte Repositories meiner KI-gestützt umgesetzten Projekte einsehbar.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="faq-section shell">
      <div>
        <p className="eyebrow">
          <span>07</span> Häufige Fragen
        </p>
        <h2>
          Was du noch
          <br />
          <em>wissen möchtest.</em>
        </h2>
        <p>
          Mein Profil, meine Arbeitsweise und der nächste berufliche Schritt.
        </p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <details key={faq.question}>
            <summary>
              <span className="faq-number">0{i + 1}</span>
              <span>{faq.question}</span>
              <span className="faq-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
