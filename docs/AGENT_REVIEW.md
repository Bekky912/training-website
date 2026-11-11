# Subagent review

## Website and date
Kesya's OnlyPaws (`training-website`) — 2026-11-11

Beide Reviewer liefen als echte Claude-Code-Subagents (`.claude/agents/code-reviewer.md`,
`.claude/agents/learning-reviewer.md`), parallel, mit eigenem Kontext und nur Lesezugriff
(Read, Grep, Glob). Keiner hat Code ausgeführt oder einen Browser benutzt.

## Code reviewer
1. **Mittel:** Richtige Antworten (`correctAnswers = [1, 2, 0]`, `src/components/QuizPage.astro:21`)
   sind nur über die Position mit den Antworttexten in `src/i18n/ui.ts` verbunden. Umsortieren in
   einer Sprache würde die Wertung still falsch machen.
2. **Mittel:** Alt-Texte der Quiz-Fotos stehen in `QuizPage.astro:23-42` statt in `ui.ts`
   (Verstoß gegen die Regel in `CLAUDE.md`), Auswahl nur `de`/sonst `en`.
3. **Niedrig:** Reihenfolge und Titel der Lektionen an vielen Stellen dupliziert
   (`BaseLayout.astro:17-23`, `HomePage.astro:14`, Frontmatter aller 9 Lektionen);
   `fill()` doppelt (`ui.ts:288-291` ungenutzt, Kopie in `QuizPage.astro:160-161`).

Nicht ohne Browser prüfbar: Klick nach dem Ziehen und Scrollen auf dem Handy über den Fotos.

## Learning reviewer
1. **Mittel:** Keine Lektion beginnt mit einer konkreten Situation; Einstieg ist eine Statistik
   oder Definition (`src/pages/lessons/nap.md:10`, `second-breakfast.md:10`, `zoomies.md:10`,
   ebenso DE). Das Quiz fragt dagegen in Szenarien.
2. **Niedrig–mittel:** Quizfrage 1 dreht sich um die Sonne, „Kesya's Tip“ in Lektion 1 nennt sie
   nicht (`nap.md:48-49`); Frage 3 verkürzt fünf Schritte, ohne es zu erklären (`ui.ts:75-80`).
3. **Niedrig:** Sortierfrage zeigt „1 of 3 right“, zählt aber 0 Punkte; die Regel „alle drei
   müssen stimmen“ steht nirgends (`ui.ts:85, 96`).

## Comparison
- **Überschneidung:** praktisch keine. Beide betrachten das Quiz, aber der Code-Reviewer fragt
  „bleibt die Wertung bei Änderungen korrekt?“, der Lern-Reviewer „versteht der Lernende die
  Wertung?“.
- **Widersprüche:** keine. Beide bestätigen: Links, Alt-Texte und Quiz-Logik sind heute korrekt.
- Die Code-Befunde helfen vor allem bei künftigen Änderungen, die Lern-Befunde wirken sofort
  für Besucher:innen.

## My decision
Umgesetzt: **Lern-Befund 1, „Beispiel vor Theorie“.** Er wirkt auf allen drei Lektionen in allen
Sprachen und entspricht meinem eigenen Lernprinzip.

- Zuerst die PRD ergänzt (Abschnitt 4, Akzeptanzkriterium 15, Entscheidung vom 2026-11-11).
- Dann in allen 9 Lektionsdateien den ersten Absatz durch eine Problemszene mit Frage ersetzt.
- Eigene Korrektur am ersten Entwurf: Die Szenen verrieten schon die Lösung (z. B. den
  Sonnenfleck). Jetzt zeigen sie **nur das Problem** und enden mit einer Frage, die die Lektion
  beantwortet. Die Regel im `learning-reviewer` wurde entsprechend geschärft.
- Ersetzt statt angehängt, damit jede Lektion unter 300 Wörtern bleibt.

Nicht umgesetzt (bewusst nur eine Änderung): Code-Befunde 1–3, Lern-Befunde 2–3.

## Reflection
- **Spezialisierung hat geholfen:** Die zwei getrennten Blickwinkel haben unterschiedliche
  Probleme gefunden, fast ohne Doppelungen. Durch eine eigene Prüfregel im Lern-Reviewer
  wurde mein Lernprinzip systematisch gegen alle Lektionen geprüft.
- **Grenzen:** Die Subagents kennen nur ihren Auftrag; die Entscheidung und die Korrektur
  („Szene darf die Lösung nicht verraten“) kamen von mir. Ihre Belege mussten stichprobenartig
  nachgeprüft werden. Für eine Seite dieser Größe hätte ein einzelner gezielter Prompt
  vermutlich ähnliche Punkte gefunden, bei mehr Kosten für zwei Agents.
