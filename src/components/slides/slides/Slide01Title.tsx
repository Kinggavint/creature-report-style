import SlideLayout from "../SlideLayout";
import heroImg from "@/assets/hero-storefront.png";

const Slide01Title = () => (
  <SlideLayout>
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(26,26,46,0.9) 100%)" }} />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-20">
      <div className="w-24 h-1 rounded-full mb-12" style={{ background: "linear-gradient(90deg, #00A896, #D4A853)" }} />
      <h1 className="text-[72px] font-bold leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif", color: "#FAFAF0" }}>
        Exquisite Creatures Exhibit
      </h1>
      <p className="text-[36px] font-light mb-4" style={{ color: "#D4A853" }}>
        OCI Final Presentation
      </p>
      <p className="text-[28px] font-light" style={{ color: "rgba(255,255,255,0.6)" }}>
        Spring 2026
      </p>
      <div className="w-24 h-1 rounded-full mt-12" style={{ background: "linear-gradient(90deg, #D4A853, #00A896)" }} />
    </div>
  </SlideLayout>
);

export default Slide01Title;
