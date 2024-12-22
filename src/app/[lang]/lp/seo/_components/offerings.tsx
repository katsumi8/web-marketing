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
    <section className="bg-[#aedbf5] py-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">{offerings.title}</h2>
      <div className="container mx-auto flex justify-center">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 justify-items-center 
          lg:max-w-5xl justify-content-center"
        >
          {offerings.items.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 relative w-72 shadow space-y-6 py-10"
            >
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                <span
                  className="relative size-12 bg-gray-200 rounded-full text-[#2b3172] font-bold text-center 
                  flex justify-center items-center text-xl"
                >
                  {index + 1}
                </span>
              </div>

              <div className="flex justify-center mb-4 mt-6">
                {icons[feature.icon as keyof typeof icons]}
                {/* <Image */}
                {/*   src={feature.imagePath} */}
                {/*   alt={feature.altText} */}
                {/*   height={50} */}
                {/*   width={50} */}
                {/* /> */}
              </div>

              <h3 className="text-xl font-bold text-gray-700 mb-2 text-center">
                {feature.title}
              </h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 sm:mx-auto sm:w-[60%]">
        <CTAButton lang={lang} />
      </div>
    </section>
  );
}
