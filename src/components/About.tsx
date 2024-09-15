import Image from "next/image";
import MyselfImg from "../../public/assets/myPhoto.jpeg";

function Myself() {
  return (
    <section>
      <div className="m-auto max-w-[1240px]">
        <p className="py-2 text-gray-600">
          初めまして、石原克海と申します。現在はドイツ在住で、これまでのキャリアを通じて、世界的に認められた企業で数々のプロジェクトに携わってきました。
          <strong>SNSマーケティング</strong>、<strong>ホームページ開発</strong>
          、<strong>マーケティングオートメーション（MA）</strong>、
          <strong>Webアプリケーション開発</strong>
          を専門とし、戦略プランナーおよびフルスタックエンジニアとしての豊富な経験を持っています。
        </p>
        <div className="py-2">
          <h3 className="text-xl font-semibold">アクセンチュアでの実績</h3>
          <p className="text-gray-600">
            キャリアの始まりは、
            <strong>世界最大級コンサルティング会社、アクセンチュア</strong>での
            <strong>業務効率化</strong>や新規事業立ち上げです。
            ここでの経験が、戦略的なビジネス改革や最適化の基盤を築きました。
          </p>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold">IIJでの新規事業開発</h3>
          <p className="text-gray-600">
            新規事業リードと
            <strong>データ自動化</strong>に携わり、テクノロジー理解を深め、
            最適なソリューションを提供してきました。
          </p>
        </div>

        <div className="py-2">
          <h3 className="text-xl font-semibold">
            Kuchenmeisterでの戦略アドバイザーとしての活動
          </h3>
          <p className="text-gray-600">
            ドイツの<strong>Kuchenmeister</strong>では、日本市場向けの
            <strong>戦略アドバイザー</strong>
            として、商品戦略や実際の営業支援活動を通じて
            <strong>売上を10%向上</strong>させることに貢献しました
          </p>
        </div>

        <div className="py-2">
          <h3 className="text-xl font-semibold">
            ベンチャー企業でのエンジニアリングリード
          </h3>
          <p className="text-gray-600">
            ベンチャー企業では、<strong>フルスタックエンジニア</strong>として、
            <strong>Webアプリ開発</strong>と営業データの分析・自動化を行い、
            <strong>営業活動を効率化</strong>しました。
          </p>
        </div>

        <div className="py-2">
          <h3 className="text-xl font-semibold">ビジネス成功へのサポート</h3>
          <p className="py-2 text-gray-600">
            <strong>SNSマーケティング</strong>、<strong>Web開発</strong>、
            <strong>SEO</strong>、<strong>MA</strong>
            など、幅広い分野でサポートします。
            あなたのビジネスに最適な解決策を提供します。
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div
      id="about"
      className="flex w-full items-center p-2 py-16 md:h-screen flex-col"
    >
      <h1 className="mb-4 text-3xl font-bold text-gray-900">About Me</h1>

      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <Myself />
        </div>
        <div className="m-auto flex h-auto w-full flex-col items-center justify-center space-y-16 rounded-xl p-4 py-8 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
          <Image src={MyselfImg} className="rounded-xl" alt="Taiyaki" />
        </div>
      </div>
    </div>
  );
}
export default About;
