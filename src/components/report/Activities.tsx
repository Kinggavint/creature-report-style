import SectionHeader from "./SectionHeader";
import exhibit3 from "@/assets/exhibit-3.png";
import exhibit4 from "@/assets/exhibit-4.png";

const activities = [
  {
    category: "Digital Infrastructure",
    items: [
      "Google Analytics 4 property creation and configuration",
      "Google Tag Manager implementation for event tracking",
      "Google Ads account setup with campaign structure (Search, Display, Video)",
      "Google Ad Grant application and approval for nonprofit advertising",
      "Keyword research and ad copy development",
      "Landing page performance analysis and optimization recommendations",
      "Weekly performance reporting and optimization cycles",
    ],
  },
  {
    category: "Tourism & Transit",
    items: [
      "Google Business Profile audit and optimization",
      "Local transit partnership research (Lynx, SunRail, I-Ride)",
      "Visit Orlando listing review and enhancement suggestions",
      "Hotel concierge outreach strategy development",
      "Wayfinding and accessibility assessment",
      "Competitive analysis of similar attraction marketing",
    ],
  },
  {
    category: "Content & Social Media",
    items: [
      "Content audit of existing Orlando Science Center social channels",
      "Content calendar development (8-week plan)",
      "Photography and videography of exhibit specimens",
      "Instagram Reels and TikTok content production",
      "Hashtag strategy and community management guidelines",
      "Influencer outreach list and collaboration framework",
    ],
  },
  {
    category: "Community Engagement",
    items: [
      "Stakeholder mapping and community partner identification",
      "School field trip promotion strategy",
      "UCF student organization partnership development",
      "Community event concept proposals (Family Science Night, etc.)",
      "Feedback collection methodology design",
      "Accessibility and inclusion audit recommendations",
    ],
  },
];

const Activities = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="activities" title="List of Activities" accentColor="bg-secondary" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {activities.map((a) => (
          <div key={a.category}>
            <h3 className="font-serif text-xl font-semibold text-primary mb-3">{a.category}</h3>
            <ul className="space-y-2 ml-4">
              {a.items.map((item, i) => (
                <li key={i} className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-secondary mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="rounded-lg overflow-hidden border border-border sticky top-24">
          <img src={exhibit3} alt="Exhibit specimen" className="w-full h-auto" />
          <div className="p-3 bg-card">
            <p className="text-xs text-muted-foreground italic">Specimens from the Exquisite Creatures collection</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-border">
          <img src={exhibit4} alt="Exhibit detail" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </section>
);

export default Activities;
