"use client";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useSaved } from "@/lib/Context";

export default function Navbar() {
  const { savedLooks } = useSaved();
  return (
    <header className="bg-[#fdf6f0] border-b border-[#E8D5C4] flex items-center justify-between px-8 h-14 ">
      <Link href="/" className="uppercase font-semibold text-[#6b1f3a] text-xl">
        <h1>zainny archives</h1>
      </Link>
      <nav className="flex space-x-4">
        <Link href="/" className="text-sm text-[#9b7b6e] hover:text-[#6b1f3a]">
          Discover
        </Link>
        <Link
          href="/saved"
          className=" text-sm text-[#9b7b6e] hover:text-[#6b1f3a] "
        >
          Saved Looks
        </Link>
      </nav>
      {/* saved looks count */}
      <Link
        href="/"
        className="bg-[#6b1f3a] flex items-center gap-1 px-4 py-3 rounded-2xl"
      >
        <Heart className="h-3 w-3 text-[#f2d4d7]" />
        <p className="text-xs font-medium text-[#f2d4d7]">
          Saved ({savedLooks.length})
        </p>
      </Link>
    </header>
  );
}
