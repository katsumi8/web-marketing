import { getTranslation } from "@/app/i18n/server";
import Image from "next/image";
import ContactImg from "../../../../../public/assets/contact.jpg";
import IconItems from "../../../../components/ConnectWithMe/IconItems";
import ContactForm from "./ContactForm";

export default async function ContactAndProfile({ lang }: { lang: string }) {
  const { t } = await getTranslation(lang);
  const title = t("contact_title", { ns: "contactPage" });
  const myName = t("my_name", { ns: "contactPage" });
  const description = t("description", { ns: "contactPage" });
  return (
    <div
      id="contact"
      className="w-full text-gray-600 md:h-screen flex-col items-center flex py-16"
    >
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <div className="w-full max-w-[1240px] px-2 py-16">
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
                <h2 className="py-2">{myName}</h2>
                <p className="py-4">{description}</p>
              </div>
              <div>
                <IconItems style={"CONTACT"} />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <ContactForm lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
