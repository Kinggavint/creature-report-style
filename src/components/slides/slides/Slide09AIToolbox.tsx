import SlideLayout from "../SlideLayout";
import { PenTool, Mail, Search, ClipboardList, MessageSquare, Type } from "lucide-react";

const tools = [
  { icon: PenTool, title: "Ad Copy", desc: "Draft headlines, descriptions, and campaign copy for Google Ads", color: "#00A896" },
  { icon: Mail, title: "Outreach", desc: "Write influencer DMs, email follow-ups, and partnership pitches", color: "#D4A853" },
  { icon: Search, title: "SEO Support", desc: "Summarize recommendations, generate header options, draft alt text", color: "#4A90D9" },
  { icon: ClipboardList, title: "Admin", desc: "Structure tasks, summarize documents, draft internal comms", color: "#E8725C" },
  { icon: MessageSquare, title: "Review Responses", desc: "Draft Google and TripAdvisor responses in appropriate tone", color: "#9B59B6" },
  { icon: Type, title: "Captions", desc: "Write TikTok, Instagram, RedNote captions with platform-specific voice", color: "#2ECC71" },
];

const Slide09AIToolbox = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        AI Toolbox
      </h2>
      <p className="text-[22px] mb-10" style={{ color: "#D4A853" }}>Built for Exquisite Creatures — practical, not generic</p>
      <div className="grid grid-cols-3 gap-8 flex-1">
        {tools.map((t) => (
          <div key={t.title} className="rounded-xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${t.color}25` }}>
            <t.icon size={36} style={{ color: t.color }} className="mb-4" />
            <h4 className="text-[24px] font-semibold mb-3" style={{ color: t.color }}>{t.title}</h4>
            <p className="text-[19px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{t.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-[17px] mt-6" style={{ color: "rgba(255,255,255,0.4)" }}>
        AI supports operations — it does not replace Christopher Marley's creative work. Review all outputs before publishing.
      </p>
    </div>
  </SlideLayout>
);

export default Slide09AIToolbox;
