import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const sections = [
  { id: "executive-summary", label: "Summary" },
  { id: "people", label: "People" },
  { id: "background", label: "Background" },
  { id: "process", label: "Process" },
  { id: "activities", label: "Activities" },
  { id: "conclusions", label: "Conclusions" },
  { id: "impact", label: "Impact" },
  { id: "next-steps", label: "Next Steps" },
  { id: "user-guide", label: "User Guide" },
  { id: "appendix", label: "Appendix" },
];

interface ReportNavProps {
  onExportPDF: () => void;
  onExportDOCX: () => void;
}

const ReportNav = ({ onExportPDF, onExportDOCX }: ReportNavProps) => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.find((o) => o.top > -100 && o.top < 300);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                active === s.id
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="outline" size="sm" onClick={onExportPDF} className="gap-1.5">
            <FileText className="h-3.5 w-3.5" />
            PDF
          </Button>
          <Button variant="outline" size="sm" onClick={onExportDOCX} className="gap-1.5">
            <Download className="h-3.5 w-3.5" />
            DOCX
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default ReportNav;
