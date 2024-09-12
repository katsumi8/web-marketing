import type { IconType } from "react-icons";
import { FaLaptopCode, FaPencilAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

type Service = {
  name: string;
  remarks: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    name: "SNSマーケティング",
    remarks:
      "InstagramやFacebookのアカウント設定、コンテンツ制作、広告運用、効果分析までをサポートします。",
    icon: IoLogoInstagram, // Icon for SNS Marketing
  },
  {
    name: "Webサイト制作",
    remarks: "ホームページの開発、運用、改善を包括的に行います。",
    icon: FaPencilAlt, // Icon for Web Design
  },
  {
    name: "Webアプリケーション開発",
    remarks:
      "勤怠管理システム、在庫管理システム、顧客管理システムなどの社内Webアプリを開発します。",
    icon: FaLaptopCode, // Icon for Web Application Development
  },
  {
    name: "MA",
    remarks:
      "月一の顧客リストへの一斉メール配信など既存顧客のフォローアップやアップセルの最大化を行います。",
    icon: FaLaptopCode, // Icon for Web Application Development
  },
];
