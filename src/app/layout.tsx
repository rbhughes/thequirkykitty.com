import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";

import { unstable_ViewTransition as ViewTransition } from "react";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <ViewTransition>
      <html lang="en" className="h-full">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-100`}
        >
          <Navbar />

          <main className="flex-grow w-[95vw] mx-auto bg-white">
            {children}
            <Toaster duration={10000} />
          </main>
          <Footer />
        </body>
      </html>
    </ViewTransition>
  );
}
