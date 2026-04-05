import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "619K", label: "Total Views", color: "text-primary" },
  { value: "1.93K", label: "Total Clicks", color: "text-secondary" },
  { value: "2.1%", label: "Avg. CTR", color: "text-accent" },
  { value: "4", label: "Workstreams", color: "text-primary" },
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
        The Exquisite Creatures exhibit at the Orlando Science Center represented a unique opportunity
        for the OCI Spring 2026 cohort to apply digital marketing, tourism strategy, content creation,
        and community engagement principles in a real-world setting. Over the course of the semester,
        four workstreams collaborated to develop and execute a multi-channel strategy aimed at increasing
        exhibit awareness, driving foot traffic, and enhancing the visitor experience.
      </p>
      <p>
        Key accomplishments included the deployment of Google Ads campaigns (both paid and nonprofit grant),
        a full Google Analytics 4 implementation, Google Business Profile optimization, social media content
        creation, transit/tourism partnerships research, and the development of comprehensive user guides
        to ensure sustainability beyond the project timeline.
      </p>
    </div>
  </section>
);

export default ExecutiveSummary;
