import Link from "next/link";
import { IoMdAnalytics } from "react-icons/io";

export default function ConversionAnalysis() {
  return (
    <div className="w-full bg-gray-100 min-h-screen flex flex-col items-center text-gray-100">
      <div className="flex w-full sm:justify-end relative">
        {/* Top section with title and image */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>

        <div className="flex flex-col bg-gradient-to-r from-red-600 via-red-400 to-red-100 z-50 md:flex-row w-full sm:max-w-[80%] items-center justify-between p-6 py-16 space-y-8 md:space-y-0">
          {/* Left side: Title, subtitle, buttons */}
          <div className="md:w-2/3 text-left space-y-4 flex-grow px-2">
            <h1 className="text-4xl font-bold text-gray-100">
              Webサイトの集客数を増やすために、
              <span className="text-white">コンバージョン分析</span>
              を行いましょう！
            </h1>
            <div className="flex space-x-4 mt-4 text-sm">
              <p className="p-2 border border-gray-300 rounded-lg text-gray-100 transition">
                売上アップ
              </p>
              <p className="p-2 border border-gray-300 rounded-lg text-gray-100 transition">
                問い合わせ数の増加
              </p>
            </div>
          </div>

          {/* Right side: Image or Icon */}
          <div className="flex justify-center md:justify-end bg-white">
            <IoMdAnalytics className="text-red-700 size-36 p-4" />
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
            ウェブサイトへのアクセス数はあるものの、思うようにコンバージョン率が上がらず、売上やお問い合わせ数が伸び悩んでいませんか？多くの企業が同様の課題に直面し、コンバージョン率向上のための具体的な改善策を見つけられずにいます。
          </p>
        </div>

        {/* Solution（解決策） */}
        <div className="flex flex-col py-4">
          <h2 className="text-3xl font-bold text-gray-800 py-4">
            キーとなるポイント
          </h2>
          <div className="w-full flex justify-evenly">
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">原因箇所特定</p>
            </div>
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">仮説構築</p>
            </div>
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">テスト実施</p>
            </div>
            <div className="rounded-full bg-red-400 size-36 flex items-center justify-center">
              <p className="text-gray-100 text-center p-2">継続的な改善</p>
            </div>
          </div>
        </div>

        <div className="py-4">
          <p className="text-lg text-gray-600">
            これらのポイントを踏まえ、コンバージョン分析を行うことで、ユーザーのニーズや行動を的確に把握し、効果的な改善策を導き出すことができます。それにより、コンバージョン率を向上させ、ビジネス成果の最大化につなげることが可能です。
          </p>
        </div>

        <div className="space-y-3 py-4">
          <p className="text-lg text-gray-600">
            あなたのウェブサイトの潜在力を引き出すコンバージョン分析をお任せください！
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
