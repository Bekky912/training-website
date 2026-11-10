# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Kesya's OnlyPaws": a small static Astro learning website (home page, 3 lessons, 1 quiz) about the cat Kesya, for friends and family. Built as Challenge 02 to learn Claude Code, Git and GitHub.

**`docs/PRD.md` is the source of truth.** Scope, pages, content and the measurable acceptance criteria live there. Do not build anything that is not in the PRD; propose changing the PRD first.

## Working with the user

- The user is a programming beginner. Explain steps and decisions in German, beginner-friendly. Page texts, code comments and commit messages are in English.
- Propose a short plan before larger changes; work in small, verifiable steps.
- Never commit, push, publish or deploy without the user's explicit OK.
- Deployment: GitHub Pages via `.github/workflows/deploy.yml` on every push to `main` (site lives under the `/training-website` base path, so build internal links with `url()` from `src/lib/url.ts`). Vercel is out of scope.

## Tech rules

- Astro (static output only), plain CSS, lessons as Markdown or `.astro` pages.
- Quiz logic in plain browser JS/TS inside an Astro `<script>` tag.
- No backend, database, login, CMS, external APIs, React or other UI frameworks, no CSS frameworks (e.g. Tailwind). Do not add npm dependencies without asking.
- Photos live in `src/assets/kesya/` and are rendered with `astro:assets` (`<Image />`) so they get optimized; every photo needs meaningful `alt` text. Decorative paws are inline SVG with `aria-hidden="true"`.
- Mobile first: no horizontal scrolling at 375 px; everything usable by keyboard with a visible focus style.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Production build to `dist/`. **Run after every change as the main check.** |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run astro -- check` | Type/diagnostic check of `.astro` files (needs `@astrojs/check`; ask before installing) |

There is no test suite; verification = `npm run build` plus manual/browser checks against the PRD acceptance criteria.

When starting the dev server from Claude Code, use background mode: `npx astro dev --background` (manage with `astro dev stop | status | logs`).

Node.js is a portable install in `C:\Users\RNagel\tools\nodejs` (user PATH, no admin rights). If `node`/`npm` are not found in a shell, prepend that folder to PATH for the command.

## Structure

- `src/pages/` – one file per route; file name = URL. English at the root, German in `src/pages/de/`, Cat in `src/pages/cat/`. Lessons are Markdown per language; `index.astro` and `quiz.astro` are thin wrappers around `src/components/HomePage.astro` and `QuizPage.astro`.
- `src/i18n/ui.ts` – all short UI texts (nav, home page, quiz) in `en`, `de` and `cat`. A text change usually has to be made in all three languages (Cat = only meows and emojis; photo alt texts stay English there).
- `src/lib/url.ts` – `url()` adds the base path, `localized(path, lang)` adds the language prefix, `splitPath()` reads the language from the current address.
- `src/layouts/` – shared layout (header nav, language switch, footer, global CSS) used by every page.
- `src/assets/kesya/` – Kesya photos (optimized by Astro at build time).
- `public/` – files served as-is (favicons).
- `docs/` – PRD and test notes (e.g. `CHROME_TEST_NOTES.md`).

Astro docs: https://docs.astro.build (see `AGENTS.md` for topic links).

## Git

`node_modules/`, `dist/`, `.astro/` and `.env` must never be committed (covered by `.gitignore`); `package-lock.json` is committed.
