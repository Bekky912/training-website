# Browser test notes

Date: 2026-11-10 · Tested by Claude Code in the Claude desktop app's built-in browser
(Chromium-based, not the user's own Chrome) against `npm run dev`, plus `npm run build` and
`npm run preview`.

| AC | Check | Result |
|---|---|---|
| 1 | `npm run build` | ✅ No errors, "5 page(s) built" |
| 2 | 5 pages, nav on every page, no dead links | ✅ Each page has 5 nav links; all `href`s point to one of the 5 pages. `npm run preview`: all 5 pages return 200 |
| 3 | "Next" link on each lesson | ✅ Nap → Second Breakfast → Zoomies → Quiz |
| 4 | ≥ 3 questions with 3 answers | ✅ 3 questions × 3 answers |
| 5 | Immediate feedback, answer locked | ✅ "✓ Correct!" / "✗ Not quite." plus explanation; all buttons of a question disabled after answering |
| 6 | Final score in the browser | ✅ Played right / wrong / right → "2 of 3 correct" with Kesya's rating, no reload |
| 7 | 375 px: no horizontal scrolling | ✅ `scrollWidth - clientWidth = 0` on all 5 pages |
| 8 | 1280 px: text column ≤ ~70 characters | ✅ 57–65 characters per line |
| 9 | Keyboard only | ✅ Tab reaches nav and quiz answers, Enter and Space choose an answer, focus moves to feedback and finally to the result; focus ring visible (pink in content, yellow in header) |
| 10 | Alt texts, decorative paws hidden | ✅ All 5 photos have alt text; all paw SVGs have `aria-hidden="true"`; background paws are CSS only |
| 11 | Consistent layout | ✅ All pages use `BaseLayout.astro` (same header, footer, colours, font) |
| 12 | No `node_modules/`, `dist/`, `.env` in repo | ⏳ Checked with `git status` before the first commit |

## Notes

- Photos are converted to WebP by Astro at build time (e.g. 498 kB → 160 kB).
- Not tested: real phones, Safari/Firefox, screen readers.
