import React from "react";
import { menuItems } from "../const/productsList";

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
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between py-2 border-b border-gray-400 ${
                index === 0 ? "border-t" : ""
              }`}
            >
              <span className="text-xl">{item.name}</span>
              <div className="space-x-4">
                {item.remarks && (
                  <span className="font-semibold text-red-400">
                    {item.remarks}
                  </span>
                )}
                <span className="text-xl">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 py-2 px-4 border border-black">
          Mehr sehen - Bald verfügbar -
        </button>
      </div>
    </div>
  );
}

export default Products;
