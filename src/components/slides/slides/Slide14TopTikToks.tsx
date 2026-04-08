import SlideLayout from "../SlideLayout";
import { Eye, Heart, Users } from "lucide-react";
import vid1Img from "@/assets/slides/tiktok-video1.png";
import vid2Img from "@/assets/slides/tiktok-video2.png";
import vid3Img from "@/assets/slides/tiktok-video3.png";
import vid4Img from "@/assets/slides/tiktok-video4.png";

const data = [
  { name: "Ethical Preservation", date: "Feb 20", img: vid1Img, views: "73K", likes: "12K", comments: "30", shares: "450", saves: "1,650", newFollowers: "240", avgWatch: "1.8s", fullWatch: "3.54%", totalPlay: "231h:52m" },
  { name: "Sea Creatures", date: "Mar 7", img: vid2Img, views: "67K", likes: "5,855", comments: "53", shares: "368", saves: "518", newFollowers: "269", avgWatch: "9.5s", fullWatch: "14.88%", totalPlay: "178h:52m" },
  { name: "Kaleidoscope", date: "Mar 3", img: vid3Img, views: "264K", likes: "63K", comments: "153", shares: "3,786", saves: "7,351", newFollowers: "1,060", avgWatch: "1.2s", fullWatch: "1.65%", totalPlay: "971h:15m" },
  { name: "Collection Tour", date: "Feb 25", img: vid4Img, views: "188K", likes: "47K", comments: "118", shares: "1,586", saves: "6,692", newFollowers: "2,192", avgWatch: "1.2s", fullWatch: "1.8%", totalPlay: "718h:31m" },
];

const Slide14TopTikToks = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-16 py-14">
      <h2 className="text-[40px] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Highest Performing TikToks
      </h2>
      <p className="text-[20px] mb-6" style={{ color: "#D4A853" }}>Video Analysis · Updated 3/30/2026</p>

      <div className="grid grid-cols-4 gap-5 flex-1">
        {data.map((d, i) => (
          <div key={i} className="rounded-xl flex flex-col overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {/* Screenshot */}
            <div className="h-[220px] overflow-hidden flex-shrink-0">
              <img src={d.img} alt={d.name} className="w-full h-full object-cover object-top" />
            </div>

            {/* Key metrics */}
            <div className="px-4 py-4 flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-2">
                <Eye size={16} style={{ color: "#00A896" }} />
                <span className="text-[15px]" style={{ color: "rgba(255,255,255,0.5)" }}>Views</span>
                <span className="text-[18px] font-bold ml-auto" style={{ color: "#00A896" }}>{d.views}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={16} style={{ color: "#E8725C" }} />
                <span className="text-[15px]" style={{ color: "rgba(255,255,255,0.5)" }}>Likes</span>
                <span className="text-[18px] font-bold ml-auto" style={{ color: "#E8725C" }}>{d.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} style={{ color: "#D4A853" }} />
                <span className="text-[15px]" style={{ color: "rgba(255,255,255,0.5)" }}>Followers</span>
                <span className="text-[18px] font-bold ml-auto" style={{ color: "#D4A853" }}>+{d.newFollowers}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide14TopTikToks;
