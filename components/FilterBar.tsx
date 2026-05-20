interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}

export default function FilterBar({
  activeFilter,
  setActiveFilter,
}: FilterBarProps) {
  return (
    <section className="flex gap-3 flex-wrap px-8 py-6 border-b border-[#e8d5c4] bg-[#fdf6f0] items-center justify-between">
        <p className="uppercase text-[#7a3d52] text-sm">filter</p>
      {[
        "all",
        "hijab",
        "two-piece",
        "ankara",
        "bubu",
        "cargo",
        "jean",
        "formal",
      ].map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveFilter(cat)}
          className={`px-4 py-1.5 rounded-full text-xs border capitalize ${
            activeFilter === cat
              ? "bg-[#6b1f3a] text-[#f2d4d7] border-[#6b1f3a]"
              : "border-[#d4b5a8] text-[#7a3d52]"
          }`}
        >
          {cat}
        </button>
      ))}
    </section>
  );
}
