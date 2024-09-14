import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Service from "@/components/Service";
import Image from "next/image";
import Link from "next/link";
import BgImg from "../../../public/assets/digitalBackground.jpg";

export const metadata = {
  title: "営業活動を最大化 | Katsumi Ishihara Consulting",
  description:
    "ビジネスの成功を支える戦略と技術的ソリューションを提供します。ホームページ制作からSNSマーケティングまで、幅広いサービスであなたのビジネスをサポートします。",
  keywords: ["営業活動", "ホームページ制作", "SNSマーケティング"],
};

export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <div className="relative h-screen w-full">
        <Image
          src={BgImg}
          alt="ビジネス成功を象徴するデジタル背景画像"
          fill
          className="absolute inset-0 z-0 object-cover object-left"
          priority
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black 
          bg-opacity-50 p-4 sm:items-start sm:justify-start md:p-32 sm:space-y-20"
        >
          <h1 className="mt-10 text-3xl font-bold text-white md:text-6xl">
            営業活動を最大化したいあなたへ
          </h1>
          <p className="mt-10 text-base text-white md:text-xl">
            ビジネスの成功を支える戦略と技術的ソリューションを提供します。
            <br />
            ホームページ制作からSNSマーケティングまで、幅広いサービスであなたのビジネスをサポートします。
          </p>
          <div className="mt-8 flex w-[70%] justify-center sm:w-full">
            <Link
              href="/#contact"
              className="rounded-lg bg-gray-300 bg-opacity-50 px-10 py-4 sm:text-3xl font-bold text-white backdrop-blur-lg backdrop-filter hover:bg-opacity-70 sm:px-32"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </div>
      <Service />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
