// "use client";

// import { useS3Fetch } from "@/components/useS3Fetch";
// import ReactMarkdown from "react-markdown";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import Image from "next/image";

// const s3About = "https://thequirkykitty.com/content/about.md";

// const src = "https://thequirkykitty.com/content/photos/blue_swirl.jpeg";

// export default function About() {
//   const {
//     content: aboutContent,
//     error: aboutError,
//     loading: aboutLoading,
//   } = useS3Fetch(s3About);

//   if (aboutLoading) return <div>Loading...</div>;
//   if (aboutError) return <div>Error Loading</div>;

//   return (
//     <>
//       <div className="flex flex-col md:flex-row gap-5">
//         <Card className="tqk-card w-1/4 shrink-0">
//           <CardTitle className="tqk-card-title">About</CardTitle>
//           <div className="relative w-full h-full">
//             <Image
//               src={src}
//               alt="Blue swirl"
//               fill
//               className="rounded-lg shadow-xl object-cover"
//             />
//           </div>
//         </Card>
//         <Card className="tqk-card w-3/4">
//           <CardTitle className="tqk-card-title">
//             Passion + Professionalism
//           </CardTitle>
//           <div className="markdown">
//             <ReactMarkdown>{aboutContent}</ReactMarkdown>
//           </div>
//         </Card>
//       </div>
//       <Card className="tqk-card my-5">
//         <CardContent className="relative flex flex-row justify-center h-48">
//           <div className="relative w-1/5 h-full">
//             <Image
//               src="/uw.png"
//               alt="University of Washington"
//               fill
//               className="hidden md:block object-contain"
//             />
//           </div>
//           <div className="relative w-1/5 h-[90%] self-center ">
//             <Image
//               src="/cpr.webp"
//               alt="CPR"
//               fill
//               className="hidden md:block object-contain"
//             />
//           </div>
//           <div className="relative w-1/5 h-full">
//             <Image
//               src="/fear_free.webp"
//               alt="Fear Free Certified"
//               fill
//               //width={30}
//               //height={30}
//               className="hidden md:block object-contain"
//             />
//           </div>
//           <div className="relative w-1/5 h-full">
//             <Image
//               src="/psi.png"
//               alt="Pet Sitters International"
//               fill
//               //width={80}
//               //height={80}
//               className="midden md:block object-contain"
//             />
//           </div>
//         </CardContent>
//       </Card>
//     </>
//   );
// }

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
      <div className="flex flex-col md:flex-row gap-5">
        <Card className="tqk-card w-full md:w-1/4 md:shrink-0 order-1 md:order-1">
          <div className="relative w-full h-48 md:h-full aspect-[4/3] md:aspect-auto">
            <Image
              src={src}
              alt="Blue swirl"
              fill
              className="rounded-lg shadow-xl object-cover"
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
        <CardContent className="relative flex flex-col md:flex-row justify-center gap-4 md:gap-0 p-4 md:h-48">
          <div className="relative w-full md:w-1/5 h-24 md:h-full">
            <Image
              src="/uw.png"
              alt="University of Washington"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-full md:w-1/5 h-20 md:h-[90%] md:self-center">
            <Image src="/cpr.webp" alt="CPR" fill className="object-contain" />
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
