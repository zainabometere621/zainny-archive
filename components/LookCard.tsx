"use client";

import Link from "next/link";
import Image from "next/image";
import { Look } from "../lib/types";
import { useSaved } from "@/lib/Context";

interface LookCardProps {
  look: Look;
}

export default function LookCard({ look }: LookCardProps) {
  const { savedLooks, saveLook, removeLook } = useSaved();
  const isSaved = savedLooks.some((saved) => saved.id === look.id);
  return (
    // card container - links to detail page
    <Link
      href={`/look/${look.id}`}
      className="relative group overflow-hidden block"
    >
      {/* images */}
      <div className="relative aspect-[3/4] w-full">
        <Image src={look.image} alt={look.name} fill className="object-cover" />
         {/* gradient */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#3d0e1f] via-transparent to-transparent"/>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[#c9a84c] text-base lg:text-lg uppercase tracking-widest mb-1">
            {look.category}
          </p>
          <h2 className="text-[#fdf6f0] text-base lg:text-lg leading-tight">{look.name}</h2>
        </div>
        {/* heart button */}
        <button onClick={(e) =>{
          e.preventDefault()
          isSaved ? removeLook(look.id) : saveLook(look)
        }} className="absolute top-3 right-3 w-8 h-8 bg-[#fdf6f0] rounded-full">
          {isSaved ? '♥' : '♡' }
        </button>
      </div>
    </Link>
  );
}
