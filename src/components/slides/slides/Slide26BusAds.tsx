import SlideLayout from "../SlideLayout";
import { Bus, Calendar, Users, Eye } from "lucide-react";

const Slide26BusAds = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        King County Bus Advertising
      </h2>
      <p className="text-[22px] mb-8" style={{ color: "#D4A853" }}>King County Metro unlocks a time-sensitive advertising opportunity</p>
      <div className="flex gap-10 flex-1 items-center">
        <div className="flex-1 space-y-5">
          {[
            { icon: Bus, text: "Contact made and meeting set up with Neal", color: "#00A896" },
            { icon: Users, text: "Gives the exhibit access to a much larger tourist audience", color: "#D4A853" },
            { icon: Calendar, text: "Bus advertising space secured for World Cup season", color: "#4A90D9" },
            { icon: Eye, text: "Reach visitors during one of the highest-traffic periods of the year", color: "#E8725C" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5 rounded-xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${item.color}25` }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15` }}>
                <item.icon size={28} style={{ color: item.color }} />
              </div>
              <p className="text-[22px] leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="w-[440px]">
          <div className="rounded-2xl p-12 text-center" style={{ background: "linear-gradient(135deg, rgba(0,168,150,0.1) 0%, rgba(212,168,83,0.1) 100%)", border: "2px solid rgba(0,168,150,0.3)" }}>
            <p className="text-[22px] mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Total Projected Impressions</p>
            <p className="text-[72px] font-bold" style={{ color: "#00A896" }}>22.6M</p>
            <p className="text-[20px] mt-3" style={{ color: "#D4A853" }}>22,680,153</p>
          </div>
          <div className="mt-6 rounded-xl p-6 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[18px]" style={{ color: "rgba(255,255,255,0.6)" }}>Format: <span className="font-semibold" style={{ color: "#FAFAF0" }}>Ultra Super King</span></p>
            <p className="text-[16px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Most major advertisers have already reserved World Cup inventory</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide26BusAds;
