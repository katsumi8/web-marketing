import ServiceList from "./_components/ServiceList";

export const metadata = {
  title: "サービス | Katsumi Ishihara Consulting",
  description:
    "ドイツ、フランス、イタリア、スペインなどのEU(欧州)在住の皆様へ。ホームページの制作・リニューアル、そしてSEO最適化はお任せください。ウェブサイトの課題を解決し、オンラインでの集客をサポートします。",
  keywords: ["ホームページ制作", "ドイツ", "SEO最適化", "リニューアル"],
};

export default function Services({ params }: { params: { lang: string } }) {
  return <ServiceList lang={params.lang} />;
}
