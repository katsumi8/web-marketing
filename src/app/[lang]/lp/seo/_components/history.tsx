import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";
export default async function History({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const historyContent = t("history", { ns: "lp", returnObjects: true });
  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">
        {historyContent.title}
      </h2>
      <div className="flex px-4 xl:px-32 space-x-4">
        <div className="max-w-2xl mx-auto relative">
          {/* 縦のライン */}
          <div className="absolute top-2 left-1 bottom-0 w-2 bg-gray-300"></div>

          {historyContent.items.map((item, index) => (
            <div key={index} className="relative pl-12 mb-8">
              {/* 丸いバレット */}
              <div className="absolute top-2 left-0 h-4 w-4 bg-[#2b3172] rounded-full -translate-y-1/2" />
              <h3 className="text-xl font-semibold">{item.year}</h3>
              <p className="mt-2 text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="flex-grow justify-center hidden lg:flex lg:h-[50%]">
          <Image
            className="rounded-lg object-cover"
            src="/assets/myPhoto.webp"
            alt={historyContent.imageAlt}
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
