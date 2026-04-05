import SectionHeader from "./SectionHeader";
import collageImg from "@/assets/exhibit-collage.png";
import exhibit1 from "@/assets/exhibit-1.png";
import exhibit2 from "@/assets/exhibit-2.png";

const Background = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="background" title="Background" accentColor="bg-accent" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div className="space-y-4 text-foreground/90 leading-relaxed">
        <p>
          Christopher Marley's Exquisite Creatures Exhibit has been touring museums across Canada and the United States for over a decade. Past venues include Crystal Bridges and the Houston Museum of Natural Science. Both reported strong attendance. At those locations, the host institution handled all marketing and promotion. The exhibit arrived, the museum promoted it, and the audience came through channels that took years to build.
        </p>
        <p>
          This year is different. For the first time, Exquisite Creatures is being hosted independently at a 12,000-square-foot waterfront venue in Seattle, near Pike Place Market and the Seattle Aquarium. There is no host museum to lean on. The exhibit has to build its own audience in a city where it has no existing presence.
        </p>
        <p>
          There was a starting point, though. Christopher Marley has a strong Instagram following, which gives the exhibit some built-in credibility. Allison had Meta ads running and one Google Ad in place before we came on. And in October, a small Seattle-based influencer named @emeraldcityaccess posted about her experience at the exhibit. That video got 2.4 million views and 437,000 likes. People started showing up specifically because of it. One post. That showed us what was possible if the content actually landed.
        </p>
        <p>
          Still, the exhibit was not hitting its targets. The goal before opening was 500 visitors per day and 52,000 per month. The actual average was under 500 a day. Something needed to change, especially with younger audiences who weren't on the exhibit's radar yet.
        </p>
        <p>
          Our team came in to work on four things: TikTok content, influencer and platform marketing, Google Ads and digital infrastructure, and outreach to Seattle tourism channels. We also picked up on something early in the semester that nobody had acted on yet. A lot of Seattle's tourist population speaks Mandarin or Cantonese, and there was already organic interest in the exhibit.
        </p>
      </div>
      <div className="space-y-4">
        <div className="rounded-lg overflow-hidden border border-border">
          <img src={collageImg} alt="Exquisite Creatures exhibit" className="w-full h-auto" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden border border-border">
            <img src={exhibit1} alt="Exhibit specimen" className="w-full h-auto" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <img src={exhibit2} alt="Exhibit specimen" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Background;
