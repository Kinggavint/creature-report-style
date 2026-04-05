import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const nextSteps = [
  {
    title: "TikTok and Social Media",
    accent: "text-primary",
    border: "border-t-primary",
    items: [
      "Keep posting every day. The voiceover format is what drives performance on this account and the data is clear on that. Don't change the approach just because of a slow week.",
      "Designate one person to own posting and check analytics weekly. Respond to genuine comments because it builds credibility. Leave dismissive or negative ones alone or handle them professionally.",
      "The influencer outreach tracker has contacts who were never followed up with and some who showed initial interest. A warm follow-up to someone who already engaged is a faster path to a collaboration than starting new outreach from the beginning.",
    ],
  },
  {
    title: "RedNote and Influencer Marketing",
    accent: "text-secondary",
    border: "border-t-secondary",
    items: [
      "Post on RedNote consistently. The business account status helps with visibility, but only if the account stays active. Keep using playful captions and the built-in hashtag suggestions. Respond to comments regularly. Once the account hits around 1,000 followers, explore influencer collaborations on the platform itself.",
      "On JoinBrands, the active campaign can keep running and be checked periodically for new applicants. Create a new campaign every one to two months so the outreach stays fresh. The platform lets you manually invite up to two creators per day.",
      "Afluencer can stay active the same way, checked periodically for new applicants evaluated against the same criteria.",
      "Keep doing direct outreach on Instagram and TikTok alongside the platform campaigns. The response rates are low but the collaborations that come from direct outreach tend to be cheaper and feel more authentic.",
    ],
  },
  {
    title: "Digital Infrastructure",
    accent: "text-accent",
    border: "border-t-accent",
    items: [
      "Start using the AI toolbox. Pick one recurring task, find the relevant section of the toolbox, and use it. Admin organization, ad copy drafts, and outreach templates are good places to begin.",
      "Restart the paid Google Ads campaign. The structure is already built. Turn it on, check clicks, impressions, CPC, and search terms every week, and adjust based on what the data shows. Be careful with Google's automated recommendations.",
      "Fix the GA4 tracking issue. The tag likely stopped firing after the initial setup. Once it's working consistently, the company will finally have reliable data for evaluating both ad performance and organic traffic.",
      "Get started on the SEO recommendations. The simpler fixes, like correcting the header hierarchy on the website and adding alt tags to images, don't require any backend access.",
    ],
  },
  {
    title: "Tourism and Transit Outreach",
    accent: "text-destructive",
    border: "border-t-destructive",
    items: [
      "Finish the Visit Seattle website build through the extranet. Once it's live, set up referral tracking in GA4 so there's actual data on how much traffic the listing generates.",
      "Commit to the King County Metro bus wrap campaign before the World Cup window closes. The reason that inventory is still available is that the big advertisers already took what they wanted. That window won't stay open.",
      "For a future intern team: TikTok posting and analytics, RedNote growth, influencer campaign management on both platforms, Google Ads refinement, and backend SEO implementation.",
    ],
  },
];

const NextSteps = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="next-steps" title="Next Steps" accentColor="bg-secondary" />
    <p className="text-foreground/90 leading-relaxed mb-8">
      The next 30 to 60 days will determine whether this semester's work compounds or fades. The foundation is there across all four workstreams. Here's what to do with it.
    </p>
    <div className="space-y-6">
      {nextSteps.map((ns) => (
        <Card key={ns.title} className={`bg-card border-t-4 ${ns.border}`}>
          <CardHeader>
            <CardTitle className={`font-serif text-lg ${ns.accent}`}>{ns.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {ns.items.map((item, i) => (
                <li key={i} className="text-foreground/80 text-sm leading-relaxed flex items-start gap-2">
                  <span className={`mt-0.5 ${ns.accent}`}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default NextSteps;
