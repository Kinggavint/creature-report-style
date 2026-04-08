

# Exquisite Creatures — Interactive Web Slide Presentation

## Overview
Fullscreen interactive slide deck built in React, reorganized per the Pyramid Principle (SCQA → Key Insights → Conclusion). All text verbatim from the rough draft. Dark theme with exhibit aesthetic. Custom charts via recharts. Keyboard/click navigation, fullscreen mode, thumbnail sidebar.

## Revised Slide Order (Team Overview moved to beginning)

```text
Slide 1:  Title — "Exquisite Creatures Exhibit: OCI Final Presentation, Spring 2026"
Slide 2:  Team Overview (Joy, Payton, Christy, Julia, Gavin — roles & photos)
Slide 3:  SCQA Introduction (situation, complication, question, answer)
Slide 4:  Key Insight 1 header — "Digital Infrastructure Drove Measurable Awareness"
Slide 5:    Google Ads data — custom chart + stat callouts
Slide 6:    GA4 + Tag Manager — setup, issue, fix
Slide 7:    Google Business Profile — custom chart + mobile discovery
Slide 8:    SEO & AEO Recommendations
Slide 9:    AI Toolbox
Slide 10:   Systems Handoff — "Built to Last" table
Slide 11: Key Insight 2 header — "Social Media Content Created Viral Traction"
Slide 12:   TikTok Analytics overview — custom chart
Slide 13:   Most Viral Video — with TikTok screenshot
Slide 14:   Highest Performing TikToks comparison — custom chart
Slide 15:   Tips for Viral Videos
Slide 16:   Effective Content Types
Slide 17:   Content Creation Process — with CapCut screenshots
Slide 18:   Social Media Next Steps
Slide 19: Key Insight 3 header — "Influencer & Cross-Platform Outreach Expanded Reach"
Slide 20:   RedNote + Influencer goals
Slide 21:   Platform Performance — JoinBrands/Afluencer data
Slide 22:   Results & Impact
Slide 23:   Key Takeaways & Next Steps
Slide 24: Tourism & Transit Partnerships header
Slide 25:   Visit Seattle Partnership Value
Slide 26:   King County Bus Advertising
Slide 27: Overall Next Steps
Slide 28: Conclusion
```

## Design
- Dark background (#0A0A0A → #1A1A2E), teal (#00A896) headers, gold (#D4A853) accents
- Playfair Display titles, Inter body text
- Exhibit images as subtle background accents on section divider slides only
- Custom recharts charts for Google Ads, TikTok, GBP data
- TikTok screenshots, CapCut screenshots, team photos embedded where relevant

## Technical Approach
- All slides at 1920×1080, CSS-transform scaled to viewport
- Keyboard nav (arrows, Space, Escape), fullscreen via Fullscreen API
- Thumbnail sidebar for quick navigation
- `SlideLayout.tsx` base wrapper, `SlideViewer.tsx` main viewer
- Individual slide components in `src/components/slides/slides/`
- Chart components in `src/components/slides/charts/`
- Install `recharts` for interactive charts
- All content transcribed verbatim from rough draft — only reordered per Pyramid Principle

