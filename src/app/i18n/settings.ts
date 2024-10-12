import type { InitOptions } from "i18next";

export const defaultLanguage = "ja";
export const availableLanguageOptions = [
  { code: defaultLanguage, label: "JP", flag: "🇯🇵" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  // 他の言語を追加する場合はここに追加
];
export const availableLanguages = availableLanguageOptions.map(
  (lang) => lang.code,
);
export const cookieName = "i18next";
export const namespaces = [
  "translation",
  "services",
  "about",
  "contactPage",
  "contactForm",
];

export function getOptions(lng = defaultLanguage): InitOptions {
  return {
    lng,
    defaultNS: defaultLanguage,
    fallbackLng: defaultLanguage,
    fallbackNS: namespaces[0],
    ns: namespaces,
    supportedLngs: availableLanguages,
  };
}
