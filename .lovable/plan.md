

# Exquisite Creatures Final Report — Interactive Web Page with Export

## Overview
Build a visually rich, dark-themed interactive web report inspired by the Exquisite Creatures exhibit aesthetic (jewel tones, deep blacks, iridescent accents). The report will contain all content from the PDF, embed the uploaded graphs and exhibit photos, and include export buttons for PDF and DOCX.

## Design Direction
- **Dark background** (`#0A0A0A` to `#1A1A2E`) with jewel-tone accents (emerald, sapphire, amber) reflecting the exhibit's specimens
- **Color palette**: Deep navy/black backgrounds, teal/emerald accent (`#00A896`), warm gold highlights (`#D4A853`), cream text
- **Typography**: Clean serif headings (Georgia), sans-serif body text
- **Visual motif**: Subtle gradient dividers between sections, colored accent bars on section headers
- **Layout**: Full-width hero with exhibit photo, then structured sections with cards for key metrics

## Structure

### Page Sections
1. **Hero/Cover** — Title "Exquisite Creatures Exhibit: OCI Final Report, Spring 2026" with exhibit storefront photo as background
2. **Table of Contents** — Clickable navigation with smooth scroll
3. **Executive Summary** — Key highlights in accent-colored stat cards (619K views, 1.93K clicks, etc.)
4. **People Involved** — Team member profiles in a grid layout
5. **Background** — Narrative text with exhibit collage photo
6. **Process** — Four workstream subsections with distinct accent colors
7. **List of Activities** — Organized by workstream with bullet lists
8. **Conclusions** — Text sections with subtle card styling
9. **Impact** — Data-heavy section embedding the uploaded analytics screenshots (Google Ads, GA4, Business Profile charts)
10. **Next Steps** — Actionable items with icon markers
11. **User Guide** — Expandable accordion sections for each guide
12. **Appendix** — Links table

### Key Features
- **Sticky nav bar** for quick section jumping
- **Embedded images**: All uploaded graphs (Google Ads, GA4, Business Profile) placed in their relevant sections
- **Export buttons**: PDF (via `window.print()` with print stylesheet) and DOCX (via `docx` npm library generating the full report)
- **Smooth scroll** and fade-in animations on scroll

## Technical Approach

### Files to Create/Modify
- `src/pages/Index.tsx` — Main report page component
- `src/components/report/` — Section components (Hero, TableOfContents, ExecutiveSummary, etc.)
- `src/index.css` — Print styles and custom CSS
- Copy all uploaded images to `src/assets/` for embedding
- Install `docx` and `file-saver` packages for DOCX export

### Image Placement
- Exhibit storefront (`image-17.png`) → Hero background
- Exhibit collage (`image-18.png`) → Background section
- Google Ads paid campaign (`image-10.png`) → Digital Infrastructure Impact
- Google Ads nonprofit (`image-9.png`) → Digital Infrastructure Impact
- GA4 active users (`image-11.png`) → Digital Infrastructure Impact
- GA4 channel value (`image-12.png`) → Digital Infrastructure Impact
- GA4 event count (`image-13.png` or `image-14.png`) → Digital Infrastructure Impact
- Business Profile interactions (`image-15.png`) → Tourism/Transit Impact
- Business Profile discovery (`image-16.png`) → Tourism/Transit Impact
- Earlier uploaded exhibit images (`image.png` through `image-8.png`) — decorative accents throughout

### Export
- **PDF**: Print-optimized stylesheet that switches to white background, hides nav/buttons, and formats for letter-size pages
- **DOCX**: JavaScript generation using the `docx` library, triggered by a button click, producing a formatted document with all text content

