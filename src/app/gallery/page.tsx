"use client";

import React, { useEffect, useState } from "react";
import PhotoGallery from "./photo-gallery";

const GALLERY_URL =
  "https://p8z9dmiqy7.execute-api.us-east-1.amazonaws.com/prod/gallery";

export interface MinimalPhoto {
  src: string;
  width: number;
  height: number;
}

interface ApiResponse {
  body: string;
}

interface GalleryData {
  images: Array<{
    url: string;
    width: number;
    height: number;
  }>;
}

const refactorPhotos = (photos: GalleryData["images"]): MinimalPhoto[] => {
  return photos.map((photo) => ({
    src: photo.url,
    width: photo.width,
    height: photo.height,
  }));
};

export default function GalleryPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [photos, setPhotos] = useState<MinimalPhoto[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(GALLERY_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();
        const body: GalleryData = JSON.parse(result.body);
        const processedPhotos = refactorPhotos(body.images);

        setPhotos(processedPhotos);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        console.error("Fetch error:", err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 mb-2">Error: {error}</div>
        <div className="text-gray-600">Check the console for more details</div>
      </div>
    );
  }

  return (
    <div className="my-10">
      <PhotoGallery photos={photos} />
    </div>
  );
}

// return (
//   <div style={{ padding: '20px' }}>
//     <h2>Gallery API Test</h2>

//     {loading && <p>Loading...</p>}

//     {error && (
//       <div style={{ color: 'red' }}>
//         <p>Error: {error}</p>
//         <p>Check the console for more details</p>
//       </div>
//     )}

//     {data && (
//       <div style={{ color: 'green' }}>
//         <p>✅ Request successful! Check console for full response.</p>
//         <p>Found {data.count || data.length || 'unknown'} items</p>
//       </div>
//     )}
//   </div>
// )
