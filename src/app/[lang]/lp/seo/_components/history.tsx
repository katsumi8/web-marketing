export default function History() {
  const history = [
    {
      year: "2017年",
      content:
        "外資系コンサルティングファームに入社し、さまざまな企業のDXプロジェクトを支援。",
    },
    {
      year: "2020年",
      content:
        "IT系企業にてサービス企画を担当し、市場調査やデータ分析を通じ、プロダクトの新規事業立ち上げに貢献。",
    },
    {
      year: "2022年",
      content:
        "フルスタックエンジニアとしてWebサービスの開発・運用に携わる。サイト構造からサーバーサイドまで幅広く経験し、技術面での強みを獲得。",
    },
    {
      year: "2023年",
      content:
        "個人事業主として独立し、SEOコンサルティングを開始。コンサル経験・技術知識・マーケティング視点を掛け合わせ、Web集客から売上拡大まで一貫したサポートを提供しています。",
    },
  ];

  return (
    <section className="py-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">沿革</h2>
      <div className="flex px-4 space-x-4">
        <div className="max-w-2xl mx-auto relative">
          {/* 縦のライン */}
          <div className="absolute top-2 left-1 bottom-0 w-2 bg-gray-300"></div>

          {history.map((item, index) => (
            <div key={index} className="relative pl-12 mb-8">
              {/* 丸いバレット */}
              <div className="absolute top-2 left-0 h-4 w-4 bg-[#2b3172] rounded-full -translate-y-1/2" />
              <h3 className="text-xl font-semibold">{item.year}</h3>
              <p className="mt-2 text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="flex-grow justify-center hidden sm:flex">
          <div className="w-full bg-gray-300 h-[80%] text-center">Image</div>
        </div>
      </div>
    </section>
  );
}
