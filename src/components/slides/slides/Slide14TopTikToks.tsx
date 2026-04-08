import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Video 1\n(Feb 20)", views: 67904, likes: 12000, shares: 5855, newFollowers: 240 },
  { name: "Video 2\n(Mar 7)", views: 264946, likes: 30, shares: 53, newFollowers: 2192 },
  { name: "Video 3\n(Mar 3)", views: 188693, likes: 450, shares: 368, newFollowers: 1060 },
  { name: "Video 4\n(Feb 25)", views: 73369, likes: 1650, shares: 518, newFollowers: 269 },
];

const Slide14TopTikToks = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Highest Performing TikToks
      </h2>
      <p className="text-[22px] mb-8" style={{ color: "#D4A853" }}>Video Analysis · Updated 3/30/2026</p>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height={480}>
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={14} />
            <YAxis stroke="rgba(255,255,255,0.5)" fontSize={14} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}K` : v} />
            <Tooltip contentStyle={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#FAFAF0" }} formatter={(v: number) => v.toLocaleString()} />
            <Legend wrapperStyle={{ fontSize: 16 }} />
            <Bar dataKey="views" fill="#00A896" name="Views" radius={[4, 4, 0, 0]} />
            <Bar dataKey="newFollowers" fill="#D4A853" name="New Followers" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {data.map((d, i) => (
          <div key={i} className="rounded-lg p-4 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[14px] mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Avg Watch Time</p>
            <p className="text-[20px] font-bold" style={{ color: "#FAFAF0" }}>{["1.8s", "9.5s", "1.2s", "1.2s"][i]}</p>
            <p className="text-[13px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Full video: {["3.54%", "14.88%", "1.65%", "1.8%"][i]}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide14TopTikToks;
