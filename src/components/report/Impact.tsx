import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import adsPaid from "@/assets/ads-paid.png";
import adsNonprofit from "@/assets/ads-nonprofit.png";
import ga4Users from "@/assets/ga4-users.png";
import ga4Channels from "@/assets/ga4-channels.png";
import ga4Events from "@/assets/ga4-events.png";
import ga4Events2 from "@/assets/ga4-events2.png";
import gbpInteractions from "@/assets/gbp-interactions.png";
import gbpDiscovery from "@/assets/gbp-discovery.png";

const Impact = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="impact" title="Impact" accentColor="bg-accent" />

    <p className="text-foreground/90 leading-relaxed mb-10">
      The work produced concrete results across all four areas. TikTok went from dormant to one of the exhibit's most active marketing channels. The influencer campaigns produced a completed collaboration and live pipelines on two platforms. Google went from one generic ad to a full campaign system with tracking. And two outreach channels the exhibit didn't have before are now open.
    </p>

    {/* TikTok Impact */}
    <div className="mb-16">
      <h3 className="font-serif text-2xl font-semibold text-primary mb-4">TikTok and Social Media</h3>
      <p className="text-foreground/80 text-sm leading-relaxed mb-4">
        When we started posting, the @exquisitecreatures account had 34 followers and averaged around 200 views per video. As of March 27, 2026:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {[
          { val: "619,866", label: "Total video views" },
          { val: "613,188", label: "Unique users reached" },
          { val: "6,485", label: "Profile visits" },
          { val: "125,917", label: "Total video likes" },
          { val: "494", label: "Total comments" },
          { val: "6,425", label: "Shares" },
        ].map((s) => (
          <Card key={s.label} className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold font-serif text-primary">{s.val}</div>
              <div className="text-muted-foreground text-xs mt-1">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-foreground/80 text-sm leading-relaxed">
        Every one of those numbers increased by more than 999 percent. The four highest-performing posts generated 264,946, 188,693, 73,369, and 67,904 views respectively. The share numbers are the most telling. Users sharing or saving a video about the exhibit aren't just passively watching. They're bookmarking it for a reason, which is usually intent to visit.
      </p>
    </div>

    {/* RedNote Impact */}
    <div className="mb-16">
      <h3 className="font-serif text-2xl font-semibold text-secondary mb-4">RedNote and Influencer Marketing</h3>
      <div className="text-foreground/80 text-sm leading-relaxed space-y-3">
        <p>
          The RedNote account launched in early March and was registered as a business account by the end of the month. Business account status gives the profile better algorithmic visibility than a standard personal account. Five videos were published in the first month. The account is early-stage by design since the goal was to get it established and learn the platform before scaling. That foundation is now in place.
        </p>
        <p>
          On the influencer side, JoinBrands received 8 applications and Afluencer received 6, totaling 14 applicants. Nine were Seattle-based, which is exactly the target. After reviewing content, engagement, and brand fit, we selected Yana. She visited the exhibit, posted content on both Instagram and TikTok, and her video hit around 2,000 views within the first 24 hours and 2,500 total. That's a fast result. It also validates that the channel works when the right creator is involved.
        </p>
        <p>
          Both platform campaigns are still active and accepting new applicants. The collaboration workflow from application to payment is documented and can be handed off without rebuilding anything. And the data from Yana's collaboration gives whoever manages this next a benchmark for what good looks like.
        </p>
      </div>
    </div>

    {/* Digital Infrastructure Impact */}
    <div className="mb-16">
      <h3 className="font-serif text-2xl font-semibold text-accent mb-4">Digital Infrastructure</h3>
      <div className="text-foreground/80 text-sm leading-relaxed space-y-3 mb-6">
        <p>
          Before this semester, the exhibit had one generic ad, limited tracking, and no documented strategy for search. It now has a functioning Google Ads setup, multiple campaigns built and ready, GA4 and Google Tag Manager connected, an active nonprofit campaign, SEO and AEO recommendation documents, and an AI toolbox with specific instructions written for Exquisite Creatures' actual work.
        </p>
        <p>
          The paid campaign ran from March 8 through March 26 and generated 1.93K clicks, 14.3K impressions, and an average cost per click of $0.41 on a total spend of $800. The drop at the end reflects a deliberate pause. The nonprofit campaign added 291 clicks and 1.88K impressions independently.
        </p>
        <p>
          The Google Business Profile data tells a useful story: 36,627 profile interactions, 47,582 profile views, and 22,890 searches that surfaced the exhibit in results. Most of that came from mobile users, specifically 20,230 views from Google Search on mobile and 18,148 from Google Maps on mobile. The audience is finding the exhibit on their phones, which reinforces why keeping the Business Profile current and accurate matters as much as it does.
        </p>
        <p>
          GA4 captured early data including 1.2K active users, 1.2K new users, an average engagement time of 35 seconds, and 38 tracked events, but stopped recording after the initial implementation. That's a tag configuration issue, not a structural problem. Identifying it is still useful because the company now knows exactly what to fix before the next campaign runs.
        </p>
      </div>

      {/* Google Ads Charts */}
      <h4 className="font-serif text-lg font-semibold text-primary mb-4">Google Ads Performance</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Paid Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={adsPaid} alt="Google Ads paid campaign metrics" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Nonprofit Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={adsNonprofit} alt="Google Ads nonprofit campaign metrics" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
      </div>

      {/* GA4 Charts */}
      <h4 className="font-serif text-lg font-semibold text-accent mb-4">Google Analytics 4</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Active Users Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={ga4Users} alt="GA4 active users chart" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Session Channel Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={ga4Channels} alt="GA4 session channels" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Event Count Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={ga4Events} alt="GA4 event count" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={ga4Events2} alt="GA4 event details" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
      </div>

      {/* GBP Charts */}
      <h4 className="font-serif text-lg font-semibold text-secondary mb-4">Google Business Profile</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Business Profile Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={gbpInteractions} alt="Google Business Profile interactions" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Search & Discovery</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={gbpDiscovery} alt="Google Business Profile discovery" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
      </div>
    </div>

    {/* Tourism Impact */}
    <div>
      <h3 className="font-serif text-2xl font-semibold text-destructive mb-4">Tourism and Transit Outreach</h3>
      <div className="text-foreground/80 text-sm leading-relaxed space-y-3">
        <p>
          The Visit Seattle listing puts Exquisite Creatures in front of people who are actively searching for things to do in Seattle. The platform's member social media channels reach over 640,000 people, which creates the possibility of feature placements that would push the exhibit to audiences it's not currently reaching on its own.
        </p>
        <p>
          The King County Metro conversation opened an opportunity that has a deadline attached to it. World Cup tourist traffic in Seattle peaks in July. The ad inventory for that period is available right now, before other local businesses start competing for what's left. A bus wrap campaign during that window could reach over 22 million people in a city that will be more packed with visitors than it is at almost any other point in the year.
        </p>
      </div>
    </div>
  </section>
);

export default Impact;
