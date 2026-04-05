import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import exhibit5 from "@/assets/exhibit-5.png";
import exhibit6 from "@/assets/exhibit-6.png";

const conclusions = [
  {
    title: "TikTok and Social Media",
    text: [
      "TikTok doesn't reward consistency the way you'd expect. We had weeks where nothing performed and then a video would break out completely on its own. What we figured out pretty quickly was that Christopher's voiceovers were driving most of the strong performances. They gave people something to actually engage with in the comments, which is what pushes a video to new audiences. The carousels never did that.",
      "One thing worth knowing going forward: rude or dismissive comments actually boosted our view counts by generating interaction. Responding defensively would have hurt the account. Staying professional and just letting the page look legitimate was the right call, especially during the slower weeks when those comments were most tempting to engage with.",
    ],
  },
  {
    title: "RedNote and Influencer Marketing",
    text: [
      "RedNote is worth taking seriously. The organic interest was already there before we created the account. Chinese-speaking users in Seattle were posting about the exhibit and similar exhibitions on their own. That's a better starting condition than most new platforms offer, and it tells you the audience is reachable if the account stays active and the content fits the platform's tone.",
      "On the influencer side, JoinBrands and Afluencer are genuinely useful for finding local creators and keeping the collaboration process organized. The limitation is that you're working with whoever applies, which means picking the right person from that pool matters more than the platform itself. Yana's collaboration showed the channel can produce real, fast visibility when the fit is right.",
      "Direct outreach has low response rates and that's just the reality of it. But the collaborations that come from direct outreach tend to feel more organic and cost less. Running both approaches at the same time makes sense. They're not competing with each other.",
    ],
  },
  {
    title: "Digital Infrastructure",
    text: [
      "The clearest takeaway from the Google work is that the exhibit already has search visibility, but there's no consistent system behind it. The Google Business Profile data showed strong numbers even before we touched anything. The problem is that without tracking, structured campaigns, and regular optimization, visibility like that just leaks out rather than converting into attendance.",
      "The Google ecosystem is more connected than it looks from the outside. Ads, Analytics, Tag Manager, conversion tracking, and Business Profile all affect each other. A lot of what we built wasn't just campaigns or keyword lists. It was making the system understandable so Allison can actually manage it without starting from scratch every time something needs adjusting.",
      "SEO is easier to evaluate than it is to implement when you don't have backend access. We know what needs to change on both the Bokun site and the Christopher Marley website. Making the bigger changes requires someone with the right site access to actually follow through.",
      "The AI toolbox came from watching how much repetitive work Allison is carrying alone. Christopher's creative work isn't something AI should be involved in. But the operational stuff, writing copy, drafting outreach messages, organizing information, is exactly what AI handles well.",
    ],
  },
  {
    title: "Tourism and Transit Outreach",
    text: [
      "Being on Visit Seattle matters. The platform surfaces in exactly the kind of searches tourists run when they're already in Seattle and trying to figure out what to do. The listing is a starting point, though, not a result by itself. The value depends on whether the exhibit keeps the information accurate and actually tracks what the listing drives.",
    ],
  },
];

const Conclusions = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="conclusions" title="Conclusions" accentColor="bg-primary" />
    <p className="text-foreground/90 leading-relaxed mb-8">
      The semester kept pointing back to the same thing: the exhibit has good material to work with, but the systems needed to turn that into consistent audience growth just weren't there when we started. Where we built structure and stayed consistent, the numbers moved. Where we were still figuring things out, the results were more early-stage. Both are honest outcomes.
    </p>
    <div className="space-y-6 mb-10">
      {conclusions.map((c) => (
        <Card key={c.title} className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-serif text-lg text-secondary">{c.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {c.text.map((p, i) => (
              <p key={i} className="text-foreground/80 text-sm leading-relaxed">{p}</p>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
      <div className="rounded-lg overflow-hidden border border-border">
        <img src={exhibit5} alt="Exhibit specimen" className="w-full h-auto" />
      </div>
      <div className="rounded-lg overflow-hidden border border-border">
        <img src={exhibit6} alt="Exhibit specimen" className="w-full h-auto" />
      </div>
    </div>
  </section>
);

export default Conclusions;
