"use client";
import { useTranslation } from "@/app/i18n/client";
import { useEffect, useState } from "react";

export default function FloatingButton({ lang }: { lang: string }) {
    const { t } = useTranslation(lang);

    const [isFloatingBtnVisible, setIsFloatingBtnVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledHeight = window.scrollY + window.innerHeight;
            const totalHeight = document.body.scrollHeight;

            // ページの一番下に到達したら非表示
            if (scrolledHeight >= totalHeight) {
                setIsFloatingBtnVisible(false);
            } else {
                setIsFloatingBtnVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isFloatingBtnVisible) {
        return null; // Hide button
    }

    return (
        <div className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-center bg-white/80">
            <a
                href="#contact"
                className="flex scale-105 flex-col items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-xl font-semibold text-white transition duration-300 ease-in-out hover:scale-100 hover:from-indigo-700 hover:to-purple-700 active:scale-95"
            >
                {t("floatingButton.text", { ns: "lp" })}
            </a>
        </div>
    );
}
