// All short texts of the website in three languages: English, German and Cat.
// Lessons are separate Markdown files per language (src/pages/, src/pages/de/, src/pages/cat/).
// Photo alt texts stay readable for humans, so Cat uses the English ones.

export const languages = {
  en: { label: "EN", name: "English", htmlLang: "en", prefix: "" },
  de: { label: "DE", name: "Deutsch", htmlLang: "de", prefix: "/de" },
  cat: { label: "🐾 Miau", name: "Katzisch / Cat", htmlLang: "en-x-cat", prefix: "/cat" },
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];

const en = {
  nav: {
    label: "Main",
    home: "Home",
    nap: "1 · Nap",
    breakfast: "2 · Second Breakfast",
    zoomies: "3 · Zoomies",
    quiz: "Quiz",
  },
  languageSwitch: "Choose language",
  footer: "Wisdom by Kesya · Typing by her human servant",
  defaultDescription: "Kesya the cat shares her wisdom: napping, second breakfast and zoomies.",
  lessonLabel: (n: number, total: number) => `Lesson ${n} of ${total}`,
  next: "Next",
  nextStep: "Next step",
  home: {
    title: "Home",
    heading: "Welcome to Kesya's OnlyPaws",
    intro:
      "Hello, human. I am <strong>Kesya</strong>: tabby, professional napper and part-time food critic. For years I have trained my human servants. Now I share my wisdom with you, in three short lessons and one little quiz.",
    duration: "Each lesson takes about two minutes. That is shorter than my average stretch.",
    start: "Start lesson 1",
    lessonsHeading: "The lessons",
    lessonWord: "Lesson",
    lessons: [
      { title: "The Art of the Nap", teaser: "Find the best sun spot and master the perfect sleeping position." },
      { title: "Operation Second Breakfast", teaser: "Convince your human that the first breakfast never happened." },
      { title: "The Zoomie Party", teaser: "Lure your human servants away from the screen and into the fun." },
    ],
    quizCta: "Think you have learned enough?",
    quizButton: "Take the quiz",
    posterAlt:
      "Glamorous dark and gold poster titled Kesya's OnlyPaws: an illustrated tabby cat winks from a velvet bed, next to a list of joke membership perks and a golden Subscribe4Meows button",
  },
  quiz: {
    title: "Quiz",
    description: "Test what you learned from Kesya in four quick questions.",
    heading: "Kesya's Quiz",
    intro: "Four questions about everything you learned. Kesya is watching.",
    // Keep the answer order the same in every language: correctAnswers in
    // src/components/QuizPage.astro points to the right answer by its position.
    questions: [
      {
        question: "It is 3 pm. The sun has moved off your cat bed and onto a small spot on the sofa. Where do you nap now?",
        answers: [
          "In the expensive cat bed your human bought",
          "In the small square of sunshine, wherever it is right now",
          "Wherever the human tells you to sleep",
        ],
        explanation: "The sun spot always wins. And because the sun moves, a professional napper moves with it.",
      },
      {
        question: "You finished your first breakfast. What do you do next?",
        answers: [
          "Accept your fate and go back to sleep",
          "Leave a few pieces in the bowl for later",
          "Sit next to the clean bowl and stare at your human without blinking",
        ],
        explanation: "A clean bowl plus a sad face is the strongest evidence that breakfast never happened.",
      },
      {
        question: "Your human is playing a video game. How do you start the zoomie party?",
        answers: [
          "Sit between the human and the screen, lift a paw, then run",
          "Do the zoomies alone in the kitchen",
          "Wait politely until the game is over",
        ],
        explanation:
          "First become part of the screen: your human laughs and puts the controller down. Then run, and they will follow you. A good party needs at least one human who is out of breath.",
      },
    ],
    sort: {
      heading: "Help Kesya sort her photo album!",
      help: "Drag each photo to the right activity. Without a mouse: tap or press Enter on a photo, then on an activity.",
      trayLabel: "Photos to sort",
      photoLabel: "Photo",
      slots: { napping: "Napping", eating: "Eating", zoomies: "Zoomies" },
      check: "Check my answer",
      selected: "Photo selected. Now choose an activity.",
      placed: "Photo placed in {slot}.",
      backToTray: "Photo moved back to the album.",
      chooseFirst: "Choose a photo first.",
      explanation:
        "Sunshine means napping, kibble on the floor means a successful breakfast, and a plastic bag means the party has started.",
      partly: "✗ Not quite ({right} of {total} right). ",
    },
    correct: "✓ Correct! ",
    wrong: "✗ Not quite. ",
    score: "{score} of {total} correct",
    again: "Back to lesson 1",
    results: {
      top: "Certified Cat Expert! You may approach the throne and serve second breakfast.",
      good: "Good human! A few more naps and you will be a true expert.",
      low: "Kesya is not angry. Just disappointed. Read the lessons again, after her nap.",
    },
    alts: {
      zoomies: "Kesya with her head inside a blue plastic bag",
      napping: "Kesya with closed eyes in warm sunlight",
      eating: "Kesya next to a tipped-over food puzzle with kibble everywhere",
      top: "Kesya lying on her own throne, a cardboard lounge with the letters KESYA",
      good: "Kesya posing elegantly on a shiny blue blanket",
      low: "Kesya sitting in the grass with a red bandana, looking very grumpy",
    },
  },
};

