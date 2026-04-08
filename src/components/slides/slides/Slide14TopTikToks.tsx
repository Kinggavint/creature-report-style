import SlideLayout from "../SlideLayout";
import { Eye, Heart, Share2, Users, Clock, Play } from "lucide-react";

const data = [
  { name: "Video 1", date: "Feb 20", views: 67904, likes: 12000, shares: 5855, newFollowers: 240, avgWatch: "1.8s", fullWatch: "3.54%" },
  { name: "Video 2", date: "Mar 7", views: 264946, likes: 30, shares: 53, newFollowers: 2192, avgWatch: "9.5s", fullWatch: "14.88%" },
  { name: "Video 3", date: "Mar 3", views: 188693, likes: 450, shares: 368, newFollowers: 1060, avgWatch: "1.2s", fullWatch: "1.65%" },
  { name: "Video 4", date: "Feb 25", views: 73369, likes: 1650, shares: 518, newFollowers: 269, avgWatch: "1.2s", fullWatch: "1.8%" },
];

const MetricRow = ({ icon: Icon, label, value, color }: { icon: any; label: string; value: string; color: string }) => (
  <div className="flex items-center gap-3">
    <Icon size={18} style={{ color }} className="flex-shrink-0" />
    <span className="text-[16px] flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
    <span className="text-[18px] font-bold" style={{ color }}>{value}</span>
  </div>
);

const Slide14TopTikToks = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-16 py-14">
      <h2 className="text-[40px] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Highest Performing TikToks
      </h2>
      <p className="text-[20px] mb-8" style={{ color: "#D4A853" }}>Video Analysis · Updated 3/30/2026</p>

      {/* 4 video cards side by side */}
      <div className="grid grid-cols-4 gap-6 flex-1">
        {data.map((d, i) => (
          <div key={i} className="rounded-xl flex flex-col" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {/* Header */}
            <div className="p-5 pb-3">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-[22px] font-bold" style={{ color: "#FAFAF0" }}>{d.name}</h3>
                <span className="text-[14px] px-2 py-0.5 rounded-full" style={{ background: "rgba(212,168,83,0.15)", color: "#D4A853" }}>{d.date}</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="px-5 flex-1 space-y-4">
              <MetricRow icon={Eye} label="Views" value={d.views.toLocaleString()} color="#00A896" />
              <MetricRow icon={Heart} label="Likes" value={d.likes.toLocaleString()} color="#E8725C" />
              <MetricRow icon={Share2} label="Shares" value={d.shares.toLocaleString()} color="#4A90D9" />
              <MetricRow icon={Users} label="New Followers" value={`+${d.newFollowers.toLocaleString()}`} color="#D4A853" />
              
              <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
              
              <MetricRow icon={Clock} label="Avg Watch" value={d.avgWatch} color="#FAFAF0" />
              <MetricRow icon={Play} label="Full Watch" value={d.fullWatch} color="#FAFAF0" />
            </div>

            {/* Visual bar for views comparison */}
            <div className="p-5 pt-4 mt-auto">
              <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div className="h-full rounded-full" style={{ width: `${(d.views / 264946) * 100}%`, background: "linear-gradient(90deg, #00A896, #D4A853)" }} />
              </div>
              <p className="text-[12px] mt-1 text-right" style={{ color: "rgba(255,255,255,0.3)" }}>relative reach</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide14TopTikToks;
