import SlideLayout from "../SlideLayout";
import { Clock, Zap, Heart, Scissors, Type, Music } from "lucide-react";

const tips = [
  { icon: Clock, text: "Posting at 3pm is most effective, and early in the morning", color: "#00A896" },
  { icon: Zap, text: "Make sure there is a hook within the first 3 seconds of the video", color: "#D4A853" },
  { icon: Heart, text: "Targeting emotions — this works well because the Exquisite Creatures Exhibit makes people emotional", color: "#E8725C" },
  { icon: Scissors, text: "Make clips short — 3-5 seconds for showing each piece of artwork to reset attention", color: "#4A90D9" },
  { icon: Type, text: "Bold, dynamic subtitles to engage those watching on mute", color: "#9B59B6" },
  { icon: Music, text: "Trending audios", color: "#2ECC71" },
];

const Slide15ViralTips = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Tips for Creating a Viral Video
      </h2>
      <p className="text-[22px] mb-10" style={{ color: "#D4A853" }}>What we have found successful</p>
      <div className="grid grid-cols-2 gap-8 flex-1">
        {tips.map((t, i) => (
          <div key={i} className="rounded-xl p-7 flex gap-5 items-start" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${t.color}25` }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${t.color}15` }}>
              <t.icon size={28} style={{ color: t.color }} />
            </div>
            <p className="text-[21px] leading-relaxed pt-2" style={{ color: "rgba(255,255,255,0.8)" }}>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide15ViralTips;
