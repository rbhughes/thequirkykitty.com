"use client";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownPage = ({ md }: { md: string }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(setError);
  }, [md]);

  console.log(content);

  if (error) {
    console.error(error);
  }
  return (
    <div className="markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

// Usage example:
// <S3TextRenderer fileUrl="https://your-bucket.s3.amazonaws.com/path/to/file.txt" />
//const f = "s3://thequirkykitty-site/test.md";

const ff = "https://thequirkykitty.com/content/test.md";

export default function Reviews() {
  return (
    <>
      <>Reviews</>
      <pre>{ff}</pre>
      <div className="w-[300px]">
        <MarkdownPage md={ff} />
      </div>
    </>
  );
}

// {
// 	"Version": "2008-10-17",
// 	"Id": "PolicyForCloudFrontPrivateContent",
// 	"Statement": [
// 		{
// 			"Sid": "AllowCloudFrontServicePrincipal",
// 			"Effect": "Allow",
// 			"Principal": {
// 				"Service": "cloudfront.amazonaws.com"
// 			},
// 			"Action": "s3:GetObject",
// 			"Resource": "arn:aws:s3:::thequirkykitty-content/*",
// 			"Condition": {
// 				"StringEquals": {
// 					"AWS:SourceArn": "arn:aws:cloudfront::434980069942:distribution/E2XIQZZLVDMNN2"
// 				}
// 			}
// 		}
// 	]
// }
