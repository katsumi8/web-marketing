import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../../public/assets/contact.jpg";
import IconItems from "./ConnectWithMe/IconItems";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full text-gray-600 lg:h-full flex-col items-center flex"
    >
      <h1 className="mb-4 text-3xl font-bold text-gray-900">お問い合わせ</h1>
      <div className="m-auto w-full max-w-[1240px] px-2 py-16">
        <div className="flex flex-col-reverse gap-8 sm:grid lg:grid-cols-5 lg:flex-row">
          {/* left side */}
          <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Katsumi Ishihara</h2>
                <p className="py-4">
                  ご質問やご挨拶など、ぜひお気軽にご連絡ください。
                  <br />
                  できるだけ早くお返事いたします。
                  <br />
                  GitHubやLinkedInでつながりたい方もお待ちしています。
                </p>
              </div>
              <div>
                <IconItems style={"CONTACT"} />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">{/* <OrderingForm /> */}</div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href={"/"}>
            <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-[#990000]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
