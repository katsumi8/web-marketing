import { useTranslation } from "@/app/i18n/client";
import type { IconType } from "react-icons";
import { FaLaptopCode, FaPencilAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export type ServiceProp = {
  name: string;
  remarks: string;
  icon: IconType;
};

export const useServiceList = (lang: string) => {
  const { t } = useTranslation(lang);

  const services = [
    {
      name: t("services:services.snsMarketing.name"),
      remarks: t("services:services.snsMarketing.remarks"),
      icon: IoLogoInstagram, // Icon for SNS Marketing
    },
    {
      name: t("services:services.webDevelopment.name"),
      remarks: t("services:services.webDevelopment.remarks"),
      icon: FaPencilAlt, // Icon for Web Design
    },
    {
      name: t("services:services.webAppDevelopment.name"),
      remarks: t("services:services.webAppDevelopment.remarks"),
      icon: FaLaptopCode, // Icon for Web Application Development
    },
    {
      name: t("services:services.ma.name"),
      remarks: t("services:services.ma.remarks"),
      icon: FaLaptopCode, // Icon for Marketing Automation
    },
  ];
  return {
    services,
  };
};
