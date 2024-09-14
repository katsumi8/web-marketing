"use client";

import {
  availableLanguages,
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
    window.location.href = "/";
  };

  return (
    <select value={currentLanguage} onChange={handleLanguageChange}>
      {availableLanguages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
