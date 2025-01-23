import { getTranslation } from "@/app/i18n/server";
import { FaLink } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { IoMdAnalytics } from "react-icons/io";
import {
    PiBookOpenText,
    PiStrategyBold,
    PiTreeStructureBold,
} from "react-icons/pi";
import CTAButton from "./ctaButton";
const icons = {
    strategy: <PiStrategyBold className="size-14 text-[#2b3172]" />,
    structure: <PiTreeStructureBold className="size-14 text-[#2b3172]" />,
    announce: <GrAnnounce className="size-14 text-[#2b3172]" />,
    text: <PiBookOpenText className="size-14 text-[#2b3172]" />,
    analytics: <IoMdAnalytics className="size-14 text-[#2b3172]" />,
    link: <FaLink className="size-14 text-[#2b3172]" />,
};

export default async function Offerings({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const offerings = t("offerings", { ns: "lp", returnObjects: true });

    return (
        <section className="w-full bg-[#aedbf5] py-16">
            <h2 className="mb-8 text-center text-3xl font-bold">
                {offerings.title}
            </h2>
            <div className="container mx-auto flex justify-center">
                <div className="justify-content-center grid grid-cols-1 justify-items-center gap-10 p-8 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
                    {offerings.items.map((feature, index) => (
                        <div
                            key={index}
                            className="relative w-72 space-y-6 rounded-xl bg-gray-100 p-6 py-10 shadow"
                        >
                            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                                <span className="relative flex size-12 items-center justify-center rounded-full bg-gray-200 text-center text-xl font-bold text-[#2b3172]">
                                    {index + 1}
                                </span>
                            </div>

                            <div className="mt-6 mb-4 flex justify-center">
                                {icons[feature.icon as keyof typeof icons]}
                                {/* <Image */}
                                {/*   src={feature.imagePath} */}
                                {/*   alt={feature.altText} */}
                                {/*   height={50} */}
                                {/*   width={50} */}
                                {/* /> */}
                            </div>

                            <h3 className="mb-2 text-center text-xl font-bold text-gray-700">
                                {feature.title}
                            </h3>

                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8 flex justify-center sm:mx-auto sm:w-[60%]">
                <CTAButton lang={lang} />
            </div>
        </section>
    );
}
