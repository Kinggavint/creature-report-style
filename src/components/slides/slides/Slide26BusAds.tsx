import SlideLayout from "../SlideLayout";
import { Bus, Calendar, Users, Eye } from "lucide-react";

const Slide26BusAds = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        King County Bus Advertising
      </h2>
      <p className="text-[22px] mb-10" style={{ color: "#D4A853" }}>King County Metro unlocks a time-sensitive advertising opportunity</p>
      <div className="flex gap-12 flex-1 items-center">
        <div className="flex-1 space-y-6">
          {[
            { icon: Bus, text: "Contact made and meeting set up with Neal" },
            { icon: Users, text: "Gives the exhibit access to a much larger tourist audience" },
            { icon: Calendar, text: "Bus advertising space secured for World Cup season" },
            { icon: Eye, text: "Reach visitors during one of the highest-traffic periods of the year" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5 rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <item.icon size={28} style={{ color: "#00A896" }} className="flex-shrink-0" />
              <p className="text-[22px]" style={{ color: "rgba(255,255,255,0.8)" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="w-[400px]">
          <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(0,168,150,0.1) 0%, rgba(212,168,83,0.1) 100%)", border: "2px solid rgba(0,168,150,0.3)" }}>
            <p className="text-[20px] mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Total Projected Impressions</p>
            <p className="text-[64px] font-bold" style={{ color: "#00A896" }}>22.6M</p>
            <p className="text-[18px] mt-2" style={{ color: "#D4A853" }}>22,680,153</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide26BusAds;
