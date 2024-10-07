import Link from "next/link";

export default function Concerns({ lang }: { lang: string }) {
  return (
    <div
      id="concerns"
      className="w-full flex flex-col items-center bg-white p-6 py-16 text-gray-600 space-y-8 justify-center"
    >
      <h1 className="text-3xl font-bold text-gray-900">
        こんな悩みを抱えていませんか？
      </h1>
      <div className="flex flex-col items-start space-y-8 md:w-[70%]">
        {/* Concern 1 */}
        <div className="flex justify-start w-full">
          <div className="bg-red-50 p-4 rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-900">
              集客がうまくいかない。。。
            </h2>
            <p className="text-gray-600">
              Webサイトの訪問者数が期待通りに伸びていない。
            </p>
          </div>
        </div>

        {/* Concern 2 */}
        <div className="flex justify-end w-full">
          <div className="bg-red-50 p-4 rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-900">
              デザインが古く、ユーザー体験が悪い。。。
            </h2>
            <p className="text-gray-600">
              ユーザーが使いやすい、モダンなデザインにリニューアルしたい。
            </p>
          </div>
        </div>

        {/* Concern 3 */}
        <div className="flex justify-start w-full">
          <div className="bg-red-50 p-4 rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-900">
              問い合わせ・購入が全然来ない。。。
            </h2>
            <p className="text-gray-600">
              Webサイトを準備したが、あんまり問い合わせや購入にいたらない。
            </p>
          </div>
        </div>

        {/* Concern 4 */}
        <div className="flex justify-end w-full">
          <div className="bg-red-50 p-4 rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-900">
              既存顧客へのリーチが足りない。。。
            </h2>
            <p className="text-gray-600">
              既存顧客は増えてきているが、人手不足でフォローアップが追いつかない。
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="mt-8 flex justify-center flex-col items-center relative">
        {/* Container for the bubble and slashes */}
        <div className="relative flex items-center justify-center mb-4">
          {/* Left Slash */}
          <span className="text-2xl text-gray-600 absolute left-0 bottom-[-20px] transform -translate-x-8">
            \
          </span>

          {/* Text in the bubble */}
          <p className="text-xl text-gray-800 py-2 rounded-lg">
            1分でお問い合わせ完了！
          </p>

          {/* Right Slash */}
          <span className="text-2xl text-gray-600 absolute right-0 bottom-[-20px] transform translate-x-8">
            /
          </span>
        </div>

        {/* Button with slashes extending from the top */}
        <Link
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 w-56 relative text-center"
          href={"#contact"}
        >
          {lang === "ja" ? "無料で相談する！" : "Contact Us"}
        </Link>
      </div>
    </div>
  );
}
