"use client"

import { useState } from "react"
import { Download, Wrench, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"

interface DevlogEntry {
  project: string
  color: string
  inDevelopment?: boolean
  day: number
  date?: string
  title: string
  description: string
  problemSolved?: string
  pdf?: string
}

const PROJECT_COLORS: Record<string, string> = {
  "Therapieplatz Finder": "15, 92, 82",
  "BewerbungsPilot": "74, 222, 128",
  "Poke-Scan V2":    "207, 147, 54",
  "Portfolio":       "96, 165, 250",
  "CelDesk":         "167, 139, 250",
  "SEO/GEO-Scanner": "244, 63, 94",
}

const entries: DevlogEntry[] = [
  // ── Therapieplatz Finder ─────────────────────────────────────────────────
  {
    project: "Therapieplatz Finder",
    color: PROJECT_COLORS["Therapieplatz Finder"],
    day: 1,
    date: "Ende Juni 2026",
    title: "Idee & Architektur: eigene Python-Pipeline",
    description:
      "Ausgangspunkt war die eigene, mühsame Suche nach einem ambulanten Therapieplatz in Dortmund. Entschieden, das zu automatisieren statt es manuell durchzuackern. Architektur festgelegt: ein Scraper sammelt Praxisdaten, eine KI bewertet sie automatisch, ein Mailer verschickt personalisierte Anfragen. Python-Projekt mit Playwright, Anthropic API und Google API Client aufgesetzt.",
  },
  {
    project: "Therapieplatz Finder",
    color: PROJECT_COLORS["Therapieplatz Finder"],
    day: 2,
    title: "Scraper gebaut: Playwright gegen echte Praxis-Seiten",
    description:
      "Automatisiertes Auslesen von hunderten Therapeuten-Profilen: Name, Adresse, Abrechnungsarten, Behandlungsschwerpunkte, freie Plätze. Rate-Limiting eingebaut, damit der Scraper nicht als Angriff gewertet wird, und Fortschrittsanzeige im Terminal für lange Läufe.",
    problemSolved:
      "Einzelne kaputte Profilseiten haben den kompletten Scraper-Lauf abgebrochen → jede Profil-Extraktion einzeln abgesichert, Lauf läuft robust weiter statt bei einem Fehler komplett zu stoppen",
  },
  {
    project: "Therapieplatz Finder",
    color: PROJECT_COLORS["Therapieplatz Finder"],
    day: 3,
    title: "KI-Bewertung mit der Anthropic API",
    description:
      "Jedes gescrapte Profil geht automatisch durch Claude: Akzeptiert die Praxis gesetzlich Versicherte (auch implizit aus dem Freitext erkannt), passt das Angebot (Einzeltherapie, Erwachsene), wie hoch ist die Stadtteil-Priorität, gibt es freie Plätze. Nur Profile, die wirklich passen, landen in der finalen Liste — samt kurzer, nachvollziehbarer Begründung pro Entscheidung.",
  },
  {
    project: "Therapieplatz Finder",
    color: PROJECT_COLORS["Therapieplatz Finder"],
    day: 4,
    title: "Vom CLI-Tool zur echten Web-App",
    description:
      "Aus dem Kommandozeilen-Tool eine richtige Web-App gemacht: Ergebnisliste mit Filtern nach Priorität/Kasse/freien Plätzen, Fortschrittsanzeige, editierbare Anfrage-Mails direkt in der Karte. Deployment auf Vercel, Backend als Serverless-Funktionen statt lokalem Server.",
  },
  {
    project: "Therapieplatz Finder",
    color: PROJECT_COLORS["Therapieplatz Finder"],
    day: 5,
    date: "10.08.2026",
    title: "Login-System & vollständiger Security-Audit",
    description:
      "Geteiltes Demo-Passwort durch echtes Login ersetzt: Supabase Auth mit Magic Link und Google-OAuth. Danach einen vollständigen Security-Audit von Backend und Web-App durchgeführt (Auth, API-Routen, XSS/CSRF), kritische und hohe Befunde direkt gefixt und eine dauerhafte Testsuite aufgebaut (pytest fürs Backend, Node-Tests für die Web-App).",
    problemSolved:
      "Kontaktdaten der Praxen waren ungeschützt über die API abrufbar → Auslieferung an ein gültiges, serverseitig geprüftes Login-Token gebunden",
  },
  {
    project: "Therapieplatz Finder",
    color: PROJECT_COLORS["Therapieplatz Finder"],
    day: 6,
    date: "10.–12.08.2026",
    title: "Bot-Schutz, echter E-Mail-Versand & Barrierefreiheit",
    description:
      "Cloudflare Turnstile vor den Login gesetzt, eigener SMTP-Provider für den Auth-Versand eingerichtet. Kern-Feature gebaut: echter E-Mail-Versand über Resend, damit Anfragen wirklich bei den Praxen ankommen — inklusive sicherer Test-Karte für den Selbstversuch ohne echte Praxis zu kontaktieren. Parallel WCAG 2.1 AA umgesetzt: Kontraste, Tastaturbedienung, ARIA-Labels, Vorlesefunktion per Web Speech API.",
    problemSolved:
      "Magic-Link-Login war ohne Bot-Schutz missbrauchbar (Security-Audit-Befund) → Cloudflare Turnstile vor Login und Registrierung ergänzt",
  },
  {
    project: "Therapieplatz Finder",
    color: PROJECT_COLORS["Therapieplatz Finder"],
    day: 7,
    date: "09.–12.08.2026",
    title: "Milo: eigener KI-Assistent als Begleiter",
    description:
      "Milo als KI-Assistent in die App gebaut: begleitet durch die Suche, beantwortet Fragen zur Nutzung, mit fester KI-Kennzeichnung gemäß EU AI Act Art. 50. Von einer Buttons-Leiste über mehrere Layout-Iterationen bis zur finalen, einklappbaren Chat-Figur mit echten Claude-API-Antworten.",
    problemSolved:
      "Erste Milo-Version überdeckte auf schmalen Handy-Bildschirmen Karten und Footer → mehrere Layout-Runden bis zur kompakten, einklappbaren Lösung",
  },
  {
    project: "Therapieplatz Finder",
    color: PROJECT_COLORS["Therapieplatz Finder"],
    day: 8,
    date: "11.08.2026",
    title: "Zweite Datenquelle & Email-Nachrecherche",
    description:
      "Offizielles KVWL-Arztregister als zweite Datenquelle eingebunden und mit den bestehenden Profilen dedupliziert — ohne gemeinsamen Schlüssel zwischen beiden Quellen, also über normalisierten Namen- und Adressabgleich. Fehlende E-Mail-Adressen gezielt nachrecherchiert, dabei automatisierte Suchtreffer stichprobenartig geprüft.",
    problemSolved:
      "Automatisierte Email-Suche lieferte vereinzelt falsche Treffer (z. B. große fremde Plattformen statt der echten Praxis-Adresse) → Domain-Filter und Dateiendungs-Prüfung ergänzt, bevor der nächste Batch lief",
  },
  {
    project: "Therapieplatz Finder",
    color: PROJECT_COLORS["Therapieplatz Finder"],
    day: 9,
    date: "13.08.2026",
    title: "Datenbank-Rebuild: kniffliger Dedup-Bug vor Go-Live gefunden",
    description:
      "Bestehende und neue Profile zu einem finalen Datensatz zusammengeführt — Nutzer-IDs bewusst stabil gehalten, weil der Fortschritt (kontaktiert/nicht kontaktiert) lokal im Browser der Nutzer:innen gespeichert wird. Beim Abgleich aufgefallen: zwei unterschiedliche Praxen im selben Gebäude hatten durch eine Kartendienst-Eigenheit dieselbe interne Kennung und wären beim Zusammenführen kollabiert.",
    problemSolved:
      "Zwei verschiedene Praxen teilten sich eine aus Koordinaten abgeleitete interne Kennung → Merge-Logik auf einen eindeutigen Verbund-Schlüssel umgestellt, Datenintegrität vor dem Deployment verifiziert statt danach einen stillen Datenfehler live zu haben",
  },

  // ── SEO/GEO-Scanner ──────────────────────────────────────────────────────
  {
    project: "SEO/GEO-Scanner",
    color: PROJECT_COLORS["SEO/GEO-Scanner"],
    day: 1,
    title: "Website-Audit-Tool aus Neugier gebaut — und wieder eingestampft",
    description:
      "Python-Script gebaut, das automatisiert lokale Dortmunder Unternehmens-Websites auf SSL, Impressum, DSGVO-Risiken (externe Fonts/Embeds), Mobil-Optimierung, Barrierefreiheit und veraltetes Design prüft und daraus einen Lead-Score errechnet. Auf eine echte Liste von 61 Firmen losgelassen, technisch lief es sauber durch. Die Idee dahinter — die Ergebnisse für Kaltakquise zu nutzen — danach bewusst verworfen: ungefragt Firmen anzuschreiben ist nicht meins.",
    problemSolved:
      "Ohne Login oder APIs objektiv vergleichbare Kriterien gebraucht, um Websites zu bewerten → eigene Heuristik aus SSL-Status, Meta-Viewport, img-alt-Tags, Copyright-Jahr und CMS-Fingerabdruck kombiniert zu einem einzigen Score statt Bauchgefühl",
  },

  // ── BewerbungsPilot ──────────────────────────────────────────────────────
  {
    project: "BewerbungsPilot",
    color: PROJECT_COLORS["BewerbungsPilot"],
    day: 1,
    title: "Idee und UI Aufbau",
    description:
      "Idee für einen KI-Bewerbungsgenerator gehabt. UI mit v0.dev generiert, Grundstruktur mit React und TypeScript aufgesetzt. Lebenslauf-Upload und Stellenanzeigen-Eingabe als Kernfeatures geplant. Abends schon den ersten Prototyp im Browser.",
  },
  {
    project: "BewerbungsPilot",
    color: PROJECT_COLORS["BewerbungsPilot"],
    day: 2,
    title: "KI-Integration und Go Live",
    description:
      "KI-Anbindung für die Anschreiben-Generierung eingebaut. Upload-Logik fertiggestellt, auf Vercel deployed und getestet. Das Ding funktioniert: Lebenslauf hochladen, Stellenanzeige reinkopieren, fertiges Anschreiben in Minuten. Repo auf privat gestellt.",
    problemSolved:
      "CORS-Fehler beim API Call → Vercel Serverless Function als Proxy eingesetzt",
  },

  // ── Poke-Scan V2 ─────────────────────────────────────────────────────────
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 1,
    date: "18.02.2026",
    title: "Projekt Kickoff & Server Setup",
    description:
      "VPS bei Hostinger gemietet und eingerichtet. OpenClaw installiert, Telegram Bot eingerichtet, erste Projektstruktur angelegt. Ziel: Pokémon-Karten via KI erkennen und bewerten.",
    pdf: "/docs/Daily_PokeScan_Tag1_18-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 2,
    date: "19.02.2026",
    title: "Repository & erste Tests",
    description:
      "Repository auf den VPS geklont, alle Abhängigkeiten installiert. Erste Tests mit der bestehenden Codebasis, Architektur analysiert und Entwicklungsplan für die KI-Integration festgelegt.",
    pdf: "/docs/Daily_PokeScan_Tag2_19-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 3,
    date: "20.02.2026",
    title: "OCR raus, KI Vision rein",
    description:
      "OCR-Ansatz komplett verworfen: holografische Karten hatten 0% Erkennungsrate. Strategischer Pivot zu KI-Vision mit Kimi K2.5. Neues Architekturkonzept für die Bildanalyse-Pipeline entwickelt.",
    problemSolved:
      "OCR versagt bei holografischen Karten → Entscheidung für KI-Vision (Kimi K2.5) als fundamentaler Ansatzwechsel",
    pdf: "/docs/Daily_PokeScan_Tag3_20-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 4,
    date: "21.02.2026",
    title: "NVIDIA NIM & Kartenerkennung live",
    description:
      "NVIDIA NIM API angebunden, Llama 3.2 Vision eingesetzt — Kartenerkennung funktioniert! 3-Modell-Fallback-Chain gebaut (NIM → Kimi → Fallback). Zwei UI-Designs parallel mit v0.dev erstellt und das bessere ausgewählt.",
    pdf: "/docs/Daily_PokeScan_Tag4_21-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 5,
    date: "22.02.2026",
    title: "Mobile, PWA & Kamera",
    description:
      "Mobile-Optimierung abgeschlossen, PWA-Support eingebaut. Direkte Kamera-Integration fürs Handy via getUserMedia — Karten jetzt direkt abfotografieren statt hochladen.",
    pdf: "/docs/Daily_PokeScan_Tag5_22-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 6,
    date: "23.02.2026",
    title: "Preissystem & Cleanup",
    description:
      "Vollständiges Preissystem aufgebaut: Cardmarket EUR, Pokémon TCG API und Supabase als Cache-Layer. Alte Lovable-Abhängigkeiten entfernt, Codebase bereinigt.",
    problemSolved:
      "CORS-Fehler bei der Preis-API → Serverless Function als Proxy, alte Lovable-Abhängigkeiten entfernt",
    pdf: "/docs/Daily_PokeScan_Tag6_23-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 7,
    date: "24.02.2026",
    title: "Präzision & Launch",
    description:
      "Set-Code-Erkennung verbessert, Vintage-Karten-Support eingebaut, Multi-Zonen-Scan implementiert. Erkennungsgenauigkeit durch intensives Prompt-Engineering auf ein neues Niveau gebracht. Deployment.",
    pdf: "/docs/Daily_PokeScan_Tag7_24-02-2026.pdf",
  },
  {
    project: "Poke-Scan V2",
    color: PROJECT_COLORS["Poke-Scan V2"],
    day: 8,
    date: "16.03.2026",
    title: "Großer Cleanup: 130+ Dateien raus",
    description:
      "Kompletter Projekt-Cleanup durchgeführt. 130+ tote Dateien gelöscht.",
  },

  // ── Portfolio ─────────────────────────────────────────────────────────────
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 1,
    title: "Design und Grundgerüst",
    description:
      "Portfolio-Webseite mit v0.dev designed. Dark-Mode Tech-Style gewählt. Next.js-Projekt mit Tailwind CSS und shadcn/ui aufgesetzt. Hero Section, Projekte, Skills und Kontakt-Bereich geplant.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 2,
    title: "Anpassen und Live gehen",
    description:
      "Alle Links und Texte angepasst: Projekt-URLs, Email, GitHub. Mit Claude Code auf GitHub gepusht und auf Vercel deployed. URL auf marcel-welk.vercel.app. Profilbild eingebaut.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 3,
    title: "Projekte & Devlog",
    description:
      "Alle Projekte als Karten hinzugefügt (Poke-Scan, BewerbungsPilot, CV Boost, PromptCrafter). Devlog-Seite mit eingebetteten Daily-Report-PDFs erstellt. Reihenfolge der Projekte optimiert.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 4,
    title: "Kompletter Rewrite: Über mich",
    description:
      "Den alten \"Angehender IT-Fachmann\"-Text komplett überarbeitet. Neuer Titel: \"Builder. Problemlöser. KI-Nerd.\" Ehrlicher Text über Arbeitsweise mit KI, Pareto-Prinzip-Infobutton eingebaut. Zusammen mit einem Kollegen die Richtung festgelegt.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 5,
    title: "Animierter Hintergrund & Design Upgrade",
    description:
      "Canvas-basierte Floating-Thoughts-Animation gebaut: IT-Begriffe schweben durch den Raum, verbinden sich bei Mausnähe. Insider-Witze, mehrere Sprachen. GitHub-Activity-Bereich und Devlog-Timeline eingebaut. Copy-Buttons bei Kontakt-Karten.",
    problemSolved:
      "Z-Index-Konflikte zwischen Canvas-Animation und Content-Overlay → Fixed positioning mit isolierten Stacking Contexts",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 6,
    date: "16.03.2026",
    title: "Lebenslauf-Seite & Clean Code",
    description:
      "Eigene Lebenslauf-Seite gebaut mit Timeline-Design, Profilbild und Skills als Badge-Pills. Neue \"Meine Arbeitsweise\" Section für ehrliche Darstellung des KI-Workflows. Favicon aus Profilbild erstellt, SEO Meta-Tags und OpenGraph-Daten eingerichtet. Danach kompletter Cleanup: ungenutzte Komponenten und Dependencies entfernt, Dead Code und console.logs bereinigt.",
    problemSolved:
      "Inline-Lebenslauf wirkt professioneller als ein eingebetteter PDF-Viewer",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 7,
    title: "Bento-Redesign & Agentic Workflow",
    description:
      "Kompletter Design-Pivot auf ein symmetrisches Bento-Grid für Projekte und Workflow. Den KI-Stack radikal ehrlich dokumentiert: Strategiewechsel zu Gemini/Antigravity und Gemini Agents als primäre \"Daily Driver\" (nahezu Null API-Kosten). Claude Code nur als Backup eingesetzt, wenn Gemini-Kontingente erschöpft waren.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 8,
    title: "KI-Workflow & Authentizität",
    description:
      "Die Unterseite /ki-workflow neu aufgebaut. Fokus auf die 'Macher-Story': Hauptschulabschluss, ADHS als Hyperfokus-Motor und KI als Navigator. Interaktive KI-Pipeline integriert (Planung ➔ Engineering ➔ Deployment). Werkzeugkasten-Logik implementiert: Multimodales Battle-Testing zwischen Grok, Nano Banana und Firefly.",
    problemSolved:
      "Asymmetrisches Grid wirkte unruhig → Umstellung auf striktes, symmetrisches Bento-Layout für bessere UI-Ruhe",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 9,
    title: "Master-Audit & SEO Dortmund",
    description:
      "Vollständiges Portfolio-Audit durchgeführt: SEO-Fokus auf 'Webentwicklung Dortmund' geschärft. Metadata auf allen Unterseiten ergänzt (ki-workflow, devlog, impressum, datenschutz). Server/Client-Split für korrekte Next.js Metadata-Architektur implementiert. Dortmund-Keywords strategisch in Titles und Descriptions eingebaut.",
    problemSolved:
      "export const metadata funktioniert nicht in 'use client' Dateien → Server-Wrapper-Pattern: page.tsx als Server Component, UI-Logik in *Client.tsx ausgelagert",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 10,
    date: "01.05.2026",
    title: "Domain-Migration & SEO-Relaunch",
    description:
      "Komplette Migration auf marcelwelk.de abgeschlossen. Canonical-Tags auf allen Seiten explizit gesetzt – Next.js setzt diese nicht automatisch, was Google dazu veranlasst hatte die www-Version als kanonisch zu wählen. Sitemap bereinigt: Impressum und Datenschutz raus (waren in robots.ts als disallowed markiert – Widerspruch behoben). Page-Titles aller Unterseiten für SEO erweitert. Google Search Console eingerichtet, Sitemap submitted.",
    problemSolved:
      "Google indexierte www.marcelwelk.de statt marcelwelk.de → alternates.canonical auf allen Seiten ergänzt, Vercel www-Redirect auf 308 Permanent gesetzt",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 11,
    date: "01.05.2026",
    title: "Security-Audit: Kontaktdaten & HTTP-Headers",
    description:
      "Vollständiger Sicherheits-Audit durchgeführt. Kritischer Fund: Telefonnummer, E-Mail und Adresse waren als Base64 im öffentlichen GitHub-Code — Base64 ist kein Schutz, trivial decodierbar. Lösung: Server-API-Route /api/contact gebaut, Daten in Umgebungsvariablen ausgelagert (.env.local, Vercel Settings). Straßenadresse aus JSON-LD entfernt. Fehlende HTTP Security-Headers ergänzt: X-Frame-Options (Clickjacking), X-Content-Type-Options, Referrer-Policy, Permissions-Policy.",
    problemSolved:
      "atob() im Client-Bundle ist faktisch öffentlich → alle sensiblen Daten auf serverseitige Env-Variablen umgestellt, API-Route liefert Daten nur auf Anfrage",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 12,
    date: "01.05.2026",
    title: "Cleanup & MW Favicon",
    description:
      "Projekt-Cleanup: drei ungenutzte Dateien gelöscht (alte og-image.png, Duplikat in /projects/, nicht referenzierte apple-icon.png). MW Monogramm-Favicon als SVG erstellt – skaliert verlustfrei auf jede Größe. Ersetzt das Profilbild-Favicon, das bei 16x16px als unklarer Fleck wirkte. Google zeigt das neue Icon in den Suchergebnissen neben der URL.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 13,
    date: "01.05.2026",
    title: "Automatische Projekt-Videos mit Playwright",
    description:
      "Playwright-Script entwickelt das alle Projektseiten automatisch öffnet, durchscrollt und als WebM-Video aufnimmt. 5 Videos in einem Durchlauf generiert (1280×720). Video-Lightbox in Projekt-Karten eingebaut: Hover zeigt 'Größer ansehen', Klick öffnet Modal mit Browser-Controls. Scroll-Geschwindigkeit auf ~8 Sekunden optimiert. Script per npm run record jederzeit neu ausführbar.",
    problemSolved:
      "PokeScan V2 zeigte 7s weißen Ladebildschirm → pro-Projekt waitMs eingeführt, pokescan bekommt 10s Wartezeit vor Aufnahmestart",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 14,
    date: "01.05.2026",
    title: "FAQ-Sektion & GEO-Optimierung",
    description:
      "FAQ-Bereich mit 10 Fragen und Antworten auf der Homepage eingebaut. Accordion-Design mit Framer Motion Animationen. Wichtig: FAQPage JSON-LD Schema direkt im Component hinterlegt – damit können KI-Suchen wie ChatGPT, Perplexity und Gemini die Inhalte strukturiert auslesen und in Antworten einbinden. Navbar-Link auf #faq ergänzt. Inhalt fokussiert auf One-Pager für Unternehmen mit schlechtem SEO/GEO, eigenes Scanning-Tool und KI-Tool-Auswahl.",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 15,
    date: "01.05.2026",
    title: "Scratch-Schutz für Datenschutzerklärung",
    description:
      "Den Verantwortlicher-Block in der Datenschutzerklärung (Name, Adresse, E-Mail) mit dem gleichen Canvas-Rubbelfeld-Prinzip wie im Impressum geschützt. Neue Komponente ScratchVerantwortlicher gebaut – kompakt (100px), auf die drei relevanten Felder reduziert. Daten kommen weiterhin ausschließlich aus der serverseitigen /api/contact Route.",
    problemSolved:
      "Datenschutz zeigte Kontaktdaten im Klartext im HTML-Quelltext → Rubbelfeld verhindert automatisches Auslesen durch Scraper",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 16,
    date: "02.05.2026",
    title: "Security-Hardening: CSP, Bot-Schutz & Rate-Limit",
    description:
      "Content Security Policy Header ergänzt – blockiert das Laden externer Skripte von fremden Domains (XSS-Schutz). robots.ts um Trainings-Bots erweitert: GPTBot, Google-Extended, CCBot, anthropic-ai und Bytespider gesperrt. Wichtige Unterscheidung: Trainings-Crawler blockiert, GEO-Crawler (PerplexityBot, ChatGPT-User) weiterhin erlaubt – SEO/GEO bleibt intakt. /api/contact mit Rate-Limit abgesichert: max. 20 Anfragen pro IP pro Minute. /lebenslauf.pdf und /api/ für alle Crawler gesperrt.",
    problemSolved:
      "Trainings-Bots vs. Suchbots sind unterschiedliche User-Agents – gezieltes Blockieren möglich ohne GEO-Sichtbarkeit zu verlieren",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 17,
    date: "02.05.2026",
    title: "Next.js Update & Schema-Upgrade",
    description:
      "npm audit aufgedeckt: Next.js 16.1.6 hatte 5 aktive CVEs (HTTP Request Smuggling, DoS, CSRF-Bypass). Update auf 16.2.4 alle kritischen Lücken geschlossen. JSON-LD Schemas grundlegend ausgebaut: WebSite Schema neu ergänzt, Person Schema um description, knowsLanguage, hasOccupation und alumniOf (Techstarter) erweitert, LocalBusiness um serviceType und areaServed NRW ergänzt. BreadcrumbList auf /devlog und /lebenslauf hinzugefügt. Alle Schemas mit @id verknüpft – KI-Systeme können Zusammenhänge zwischen Entitäten verstehen.",
    problemSolved:
      "npm audit zeigte high-severity CVEs in Next.js → npm audit fix --force auf 16.2.4 aktualisiert, verbleibende postcss-Warnung ist bekanntes False Positive (nur Build-Tool, kein Runtime-Code)",
  },

  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 18,
    date: "14.05.2026",
    title: "SEO/GEO-Audit: KI-Crawler freigegeben & www konsolidiert",
    description:
      "Portfolio durch Lovable SEO Spark laufen lassen und war überrascht wie viele stille Probleme drinsteckten. Ergebnisse mit Claude besprochen, Fix-Plan gemacht, Claude Code hat alles umgesetzt. www vs. non-www war überall inkonsistent – der Code hat auf marcelwelk.de gezeigt, die Live-Seite läuft auf www.marcelwelk.de. Canonical-Tags, OG-URLs, Sitemap, robots.ts – alles hat auf die falsche Version gezeigt. Für Google sind das zwei verschiedene Seiten, Duplicate-Content-Risiko. Alle KI-Crawler waren blockiert: GPTBot, anthropic-ai, Google-Extended, CCBot – alle auf disallow. Als jemand der sich als KI-Nerd positioniert ungefähr so sinnvoll wie ein Elektriker der seinen eigenen Strom abschaltet. 'Dortmund' kam im sichtbaren Hero-Text nicht vor, nur in einem winzigen grauen Micro-Text – für Google praktisch unsichtbar. JSON-LD Schema war veraltet: jobTitle noch auf 'Freelance Webdesigner', LinkedIn fehlte in sameAs, Claude Code und Workflow-Automatisierung komplett vergessen. nocache stand im robots Meta-Tag und hat den Snippet-Refresh von Google verzögert. Fix: Alles auf www vereinheitlicht, AI-Crawler komplett freigegeben, Hero-Subheadline auf 'Webentwickler & KI-Spezialist aus Dortmund' angepasst, JSON-LD aktualisiert, ProfessionalService-Schema neu ergänzt, nocache raus. GEO ist für mich wichtiger als klassisches SEO – wenn jemand einen KI-Assistenten fragt 'Webentwickler Dortmund KI' will ich dort auftauchen. Erkenntnis: SEO und GEO sind zwei verschiedene Spiele. Klassische Optimierung reicht nicht mehr.",
    problemSolved:
      "marcelwelk.de und www.marcelwelk.de wurden von Google als zwei separate Seiten behandelt → alle URLs auf www.marcelwelk.de konsolidiert. KI-Crawler waren durch robots.ts komplett gesperrt → freigegeben, da GEO-Sichtbarkeit für die eigene Positionierung als KI-Entwickler entscheidend ist",
  },

  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 20,
    date: "09.07.2026",
    title: "Vom Agentur-Look zum ehrlichen Bewerbungsportfolio",
    description:
      "Audit mit Claude ergab klare Widersprüche: Der Footer-Banner sagt 'keine bezahlten Dienstleistungen', während der Rest der Seite Freelance-Wording in Meta-Tags und Schemas hatte, ein LocalBusiness-Schema mit priceRange und openingHours, eine FAQ im Verkaufsmodus und 'Kundenprojekt'-Labels auf Lernprojekten. Alles zusammen ein klassischer Widerspruch zwischen ehrlicher Intention und gewachsenem Code. Tech-Claims im Lebenslauf gegen den echten Poke-Scan-V2-Code auf GitHub verifiziert und korrigiert: Kimi raus (war nie primär), Docker raus (kein Dockerfile im Repo), Gemini 2.5 Flash als primäres Vision-Modell rein, CI-Pipeline mit GitHub Actions korrekt beschrieben. Claude-Cowork-Zertifikat ergänzt. LocalBusiness- und ProfessionalService-Schemas komplett entfernt – deklarieren mich maschinenlesbar als Gewerbebetrieb. Freelance-Wording aus Hero, Lebenslauf-Titles, Keywords und JSON-LD entfernt.",
    problemSolved:
      "SEO/GEO-Übung und Bewerbungsportfolio vertragen sich – aber nur wenn die Seite selbst erklärt warum sie aussieht wie eine Agentur-Seite. Neue FAQ-Frage dazu ergänzt: 'Warum sieht dieses Portfolio aus wie eine Agentur-Website?'",
  },
  {
    project: "Portfolio",
    color: PROJECT_COLORS["Portfolio"],
    day: 19,
    date: "19.05.2026",
    title: "MARCEL.AI – eigener KI-Chatbot live",
    description:
      "Heute war ein langer Tag voller 502 Fehler. Die Idee: Ein eigener KI-Chatbot auf der Portfolio-Seite, der Besucher direkt beantwortet wer ich bin und was ich kann. MARCEL.AI läuft jetzt unten rechts. Claude Code hat die komplette Architektur gebaut — Next.js API Route als Proxy damit der API Key nicht im Browser landet, Rate Limiting gegen Spam, Origin-Check gegen externe Aufrufe, und einen System Prompt der gegen Prompt Injection gesichert ist. Resend übernimmt die Email-Benachrichtigungen. Domain verifiziert, API Key eingetragen — wenn jemand den Chat startet kommt eine Email von noreply@marcelwelk.de an.",
    problemSolved:
      "Mehrere 502 Fehler hintereinander: Edge Runtime auf Vercel unterstützt @anthropic-ai/sdk nicht → export const runtime = 'nodejs' ergänzt. Falscher Modellname (claude-sonnet-4-5 existiert nicht) → auf claude-sonnet-4-6 korrigiert. Resend v6 wirft bei API-Fehlern keine Exception sondern gibt { data, error } zurück → silent fail gefixt. Email-Spam durch fehlenden Session-Check → sessionId per crypto.randomUUID() eingebaut.",
  },

  // ── CelDesk ───────────────────────────────────────────────────────────────
  {
    project: "CelDesk",
    color: PROJECT_COLORS["CelDesk"],
    inDevelopment: true,
    day: 1,
    title: "Recherche und Konzept",
    description:
      "IT-Helpdesk-Tools recherchiert: Zendesk, Freshdesk, Jira Service Management, OTRS. Entschieden ein eigenes Mini-Helpdesk zu bauen um die Arbeitsweise von IT-Support-Teams zu verstehen. Features geplant: Ticketsystem, Asset-Verwaltung, Wissensdatenbank, optional KI-Chatbot.",
  },
  {
    project: "CelDesk",
    color: PROJECT_COLORS["CelDesk"],
    inDevelopment: true,
    day: 2,
    title: "UI Aufbau",
    description:
      "React-Projekt mit dem bewährten Stack aufgesetzt (React, TypeScript, Tailwind, Supabase). UI für das Ticketsystem gebaut: Dashboard mit Statistiken, Ticket-Erstellung, Status-Workflow (Offen → In Bearbeitung → Gelöst), Kategorien (Hardware, Software, Netzwerk). Backend-Anbindung an Supabase noch offen.",
  },
]

