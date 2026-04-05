import SectionHeader from "./SectionHeader";
import exhibit3 from "@/assets/exhibit-3.png";
import exhibit4 from "@/assets/exhibit-4.png";

const activities = [
  {
    category: "TikTok and Social Media",
    items: [
      "TikTok posts: 31 total posts across the semester, a mix of video posts and carousels, produced and managed by Joy, Payton, and Julia.",
      "YouTube Shorts: 9 total Shorts uploaded to the exhibit's YouTube channel, repurposed from TikTok videos.",
      "Viral videos: Julia's top video reached 268,300 views; Payton's top video reached 183,500 views. Three additional videos reached 67,000, 70,000, and 190,000 views respectively.",
      "Analytics review: Performance data tracked weekly, including views, watch time, shares, and follower growth, used to adjust format and posting schedule.",
    ],
  },
  {
    category: "RedNote and Influencer Marketing",
    items: [
      "RedNote account: Account created in early March and registered as a business account by end of March. Five posts published within the first month using videos from the shared drive and original content built from exhibit photos.",
      "JoinBrands campaign: One active campaign launched. Received 8 applications. Reviewed applicants based on content quality, engagement rate, and Seattle-local status.",
      "Afluencer campaign: One active campaign launched. Received 6 applications. Reviewed using the same criteria as JoinBrands.",
      "Total influencer applicants: 14 across both platforms. 9 were Seattle-based creators.",
      "Influencer collaboration, Yana: One influencer selected and approved. She visited the exhibit and created content for both Instagram and TikTok. Her video reached approximately 2,500 views.",
      "Direct Instagram outreach: Reached out individually to influencers focused on art, travel, and local experiences, with personalized messages.",
      "Brand ambassador meetings: Met with representatives from multiple platforms to evaluate options before committing to JoinBrands and Afluencer.",
      "Exhibit manager coordination: Coordinated in-person visits with the Exquisite Creatures manager to support influencer collaborations.",
      "TikTok influencer tracker (Payton to Christy): Initial tracker built by Payton logging TikTok handles, follower counts, and pricing for 13 creators. Christy continued building and managing it.",
    ],
  },
  {
    category: "Digital Infrastructure",
    items: [
      "Google Ads: Built the active keyword list, created 3 campaign concepts, launched 1 paid campaign and 1 nonprofit campaign, and built 2 additional campaign drafts for future use.",
      "GA4 and Google Tag Manager: Both configured and connected to ad campaigns.",
      "Google Business Profile: Responded to reviews and made improvements to support local search and Maps visibility.",
      "SEO and AEO documents: Two recommendation documents produced, one from an SEO professional and one from AI-based analysis, covering both the Bokun site and the Christopher Marley website.",
      "AI toolbox: Researched roughly 8 AI tools and built a decision guide and instruction manual tailored to Exquisite Creatures' specific use cases.",
      "AI presentation: Slide deck produced to introduce AI options and demonstrate practical applications.",
    ],
  },
  {
    category: "Tourism and Transit Outreach",
    items: [
      "Visit Seattle: Email outreach completed, meeting held, membership process started, exhibit listed on visitseattle.org. Website build in progress.",
      "King County Metro: Contact made with Neal, Zoom meeting held with Neal and Allison, Ultra Super King bus wrap format researched at an estimated 22,680,153 impressions per campaign. World Cup July window identified.",
      "Washington Getout Pass: Partnership reviewed in full. Team and sponsor declined after evaluating the terms.",
    ],
  },
];

const Activities = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="activities" title="List of Activities" accentColor="bg-secondary" />
    <p className="text-foreground/80 leading-relaxed mb-8">
      Across the semester, the team's combined work covered TikTok and social media content, RedNote account management, influencer platform campaigns, direct outreach, paid advertising, SEO and AI tooling, and tourism and transit partnerships.
    </p>
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
