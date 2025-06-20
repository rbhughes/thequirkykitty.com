"use client";

import { useS3Fetch } from "@/components/useS3Fetch";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const s3About = "https://thequirkykitty.com/content/about.md";

// const src = "https://thequirkykitty.com/content/photos/heidi_ziggy_vert.jpg";

export default function About() {
  const {
    content: aboutContent,
    error: aboutError,
    loading: aboutLoading,
  } = useS3Fetch(s3About);

  if (aboutLoading) {
    return <div>Loading...</div>;
  }
  if (aboutError) {
    return <div>Error Loading</div>;
  }

  //<div className="relative w-full h-full md:h-full md:aspect-auto">

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5">
        <Card className="tqk-card w-full md:w-1/4 md:shrink-0 order-1 md:order-1">
          <div className="relative w-60 max-w-[350px] aspect-[3/4] md:w-full mx-auto">
            <Image
              src="/heidi_ziggy_vert.jpg"
              alt="Heidi and Ziggy"
              //width={630}
              //height={1280}
              fill
              className="rounded-lg shadow-xl object-contain"
            />
          </div>
        </Card>

        <Card className="tqk-card w-full md:w-3/4 order-2 md:order-2">
          <CardTitle className="tqk-card-title">
            Passion + Professionalism
          </CardTitle>
          <div className="markdown">
            <ReactMarkdown>{aboutContent}</ReactMarkdown>
          </div>
        </Card>
      </div>

      <Card className="tqk-card my-5 w-full">
        <CardContent className="relative flex flex-col md:flex-row justify-center gap-10 sm:gap-4 p-4 md:h-48">
          <div className="relative w-full md:w-1/5 h-24 md:h-full">
            <Image
              src="/uwaab.png"
              alt="University of Washington"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-full md:w-1/5 h-24 md:h-full">
            <Image
              src="/pro_pet_hero.png"
              alt="CPR"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-full md:w-1/5 h-24 md:h-full">
            <Image
              src="/fear_free.webp"
              alt="Fear Free Certified"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-full md:w-1/5 h-24 md:h-full">
            <Image
              src="/psi.png"
              alt="Pet Sitters International"
              fill
              className="object-contain"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
