import { getLocale } from "next-intl/server";

export async function getCurrentLocale() {
  return await getLocale();
}

export function getLocalizedText(text: string | { en: string; ar: string }, locale: string) {
  if (typeof text === "string") {
    return text;
  }
  return locale === "ar" ? text.ar : text.en;
}

export function getLocalizedList(list: string[] | { en: string[]; ar: string[] }, locale: string) {
  if (Array.isArray(list)) {
    return list;
  }
  return locale === "ar" ? list.ar : list.en;
}
