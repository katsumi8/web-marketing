import { getTranslation } from "@/app/i18n/server";
import type { Metadata, ResolvingMetadata } from "next";
import type { PageProps } from "../../page";
import ContactFormForLp from "./_components/contactFormLp";
import CustomerJourneySteps from "./_components/customerJourneySteps";
import CustomerPainPoints from "./_components/customerPainPoints";
import FAQ from "./_components/faq";
import FloatingButton from "./_components/floatingButton";
import Hero from "./_components/hero";
import History from "./_components/history";
import KeyFeaturesWithCTA from "./_components/keyFeaturesWithCTA";
import Offerings from "./_components/offerings";
import PerformanceShowcase from "./_components/performanceShowcase";
import Price from "./_components/price";

export const generateMetadata = async (
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const lang = params.lang;

  const { t } = await getTranslation(lang);
  const metadata = t("seoLandingPage", { ns: "meta", returnObjects: true });

  const imgPath =
    lang === "ja" ? "/assets/jp_1200_628.jpg" : "/assets/de_1200_628.jpg";

  const customOgImage = {
    url: `https://www.katsumi-ishihara-consulting.com/${imgPath}`,
    width: 1200,
    height: 628,
    alt: "SEO consulting",
  };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [customOgImage],
    },
  };
};

export default async function LandingPageSEO({ params }: PageProps) {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between bg-gray-100 text-black">
      {/* ヒーローセクション + CTA */}
      <Hero lang={params.lang} />
      {/* 実績セクション + CTA */}
      <PerformanceShowcase lang={params.lang} />
      {/* こんなお悩み抱えてませんか + そのお悩み、弊社がすべて解決しますセクション */}
      <CustomerPainPoints lang={params.lang} />
      {/* 弊社特徴セクション + CTA */}
      <KeyFeaturesWithCTA lang={params.lang} />
      {/* サービス内容セクション + CTA */}
      <Offerings lang={params.lang} />
      {/* お問い合わせ後の流れ */}
      <CustomerJourneySteps lang={params.lang} />
      {/* 料金プランセクション + CTA */}
      <Price lang={params.lang} />
      {/* FAQセクション */}
      <FAQ lang={params.lang} />
      {/* お問い合わせセクション */}
      <ContactFormForLp lang={params.lang} />
      {/* 沿革セクション */}
      <History lang={params.lang} />
      {/* フローティングボタン */}
      <FloatingButton lang={params.lang} />
    </div>
  );
}
