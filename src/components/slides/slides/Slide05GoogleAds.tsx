import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Clicks", paid: 1930, nonprofit: 291 },
  { name: "Impressions (÷10)", paid: 1430, nonprofit: 188 },
];

const stats = [
  { label: "Paid Clicks", value: "1,930", color: "#00A896" },
  { label: "Nonprofit Clicks", value: "291", color: "#D4A853" },
  { label: "Impressions", value: "14,300", color: "#4A90D9" },
  { label: "Avg. CPC", value: "$0.41", color: "#E8725C" },
  { label: "Total Spend", value: "$800", color: "#9B59B6" },
];

const Slide05GoogleAds = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Google Ads
      </h2>
      <p className="text-[22px] mb-8" style={{ color: "#D4A853" }}>Paid Search + Nonprofit Campaigns</p>
      <div className="flex gap-12 flex-1">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={data} barGap={12}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={18} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={16} />
              <Tooltip contentStyle={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#FAFAF0" }} />
              <Legend wrapperStyle={{ fontSize: 16, color: "rgba(255,255,255,0.7)" }} />
              <Bar dataKey="paid" fill="#00A896" name="Paid Campaign" radius={[6, 6, 0, 0]} />
              <Bar dataKey="nonprofit" fill="#D4A853" name="Nonprofit Campaign" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-[380px] flex flex-col gap-4 justify-center">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${s.color}30` }}>
              <p className="text-[16px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
              <p className="text-[36px] font-bold" style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[16px] mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
        Note: campaign pause caused the drop at end of paid graph — not a performance issue.
      </p>
    </div>
  </SlideLayout>
);

export default Slide05GoogleAds;
