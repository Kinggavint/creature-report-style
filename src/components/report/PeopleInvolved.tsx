import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Joy Forte",
    role: "Team Leader",
    desc: "Coordinated the group across the full semester. Scheduled weekly meetings, maintained regular contact with the sponsor, and kept the team aligned. Contacted the membership board of Exquisite Creatures directly, which led to the exhibit being featured on the company website. Reached out to King County Metro's advertising team and managed the TikTok account during the early weeks.",
  },
  {
    name: "Payton Walling",
    role: "Social Media Content",
    desc: "Responsible for social media content creation across TikTok and YouTube. Created 15 TikTok posts and 4 YouTube Shorts. One TikTok video went viral with 183,500 views. Initiated the influencer outreach effort, building a tracking spreadsheet with TikTok handles, follower counts, and pricing, and reaching out to 13 creators.",
  },
  {
    name: "Christy Shen",
    role: "Influencer Marketing & RedNote",
    desc: "Led the team's influencer marketing and RedNote workstreams. Created and managed the exhibit's RedNote (Xiaohongshu) account to reach Chinese-speaking audiences in Seattle. Launched active campaigns on both JoinBrands and Afluencer, drawing 14 applications total, 9 from Seattle-based creators. Managed the full collaboration process from approval through payment.",
  },
  {
    name: "Julia Powell",
    role: "Social Media Content",
    desc: "Created 16 TikTok posts over the course of the semester with a viral video that has 268,300 views. Consistently engaged with comments on each post. Worked on a partnership opportunity with the Washington Getout Pass and worked a support case with Google Business and Bokun to get the booking tab properly enabled.",
  },
  {
    name: "Gavin Turnmire",
    role: "Digital Infrastructure",
    desc: "Responsible for the team's digital infrastructure workstream, covering Google Ads, analytics, SEO, and AI tooling. Built the keyword list, created three campaign concepts, launched one paid campaign (1.93K clicks, 14.3K impressions, $0.41 CPC), and drafted two additional campaigns. Set up GA4 and Google Tag Manager, developed SEO/AEO recommendation documents, and built a comprehensive AI toolbox.",
  },
];

const contacts = [
  {
    name: "Allison (Sponsor)",
    desc: "Primary point of contact at Exquisite Creatures. Provided access to social media accounts, shared content from the Seattle Google Drive folder, gave feedback on Google Ads setup, and shaped the direction of the digital work through ongoing conversations about target audience, geography, and campaign priorities.",
  },
  {
    name: "Chris (Visit Seattle)",
    desc: "Contact at Visit Seattle. Responded within a few days, walked the team through the membership inquiry process, set up a meeting to discuss membership details and benefits, and sent over the steps for creating an account on their extranet.",
  },
  {
    name: "Neal (King County Metro)",
    desc: "Contact at King County Metro's advertising division. Met with the team and Allison over Zoom to discuss bus wrap advertising options, including the Ultra Super King format. Mentioned that timing was good since most major advertisers had already reserved their World Cup inventory.",
  },
  {
    name: "Diego Ross (JoinBrands)",
    desc: "Brand ambassador and support contact for JoinBrands. Reachable at dr@joinbrands.com for questions about campaign setup, platform issues, or collaboration management.",
  },
  {
    name: "Livy Bak",
    desc: "Content creator based in Utah affiliated with Exquisite Creatures.",
  },
];

const PeopleInvolved = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="people" title="People Involved" accentColor="bg-secondary" />

    <h3 className="font-serif text-2xl font-semibold text-primary mb-6">Team Members</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {teamMembers.map((t) => (
        <Card key={t.name} className="bg-card border-l-4 border-l-primary/40">
          <CardContent className="p-5">
            <div className="font-serif text-lg font-semibold mb-1">{t.name}</div>
            <div className="text-primary text-sm mb-3">{t.role}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <h3 className="font-serif text-2xl font-semibold text-secondary mb-6">Company Contacts</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contacts.map((c) => (
        <Card key={c.name} className="bg-card border-l-4 border-l-secondary/40">
          <CardContent className="p-5">
            <div className="font-serif text-lg font-semibold mb-1">{c.name}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default PeopleInvolved;
