import { getTranslation } from "../i18n/server";
import HomeComponent from "./_components/homeComponent";

export const metadata = {
  title: "営業活動を最大化 | Katsumi Ishihara Consulting",
  description:
    "ビジネスの成功を支える戦略と技術的ソリューションを提供します。ホームページ制作からSNSマーケティングまで、幅広いサービスであなたのビジネスをサポートします。",
  keywords: ["営業活動", "ホームページ制作", "SNSマーケティング"],
};

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const { t } = await getTranslation(lang);

  return (
    <HomeComponent
      title={t("title")}
      description={t("description")}
      imageAlt={t("imageAlt")}
      contactButtonText={t("contactButtonText")}
      lang={lang}
    />
  );
}
