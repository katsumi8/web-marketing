import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";
import { Trans } from "react-i18next/TransWithoutContext";
import CTAButton from "./ctaButton";

export default async function Hero({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const heroContent = t("hero", { ns: "lp", returnObjects: true });

  return (
    <section className="bg-[#aedbf5] grid grid-col-1 md:grid-cols-2 w-full min-h-[70vh] items-center z-0 relative md:py-8 md:px-4">
      <div
        className="block md:hidden absolute top-0 right-0 bg-no-repeat bg-cover bg-center z-10 w-full h-full opacity-30"
        style={{
          backgroundImage: `url('/assets/hero.svg')`,
          width: "80%",
          height: "80%",
        }}
      ></div>
      <div className="flex text-left md:text-center flex-col md:items-center space-y-4 py-4 p-4 md:p-0 z-20">
        <p
          className="text-lg md:text-2xl font-bold text-white px-4 py-2 
          from-indigo-600 via-indigo-400 to-indigo-300 bg-gradient-to-r"
        >
          {heroContent.limitedOffer}
        </p>

        <div className="flex flex-col items-center pr-8 md:px-4 py-6 space-y-4">
          <h2 className="text-left text-lg md:text-3xl">
            <Trans
              i18nKey="hero.mainTitle"
              ns="lp"
              t={t}
              components={{
                span: (
                  <span
                    key="highlighted"
                    className="text-3xl md:text-4xl font-bold px-2 py-1 rounded-lg bg-indigo-600
                    md:bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent"
                  />
                ),
              }}
            />
          </h2>

          <p className="text-left text-gray-700 md:text-gray-600 sm:text-base text-sm">
            {heroContent.description}
          </p>
        </div>
        <div className="flex justify-center md:w-full">
          <CTAButton lang={lang} />
        </div>
      </div>
      {/* Right side image for larger screens */}
      <div className="hidden md:block">
        <Image
          src="/assets/hero.svg"
          alt={heroContent.imageAltForHero}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
