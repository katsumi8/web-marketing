import Image from "next/image";
import CTAButton from "./ctaButton";

export default function KeyFeaturesWithCTA() {
  const ourFeatures = [
    {
      title: "スピード×正確性の両立",
      description:
        "フリーランスならではの柔軟性と迅速な対応を実現。元外資系コンサルの分析力を活かし、効果的な施策を最短で提案します。",
      imagePath: "/path/to/your-illustration.png",
      altText: "Illustration",
    },
    {
      title: "技術に裏付けられた確かな実績",
      description:
        "フルスタックエンジニアとしての深い技術知識で、複雑なWebサイトでも対応可能。PV数6倍アップの実績もあり、効果を数字で実証します。",
      imagePath: "/path/to/your-illustration.png",
      altText: "Illustration",
    },
    {
      title: "中小企業の味方",
      description:
        "大規模な予算がなくても大丈夫。初月無料の特典や予算に応じた柔軟な提案で、貴社の成長を支援します。",
      imagePath: "/path/to/your-illustration.png",
      altText: "Illustration",
    },
  ];

  return (
    <section className="py-16 w-full flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center mb-8">弊社の特徴</h2>
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {ourFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-72 space-y-8 p-4"
            >
              <Image
                src={feature.imagePath}
                width={50}
                height={50}
                alt={feature.altText}
              />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 w-full sm:w-auto">
        <CTAButton />
      </div>
    </section>
  );
}