import Link from "next/link";
import { getServiceList } from "../_utils/getServiceList";

export default async function ServiceList({ lang }: { lang: string }) {
    const { services } = await getServiceList(lang);

    return (
        <div
            id="services-summary"
            className="flex w-full flex-col items-center bg-white p-2 py-16 text-gray-600 md:h-screen"
        >
            <h1 className="mb-4 text-3xl font-bold text-gray-900">
                Our Services
            </h1>
            <ul className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-3">
                {services.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <li key={index}>
                            <Link
                                className="flex size-80 transform cursor-pointer flex-col items-center space-y-3 rounded-lg border border-gray-200 p-4 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                                href={item.url}
                            >
                                <div className="flex size-24 items-center justify-center rounded-full bg-gradient-to-r from-[#8B0000] via-[#FF4500] to-[#FFA07A]">
                                    <Icon className="size-10 text-gray-200" />
                                </div>
                                <h2 className="text-center text-2xl font-bold">
                                    {item.name}
                                </h2>
                                <p className="w-full py-2">{item.remarks}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
