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
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 400 },
              children: [new TextRun({ text: "Orlando Community Impact • UCF Rosen College of Hospitality Management", size: 20, color: "666666" })],
            }),
            new Paragraph({ children: [new PageBreak()] }),

            // Executive Summary
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Executive Summary")] }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("The Exquisite Creatures exhibit at the Orlando Science Center represented a unique opportunity for the OCI Spring 2026 cohort to apply digital marketing, tourism strategy, content creation, and community engagement principles in a real-world setting. Over the course of the semester, four workstreams collaborated to develop and execute a multi-channel strategy aimed at increasing exhibit awareness, driving foot traffic, and enhancing the visitor experience.")],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("Key accomplishments included the deployment of Google Ads campaigns (both paid and nonprofit grant), a full Google Analytics 4 implementation, Google Business Profile optimization, social media content creation, transit/tourism partnerships research, and the development of comprehensive user guides to ensure sustainability beyond the project timeline.")],
            }),
            new Paragraph({ children: [new PageBreak()] }),

            // Background
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Background")] }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("The Exquisite Creatures exhibit is a traveling exhibition hosted at the Orlando Science Center, featuring an extraordinary collection of rare specimens from the natural world. The exhibit showcases preserved insects, marine life, and other organisms renowned for their remarkable beauty, symmetry, and biological complexity.")],
            }),
            new Paragraph({
              spacing: { after: 200 },
              children: [new TextRun("As part of the Orlando Community Impact (OCI) program at UCF's Rosen College of Hospitality Management, our team was tasked with developing a comprehensive digital and community engagement strategy to maximize the exhibit's visibility, attract diverse audiences, and create lasting institutional value for the Orlando Science Center.")],
            }),
            new Paragraph({ children: [new PageBreak()] }),

            // Process
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Process")] }),
            ...["Digital Infrastructure", "Tourism & Transit", "Content & Social Media", "Community Engagement"].map(
              (ws) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(ws)] })
            ),
            new Paragraph({ children: [new PageBreak()] }),

            // Conclusions
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Conclusions")] }),
            ...[
              "Digital Presence Established: The implementation of GA4, Google Ads, and Google Business Profile optimization created a measurable digital footprint for the exhibit.",
              "Cross-Functional Collaboration: The four-workstream model proved effective in distributing specialized work while maintaining strategic alignment.",
              "Data-Driven Decision Making: By establishing analytics from the outset, the team was able to iterate on campaigns in real-time.",
              "Sustainability Through Documentation: The user guides and SOPs developed ensure the Orlando Science Center can maintain the digital infrastructure.",
            ].map(
              (text) =>
                new Paragraph({
                  spacing: { after: 200 },
                  children: [new TextRun(text)],
                })
            ),
            new Paragraph({ children: [new PageBreak()] }),

            // Next Steps
            new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Next Steps")] }),
            ...["Continue Google Ads Optimization", "Expand Social Media Strategy", "Formalize Transit Partnerships", "Implement Community Feedback Loop", "Develop Email Marketing", "Transfer Knowledge to Staff"].map(
              (step) =>
                new Paragraph({
                  spacing: { after: 120 },
                  children: [new TextRun({ text: `• ${step}`, size: 22 })],
                })
            ),
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
