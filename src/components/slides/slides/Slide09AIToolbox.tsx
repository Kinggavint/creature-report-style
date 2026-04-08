import SlideLayout from "../SlideLayout";
import { PenTool, Mail, Search, ClipboardList, MessageSquare, Type, Bot, Zap } from "lucide-react";

const tools = [
  { icon: PenTool, title: "Ad Copy & SEO", desc: "Draft Google Ads headlines and descriptions, generate keyword-informed copy, write meta titles and alt text", color: "#00A896" },
  { icon: Mail, title: "Outreach & Partnerships", desc: "Write influencer DMs, partnership proposals, tourism board pitches, and email follow-ups using structured prompt templates", color: "#D4A853" },
  { icon: Search, title: "Research & Analysis", desc: "Competitor keyword gap analysis, review sentiment analysis, weekly operations summaries from raw data", color: "#4A90D9" },
  { icon: ClipboardList, title: "Operations & SOPs", desc: "Generate meeting agendas, summarize notes into action items, write standard operating procedures for handoff", color: "#E8725C" },
  { icon: MessageSquare, title: "Review Responses", desc: "Draft personalized Google and TripAdvisor responses — positive, neutral, and negative — in brand-appropriate tone", color: "#9B59B6" },
  { icon: Type, title: "Social Captions", desc: "Write TikTok, Instagram, and RedNote captions with platform-specific voice, hashtags, and CTAs", color: "#2ECC71" },
];

const Slide09AIToolbox = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <div className="flex items-center gap-4 mb-2">
        <Bot size={40} style={{ color: "#00A896" }} />
        <h2 className="text-[44px] font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
          AI Toolbox
        </h2>
      </div>
      <p className="text-[22px] mb-3" style={{ color: "#D4A853" }}>Built for Exquisite Creatures — practical, not generic</p>
      <div className="flex items-center gap-3 mb-8 rounded-lg px-5 py-3" style={{ background: "rgba(0,168,150,0.06)", border: "1px solid rgba(0,168,150,0.15)" }}>
        <Zap size={20} style={{ color: "#00A896" }} />
        <p className="text-[17px]" style={{ color: "rgba(255,255,255,0.7)" }}>
          40+ purpose-built prompt templates across 6 categories — each with tool recommendations, expected outputs, and customizable variables.
          <span style={{ color: "#00A896" }}> Full library delivered as a separate interactive resource.</span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 flex-1">
        {tools.map((t) => (
          <div key={t.title} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${t.color}25` }}>
            <t.icon size={32} style={{ color: t.color }} className="mb-3" />
            <h4 className="text-[22px] font-semibold mb-2" style={{ color: t.color }}>{t.title}</h4>
            <p className="text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{t.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-[16px] mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
        AI supports operations — it does not replace Christopher Marley's creative work. Review all outputs before publishing.
      </p>
    </div>
  </SlideLayout>
);

export default Slide09AIToolbox;