export type UI = typeof en;

const de: UI = {
  nav: {
    label: "Hauptmenü",
    home: "Start",
    nap: "1 · Nickerchen",
    breakfast: "2 · Zweites Frühstück",
    zoomies: "3 · Zoomies",
    quiz: "Quiz",
  },
  languageSwitch: "Sprache wählen",
  footer: "Weisheiten von Kesya · Getippt von ihrem menschlichen Personal",
  defaultDescription: "Katze Kesya teilt ihre Weisheiten: Nickerchen, zweites Frühstück und Zoomies.",
  lessonLabel: (n: number, total: number) => `Lektion ${n} von ${total}`,
  next: "Weiter",
  nextStep: "Nächster Schritt",
  home: {
    title: "Start",
    heading: "Willkommen bei Kesya's OnlyPaws",
    intro:
      "Hallo, Mensch. Ich bin <strong>Kesya</strong>: getigert, professionelle Schläferin und nebenberufliche Restaurantkritikerin. Seit Jahren erziehe ich mein menschliches Personal. Jetzt teile ich meine Weisheit mit dir, in drei kurzen Lektionen und einem kleinen Quiz.",
    duration: "Jede Lektion dauert etwa zwei Minuten. Das ist kürzer als mein durchschnittliches Strecken.",
    start: "Lektion 1 starten",
    lessonsHeading: "Die Lektionen",
    lessonWord: "Lektion",
    lessons: [
      { title: "Die Kunst des Nickerchens", teaser: "Finde den besten Sonnenplatz und meistere die perfekte Schlafposition." },
      { title: "Operation Zweites Frühstück", teaser: "Überzeuge deinen Menschen, dass es das erste Frühstück nie gab." },
      { title: "Die Zoomie-Party", teaser: "Locke dein menschliches Personal vom Bildschirm weg und bring es zum Mitspielen." },
    ],
    quizCta: "Glaubst du, du hast genug gelernt?",
    quizButton: "Zum Quiz",
    posterAlt:
      "Glamouröses Poster in Dunkel und Gold mit dem Titel Kesya's OnlyPaws: eine gezeichnete Tigerkatze zwinkert von einem Samtbett, daneben eine Liste mit Spaß-Vorteilen und ein goldener Subscribe4Meows-Button",
  },
  quiz: {
    title: "Quiz",
    description: "Teste in vier kurzen Fragen, was du von Kesya gelernt hast.",
    heading: "Kesyas Quiz",
    intro: "Vier Fragen zu allem, was du gelernt hast. Kesya schaut zu.",
    questions: [
      {
        question: "Es ist 15 Uhr. Die Sonne ist von deinem Katzenbett auf einen kleinen Fleck auf dem Sofa gewandert. Wo machst du jetzt dein Nickerchen?",
        answers: [
          "Im teuren Katzenbett, das dein Mensch gekauft hat",
          "Im kleinen Sonnenfleck, wo auch immer er gerade ist",
          "Dort, wo der Mensch es dir sagt",
        ],
        explanation: "Der Sonnenplatz gewinnt immer. Und weil die Sonne wandert, wandert eine Profi-Schläferin mit.",
      },
      {
        question: "Du hast dein erstes Frühstück aufgegessen. Was machst du jetzt?",
        answers: [
          "Dich deinem Schicksal ergeben und weiterschlafen",
          "Ein paar Stücke für später im Napf lassen",
          "Dich neben den leeren Napf setzen und deinen Menschen anstarren, ohne zu blinzeln",
        ],
        explanation: "Ein leerer Napf plus trauriger Blick ist der stärkste Beweis, dass es nie ein Frühstück gab.",
      },
      {
        question: "Dein Mensch spielt ein Videospiel. Wie startest du die Zoomie-Party?",
        answers: [
          "Zwischen Mensch und Bildschirm setzen, Pfote heben, dann losrennen",
          "Allein in der Küche herumrasen",
          "Höflich warten, bis das Spiel vorbei ist",
        ],
        explanation:
          "Erst Teil des Bildschirms werden: Dein Mensch lacht und legt den Controller weg. Dann losrennen, und er folgt dir. Eine gute Party braucht mindestens einen Menschen, der außer Atem ist.",
      },
    ],
    sort: {
      heading: "Hilf Kesya, ihr Fotoalbum zu sortieren!",
      help: "Zieh jedes Foto zur passenden Aktivität. Ohne Maus: Foto antippen oder Enter drücken, dann die Aktivität.",
      trayLabel: "Fotos zum Sortieren",
      photoLabel: "Foto",
      slots: { napping: "Schlafen", eating: "Fressen", zoomies: "Zoomies" },
      check: "Antwort prüfen",
      selected: "Foto ausgewählt. Wähle jetzt eine Aktivität.",
      placed: "Foto abgelegt bei {slot}.",
      backToTray: "Foto zurück ins Album gelegt.",
      chooseFirst: "Wähle zuerst ein Foto.",
      explanation:
        "Sonnenschein heißt Schlafen, Trockenfutter auf dem Boden heißt erfolgreiches Frühstück, und eine Plastiktüte heißt: Die Party hat begonnen.",
      partly: "✗ Nicht ganz ({right} von {total} richtig). ",
    },
    correct: "✓ Richtig! ",
    wrong: "✗ Nicht ganz. ",
    score: "{score} von {total} richtig",
    again: "Zurück zu Lektion 1",
    results: {
      top: "Zertifiziertes Katzen-Genie! Du darfst dich dem Thron nähern und das zweite Frühstück servieren.",
      good: "Guter Mensch! Noch ein paar Nickerchen, dann bist du ein echter Profi.",
      low: "Kesya ist nicht böse. Nur enttäuscht. Lies die Lektionen nochmal, nach ihrem Nickerchen.",
    },
    alts: {
      zoomies: "Kesya mit dem Kopf in einer blauen Plastiktüte",
      napping: "Kesya mit geschlossenen Augen im warmen Sonnenlicht",
      eating: "Kesya neben einem umgekippten Futterpuzzle, überall liegt Trockenfutter",
      top: "Kesya liegt auf ihrem eigenen Thron, einer Pappliege mit den Buchstaben KESYA",
      good: "Kesya posiert elegant auf einer glänzenden blauen Decke",
      low: "Kesya sitzt mit rotem Halstuch im Gras und schaut sehr grimmig",
    },
  },
};

