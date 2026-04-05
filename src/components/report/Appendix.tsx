import SectionHeader from "./SectionHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import exhibit7 from "@/assets/exhibit-7.png";
import exhibit8 from "@/assets/exhibit-8.png";

const links = [
  { name: "Google Analytics 4 Dashboard", url: "https://analytics.google.com", type: "Analytics" },
  { name: "Google Ads (Paid)", url: "https://ads.google.com", type: "Advertising" },
  { name: "Google Ad Grant Portal", url: "https://www.google.com/grants/", type: "Advertising" },
  { name: "Google Business Profile", url: "https://business.google.com", type: "Local SEO" },
  { name: "Orlando Science Center Website", url: "https://www.osc.org", type: "Website" },
  { name: "Visit Orlando Partner Portal", url: "https://www.visitorlando.com", type: "Tourism" },
  { name: "Lynx Transit Information", url: "https://www.golynx.com", type: "Transit" },
  { name: "SunRail Schedule", url: "https://sunrail.com", type: "Transit" },
];

const Appendix = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="appendix" title="Appendix" subtitle="Key resources and references" accentColor="bg-muted-foreground" />
    <div className="bg-card border border-border rounded-lg overflow-hidden mb-10">
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className="text-primary font-serif">Resource</TableHead>
            <TableHead className="text-primary font-serif">Type</TableHead>
            <TableHead className="text-primary font-serif">URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((l) => (
            <TableRow key={l.name} className="border-border">
              <TableCell className="font-medium">{l.name}</TableCell>
              <TableCell className="text-muted-foreground">{l.type}</TableCell>
              <TableCell>
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  {l.url}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
      <div className="rounded-lg overflow-hidden border border-border">
        <img src={exhibit7} alt="Exhibit specimen" className="w-full h-auto" />
      </div>
      <div className="rounded-lg overflow-hidden border border-border">
        <img src={exhibit8} alt="Exhibit specimen" className="w-full h-auto" />
      </div>
    </div>
    <div className="text-center mt-16 pb-10">
      <div className="gradient-divider max-w-xs mx-auto mb-6" />
      <p className="text-muted-foreground text-sm">
        Exquisite Creatures Exhibit — OCI Final Report — Spring 2026
      </p>
      <p className="text-muted-foreground/60 text-xs mt-2">
        UCF Rosen College of Hospitality Management
      </p>
    </div>
  </section>
);

export default Appendix;
