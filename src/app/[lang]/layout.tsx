import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type react from "react";
import { Suspense } from "react";
import { LanguageProvider } from "../i18n/client";
import { availableLanguages } from "../i18n/settings";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "katsumi ishihara consulting",
  description:
    "ドイツ、フランス、イタリア、スペインに在住の皆様、ホームページの制作・リニューアル、SEO最適化お悩みでしたら、ぜひご相談を！",
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

export default function rootlayout({
  children,
  params: { lang },
}: Readonly<{
  children: react.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={`${inter.className} h-full`}>
        <LanguageProvider initialLanguage={lang}>
          <header className="sticky top-0 h-20 z-50">
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar lang={lang} />
            </Suspense>
          </header>
          <main className="flex flex-col h-full">
            <div className="h-full">{children}</div>
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return availableLanguages;
}
