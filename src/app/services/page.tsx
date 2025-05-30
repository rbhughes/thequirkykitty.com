"use client";
import Image from "next/image";

const src = "https://thequirkykitty.com/content/blue_swirl.jpeg";

export default function Services() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left Column */}
      <div className="flex-1 bg-blue-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Left Column</h2>
        <p>
          This is the left column content. It will stack vertically on mobile
          and display side-by-side on medium screens and larger.
        </p>

        <Image src={src} alt="The Quirky Kitty" width={140} height={100} />
      </div>

      {/* Right Column */}
      <div className="flex-1 bg-green-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Right Column</h2>
        <p>
          This is the right column content. Both columns will have equal width
          due to flex-1 class.
        </p>
      </div>
    </div>
  );
}
