import Service from "@/app/[lang]/services/_components/ServiceList";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import BgImg from "../../../../public/assets/digitalBackground.jpg";
import ContactAndProfile from "../contact/_components/ContactAndProfile";
import Concerns from "./Concerns";

export default function HomeComponent({
    title,
    description,
    imageAlt,
    contactButtonText,
    lang,
}: {
    title: string;
    description: string;
    imageAlt: string;
    contactButtonText: string;
    lang: string;
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
            <div className="relative h-screen w-full">
                <Image
                    src={BgImg}
                    alt={imageAlt}
                    fill
                    className="absolute inset-0 z-0 object-cover object-left"
                    priority
                />
                <div className="bg-opacity-50 absolute inset-0 flex flex-col items-center justify-center bg-black p-4 sm:items-start sm:justify-start sm:space-y-20 md:p-20">
                    <h1 className="mt-10 text-3xl font-bold text-white md:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-10 text-base text-white md:text-xl">
                        {description}
                    </p>
                    <div className="mt-8 flex w-[70%] justify-center sm:w-full">
                        <Link
                            href="/#contact"
                            className="bg-opacity-50 hover:bg-opacity-70 rounded-lg bg-gray-300 px-10 py-4 font-bold text-white backdrop-blur-lg backdrop-filter sm:px-32 sm:text-3xl"
                        >
                            {contactButtonText}
                        </Link>
                    </div>
                </div>
            </div>
            <Concerns lang={lang} />
            <Service lang={lang} />
            <ContactAndProfile lang={lang} />
            <div className="flex justify-center py-8">
                <Link href={"/"} aria-label="go top">
                    <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                        <HiOutlineChevronDoubleUp
                            className="text-[#990000]"
                            size={30}
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}
