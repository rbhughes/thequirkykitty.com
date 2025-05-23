// components/site-footer.tsx
//import { siteConfig } from "@/config/site";

// export function Footer() {
//   return (
//     <footer className="py-2 md:px-8 md:py-0 bg-red-100">
//       <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row bg-yellow-100">
//         <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
//           Built by{" "}
//           <a
//             //href={siteConfig.links.twitter}
//             href={"blahblah"}
//             target="_blank"
//             rel="noreferrer"
//             className="font-medium underline underline-offset-4"
//           >
//             shadcn
//           </a>
//           . The source code is available on{" "}
//           <a
//             //href={siteConfig.links.github}
//             href={"blahblah22222222"}
//             target="_blank"
//             rel="noreferrer"
//             className="font-medium underline underline-offset-4"
//           >
//             GitHub
//           </a>
//           .
//         </p>
//       </div>
//     </footer>
//   );
// }
export function Footer() {
  return (
    <footer className="h-16 flex items-center bg-gray-400 justify-center">
      <span className="text-gray-600 text-sm">
        © {new Date().getFullYear()} The Quirky Kitty
      </span>
    </footer>
  );
}
