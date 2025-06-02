"use client";

import { useS3Fetch } from "@/components/useS3Fetch";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import Image from "next/image";

const src = "https://thequirkykitty.com/content/photos/xyla.jpeg";

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

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 mb-5">
        <Card className="tqk-card w-full md:w-1/3 md:shrink-0 order-1 md:order-1">
          <div className="relative w-full  md:h-full aspect-[4/3] md:aspect-auto">
            <Image
              src={src}
              alt="Top Shelf"
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </Card>

        <Card className="tqk-card w-full md:w-2/3 order-2 md:order-2">
          <CardTitle className="tqk-card-title">Top-Shelf Service</CardTitle>
          <div className="markdown h-48">
            <ReactMarkdown>{summaryContent}</ReactMarkdown>
          </div>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <Card className="tqk-card">
          <CardTitle className="tqk-card-title">Cat Sitting</CardTitle>
          <CardContent className="flex flex-row gap-4">
            <div className="markdown p-4">
              <ReactMarkdown>{sittingContent}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        <Card className="tqk-card">
          <CardTitle className="tqk-card-title">
            Behavioral Consultation
          </CardTitle>
          <CardContent className="flex flex-row gap-4">
            <div className="markdown p-4">
              <ReactMarkdown>{behaviorContent}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
