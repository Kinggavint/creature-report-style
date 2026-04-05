import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import exhibit5 from "@/assets/exhibit-5.png";
import exhibit6 from "@/assets/exhibit-6.png";

const conclusions = [
  {
    title: "Digital Presence Established",
    text: "The implementation of GA4, Google Ads, and Google Business Profile optimization created a measurable digital footprint for the exhibit. The infrastructure built during this project provides a replicable framework for future exhibits.",
  },
  {
    title: "Cross-Functional Collaboration",
    text: "The four-workstream model proved effective in distributing specialized work while maintaining strategic alignment. Regular cross-team check-ins ensured consistent messaging and avoided duplication of effort.",
  },
  {
    title: "Data-Driven Decision Making",
    text: "By establishing analytics from the outset, the team was able to iterate on campaigns in real-time, optimizing ad spend and content strategy based on actual performance data rather than assumptions.",
  },
  {
    title: "Sustainability Through Documentation",
    text: "The user guides and standard operating procedures developed ensure that the Orlando Science Center can maintain and build upon the digital infrastructure established during this project.",
  },
];

const Conclusions = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="conclusions" title="Conclusions" accentColor="bg-primary" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {conclusions.map((c) => (
        <Card key={c.title} className="bg-card border-border">
          <CardContent className="p-6">
            <h3 className="font-serif text-lg font-semibold text-secondary mb-3">{c.title}</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">{c.text}</p>
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
