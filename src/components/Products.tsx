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
            <div className="flex flex-col border-gray-400 border-b py-2">
              <div
                key={index}
                className={`flex w-full justify-between items-center`}
              >
                <div className="flex flex-col">
                  <span className="sm:text-xl">{item.name}</span>
                  {item.remarks && (
                    <span className="font-semibold text-red-400 text-sm">
                      {item.remarks}
                    </span>
                  )}
                </div>
                <span className="sm:text-xl sm:px-4">{item.price}</span>
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
