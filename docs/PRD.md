# PRD – Kesya's OnlyPaws

Status: Entwurf v1 (2026-11-10)
Dieses Dokument ist die **Source of Truth** für das Projekt `training-website`.
Was hier nicht steht, wird nicht gebaut.

## 1. Ziel

Eine kleine, statische Lernwebsite, auf der Freund:innen und Familie
„Kesyas Weisheiten“ lernen: drei kurze Lektionen aus Katzensicht und ein Quiz
am Ende. Die Seitentexte sind mit Humor geschrieben und in drei Sprachen verfügbar: Englisch, Deutsch und Katzisch (reines „Miau“).

## 2. Zielgruppe

- Freund:innen und Familie, die Kesya kennen oder kennenlernen wollen.
- Kein Vorwissen nötig. Die Seite wird meist auf dem Handy über einen geteilten Link geöffnet.

## 3. User Stories

1. Als Besucher:in möchte ich auf der Startseite sofort sehen, worum es geht und wer Kesya ist, damit ich Lust auf die Lektionen bekomme.
2. Als Besucher:in möchte ich die drei Lektionen in einer festen Reihenfolge lesen und von jeder Lektion zur nächsten springen können.
3. Als Besucher:in möchte ich Fotos von Kesya sehen, die zur jeweiligen Lektion passen.
4. Als Besucher:in möchte ich im Quiz testen, was ich gelernt habe, und nach jeder Antwort erfahren, ob sie richtig war und warum.
5. Als Besucher:in möchte ich am Ende mein Ergebnis sehen (z. B. „3 of 4 correct“) und eine kurze, lustige Bewertung von Kesya und ein passendes Kesya-Foto bekommen.
6. Als Besucher:in mit Handy möchte ich alles ohne Zoomen und ohne seitliches Scrollen lesen und bedienen können.
7. Als Besucher:in, die nur die Tastatur nutzt, möchte ich die Navigation und das Quiz vollständig bedienen können.
8. Als Besucher:in möchte ich die Sprache (Englisch, Deutsch, Katzisch) auf jeder Seite wechseln und dabei auf derselben Seite bleiben.

## 4. Inhalte

### Lektionen

| # | Titel (Arbeitstitel) | Kerninhalt | Foto |
|---|---|---|---|
| 1 | The Art of the Nap | Sonnenplätze finden, Fensterbank-Strategie, die richtige Schlafposition | Sonnen-Nahaufnahme, Fensterbank, je ein Foto pro Schlafposition (loaf, donut, wedge) |
| 2 | Operation Second Breakfast | Wie man den Menschen überzeugt, dass das erste Frühstück nie stattgefunden hat. Futterpuzzle als „Arbeit“ | „The face“, Futterteller, Futterturm, umgekipptes Futterpuzzle |
| 3 | The Zoomie Party | Menschliche Diener vom Bildschirm weglocken und zum Mitspielen bringen | Gaming, „The stare“, Treteln, Plastiksack, Garten |

Jede Lektion: ca. 150–300 Wörter (2–3 Minuten Lesezeit), mehrere Fotos als „Beweise“ für die Tipps, am Ende „Kesya's Tip“ als hervorgehobener Merksatz, danach ein „Your turn“-Satz, der zum Ausprobieren im eigenen Alltag einlädt.

Jede Lektion beginnt mit einer kurzen Alltagsszene (2–4 Sätze), die nur das Problem zeigt, ohne die Lösung vorwegzunehmen, und mit einer Frage endet. Erst danach folgen Regeln oder Schritte („Beispiel vor Theorie“).

### Quiz

