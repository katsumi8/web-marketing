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
  const webDevSummary = t("services.webDevelopment.summary", {
    returnObjects: true,
    ns: "services",
  });
  const conversionAnalysisSummary = t("services.conversionAnalysis.summary", {
    returnObjects: true,
    ns: "services",
  });
  const webAppDevSummary = t("services.webAppDevelopment.summary", {
    returnObjects: true,
    ns: "services",
  });
  const mailMarketingSummary = t("services.mailMarketing.summary", {
    returnObjects: true,
    ns: "services",
  });

  const services = [
    {
      name: webDevSummary.name,
      remarks: webDevSummary.remarks,
      icon: FaPencilAlt, // Icon for Web Design
      url: "/services/web-development",
    },
    {
      name: conversionAnalysisSummary.name,
      remarks: conversionAnalysisSummary.remarks,
      icon: IoMdAnalytics, // or FiBarChart, BiLineChart, AiOutlinePieChart, MdAssessment
      url: "/services/conversion-analysis",
    },
    {
      name: webAppDevSummary.name,
      remarks: webAppDevSummary.remarks,
      icon: FaLaptopCode, // Icon for Web Application Development
      url: "/services/web-app-development",
    },
    {
      name: mailMarketingSummary.name,
      remarks: mailMarketingSummary.remarks,
      icon: FaLaptopCode, // Icon for Marketing Automation
      url: "/services/mail-marketing",
    },
  ];
  return {
    services,
  };
};
