import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import NavLogoImg from "../../../public/assets/navLogo.webp";
import NavItem from "./Item";
import { navItems } from "./const";

export default function MobileNavbar({
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
          </ul>
        </div>
      </div>
    </div>
  );
}
