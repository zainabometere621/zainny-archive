interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}

export default function FilterBar({
  activeFilter,
  setActiveFilter,
}: FilterBarProps) {
  return (
    <section className="flex gap-3 flex-wrap px-8 lg:px-16 py-6 border-b border-[#e8d5c4] bg-[#fdf6f0] items-center justify-between">
      {[
        "all",
        "hijab",
        "two-piece",
        "ankara",
        "bubu",
        "cargo",
        "skirt",
        "formal",
      ].map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveFilter(cat)}
          className={`px-4 lg:px-10 py-1.5 lg:py-3 rounded-full text-xs lg:text-lg tracking-widest  border capitalize ${
            activeFilter === cat
              ? "bg-[#6b1f3a] text-[#f2d4d7] border-[#6b1f3a]"
              : "border-[#d4b5a8] text-[#7a3d52] hover:bg-[#f2d4d7]"
          }`}
        >
          {cat}
        </button>
      ))}
    </section>
  );
}
