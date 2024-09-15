import { useServiceList } from "@/hooks/useServiceList";

function Service({ lang }: { lang: string }) {
  const { services } = useServiceList(lang);

  return (
    <div
      id="products"
      className="flex w-full flex-col items-center bg-white p-2 py-16 text-gray-600 md:h-screen"
    >
      <h1 className="mb-4 text-3xl font-bold text-gray-900">Our Services</h1>
      <div className="mx-auto max-w-[1240px] flex justify-center items-center h-full">
        <div className="py-4 grid grid-cols-1 sm:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-4 items-center space-y-3"
              >
                <div className="size-24 rounded-full bg-gradient-to-r from-[#8B0000] via-[#FF4500] to-[#FFA07A] flex justify-center items-center">
                  <Icon className="text-gray-200 size-10" />
                </div>
                <h2 className="text-2xl font-bold text-center">{item.name}</h2>
                <p className="w-full md:w-[70%] py-2">{item.remarks}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
