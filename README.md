# Kesya's OnlyPaws 🐾

A small static learning website where Kesya the cat shares her wisdom with friends and family:
three short lessons (napping, second breakfast, zoomies) and a quiz.

Built with [Astro](https://astro.build) and plain CSS as Challenge 02 for learning Claude Code,
Git and GitHub. Requirements: see [docs/PRD.md](docs/PRD.md).

## Run locally

Requires Node.js (see `engines` in `package.json`).

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static site in dist/
npm run preview  # preview the build
```

## Structure

- `src/pages/` – home page, `lessons/*.md` (lessons in Markdown), `quiz.astro`
- `src/layouts/` – shared page layout and lesson layout
- `src/components/Paw.astro` – decorative paw (SVG)
- `src/styles/global.css` – colours and global styles
- `src/assets/kesya/` – photos of Kesya (optimized by Astro at build time)
