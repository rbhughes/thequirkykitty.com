"use client";

import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  ColumnsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/columns.css";
import { MinimalPhoto } from "./page";

function renderNextImage(
  { alt = "kitty", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: height,
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        className="rounded shadow-lg shadow-stone-700"
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
}

interface PhotoGalleryProps {
  photos: MinimalPhoto[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <ColumnsPhotoAlbum
      photos={photos}
      //layout="columns"
      render={{ image: renderNextImage }}
      // columns={(containerWidth) => {
      //   if (containerWidth < 400) return 2;
      //   if (containerWidth < 800) return 3;
      //   return 4;
      // }}
    />
  );
}
