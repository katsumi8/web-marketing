import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";

export default async function CustomerJourneySteps({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const customerJourneySteps = t("customerJourneySteps", {
    ns: "lp",
    returnObjects: true,
  });

  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">
        {customerJourneySteps.title}
      </h2>

      <div className="flex flex-col items-center space-y-16">
        {customerJourneySteps.steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:justify-between sm:items-center
            p-4 w-[80%] bg-[#aedbf5] rounded-lg md:h-36 shadow-md"
          >
            {/* 左上の番号 */}
            <div
              className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2
              text-[#2b3172] flex items-center justify-center 
              text-4xl font-bold z-10"
            >
              0{index + 1}
            </div>

            {/* カード内容 */}
            <div className="flex flex-col space-y-4 p-4">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="sm:pr-4">{step.description}</p>
            </div>

            <div className="w-full sm:w-32 h-32 rounded-xl relative flex-shrink-0 bg-gray-100 flex justify-center">
              <Image
                className="object-cover rounded-xl"
                src={step.imagePath}
                fill={true}
                alt={step.altText}
              />
            </div>

            {/* 下向き▼を右下中央あたりに配置 */}
            {customerJourneySteps.steps.length - 1 > index && (
              <div
                className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 size-0 
                          border-x-[30px] border-t-[30px] border-x-transparent border-t-[#2b3172]"
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
