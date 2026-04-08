import SlideLayout from "../SlideLayout";
import exhibitImg from "@/assets/exhibit-1.png";

const Slide04InsightDigital = () => (
  <SlideLayout>
    <div className="absolute inset-0">
      <img src={exhibitImg} alt="" className="w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(26,26,46,0.95) 100%)" }} />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-20">
      <p className="text-[22px] font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#D4A853" }}>Key Insight 1</p>
      <h2 className="text-[64px] font-bold leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#FAFAF0" }}>
        Digital Infrastructure Drove<br />Measurable Awareness
      </h2>
      <div className="w-32 h-1 rounded-full mb-8" style={{ background: "linear-gradient(90deg, #00A896, #D4A853)" }} />
      <p className="text-[24px]" style={{ color: "rgba(255,255,255,0.5)" }}>
        Google Ads · GA4 + Tag Manager · SEO · Google Business Profile · AI Toolbox
      </p>
    </div>
  </SlideLayout>
);

export default Slide04InsightDigital;
