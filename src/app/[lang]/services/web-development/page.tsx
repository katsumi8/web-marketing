import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";
import type { Service, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "ホームページ制作・リニューアル | Katsumi Ishihara Consulting",
  description:
    "ホームページ(ウェブサイト)の制作・リニューアルを通じて、集客数を増やし、新規顧客の獲得につなげることができます。",
  keywords: ["ホームページ制作", "リニューアル", "SEO対策", "集客数増加"],
};

export default function WebDevelopment() {
  const segments = ["services", "web-development"];
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
              ホームページ(ウェブサイト)制作・リニューアル
            </h1>
            <div className="flex space-x-4 mt-4 text-sm">
              <p className="p-2 border border-gray-300 rounded-lg text-gray-100 transition">
                集客を増やしたい
              </p>
              <p className="p-2 border border-gray-300 rounded-lg text-gray-100 transition">
                デザインをリニューアルしたい
              </p>
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
          <p className="text-lg text-gray-600">
            現在のWebサイトのデザインが古く、ユーザーの関心を引くことができず、集客が思うように伸びない。また、SEO対策が不十分なために、検索エンジンで上位表示されず、新規顧客の流入が少ない。
            多くの方が同様の課題に直面し、Webサイトを改良する必要性を感じながらも、どこから手をつければ良いのか悩んでいるのです。
          </p>
        </div>

        {/* Solution（解決策） */}
        <div className="flex flex-col py-4">
          <h2 className="text-3xl font-bold text-gray-800 py-4">
            キーとなるポイント
          </h2>
          <div className="w-full flex justify-evenly">
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">顧客論点設計</p>
            </div>
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">
                表示スピード最適化
              </p>
            </div>
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">
                ユーザビリティの向上
              </p>
            </div>
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">
                コンバージョン率の最大化
              </p>
            </div>
          </div>
        </div>

        <div className="py-4">
          <p className="text-lg text-gray-600">
            これらのポイントを踏まえ、Webサイトの制作 /
            リニューアルを行い、ユーザーの関心を引くデザインに変更することで、集客数を増やし、新規顧客の獲得につなげることができます。
          </p>
        </div>

        <div className="space-y-3 py-4">
          <p className="text-lg text-gray-600">
            あなたのビジネスを成功に導くWebサイトを一緒に作りましょう!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            無料で相談する！
          </Link>
          <p className="text-sm text-gray-500">
            ご相談は1分で完了します。今すぐ、簡単にお問い合わせください！
          </p>
        </div>
      </div>
    </div>
  );
}
