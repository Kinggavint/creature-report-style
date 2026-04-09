import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const data = [
  { month: "Oct 2025", avg: 49 },
  { month: "Nov 2025", avg: 95 },
  { month: "Dec 2025", avg: 130 },
  { month: "Jan 2026", avg: 175 },
  { month: "Feb 2026", avg: 205 },
  { month: "Mar–Apr 2026", avg: 155 },
];

const summaryCards = [
  { label: "Oct–Feb total", value: "23,005", sub: "5-month cumulative" },
  { label: "2026 YTD", value: "18,396", sub: "Jan 1–Apr 3" },
  { label: "Mar 1–Apr 3", value: "5,744", sub: "~167/day avg" },
  { label: "Growth since Oct", value: "+339%", sub: "49 → 215/day" },
];

const Slide29TicketSales = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <p className="text-[16px] font-semibold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Impact Summary</p>
      <h2 className="text-[44px] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#FAFAF0" }}>
        Ticket Sales — Oct 2025 to Apr 2026
      </h2>
      <p className="text-[20px] mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>Exquisite Creatures Exhibit, Seattle</p>

      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {summaryCards.map((c) => (
          <div key={c.label} className="rounded-xl px-6 py-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[15px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{c.label}</p>
            <p className="text-[36px] font-bold" style={{ color: "#FAFAF0" }}>{c.value}</p>
            <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.35)" }}>{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="flex-1 rounded-xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ background: "#4A90D9" }} />
            <span className="text-[15px]" style={{ color: "rgba(255,255,255,0.6)" }}>Daily avg tickets sold</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px]" style={{ background: "#E8725C" }} />
            <span className="text-[15px]" style={{ color: "rgba(255,255,255,0.6)" }}>500/day goal</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} barSize={80}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" fontSize={16} tickLine={false} />
            <YAxis stroke="rgba(255,255,255,0.4)" fontSize={14} tickLine={false} tickFormatter={(v) => `${v}/day`} domain={[0, 600]} ticks={[0, 100, 200, 300, 400, 500, 600]} />
            <Tooltip contentStyle={{ background: "#1A1A2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#FAFAF0" }} formatter={(v: number) => [`${v}/day`, "Daily avg"]} />
            <ReferenceLine y={500} stroke="#E8725C" strokeDasharray="8 6" strokeWidth={2} />
            <Bar dataKey="avg" fill="#4A90D9" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom insight */}
      <div className="mt-4 rounded-lg px-6 py-4 flex items-start gap-3" style={{ borderLeft: "4px solid #4A90D9", background: "rgba(74,144,217,0.06)" }}>
        <p className="text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          Daily sales grew <span className="font-bold" style={{ color: "#FAFAF0" }}>339%</span> from launch to February. The exhibit averaged <span className="font-bold" style={{ color: "#FAFAF0" }}>215 tickets/day</span> by Feb 2026, with <span className="font-bold" style={{ color: "#FAFAF0" }}>23,005 total</span> sold through that period. The 500/day goal remains the next threshold — current trajectory and marketing infrastructure are in place to reach it.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default Slide29TicketSales;
