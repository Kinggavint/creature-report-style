import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  { name: "Chloe Chang", role: "Digital Infrastructure Lead", workstream: "Digital Infrastructure" },
  { name: "Tyler Fenwick", role: "Digital Infrastructure", workstream: "Digital Infrastructure" },
  { name: "Nadia Amari", role: "Tourism & Transit Lead", workstream: "Tourism & Transit" },
  { name: "Jamal Osei", role: "Tourism & Transit", workstream: "Tourism & Transit" },
  { name: "Sofia Reyes", role: "Content & Social Media Lead", workstream: "Content & Social" },
  { name: "Liam Donovan", role: "Content & Social Media", workstream: "Content & Social" },
  { name: "Anika Patel", role: "Community Engagement Lead", workstream: "Community Engagement" },
  { name: "Marcus Webb", role: "Community Engagement", workstream: "Community Engagement" },
];

const wsColors: Record<string, string> = {
  "Digital Infrastructure": "border-primary/40",
  "Tourism & Transit": "border-secondary/40",
  "Content & Social": "border-accent/40",
  "Community Engagement": "border-destructive/40",
};

const PeopleInvolved = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="people" title="People Involved" accentColor="bg-secondary" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {team.map((t) => (
        <Card key={t.name} className={`bg-card border-l-4 ${wsColors[t.workstream] || "border-border"}`}>
          <CardContent className="p-5">
            <div className="font-serif text-lg font-semibold mb-1">{t.name}</div>
            <div className="text-muted-foreground text-sm">{t.role}</div>
            <div className="text-xs text-primary mt-2">{t.workstream}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default PeopleInvolved;
