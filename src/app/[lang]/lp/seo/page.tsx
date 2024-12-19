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
      <section className="py-16 bg-[#aedbf5] w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">料金プランについて</h2>
        <p className="p-10">
          月あたりの費用は 1,200〜2,000程度を想定いただければ十分です。
          実際の金額は依頼内容や作業ボリュームによって前後するため、
          詳細はお問い合わせの上ご確認ください。
        </p>
      </section>
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
