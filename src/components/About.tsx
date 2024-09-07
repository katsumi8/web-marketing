import Image from "next/image";
import MyselfImg from "../../public/assets/myPhoto.jpeg";

function Myself() {
  return (
    <div>
      <div className="m-auto max-w-[1240px]">
        <p className="py-2 text-gray-600">
          初めまして、石原克海と申します。現在はドイツに在住しており、これまでのキャリアを通じて、世界的に認められた企業で数々のプロジェクトに携わってきました。SNSマーケティング、Webサイト制作、Webアプリケーション開発を専門とし、戦略プランナーおよびフルスタックエンジニアとしての豊富な経験を持っています。
          <br />
          <br />
          私のキャリアは、世界最大のコンサルティング会社、アクセンチュアから始まりました。ここで私は、世界的なクライアントとのプロジェクトに携わり、戦略的なビジネス改革からオペレーションの最適化まで、幅広い領域で成果を上げました。特に、NPOや大手自動車メーカーとのプロジェクトでは、業務効率化や新規事業の立ち上げに貢献し、その結果として顕著な成功を収めました。
          <br />
          <br />
          その後、インターネットイニシアティブジャパン（IIJ）に移り、新規事業のリードおよび中期計画の策定において重要な役割を果たしました。IIJでは、データプロセスの自動化を通じて、日々の業務効率化にも携わってきました。この経験により、私はテクノロジーをより深く理解し、クライアントに最適なソリューションを提供する能力をさらに磨くことができました。{" "}
          <br />
          <br />
          現在は、ドイツの製菓会社であるKuchenmeisterで日本市場向けの戦略アドバイザーとして活動しています。ここでは、日本市場特有のトレンドを分析し、それを基にした製品の適応戦略を提案することで、日本市場での売上拡大に貢献しています。また、ドイツにおいても現地のマーケットに精通しており、グローバルな視点でのビジネス戦略を提案することが可能です。
          <br />
          <br />
          また、ベンチャー企業の執行役員兼フルスタックエンジニアとして、エンジニアリングチームをリードし、24/7業務を可能にするためのWebアプリケーションを開発しました。加えて、営業データの分析と自動化によって営業活動を最大限に効率化しました。
          <br />
          <br />
          私は、これまでの経験を通じて、クライアントのニーズを的確に把握し、それに応えるための最適な戦略と技術的ソリューションを提供してきました。私の目標は、クライアントのビジネスを成功に導くことです。どのような課題でも、ぜひご相談ください。あなたのビジネスに最適な解決策を提供させていただきます。
        </p>
      </div>
    </div>
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
