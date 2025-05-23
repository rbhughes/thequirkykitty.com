// // components/Navbar.tsx
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
//       <Link href="/">Home</Link>
//       <Link href="/about">About</Link>
//       <Link href="/services">Services</Link>
//       <Link href="/contact">Contact</Link>
//       <Link href="/reviews">Reviews</Link>
//       <Link href="/gallery">Gallery</Link>
//     </nav>
//   );
// }

// components/Navbar.tsx

import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
//       <div className="container mx-auto px-4">
//         <ul className="flex justify-center items-center space-x-8 py-4">
//           <li>
//             <Link
//               href="/"
//               className="text-gray-800 hover:text-blue-600 font-medium"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/about"
//               className="text-gray-800 hover:text-blue-600 font-medium"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/services"
//               className="text-gray-800 hover:text-blue-600 font-medium"
//             >
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className="text-gray-800 hover:text-blue-600 font-medium"
//             >
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/reviews"
//               className="text-gray-800 hover:text-blue-600 font-medium"
//             >
//               Reviews
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/gallery"
//               className="text-gray-800 hover:text-blue-600 font-medium"
//             >
//               Gallery
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export default function Navbar() {
  return (
    <nav className="h-16 flex items-center bg-gray-400">
      <div className="mx-auto flex space-x-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </nav>
  );
}
