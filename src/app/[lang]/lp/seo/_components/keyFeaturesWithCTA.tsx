import { getTranslation } from "@/app/i18n/server";
import { FaBuildingUser } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { IoIosSpeedometer } from "react-icons/io";
import CTAButton from "./ctaButton";

const icons = {
  speed: <IoIosSpeedometer className="size-32 text-[#2b3172]" />,
  achievement: <GrAchievement className="size-32 text-[#2b3172]" />,
  building: <FaBuildingUser className="size-32 text-[#2b3172]" />,
};

export default async function KeyFeaturesWithCTA({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const ourFeatures = t("keyFeatures", { ns: "lp", returnObjects: true });

  // const ourFeatures = [
  //   {
  //     title: "スピード×正確性の両立",
  //     description:
  //       "フリーランスならではの柔軟性と迅速な対応を実現。元外資系コンサルの分析力を活かし、効果的な施策を最短で提案します。",
  //     imagePath: "/assets/your-illustration.png",
  //     altText: "スピードと正確性",
  //     icon: <IoIosSpeedometer className="size-32 text-[#2b3172]" />,
  //   },
  //   {
  //     title: "技術に裏付けられた確かな実績",
  //     description:
  //       "フルスタックエンジニアとしての深い技術知識で、複雑なWebサイトでも対応可能。PV数6倍アップの実績もあり、効果を数字で実証します。",
  //     imagePath: "/assets/your-illustration.png",
  //     altText: "実績のイメージ",
  //     icon: <GrAchievement className="size-32 text-[#2b3172]" />,
  //   },
  //   {
  //     title: "中小企業の味方",
  //     description:
  //       "大規模な予算がなくても大丈夫。初月無料の特典や予算に応じた柔軟な提案で、貴社の成長を支援します。",
  //     imagePath: "/assets/your-illustration.png",
  //     altText: "中小企業の味方",
  //     icon: <FaBuildingUser className="size-32 text-[#2b3172]" />,
  //   },
  // ];

  return (
    <section className="py-16 w-full flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center mb-8">
        {ourFeatures.title}
      </h2>
      <div className="container mx-auto flex justify-center py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {ourFeatures.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-80 space-y-8 p-4"
            >
              {/* <Image */}
              {/*   src={feature.imagePath} */}
              {/*   width={50} */}
              {/*   height={50} */}
              {/*   alt={feature.altText} */}
              {/* /> */}
              <div className="flex justify-center mb-4 size-20 items-center">
                {icons[feature.icon as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-bold h-10">{feature.title}</h3>
              <p className="h-30">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 w-full sm:w-auto">
        <CTAButton lang={lang} />
      </div>
    </section>
  );
}
