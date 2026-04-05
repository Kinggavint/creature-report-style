import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const workstreams = [
  {
    title: "TikTok and Social Media Content",
    color: "border-t-primary",
    accent: "text-primary",
    content: [
      "Before we even logged into the TikTok account, the @emeraldcityaccess video had already set the target. One outside creator posting a genuine reaction got 2.4 million views. The question was whether we could get anywhere close to that from the exhibit's own page.",
      "The account existed when we got there, but barely. About 30 followers, a few posts, no real engagement. Just getting into it was a problem at first. Two-factor authentication meant we needed a code from Allison's phone within 60 seconds every time we logged in.",
      "We started with carousels, similar to Instagram slide posts, using photos from Christopher Marley's Instagram. They looked fine but got almost no traction. So we switched to video. The format that actually worked was a voiceover style, using audio from Christopher's podcast-type Instagram content played over edited clips of the exhibit pieces.",
    ],
    steps: [
      "Pick a voiceover clip from Christopher's Instagram where he talks about a piece or shares a fact about a specimen. Copy the reel link and paste it into Publer to download the video.",
      "Open CapCut, upload the reel, and pull out just the audio. Pull video clips from the SEATTLE Google Drive folder separately. Cut them to fit the voiceover.",
      "Turn on auto-captions in CapCut. Add low-volume royalty-free background music so it doesn't compete with Christopher's voice.",
      "Post directly from CapCut using the built-in TikTok share option. Set location to the exhibit in Seattle.",
      "Write a caption that ends with a question. Add hashtags: #seattle, #seattleartexhibit, #animalart, #christophermarley, #exquisitecreatures, #museumtok, #seattleexhibit, #nature, #ethicalpreservation, #arttok.",
      "Schedule posts for 3 p.m. when possible. Saturday nights also consistently performed well.",
    ],
    postContent: "Once we had momentum on TikTok, Allison added a team member as a manager on the YouTube channel. From there, we downloaded TikTok videos, removed watermarks, and uploaded them as YouTube Shorts with fresh captions and the exhibit website linked in the description.",
  },
  {
    title: "RedNote and Influencer Marketing",
    color: "border-t-secondary",
    accent: "text-secondary",
    content: [
      "Alongside TikTok, we went after two channels the main account wasn't reaching: RedNote for Chinese-speaking audiences, and structured influencer campaigns through dedicated platforms.",
      "RedNote came from early research. Chinese-speaking users on the platform were already posting about Exquisite Creatures and exhibitions like it in Seattle. The audience was there and interested. Nobody had just given them a direct channel to the exhibit. We created a business account and started posting videos from the shared drive alongside original content built from exhibit photos.",
      "For influencer marketing, we spent time at the beginning researching which platforms would actually give us control over the process. After looking at several options and meeting with brand representatives, we settled on JoinBrands and Afluencer as the most practical tools for finding local creators and managing collaborations in a trackable way.",
      "On JoinBrands, we launched a campaign and started monitoring applications. When reviewing applicants, we looked at their social media accounts, content style, and engagement numbers. Once we selected someone, we laid out expectations clearly before they started. They had up to 60 days to visit the exhibit and post their content.",
      "We ran a campaign on Afluencer at the same time, reviewing applicants there using the same criteria. We also sent direct outreach to influencers on Instagram, which worked differently. It was more about finding someone whose content already aligned with art, travel, or local experiences, and reaching out in a way that felt personal.",
    ],
  },
  {
    title: "Digital Infrastructure",
    color: "border-t-accent",
    accent: "text-accent",
    content: [
      "The starting observation on the Google side was simple: the exhibit had a Google presence, but it wasn't set up in a way that made it easy to understand what was working or to improve anything over time. We started by auditing what existed and built outward from there.",
      "The work covered three connected things: paid visibility through Google Ads, organic visibility through Google Business Profile and SEO, and an AI toolbox Allison could use to keep marketing work moving internally after we left. Early in the semester we spent time learning how Google Ads, Analytics, and Tag Manager connect to each other, because you can't build useful tracking without understanding the full picture first.",
      "One early roadblock was the nonprofit ad route, which required approvals that took longer than expected and eventually led us to shift toward a paid campaign approach. Allison's feedback on audience, geography, price point, and keywords shaped what we actually built, which made the campaigns more usable than a generic setup would have been.",
    ],
  },
  {
    title: "Tourism and Transit Outreach",
    color: "border-t-destructive",
    accent: "text-destructive",
    content: [
      "The Visit Seattle opportunity came from Allison. She had been trying to get a response from them without success. We sent an outreach email through a nonprofit address, heard back from Chris within a few days, and set up a meeting to go over membership structure and benefits. After the meeting, Chris sent instructions for setting up an account on their extranet.",
    ],
  },
];

const Process = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="process" title="Process" subtitle="Our work ran across four tracks, each aimed at the same thing." />
    <div className="space-y-8">
      {workstreams.map((ws) => (
        <Card key={ws.title} className={`bg-card border-t-4 ${ws.color}`}>
          <CardHeader>
            <CardTitle className={`font-serif text-xl ${ws.accent}`}>{ws.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground/80 text-sm leading-relaxed">
            {ws.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {ws.steps && (
              <ol className="list-decimal ml-5 space-y-2 mt-4">
                {ws.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            )}
            {ws.postContent && <p className="mt-3">{ws.postContent}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Process;
