import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const overallData = [
  { name: "Post Views", value: 687000, fill: "#00A896" },
  { name: "Likes", value: 139700, fill: "#D4A853" },
  { name: "Shares", value: 6853, fill: "#4A90D9" },
  { name: "Comments", value: 422, fill: "#E8725C" },
];

const Slide12TikTokAnalytics = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Social Media Analytics
      </h2>
      <div className="w-20 h-1 rounded-full mb-8" style={{ background: "#D4A853" }} />
      <div className="flex gap-12 flex-1">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={overallData} barSize={60}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={18} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={16} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}K` : v} />
              <Tooltip contentStyle={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#FAFAF0" }} formatter={(v: number) => v.toLocaleString()} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {overallData.map((entry, i) => (
                  <rect key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-[400px] flex flex-col gap-6">
          <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 className="text-[22px] font-semibold mb-4" style={{ color: "#00A896" }}>Overall</h3>
            <div className="space-y-2">
              {[["139,700", "overall likes"], ["687K", "post views"], ["422", "comments"], ["6,853", "shares"]].map(([v, l]) => (
                <p key={l} className="text-[18px]" style={{ color: "rgba(255,255,255,0.7)" }}><span className="font-bold" style={{ color: "#FAFAF0" }}>{v}</span> {l}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-6" style={{ background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.2)" }}>
            <h3 className="text-[22px] font-semibold mb-4" style={{ color: "#D4A853" }}>Since Midterm (2/27)</h3>
            <div className="space-y-2">
              {[["32", "new short-form content"], ["123K", "likes"], ["591K", "views"], ["346", "comments"], ["6,279", "shares"]].map(([v, l]) => (
                <p key={l} className="text-[18px]" style={{ color: "rgba(255,255,255,0.7)" }}><span className="font-bold" style={{ color: "#FAFAF0" }}>{v}</span> {l}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-4" style={{ background: "rgba(74,144,217,0.05)", border: "1px solid rgba(74,144,217,0.2)" }}>
            <p className="text-[18px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Began with <span className="font-bold" style={{ color: "#4A90D9" }}>33 followers</span> and <span className="font-bold" style={{ color: "#4A90D9" }}>275 likes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide12TikTokAnalytics;
