import type { Metadata } from "next";
import ContactAndProfile from "./_components/ContactAndProfile";

export const metadata: Metadata = {
  title: "お問い合わせ | Katsumi Ishihara Consulting",
  description:
    "お問い合わせはこちらから。無料相談を受け付けております。ホームページの課題を解決し、オンラインでの集客をサポートします。",
  keywords: ["Contact", "Consultation", "Website", "Online Marketing"],
};

export default async function Contact({
  params,
}: {
  params: { lang: string };
}) {
  return <ContactAndProfile lang={params.lang} />;
}
