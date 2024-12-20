import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";
import CTAButton from "./ctaButton";

export default async function PerformanceShowcase({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const performanceShowcase = t("performanceShowcase", {
    ns: "lp",
    returnObjects: true,
  });
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {performanceShowcase.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {performanceShowcase.cards[0].title}
            </h3>

            <div className="flex items-center xl:flex-row flex-col py-4">
              <Image
                className="size-64 bg-transparent"
                src="/assets/ranking_up.svg"
                fill={false}
                style={{
                  fill: "transparent",
                }}
                width={64}
                height={64}
                alt={performanceShowcase.cards[0].iconAlt ?? ""}
              />
              <p className="p-4 sm:p-10">
                {performanceShowcase.cards[0].description}
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {performanceShowcase.cards[1].title}
            </h3>
            <div className="flex items-center xl:flex-row flex-col py-4">
              <Graph
                label={performanceShowcase.cards[1].chart?.label as string}
                growthText={
                  performanceShowcase.cards[1].chart?.growthText as string
                }
              />
              <p className="p-4 sm:p-10">
                {performanceShowcase.cards[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 items-center flex justify-center">
        <CTAButton lang={lang} />
      </div>
    </section>
  );
}

function Graph({ label, growthText }: { label: string; growthText: string }) {
  return (
    <div className="flex items-center md:flex-row flex-col">
      <p className="text-sm sm:w-10">{label}</p>
      <div className="relative w-64 h-64">
        <div className="absolute left-4 bottom-0 w-px h-full bg-gray-400"></div>
        <div className="absolute left-4 bottom-0 w-full h-px bg-gray-400 z-10"></div>
        <div className="absolute left-8 bottom-0 w-16 h-10 bg-gray-300"></div>
        <div className="absolute right-8 bottom-0 w-16 h-40 bg-indigo-400"></div>
        {/* 矢印 */}
        <p className="absolute text-3xl left-16 top-36 text-red-500 font-bold">
          {growthText}
        </p>
        <div
          className="absolute size-20 border-t-8 border-l-8 
          border-red-500 rounded-tl-full 
          left-16 bottom-10 transform rotate-180"
        ></div>
        <div
          className="absolute size-0 right-28 bottom-24 rotate-180
          border-l-[20px] border-l-transparent
          border-r-[20px] border-r-transparent
          border-t-[40px] border-t-red-500
          transform translate-x-4 -translate-y-4"
        ></div>
      </div>
    </div>
  );
}
