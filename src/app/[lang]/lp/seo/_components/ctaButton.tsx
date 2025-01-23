import { getTranslation } from "@/app/i18n/server";

export default async function CTAButton({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const ctaContent = t("ctaButton", { ns: "lp", returnObjects: true });
    return (
        <a
            href="#contact"
            className="flex w-[90%] scale-105 flex-col items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-2 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:scale-100 hover:from-indigo-700 hover:to-purple-700 active:scale-95 sm:w-[85%] sm:px-6 sm:py-6 sm:text-2xl"
        >
            <span className="mt-1 text-xs sm:text-sm">
                \ {ctaContent.limitedTime} /
            </span>
            {ctaContent.buttonText}
        </a>
    );
}
