import Breadcrumbs from "@/components/Breadcrumbs";
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
  return (
    <div className="w-full bg-gray-100 min-h-screen flex flex-col items-center text-gray-100">
      <div className="w-full py-4 px-6 text-gray-400">
        <Breadcrumbs segments={["contact"]} />
      </div>
      <ContactAndProfile lang={params.lang} />;
    </div>
  );
}
