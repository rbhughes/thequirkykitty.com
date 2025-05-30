"use client";

export default function About() {
  return (
    <div className=" rounded flex  flex-grow items-center justify-center p-4 bg-stone-100">
      {/* Left Column */}
      <div className="flex-1 bg-blue-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Left Column</h2>
        <p>
          This is the left column content. It will stack vertically on mobile
          and display side-by-side on medium screens and larger.
        </p>
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
