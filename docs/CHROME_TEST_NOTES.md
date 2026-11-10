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

## Re-test after "dark & gold" redesign (2026-11-10)

- `npm run build`: ✅ 5 pages, no errors
- 375 px: ✅ no horizontal scrolling on all 5 pages
- Contrast (WCAG AA needs ≥ 4.5:1): ✅ cream text on card 14.9:1, gold on card 8.5:1,
  dark text on gold 8.9:1, rose "wrong" text 6.0:1, footer text 10.1:1
- Quiz feedback styles (correct = gold, wrong = rose + strikethrough + "✗") checked visually

## Re-test after new photos and drag & drop question (2026-11-10)

- `npm run build`: ✅ 5 pages, no errors; 13 new photos (watermark strip cropped) optimized to WebP
- AC 4/6: ✅ 4 questions; all right → "4 of 4 correct" + throne photo; all wrong → "0 of 4 correct" + grumpy photo
- AC 13, drag & drop:
  - Mouse drag (real pointer input) into slots: ✅ photos land in the slot under the pointer
  - Keyboard: Enter on photo → "Photo selected", Enter/Space on activity → placed, focus stays on the photo: ✅
  - Tap path (click photo, click activity): ✅; clicking an activity first → "Choose a photo first."
  - Dropping on an occupied slot sends the old photo back to the album: ✅
  - "Check" disabled until all 3 slots are filled; afterwards ✓/✗ per slot, everything locked: ✅
  - Bug found and fixed: after a mouse drag the next keyboard press on the same photo was ignored
- AC 7: ✅ no horizontal scrolling at 320 px and 375 px (quiz grid needed `minmax(0, 1fr)`)
- AC 10: ✅ all photos have alt text; drag & drop photos are described by their button label
- Not tested: real touch devices (only mouse/keyboard input possible in the test browser)

## Notes

- Photos are converted to WebP by Astro at build time (e.g. 498 kB → 160 kB).
- Not tested: real phones, Safari/Firefox, screen readers.
