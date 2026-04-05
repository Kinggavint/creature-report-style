import ReportNav from "@/components/report/ReportNav";
import Hero from "@/components/report/Hero";
import ExecutiveSummary from "@/components/report/ExecutiveSummary";
import PeopleInvolved from "@/components/report/PeopleInvolved";
import Background from "@/components/report/Background";
import Process from "@/components/report/Process";
import Activities from "@/components/report/Activities";
import Conclusions from "@/components/report/Conclusions";
import Impact from "@/components/report/Impact";
import NextSteps from "@/components/report/NextSteps";
import UserGuide from "@/components/report/UserGuide";
import Appendix from "@/components/report/Appendix";
import { useCallback } from "react";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, PageBreak } from "docx";
import { saveAs } from "file-saver";

const Index = () => {
  const handleExportPDF = useCallback(() => {
    window.print();
  }, []);

  const handleExportDOCX = useCallback(async () => {
    const doc = new Document({
      styles: {
        default: {
          document: { run: { font: "Calibri", size: 22 } },
        },
        paragraphStyles: [
          {
            id: "Heading1",
            name: "Heading 1",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: { size: 36, bold: true, font: "Georgia", color: "00A896" },
            paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 },
          },
          {
            id: "Heading2",
            name: "Heading 2",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: { size: 28, bold: true, font: "Georgia", color: "1A1A2E" },
            paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 },
          },
        ],
      },
      sections: [
        {
          properties: {
            page: {
              size: { width: 12240, height: 15840 },
              margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
            },
          },
          children: [
            new Paragraph({ spacing: { before: 2400 }, children: [] }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: "Exquisite Creatures Exhibit", font: "Georgia", size: 52, bold: true })],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 200 },
              children: [new TextRun({ text: "OCI Final Report — Spring 2026", font: "Georgia", size: 32, italics: true, color: "D4A853" })],
            }),
            new Paragraph({ children: [new PageBreak()] }),

            // Executive Summary
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Executive Summary")] }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("Christopher Marley's Exquisite Creatures Exhibit is a well-known natural art show now running at a 12,000-square-foot waterfront venue in Seattle. This is the first time in over ten years that the exhibit is being hosted independently rather than by a museum. Without a museum's marketing system, the exhibit needed help building its digital presence and getting closer to its goal of 500 visitors per day. Our team of five BYU students, Gavin Turnmire, Christy Shen, Joy Forte, Payton Walling, and Julia Powell, spent the semester working on that problem across four main areas.")],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun({ text: "Social media content creation", bold: true })],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("We started with a TikTok account that had 34 followers and about 200 views per video. In less than two months, we grew @exquisitecreatures to 619,866 total TikTok views and reached 613,188 people. Several videos went viral. The format that worked best was voiceover videos using Christopher Marley's audio over edited clips of the exhibit.")],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun({ text: "Influencer outreach and platform marketing", bold: true })],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("We set up the exhibit's first RedNote account to reach Chinese-speaking audiences in Seattle, since no one had targeted that group before even though they showed real interest. For influencer marketing, we launched campaigns on JoinBrands and Afluencer. We got 14 applications, 9 from Seattle-based creators. We picked one influencer, Yana, who visited the exhibit and posted content that reached 2,500 views on Instagram and TikTok.")],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun({ text: "Digital infrastructure and paid advertising", bold: true })],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("We built and launched Google Ads campaigns from the ground up. The paid search campaign generated 1,930 clicks and 14,300 impressions at $0.41 per click. The nonprofit campaign added 291 clicks and 1,880 impressions. We set up GA4 and Google Tag Manager, created SEO and AEO recommendation documents for both the Bokun site and the Christopher Marley website, and built an AI toolbox to help Exquisite Creatures handle marketing and admin work more efficiently going forward.")],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun({ text: "Tourism and transit outreach", bold: true })],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("We got the exhibit listed on Visit Seattle, which is the main tourism platform people use to find things to do in Seattle. We also started a bus advertising opportunity with King County Metro ahead of the 2026 World Cup, when tourist traffic will be highest. A bus wrap campaign during that time could reach about 22.6 million impressions.")],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("Combined, these workstreams produced 619,866 TikTok views, 125,917 likes, 6,425 shares, 1,930 paid search clicks, 47,582 Google Business Profile views, 36,627 profile interactions, one completed influencer collaboration, active campaigns on two influencer platforms, a Visit Seattle listing, and a full set of marketing tools and documentation for ongoing use.")],
            }),
            new Paragraph({ children: [new PageBreak()] }),

            // People Involved
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("People Involved")] }),
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Team Members")] }),
            ...[
              "Joy Forte (Team Leader) took ownership of coordinating the group across the full semester. She scheduled weekly meetings, maintained regular contact with the sponsor, and kept the team aligned as workstream priorities shifted.",
              "Payton Walling was responsible for social media content creation across TikTok and YouTube. She created 15 TikTok posts and 4 YouTube Shorts during the semester. One of her TikTok videos went viral within two weeks of posting and currently has 183,500 views.",
              "Christy Shen led the team's influencer marketing and RedNote workstreams. She created and managed the exhibit's RedNote (Xiaohongshu) account to reach Chinese-speaking audiences in Seattle.",
              "Julia Powell created 16 TikTok posts over the course of the semester and had a viral video that currently has 268,300 views.",
              "Gavin Turnmire was responsible for the team's digital infrastructure workstream, covering Google Ads, analytics, SEO, and AI tooling.",
            ].map(t => new Paragraph({ spacing: { after: 200 }, children: [new TextRun(t)] })),
            new Paragraph({ children: [new PageBreak()] }),

            // Background
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Background")] }),
            ...[
              "Christopher Marley's Exquisite Creatures Exhibit has been touring museums across Canada and the United States for over a decade. Past venues include Crystal Bridges and the Houston Museum of Natural Science. Both reported strong attendance. At those locations, the host institution handled all marketing and promotion.",
              "This year is different. For the first time, Exquisite Creatures is being hosted independently at a 12,000-square-foot waterfront venue in Seattle, near Pike Place Market and the Seattle Aquarium. There is no host museum to lean on.",
              "There was a starting point, though. Christopher Marley has a strong Instagram following, which gives the exhibit some built-in credibility. Allison had Meta ads running and one Google Ad in place before we came on. And in October, a small Seattle-based influencer named @emeraldcityaccess posted about her experience at the exhibit. That video got 2.4 million views and 437,000 likes.",
              "Still, the exhibit was not hitting its targets. The goal before opening was 500 visitors per day and 52,000 per month. The actual average was under 500 a day.",
              "Our team came in to work on four things: TikTok content, influencer and platform marketing, Google Ads and digital infrastructure, and outreach to Seattle tourism channels.",
            ].map(t => new Paragraph({ spacing: { after: 200 }, children: [new TextRun(t)] })),
            new Paragraph({ children: [new PageBreak()] }),

            // Process
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Process")] }),
            ...["TikTok and Social Media Content", "RedNote and Influencer Marketing", "Digital Infrastructure", "Tourism and Transit Outreach"].map(
              (ws) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(ws)] })
            ),
            new Paragraph({ children: [new PageBreak()] }),

            // Conclusions
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Conclusions")] }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("The semester kept pointing back to the same thing: the exhibit has good material to work with, but the systems needed to turn that into consistent audience growth just weren't there when we started. Where we built structure and stayed consistent, the numbers moved. Where we were still figuring things out, the results were more early-stage. Both are honest outcomes.")],
            }),
            new Paragraph({ children: [new PageBreak()] }),

            // Impact
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Impact")] }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("The work produced concrete results across all four areas. TikTok went from dormant to one of the exhibit's most active marketing channels. The influencer campaigns produced a completed collaboration and live pipelines on two platforms. Google went from one generic ad to a full campaign system with tracking. And two outreach channels the exhibit didn't have before are now open.")],
            }),
            new Paragraph({ children: [new PageBreak()] }),

            // Next Steps
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Next Steps")] }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("The next 30 to 60 days will determine whether this semester's work compounds or fades. The foundation is there across all four workstreams.")],
            }),
          ],
        },
      ],
    });

    const buffer = await Packer.toBlob(doc);
    saveAs(buffer, "Exquisite_Creatures_Final_Report.docx");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReportNav onExportPDF={handleExportPDF} onExportDOCX={handleExportDOCX} />
      <Hero />
      <ExecutiveSummary />
      <PeopleInvolved />
      <Background />
      <Process />
      <Activities />
      <Conclusions />
      <Impact />
      <NextSteps />
      <UserGuide />
      <Appendix />
    </div>
  );
};

export default Index;
