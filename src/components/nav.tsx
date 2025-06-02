"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="tqk-nav-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 relative h-14 w-20">
            <Link href="/" className="relative block w-full h-full">
              <Image
                src="/black_kitty_head.png" // or "http://localhost:3000/tqk_black.png"
                alt="The Quirky Kitty"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 font-extrabold text-black">
            {/* <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link> */}
            <Link href="/about" className="hover:text-cyan-700">
              About
            </Link>
            <Link href="/services" className="hover:text-cyan-700">
              Services
            </Link>
            <Link href="/contact" className="hover:text-cyan-700">
              Contact
            </Link>
            {/* <Link href="/reviews" className="hover:text-cyan-700">
              Reviews
            </Link> */}
            <Link href="/gallery" className="hover:text-cyan-700">
              Gallery
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md bg-cyan-700 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-stone-400 text-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="tqk-burger-link">
              Home
            </Link>
            <Link href="/about" className="tqk-burger-link">
              About
            </Link>
            <Link href="/services" className="tqk-burger-link">
              Services
            </Link>
            <Link href="/contact" className="tqk-burger-link">
              Contact
            </Link>
            {/* <Link href="/reviews" className="tqk-burger-link">
              Reviews
            </Link> */}
            <Link href="/gallery" className="tqk-burger-link">
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
