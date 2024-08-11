import React from "react";

function Products() {
  const menuItems = [
    { name: "Taiyaki mit Anko (süße rote Bohnenpaste)", price: "4,50€" },
    { name: "Taiyaki mit Vanillepudding", price: "4,50€" },
    { name: "Taiyaki mit Schokolade (Bald verfügbar)", price: "4,50€" },
    { name: "Taiyaki mit Nuttela Creme (Bald verfügbar)", price: "4,50€" },
    {
      name: "Taiyaki mit Schoko und Erdbeere (Bald verfügbar)",
      price: "4,50€",
    },
  ];
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
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between py-2 border-b border-gray-400 ${
                index === 0 ? "border-t" : ""
              }`}
            >
              <span className="text-xl">{item.name}</span>
              <span className="text-xl">{item.price}</span>
            </div>
          ))}
        </div>
        <button className="mt-8 py-2 px-4 border border-black">
          Mehr sehen
        </button>
      </div>
    </div>
  );
}

export default Products;
