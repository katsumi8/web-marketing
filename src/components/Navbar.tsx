"use client";
import LanguageSwitcher from "@/app/[lang]/_components/language-switcher";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLogoImg from "../../public/assets/navLogo.png";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/#about", text: "About Me" },
  { href: "/#products", text: "Services" },
  { href: "/#contact", text: "Contact" },
];

interface NavItemProps {
  href: string;
  text: string;
  isMobile: boolean;
  onClick?: () => void;
}

const NavItem = ({ href, text, isMobile = false, onClick }: NavItemProps) => {
  return (
    <Link href={href}>
      <li
        onClick={onClick}
        className={`text-sm ${isMobile ? "py-4" : "uppercase hover:border-b"}`}
      >
        {text}
      </li>
    </Link>
  );
};

function MobileNavbar({
  setNav,
  handleNav,
  lang,
}: {
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
  handleNav: () => void;
  lang: string;
}) {
  return (
    <div
      className={"sticky left-0 top-0 h-screen w-full bg-black/70 md:hidden"}
    >
      <div
        className={
          "sticky left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link href={"/"}>
              <Image className="size-20" src={NavLogoImg} alt="/" />
            </Link>
            <div
              onClick={handleNav}
              className="cursor-pointer rounded-full p-3 text-gray-700 shadow-lg shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 py-4">
          <ul className="uppercase text-gray-500 flex flex-col">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                text={item.text}
                isMobile={true}
                onClick={() => setNav(false)}
              />
            ))}
            <div className="text-sm text-gray-500">
              <LanguageSwitcher currentLanguage={lang} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Navbar({ lang }: { lang: string }) {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const entryPoint = searchParams.get("origin");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={
        shadow
          ? "sticky top-0 z-[100] h-20 w-full bg-white shadow-xl"
          : "sticky top-0 z-[100] h-20 w-full bg-white"
      }
    >
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <Link href={"/"}>
          <Image className="size-20" src={NavLogoImg} alt="/" />
        </Link>

        {entryPoint !== "meta" && (
          <div className="px-4">
            <ul
              style={{ color: `#1f2937` }}
              className="hidden md:flex justify-between space-x-5 items-center"
            >
              {navItems.map((item, index) => (
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
            <div onClick={handleNav} className="text-gray-700 md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        )}
      </div>
      {nav && (
        <MobileNavbar setNav={setNav} handleNav={handleNav} lang={lang} />
      )}
    </header>
  );
}

export default Navbar;