const cat: UI = {
  nav: {
    label: "Mrrp",
    home: "Mrow",
    nap: "1 · Zzzmew",
    breakfast: "2 · Nom-nom-meow",
    zoomies: "3 · MRRR-ZOOM",
    quiz: "Mew?",
  },
  languageSwitch: "Meow mew?",
  footer: "Mrrrow by Kesya · Tap-tap-tap by hooman",
  defaultDescription: "Meow mrrp purrr. Zzzmew, nom-nom-meow, MRRR-ZOOM.",
  lessonLabel: (n: number, total: number) => `Mrrp ${n} mew ${total}`,
  next: "Mrrrow",
  nextStep: "Mrrp!",
  home: {
    title: "Mrow",
    heading: "Mrrrow Kesya's OnlyPaws",
    intro:
      "Mew, hooman. Mrrp <strong>Kesya</strong>: meow-meow, purrrrr zzzmew mrrp nom-nom-mew. Mrrrow mew meow mew hooman. Purrr meow mew mrrp, mew mew mrrp mrrp meow mew mew?",
    duration: "Mrrp mew meow mew mew. Mew mrrrrrrrrrrrr. Purr.",
    start: "Mrrrow 1!",
    lessonsHeading: "Mrrp mrrp mrrp",
    lessonWord: "Mrrp",
    lessons: [
      { title: "Zzzmew Purrrr", teaser: "Mew mew prrr ☀️ mrrp. Zzzzzz." },
      { title: "Nom-Nom-Meow Mrrow", teaser: "Meow mew 🍗 mew? MEOW. Mew meow mew 🍗🍗." },
      { title: "MRRR-ZOOM Mrrp-mrrp", teaser: "Mew mew 🎮 hooman. MRRR-ZOOM!!!" },
    ],
    quizCta: "Mew mew mrrp?",
    quizButton: "Mew? Mew!",
    posterAlt: en.home.posterAlt,
  },
  quiz: {
    title: "Mew?",
    description: "Mew mrrp meow mew mew? Mrrrow!",
    heading: "Kesya's Mew?",
    intro: "Mew mew mrrp mrrp. Kesya 👀.",
    questions: [
      {
        question: "⏰ 3. ☀️ 🛏️ → 🛋️. Zzzmew… mew mrrp?",
        answers: ["Mew mew 💸 mrrp-mrrp", "Prrrr ☀️ mew mew mrrrow", "Hooman meow? Hsss."],
        explanation: "☀️ mrrrow! Mew ☀️ mew-mew, Kesya mew-mew. Purrrr.",
      },
      {
        question: "Nom-nom 🥣. Mew… mrrp?",
        answers: ["Zzzmew. Mew.", "Nom 🥣 mew-mew mrrp", "🥣 … 👀 … 👀 … MEOW."],
        explanation: "🥣 + 🥺 = nom-nom-meow #2. Prrrrrrr.",
      },
      {
        question: "Hooman 🎮. MRRR-ZOOM mew?",
        answers: ["Mew 🎮 🐾 … MRRR-ZOOM!", "MRRR-ZOOM mew-mew mrrp 🍳", "Mew… mew… mew… zzz"],
        explanation: "🐾 📺 → hooman 😂, 🎮 ⬇️. MRRR-ZOOM! Hooman huff-huff-huff. Purrrr.",
      },
    ],
    sort: {
      heading: "Mrrp Kesya 📸 mew-mew!",
      help: "Mew 📸 mrrp-mrrp. Mew 🖱️: tap-tap 📸, tap-tap mrrp.",
      trayLabel: "📸 📸 📸",
      photoLabel: "📸",
      slots: { napping: "Zzzmew", eating: "Nom-nom", zoomies: "ZOOM" },
      check: "Mew? Mew!",
      selected: "📸 mrrp. Mew mew?",
      placed: "📸 → {slot}. Purr.",
      backToTray: "📸 ← mrrow.",
      chooseFirst: "📸 mew! Mrrp.",
      explanation: "☀️ = Zzzmew. 🥣💥 = Nom-nom. 🛍️ = ZOOM. Prrrrrr.",
      partly: "✗ Hsss… ({right} mew {total}). ",
    },
    correct: "✓ Prrrrrr! ",
    wrong: "✗ HSSS. ",
    score: "{score} mew {total} prrr",
    again: "← Mrrp 1",
    results: {
      top: "MEOW MEOW MEOW! 👑 Mrrp mrrp nom-nom-meow #2. Purrrrrrrr.",
      good: "Mew mew hooman! Zzzmew zzzmew… mrrp mrrow.",
      low: "… … … Hsss. Mrrp mrrp mrrp. Zzzmew.",
    },
    alts: en.quiz.alts,
  },
};

export const ui: Record<Lang, UI> = { en, de, cat };
