import SlideLayout from "../SlideLayout";
import joyImg from "@/assets/slides/joy-forte.jpg";
import paytonImg from "@/assets/slides/payton-walling.jpg";
import gavinImg from "@/assets/slides/gavin-turnmire.png";

const team = [
  { name: "Joy Forte", role: "Team Leader", img: joyImg, desc: "Coordinated the group across the full semester. Scheduled weekly meetings, maintained regular contact with the sponsor, and kept the team aligned as workstream priorities shifted." },
  { name: "Payton Walling", role: "Project Manager", img: paytonImg, desc: "Responsible for making sure the project was on track. Social media manager for TikTok and YouTube. Headed the workplan, started influencer outreach, and consistently posted on social media." },
  { name: "Gavin Turnmire", role: "Digital Infrastructure", img: gavinImg, desc: "Responsible for Google Ads, GA4 + Tag Manager, SEO, Google Business Profile, and AI tooling." },
  { name: "Christy Shen", role: "Sponsor Liaison", img: null, desc: "Managed RedNote (Xiaohongshu) account. Targeted Chinese-speaking audience. Led influencer outreach on platforms and direct." },
  { name: "Julia Powell", role: "Report Manager", img: null, desc: "Created 20+ social media posts on TikTok. Recorded and organized team meeting notes. Partnership evaluation and technical support." },
];

const Slide02Team = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-16 py-12">
      <h2 className="text-[48px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Our Team
      </h2>
      <div className="w-20 h-1 rounded-full mb-8" style={{ background: "#D4A853" }} />
      <div className="grid grid-cols-5 gap-6 flex-1 items-start">
        {team.map((m) => (
          <div key={m.name} className="flex flex-col items-center text-center h-full">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-5 border-[3px] flex-shrink-0" style={{ borderColor: "#00A896" }}>
              {m.img ? (
                <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[48px] font-bold" style={{ background: "linear-gradient(135deg, rgba(0,168,150,0.2), rgba(212,168,83,0.15))", color: "#00A896" }}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
              )}
            </div>
            <h3 className="text-[26px] font-semibold mb-1" style={{ color: "#FAFAF0" }}>{m.name}</h3>
            <p className="text-[17px] font-medium mb-3" style={{ color: "#D4A853" }}>{m.role}</p>
            <p className="text-[15px] leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.65)" }}>{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide02Team;
