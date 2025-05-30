import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";

import { unstable_ViewTransition as ViewTransition } from "react";
import { Footer } from "@/components/footer";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Quirky Kitty",
  description: "kitties kitties kitties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${notoSerif.variable} ${notoSans.variable}`}
    >
      <body className={`flex flex-col min-h-full bg-tqk-beige antialiased`}>
        <ViewTransition>
          <Navbar />

          <main className="flex flex-col h-full flex-grow w-[94vw] mx-auto bg-quirky-beige p-4">
            {children}
            <Toaster duration={10000} />
          </main>
          <Footer />
        </ViewTransition>
      </body>
    </html>
  );
}
