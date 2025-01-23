import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";

export default async function CustomerPainPoints({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const painPoints = t("customerPainPoints", {
        ns: "lp",
        returnObjects: true,
    });

    return (
        <section className="w-full bg-[#aedbf5] py-16">
            <h2 className="mb-8 text-center text-3xl font-bold">
                {painPoints.title}
            </h2>
            <div className="mx-auto grid grid-cols-2 justify-items-center gap-6 p-6 md:grid-cols-3 xl:max-w-[65%]">
                {painPoints.points.map((painPoint, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center space-y-6 rounded-lg bg-gray-100 p-6 text-center sm:size-64 md:size-72"
                    >
                        <div className="mb-3 flex justify-center">
                            <Image
                                src={painPoint.imagePath}
                                alt={painPoint.altText}
                                width={120}
                                height={120}
                            />
                        </div>
                        <p className="text-sm font-semibold text-gray-700 sm:text-base">
                            {painPoint.text}
                        </p>
                        <div className="absolute bottom-0 left-1/2 size-0 -translate-x-1/2 translate-y-full border-x-[15px] border-t-[15px] border-x-transparent border-t-gray-100"></div>
                    </div>
                ))}
            </div>
            <div className="mt-12 flex w-full items-center justify-center px-2">
                <p className="relative z-0 mb-4 text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-[8px] before:w-full before:bg-yellow-300 before:content-[''] sm:text-2xl">
                    {painPoints.solution}
                </p>
            </div>
        </section>
    );
}
