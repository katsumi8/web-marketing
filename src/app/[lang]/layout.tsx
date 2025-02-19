import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type react from "react";
import { Suspense } from "react";
import { LanguageProvider } from "../i18n/client";
import { availableLanguages } from "../i18n/settings";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "katsumi ishihara consulting",
    description:
        "ドイツ、フランス、イタリア、スペインに在住の皆様、ホームページの制作・リニューアル、SEO最適化お悩みでしたら、ぜひご相談を！",
    icons: [
        {
            sizes: "any",
            url: "/favicon.ico",
        },
    ],
    openGraph: {
        title: "katsumi ishihara consulting",
        description:
            "ドイツ、フランス、イタリア、スペインに在住の皆様、ホームページの制作・リニューアル、SEO最適化お悩みでしたら、ぜひご相談を！",
        locale: "ja_JP",
        url: "https://katsumiishihara.com",
        alternateLocale: ["de_DE", "en_GB", "fr_FR", "it_IT", "es_ES"],
    },
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
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <Script
                    src="https://cdn-cookieyes.com/client_data/4cf946313672c296203e3c28/script.js"
                    strategy="beforeInteractive"
                />
                <GoogleTagManager gtmId="GTM-MNW5RZ92" />
                <GoogleAnalytics gaId="G-QLCM1CYZ17" />

                <Script id="google-ads-conversion" strategy="afterInteractive">
                    {`
          gtag('event', 'conversion', {
            'send_to': 'AW-10891910687/WFIICOny4-QZEJ-81cko',
            'value': 1.0,
            'currency': 'EUR'
          });
        `}
                </Script>
            </head>
            <body className={`${inter.className} h-full`}>
                <LanguageProvider initialLanguage={lang}>
                    <header className="sticky top-0 z-[100] h-20">
                        <Suspense fallback={<Loading />}>
                            <Navbar lang={lang} />
                        </Suspense>
                    </header>
                    <main className="flex h-full flex-col">
                        <div className="h-full">{children}</div>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </LanguageProvider>
            </body>
        </html>
    );
}

export async function generateStaticParams() {
    return availableLanguages.map((lang) => ({ lang }));
}
