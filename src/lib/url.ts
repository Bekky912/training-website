import { languages, langs, type Lang } from "../i18n/ui";

// The lessons in their fixed order (language-neutral paths). The single place for the lesson order:
// navigation, home page and "next" links are built from this list. Titles live in ui.ts (home.lessons).
export const lessonPaths = ["/lessons/nap", "/lessons/second-breakfast", "/lessons/zoomies"] as const;

// Builds a link that also works when the site lives in a sub-folder,
// e.g. https://bekky912.github.io/training-website/ on GitHub Pages.
// `base` is set in astro.config.mjs.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}

// Same as url(), but for a page in a given language: "/quiz" + "de" -> "/training-website/de/quiz"
export function localized(path: string, lang: Lang): string {
  const prefix = languages[lang].prefix;
  return url(path === "/" && prefix ? prefix : `${prefix}${path}`);
}

// Finds the language and the language-neutral path of the current page,
// e.g. "/training-website/de/quiz/" -> { lang: "de", path: "/quiz" }
export function splitPath(pathname: string): { lang: Lang; path: string } {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let path = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  path = path.replace(/\/$/, "") || "/";

  for (const lang of langs) {
    const prefix = languages[lang].prefix;
    if (prefix && (path === prefix || path.startsWith(`${prefix}/`))) {
      return { lang, path: path.slice(prefix.length) || "/" };
    }
  }
  return { lang: "en", path };
}
