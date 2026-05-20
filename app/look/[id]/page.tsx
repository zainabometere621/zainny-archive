import Image from "next/image";
import Link from "next/link";
import { looks } from "@/lib/looks";
import SaveButton from "@/components/SaveButton";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}
export default async function LookDetail({ params }: Props) {
  const { id } = await params;
  const look = looks.find((l) => l.id === Number(id));
  if (!look)
    return (
      <div className="flex items-center justify-center text-[#6b1f3a]">
        Look not found
      </div>
    );
  return (
    <main className="bg-[#fdf6f0] min-h-screen">
      {/* back to look button */}
      <div className="px-8 py-6 border-b border[#9b7b6e]">
        <Link
          href="/"
          className="flex space-x-1 text-[#9b7b6e] hover:text-[#6b1f3a]"
        >
          <ArrowLeft className="h-4 w-4 " />
          <p className="text-xs">Back to looks</p>
        </Link>
      </div>
      {/* details column */}
      <div className="grid grid-cols-2 h-1/2">
        {/* image */}
        <div className="relative aspect-[3/4]">
          <Image
            src={look.image}
            alt={look.name}
            fill
            className="object-cover"
          />
        </div>
        {/* image details */}
        <div>
            <p>
                {look.category}
            </p>
            <p>
                {look.name}
            </p>
            <p>
                {look.description}
            </p>
            <p>
                {look.tags}
            </p>
        </div>
      </div>
    </main>
  );
}
