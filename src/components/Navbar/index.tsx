"use client";

import LanguageSwitcher from "@/app/[lang]/_components/language-switcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { navItems, navItemsForLp } from "./const";
import NavItem from "./Item";
import MobileNavbar from "./MobileNavbar";

export default function Navbar({ lang }: { lang: string }) {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const entryPoint = searchParams.get("origin");
  const pathName = usePathname();
  const isPathIncludeLp = pathName.includes("lp");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      // Throttled shadow state update
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleShadow);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);
  const homeLink = isPathIncludeLp ? "/lp/seo" : "/";

  return (
    <div className={shadow ? "w-full bg-white shadow-xl" : "w-full bg-white"}>
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <Link href={homeLink}>
          <Image
            className="size-20"
            width={100}
            height={100}
            src="/assets/companyLogo.webp"
            alt="katsumi ishihara consulting logo"
          />
        </Link>

        {entryPoint !== "meta" && (
          <div className="px-4">
            <ul
              style={{ color: `#1f2937` }}
              className="hidden md:flex justify-between space-x-5 items-center"
            >
              {isPathIncludeLp
                ? navItemsForLp.map((item, index) => (
                    <NavItem
                      key={index}
                      href={item.href}
                      text={item.text}
                      isMobile={false}
                    />
                  ))
                : navItems.map((item, index) => (
                    <NavItem
                      key={index}
                      href={item.href}
                      text={item.text}
                      isMobile={false}
                    />
                  ))}
              <div className="ml-10 hover:border-b text-sm">
                <LanguageSwitcher currentLanguage={lang} />
              </div>
            </ul>

            <div className="md:hidden flex items-center space-x-4">
              <div className="text-sm text-gray-500 md:hidden">
                <LanguageSwitcher currentLanguage={lang} />
              </div>
              <div onClick={handleNav} className="text-gray-700 md:hidden">
                <AiOutlineMenu size={25} />
              </div>
            </div>
          </div>
        )}
      </div>
      {nav && <MobileNavbar setNav={setNav} handleNav={handleNav} />}
    </div>
  );
}
