import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import viralImg from "@/assets/slides/tiktok-viral.jpg";

const data = [
  { name: "Video 1", date: "Feb 20", views: 67904, likes: 12000, shares: 5855, newFollowers: 240, avgWatch: "1.8s", fullWatch: "3.54%" },
  { name: "Video 2", date: "Mar 7", views: 264946, likes: 30, shares: 53, newFollowers: 2192, avgWatch: "9.5s", fullWatch: "14.88%" },
  { name: "Video 3", date: "Mar 3", views: 188693, likes: 450, shares: 368, newFollowers: 1060, avgWatch: "1.2s", fullWatch: "1.65%" },
  { name: "Video 4", date: "Feb 25", views: 73369, likes: 1650, shares: 518, newFollowers: 269, avgWatch: "1.2s", fullWatch: "1.8%" },
];

const Slide14TopTikToks = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-16 py-14">
      <h2 className="text-[40px] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Highest Performing TikToks
      </h2>
      <p className="text-[20px] mb-6" style={{ color: "#D4A853" }}>Video Analysis · Updated 3/30/2026</p>

      <div className="flex gap-8 flex-1">
        {/* Chart */}
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={380}>
            <BarChart data={data} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={14} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={13} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}K` : v} />
              <Tooltip contentStyle={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#FAFAF0" }} formatter={(v: number) => v.toLocaleString()} />
              <Legend wrapperStyle={{ fontSize: 14 }} />
              <Bar dataKey="views" fill="#00A896" name="Views" radius={[4, 4, 0, 0]} />
              <Bar dataKey="likes" fill="#D4A853" name="Likes" radius={[4, 4, 0, 0]} />
              <Bar dataKey="shares" fill="#4A90D9" name="Shares" radius={[4, 4, 0, 0]} />
              <Bar dataKey="newFollowers" fill="#E8725C" name="New Followers" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* TikTok screenshot */}
        <div className="w-[200px] flex items-center">
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <img src={viralImg} alt="Top TikTok video" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Detailed metrics table */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {data.map((d, i) => (
          <div key={i} className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[16px] font-semibold mb-2" style={{ color: "#FAFAF0" }}>{d.name} <span className="font-normal text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>({d.date})</span></p>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Views</span>
                <span className="text-[14px] font-semibold" style={{ color: "#00A896" }}>{d.views.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Likes</span>
                <span className="text-[14px] font-semibold" style={{ color: "#D4A853" }}>{d.likes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Avg Watch</span>
                <span className="text-[14px] font-bold" style={{ color: "#FAFAF0" }}>{d.avgWatch}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Full video</span>
                <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.6)" }}>{d.fullWatch}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide14TopTikToks;
