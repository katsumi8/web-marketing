import type { Metadata } from "next";
import { getTranslation } from "../i18n/server";
import HomeComponent from "./_components/homeComponent";

export const metadata: Metadata = {
  title:
    "ドイツでのHP制作、リニューアルとSEO最適化 | Katsumi Ishihara Consulting",
  description:
    "ドイツ、フランス、イタリア、スペインなどのEU(欧州)在住の皆様へ。ホームページの制作・リニューアル、そしてSEO最適化はお任せください。ウェブサイトの課題を解決し、オンラインでの集客をサポートします。",
  keywords: ["ホームページ制作", "ドイツ", "SEO最適化", "リニューアル"],
  openGraph: {
    title:
      "ドイツでのHP制作、リニューアルとSEO最適化 | Katsumi Ishihara Consulting",
    description:
      "EU在住の皆様へ。ホームページの課題を解決し、オンラインでの集客をサポートします。詳しくは当サイトをご覧ください。",
  },
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
