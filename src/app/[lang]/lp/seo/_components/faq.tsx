import { getTranslation } from "@/app/i18n/server";

export default async function FAQ({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const faqs = t("faq", { ns: "lp", returnObjects: true });
  // const faqs = [
  //   {
  //     question: "Q. ご相談前に準備しておくことはありますか？",
  //     answer:
  //       "特にありません。大まかなご要望や抱えている課題があればお伝えください。まだはっきりしていない場合でも、お気軽にご相談いただけます。",
  //   },
  //   {
  //     question: "Q. 見積もりは無料ですか？",
  //     answer:
  //       "はい、見積もりは無料です。ご要望や予算の目安を教えていただきながら、ご提案内容を作成いたします。",
  //   },
  //   {
  //     question: "Q. 制作期間はどのくらいかかりますか？",
  //     answer:
  //       "規模や内容によりますが、通常1〜2ヶ月程度を想定しています。ご要望や他案件との兼ね合いによって前後する場合があります。",
  //   },
  //   {
  //     question: "Q. 広告の運用もお願いできますか？",
  //     answer:
  //       "はい、SEOだけでなくリスティング広告の運用やキーワード選定まで幅広く対応可能です。ご希望の際はお問い合わせ時にお知らせください。",
  //   },
  //   {
  //     question: "Q. 契約後のサポートはありますか？",
  //     answer:
  //       "プランやオプションによりますが、納品後もサイトの運用に関するフォローアップや定期的なレポート提出を行うサポート体制を整えています。",
  //   },
  // ];

  return (
    <section className="py-16 w-full items-center flex flex-col">
      <h2 className="text-3xl font-bold mb-8">{faqs.title}</h2>

      <div className="w-[80%] justify-center items-center flex flex-col space-y-6">
        {faqs.items.map((faq, index) => (
          <details
            key={index}
            className="p-4 rounded-lg bg-[#aedbf5] w-full
            cursor-pointer transition duration-300 ease-in-out relative hover:bg-[#d0d7e5]"
          >
            <summary className="cursor-pointer font-semibold">
              {faq.question}
            </summary>
            <p className="mt-2">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
