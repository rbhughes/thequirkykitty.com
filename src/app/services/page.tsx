"use client";

import { useS3Fetch } from "@/components/useS3Fetch";
import ReactMarkdown from "react-markdown";

import Image from "next/image";
const src = "https://thequirkykitty.com/content/blue_swirl.jpeg";

const sittingMd = "https://thequirkykitty.com/content/test.md";

export default function Services() {
  const { content, error, loading } = useS3Fetch(sittingMd);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading markdown</div>;

  return (
    <div>
      <div className="w-full font-serif text-3xl bg-gray-100 p-4 mb-4">
        Service summary with two buttons
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex gap-3 bg-green-100">
          {/* cat-sitting */}
          <Image
            src={src}
            alt="Blue swirl"
            width={80}
            height={80}
            className="hidden md:block w-1/5 object-cover"
          />
          <div className="flex-1">
            <div className="markdown">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="flex-1 flex gap-3 bg-red-100">
          {/* behavior */}
          <Image
            src={src}
            alt="Blue swirl"
            width={80}
            height={80}
            className="hidden md:block w-1/5 object-cover"
          />
          <div className="flex-1">
            <h2>Right Column</h2>
            <p>This is the right column content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
