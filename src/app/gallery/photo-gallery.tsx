"use client";

import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  ColumnsPhotoAlbum, // Changed from RowsPhotoAlbum
} from "react-photo-album";
import "react-photo-album/columns.css"; // Changed from "react-photo-album/rows.css"
import { MinimalPhoto } from "./page";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: height, // Use the calculated height from react-photo-album
        aspectRatio: `${width} / ${height}`, // Maintain aspect ratio
      }}
    >
      <Image
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
      columns={(containerWidth) => {
        if (containerWidth < 400) return 2;
        if (containerWidth < 800) return 3;
        return 4;
      }}
    />
  );
}

// "use client";

// import Image from "next/image";
// import {
//   RenderImageContext,
//   RenderImageProps,
//   RowsPhotoAlbum,
// } from "react-photo-album";
// import "react-photo-album/rows.css";
// import { MinimalPhoto } from "./page";

// function renderNextImage(
//   { alt = "", title, sizes }: RenderImageProps,
//   { photo, width, height }: RenderImageContext,
// ) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         position: "relative",
//         aspectRatio: `${width} / ${height}`,
//       }}
//     >
//       <Image
//         fill
//         src={photo}
//         alt={alt}
//         title={title}
//         sizes={sizes}
//         placeholder={"blurDataURL" in photo ? "blur" : undefined}
//       />
//     </div>
//   );
// }

// export default function PhotoGallery({ photos }: { photos: MinimalPhoto[] }) {
//   return (
//     <RowsPhotoAlbum
//       photos={photos}
//       render={{ image: renderNextImage }}
//       defaultContainerWidth={1200}
//       sizes={{
//         size: "1168px",
//         sizes: [
//           { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
//         ],
//       }}
//     />
//   );
// }
