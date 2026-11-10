// Builds a link that also works when the site lives in a sub-folder,
// e.g. https://bekky912.github.io/training-website/ on GitHub Pages.
// `base` is set in astro.config.mjs; locally it is just "/".
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
