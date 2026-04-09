import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid, List } from "lucide-react";

// Import all slides
import Slide01Title from "./slides/Slide01Title";
import Slide02Team from "./slides/Slide02Team";
import Slide03SCQA from "./slides/Slide03SCQA";
import Slide04InsightDigital from "./slides/Slide04InsightDigital";
import Slide05GoogleAds from "./slides/Slide05GoogleAds";
import Slide06GA4 from "./slides/Slide06GA4";
import Slide07GBP from "./slides/Slide07GBP";
import Slide08SEO from "./slides/Slide08SEO";
import Slide09AIToolbox from "./slides/Slide09AIToolbox";
import Slide10Handoff from "./slides/Slide10Handoff";
import Slide11InsightSocial from "./slides/Slide11InsightSocial";
import Slide12TikTokAnalytics from "./slides/Slide12TikTokAnalytics";
import Slide13ViralVideo from "./slides/Slide13ViralVideo";
import Slide14TopTikToks from "./slides/Slide14TopTikToks";
import Slide15ViralTips from "./slides/Slide15ViralTips";
import Slide16ContentTypes from "./slides/Slide16ContentTypes";
import Slide17CreationProcess from "./slides/Slide17CreationProcess";
import Slide18SocialNextSteps from "./slides/Slide18SocialNextSteps";
import Slide19InsightInfluencer from "./slides/Slide19InsightInfluencer";
import Slide20RedNote from "./slides/Slide20RedNote";
import Slide21PlatformPerf from "./slides/Slide21PlatformPerf";
import Slide22InfluencerResults from "./slides/Slide22InfluencerResults";
import Slide23InfluencerNext from "./slides/Slide23InfluencerNext";
import Slide24Tourism from "./slides/Slide24Tourism";
import Slide25VisitSeattle from "./slides/Slide25VisitSeattle";
import Slide26BusAds from "./slides/Slide26BusAds";
import Slide27NextSteps from "./slides/Slide27NextSteps";
import Slide28Conclusion from "./slides/Slide28Conclusion";
import Slide29TicketSales from "./slides/Slide29TicketSales";

const slides = [
  { component: Slide01Title, title: "Title" },
  { component: Slide02Team, title: "Team Overview" },
  { component: Slide03SCQA, title: "Introduction (SCQA)" },
  { component: Slide04InsightDigital, title: "Insight 1: Digital Infrastructure" },
  { component: Slide05GoogleAds, title: "Google Ads" },
  { component: Slide06GA4, title: "GA4 + Tag Manager" },
  { component: Slide07GBP, title: "Google Business Profile" },
  { component: Slide08SEO, title: "SEO & AEO" },
  { component: Slide09AIToolbox, title: "AI Toolbox" },
  { component: Slide10Handoff, title: "Systems Handoff" },
  { component: Slide11InsightSocial, title: "Insight 2: Social Media" },
  { component: Slide12TikTokAnalytics, title: "TikTok Analytics" },
  { component: Slide13ViralVideo, title: "Most Viral Video" },
  { component: Slide14TopTikToks, title: "Top TikToks" },
  { component: Slide15ViralTips, title: "Viral Tips" },
  { component: Slide16ContentTypes, title: "Content Types" },
  { component: Slide17CreationProcess, title: "Creation Process" },
  { component: Slide18SocialNextSteps, title: "Social Next Steps" },
  { component: Slide19InsightInfluencer, title: "Insight 3: Influencer" },
  { component: Slide20RedNote, title: "RedNote + Influencer" },
  { component: Slide21PlatformPerf, title: "Platform Performance" },
  { component: Slide22InfluencerResults, title: "Results & Impact" },
  { component: Slide23InfluencerNext, title: "Influencer Next Steps" },
  { component: Slide24Tourism, title: "Tourism & Transit" },
  { component: Slide25VisitSeattle, title: "Visit Seattle" },
  { component: Slide26BusAds, title: "Bus Advertising" },
  { component: Slide27NextSteps, title: "Overall Next Steps" },
  { component: Slide29TicketSales, title: "Ticket Sales Impact" },
  { component: Slide28Conclusion, title: "Conclusion" },
];

const SlideViewer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scaleX = rect.width / 1920;
    const scaleY = rect.height / 1080;
    setScale(Math.min(scaleX, scaleY));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale, showSidebar]);

  useEffect(() => {
    const timeout = setTimeout(updateScale, 100);
    return () => clearTimeout(timeout);
  }, [showSidebar, updateScale]);

  const goTo = useCallback((idx: number) => {
    setCurrentSlide(Math.max(0, Math.min(slides.length - 1, idx)));
  }, []);

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && isFullscreen) {
        document.exitFullscreen?.();
      }
      if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, isFullscreen]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div ref={viewerRef} className="flex h-screen w-full" style={{ background: "#0A0A0A" }}>
      {/* Sidebar */}
      {showSidebar && !isFullscreen && (
        <div className="w-[220px] min-w-[220px] h-full overflow-y-auto border-r"
          style={{ borderColor: "rgba(255,255,255,0.1)", background: "#0D0D1A" }}>
          <div className="p-3">
            <p className="text-xs font-medium mb-3" style={{ color: "#00A896" }}>
              {slides.length} Slides
            </p>
            {slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-full text-left p-2 rounded-lg mb-1 transition-all text-xs ${
                  idx === currentSlide ? "" : "hover:bg-white/5"
                }`}
                style={{
                  color: idx === currentSlide ? "#00A896" : "rgba(255,255,255,0.6)",
                  background: idx === currentSlide ? "rgba(0,168,150,0.1)" : undefined,
                  boxShadow: idx === currentSlide ? "inset 0 0 0 2px #00A896" : undefined,
                }}
              >
                <span className="font-mono mr-1" style={{ color: "#D4A853" }}>{idx + 1}.</span>
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Toolbar */}
        {!isFullscreen && (
          <div className="h-12 flex items-center justify-between px-4 border-b"
            style={{ borderColor: "rgba(255,255,255,0.1)", background: "#0D0D1A" }}>
            <div className="flex items-center gap-2">
              <button onClick={() => setShowSidebar(!showSidebar)}
                className="p-1.5 rounded hover:bg-white/10 transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}>
                {showSidebar ? <List size={18} /> : <Grid size={18} />}
              </button>
              <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                Exquisite Creatures · Final Presentation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                {currentSlide + 1} / {slides.length}
              </span>
              <button onClick={toggleFullscreen}
                className="p-1.5 rounded hover:bg-white/10 transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}>
                <Maximize size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Slide canvas */}
        <div ref={containerRef} className="flex-1 relative overflow-hidden flex items-center justify-center">
          <div
            style={{
              width: 1920,
              height: 1080,
              transform: `scale(${scale})`,
              transformOrigin: "center center",
            }}
            className="absolute"
          >
            <CurrentSlideComponent />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            disabled={currentSlide === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all disabled:opacity-0"
            style={{ background: "rgba(0,0,0,0.5)", color: "white" }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            disabled={currentSlide === slides.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all disabled:opacity-0"
            style={{ background: "rgba(0,0,0,0.5)", color: "white" }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom bar in fullscreen */}
        {isFullscreen && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 rounded-full"
            style={{ background: "rgba(0,0,0,0.7)" }}>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              {currentSlide + 1} / {slides.length}
            </span>
            <button onClick={() => document.exitFullscreen()}
              className="p-1 rounded hover:bg-white/20" style={{ color: "white" }}>
              <Minimize size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideViewer;
