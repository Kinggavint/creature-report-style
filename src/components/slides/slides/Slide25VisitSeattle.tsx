import SlideLayout from "../SlideLayout";
import { Eye, Share2, BarChart3, Handshake, MapPin } from "lucide-react";

const values = [
  { icon: Eye, title: "Discovery & Visibility", items: ["Listing + directory on VisitSeattle.org", "Reaches high-intent tourists actively searching for activities"], color: "#00A896" },
  { icon: Share2, title: "Social Reach", items: ["Exposure across TikTok, Instagram, Facebook, Twitter (640K+ reach)", "Opportunity for featured content"], color: "#D4A853" },
  { icon: BarChart3, title: "Data & Insights", items: ["Access to tourism trends + convention performance data", "Helps optimize targeting and timing"], color: "#4A90D9" },
  { icon: Handshake, title: "Partnerships & Networking", items: ["750+ member network", "Events → referrals, collaborations, cross-promotion"], color: "#E8725C" },
  { icon: MapPin, title: "On-the-Ground Exposure", items: ["Advertising near Pike Place Market visitor center", "Direct access to heavy tourist foot traffic"], color: "#9B59B6" },
];

const Slide25VisitSeattle = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Visit Seattle Partnership Value
      </h2>
      <div className="w-20 h-1 rounded-full mb-8" style={{ background: "#D4A853" }} />
      <div className="grid grid-cols-3 gap-6 flex-1 items-start">
        {values.slice(0, 3).map((v) => (
          <div key={v.title} className="rounded-xl p-6 h-full" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${v.color}25` }}>
            <v.icon size={36} style={{ color: v.color }} className="mb-4" />
            <h3 className="text-[22px] font-semibold mb-4" style={{ color: v.color }}>{v.title}</h3>
            <ul className="space-y-2">
              {v.items.map((item, i) => (
                <li key={i} className="text-[17px] leading-relaxed flex gap-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: v.color }}>•</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {values.slice(3).map((v) => (
          <div key={v.title} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${v.color}25` }}>
            <div className="flex items-center gap-4 mb-3">
              <v.icon size={28} style={{ color: v.color }} />
              <h3 className="text-[22px] font-semibold" style={{ color: v.color }}>{v.title}</h3>
            </div>
            <ul className="space-y-2">
              {v.items.map((item, i) => (
                <li key={i} className="text-[17px] leading-relaxed flex gap-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: v.color }}>•</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide25VisitSeattle;
