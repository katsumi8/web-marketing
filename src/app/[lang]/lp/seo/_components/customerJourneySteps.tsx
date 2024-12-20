import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";

export default async function CustomerJourneySteps({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const customerJourneySteps = t("customerJourneySteps", {
    ns: "lp",
    returnObjects: true,
  });

  // const steps = [
  //   {
  //     title: "ヒアリング",
  //     description:
  //       "お問い合わせ後、オンラインやお電話にて詳しいヒアリングを実施します。サイトの現状や目指すゴールをすり合わせ、プロジェクトの方向性を明確化していきます。",
  //     imagePath: "/assets/hearingMeeting.webp",
  //     altText: "ヒアリング",
  //   },
  //   {
  //     title: "お見積もり・ご提案",
  //     description:
  //       "ヒアリング内容をもとに最適な施策プランとお見積もりを提示いたします。納得いただけましたら、その旨をメールやチャットなどでお知らせください。",
  //     imagePath: "/assets/estimations.webp",
  //     altText: "見積もり",
  //   },
  //   {
  //     title: "ご契約・お支払い",
  //     description:
  //       "契約内容とお見積もりに合意いただけましたら、正式にご契約となります。",
  //     imagePath: "/assets/contract.webp",
  //     altText: "契約",
  //   },
  //   {
  //     title: "施策のスタート",
  //     description:
  //       "アカウントの設定完了後、具体的な作業に着手します。サイト改修やSEO対策、コンテンツ制作など、お客様の優先度に沿って対応いたします。",
  //     imagePath: "/assets/work.webp",
  //     altText: "作業",
  //   },
  //   {
  //     title: "納品 & フィードバック",
  //     description:
  //       "完成した内容を納品し、必要に応じて修正対応を行います。納品後も定期的にフォローアップを実施し、継続的にサイト運用の最適化や改善提案を行うことも可能です。",
  //     imagePath: "/assets/feedback.webp",
  //     altText: "納品とフィードバック",
  //   },
  // ];

  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">
        {customerJourneySteps.title}
      </h2>

      <div className="flex flex-col items-center space-y-16">
        {customerJourneySteps.steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:justify-between sm:items-center
            p-4 w-[80%] bg-[#aedbf5] rounded-lg md:h-36 shadow-md"
          >
            {/* 左上の番号 */}
            <div
              className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2
              text-[#2b3172] flex items-center justify-center 
              text-4xl font-bold z-10"
            >
              0{index + 1}
            </div>

            {/* カード内容 */}
            <div className="flex flex-col space-y-4 p-4">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="sm:pr-4">{step.description}</p>
            </div>

            <div className="w-full sm:w-32 h-32 rounded-xl relative flex-shrink-0 bg-gray-100 flex justify-center">
              <Image
                className="object-cover rounded-xl"
                src={step.imagePath}
                fill={true}
                alt={step.altText}
              />
            </div>

            {/* 下向き▼を右下中央あたりに配置 */}
            {customerJourneySteps.steps.length - 1 > index && (
              <div
                className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 size-0 
                          border-x-[30px] border-t-[30px] border-x-transparent border-t-[#2b3172]"
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
