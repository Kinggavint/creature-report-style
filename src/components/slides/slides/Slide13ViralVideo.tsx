import SlideLayout from "../SlideLayout";
import viralImg from "@/assets/slides/tiktok-viral.jpg";

const Slide13ViralVideo = () => (
  <SlideLayout>
    <div className="flex h-full px-20 py-16 gap-12">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
          Most Viral Video to Date
        </h2>
        <div className="w-20 h-1 rounded-full mb-10" style={{ background: "#D4A853" }} />
        <p className="text-[24px] italic mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
          "What 25+ years of ethically preserving creatures looks like"
        </p>
        <div className="flex gap-8">
          <div className="rounded-xl p-6" style={{ background: "rgba(0,168,150,0.05)", border: "1px solid rgba(0,168,150,0.2)" }}>
            <p className="text-[16px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Likes</p>
            <p className="text-[48px] font-bold" style={{ color: "#00A896" }}>65.2K</p>
          </div>
          <div className="rounded-xl p-6" style={{ background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.2)" }}>
            <p className="text-[16px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Views</p>
            <p className="text-[48px] font-bold" style={{ color: "#D4A853" }}>271.2K</p>
          </div>
        </div>
      </div>
      <div className="w-[400px] flex items-center justify-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <img src={viralImg} alt="Most viral TikTok video" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide13ViralVideo;
