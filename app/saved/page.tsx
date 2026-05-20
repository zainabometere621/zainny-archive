"use client";

import { Heart, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSaved } from "@/lib/Context";

export default function SavedLooks() {
  const { savedLooks, removeLook } = useSaved();

  return (
    <main className="bg-[#fdf6f0] min-h-screen">
      <div className="px-8 py-8">
        <h1 className="text-3xl text-[#3d0e1f]"> Your Saved Looks</h1>
        <p className="text-sm text-[#9b7b6e] font-light mt-1">
          Looks you've fallen in love with
        </p>
      </div>
      {/* place holder */}
      {savedLooks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <Heart className="h-8 w-8" />
          <p className="text-2xl text-[#6b1f3a]">Your archive is empty</p>
          <p className="text-sm text-[#9b7b6e] font-light">
            Start saving looks you love and they'll appear here
          </p>
          <Link
            href="/"
            className="mt-4 bg-[#6b1f3a] text-[#f2d4d7] uppercase text-xs px-6 py-3 tracking widest"
          >
            Discover looks
          </Link>
        </div>
      ) : (
        // saved looks
        <div className="grid lg:grid-cols-3 gap-1 bg-[#e8d5c4]">
          {savedLooks.map((look) => (
            <div key={look.id} className="relative group">
              <Link href={`look/${look.id}`}>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={look.image}
                    alt={look.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d0e1f] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[#c9a84c] uppercase text-base tracking-widest mb-1">
                    {look.category}
                  </p>
                  <h2 className=" text-base text-[#FDF6F0] ">{look.name}</h2>
                </div>
              </Link>
              {/* remove button */}
              <button
                onClick={() => removeLook(look.id)}
                className="absolute top-3 right-3 w-7 h-7 bg-[#FDF6F0] rounded-full flex items-center justify-center border border-[#E8D5C4] z-10"
              >
                <X className="w-4 h-4 text-[#6B1F3A]" />
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
