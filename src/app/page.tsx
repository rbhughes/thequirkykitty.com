"use client";

import Image from "next/image";
import Link from "next/link";
import ContactOrBook from "@/components/contact-or-book";

export default function Home() {
  return (
    <div className=" rounded flex flex-col flex-grow items-center justify-center p-4">
      <Image
        src="/tqk_black.png"
        alt="The Quirky Kitty"
        width={600}
        height={200}
        priority
      />
      <div className="rounded p-4  w-3/4 ">
        <div className=" text-4xl font-semibold text-center font-serif italic">
          &quot;There are no ordinary cats.&quot; –Colette
        </div>

        <div className="flex flex-col mt-10 md:flex-row gap-4 p-4">
          {/* Left Column */}
          <div className="flex justify-center p-6 rounded-lg">
            <Image
              src="/heidi_ziggy.jpg"
              alt="Heidi & Ziggy"
              width={350}
              height={180}
              priority
              className="rounded-lg shadow-xl max0-w-sm h-auto object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="mt-10 text-4xl font-semibold font-sans">
              Your Cat Deserves a Pro
            </div>
            <div className="scroll-m-20 mt-10 text-3xl font-serif tracking-wide">
              Welcome! I’m{" "}
              <Link href="/about" className="text-cyan-700">
                Heidi
              </Link>
              , a certified animal behaviorist specializing in cats. I provide
              top-notch{" "}
              <Link href="/services" className="text-cyan-700">
                services
              </Link>{" "}
              to discerning cat guardians in Chicago’s <b>Gold Coast</b>,{" "}
              <b>River North</b>, <b>Old Town</b>, and <b>Streeterville</b>{" "}
              neighborhoods.{" "}
            </div>
            <div className="scroll-m-20 mt-10 text-3xl font-serif">
              Cats don’t bestow their trust on just anyone. You have to earn it.
              I’m on a mission to do that with every cat I serve (and every
              cat’s human, too!).
            </div>
          </div>
        </div>

        <div className="my-10">
          <ContactOrBook />
        </div>
      </div>
    </div>
  );
}
