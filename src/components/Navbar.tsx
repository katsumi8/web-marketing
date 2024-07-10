"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogoImg from "../../public/assets/next.svg";
import { usePathname, useRouter } from "next/navigation";

function MobileNavbar({
  nav,
  setNav,
  handleNav,
}: {
  nav: boolean;
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
              <Image src={NavLogoImg} alt="/" width="87" height="35" />
            </Link>
            <div
              onClick={handleNav}
              className="text-gray-700 cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] py-4 md:w-[90%] text-gray-500">
              {"Entdecken Sie Taiyaki bei uns!"}
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <ul className="uppercase text-gray-500">
            <Link href="/">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                About
              </li>
            </Link>
            <Link href="/#products">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Products
              </li>
            </Link>
            <Link href="/#contact">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Contact
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
  const router = useRouter();
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
          ? "sticky top-0 z-[100] h-20 w-full shadow-xl bg-white"
          : "sticky top-0 z-[100] h-20 w-full bg-white"
      }
    >
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <Link href={"/"}>
          <Image src={NavLogoImg} alt="/" width="125" height="50" />
        </Link>

        {pathName !== "/privacy-policy" && (
          <div>
            <ul style={{ color: `#1f2937` }} className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#products">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Products
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden text-gray-700">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        )}
      </div>
      {nav && <MobileNavbar nav={nav} setNav={setNav} handleNav={handleNav} />}
    </header>
  );
}

export default Navbar;
