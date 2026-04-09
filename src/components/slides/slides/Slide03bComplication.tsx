import SlideLayout from "../SlideLayout";

const items = [
  "First independent showing in Seattle (12,000 sq ft near Pike Place Market & Seattle Aquarium)",
  "No built-in audience or institutional support",
  "Attendance below goal (<500/day vs. 500 target)",
];

const Slide03bComplication = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <div className="flex items-center gap-5 mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-[28px] font-bold" style={{ background: "rgba(212,168,83,0.15)", color: "#D4A853" }}>
          C
        </div>
        <h2 className="text-[52px] font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#D4A853" }}>
          Complication
        </h2>
      </div>
      <div className="w-20 h-1 rounded-full mb-12" style={{ background: "#D4A853" }} />
      <div className="flex-1 flex flex-col justify-center max-w-[1400px]">
        {items.map((item, i) => (
          <div key={i} className="flex gap-5 mb-8 items-start">
            <span className="text-[28px] mt-1" style={{ color: "#D4A853" }}>•</span>
            <p className="text-[28px] leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide03bComplication;
