// Replaces {name} placeholders, e.g. fill("{score} of {total}", { score: 3, total: 4 })
// Used by the quiz script in the browser, so it lives in its own small file.
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}
