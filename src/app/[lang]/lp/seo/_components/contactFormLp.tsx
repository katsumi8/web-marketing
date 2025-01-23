import ContactForm from "@/app/[lang]/contact/_components/ContactForm";
import { getTranslation } from "@/app/i18n/server";

export default async function ContactFormForLp({ lang }: { lang: string }) {
    const { t } = await getTranslation(lang);

    return (
        <section
            id="contact"
            className="flex w-full flex-col items-center bg-[#aedbf5] py-16"
        >
            <h2 className="mb-8 px-8 text-3xl font-bold">
                {t("contactFormForLp.sectionTitle", { ns: "lp" })}
            </h2>
            <ContactForm lang={lang} />
        </section>
    );
}
