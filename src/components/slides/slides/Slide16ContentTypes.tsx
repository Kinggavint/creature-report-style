import SlideLayout from "../SlideLayout";

const tested = [
  "Carousel — compilation of still photos of artwork",
  "Informational voiceover short video",
  '"Guess the creature" featuring a zoom in of a creature, then zoomed out',
  "Process vs. final result",
  "Aesthetically pleasing compilation of clips with an engaging caption",
  "Short clip videos featuring one piece of artwork",
];

const successful = [
  'Informational Christopher voiceover short video — especially videos with a niche topic (Chameleon, orchid preservation, isopod, etc.)',
  'Multiple clips with a trending audio, and appealing captions such as "your sign to visit the exquisite creatures exhibit", "Ever seen something like this in real life?"',
  'Videos sparking commentary regarding the ethics of the exhibit — "what 25+ years of ethically preserving creatures looks like"',
];

const Slide16ContentTypes = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-[44px] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#00A896" }}>
        Effective Content Through Trial and Error
      </h2>
      <div className="w-20 h-1 rounded-full mb-10" style={{ background: "#D4A853" }} />
      <div className="flex gap-10 flex-1">
        <div className="flex-1 rounded-xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h3 className="text-[26px] font-semibold mb-6" style={{ color: "#D4A853" }}>Types of Content Tested</h3>
          <ul className="space-y-4">
            {tested.map((t, i) => (
              <li key={i} className="text-[19px] leading-relaxed flex gap-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                <span style={{ color: "#D4A853" }}>•</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 rounded-xl p-8" style={{ background: "rgba(0,168,150,0.04)", border: "1px solid rgba(0,168,150,0.15)" }}>
          <h3 className="text-[26px] font-semibold mb-6" style={{ color: "#00A896" }}>Successful Content</h3>
          <ul className="space-y-4">
            {successful.map((t, i) => (
              <li key={i} className="text-[19px] leading-relaxed flex gap-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                <span style={{ color: "#00A896" }}>✓</span><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide16ContentTypes;
