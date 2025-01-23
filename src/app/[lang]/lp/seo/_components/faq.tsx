import { getTranslation } from "@/app/i18n/server";

export default async function FAQ({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);
    const faqs = t("faq", { ns: "lp", returnObjects: true });
    return (
        <section className="flex w-full flex-col items-center py-16">
            <h2 className="mb-8 text-3xl font-bold">{faqs.title}</h2>

            <div className="flex w-[80%] flex-col items-center justify-center space-y-6">
                {faqs.items.map((faq, index) => (
                    <details
                        key={index}
                        className="relative w-full cursor-pointer rounded-lg bg-[#aedbf5] p-4 transition duration-300 ease-in-out hover:bg-[#d0d7e5]"
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
