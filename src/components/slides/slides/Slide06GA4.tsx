import SlideLayout from "../SlideLayout";
import { CheckCircle, AlertTriangle, Wrench, BarChart3, Tag, MousePointer } from "lucide-react";

const setupItems = [
  { icon: BarChart3, text: "GA4 property created and connected to exquisitecreatures.art domain" },
  { icon: Tag, text: "Google Tag Manager container installed — fires pageview + event tags" },
  { icon: MousePointer, text: "Conversion tracking scaffolding: ticket clicks, outbound links, scroll depth events configured" },
];

const Slide06GA4 = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Google Analytics + Tag Manager
      </h2>
      <div className="w-20 h-1 rounded-full mb-10" style={{ background: "#D4A853" }} />
      <div className="grid grid-cols-3 gap-8 flex-1 items-start">
        {/* What We Set Up */}
        <div className="rounded-xl p-7 h-full" style={{ background: "rgba(0,168,150,0.05)", border: "1px solid rgba(0,168,150,0.2)" }}>
          <CheckCircle size={44} style={{ color: "#00A896" }} className="mb-5" />
          <h3 className="text-[26px] font-semibold mb-5" style={{ color: "#00A896" }}>What We Set Up</h3>
          <div className="space-y-5">
            {setupItems.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <item.icon size={20} style={{ color: "#00A896" }} className="mt-1 flex-shrink-0" />
                <p className="text-[18px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Issue */}
        <div className="rounded-xl p-7 h-full" style={{ background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.2)" }}>
          <AlertTriangle size={44} style={{ color: "#D4A853" }} className="mb-5" />
          <h3 className="text-[26px] font-semibold mb-5" style={{ color: "#D4A853" }}>Issue Encountered</h3>
          <p className="text-[18px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
            GA4 stopped recording data after initial setup. Tag Manager showed tags firing in preview mode, but data did not populate in GA4 reports.
          </p>
          <p className="text-[18px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Root cause: a <span style={{ color: "#D4A853", fontWeight: 600 }}>tag configuration mismatch</span> between the GTM container and the GA4 measurement ID — not a structural failure.
          </p>
        </div>

        {/* Fix & Next Steps */}
        <div className="rounded-xl p-7 h-full" style={{ background: "rgba(74,144,217,0.05)", border: "1px solid rgba(74,144,217,0.2)" }}>
          <Wrench size={44} style={{ color: "#4A90D9" }} className="mb-5" />
          <h3 className="text-[26px] font-semibold mb-5" style={{ color: "#4A90D9" }}>Fix & Next Steps</h3>
          <div className="space-y-4">
            {[
              "Verify measurement ID in GTM matches GA4 property",
              "Re-publish GTM container after correction",
              "Validate with GA4 Realtime + GTM Preview before restarting ad campaigns",
              "Once confirmed, enable enhanced measurement (scroll, outbound clicks, file downloads)",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-[14px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(74,144,217,0.15)", color: "#4A90D9" }}>{i + 1}</span>
                <p className="text-[18px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[16px] mt-5" style={{ color: "rgba(255,255,255,0.4)" }}>
        GA4 must be verified before restarting any paid campaigns — without it, spend data is unaccountable.
      </p>
    </div>
  </SlideLayout>
);

export default Slide06GA4;
