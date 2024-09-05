"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLogoImg from "../../public/assets/navLogo.png";

function MobileNavbar({
  setNav,
  handleNav,
}: {
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
  handleNav: () => void;
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
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] py-4 text-gray-500 md:w-[90%]">
              {"Entdecken Sie Taiyaki bei uns!"}
            </p>
          </div>
        </div>
        <div className="flex flex-col px-4 py-4">
          <ul className="uppercase text-gray-500">
            <Link href="/">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Über Uns
              </li>
            </Link>
            <Link href="/#products">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Produkte
              </li>
            </Link>
            <Link href="/#contact">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Bestellen
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const pathName = usePathname();

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

        {pathName !== "/privacy-policy" && (
          <div className="px-4">
            <ul style={{ color: `#1f2937` }} className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Über Uns
                </li>
              </Link>
              <Link href="/#products">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Produkte
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Bestellen
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="text-gray-700 md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        )}
      </div>
      {nav && <MobileNavbar setNav={setNav} handleNav={handleNav} />}
    </header>
  );
}

export default Navbar;
