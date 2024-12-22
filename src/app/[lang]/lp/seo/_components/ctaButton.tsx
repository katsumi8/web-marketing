import { getTranslation } from "@/app/i18n/server";

export default async function CTAButton({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const ctaContent = t("ctaButton", { ns: "lp", returnObjects: true });
  return (
    <a
      href="#contact"
      className="w-[90%] sm:w-[85%] text-base sm:text-2xl font-semibold 
      bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-2 sm:py-6 sm:px-6 rounded-full 
      scale-105 hover:scale-100 active:scale-95 hover:from-indigo-700 hover:to-purple-700 
      transition duration-300 ease-in-out flex flex-col items-center"
    >
      <span className="text-xs sm:text-sm mt-1">
        \ {ctaContent.limitedTime} /
      </span>
      {ctaContent.buttonText}
    </a>
  );
}
