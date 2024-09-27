import "@/app/globals.css";
import Loadingspinner from "@/components/LoadingSpinner";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import react, { Suspense } from "react";
import { LanguageProvider } from "../i18n/client";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "katsumi ishihara consulting",
  description:
    "Boost your business success with our comprehensive strategies and technical solutions. We offer a wide range of services including website creation and SEO, SNS marketing on platforms like Instagram and Facebook, web application development for internal systems, and marketing automation to maximize customer engagement and upselling opportunities.",
  icons: {
    icon: "/favicon.ico",
  },
  // opengraph: {
  //   title: "katsumi ishihara consulting",
  //   description: "ビジネス成功へのパートナー",
  //   // todo: change this to the actual url
  //   url: "https://katsumiishihara.com",
  //   images: [
  //     {
  //       // todo: change this to the actual image
  //       url: "/og-image.jpg",
  //       width: 800,
  //       height: 600,
  //       alt: "katsumi ishihara consulting",
  //     },
  //   ],
  // },
};

const Navbar = react.lazy(() => import("@/components/Navbar"));

export default function rootlayout({
  children,
  params: { lang },
}: Readonly<{
  children: react.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={inter.className}>
        <LanguageProvider initialLanguage={lang}>
          <main className="flex flex-col h-full">
            <Suspense fallback={<Loadingspinner />}>
              <Navbar lang={lang} />
            </Suspense>
            <div className="h-full">{children}</div>
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
