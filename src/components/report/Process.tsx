import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const workstreams = [
  {
    title: "Digital Infrastructure",
    color: "border-t-primary",
    accent: "text-primary",
    items: [
      "Set up and configured Google Analytics 4 (GA4) for the Orlando Science Center website",
      "Launched and optimized Google Ads campaigns (paid + Google Ad Grant for nonprofits)",
      "Implemented conversion tracking and event tagging across digital properties",
      "Created dashboards for ongoing performance monitoring",
    ],
  },
  {
    title: "Tourism & Transit",
    color: "border-t-secondary",
    accent: "text-secondary",
    items: [
      "Optimized Google Business Profile for improved local discovery",
      "Researched transit partnerships with Lynx, SunRail, and I-Ride Trolley",
      "Explored tourism package opportunities with Visit Orlando and local hotels",
      "Developed wayfinding recommendations for improved visitor navigation",
    ],
  },
  {
    title: "Content & Social Media",
    color: "border-t-accent",
    accent: "text-accent",
    items: [
      "Created engaging social media content for Instagram, Facebook, and TikTok",
      "Developed a content calendar aligned with exhibit milestones",
      "Produced short-form video content highlighting key specimens",
      "Designed graphics and promotional materials for digital distribution",
    ],
  },
  {
    title: "Community Engagement",
    color: "border-t-destructive",
    accent: "text-destructive",
    items: [
      "Identified and engaged local community partners and school groups",
      "Developed outreach strategies for underserved communities",
      "Coordinated with UCF student organizations for cross-promotion",
      "Created event concepts for exhibit-related community programming",
    ],
  },
];

const Process = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="process" title="Process" subtitle="Four workstreams, one unified strategy" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {workstreams.map((ws) => (
        <Card key={ws.title} className={`bg-card border-t-4 ${ws.color}`}>
          <CardHeader>
            <CardTitle className={`font-serif text-xl ${ws.accent}`}>{ws.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {ws.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/80 text-sm">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${ws.accent.replace("text-", "bg-")}`} />
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

export default Process;
