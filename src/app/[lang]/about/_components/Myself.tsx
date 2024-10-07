"use client";

import { Trans, useTranslation } from "react-i18next";

export default function Myself({ lang }: { lang: string }) {
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
