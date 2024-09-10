import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Katsumi Ishihara Consulting",
  description: "Katsumi Ishihara Consulting",
  icons: {
    icon: "/favicon.ico",
  },
};
const Navbar = React.lazy(() => import("@/components/Navbar"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-full">
          <Navbar />
          <div className="h-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