function EntryCard({ entry, isLast }: { entry: DevlogEntry; isLast: boolean }) {
  const [open, setOpen] = useState(false)
  const rgb = entry.color
  const key = `${entry.project}-${entry.day}`

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="relative flex gap-6"
    >
      {/* Timeline dot */}
      <div className="relative mt-1 shrink-0">
        <div
          className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 bg-background transition-colors duration-200"
          style={{ borderColor: open ? `rgba(${rgb}, 0.9)` : `rgba(${rgb}, 0.4)` }}
        >
          <div
            className="h-2 w-2 rounded-full transition-all duration-200"
            style={{ background: `rgba(${rgb}, ${open ? 1 : 0.6})` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className={`flex-1 ${!isLast ? "pb-8 border-b border-border/20" : ""}`}>
        {/* Clickable header */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left group/btn"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              {/* Badges row */}
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase"
                  style={{
                    color: `rgba(${rgb}, 0.9)`,
                    background: `rgba(${rgb}, 0.1)`,
                    border: `1px solid rgba(${rgb}, 0.2)`,
                  }}
                >
                  {entry.project}
                </span>
                {entry.inDevelopment && (
                  <span className="rounded-full border border-purple-400/20 px-2 py-0.5 font-mono text-[10px] text-purple-400/60 tracking-wide">
                    In Entwicklung
                  </span>
                )}
                <span
                  className="font-mono text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: `rgba(${rgb}, 0.4)` }}
                >
                  Tag {String(entry.day).padStart(2, "0")}
                </span>
                {entry.date && (
                  <span className="font-mono text-[10px] text-muted-foreground/40">
                    {entry.date}
                  </span>
                )}
              </div>
              {/* Title */}
              <p className="text-sm font-semibold leading-snug text-foreground group-hover/btn:text-primary transition-colors duration-150">
                {entry.title}
              </p>
            </div>
            {/* Chevron */}
            <ChevronDown
              size={15}
              className="mt-0.5 shrink-0 text-muted-foreground/40 transition-transform duration-300 group-hover/btn:text-muted-foreground"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </div>
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key={key}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>

                {entry.problemSolved && (
                  <div
                    className="flex items-start gap-2 rounded-lg px-3 py-2"
                    style={{
                      background: `rgba(${rgb}, 0.05)`,
                      border: `1px solid rgba(${rgb}, 0.18)`,
                    }}
                  >
                    <Wrench
                      size={13}
                      className="mt-0.5 shrink-0"
                      style={{ color: `rgba(${rgb}, 0.65)` }}
                    />
                    <p
                      className="font-mono text-xs leading-relaxed"
                      style={{ color: `rgba(${rgb}, 0.65)` }}
                    >
                      {entry.problemSolved}
                    </p>
                  </div>
                )}

                {entry.pdf && (
                  <a
                    href={entry.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-xs transition-all duration-200"
                    style={{
                      color: `rgba(${rgb}, 0.6)`,
                      border: `1px solid rgba(${rgb}, 0.2)`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.color = `rgba(${rgb}, 1)`
                      el.style.borderColor = `rgba(${rgb}, 0.5)`
                      el.style.background = `rgba(${rgb}, 0.05)`
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.color = `rgba(${rgb}, 0.6)`
                      el.style.borderColor = `rgba(${rgb}, 0.2)`
                      el.style.background = "transparent"
                    }}
                  >
                    <Download size={11} />
                    Daily Report PDF
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function DevlogClient() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filtered = activeFilter
    ? entries.filter(e => e.project === activeFilter)
    : entries

  return (
    <>
      <Navbar basePath="/" />

      <div className="min-h-screen px-6 pb-24 pt-28">
        <div className="mx-auto max-w-2xl">

          {/* Header */}
          <div className="mb-12 text-center">
            <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
              Build Journal
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Development Log
            </h1>
            <p className="font-mono text-sm text-muted-foreground">
              Alle Projekte · Chronologisch · Ehrlich geloggt
            </p>
          </div>

          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveFilter(null)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200 ${
                activeFilter === null
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-border/30 text-muted-foreground hover:border-white/20 hover:text-foreground"
              }`}
            >
              Alle ({entries.length})
            </button>
            {Object.entries(PROJECT_COLORS).map(([name, rgb]) => {
              const count = entries.filter(e => e.project === name).length
              const isActive = activeFilter === name
              return (
                <button
                  key={name}
                  onClick={() => setActiveFilter(isActive ? null : name)}
                  className="rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200"
                  style={isActive ? {
                    background: `rgba(${rgb}, 0.15)`,
                    borderColor: `rgba(${rgb}, 0.6)`,
                    color: `rgba(${rgb}, 1)`,
                  } : {
                    borderColor: `rgba(${rgb}, 0.25)`,
                    color: `rgba(${rgb}, 0.55)`,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.color = `rgba(${rgb}, 0.9)`
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = `rgba(${rgb}, 0.5)`
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.color = `rgba(${rgb}, 0.55)`
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = `rgba(${rgb}, 0.25)`
                    }
                  }}
                >
                  {name} ({count})
                </button>
              )
            })}
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border/30" />
            <div className="flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((entry, idx) => (
                  <EntryCard
                    key={`${entry.project}-${entry.day}`}
                    entry={entry}
                    isLast={idx === filtered.length - 1}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center font-mono text-xs text-muted-foreground/30">
            // {filtered.length} von {entries.length} Einträgen · {Object.keys(PROJECT_COLORS).length} Projekte
          </div>

        </div>
      </div>
    </>
  )
}
