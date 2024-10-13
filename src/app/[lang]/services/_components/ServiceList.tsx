import Link from "next/link";
import { getServiceList } from "../_utils/getServiceList";

export default async function ServiceList({ lang }: { lang: string }) {
  const { services } = await getServiceList(lang);

  return (
    <div
      id="services-summary"
      className="flex w-full flex-col items-center bg-white p-2 py-16 text-gray-600 md:h-screen"
    >
      <h1 className="mb-4 text-3xl font-bold text-gray-900">Our Services</h1>
      <ul className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <Link
                className="flex flex-col size-80 p-4 items-center space-y-3 border border-gray-200 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl cursor-pointer"
                href={item.url}
              >
                <div className="size-24 rounded-full bg-gradient-to-r from-[#8B0000] via-[#FF4500] to-[#FFA07A] flex justify-center items-center">
                  <Icon className="text-gray-200 size-10" />
                </div>
                <h2 className="text-2xl font-bold text-center">{item.name}</h2>
                <p className="w-full py-2">{item.remarks}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
