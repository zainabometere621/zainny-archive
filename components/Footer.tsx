export default function Footer() {
  return (
    <footer className="bg-[#3D0E1F] px-8 lg:px-16  pb-6">
      <div className="grid lg:grid-cols-3 space-y-4 lg:space-x-16 pt-8 pb-8 border-b border-white">
        <div className="">
          <h1 className="text-xl lg:text-4xl tracking-widest text-[#F2D4D7] font-semibold mb-4">zainny archives</h1>
          <p className="text-sm lg:text-base  text-[#F2D4D7]/50">
            A curated collection of looks for the woman who knows exactly what
            she wants. Style is an archive — build yours.
          </p>
        </div>
        <div className=" ">
          <p className="text-[#C9A84C] text-base lg:text-2xl tracking-widest uppercase mb-4">Explore</p>
           <div className="flex flex-col gap-1">
            {['All Looks', 'Saved Looks', 'Hijab', 'Ankara', 'Formal'].map((item) => (
              <span key={item} className="text-sm lg:text-base text-[#F2D4D7]/60 font-light cursor-pointer hover:text-[#F2D4D7]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#C9A84C] text-base lg:text-2xl tracking-widest uppercase mb-4">zainny creations</p>
          <div className="flex flex-col gap-1">
            {['About Us', 'Contact'].map((item) => (
              <span key={item} className="text-sm lg:text-base text-[#F2D4D7]/60 font-light cursor-pointer hover:text-[#F2D4D7]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-6">
        <hr className="text-[#F2D4D7]"/>
        <p className="text-xs lg:text-base text-[#F2D4D7]/40"> © 2026 Zainny Creations. All rights reserved.</p>
      </div>
    </footer>
  );
}
