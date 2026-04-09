import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "JoinBrands", received: 12, sent: 2, accepted: 3, completed: 1 },
  { name: "Afluencer", received: 8, sent: 1, accepted: 3, completed: 0 },
];

const Slide21PlatformPerf = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Platform Performance
      </h2>
      <div className="w-20 h-1 rounded-full mb-10" style={{ background: "#D4A853" }} />
      <div className="flex gap-12 flex-1">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={data} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={20} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={16} />
              <Tooltip contentStyle={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#FAFAF0" }} />
              <Legend wrapperStyle={{ fontSize: 16 }} />
              <Bar dataKey="received" fill="#00A896" name="Apps Received" radius={[4, 4, 0, 0]} />
              <Bar dataKey="sent" fill="#D4A853" name="Apps Sent" radius={[4, 4, 0, 0]} />
              <Bar dataKey="accepted" fill="#4A90D9" name="Accepted" radius={[4, 4, 0, 0]} />
              <Bar dataKey="completed" fill="#E8725C" name="Completed" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-[380px] flex flex-col gap-6 justify-center">
          <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 className="text-[22px] font-semibold mb-4" style={{ color: "#9B59B6" }}>JoinBrands</h3>
            <p className="text-[18px]" style={{ color: "rgba(255,255,255,0.7)" }}>12 received · 2 sent · 3 accepted · <span className="font-bold" style={{ color: "#00A896" }}>1 completed</span></p>
          </div>
          <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 className="text-[22px] font-semibold mb-4" style={{ color: "#2ECC71" }}>Afluencer</h3>
            <p className="text-[18px]" style={{ color: "rgba(255,255,255,0.7)" }}>8 received · 1 sent · 3 accepted · 0 completed</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide21PlatformPerf;
