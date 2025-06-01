"use client";

import Link from "next/link";

export default function ContactOrBook() {
  return (
    <div className="flex flex-col sm:flex-row justify-center font-sans gap-4">
      <button className="tqk-bigass-button">
        <Link href="/contact">New Client? Send Inquiry</Link>
      </button>
      <button className="tqk-bigass-button">
        <Link href="/contact">Existing Client? Book Service</Link>
      </button>
    </div>
  );
}
