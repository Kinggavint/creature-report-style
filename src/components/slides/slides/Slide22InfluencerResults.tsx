import SlideLayout from "../SlideLayout";
import { TrendingUp, Users, Globe, Eye, Radio } from "lucide-react";
import joinbrandsImg from "@/assets/slides/joinbrands-campaign.png";
import afluencerImg from "@/assets/slides/afluencer-collab.png";

const results = [
  { icon: TrendingUp, text: "1 influencer collaboration", color: "#00A896" },
  { icon: Eye, text: "~2,000–2,500 views in 24 hrs", color: "#D4A853" },
  { icon: Users, text: "9 Seattle-based applicants", color: "#4A90D9" },
  { icon: Globe, text: "RedNote launched + business account", color: "#E8725C" },
  { icon: Radio, text: "New audience channel created", color: "#9B59B6" },
];

const Slide22InfluencerResults = () => (
  <SlideLayout>
    <div className="flex h-full px-16 py-14 gap-10">
      <div className="flex-1 flex flex-col">
        <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
          Results & Impact
        </h2>
        <div className="w-20 h-1 rounded-full mb-10" style={{ background: "#D4A853" }} />
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-5">
            {results.map((r, i) => (
              <div key={i} className="flex items-center gap-5 rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${r.color}25` }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${r.color}15` }}>
                  <r.icon size={24} style={{ color: r.color }} />
                </div>
                <p className="text-[22px] font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[520px] flex flex-col gap-4 justify-center">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <img src={joinbrandsImg} alt="JoinBrands campaign" className="w-full h-auto" />
        </div>
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <img src={afluencerImg} alt="Afluencer collaboration" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide22InfluencerResults;
