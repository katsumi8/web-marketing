"use client";

import {
  availableLanguageOptions,
  cookieName,
  defaultLanguage,
} from "@/app/i18n/settings";
import Cookies from "js-cookie";

export const LanguageSwitcher = ({ currentLanguage = defaultLanguage }) => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLocale = event.target.value;
    Cookies.set(cookieName, newLocale);
    // 現在のURLを取得
    const currentPath = window.location.pathname;
    // 現在の言語を取得（例: /en/xxx → en）
    const currentLocale = currentPath.split("/")[1];
    // 新しいURLを生成
    const newPath =
      currentLocale && currentPath.startsWith(`/${currentLocale}/`)
        ? currentPath.replace(`/${currentLocale}/`, `/${newLocale}/`)
        : `/${newLocale}${currentPath}`;
    window.location.href = newPath;
  };

  return (
    <select
      id="language-select"
      className="block border border-gray-100 p-1 bg-inherit rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      value={currentLanguage}
      onChange={handleLanguageChange}
      aria-label="select language"
    >
      {availableLanguageOptions.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {`${lang.flag} ${lang.label.toUpperCase()}`}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
