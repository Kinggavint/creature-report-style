import SlideLayout from "../SlideLayout";
import { TrendingUp, Users, Heart, Eye, Share2, MessageCircle } from "lucide-react";

const metrics = [
  { icon: Users, label: "Followers", before: 33, after: 4200, growth: "12,627%", color: "#00A896" },
  { icon: Heart, label: "Likes", before: 275, after: 139700, growth: "50,700%", color: "#E8725C" },
  { icon: Eye, label: "Views", before: 0, after: 687000, growth: "∞", color: "#D4A853" },
  { icon: Share2, label: "Shares", before: 0, after: 6853, growth: "∞", color: "#4A90D9" },
  { icon: MessageCircle, label: "Comments", before: 0, after: 422, growth: "∞", color: "#9B59B6" },
];

const sinceItems = [
  ["32", "new short-form posts"],
  ["123K", "likes gained"],
  ["591K", "additional views"],
  ["6,279", "shares"],
  ["346", "comments"],
];

const Slide12TikTokAnalytics = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Social Media Analytics
      </h2>
      <p className="text-[20px] mb-8" style={{ color: "#D4A853" }}>Start → Midterm → Final · Growth Comparison</p>

      {/* Main metric cards */}
      <div className="grid grid-cols-5 gap-5 mb-8">
        {metrics.map((m) => {
          const pct = m.before > 0 ? Math.round(((m.after - m.before) / m.before) * 100) : null;
          return (
            <div key={m.label} className="rounded-xl p-5 flex flex-col items-center text-center" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${m.color}30` }}>
              <m.icon size={28} style={{ color: m.color }} className="mb-3" />
              <p className="text-[15px] mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>{m.label}</p>
              <p className="text-[38px] font-bold mb-1" style={{ color: m.color }}>
                {m.after >= 1000 ? `${(m.after / 1000).toFixed(m.after >= 100000 ? 0 : 1)}K` : m.after}
              </p>
              <div className="flex items-center gap-1">
                <TrendingUp size={14} style={{ color: "#2ECC71" }} />
                <span className="text-[14px] font-semibold" style={{ color: "#2ECC71" }}>{m.growth}</span>
              </div>
              <p className="text-[13px] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>from {m.before.toLocaleString()}</p>
            </div>
          );
        })}
      </div>

      {/* Bottom section: progress bars + since midterm */}
      <div className="flex gap-8 flex-1">
        {/* Visual growth bars */}
        <div className="flex-1 rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h3 className="text-[20px] font-semibold mb-5" style={{ color: "#FAFAF0" }}>Growth Timeline</h3>
          <div className="space-y-5">
            {[
              { label: "Followers", start: 33, mid: 900, final: 4200, color: "#00A896" },
              { label: "Likes", start: 275, mid: 16700, final: 139700, color: "#E8725C" },
              { label: "Views", start: 0, mid: 96000, final: 687000, color: "#D4A853" },
              { label: "Shares", start: 0, mid: 574, final: 6853, color: "#4A90D9" },
            ].map((row) => {
              const max = row.final;
              const midPct = max > 0 ? Math.max((row.mid / max) * 100, 2) : 0;
              return (
                <div key={row.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[16px]" style={{ color: "rgba(255,255,255,0.6)" }}>{row.label}</span>
                    <span className="text-[16px] font-bold" style={{ color: row.color }}>{max >= 1000 ? `${(max/1000).toFixed(max >= 100000 ? 0 : 1)}K` : max}</span>
                  </div>
                  <div className="h-6 rounded-full overflow-hidden relative" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-full rounded-full absolute top-0 left-0" style={{ width: "100%", background: `${row.color}40` }} />
                    <div className="h-full rounded-full absolute top-0 left-0" style={{ width: `${midPct}%`, background: `${row.color}90` }} />
                    {/* Midterm marker */}
                    <div className="absolute top-0 h-full w-[2px]" style={{ left: `${midPct}%`, background: "#FAFAF0" }} />
                  </div>
                  <div className="flex justify-between mt-0.5">
                    <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>Start: {row.start.toLocaleString()}</span>
                    <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>Midterm: {row.mid.toLocaleString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Since midterm */}
        <div className="w-[380px] flex flex-col gap-5">
          <div className="rounded-xl p-6 flex-1" style={{ background: "rgba(212,168,83,0.06)", border: "1px solid rgba(212,168,83,0.2)" }}>
            <h3 className="text-[20px] font-semibold mb-4" style={{ color: "#D4A853" }}>Since Midterm (2/27)</h3>
            <div className="space-y-3">
              {sinceItems.map(([v, l]) => (
                <p key={l} className="text-[18px]" style={{ color: "rgba(255,255,255,0.7)" }}><span className="font-bold" style={{ color: "#FAFAF0" }}>{v}</span> {l}</p>
              ))}
            </div>
          </div>
          <div className="rounded-lg p-4" style={{ background: "rgba(0,168,150,0.06)", border: "1px solid rgba(0,168,150,0.15)" }}>
            <p className="text-[16px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Started with <span className="font-bold" style={{ color: "#00A896" }}>33 followers</span> and <span className="font-bold" style={{ color: "#00A896" }}>275 likes</span> — grew to <span className="font-bold" style={{ color: "#00A896" }}>4,200+ followers</span> in 8 weeks
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide12TikTokAnalytics;
