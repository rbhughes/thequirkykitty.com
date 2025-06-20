"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white/50 h-auto md:h-18 p-4 md:p-0">
      <div className="flex flex-col md:grid md:grid-cols-3 md:items-center md:h-full md:pr-[10px]">
        {/* Empty div for left spacing on desktop */}
        <div className="hidden md:block"></div>

        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2 order-1">
          <button className="tqk-bigass-button whitespace-nowrap">
            <Link href="/contact">
              <span className="md:hidden">Send Inquiry</span>
              <span className="hidden md:inline">New Client? Send Inquiry</span>
            </Link>
          </button>
          <button className="tqk-bigass-button whitespace-nowrap">
            <Link href="https://www.timetopet.com/portal/thequirkykitty">
              <span className="md:hidden">Book Service</span>
              <span className="hidden md:inline">
                Existing Client? Book Service
              </span>
            </Link>
          </button>
        </div>

        <span className="text-black text-sm text-center md:text-right md:p-4 mt-4 md:mt-0 order-2">
          © {new Date().getFullYear()} The Quirky Kitty
        </span>
      </div>
    </footer>
  );
}
