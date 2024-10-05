import "@/app/globals.css";
import Loadingspinner from "@/components/LoadingSpinner";
import { dir } from "i18next";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
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

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

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

export async function generateStaticParams() {
  return availableLanguages;
}
