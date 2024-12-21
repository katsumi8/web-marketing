import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";

export default async function CustomerPainPoints({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const painPoints = t("customerPainPoints", {
    ns: "lp",
    returnObjects: true,
  });

  return (
    <section className="bg-[#aedbf5] py-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">
        {painPoints.title}
      </h2>
      <div className="xl:max-w-[65%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center p-6">
        {painPoints.points.map((painPoint, index) => (
          <div
            key={index}
            className="bg-gray-100 relative rounded-lg p-6 sm:size-64 md:size-72 text-center 
            flex flex-col space-y-6 items-center"
          >
            <div className="flex justify-center mb-3">
              <Image
                src={painPoint.imagePath}
                alt={painPoint.altText}
                width={120}
                height={120}
              />
            </div>
            <p className="text-gray-700 font-semibold text-sm sm:text-base">
              {painPoint.text}
            </p>
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full 
                  size-0 border-x-[15px] border-t-[15px] border-x-transparent border-t-gray-100"
            ></div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-12 px-2">
        <p
          className="relative text-lg sm:text-2xl font-semibold mb-4 z-0
            before:content-[''] before:absolute before:bg-yellow-300
            before:-z-10 before:w-full before:h-[8px] before:bottom-0 before:left-0"
        >
          {painPoints.solution}
        </p>
      </div>
    </section>
  );
}
