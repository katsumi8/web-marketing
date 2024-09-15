"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Service from "@/components/Service";
import Image from "next/image";
import Link from "next/link";
import { Trans } from "react-i18next";
import BgImg from "../../../../public/assets/digitalBackground.jpg";

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
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black 
          bg-opacity-50 p-4 sm:items-start sm:justify-start md:p-20 sm:space-y-20"
        >
          <h1 className="mt-10 text-3xl font-bold text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-10 text-base text-white md:text-xl">
            <Trans
              defaults={description}
              components={{
                bold: <span className="font-bold text-white" />,
                highlight: <span className="text-white font-semibold" />,
              }}
            />
          </p>
          <div className="mt-8 flex w-[70%] justify-center sm:w-full">
            <Link
              href="/#contact"
              className="rounded-lg bg-gray-300 bg-opacity-50 px-10 py-4 sm:text-3xl font-bold text-white backdrop-blur-lg backdrop-filter hover:bg-opacity-70 sm:px-32"
            >
              {contactButtonText}
            </Link>
          </div>
        </div>
      </div>
      <Service lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer />
    </div>
  );
}
