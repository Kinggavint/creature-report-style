import SlideLayout from "../SlideLayout";

const items = [
  "Multi-channel strategy: TikTok, influencers, Google Ads, tourism partnerships",
  "Leveraged viral proof (2.4M-view influencer post)",
  "Expanded reach to untapped audiences (Mandarin/Cantonese via Chinese social platforms)",
];

const Slide03dAnswer = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <div className="flex items-center gap-5 mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-[28px] font-bold" style={{ background: "rgba(232,114,92,0.15)", color: "#E8725C" }}>
          A
        </div>
        <h2 className="text-[52px] font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#E8725C" }}>
          Answer
        </h2>
      </div>
      <div className="w-20 h-1 rounded-full mb-12" style={{ background: "#D4A853" }} />
      <div className="flex-1 flex flex-col justify-center max-w-[1400px]">
        {items.map((item, i) => (
          <div key={i} className="flex gap-5 mb-8 items-start">
            <span className="text-[28px] mt-1" style={{ color: "#E8725C" }}>•</span>
            <p className="text-[28px] leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide03dAnswer;
