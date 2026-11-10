# PRD – Kesya's OnlyPaws

Status: Entwurf v1 (2026-11-10)
Dieses Dokument ist die **Source of Truth** für das Projekt `training-website`.
Was hier nicht steht, wird nicht gebaut.

## 1. Ziel

Eine kleine, statische Lernwebsite, auf der Freund:innen und Familie
„Kesyas Weisheiten“ lernen: drei kurze Lektionen aus Katzensicht und ein Quiz
am Ende. Die Seitentexte sind auf Englisch und mit Humor geschrieben.

## 2. Zielgruppe

- Freund:innen und Familie, die Kesya kennen oder kennenlernen wollen.
- Kein Vorwissen nötig. Die Seite wird meist auf dem Handy über einen geteilten Link geöffnet.

## 3. User Stories

1. Als Besucher:in möchte ich auf der Startseite sofort sehen, worum es geht und wer Kesya ist, damit ich Lust auf die Lektionen bekomme.
2. Als Besucher:in möchte ich die drei Lektionen in einer festen Reihenfolge lesen und von jeder Lektion zur nächsten springen können.
3. Als Besucher:in möchte ich Fotos von Kesya sehen, die zur jeweiligen Lektion passen.
4. Als Besucher:in möchte ich im Quiz testen, was ich gelernt habe, und nach jeder Antwort erfahren, ob sie richtig war und warum.
5. Als Besucher:in möchte ich am Ende mein Ergebnis sehen (z. B. „2 of 3 correct“) und eine kurze, lustige Bewertung von Kesya bekommen.
6. Als Besucher:in mit Handy möchte ich alles ohne Zoomen und ohne seitliches Scrollen lesen und bedienen können.
7. Als Besucher:in, die nur die Tastatur nutzt, möchte ich die Navigation und das Quiz vollständig bedienen können.

## 4. Inhalte

### Lektionen

| # | Titel (Arbeitstitel) | Kerninhalt | Foto |
|---|---|---|---|
| 1 | The Art of the Nap | Sonnenplätze finden, Fensterbank-Strategie, die richtige Schlafposition | Kesya schlafend in der Sonne am Fenster |
| 2 | Operation Second Breakfast | Wie man den Menschen überzeugt, dass das erste Frühstück nie stattgefunden hat. Futterpuzzle als „Arbeit“ | Kesya am Futterteller und am Futterturm |
| 3 | The Zoomie Party | Menschliche Diener vom Bildschirm weglocken und zum Mitspielen bringen | Kesya schaut beim Gaming zu |

Jede Lektion: ca. 150–300 Wörter (2–3 Minuten Lesezeit), 1–2 Fotos, am Ende „Kesya's Tip“ als hervorgehobener Merksatz.

### Quiz

- 3 Multiple-Choice-Fragen, je eine pro Lektion, mit je 3 Antwortmöglichkeiten und genau einer richtigen Antwort.
- Nach jeder Antwort: Feedback „Correct!“ / „Not quite“ plus ein Satz Erklärung.
- Am Ende: Punktzahl und eine von drei kurzen Bewertungen (0–1, 2, 3 richtig).

## 5. Seitenanforderungen

| Seite | URL | Inhalt |
|---|---|---|
| Startseite | `/` | Titel „Kesya's OnlyPaws“, kurzes Intro zu Kesya, Foto, Links zu den 3 Lektionen und zum Quiz |
| Lektion 1–3 | `/lessons/nap`, `/lessons/second-breakfast`, `/lessons/zoomies` | Text, Foto(s), „Kesya's Tip“, Link zur nächsten Lektion (Lektion 3 → Quiz) |
| Quiz | `/quiz` | 3 Fragen, Feedback, Endergebnis |

Auf jeder Seite: dieselbe Kopfzeile mit Navigation (Home, Lessons 1–3, Quiz) und dieselbe Fußzeile.

### Design

- Bunt, aber einheitlich: eine feste Farbpalette aus max. 4 Farben (als CSS-Variablen), eine Schriftart.
- Dekorative Katzenpfoten (selbst gezeichnetes SVG) als Hintergrund- und Schmuckelement. Sie sind rein dekorativ, liegen nie über dem Text und werden von Screenreadern ignoriert.
- Text bleibt gut lesbar: ausreichender Kontrast, ruhige Lesefläche hinter dem Text.

### Fotos

- Die 4 gelieferten Fotos werden ins Projekt kopiert und mit Astros Bildoptimierung (`astro:assets`) ausgeliefert.
- Jedes Foto hat einen beschreibenden Alt-Text.

## 6. In Scope

- Astro (statische Seiten), plain CSS, Lektionen als Markdown- oder Astro-Seiten
- Quiz-Logik als Browser-JavaScript/TypeScript ohne Framework
- Responsives Layout (Handy und Desktop)
- Tastaturbedienung und sichtbarer Fokus

## 7. Out of Scope

- Backend, Datenbank, Login, CMS, externe APIs, React oder andere UI-Frameworks
- Fortschritt speichern (z. B. „Lektion erledigt“), auch nicht im Browser-Speicher
- Dark Mode, Animationen (außer dezenten Hover-Effekten), Bestenliste, Timer
- Mehrere Quizze, zufällige Fragenreihenfolge, Teilen-Buttons
- Deployment (z. B. Vercel). Das übernimmt später jemand anderes.

## 8. Akzeptanzkriterien (messbar)

1. `npm run build` läuft ohne Fehler durch.
2. Die Website hat genau 5 Seiten: Startseite, 3 Lektionen, Quiz. Alle sind über die Navigation auf jeder Seite erreichbar, und kein Link führt ins Leere.
3. Jede Lektion hat einen Link zur nächsten Lektion. Lektion 3 verlinkt auf das Quiz.
4. Das Quiz hat mindestens 3 Fragen mit je 3 Antwortmöglichkeiten.
5. Nach dem Klick auf eine Antwort erscheint sofort das Feedback (richtig/falsch plus Erklärung). Die Frage kann danach nicht mehr geändert werden.
6. Sind alle Fragen beantwortet, wird das Ergebnis „X of 3 correct“ im Browser berechnet und angezeigt, ohne Server und ohne Neuladen.
7. Bei 375 px Breite (Handy) gibt es auf keiner Seite horizontales Scrollen. Texte und Fotos passen in die Breite.
8. Bei 1280 px Breite (Desktop) ist die Textspalte höchstens ca. 70 Zeichen breit. Die Seite wirkt nicht „gestreckt“.
9. Navigation und Quiz sind komplett per Tastatur bedienbar (Tab, Enter/Leertaste). Das fokussierte Element ist sichtbar hervorgehoben.
10. Jedes Foto hat einen nicht-leeren Alt-Text. Dekorative Pfoten haben keinen Alt-Text bzw. `aria-hidden="true"`.
11. Alle Seiten nutzen dasselbe Layout (Kopfzeile, Fußzeile, Farben, Schrift).
12. Das Repository enthält weder `node_modules/` noch `dist/` noch `.env`, aber `package-lock.json`.

## 9. Entscheidungen

- Foto 1 (Gaming) wird unverändert verwendet. Die abgebildete Person ist mit der Veröffentlichung einverstanden.
- Farbpalette: Pink, Türkis, Sonnengelb, dunkles Braun für Text.
