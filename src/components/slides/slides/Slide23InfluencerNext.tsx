import SlideLayout from "../SlideLayout";
import { CheckCircle, ArrowRight } from "lucide-react";

const worked = [
  "RedNote has strong potential",
  "JoinBrands most effective platform",
  "Direct outreach = more authentic + cheaper",
];

const nextSteps = [
  "Post consistently on RedNote",
  "Start collabs at ~1k followers",
  "Keep JoinBrands active + invite creators",
  "Continue direct outreach",
];

const Slide23InfluencerNext = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Key Takeaways & Next Steps
      </h2>
      <div className="w-20 h-1 rounded-full mb-12" style={{ background: "#D4A853" }} />
      <div className="flex gap-10 flex-1">
        <div className="flex-1 rounded-xl p-8" style={{ background: "rgba(0,168,150,0.04)", border: "1px solid rgba(0,168,150,0.15)" }}>
          <h3 className="text-[28px] font-semibold mb-8" style={{ color: "#00A896" }}>What Worked</h3>
          <div className="space-y-6">
            {worked.map((w, i) => (
              <div key={i} className="flex items-center gap-5">
                <CheckCircle size={28} style={{ color: "#00A896" }} />
                <p className="text-[24px]" style={{ color: "rgba(255,255,255,0.8)" }}>{w}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 rounded-xl p-8" style={{ background: "rgba(212,168,83,0.04)", border: "1px solid rgba(212,168,83,0.15)" }}>
          <h3 className="text-[28px] font-semibold mb-8" style={{ color: "#D4A853" }}>Next Steps</h3>
          <div className="space-y-6">
            {nextSteps.map((s, i) => (
              <div key={i} className="flex items-center gap-5">
                <ArrowRight size={28} style={{ color: "#D4A853" }} />
                <p className="text-[24px]" style={{ color: "rgba(255,255,255,0.8)" }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide23InfluencerNext;