- 3 Multiple-Choice-Fragen, je eine pro Lektion, mit je 3 Antwortmöglichkeiten und genau einer richtigen Antwort.
- 1 Zuordnungsfrage „Help Kesya sort her photo album!“: 3 Fotos (Napping, Eating, Zoomies) per Drag & Drop den Aktivitäten zuordnen, dann „Check“. 1 Punkt, wenn alle 3 richtig liegen. Alternative ohne Ziehen: Foto antippen/Enter, dann Aktivität antippen/Enter.
- Nach jeder Antwort: Feedback „Correct!“ / „Not quite“ plus ein Satz Erklärung.
- Am Ende: Punktzahl und eine von drei Bewertungen mit Foto (alles richtig: Thron; einer falsch: Glamour; sonst: grimmig) sowie ein Link zurück zu Lektion 1.
- Die Multiple-Choice-Fragen beschreiben eine kurze Situation, in der man eine Entscheidung trifft (nicht nur Fakten abfragen). Die Erklärung sagt, warum die Antwort funktioniert.

## 5. Seitenanforderungen

| Seite | URL | Inhalt |
|---|---|---|
| Startseite | `/` | Titel „Kesya's OnlyPaws“, kurzes Intro zu Kesya, Foto, Links zu den 3 Lektionen und zum Quiz |
| Lektion 1–3 | `/lessons/nap`, `/lessons/second-breakfast`, `/lessons/zoomies` | Text, Foto(s), „Kesya's Tip“, Link zur nächsten Lektion (Lektion 3 → Quiz) |
| Quiz | `/quiz` | 4 Fragen (davon 1 Drag & Drop), Feedback, Endergebnis mit Foto |

Jede Seite gibt es in drei Sprachen: Englisch ohne Präfix (`/quiz`), Deutsch mit `/de` (`/de/quiz`), Katzisch mit `/cat` (`/cat/quiz`). Insgesamt 15 Seiten. Katzisch besteht nur aus Katzenlauten und Emojis; die Reihenfolge der Quiz-Antworten ist in allen Sprachen gleich. Alt-Texte bleiben auf Katzisch englisch, damit Screenreader Sinnvolles vorlesen.

Auf jeder Seite: dieselbe Kopfzeile mit Navigation (Home, Lessons 1–3, Quiz) und Sprachumschalter (EN · DE · 🐾 Miau) sowie dieselbe Fußzeile.

### Design

- Edel und einheitlich im Stil „dark & gold“ (angelehnt an das OnlyPaws-Poster): dunkler Hintergrund, Gold als Akzent, cremefarbener Text; feste Farbpalette als CSS-Variablen. Serifenschrift für Überschriften, Schreibschrift nur für den Seitentitel, nur vorinstallierte Schriften (kein Download).
- Dekorative Katzenpfoten (selbst gezeichnetes SVG) als Hintergrund- und Schmuckelement. Sie sind rein dekorativ, liegen nie über dem Text und werden von Screenreadern ignoriert.
- Text bleibt gut lesbar: ausreichender Kontrast, ruhige Lesefläche hinter dem Text.

### Fotos

- Die 4 gelieferten Fotos und das OnlyPaws-Poster (Startseite) werden ins Projekt kopiert und mit Astros Bildoptimierung (`astro:assets`) ausgeliefert.
- Jedes Foto hat einen beschreibenden Alt-Text.

## 6. In Scope

- Astro (statische Seiten), plain CSS, Lektionen als Markdown- oder Astro-Seiten
- Quiz-Logik als Browser-JavaScript/TypeScript ohne Framework
- Responsives Layout (Handy und Desktop)
- Tastaturbedienung und sichtbarer Fokus

## 7. Out of Scope

- Backend, Datenbank, Login, CMS, externe APIs, React oder andere UI-Frameworks
- Fortschritt speichern (z. B. „Lektion erledigt“), auch nicht im Browser-Speicher
- Gewählte Sprache merken (Browser-Speicher) oder automatisch nach Browsersprache umleiten
- Dark Mode, Animationen (außer dezenten Hover-Effekten), Bestenliste, Timer
- Mehrere Quizze, zufällige Fragenreihenfolge, Teilen-Buttons
- Deployment über Vercel (übernimmt ggf. später jemand anderes). Veröffentlicht wird stattdessen per GitHub Pages unter https://bekky912.github.io/training-website/ (Entscheidung vom 2026-11-10).

