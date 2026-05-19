import { Infinity } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen">
      <div className="flex flex-col items-center justify-center space-y-6 bg-[#fdf6f0] h-1/2">
        <p className="uppercase text-xs font-medium text-[#6b1f3a] ">
          modern / modest 2026
        </p>
        <div className="space-y-2">
          <h1 className="font-bold text-5xl text-center">Welcome to the</h1>
          <h1 className="uppercase text-[#6b1f3a] font-bold text-center text-5xl">
            zainny archives
          </h1>
          <p className="text- fbaseont-medium text-[#6b1f3a] text-center">Where every look tells a story</p>
        </div>
        <hr className="w-14 h-0.5 border-none rounded bg-black" />
        <div className="flex gap-14 items-center">
          <div className="flex flex-col space-y-1 items-center">
            <h2 className="text-2xl">16</h2>
            <p className="uppercase text-xs">looks</p>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <h2 className="text-2xl">8</h2>
            <p className="uppercase text-xs">categories</p>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <Infinity />
            <p className="uppercase text-xs">inspiration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
