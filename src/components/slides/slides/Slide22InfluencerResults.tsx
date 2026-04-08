import SlideLayout from "../SlideLayout";
import { TrendingUp, Users, Globe, Eye, Radio } from "lucide-react";

const results = [
  { icon: TrendingUp, text: "1 influencer collaboration", color: "#00A896" },
  { icon: Eye, text: "~2,000–2,500 views in 24 hrs", color: "#D4A853" },
  { icon: Users, text: "9 Seattle-based applicants", color: "#4A90D9" },
  { icon: Globe, text: "RedNote launched + business account", color: "#E8725C" },
  { icon: Radio, text: "New audience channel created", color: "#9B59B6" },
];

const Slide22InfluencerResults = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Results & Impact
      </h2>
      <div className="w-20 h-1 rounded-full mb-12" style={{ background: "#D4A853" }} />
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-6 max-w-[900px] mx-auto w-full">
          {results.map((r, i) => (
            <div key={i} className="flex items-center gap-6 rounded-xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${r.color}25` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${r.color}15` }}>
                <r.icon size={32} style={{ color: r.color }} />
              </div>
              <p className="text-[26px] font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide22InfluencerResults;