## 8. Akzeptanzkriterien (messbar)

1. `npm run build` läuft ohne Fehler durch.
2. Die Website hat genau 5 Seiten: Startseite, 3 Lektionen, Quiz. Alle sind über die Navigation auf jeder Seite erreichbar, und kein Link führt ins Leere.
3. Jede Lektion hat einen Link zur nächsten Lektion. Lektion 3 verlinkt auf das Quiz.
4. Das Quiz hat 4 Fragen: 3 Multiple-Choice-Fragen mit je 3 Antwortmöglichkeiten und 1 Drag-&-Drop-Zuordnung mit 3 Fotos.
5. Nach dem Klick auf eine Antwort erscheint sofort das Feedback (richtig/falsch plus Erklärung). Die Frage kann danach nicht mehr geändert werden.
6. Sind alle Fragen beantwortet, wird das Ergebnis „X of 4 correct“ mit passendem Foto im Browser berechnet und angezeigt, ohne Server und ohne Neuladen.
7. Bei 375 px Breite (Handy) gibt es auf keiner Seite horizontales Scrollen. Texte und Fotos passen in die Breite.
8. Bei 1280 px Breite (Desktop) ist die Textspalte höchstens ca. 70 Zeichen breit. Die Seite wirkt nicht „gestreckt“.
9. Navigation und Quiz sind komplett per Tastatur bedienbar (Tab, Enter/Leertaste). Das fokussierte Element ist sichtbar hervorgehoben.
10. Jedes Foto hat einen nicht-leeren Alt-Text (bei den Drag-&-Drop-Fotos trägt der Button die Beschreibung, das Bild selbst hat dann `alt=""`). Dekorative Pfoten haben keinen Alt-Text bzw. `aria-hidden="true"`.
11. Alle Seiten nutzen dasselbe Layout (Kopfzeile, Fußzeile, Farben, Schrift).
12. Das Repository enthält weder `node_modules/` noch `dist/` noch `.env`, aber `package-lock.json`.
13. Die Drag-&-Drop-Frage ist mit Maus (Ziehen), Finger (Ziehen oder Antippen) und Tastatur (Enter/Leertaste) lösbar. „Check“ ist erst aktiv, wenn alle 3 Fotos zugeordnet sind. Danach ist jede Zuordnung mit ✓/✗ markiert und gesperrt.
14. Alle 15 Seiten (5 Seiten × 3 Sprachen) werden gebaut. Auf jeder Seite führt der Sprachumschalter zur selben Seite in der anderen Sprache, die aktuelle Sprache ist markiert, und `<html lang>` passt zur Sprache (`en`, `de`, `en-x-cat`).
15. In jeder Lektion steht vor der ersten Zwischenüberschrift eine Problemszene mit abschließender Frage. Die Szene nennt keine der Regeln oder Schritte der Lektion.

## 9. Entscheidungen

- Foto 1 (Gaming) wird unverändert verwendet. Die abgebildete Person ist mit der Veröffentlichung einverstanden.
- Farbpalette: ursprünglich Pink, Türkis, Sonnengelb. Am 2026-11-10 nach Feedback geändert zu „dark & gold“ (nahezu Schwarz, Gold, Creme) im Stil des OnlyPaws-Posters. Das Poster selbst ist auf der Startseite zu sehen (nach Feedback gewünscht).
- Lernprinzip „Beispiel vor Theorie“ (2026-11-11): Ergebnis des Subagent-Reviews (siehe `docs/AGENT_REVIEW.md`). Jede Lektion startet mit einer Problemszene samt Frage statt mit einer Behauptung oder Definition. Die Szene verrät die Lösung nicht.
- Aufbau nach 4MAT (2026-11-11): Szene mit Frage (Why), Regeln mit Fotos (What), Quiz mit Entscheidungsfragen (How), „Your turn“-Satz nach dem Tipp (What if). Ergebnis des zweiten Reviews mit dem überarbeiteten `learning-reviewer`.
