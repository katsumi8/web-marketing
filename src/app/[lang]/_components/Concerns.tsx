import { getTranslation } from "@/app/i18n/server";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Concerns({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const concerns = t("concernsSection.concerns", { returnObjects: true });
    const cta = t("concernsSection.cta", { returnObjects: true });
    return (
        <div
            id="concerns"
            className="flex w-full flex-col items-center justify-center space-y-8 bg-white p-6 py-16 text-gray-600"
        >
            <h1 className="text-3xl font-bold text-gray-900">
                {t("concernsSection.title")}
            </h1>
            <div className="flex flex-col items-start space-y-8 md:w-[70%]">
                {concerns.map((concern, index) => (
                    <div
                        key={index}
                        className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full`}
                    >
                        <div className="rounded-2xl bg-red-50 p-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {concern.heading}
                            </h3>
                            <p className="text-gray-600">
                                {concern.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* CTA */}
            <div className="relative mt-8 flex flex-col items-center justify-center space-y-3">
                {/* Container for the bubble with before and after slashes */}
                <div className="relative flex items-center justify-center">
                    {/* Text in the bubble */}
                    <p className="relative z-10 px-4 py-2 text-xl font-semibold text-gray-800 before:absolute before:-left-8 before:text-3xl before:text-gray-300 before:content-['\\\\'] after:absolute after:-right-8 after:text-3xl after:text-gray-300 after:content-['/']">
                        {cta.bubbleText}
                    </p>
                </div>

                {/* Button with slashes extending from the top */}
                <Link
                    className="group relative flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] p-4 px-8 text-center text-gray-100 shadow-xl shadow-gray-400 transition duration-300 ease-in-out hover:from-[#709dff] hover:to-[#5651e5] hover:shadow-2xl"
                    href={"#contact"}
                >
                    <span className="z-1- relative">{cta.buttonText}</span>
                    <FaArrowRight className="absolute top-1/2 right-8 -translate-y-1/2 transform text-white opacity-0 transition-all duration-200 group-hover:right-4 group-hover:opacity-100" />
                </Link>
            </div>
        </div>
    );
}
