import SlideLayout from "../SlideLayout";
import { FileText, Image, Search, Globe } from "lucide-react";

const fixes = [
  { icon: FileText, title: "Header Structure", desc: "Site starts at H4 — skipping H1 through H3. Set H1 per page, H2 for major sections.", color: "#00A896" },
  { icon: Image, title: "Image Alt Tags", desc: "Add descriptive alt text to all images. Improves indexing and accessibility.", color: "#D4A853" },
  { icon: Search, title: "Keyword-Informed Copy", desc: "Use Keyword Planner or Semrush. Incorporate top terms into headings and page copy.", color: "#4A90D9" },
  { icon: Globe, title: "Cross-Platform Consistency", desc: "Hours, address, phone on the site must match Business Profile exactly. Mismatches hurt rankings.", color: "#E8725C" },
];

const Slide08SEO = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        SEO & AEO
      </h2>
      <p className="text-[22px] mb-10" style={{ color: "#D4A853" }}>Recommendations for Bokun + Christopher Marley site</p>
      <div className="rounded-xl p-6 mb-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <p className="text-[20px]" style={{ color: "rgba(255,255,255,0.7)" }}>
          Two recommendation documents produced: <span style={{ color: "#00A896" }}>1. From an SEO professional</span> · <span style={{ color: "#D4A853" }}>2. From AI-based analysis</span>
        </p>
      </div>
      <h3 className="text-[28px] font-semibold mb-8" style={{ color: "#FAFAF0" }}>Specific Fixes — No Backend Access Needed</h3>
      <div className="grid grid-cols-2 gap-8 flex-1">
        {fixes.map((f) => (
          <div key={f.title} className="rounded-xl p-7 flex gap-5" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${f.color}25` }}>
            <f.icon size={36} style={{ color: f.color }} className="mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-[24px] font-semibold mb-2" style={{ color: f.color }}>{f.title}</h4>
              <p className="text-[19px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[17px] mt-6" style={{ color: "rgba(255,255,255,0.4)" }}>
        SEO is easier to evaluate than to implement without backend access. The roadmap is documented — execution requires site access.
      </p>
    </div>
  </SlideLayout>
);

export default Slide08SEO;
