import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "619K", label: "TikTok Views", color: "text-primary" },
  { value: "1.93K", label: "Paid Search Clicks", color: "text-secondary" },
  { value: "47.5K", label: "GBP Views", color: "text-accent" },
  { value: "14", label: "Influencer Applicants", color: "text-primary" },
];

const ExecutiveSummary = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="executive-summary" title="Executive Summary" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {stats.map((s) => (
        <Card key={s.label} className="bg-card border-border hover:border-primary/30 transition-colors">
          <CardContent className="p-6 text-center">
            <div className={`text-4xl font-bold font-serif ${s.color} mb-2`}>{s.value}</div>
            <div className="text-muted-foreground text-sm">{s.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="prose prose-invert max-w-none space-y-4 text-foreground/90 leading-relaxed">
      <p>
        Christopher Marley's Exquisite Creatures Exhibit is a well-known natural art show now running at a 12,000-square-foot waterfront venue in Seattle. This is the first time in over ten years that the exhibit is being hosted independently rather than by a museum. Without a museum's marketing system, the exhibit needed help building its digital presence and getting closer to its goal of 500 visitors per day. Our team of five BYU students, Gavin Turnmire, Christy Shen, Joy Forte, Payton Walling, and Julia Powell, spent the semester working on that problem across four main areas.
      </p>
      <h3 className="font-serif text-xl font-semibold text-primary !mt-6">Social media content creation</h3>
      <p>
        We started with a TikTok account that had 34 followers and about 200 views per video. In less than two months, we grew @exquisitecreatures to 619,866 total TikTok views and reached 613,188 people. Several videos went viral. The format that worked best was voiceover videos using Christopher Marley's audio over edited clips of the exhibit. The account now has a clear content strategy and a posting workflow that anyone can use to keep it growing.
      </p>
      <h3 className="font-serif text-xl font-semibold text-primary !mt-6">Influencer outreach and platform marketing</h3>
      <p>
        We set up the exhibit's first RedNote account to reach Chinese-speaking audiences in Seattle, since no one had targeted that group before even though they showed real interest. For influencer marketing, we launched campaigns on JoinBrands and Afluencer. We got 14 applications, 9 from Seattle-based creators. We picked one influencer, Yana, who visited the exhibit and posted content that reached 2,500 views on Instagram and TikTok. Both campaigns are still open for new applicants.
      </p>
      <h3 className="font-serif text-xl font-semibold text-primary !mt-6">Digital infrastructure and paid advertising</h3>
      <p>
        We built and launched Google Ads campaigns from the ground up. The paid search campaign generated 1,930 clicks and 14,300 impressions at $0.41 per click. The nonprofit campaign added 291 clicks and 1,880 impressions. We set up GA4 and Google Tag Manager, created SEO and AEO recommendation documents for both the Bokun site and the Christopher Marley website, and built an AI toolbox to help Exquisite Creatures handle marketing and admin work more efficiently going forward.
      </p>
      <h3 className="font-serif text-xl font-semibold text-primary !mt-6">Tourism and transit outreach</h3>
      <p>
        We got the exhibit listed on Visit Seattle, which is the main tourism platform people use to find things to do in Seattle. We also started a bus advertising opportunity with King County Metro ahead of the 2026 World Cup, when tourist traffic will be highest. A bus wrap campaign during that time could reach about 22.6 million impressions.
      </p>
      <p>
        Combined, these workstreams produced 619,866 TikTok views, 125,917 likes, 6,425 shares, 1,930 paid search clicks, 47,582 Google Business Profile views, 36,627 profile interactions, one completed influencer collaboration, active campaigns on two influencer platforms, a Visit Seattle listing, and a full set of marketing tools and documentation for ongoing use. The exhibit now has a stronger digital foundation, more active channels, and better tools than it started with.
      </p>
    </div>
  </section>
);

export default ExecutiveSummary;
