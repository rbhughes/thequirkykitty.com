"use client";
import ContactForm from "./contact-form";
import Link from "next/link";

export default function Contact() {
  return (
    <div className=" rounded flex flex-col flex-grow items-center justify-center p-4">
      <button className="tqk-bigass-button">
        <Link href="/contact">Existing Client? Book Service</Link>
      </button>
      <div className="w-7/12">
        <ContactForm />
      </div>
    </div>
  );
}
