import ContactForm from "@/app/[lang]/contact/_components/ContactForm";
import { getTranslation } from "@/app/i18n/server";

export default async function ContactFormForLp({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);

  return (
    <section
      id="contact"
      className="py-16 bg-[#aedbf5] w-full flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-8 px-8">
        {t("contactFormForLp.sectionTitle", { ns: "lp" })}
      </h2>
      <ContactForm lang={lang} />
    </section>
  );
}
