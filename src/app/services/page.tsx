"use client";

import { useS3Fetch } from "@/components/useS3Fetch";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import Image from "next/image";

import ContactOrBook from "@/components/contact-or-book";
const src = "https://thequirkykitty.com/content/photos/blue_swirl.jpeg";

const s3Summary = "https://thequirkykitty.com/content/services_summary.md";
const s3Sitting = "https://thequirkykitty.com/content/services_sitting.md";
const s3Behavior = "https://thequirkykitty.com/content/services_behavior.md";

export default function Services() {
  const {
    content: summaryContent,
    error: summaryError,
    loading: summaryLoading,
  } = useS3Fetch(s3Summary);
  const {
    content: sittingContent,
    error: sittingError,
    loading: sittingLoading,
  } = useS3Fetch(s3Sitting);
  const {
    content: behaviorContent,
    error: behaviorError,
    loading: behaviorLoading,
  } = useS3Fetch(s3Behavior);

  if (summaryLoading) return <div>Loading Summary...</div>;
  if (summaryError) return <div>Error Loading Summary</div>;

  if (sittingLoading) return <div>Loading Sitting...</div>;
  if (sittingError) return <div>Error Loading Sitting</div>;

  if (behaviorLoading) return <div>Loading Behavior...</div>;
  if (behaviorError) return <div>Error Loading Behavior</div>;

  console.log(summaryContent);

  return (
    <>
      <Card className="tqk-card my-4">
        <div className="markdown p-4">
          <ReactMarkdown>{summaryContent}</ReactMarkdown>
        </div>
        <ContactOrBook />
      </Card>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="tqk-card">
          <CardTitle>Cat Sitting</CardTitle>
          <CardContent className="flex flex-row gap-4">
            {/* behavior */}
            <Image
              src={src}
              alt="Blue swirl"
              width={80}
              height={80}
              className="hidden md:block w-1/5 object-cover"
            />
            <div className="markdown p-4">
              <ReactMarkdown>{sittingContent}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        <Card className="tqk-card">
          <CardTitle>Behavioral Consultation</CardTitle>
          <CardContent className="flex flex-row gap-4">
            {/* behavior */}
            <Image
              src={src}
              alt="Blue swirl"
              width={80}
              height={80}
              className="hidden md:block w-1/5 object-cover"
            />
            <div className="markdown p-4">
              <ReactMarkdown>{behaviorContent}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
