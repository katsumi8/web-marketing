import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";
export default async function History({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const historyContent = t("history", { ns: "lp", returnObjects: true });
    return (
        <section className="w-full py-16">
            <h2 className="mb-8 text-center text-3xl font-bold">
                {historyContent.title}
            </h2>
            <div className="flex space-x-4 px-4 xl:px-32">
                <div className="relative mx-auto max-w-2xl">
                    {/* 縦のライン */}
                    <div className="absolute top-2 bottom-0 left-1 w-2 bg-gray-300"></div>

                    {historyContent.items.map((item, index) => (
                        <div key={index} className="relative mb-8 pl-12">
                            {/* 丸いバレット */}
                            <div className="absolute top-2 left-0 h-4 w-4 -translate-y-1/2 rounded-full bg-[#2b3172]" />
                            <h3 className="text-xl font-semibold">
                                {item.year}
                            </h3>
                            <p className="mt-2 text-gray-700">{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className="hidden flex-grow justify-center lg:flex lg:h-[50%]">
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
