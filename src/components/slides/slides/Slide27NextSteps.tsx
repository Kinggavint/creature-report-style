import SlideLayout from "../SlideLayout";

const steps = [
  { num: "1", title: "Fix GA4 tracking", desc: "Before any campaign restarts. Without it, spend data is unaccountable.", color: "#E8725C" },
  { num: "2", title: "Restart Google Ads", desc: "Structure is built. Turn it on. Review clicks, impressions, and CPC weekly.", color: "#00A896" },
  { num: "3", title: "Continue social media posting", desc: "Post daily to maintain likes, views, followers, and professional status. Take new exhibit videos and engage with comments.", color: "#2ECC71" },
  { num: "4", title: "Use the AI Toolbox", desc: "Pick one recurring task. Find the section. Use it. Repeat.", color: "#D4A853" },
  { num: "5", title: "Execute SEO quick wins", desc: "Fix header structure and add alt tags. No backend access required.", color: "#4A90D9" },
  { num: "6", title: "Complete Visit Seattle build", desc: "Finish extranet setup. Add GA4 referral tracking once it's live.", color: "#9B59B6" },
];

const Slide27NextSteps = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Next Steps
      </h2>
      <p className="text-[22px] mb-8" style={{ color: "#D4A853" }}>The next 30–60 days</p>
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-6 rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${s.color}25` }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-[20px] font-bold flex-shrink-0" style={{ background: `${s.color}20`, color: s.color }}>
                {s.num}
              </div>
              <div>
                <h3 className="text-[22px] font-semibold mb-1" style={{ color: s.color }}>{s.title}</h3>
                <p className="text-[18px]" style={{ color: "rgba(255,255,255,0.7)" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide27NextSteps;
