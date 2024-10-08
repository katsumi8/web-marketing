import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import MyJourney from "./_components/MyJourney";

export const metadata: Metadata = {
  title: "経歴 | Katsumi Ishihara Consulting",
  description:
    "経歴を紹介します。ドイツでのHP制作、リニューアルとSEO最適化を専門としております。",
  keywords: ["経歴", "ドイツ", "SEO最適化", "リニューアル"],
};

export default function About({ params }: { params: { lang: string } }) {
  return (
    <div className="w-full bg-gray-100 min-h-screen flex flex-col items-center text-gray-100">
      <div className="w-full py-4 px-6 text-gray-400">
        <Breadcrumbs segments={["about"]} />
      </div>
      <MyJourney lang={params.lang} />;
    </div>
  );
}
