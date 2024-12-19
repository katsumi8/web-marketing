import { FaLink } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { IoMdAnalytics } from "react-icons/io";
import {
  PiBookOpenText,
  PiStrategyBold,
  PiTreeStructureBold,
} from "react-icons/pi";
import CTAButton from "./ctaButton";

export default function Offerings() {
  const ourFeatures = [
    {
      title: "戦略立案",
      description:
        "貴社の目標達成に向けた最適な戦略を立案します。競合調査や業種別のアプローチをもとに、SEOで成果を出すための具体的なアクションプランを作成します。",
      icon: <PiStrategyBold className="size-14 text-[#2b3172]" />,
    },
    {
      title: "サイト設計",
      description:
        "集客性・収益性・網羅性などを総合的に判断し、キーワード選定とサイト設計を行います。",
      icon: <PiTreeStructureBold className="size-14 text-[#2b3172]" />,
    },
    {
      title: "リスティング広告の運用",
      description:
        "SEOだけでは補いきれない部分をリスティング広告でカバーします。適切なキーワード選定と効果的な広告運用で、短期的な成果と長期的な集客基盤の構築を支援します。",
      icon: <GrAnnounce className="size-14 text-[#2b3172]" />,
    },
    {
      title: "記事の制作",
      description:
        "SEOキーワードの競合を調査しながら記事を制作します。弊社がSEOで重視しているのが網羅性。品質の高さはオウンドメディアの結果に直結します。",
      icon: <PiBookOpenText className="size-14 text-[#2b3172]" />,
    },
    {
      title: "データ分析",
      description:
        "アクセスデータやユーザー行動を徹底的に分析し、効果的な改善案を提案します。また、データに基づくコンバージョン最適化を行い、訪問者を顧客へと効率的に導くための施策を実施します。確実な成果を目指すためのデータドリブンなアプローチです。",
      icon: <IoMdAnalytics className="size-14 text-[#2b3172]" />,
    },
    {
      title: "外部リンク戦略",
      description:
        "高品質な外部リンクの獲得をサポートします。信頼性のあるサイトとの連携や、自然なリンク構築により検索エンジンの評価を高めます。",
      icon: <FaLink className="size-14 text-[#2b3172]" />,
    },
  ];

  return (
    <section className="bg-[#aedbf5] py-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">サービス内容</h2>
      <div className="container mx-auto flex justify-center">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 justify-items-center 
          lg:max-w-5xl justify-content-center"
        >
          {ourFeatures.map((feature, index) => (
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
                {feature.icon}
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
        <CTAButton />
      </div>
    </section>
  );
}
