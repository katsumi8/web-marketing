import { getTranslation } from "@/app/i18n/server";

export default async function FAQ({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const faqs = t("faq", { ns: "lp", returnObjects: true });
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
