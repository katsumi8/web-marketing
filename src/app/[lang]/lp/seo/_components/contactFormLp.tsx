import ContactForm from "@/app/[lang]/contact/_components/ContactForm";

export default function ContactFormForLp() {
  const lang = "ja";

  return (
    <section
      id="contact"
      className="py-16 bg-[#aedbf5] w-full flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-8 px-8">
        お問い合わせ・ご相談はこちらから
      </h2>
      <ContactForm lang={lang} />
    </section>
  );
}
