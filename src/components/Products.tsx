import React from "react";

function Products() {
  return (
    <div
      id="products"
      className="w-full p-2 py-16 bg-white text-gray-600 md:h-screen items-center justify-center flex flex-col"
    >
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Unsere Produkte
        </h1>
        <p className="text-lg mb-2">Probieren Sie alles aus</p>
        <p className="mb-8">
          Wir erhalten oft Anfragen zu unseren Produkten. Hier ist eine Liste
          der Produkte, die wir anbieten. Wenn Sie etwas wünschen, das nicht auf
          der Speisekarte steht, nehmen wir gerne Sonderbestellungen entgegen.
          Bitte kontaktieren Sie uns.
        </p>
        <div className="py-4">
          <div className="flex justify-between py-2 border-b border-t border-gray-400">
            <span className="text-xl">
              Taiyaki mit Anko (süße rote Bohnenpaste)
            </span>
            <span className="text-xl">7,00€</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-400">
            <span className="text-xl">Taiyaki mit Vanillepudding</span>
            <span className="text-xl">6,50€</span>
          </div>
        </div>
        <button className="mt-8 py-2 px-4 border border-black">
          Mehr sehen
        </button>
      </div>
    </div>
  );
}

export default Products;
