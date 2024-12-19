import Image from "next/image";
import MyselfImg from "../../../../../public/assets/myPhoto.webp";
import Myself from "./Myself";

export default function MyJourney() {
  return (
    <div
      id="about"
      className="flex w-full items-center p-2 py-16 md:h-screen flex-col"
    >
      <h1 className="text-3xl font-bold text-gray-900">About Me</h1>

      <div className="py-4 max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <Myself />
        </div>
        <div className="m-auto flex h-auto w-full flex-col items-center justify-center space-y-16 rounded-xl p-4 py-8 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
          <Image src={MyselfImg} className="rounded-xl" alt="Taiyaki" />
        </div>
      </div>
    </div>
  );
}
