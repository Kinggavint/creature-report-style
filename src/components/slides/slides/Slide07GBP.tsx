import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Search Appearances", value: 20230, fill: "#00A896" },
  { name: "Map Views", value: 18148, fill: "#4A90D9" },
  { name: "Website Clicks", value: 6800, fill: "#D4A853" },
  { name: "Direction Requests", value: 2404, fill: "#E8725C" },
];

const Slide07GBP = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Google Business Profile
      </h2>
      <p className="text-[22px] mb-8" style={{ color: "#D4A853" }}>Local search + Maps visibility</p>
      <div className="flex gap-12 flex-1">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={520}>
            <BarChart data={data} layout="vertical" barSize={40}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis type="number" stroke="rgba(255,255,255,0.5)" fontSize={16} />
              <YAxis type="category" dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={16} width={180} />
              <Tooltip contentStyle={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#FAFAF0" }} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {data.map((entry, i) => (
                  <rect key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-[420px] flex flex-col gap-6 justify-center">
          <div className="rounded-xl p-6" style={{ background: "rgba(0,168,150,0.05)", border: "1px solid rgba(0,168,150,0.2)" }}>
            <p className="text-[18px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Total Profile Views</p>
            <p className="text-[48px] font-bold" style={{ color: "#00A896" }}>47,582</p>
          </div>
          <div className="rounded-xl p-6" style={{ background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.2)" }}>
            <p className="text-[18px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Profile Interactions</p>
            <p className="text-[48px] font-bold" style={{ color: "#D4A853" }}>36,627</p>
          </div>
          <div className="rounded-xl p-6" style={{ background: "rgba(74,144,217,0.05)", border: "1px solid rgba(74,144,217,0.2)" }}>
            <p className="text-[18px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Search Appearances</p>
            <p className="text-[48px] font-bold" style={{ color: "#4A90D9" }}>22,890</p>
          </div>
          <p className="text-[18px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            The audience is finding the exhibit on their phones. Mobile is the primary discovery channel.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide07GBP;
