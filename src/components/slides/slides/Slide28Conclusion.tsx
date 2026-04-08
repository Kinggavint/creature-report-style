import SlideLayout from "../SlideLayout";
import heroImg from "@/assets/hero-storefront.png";

const Slide28Conclusion = () => (
  <SlideLayout>
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(26,26,46,0.95) 100%)" }} />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-32">
      <h2 className="text-[52px] font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Conclusion
      </h2>
      <div className="w-24 h-1 rounded-full mb-10" style={{ background: "linear-gradient(90deg, #00A896, #D4A853)" }} />
      <div className="rounded-xl p-8 mb-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <p className="text-[22px] font-medium mb-4" style={{ color: "#D4A853" }}>Our Question:</p>
        <p className="text-[24px] italic leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
          Can we use social media, Google Ads, marketing, and influencers to increase ticket sales and awareness?
        </p>
      </div>
      <div className="rounded-xl p-8" style={{ background: "rgba(0,168,150,0.04)", border: "1px solid rgba(0,168,150,0.15)" }}>
        <p className="text-[22px] font-medium mb-4" style={{ color: "#00A896" }}>Answer:</p>
        <p className="text-[22px] leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
          We now know that social media and influencers can increase awareness of the exhibit and potentially bring in more visitors. Due to Google Ads, our website was being shown more and creating a stronger image of our brand to consumers. We have high hopes that with continual use, and new implementation of VisitSeattle and bus advertising, we will bring in more visitors to the Exquisite Creatures Exhibit in the following months.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default Slide28Conclusion;
