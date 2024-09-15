import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import { Trans } from "react-i18next";
import MyselfImg from "../../public/assets/myPhoto.jpeg";

function Myself({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);

  return (
    <section>
      <div className="m-auto max-w-[1240px]">
        <p className="py-2 text-gray-600">
          <Trans i18nKey="about:intro" components={{ bold: <strong /> }} />
        </p>
        <div className="py-2">
          <h3 className="text-xl font-semibold">
            {t("about:accenture_title")}
          </h3>
          <p className="text-gray-600">
            <Trans
              i18nKey="about:accenture"
              components={{ bold: <strong /> }}
            />
          </p>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold">{t("about:iij_title")}</h3>
          <p className="text-gray-600">
            <Trans i18nKey="about:iij" components={{ bold: <strong /> }} />
          </p>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold">
            {t("about:kuchenmeister_title")}
          </h3>
          <p className="text-gray-600">
            <Trans
              i18nKey="about:kuchenmeister"
              components={{ bold: <strong /> }}
            />
          </p>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold">{t("about:venture_title")}</h3>
          <p className="text-gray-600">
            <Trans i18nKey="about:venture" components={{ bold: <strong /> }} />
          </p>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold">{t("about:support_title")}</h3>
          <p className="py-2 text-gray-600">
            <Trans i18nKey="about:support" components={{ bold: <strong /> }} />
          </p>
        </div>
      </div>
    </section>
  );
}

function About({ lang }: { lang: string }) {
  return (
    <div
      id="about"
      className="flex w-full items-center p-2 py-16 md:h-screen flex-col"
    >
      <h1 className="text-3xl font-bold text-gray-900">About Me</h1>

      <div className="py-4 max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <Myself lang={lang} />
        </div>
        <div className="m-auto flex h-auto w-full flex-col items-center justify-center space-y-16 rounded-xl p-4 py-8 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
          <Image src={MyselfImg} className="rounded-xl" alt="Taiyaki" />
        </div>
      </div>
    </div>
  );
}
export default About;
