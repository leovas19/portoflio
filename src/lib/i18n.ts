export const locales = ["fr", "en"] as const;
export type Locale = typeof locales[number];
export const isLocale = (s: string): s is Locale => (locales as readonly string[]).includes(s);
export const otherLocale = (l: Locale): Locale => (l === "fr" ? "en" : "fr");