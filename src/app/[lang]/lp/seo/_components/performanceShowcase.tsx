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
                <h2 className="mb-8 text-center text-3xl font-bold">
                    {performanceShowcase.sectionTitle}
                </h2>
                <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-4 text-center text-2xl font-semibold">
                            {performanceShowcase.cards[0].title}
                        </h3>

                        <div className="flex flex-col items-center py-4 xl:flex-row">
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
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-4 text-center text-2xl font-semibold">
                            {performanceShowcase.cards[1].title}
                        </h3>
                        <div className="flex flex-col items-center py-4 xl:flex-row">
                            <Graph
                                label={
                                    performanceShowcase.cards[1].chart
                                        ?.label as string
                                }
                                growthText={
                                    performanceShowcase.cards[1].chart
                                        ?.growthText as string
                                }
                            />
                            <p className="p-4 sm:p-10">
                                {performanceShowcase.cards[1].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-16 flex items-center justify-center">
                <CTAButton lang={lang} />
            </div>
        </section>
    );
}

function Graph({ label, growthText }: { label: string; growthText: string }) {
    return (
        <div className="flex flex-col items-center md:flex-row">
            <p className="text-sm sm:w-10">{label}</p>
            <div className="relative h-64 w-64">
                <div className="absolute bottom-0 left-4 h-full w-px bg-gray-400"></div>
                <div className="absolute bottom-0 left-4 z-10 h-px w-full bg-gray-400"></div>
                <div className="absolute bottom-0 left-8 h-10 w-16 bg-gray-300"></div>
                <div className="absolute right-8 bottom-0 h-40 w-16 bg-indigo-400"></div>

                <p className="absolute top-16 left-16 z-20 text-3xl font-bold text-red-900">
                    {growthText}
                </p>

                <Image
                    className="absolute bottom-4 left-12 size-36"
                    src="/assets/increase_arrow.png"
                    width={64}
                    height={64}
                    alt={"increase arrow"}
                />
            </div>
        </div>
    );
}
