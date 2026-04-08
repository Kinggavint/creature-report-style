import SlideLayout from "../SlideLayout";
import { ArrowRight } from "lucide-react";

const steps = [
  "Post daily to maintain likes, views, followers, and professional status",
  "Take new videos from the exhibit",
  "Create high quality edited compilations",
  "Videos with Christopher Marley explaining the pieces in the exhibit",
  "Continue to engage with comments — possibly responding to hate comments",
  "Continue to repost influencer visit videos",
];

const Slide18SocialNextSteps = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Social Media Status & Next Steps
      </h2>
      <div className="w-20 h-1 rounded-full mb-12" style={{ background: "#D4A853" }} />
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-5 rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <ArrowRight size={24} style={{ color: "#00A896" }} className="flex-shrink-0" />
              <p className="text-[22px]" style={{ color: "rgba(255,255,255,0.8)" }}>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide18SocialNextSteps;
