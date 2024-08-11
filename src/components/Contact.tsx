import React from "react";
import Image from "next/image";
import ContactImg from "../../public/assets/contact.jpg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import IconItems from "./ConnectWithMe/IconItems";
import OrderingForm from "./OrderingForm";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-full text-gray-600">
      <div className="m-auto w-full max-w-[1240px] px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-[#990000]">
          Bestellen Sie jetzt
        </p>
        <h2 className="py-4">Kontakt aufnehmen</h2>
        <div className="grid gap-8 lg:grid-cols-5">
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
                  Kontaktieren Sie mich für Anfragen oder einfach, um Hallo zu
                  sagen.
                  <br />
                  Ich werde mich so schnell wie möglich bei Ihnen melden.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Verbinden Sie sich mit mir</p>
                <IconItems style={"CONTACT"} />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <OrderingForm />
            </div>
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
