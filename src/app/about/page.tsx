"use client";

import { useS3Fetch } from "@/components/useS3Fetch";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const s3About = "https://thequirkykitty.com/content/about.md";

const src = "https://thequirkykitty.com/content/photos/blue_swirl.jpeg";

export default function About() {
  const {
    content: aboutContent,
    error: aboutError,
    loading: aboutLoading,
  } = useS3Fetch(s3About);

  if (aboutLoading) return <div>Loading...</div>;
  if (aboutError) return <div>Error Loading</div>;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="tqk-card w-1/4 shrink-0">
          <CardTitle>About</CardTitle>
          <CardContent className="flex flex-row gap-4">
            {/* behavior */}
            <Image
              src={src}
              alt="Blue swirl"
              width={80}
              height={80}
              className="hidden md:block w-1/5 object-cover"
            />
            {/* <div className="markdown">
              <ReactMarkdown>{aboutContent}</ReactMarkdown>
            </div> */}
          </CardContent>
        </Card>
        <Card className="tqk-card 3/4">
          <CardTitle>About</CardTitle>
          <CardContent className="flex flex-row gap-4">
            {/* behavior */}
            <Image
              src={src}
              alt="Fear Free Certified"
              width={80}
              height={80}
              className="hidden md:block w-1/5 object-cover"
            />
            <div className="markdown">
              blah blah blah
              {/* <ReactMarkdown>{aboutContent}</ReactMarkdown> */}
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="tqk-card my-4">
        <CardContent className="relative flex flex-row justify-center  h-48">
          <div className="relative w-1/5 h-full">
            <Image
              src="/uw.png"
              alt="University of Washington"
              fill
              className="hidden md:block object-contain"
            />
          </div>
          <div className="relative w-1/5 h-[90%] self-center ">
            <Image
              src="/cpr.webp"
              alt="CPR"
              fill
              className="hidden md:block object-contain"
            />
          </div>
          <div className="relative w-1/5 h-full">
            <Image
              src="/fear_free.webp"
              alt="Fear Free Certified"
              fill
              //width={30}
              //height={30}
              className="hidden md:block object-contain"
            />
          </div>
          <div className="relative w-1/5 h-full">
            <Image
              src="/psi.png"
              alt="Pet Sitters International"
              fill
              //width={80}
              //height={80}
              className="midden md:block object-contain"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
