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

export default function LandingPageSEO() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between bg-gray-100 text-black">
      {/* ヒーローセクション + CTA */}
      <Hero />
      {/* 実績セクション + CTA */}
      <PerformanceShowcase />
      {/* こんなお悩み抱えてませんか + そのお悩み、弊社がすべて解決しますセクション */}
      <CustomerPainPoints />
      {/* 弊社特徴セクション + CTA */}
      <KeyFeaturesWithCTA />
      {/* サービス内容セクション + CTA */}
      <Offerings />
      {/* お問い合わせ後の流れ */}
      <CustomerJourneySteps />
      {/* 料金プランセクション + CTA */}
      <Price />
      {/* FAQセクション */}
      <FAQ />
      {/* お問い合わせセクション */}
      <ContactFormForLp />
      {/* 沿革セクション */}
      <History />
      {/* フローティングボタン */}
      <FloatingButton />
    </div>
  );
}
