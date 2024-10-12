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
      className="w-full flex flex-col items-center bg-white p-6 py-16 text-gray-600 space-y-8 justify-center"
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
            <div className="bg-red-50 p-4 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900">
                {concern.heading}
              </h3>
              <p className="text-gray-600">{concern.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* CTA */}
      <div className="mt-8 flex justify-center flex-col items-center relative space-y-3">
        {/* Container for the bubble with before and after slashes */}
        <div className="relative flex items-center justify-center">
          {/* Text in the bubble */}
          <p
            className="text-xl font-semibold text-gray-800 py-2 px-4 relative z-10 
            before:content-['\\'] after:content-['/'] 
            before:absolute after:absolute 
            before:-left-8 after:-right-8 
            before:text-3xl after:text-3xl before:text-gray-300 after:text-gray-300"
          >
            {cta.bubbleText}
          </p>
        </div>

        {/* Button with slashes extending from the top */}
        <Link
          className="relative w-full rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] p-4 px-8 
          text-gray-100 shadow-xl shadow-gray-400 
          hover:from-[#709dff] hover:to-[#5651e5] hover:shadow-2xl transition duration-300 ease-in-out text-center 
          flex justify-center items-center group"
          href={"#contact"}
        >
          <span className="relative z-1-">{cta.buttonText}</span>
          <FaArrowRight
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white 
            opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:right-4"
          />
        </Link>
      </div>
    </div>
  );
}
