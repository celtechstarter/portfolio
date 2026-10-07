"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    "question": "Welche berufliche Aufgabe suchst du?",
    "answer": "Ich suche eine Festanstellung in KI-gestützter Produktentwicklung oder Automatisierung, bevorzugt remote. Mein Schwerpunkt liegt auf Anforderungsstrukturierung, Nutzerabläufen, der Koordination von KI-Werkzeugen und der Ergebnisprüfung — nicht auf einer klassischen Rolle mit überwiegend manueller Programmierung."
  },
  {
    "question": "Was ist dein eigener Beitrag zu den Projekten?",
    "answer": "Ich entwickle die Idee und den Funktionsumfang, formuliere Anforderungen und teile Aufgaben auf. Die Code-Umsetzung erfolgt mit KI-Werkzeugen und Agenten. Ich koordiniere die Arbeit, erprobe Nutzerabläufe und lasse technische Befunde durch weitere Prüfungen und Tests untersuchen."
  },
  {
    "question": "Wie arbeitest du mit mehreren Agenten und Modellen?",
    "answer": "Ich formuliere abgegrenzte Aufgaben und wähle dafür passende Werkzeuge und Modelle. Teilaufgaben laufen auch parallel; weitere Modelle setze ich zur Gegenprüfung ein. Mehrere übereinstimmende KI-Antworten sind für sich allein noch kein Nachweis — dafür braucht es überprüfbare Ergebnisse."
  },
  {
    "question": "Wie gehst du mit Tests und Qualität um?",
    "answer": "Ich lasse automatisierte Tests für Funktionen und Fehlerfälle erstellen und erweitern. Zusätzlich beauftrage ich Prüfungen auf Code- und Textlogik, Wartbarkeit, Dokumentation, SEO/GEO und technische Datenschutzaspekte. Ein Coverage-Ziel ist eine Orientierung, keine Garantie für Fehlerfreiheit; eine KI-Prüfung ersetzt keine rechtliche Prüfung."
  },
  {
    "question": "Wird der Therapieplatz Finder bereits genutzt?",
    "answer": "Die Anwendung wird im ambulant betreuten Wohnen für die Arbeit mit Klient:innen erprobt. Erste Rückmeldungen beschreiben eine Erleichterung bei der Unterstützung der Therapieplatzsuche. Ein Psychotherapeut hat mir zusätzliche Verbesserungsvorschläge gegeben. Daraus leite ich keine offizielle Partnerschaft oder Wirksamkeitsgarantie ab."
  },
  {
    "question": "Welche technische Grundlage bringst du mit?",
    "answer": "Meine einjährige Weiterbildung vermittelte Grundlagen in JavaScript, Python, Frontend- und Backend-Frameworks, Linux und Cloud-Technologien. Dazu kommt Gameserver- und VPS-Praxis von 2017 bis 2024. Heute liegt mein Fokus auf der KI-gestützten Umsetzung eigener Projekte."
  },
  {
    "question": "Wie kann man dich erreichen?",
    "answer": "Über die E-Mail-Adresse im Kontaktbereich oder über LinkedIn. Auf GitHub sind ausgewählte Repositories meiner KI-gestützt umgesetzten Projekte einsehbar."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto">
            Antworten zu meiner Projekterfahrung, Arbeitsweise und beruflichen Ausrichtung.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="glass-card glow-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-primary"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
