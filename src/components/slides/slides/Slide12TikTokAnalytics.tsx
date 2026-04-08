import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp } from "lucide-react";

const comparisonData = [
  { metric: "Followers", before: 33, after: 4200, label: "followers" },
  { metric: "Likes", before: 275, after: 139700, label: "likes" },
  { metric: "Views", before: 0, after: 687000, label: "views" },
  { metric: "Shares", before: 0, after: 6853, label: "shares" },
  { metric: "Comments", before: 0, after: 422, label: "comments" },
];

const growthData = [
  { name: "Followers", midterm: 33, current: 4200 },
  { name: "Likes", midterm: 275, current: 139700 },
  { name: "Views", midterm: 96000, current: 687000 },
  { name: "Shares", midterm: 574, current: 6853 },
];

const Slide12TikTokAnalytics = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Social Media Analytics
      </h2>
      <p className="text-[20px] mb-6" style={{ color: "#D4A853" }}>Start → Midterm → Final · Growth Comparison</p>

      <div className="flex gap-10 flex-1">
        {/* Chart - Midterm vs Final */}
        <div className="flex-1">
          <p className="text-[18px] font-semibold mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>Midterm vs Final Performance</p>
          <ResponsiveContainer width="100%" height={420}>
            <BarChart data={growthData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={16} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={14} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}K` : v} />
              <Tooltip contentStyle={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#FAFAF0" }} formatter={(v: number) => v.toLocaleString()} />
              <Bar dataKey="midterm" fill="#D4A853" name="At Midterm (2/27)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="current" fill="#00A896" name="Current (3/30)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Growth cards */}
        <div className="w-[440px] flex flex-col gap-4">
          <div className="rounded-xl p-5" style={{ background: "rgba(0,168,150,0.06)", border: "1px solid rgba(0,168,150,0.2)" }}>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={22} style={{ color: "#00A896" }} />
              <h3 className="text-[20px] font-semibold" style={{ color: "#00A896" }}>Growth Since Start</h3>
            </div>
            <div className="space-y-2">
              {comparisonData.map((d) => (
                <div key={d.metric} className="flex justify-between items-center">
                  <span className="text-[17px]" style={{ color: "rgba(255,255,255,0.6)" }}>{d.metric}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[15px]" style={{ color: "rgba(255,255,255,0.35)" }}>{d.before.toLocaleString()}</span>
                    <span style={{ color: "#00A896" }}>→</span>
                    <span className="text-[17px] font-bold" style={{ color: "#FAFAF0" }}>{d.after.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-5" style={{ background: "rgba(212,168,83,0.06)", border: "1px solid rgba(212,168,83,0.2)" }}>
            <h3 className="text-[20px] font-semibold mb-3" style={{ color: "#D4A853" }}>Since Midterm (2/27)</h3>
            <div className="space-y-2">
              {[["32", "new short-form posts"], ["123K", "likes gained"], ["591K", "additional views"], ["6,279", "shares"], ["346", "comments"]].map(([v, l]) => (
                <p key={l} className="text-[17px]" style={{ color: "rgba(255,255,255,0.7)" }}><span className="font-bold" style={{ color: "#FAFAF0" }}>{v}</span> {l}</p>
              ))}
            </div>
          </div>

          <div className="rounded-lg p-4" style={{ background: "rgba(74,144,217,0.06)", border: "1px solid rgba(74,144,217,0.15)" }}>
            <p className="text-[16px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Started with <span className="font-bold" style={{ color: "#4A90D9" }}>33 followers</span> and <span className="font-bold" style={{ color: "#4A90D9" }}>275 likes</span> — grew to <span className="font-bold" style={{ color: "#00A896" }}>4,200+ followers</span> in 8 weeks
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide12TikTokAnalytics;
