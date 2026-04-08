import SlideLayout from "../SlideLayout";
import { CheckCircle, AlertTriangle, Wrench } from "lucide-react";

const Slide06GA4 = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Google Analytics + Tag Manager
      </h2>
      <div className="w-20 h-1 rounded-full mb-12" style={{ background: "#D4A853" }} />
      <div className="grid grid-cols-3 gap-10 flex-1 items-start">
        <div className="rounded-xl p-8 h-full" style={{ background: "rgba(0,168,150,0.05)", border: "1px solid rgba(0,168,150,0.2)" }}>
          <CheckCircle size={48} style={{ color: "#00A896" }} className="mb-6" />
          <h3 className="text-[28px] font-semibold mb-6" style={{ color: "#00A896" }}>What We Set Up</h3>
          <ul className="space-y-4">
            {["GA4 configured and connected to campaigns", "Google Tag Manager installed and linked", "Conversion tracking scaffolding in place"].map((t, i) => (
              <li key={i} className="text-[20px] leading-relaxed flex gap-3" style={{ color: "rgba(255,255,255,0.75)" }}>
                <span style={{ color: "#00A896" }}>•</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-8 h-full" style={{ background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.2)" }}>
          <AlertTriangle size={48} style={{ color: "#D4A853" }} className="mb-6" />
          <h3 className="text-[28px] font-semibold mb-6" style={{ color: "#D4A853" }}>Issue</h3>
          <p className="text-[20px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            GA4 stopped recording after initial setup. This is a tag configuration issue — not a structural failure.
          </p>
        </div>
        <div className="rounded-xl p-8 h-full" style={{ background: "rgba(74,144,217,0.05)", border: "1px solid rgba(74,144,217,0.2)" }}>
          <Wrench size={48} style={{ color: "#4A90D9" }} className="mb-6" />
          <h3 className="text-[28px] font-semibold mb-6" style={{ color: "#4A90D9" }}>Fix</h3>
          <p className="text-[20px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Fix GA4 tag before restarting any campaigns.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide06GA4;
