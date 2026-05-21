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
      <div className="flex items-center justify-center h-screen text-[#6b1f3a]">
        Look not found
      </div>
    );
  return (
    <main className="bg-[#fdf6f0] min-h-screen ">
      {/* back to look button */}
      <div className="px-8 py-6 border-b border[#9b7b6e]">
        <Link
          href="/"
          className="flex items-center space-x-1 text-[#9b7b6e] hover:text-[#6b1f3a]"
        >
          <ArrowLeft className="h-5 w-5 " />
          <p className="text-xs lg:text-lg">Back to looks</p>
        </Link>
      </div>
      {/* details column */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* image */}
        <div className="relative aspect-[3/4] min-h-[600px]">
          <Image
            src={look.image}
            alt={look.name}
            fill
            className="object-cover"
          />
        </div>
        {/* image details */}
        <div className="p-12 flex flex-col items bg-[#fdf6f0]">
          <p className=" uppercase text-sm lg:text-xl text-[#c9a84c] tracking-widest mb-4">
            {look.category}
          </p>
          <h1 className="text-4xl leading-tight text-[#3D0E1F] mb-4 ">
            {look.name}
          </h1>
          <p className="text-sm lg:text-lg text-[#7a3d52] font-light leading-relaxed mb-8">
            {look.description}
          </p>
          {/* tags */}
          <div className="flex gap-2 flex-wrap mb-8">
            {look.tags.map((tag) => (
              <span key={tag} className="text-xs lg:text-lg tracking-widest px-4 py-1.5 rounded-full border border-[#d4b5a8] text-[#7a3d52]">
                {tag}
              </span>
            ))}
          </div>
          <SaveButton look={look}/>
        </div>
      </div>
    </main>
  );
}
