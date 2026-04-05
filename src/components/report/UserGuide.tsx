import SectionHeader from "./SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const guides = [
  {
    title: "Google Analytics 4 (GA4) User Guide",
    content: `
      <p class="mb-3">GA4 is configured to track key user interactions on the Orlando Science Center website. Here's how to access and interpret the data:</p>
      <ol class="list-decimal ml-5 space-y-2 text-sm">
        <li><strong>Access:</strong> Log in to analytics.google.com with the OSC Google account credentials.</li>
        <li><strong>Key Reports:</strong> Navigate to Reports → Engagement → Events to see user interactions. The "Pages and screens" report shows which exhibit pages receive the most traffic.</li>
        <li><strong>Conversions:</strong> Check Reports → Engagement → Conversions to see ticket purchase completions and other goal events.</li>
        <li><strong>Audience Insights:</strong> Use Reports → User → Demographics to understand visitor demographics and interests.</li>
        <li><strong>Real-Time:</strong> The Real-time report shows current active users, useful during promotional campaigns.</li>
      </ol>
    `,
  },
  {
    title: "Google Ads Management Guide",
    content: `
      <p class="mb-3">Two Google Ads accounts are active: a paid account and a Google Ad Grant (nonprofit) account.</p>
      <ol class="list-decimal ml-5 space-y-2 text-sm">
        <li><strong>Paid Account:</strong> Monthly budget of $500. Focus on high-intent keywords like "Orlando Science Center tickets" and "things to do in Orlando."</li>
        <li><strong>Ad Grant Account:</strong> $10,000/month in free advertising. Must maintain 5% CTR to remain eligible. Focus on educational and informational keywords.</li>
        <li><strong>Optimization:</strong> Review search terms weekly. Add negative keywords to prevent irrelevant clicks. Pause underperforming ads monthly.</li>
        <li><strong>Reporting:</strong> Export monthly performance reports from the Campaigns tab for stakeholder updates.</li>
      </ol>
    `,
  },
  {
    title: "Google Business Profile Guide",
    content: `
      <p class="mb-3">The Google Business Profile is critical for local discovery and Maps visibility.</p>
      <ol class="list-decimal ml-5 space-y-2 text-sm">
        <li><strong>Updates:</strong> Keep hours, special events, and exhibit information current. Post updates at least weekly.</li>
        <li><strong>Photos:</strong> Upload new photos monthly. High-quality exhibit photos drive higher engagement.</li>
        <li><strong>Reviews:</strong> Respond to all reviews within 48 hours. Thank positive reviewers and address concerns professionally.</li>
        <li><strong>Posts:</strong> Use the Posts feature to promote upcoming events, special pricing, and exhibit highlights.</li>
        <li><strong>Q&A:</strong> Monitor and answer questions promptly. Pre-populate common questions about parking, hours, and pricing.</li>
      </ol>
    `,
  },
  {
    title: "Social Media Content Guide",
    content: `
      <p class="mb-3">Content should maintain consistent branding while adapting to each platform's format.</p>
      <ol class="list-decimal ml-5 space-y-2 text-sm">
        <li><strong>Instagram:</strong> Post 3-4 times per week. Mix carousel posts, Reels, and Stories. Use exhibit hashtags consistently.</li>
        <li><strong>Facebook:</strong> Post 2-3 times per week. Focus on event announcements, visitor photos, and educational content.</li>
        <li><strong>TikTok:</strong> Post 2-3 Reels per week. Behind-the-scenes content and specimen highlights perform best.</li>
        <li><strong>Brand Voice:</strong> Friendly, educational, wonder-inspiring. Avoid overly technical language. Emphasize the visual beauty of specimens.</li>
      </ol>
    `,
  },
];

const UserGuide = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="user-guide" title="User Guides" subtitle="Operational guides for ongoing management" accentColor="bg-primary" />
    <Accordion type="single" collapsible className="space-y-3">
      {guides.map((g, i) => (
        <AccordionItem key={i} value={`guide-${i}`} className="bg-card border border-border rounded-lg px-6">
          <AccordionTrigger className="font-serif text-lg hover:no-underline hover:text-primary">
            {g.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-foreground/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: g.content }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default UserGuide;
