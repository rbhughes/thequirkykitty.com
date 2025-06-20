"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";

// <div className="flex-shrink-0 relative h-80 md:w-600 sm:w-120">
export default function Home() {
  return (
    <div className="rounded flex flex-col flex-grow items-center justify-center p-2 md:p-4">
      <div className="flex-shrink-0 relative md:h-40 sm:h-40 md:w-[600px] sm:w-[100px] flex items-center justify-center">
        <Image
          src="/black_kitty_head.png"
          alt="The Quirky Kitty"
          height={440}
          width={966}
          className="block md:hidden"
        />
        <Image
          src="/tqk_black.png"
          alt="The Quirky Kitty"
          height={240}
          width={580}
          className="hidden md:block object-contain"
        />
      </div>

      <div className="w-full md:w-10/12">
        <div className="text-2xl md:text-4xl font-semibold text-center font-serif italic px-2 my-10">
          &quot;There are no ordinary cats.&quot; –Colette
        </div>

        <div className="flex flex-col gap-5  md:my-20">
          <div className="flex flex-col md:flex-row gap-5">
            <Card className="tqk-card  md:block md:w-1/3 shrink-0">
              <div className="relative w-full h-120">
                <Image
                  src="/heidi_ziggy.jpg"
                  alt="Heidi & Ziggy"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </Card>

            <Card className="tqk-card w-full md:w-2/3">
              <CardTitle className="tqk-card-title">
                Your Cat Deserves a Pro
              </CardTitle>
              <div className="text-lg md:text-2xl tracking-wide mt-10">
                Welcome! I&apos;m{" "}
                <Link href="/about" className="text-cyan-700">
                  Heidi
                </Link>
                , a{" "}
                <Link
                  href="https://faculty.washington.edu/jcha/uwaab.html"
                  className="text-cyan-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Washington-certified
                </Link>{" "}
                animal behaviorist specializing in cats. I provide top-notch{" "}
                <Link href="/services" className="text-cyan-700">
                  services
                </Link>{" "}
                to discerning cat guardians in Chicago&apos;s <b>Gold Coast</b>,{" "}
                <b>River North</b>, <b>Old Town</b>, and <b>Streeterville</b>{" "}
                neighborhoods.{" "}
              </div>
              <div className="text-lg md:text-2xl tracking-wide mt-4">
                Cats don&apos;t bestow their trust on just anyone. You have to
                earn it. I&apos;m on a mission to do that with every cat I serve
                (and every cat&apos;s human, too!).
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
