import { getTranslation } from "@/app/i18n/server";
import { Trans } from "react-i18next/TransWithoutContext";
import CTAButton from "./ctaButton";

export default async function Price({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const priceSection = t("price", { ns: "lp", returnObjects: true });

    return (
        <section className="relative flex min-h-[80vh] w-full flex-col items-center py-16">
            <div
                className="absolute top-0 right-0 z-10 block h-full w-full bg-cover bg-center bg-no-repeat opacity-70"
                style={{
                    backgroundImage: `url('/assets/digitalBackground.webp')`,
                }}
                aria-label={priceSection.backgroundImageAlt}
            ></div>
            <h2 className="z-20 mb-8 text-3xl font-bold">
                {priceSection.sectionTitle}
            </h2>
            <div className="z-20 flex w-[95%] flex-col items-center space-y-8 rounded-xl bg-gray-100 p-4 py-8 sm:p-14 md:w-[80%] xl:w-[50%]">
                <p className="p-10 px-10 text-xl font-semibold sm:h-40">
                    <Trans i18nKey="price.description" ns="lp" t={t} />
                </p>
                <div className="flex w-full justify-center">
                    <CTAButton lang={lang} />
                </div>
            </div>
        </section>
    );
}
