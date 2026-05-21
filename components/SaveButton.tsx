"use client";

import { Look } from "@/lib/types";
import { useSaved } from "@/lib/Context";

export default function SaveButton({ look }: { look: Look }) {
  const { savedLooks, saveLook, removeLook } = useSaved();
  const isSaved = savedLooks.some((saved) => saved.id === look.id);
  return (
    <button
      onClick={() => (isSaved ? removeLook(look.id) : saveLook(look))}
      className={`px-8 py-3 text-sm lg:text-lg tracking-widest font-medium transition-colors ${
        isSaved ? "bg-[#c9a84c] text-white" : "bg-[#6b1f3a] text-[#f2d4d7]"
      }`}
    >
      {isSaved ? "♥ Saved" : "♡ Save This Look"}
    </button>
  );
}
