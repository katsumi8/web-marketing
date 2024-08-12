import { menuItems } from "../const/productsList";

function Products() {
  return (
    <div
      id="products"
      className="flex w-full flex-col items-center justify-center bg-white p-2 py-16 text-gray-600 md:h-screen"
    >
      <div className="mx-auto max-w-[1240px]">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Unsere Produkte
        </h1>
        <p className="mb-2 text-lg">Probieren Sie alles aus</p>
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
              className={`flex justify-between border-b border-gray-400 py-2 ${
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
        <button className="mt-8 border border-black px-4 py-2">
          Mehr sehen - Bald verfügbar -
        </button>
      </div>
    </div>
  );
}

export default Products;
