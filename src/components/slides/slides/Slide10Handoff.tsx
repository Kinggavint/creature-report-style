import SlideLayout from "../SlideLayout";
import { CheckCircle, AlertTriangle, FileCheck, Bot, Building, BookOpen } from "lucide-react";

const items = [
  { icon: CheckCircle, tool: "Google Ads", status: "Active", statusColor: "#2ECC71", details: "Live campaigns + 2 drafts ready. Keyword list complete. Turn it on." },
  { icon: AlertTriangle, tool: "GA4 + Tag Manager", status: "Fix Needed", statusColor: "#D4A853", details: "Setup is done. One tag fix needed before next campaign." },
  { icon: FileCheck, tool: "SEO Docs", status: "Ready", statusColor: "#4A90D9", details: "Two recommendation documents. Quick fixes don't need backend access." },
  { icon: Bot, tool: "AI Toolbox", status: "Ready", statusColor: "#4A90D9", details: "Decision guide + prompt library written specifically for Exquisite Creatures." },
  { icon: Building, tool: "Business Profile", status: "Active", statusColor: "#2ECC71", details: "Review workflow, photo cadence, and posting guide documented." },
  { icon: BookOpen, tool: "User Guide", status: "Complete", statusColor: "#00A896", details: "Full guide covering all workstreams — written for whoever picks this up next." },
];

const Slide10Handoff = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Built to Last
      </h2>
      <p className="text-[22px] mb-10" style={{ color: "#D4A853" }}>Everything is documented so Allison can manage without starting over.</p>
      <div className="flex-1">
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Header */}
          <div className="grid grid-cols-[200px_140px_1fr] gap-4 px-8 py-4" style={{ background: "rgba(0,168,150,0.1)" }}>
            <p className="text-[18px] font-semibold" style={{ color: "#00A896" }}>Tool</p>
            <p className="text-[18px] font-semibold" style={{ color: "#00A896" }}>Status</p>
            <p className="text-[18px] font-semibold" style={{ color: "#00A896" }}>Details</p>
          </div>
          {items.map((item, i) => (
            <div key={item.tool} className="grid grid-cols-[200px_140px_1fr] gap-4 px-8 py-5 items-center"
              style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-3">
                <item.icon size={20} style={{ color: "#00A896" }} />
                <p className="text-[19px] font-medium" style={{ color: "#FAFAF0" }}>{item.tool}</p>
              </div>
              <span className="text-[16px] font-medium px-3 py-1 rounded-full text-center" style={{ background: `${item.statusColor}20`, color: item.statusColor }}>
                {item.status}
              </span>
              <p className="text-[18px]" style={{ color: "rgba(255,255,255,0.7)" }}>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[18px] mt-6 text-center italic" style={{ color: "rgba(255,255,255,0.4)" }}>
        "The goal was a system Allison can run — not a project someone has to rebuild."
      </p>
    </div>
  </SlideLayout>
);

export default Slide10Handoff;
