import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

export const metadata: Metadata = {
  title: "ウェブアプリ開発 | Katsumi Ishihara Consulting",
  description:
    "業務を効率化したい方、オリジナルアプリを開発したい方に向けたウェブアプリ開発サービスを提供しています。",
  keywords: ["ウェブアプリ開発", "業務効率化", "オリジナルアプリ"],
};

export default function WebAppDevelopment() {
  const segments = ["services", "web-app-development"];
  return (
    <div className="w-full bg-gray-100 min-h-screen flex flex-col items-center text-gray-100">
      {/* Breadcrumbs を表示 */}
      <div className="w-full py-4 px-6 text-gray-400 bg-white">
        <Breadcrumbs segments={segments} />
      </div>
      <div className="flex w-full sm:justify-end relative">
        {/* Top section with title and image */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>

        <div className="flex flex-col bg-gradient-to-r from-red-600 via-red-400 to-red-100 z-50 md:flex-row w-full sm:max-w-[80%] items-center justify-between p-6 py-16 space-y-8 md:space-y-0">
          {/* Left side: Title, subtitle, buttons */}
          <div className="md:w-2/3 text-left space-y-4 flex-grow px-2">
            <h1 className="text-4xl font-bold text-gray-100">
              ウェブアプリ開発サービス
            </h1>
            <div className="flex space-x-4 mt-4 text-sm">
              <p className="p-2 border border-gray-300 rounded-lg text-gray-100 transition">
                業務を効率化したい
              </p>
              <p className="p-2 border border-gray-300 rounded-lg text-gray-100 transition">
                オリジナルアプリを開発したい
              </p>
            </div>
          </div>

          {/* Right side: Image or Icon */}
          <div className="flex justify-center md:justify-end bg-white">
            <FaLaptopCode className="text-red-700 size-36 p-4" />
          </div>
        </div>
      </div>

      {/* Content sections (just as placeholders) */}
      <div
        id="section-overview"
        className="w-full p-8 sm:max-w-[60%] space-y-8"
      >
        {/* Problem */}
        <div className="problem-section">
          <p className="text-lg text-gray-600">
            現在、業務プロセスの効率化やデジタル化が求められる中、市販のソフトウェアでは自社のニーズを満たせず、手作業による非効率な業務が多いと感じていませんか？
            また、大手に依頼するにはコストが高すぎると感じていませんか？小規模から始めるウェブアプリ開発で、業務の効率化を実現しましょう。
          </p>
        </div>

        {/* Solution（解決策） */}
        <div className="flex flex-col py-4">
          <h2 className="text-3xl font-bold text-gray-800 py-4">
            キーとなるポイント
          </h2>
          <div className="w-full flex justify-evenly">
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">要件定義と設計</p>
            </div>
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">最新技術の活用</p>
            </div>
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">
                ユーザビリティの向上
              </p>
            </div>
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">継続的なサポート</p>
            </div>
          </div>
        </div>

        <div className="py-4">
          <p className="text-lg text-gray-600">
            これらのポイントを踏まえ、オリジナルのウェブアプリを開発することで、業務効率化や新たなビジネスチャンスの創出につなげることができます。
          </p>
        </div>

        <div className="space-y-3 py-4">
          <p className="text-lg text-gray-600">
            あなたのビジネスを成功に導くウェブアプリを一緒に作りましょう！
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            無料で相談する！
          </Link>
          <p className="text-sm text-gray-500">
            ご相談は1分で完了します。今すぐ、簡単にお問い合わせください！
          </p>
        </div>
      </div>
    </div>
  );
}
