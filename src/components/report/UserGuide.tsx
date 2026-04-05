import SectionHeader from "./SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const guides = [
  {
    title: "TikTok and Social Media Guide",
    purpose: "Covers how to manage the @exquisitecreatures TikTok account on an ongoing basis, including the content workflow, posting strategy, and what to do when engagement dips.",
    description: "The account has an established content format (voiceover-style videos using Christopher's audio over edited exhibit clips), an editing workflow built around CapCut and Publer, and a posting schedule tested over two months. The YouTube channel mirrors TikTok content via Shorts.",
    instructions: [
      "Post every day. Daily posting keeps the account active and visible in the algorithm. Accounts that post in bursts and go quiet lose momentum that is hard to get back.",
      "To create a video: copy a reel link from Christopher's Instagram, paste it into Publer to download, upload to CapCut, extract the audio, add exhibit clips from the SEATTLE Google Drive folder, enable auto-captions, add low-volume instrumental background music, and export directly to TikTok via CapCut's share feature.",
      "Set location to the exhibit in Seattle before posting. Write a caption ending with a question to prompt comments. Add hashtags: #seattle, #seattleartexhibit, #animalart, #christophermarley, #exquisitecreatures, #museumtok, #seattleexhibit, #nature, #ethicalpreservation, #arttok.",
      "Schedule posts for 3 p.m. when possible. Saturday nights also perform well based on semester analytics.",
      "For YouTube Shorts: download the TikTok video, remove the TikTok watermark, upload to YouTube Shorts, write a fresh caption using an AI tool for variation, and include the exhibit website link in the description.",
      "Check analytics weekly. Most useful metrics: views by video (which format is working), new followers (what converts viewers), and watch time (where people drop off).",
    ],
    limitations: "Views won't grow in a straight line. Keep posting at the same quality and cadence during slow weeks. Accounts that pause during flat periods lose algorithmic momentum and take longer to recover than those that kept going. Don't change the strategy because of a single bad week.",
    support: "Publer: publer.com. CapCut: capcut.com. TikTok analytics: TikTok Studio (in-app or studio.tiktok.com). Influencer outreach tracker linked in appendix.",
  },
  {
    title: "RedNote and Influencer Marketing Guide",
    purpose: "Covers how to maintain and grow the RedNote account and how to manage ongoing influencer campaigns through JoinBrands and Afluencer, as well as direct outreach.",
    description: "Two active components: the RedNote account targeting Chinese-speaking audiences in Seattle, and influencer campaigns on JoinBrands and Afluencer. Both are set up and operational. What they need is consistent management and periodic new activity.",
    subsections: [
      {
        name: "RedNote",
        steps: [
          "Post consistently using videos from the shared drive or existing social media content. Content built from exhibit photos also works.",
          "Write captions that are playful and attention-grabbing. This is the style that performs with Chinese-speaking audiences on the platform.",
          "Enable RedNote's built-in translation feature so captions show up in the viewer's app language. This should be on for every post.",
          "Add relevant hashtags using RedNote's built-in suggestion tool. Cap at 10 per post.",
          "Respond to comments regularly. Engagement tells the platform the account is active, which improves visibility.",
          "Once the account reaches around 1,000 followers, start exploring influencer collaborations on the platform.",
        ],
      },
      {
        name: "JoinBrands",
        steps: [
          "Monitor the active campaign regularly and review new applications as they come in.",
          "Evaluate applicants based on content quality, engagement rate, whether they're Seattle-based, and overall fit with the exhibit's brand.",
          "Approve selected influencers and communicate expectations clearly before they begin. Influencers have up to 60 days to visit the exhibit and post their content.",
          "Review the submitted content after posting. Request edits if needed before approving payment.",
          "Release payment only after the content has been live for at least 14 days.",
          "Create a new campaign every one to two months to keep outreach fresh and attract new creators.",
          "Use the manual invitation feature (up to 2 per day) to proactively invite creators who are a strong fit.",
        ],
      },
      {
        name: "Afluencer",
        steps: [
          "Keep campaigns active and check periodically for new applicants.",
          "Evaluate applicants using the same criteria as JoinBrands: content quality, engagement rate, local relevance, and fit.",
          "Select influencers that align with the exhibit's audience and visual style.",
        ],
      },
      {
        name: "Direct Outreach",
        steps: [
          "Identify influencers focused on art, travel, food, or local Seattle experiences. Strong engagement relative to follower count matters more than follower count alone.",
          "Reach out through direct message or email in a way that feels personal rather than templated. Reference something specific about their content.",
        ],
      },
    ],
    limitations: "Direct outreach response rates are low. That's expected, not a sign the strategy isn't working. Platform-based campaigns give more consistent volume; direct outreach is for landing a specific creator who is exactly right. Run both at the same time.",
    support: "For JoinBrands questions, contact brand ambassador Diego Ross at dr@joinbrands.com.",
  },
  {
    title: "AI Toolbox Guide",
    purpose: "Helps the company understand which AI tools are most useful for Exquisite Creatures' actual work and how to start using them practically.",
    description: "The toolbox introduces multiple AI tools, explains what each does, shows where it fits into the company's workflow, and provides specific prompts and instructions written for Exquisite Creatures.",
    instructions: [
      "Start with the overview section to understand what tools are included and what each is built for.",
      "Identify the task you want to improve: writing ad copy, drafting outreach messages, summarizing SEO recommendations, organizing admin tasks.",
      "Open the section for the tool that fits that task. Read the setup instructions and use the recommended prompts.",
      "Test the tool on a low-stakes task before relying on it for anything important.",
      "Keep a human reviewing the outputs. AI produces plausible-sounding errors, especially on factual or brand-specific content.",
    ],
    limitations: "Don't give any AI agent full account access until you understand how it behaves with limited permissions. Keep access compartmentalized. Be skeptical of vendors presenting themselves as AI experts.",
  },
  {
    title: "Google Ads Workflow Guide",
    purpose: "Covers how to run, adjust, and evaluate the paid search campaigns built during the semester. The structure is in place; this guide explains how to keep it working.",
    description: "The existing setup includes three campaign concepts, one active paid campaign, one nonprofit campaign, a keyword list, and connections to GA4 and Google Tag Manager. Campaigns can be turned on, monitored, adjusted, and paused without rebuilding from scratch.",
    instructions: [
      "Before activating any campaign, review targeting, geography, keywords, audience, and budget. Confirm they still match the exhibit's current situation.",
      "Verify that GA4 and Google Tag Manager are connected and recording before turning any campaign on.",
      "Review clicks, impressions, CPC, and any available conversion data weekly.",
      "Read Google's automated recommendations carefully before applying them. They're optimized to increase spend, not necessarily to improve results.",
      "Use performance data to improve keyword lists, ad copy, and targeting gradually. Small consistent improvements outperform periodic rebuilds.",
    ],
    limitations: "The GA4 tag appears to have stopped firing consistently after the initial setup. Fix that before drawing conclusions from the analytics data. Avoid deleting and rebuilding campaign elements.",
  },
  {
    title: "Website and SEO Guide",
    purpose: "Addresses the most actionable improvements to the Exquisite Creatures website and Google Business Profile to improve search visibility.",
    description: "The website currently starts its header structure at H4, skipping H1 through H3 entirely. Search engines use H1 and H2 tags to understand what a page is about.",
    subsections: [
      {
        name: "Fixing the Header Structure",
        steps: [
          "Use Google Keyword Planner or Semrush to find the search terms people use when looking for exhibits in Seattle.",
          "Set the H1 on each main page to reflect its primary topic. For the homepage, something like 'Exquisite Creatures Seattle.'",
          "Use H2 tags for major page sections: 'Now Open on the Seattle Waterfront,' 'About Christopher Marley,' etc.",
          "Work down through H3 and H4 for sub-sections as needed, maintaining a logical hierarchy.",
        ],
      },
      {
        name: "Keyword and Backlink Strategy",
        steps: [
          "Run the exhibit's URL through Semrush to see what terms are already driving traffic and where the gaps are.",
          "Build backlinks by getting the exhibit's URL placed on relevant external sites: local event listings, travel blogs, news articles, and partner websites.",
          "Add alt tags to all images on the website.",
          "Make sure the information on the website matches the Google Business Profile exactly. Hours, address, and contact details should be consistent.",
        ],
      },
      {
        name: "Google Business Profile",
        steps: [
          "Add new photos and videos to the profile at least once every two months.",
          "Post regular updates using the Post button. 'Update' for general news, 'Event' for special programming, 'Offer' for discounts or group pricing.",
          "Respond to all reviews on both Google and TripAdvisor. Pre-written response templates are linked in the appendix.",
        ],
      },
    ],
  },
];

