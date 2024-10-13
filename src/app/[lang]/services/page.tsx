import { getTranslation } from "@/app/i18n/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata, ResolvingMetadata } from "next";
import type { PageProps } from "../page";
import ServiceList from "./_components/ServiceList";

export const generateMetadata = async (
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const lang = params.lang;

  const { t } = await getTranslation(lang);
  console.log("Translation function:", t);
  const metadata = t("services", { ns: "meta", returnObjects: true });
  console.log("Metadata from translation:", metadata);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "サービス一覧 | Katsumi Ishihara Consulting",
    description:
      "当社の提供するサービス一覧です。コンバージョン分析、ウェブアプリ開発、ウェブサイト制作・リニューアルなど、あなたのビジネスをサポートするサービスを紹介します。",
    keywords: [
      "サービス",
      "コンバージョン分析",
      "ウェブアプリ開発",
      "ホームページ制作",
    ],
    // title: metadata.title,
    // description: metadata.description,
    // keywords: metadata.keywords,
    // openGraph: {
    //   title: metadata.title,
    //   description: metadata.description,
    //   images: [...previousImages],
    // },
  };
};

export default function Services({ params }: PageProps) {
  return (
    <div className="w-full bg-gray-100 min-h-screen flex flex-col items-center text-gray-100">
      <div className="w-full py-4 px-6 text-gray-400 bg-white">
        <Breadcrumbs segments={["services"]} />
      </div>
      <ServiceList lang={params.lang} />
    </div>
  );
}
