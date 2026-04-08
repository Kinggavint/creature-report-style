import SlideLayout from "../SlideLayout";

const sections = [
  { letter: "S", label: "Situation", color: "#00A896", items: [
    "Christopher Marley's Exquisite Creatures has toured top museums across the U.S. & Canada",
    "Strong attendance at venues like Crystal Bridges Museum of American Art and Houston Museum of Natural Science",
    "Museums historically handled all marketing and audience development",
  ]},
  { letter: "C", label: "Complication", color: "#D4A853", items: [
    "First independent showing in Seattle (12,000 sq ft near Pike Place Market & Seattle Aquarium)",
    "No built-in audience or institutional support",
    "Attendance below goal (<500/day vs. 500 target)",
  ]},
  { letter: "Q", label: "Question", color: "#4A90D9", items: [
    "How do we build awareness and consistently drive attendance—especially among new and younger audiences?",
  ]},
  { letter: "A", label: "Answer", color: "#E8725C", items: [
    "Multi-channel strategy: TikTok, influencers, Google Ads, tourism partnerships",
    "Leveraged viral proof (2.4M-view influencer post)",
    "Expanded reach to untapped audiences (Mandarin/Cantonese via Chinese social platforms)",
  ]},
];

const Slide03SCQA = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[48px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Introduction
      </h2>
      <div className="w-20 h-1 rounded-full mb-10" style={{ background: "#D4A853" }} />
      <div className="grid grid-cols-2 gap-8 flex-1">
        {sections.map((s) => (
          <div key={s.letter} className="rounded-xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${s.color}30` }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-[22px] font-bold" style={{ background: `${s.color}20`, color: s.color }}>
                {s.letter}
              </div>
              <h3 className="text-[26px] font-semibold" style={{ color: s.color }}>{s.label}</h3>
            </div>
            <ul className="space-y-2">
              {s.items.map((item, i) => (
                <li key={i} className="text-[18px] leading-relaxed flex gap-3" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <span style={{ color: s.color }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide03SCQA;
