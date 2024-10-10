import { getTranslation } from "@/app/i18n/server";
import type { IconType } from "react-icons";
import { FaLaptopCode, FaPencilAlt } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";

export type ServiceProp = {
  name: string;
  remarks: string;
  icon: IconType;
  url: string;
};

export const getServiceList = async (lang: string) => {
  const { t } = await getTranslation(lang);

  const services = [
    {
      name: t("services:services.webDevelopment.name"),
      remarks: t("services:services.webDevelopment.remarks"),
      icon: FaPencilAlt, // Icon for Web Design
      url: "/services/web-development",
    },
    {
      name: t("services:services.conversionAnalysis.name"),
      remarks: t("services:services.conversionAnalysis.remarks"),
      icon: IoMdAnalytics, // or FiBarChart, BiLineChart, AiOutlinePieChart, MdAssessment
      url: "/services/conversion-analysis",
    },
    {
      name: t("services:services.webAppDevelopment.name"),
      remarks: t("services:services.webAppDevelopment.remarks"),
      icon: FaLaptopCode, // Icon for Web Application Development
      url: "/services/web-app-development",
    },
    {
      name: t("services:services.ma.name"),
      remarks: t("services:services.ma.remarks"),
      icon: FaLaptopCode, // Icon for Marketing Automation
      url: "/services/mail-marketing",
    },
  ];
  return {
    services,
  };
};
