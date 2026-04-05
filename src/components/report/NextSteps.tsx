import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Continue Google Ads Optimization",
    desc: "Maintain the paid and nonprofit ad campaigns with monthly budget reviews and keyword refinements based on seasonal trends.",
  },
  {
    title: "Expand Social Media Strategy",
    desc: "Scale content production to include user-generated content campaigns, influencer partnerships, and cross-platform stories.",
  },
  {
    title: "Formalize Transit Partnerships",
    desc: "Pursue formal agreements with Lynx and SunRail for co-branded promotions and bundled ticket offerings.",
  },
  {
    title: "Implement Community Feedback Loop",
    desc: "Deploy visitor surveys and digital feedback mechanisms to continuously improve the exhibit experience.",
  },
  {
    title: "Develop Email Marketing",
    desc: "Build an email subscriber list from exhibit visitors and website traffic for future exhibit announcements and membership drives.",
  },
  {
    title: "Transfer Knowledge to Staff",
    desc: "Conduct training sessions with Orlando Science Center staff using the user guides to ensure long-term platform management capability.",
  },
];

const NextSteps = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="next-steps" title="Next Steps" accentColor="bg-secondary" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {steps.map((s, i) => (
        <Card key={i} className="bg-card border-border group hover:border-primary/30 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              <h3 className="font-serif text-base font-semibold">{s.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default NextSteps;
