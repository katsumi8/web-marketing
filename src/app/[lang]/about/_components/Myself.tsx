"use client";
import { Trans, useTranslation } from "react-i18next";

export default function Myself() {
  const { t } = useTranslation("about", { useSuspense: false });

  return (
    <section>
      <div className="m-auto max-w-[1240px]">
        <p className="py-2 text-gray-600">
          <Trans i18nKey="title" components={{ bold: <strong /> }} />
        </p>
        <div className="py-2">
          <h3 className="text-xl font-semibold">{t("accenture_title")}</h3>
          <p className="text-gray-600">
            <Trans
              i18nKey="accenture"
              ns="about"
              components={{ bold: <strong /> }}
            />
          </p>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold">{t("iij_title")}</h3>
          <p className="text-gray-600">
            <Trans i18nKey="iij" ns="about" components={{ bold: <strong /> }} />
          </p>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold">{t("kuchenmeister_title")}</h3>
          <p className="text-gray-600">
            <Trans
              i18nKey="kuchenmeister"
              ns="about"
              components={{ bold: <strong /> }}
            />
          </p>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold">{t("venture_title")}</h3>
          <p className="text-gray-600">
            <Trans
              i18nKey="venture"
              ns="about"
              components={{ bold: <strong /> }}
            />
          </p>
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold">{t("support_title")}</h3>
          <p className="py-2 text-gray-600">
            <Trans
              i18nKey="support"
              ns="about"
              components={{ bold: <strong /> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
