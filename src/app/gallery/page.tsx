"use client";
import React from "react";

const GALLERY_URL =
  "https://p8z9dmiqy7.execute-api.us-east-1.amazonaws.com/prod/gallery";

async function readS3() {
  try {
    const response = await fetch(GALLERY_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log(response);

    //toast("Form submitted successfully!");
  } catch (error) {
    console.error("Form submission error", error);
  }
}
export default function Gallery() {
  React.useEffect(() => {
    readS3();
  }, []);

  return <>Gallery</>;
}
