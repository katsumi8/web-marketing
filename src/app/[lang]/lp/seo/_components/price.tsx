import { getTranslation } from "@/app/i18n/server";
import { Trans } from "react-i18next/TransWithoutContext";
import CTAButton from "./ctaButton";

export default async function Price({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const priceSection = t("price", { ns: "lp", returnObjects: true });

  return (
    <section className="py-16 w-full flex flex-col items-center relative min-h-[80vh]">
      <div
        className="block absolute top-0 right-0 bg-no-repeat bg-cover bg-center z-10 w-full h-full opacity-70"
        style={{
          backgroundImage: `url('/assets/digitalBackground.webp')`,
        }}
        aria-label={priceSection.backgroundImageAlt}
      ></div>
      <h2 className="z-20 text-3xl font-bold mb-8">
        {priceSection.sectionTitle}
      </h2>
      <div
        className="z-20 bg-gray-100 p-4 py-8 sm:p-14 rounded-xl space-y-8 flex-col flex items-center 
        w-[95%] md:w-[80%] xl:w-[50%]"
      >
        <p className="p-10 sm:h-40 px-10 font-semibold text-xl">
          <Trans i18nKey="price.description" ns="lp" t={t} />
        </p>
        <div className="flex justify-center w-full">
          <CTAButton lang={lang} />
        </div>
      </div>
    </section>
  );
}
