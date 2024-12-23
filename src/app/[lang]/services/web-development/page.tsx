import { getTranslation } from "@/app/i18n/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";
import type { Service, WithContext } from "schema-dts";
import type { PageProps } from "../../page";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const lang = params.lang;

  const { t } = await getTranslation(lang);
  const metadata = t("services.webDevelopment", {
    ns: "meta",
    returnObjects: true,
  });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [...previousImages],
    },
  };
}

export default async function WebDevelopment({ params }: PageProps) {
  const segments = ["services", "web-development"];
  const { t } = await getTranslation(params.lang);
  const service = t("services.webDevelopment", {
    returnObjects: true,
    ns: "services",
  });
  const jsonLd: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ホームページ制作・リニューアル",
    description:
      "ホームページ(ウェブサイト)の制作・リニューアルを通じて、集客数を増やし、新規顧客の獲得につなげることができます。",
    provider: {
      "@type": "Organization",
      name: "Katsumi Ishihara Consulting",
      url: "https://yourwebsite.com", // あなたのサイトのURLに置き換えてください
      // "logo"は削除しました
    },
    serviceType: ["ホームページ制作", "リニューアル", "SEO対策"],
    areaServed: {
      "@type": "Country",
      name: "ドイツ",
    },
    offers: {
      "@type": "Offer",
      url: "https://katsumi-ishihara-consulting.com/services/web-development", // サービスページのURL
      priceCurrency: "EUR", // 通貨をユーロに変更
      availability: "https://schema.org/InStock",
      // 必要に応じて価格情報を追加
    },
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen flex flex-col items-center text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumbs を表示 */}
      <div className="w-full py-4 px-6 text-gray-400 bg-white">
        <Breadcrumbs segments={segments} />
      </div>
      <div className="flex w-full sm:justify-end relative">
        {/* Top section with title and image */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>

        <div className="flex flex-col bg-gradient-to-r from-red-600 via-red-400 to-red-100 z-50 md:flex-row w-full sm:max-w-[80%] items-center justify-between p-6 py-16 space-y-8 md:space-y-0">
          {/* Left side: Title, subtitle, buttons */}
          <div className="md:w-2/3 text-left space-y-4 flex-grow px-2">
            <h1 className="text-4xl font-bold text-gray-100">
              {service.title}
            </h1>
            <div className="flex space-x-4 mt-4 text-sm">
              {service.desires.map((desire, index) => (
                <p
                  key={index}
                  className="p-2 border border-gray-300 rounded-lg text-gray-100 transition"
                >
                  {desire}
                </p>
              ))}
            </div>
          </div>

          {/* Right side: Image or Icon */}
          <div className="flex justify-center md:justify-end bg-white">
            <FaPencilAlt className="text-red-700 size-36 p-4" />
          </div>
        </div>
      </div>

      {/* Content sections (just as placeholders) */}
      <div
        id="section-overview"
        className="w-full p-8 sm:max-w-[60%] space-y-8"
      >
        {/* Problem */}
        <div className="problem-section">
          <p className="text-lg text-gray-600">{service.description}</p>
        </div>

        {/* Solution（解決策） */}
        <div className="flex flex-col py-4">
          <h2 className="text-3xl font-bold text-gray-800 py-4">
            キーとなるポイント
          </h2>
          <div className="w-full flex justify-evenly">
            {service.points.map((point, index) => (
              <div
                key={index}
                className="rounded-full bg-red-400 size-36 flex items-center justify-center"
              >
                <p className="text-gray-100 text-center p-2">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-4">
          <p className="text-lg text-gray-600">{service.solution}</p>
        </div>

        <div className="space-y-3 py-4">
          <p className="text-lg text-gray-600">{service.cta.myMessage}</p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            {service.cta.buttonText}
          </Link>
          <p className="text-sm text-gray-500">{service.cta.bubbleText}</p>
        </div>
      </div>
    </div>
  );
}
