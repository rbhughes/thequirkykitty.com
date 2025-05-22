// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/reviews">Reviews</Link>
      <Link href="/gallery">Gallery</Link>
    </nav>
  );
}
