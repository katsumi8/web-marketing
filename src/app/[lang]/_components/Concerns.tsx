import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
      <div className="mt-8 flex justify-center flex-col items-center relative space-y-3">
        {/* Container for the bubble with before and after slashes */}
        <div className="relative flex items-center justify-center">
          {/* Text in the bubble */}
          <p
            className="text-xl font-semibold text-gray-800 py-2 px-4 relative z-10 
            before:content-['\\'] after:content-['/'] 
            before:absolute after:absolute 
            before:-left-8 after:-right-8 
            before:text-3xl after:text-3xl before:text-gray-300 after:text-gray-300"
          >
            無料相談受付中！
          </p>
        </div>

        {/* Button with slashes extending from the top */}
        <Link
          className="relative w-full rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] p-4 text-gray-100 shadow-xl shadow-gray-400 
      hover:from-[#709dff] hover:to-[#5651e5] hover:shadow-2xl transition duration-300 ease-in-out text-center flex justify-center items-center group"
          href={"#contact"}
        >
          <span className="relative z-10">
            {lang === "ja" ? "お問い合わせ" : "Contact Us"}
          </span>
          <FaArrowRight className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white transition-all duration-200 group-hover:right-4" />
        </Link>
      </div>
    </div>
  );
}
