export const defaultLanguage = "ja";
export const availableLanguageOptions = [
  { code: defaultLanguage, label: "日本語", flag: "🇯🇵" },
  { code: "en", label: "English", flag: "🇺🇸" },
  // 他の言語を追加する場合はここに追加
];
export const availableLanguages = availableLanguageOptions.map(
  (lang) => lang.code,
);
export const cookieName = "i18next";
export const namespaces = ["translation"];
export function getOptions(lng = defaultLanguage) {
  return {
    lng,
    defaultNS: defaultLanguage,
    fallbackLng: defaultLanguage,
    fallbackNS: namespaces[0],
    ns: namespaces,
    supportedLngs: availableLanguages,
  };
}
