import SlideLayout from "../SlideLayout";
import { Eye, Heart, Share2, Users, Clock, Play, MessageCircle, Bookmark, Timer } from "lucide-react";
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

            {/* Title */}
            <div className="px-4 pt-3 pb-2 flex items-center justify-between">
              <h3 className="text-[18px] font-bold" style={{ color: "#FAFAF0" }}>{d.name}</h3>
              <span className="text-[12px] px-2 py-0.5 rounded-full" style={{ background: "rgba(212,168,83,0.15)", color: "#D4A853" }}>{d.date}</span>
            </div>

            {/* Key metrics grid */}
            <div className="px-4 pb-3 grid grid-cols-2 gap-x-4 gap-y-2 flex-1">
              <div className="flex items-center gap-2">
                <Eye size={14} style={{ color: "#00A896" }} />
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Views</span>
                <span className="text-[14px] font-bold ml-auto" style={{ color: "#00A896" }}>{d.views}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={14} style={{ color: "#E8725C" }} />
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Likes</span>
                <span className="text-[14px] font-bold ml-auto" style={{ color: "#E8725C" }}>{d.likes}</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 size={14} style={{ color: "#4A90D9" }} />
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Shares</span>
                <span className="text-[14px] font-bold ml-auto" style={{ color: "#4A90D9" }}>{d.shares}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bookmark size={14} style={{ color: "#9B8BB4" }} />
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Saves</span>
                <span className="text-[14px] font-bold ml-auto" style={{ color: "#9B8BB4" }}>{d.saves}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} style={{ color: "#D4A853" }} />
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Followers</span>
                <span className="text-[14px] font-bold ml-auto" style={{ color: "#D4A853" }}>+{d.newFollowers}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={14} style={{ color: "#7EC8A0" }} />
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>Comments</span>
                <span className="text-[14px] font-bold ml-auto" style={{ color: "#7EC8A0" }}>{d.comments}</span>
              </div>
            </div>

            {/* Watch metrics */}
            <div className="px-4 pb-4 pt-1 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="flex justify-between text-[12px] mt-2">
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Avg Watch: <strong style={{ color: "#FAFAF0" }}>{d.avgWatch}</strong></span>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Full: <strong style={{ color: "#FAFAF0" }}>{d.fullWatch}</strong></span>
              </div>
              <div className="flex justify-center text-[12px] mt-1">
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Total Play: <strong style={{ color: "#FAFAF0" }}>{d.totalPlay}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide14TopTikToks;
