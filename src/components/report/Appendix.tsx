import SectionHeader from "./SectionHeader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import exhibit7 from "@/assets/exhibit-7.png";
import exhibit8 from "@/assets/exhibit-8.png";

const links = [
  { name: "Exquisite Creatures TikTok", url: "https://www.tiktok.com/@exquisitecreatures" },
  { name: "Exquisite Creatures YouTube", url: "http://www.youtube.com/@exquisitecreaturesexhibit" },
  { name: "Visit Seattle Listing", url: "https://visitseattle.org/members/biophilia-museums-and-exhibits-of-art-nature-and-science/" },
  { name: "Influencer Outreach Tracker (Excel)", url: "https://byu-my.sharepoint.com/:x:/r/personal/pbwall_byu_edu/Documents/Influencer%20Outreach.xlsx" },
  { name: "TripAdvisor Pre-Written Responses", url: "https://docs.google.com/document/d/1p_heJ9XJ_BYCJrHowvpUuj95EHM1rIluey_0MhZ9Wlo/edit" },
  { name: "King County Bus Impressions Data", url: "https://docs.google.com/document/d/1XK_J6R4qW5XYyk3I2r9-9wBdsWmokoyTuOf5yvTVDOg/edit" },
  { name: "Publer (video/photo downloader)", url: "https://publer.com/tools/photo-video-downloader" },
  { name: "VistaSocial (post scheduling)", url: "https://vistasocial.com/login" },
  { name: "CapCut (video editing)", url: "https://www.capcut.com" },
  { name: "JoinBrands", url: "https://www.joinbrands.com" },
  { name: "Afluencer", url: "https://afluencer.com" },
  { name: "JoinBrands Support, Diego Ross", url: "mailto:dr@joinbrands.com" },
];

const Appendix = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="appendix" title="Appendix" subtitle="Tools, platforms, accounts, and documents referenced throughout this report" accentColor="bg-muted-foreground" />
    <div className="bg-card border border-border rounded-lg overflow-hidden mb-10">
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className="text-primary font-serif">Resource</TableHead>
            <TableHead className="text-primary font-serif">URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((l) => (
            <TableRow key={l.name} className="border-border">
              <TableCell className="font-medium">{l.name}</TableCell>
              <TableCell>
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm break-all">
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
    </div>
  </section>
);

export default Appendix;
