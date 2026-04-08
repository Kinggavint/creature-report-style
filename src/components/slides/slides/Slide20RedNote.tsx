import SlideLayout from "../SlideLayout";

const Slide20RedNote = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Christy Shen — Sponsor Liaison
      </h2>
      <div className="w-20 h-1 rounded-full mb-10" style={{ background: "#D4A853" }} />
      <div className="flex gap-10 flex-1">
        <div className="flex-1">
          <div className="rounded-xl p-8 mb-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 className="text-[28px] font-semibold mb-6" style={{ color: "#00A896" }}>Goals</h3>
            <ul className="space-y-3">
              {["Increase ticket sales", "Reach new audiences", "5 influencer collaborations"].map((g, i) => (
                <li key={i} className="text-[20px] flex gap-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "#D4A853" }}>→</span><span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 className="text-[28px] font-semibold mb-6" style={{ color: "#00A896" }}>What I Did</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-[20px] font-semibold mb-3" style={{ color: "#D4A853" }}>RedNote</h4>
                <ul className="space-y-2">
                  {["Posted 5 videos (March)", "Used engaging captions + hashtags", "Used auto-translation (matches user language)"].map((t, i) => (
                    <li key={i} className="text-[17px] flex gap-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span style={{ color: "#00A896" }}>•</span><span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[20px] font-semibold mb-3" style={{ color: "#D4A853" }}>Influencer Marketing</h4>
                <ul className="space-y-2">
                  {["Launched 2 campaigns (JoinBrands + Afluencer)", "Reviewed applicants (content, engagement, fit)", "Coordinated influencer visits"].map((t, i) => (
                    <li key={i} className="text-[17px] flex gap-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span style={{ color: "#00A896" }}>•</span><span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[380px] flex flex-col gap-6 justify-center">
          <div className="rounded-xl p-6" style={{ background: "rgba(0,168,150,0.05)", border: "1px solid rgba(0,168,150,0.2)" }}>
            <p className="text-[16px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Managed</p>
            <p className="text-[28px] font-bold" style={{ color: "#00A896" }}>RedNote (Xiaohongshu)</p>
          </div>
          <div className="rounded-xl p-6" style={{ background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.2)" }}>
            <p className="text-[16px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Targeted</p>
            <p className="text-[28px] font-bold" style={{ color: "#D4A853" }}>Chinese-speaking audience</p>
          </div>
          <div className="rounded-xl p-6" style={{ background: "rgba(74,144,217,0.05)", border: "1px solid rgba(74,144,217,0.2)" }}>
            <p className="text-[16px] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Direct Outreach</p>
            <p className="text-[28px] font-bold" style={{ color: "#4A90D9" }}>Contacted creators on Instagram</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide20RedNote;