const UserGuide = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="user-guide" title="User Guide" subtitle="Each section is written for whoever is taking over or continuing that work." accentColor="bg-primary" />
    <p className="text-foreground/80 leading-relaxed mb-8">
      This guide covers all four workstream areas: TikTok and social media, RedNote and influencer marketing, Google digital infrastructure, and website SEO. Start with Next Steps to figure out what to prioritize, then come back here for the how.
    </p>
    <Accordion type="single" collapsible className="space-y-3">
      {guides.map((g, i) => (
        <AccordionItem key={i} value={`guide-${i}`} className="bg-card border border-border rounded-lg px-6">
          <AccordionTrigger className="font-serif text-lg hover:no-underline hover:text-primary">
            {g.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-foreground/80 leading-relaxed space-y-4">
              {g.purpose && (
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Purpose</h4>
                  <p className="text-sm">{g.purpose}</p>
                </div>
              )}
              {g.description && (
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Description</h4>
                  <p className="text-sm">{g.description}</p>
                </div>
              )}
              {g.instructions && (
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Instructions</h4>
                  <ol className="list-decimal ml-5 space-y-2 text-sm">
                    {g.instructions.map((inst, j) => (
                      <li key={j}>{inst}</li>
                    ))}
                  </ol>
                </div>
              )}
              {g.subsections && g.subsections.map((sub, j) => (
                <div key={j}>
                  <h4 className="font-semibold text-secondary text-sm mb-1">{sub.name}</h4>
                  <ol className="list-decimal ml-5 space-y-2 text-sm">
                    {sub.steps.map((step, k) => (
                      <li key={k}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
              {g.limitations && (
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Limitations</h4>
                  <p className="text-sm">{g.limitations}</p>
                </div>
              )}
              {g.support && (
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">Support</h4>
                  <p className="text-sm">{g.support}</p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default UserGuide;
