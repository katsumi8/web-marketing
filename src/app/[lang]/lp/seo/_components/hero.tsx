import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";
import { Trans } from "react-i18next/TransWithoutContext";
import CTAButton from "./ctaButton";

export default async function Hero({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const heroContent = t("hero", { ns: "lp", returnObjects: true });

    return (
        <section className="grid-col-1 relative z-0 grid min-h-[70vh] w-full items-center bg-[#aedbf5] md:grid-cols-2 md:px-4 md:py-8">
            <div
                className="absolute top-0 right-0 z-10 block h-full w-full bg-cover bg-center bg-no-repeat opacity-30 md:hidden"
                style={{
                    backgroundImage: `url('/assets/hero.svg')`,
                    width: "80%",
                    height: "80%",
                }}
            ></div>
            <div className="z-20 flex flex-col space-y-4 p-4 py-4 text-left md:items-center md:p-0 md:text-center">
                <p className="bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-300 px-4 py-2 text-lg font-bold text-white md:text-2xl">
                    {heroContent.limitedOffer}
                </p>

                <div className="flex flex-col items-center space-y-4 py-6 pr-8 md:px-4">
                    <h2 className="text-left text-lg md:text-3xl">
                        <Trans
                            i18nKey="hero.mainTitle"
                            ns="lp"
                            t={t}
                            components={{
                                span: (
                                    <span
                                        key="highlighted"
                                        className="rounded-lg bg-indigo-600 from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text px-2 py-1 text-3xl font-bold text-transparent md:bg-gradient-to-r md:text-4xl"
                                    />
                                ),
                            }}
                        />
                    </h2>

                    <p className="text-left text-sm text-gray-700 sm:text-base md:text-gray-600">
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
                    className="h-full w-full object-cover"
                />
            </div>
        </section>
    );
}
