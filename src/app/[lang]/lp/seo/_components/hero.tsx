import Image from "next/image";
import CTAButton from "./ctaButton";

export default function Hero() {
  return (
    <section className="bg-[#aedbf5] grid grid-col-1 md:grid-cols-2 w-full min-h-[70vh] items-center z-0 relative">
      {/* Left side */}
      <div
        className="block md:hidden absolute top-0 right-0 bg-no-repeat bg-cover bg-center z-10 w-full h-full opacity-30"
        style={{
          backgroundImage: `url('/assets/hero.svg')`,
          width: "80%",
          height: "80%",
        }}
      ></div>
      <div className="flex text-left md:text-center flex-col md:items-center space-y-4 py-4 p-4 md:p-0 z-20">
        <p
          className="text-xl md:text-3xl font-bold text-white px-4 py-2 
          from-indigo-600 via-indigo-400 to-indigo-300 bg-gradient-to-r"
        >
          今だけ、年間契約で初月無料！
        </p>
        <div className="flex flex-col items-center pr-8 md:px-4 py-6 space-y-4">
          <h2 className="text-left text-lg md:text-2xl">
            「時間がない！自分ではできない」 そんな方のために、
            <br />
            <span
              className="text-xl md:text-4xl font-bold px-2 py-1 rounded-lg bg-indigo-600
              md:bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent"
            >
              丸ごとお任せできる
              <br />
              SEOコンサルティング
            </span>
            を始めました。
          </h2>
          <p className="text-gray-700 md:text-gray-600 sm:text-base text-sm">
            元外資系コンサルかつ、フルスタックエンジニアである私が貴社のWeb集客をお手伝いします。
          </p>
        </div>
        <div className="flex justify-center md:w-full">
          <CTAButton />
        </div>
      </div>
      {/* Right side image for larger screens */}
      <div className="hidden md:block">
        <Image
          src="/assets/hero.svg"
          alt="SEOの画像"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
