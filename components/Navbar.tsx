"use client";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useSaved } from "@/lib/Context";

export default function Navbar() {
  const { savedLooks } = useSaved();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#fdf6f0] border-b border-[#E8D5C4] relative">
      <div className="flex items-center justify-between px-8 lg:px-16 h-14 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="uppercase font-semibold text-[#6b1f3a] text-base lg:text-4xl"
        >
          <h1>zainny archives</h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="text-lg text-[#9b7b6e] hover:text-[#6b1f3a]">
            Discover
          </Link>
          <Link href="/saved" className="text-lg text-[#9b7b6e] hover:text-[#6b1f3a]">
            Saved Looks
          </Link>
        </nav>

        {/* Desktop saved button */}
        <Link
          href="/saved"
          className="hidden lg:flex bg-[#6b1f3a] items-center gap-1 px-4 py-3 rounded-full"
        >
          <Heart className="h-3 w-3 text-[#f2d4d7]" />
          <p className="text-lg font-medium text-[#f2d4d7]">
            Saved ({savedLooks.length})
          </p>
        </Link>

        {/* Hamburger button — mobile only */}
        <button
          className="lg:hidden text-[#6b1f3a] p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#fdf6f0] border-b border-[#E8D5C4] flex flex-col px-8 py-4 gap-4 z-50 shadow-md">
          <Link
            href="/"
            className="text-sm text-[#9b7b6e] hover:text-[#6b1f3a]"
            onClick={() => setMenuOpen(false)}
          >
            Discover
          </Link>
          <Link
            href="/saved"
            className="text-sm text-[#9b7b6e] hover:text-[#6b1f3a]"
            onClick={() => setMenuOpen(false)}
          >
            Saved Looks
          </Link>
          <Link
            href="/saved"
            className="bg-[#6b1f3a] flex items-center gap-1 px-4 py-3 rounded-full w-fit"
            onClick={() => setMenuOpen(false)}
          >
            <Heart className="h-3 w-3 text-[#f2d4d7]" />
            <p className="text-xs font-medium text-[#f2d4d7]">
              Saved ({savedLooks.length})
            </p>
          </Link>
        </div>
      )}
    </header>
  );
}