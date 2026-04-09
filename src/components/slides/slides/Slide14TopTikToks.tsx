import SlideLayout from "../SlideLayout";
import { Eye, Heart, Users } from "lucide-react";
import vid1Img from "@/assets/slides/tiktok-video1.png";
import vid2Img from "@/assets/slides/tiktok-video2.png";
import vid3Img from "@/assets/slides/tiktok-video3.png";
import vid4Img from "@/assets/slides/tiktok-video4.png";

const data = [
  { name: "Ethical Preservation", date: "Feb 20", img: vid1Img, views: "73K", likes: "12K", newFollowers: "240" },
  { name: "Sea Creatures", date: "Mar 7", img: vid2Img, views: "67K", likes: "5,855", newFollowers: "269" },
  { name: "Kaleidoscope", date: "Mar 3", img: vid3Img, views: "264K", likes: "63K", newFollowers: "1,060" },
  { name: "Collection Tour", date: "Feb 25", img: vid4Img, views: "188K", likes: "47K", newFollowers: "2,192" },
];

const Slide14TopTikToks = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-14 py-12">
      <h2 className="text-[44px] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Highest Performing TikToks
      </h2>
      <p className="text-[20px] mb-6" style={{ color: "#D4A853" }}>Video Analysis · Updated 3/30/2026</p>

      <div className="grid grid-cols-4 gap-6 flex-1">
        {data.map((d, i) => (
          <div key={i} className="rounded-xl flex flex-col overflow-hidden h-full" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {/* Screenshot - taller */}
            <div className="h-[420px] overflow-hidden flex-shrink-0">
              <img src={d.img} alt={d.name} className="w-full h-full object-cover object-top" />
            </div>

            {/* Key metrics */}
            <div className="px-5 py-5 flex flex-col gap-4 flex-1 justify-center">
              <div className="flex items-center gap-3">
                <Eye size={20} style={{ color: "#00A896" }} />
                <span className="text-[18px]" style={{ color: "rgba(255,255,255,0.5)" }}>Views</span>
                <span className="text-[22px] font-bold ml-auto" style={{ color: "#00A896" }}>{d.views}</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart size={20} style={{ color: "#E8725C" }} />
                <span className="text-[18px]" style={{ color: "rgba(255,255,255,0.5)" }}>Likes</span>
                <span className="text-[22px] font-bold ml-auto" style={{ color: "#E8725C" }}>{d.likes}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users size={20} style={{ color: "#D4A853" }} />
                <span className="text-[18px]" style={{ color: "rgba(255,255,255,0.5)" }}>Followers</span>
                <span className="text-[22px] font-bold ml-auto" style={{ color: "#D4A853" }}>+{d.newFollowers}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide14TopTikToks;
