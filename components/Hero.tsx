// import { Infinity } from "lucide-react";

export default function Hero() {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center space-y-6 bg-[#f2d4d7] py-16">
        <p className="uppercase text-xs font-medium text-[#9b4e6b] ">
          modern / modest 2026
        </p>
        <div className="space-y-2">
          <h1 className="font-bold text-5xl text-center text-[#3d0e1f]">Welcome to the</h1>
          <h1 className="uppercase text-[#6b1f3a] font-bold text-center text-5xl">
            zainny archives
          </h1>
          <p className="text- fbaseont-medium text-[#9b4e6b] text-center">Where every look tells a story</p>
        </div>
        <hr className="w-14 h-0.5 border-none rounded bg-[#c9a84c] " />
        <div className="flex gap-14 items-center">
          <div className="flex flex-col space-y-1 items-center">
            <h2 className="text-2xl text-[#6b1f3a]">16</h2>
            <p className="uppercase text-xs text-[#9b4e68]">looks</p>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <h2 className="text-2xl text-[#6b1f3a]">8</h2>
            <p className="uppercase text-xs  text-[#9b4e68]">categories</p>
          </div>
          <div className="flex flex-col space-y-1 items-center">
           <h2 className="text-3xl text-[#6B1F3A]">∞</h2>
            <p className="uppercase text-xs  text-[#9b4e68]">inspiration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
