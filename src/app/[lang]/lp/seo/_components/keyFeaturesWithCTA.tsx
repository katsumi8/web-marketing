import { getTranslation } from "@/app/i18n/server";
import { FaBuildingUser } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { IoIosSpeedometer } from "react-icons/io";
import CTAButton from "./ctaButton";

const icons = {
    speed: <IoIosSpeedometer className="size-32 text-[#2b3172]" />,
    achievement: <GrAchievement className="size-32 text-[#2b3172]" />,
    building: <FaBuildingUser className="size-32 text-[#2b3172]" />,
};

export default async function KeyFeaturesWithCTA({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const ourFeatures = t("keyFeatures", { ns: "lp", returnObjects: true });

    return (
        <section className="w-full flex-col items-center justify-center py-16">
            <h2 className="mb-8 text-center text-3xl font-bold">
                {ourFeatures.title}
            </h2>
            <div className="container mx-auto flex justify-center py-20">
                <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {ourFeatures.features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex w-80 flex-col items-center space-y-8 p-4"
                        >
                            {/* <Image */}
                            {/*   src={feature.imagePath} */}
                            {/*   width={50} */}
                            {/*   height={50} */}
                            {/*   alt={feature.altText} */}
                            {/* /> */}
                            <div className="mb-4 flex size-20 items-center justify-center">
                                {icons[feature.icon as keyof typeof icons]}
                            </div>
                            <h3 className="h-10 text-xl font-bold">
                                {feature.title}
                            </h3>
                            <p className="h-30">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex w-full justify-center sm:w-auto">
                <CTAButton lang={lang} />
            </div>
        </section>
    );
}
