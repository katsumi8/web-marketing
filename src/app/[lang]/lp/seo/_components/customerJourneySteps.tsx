import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";

export default async function CustomerJourneySteps({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const customerJourneySteps = t("customerJourneySteps", {
        ns: "lp",
        returnObjects: true,
    });

    return (
        <section className="w-full py-16">
            <h2 className="mb-8 text-center text-3xl font-bold">
                {customerJourneySteps.title}
            </h2>

            <div className="flex flex-col items-center space-y-16">
                {customerJourneySteps.steps.map((step, index) => (
                    <div
                        key={index}
                        className="relative flex w-[80%] flex-col space-y-4 rounded-lg bg-[#aedbf5] p-4 shadow-md sm:flex-row sm:items-center sm:justify-between sm:space-y-0 md:h-36"
                    >
                        {/* 左上の番号 */}
                        <div className="absolute top-1/2 left-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-4xl font-bold text-[#2b3172]">
                            0{index + 1}
                        </div>

                        {/* カード内容 */}
                        <div className="flex flex-col space-y-4 p-4">
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="sm:pr-4">{step.description}</p>
                        </div>

                        <div className="relative flex h-32 w-full flex-shrink-0 justify-center rounded-xl bg-gray-100 sm:w-32">
                            <Image
                                className="rounded-xl object-cover"
                                src={step.imagePath}
                                fill={true}
                                alt={step.altText}
                            />
                        </div>

                        {/* 下向き▼を右下中央あたりに配置 */}
                        {customerJourneySteps.steps.length - 1 > index && (
                            <div className="absolute bottom-[-50px] left-1/2 size-0 -translate-x-1/2 border-x-[30px] border-t-[30px] border-x-transparent border-t-[#2b3172]"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
