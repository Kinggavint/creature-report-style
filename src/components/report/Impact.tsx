import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import adsPaid from "@/assets/ads-paid.png";
import adsNonprofit from "@/assets/ads-nonprofit.png";
import ga4Users from "@/assets/ga4-users.png";
import ga4Channels from "@/assets/ga4-channels.png";
import ga4Events from "@/assets/ga4-events.png";
import ga4Events2 from "@/assets/ga4-events2.png";
import gbpInteractions from "@/assets/gbp-interactions.png";
import gbpDiscovery from "@/assets/gbp-discovery.png";

const Impact = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="impact" title="Impact & Analytics" accentColor="bg-accent" />

    {/* Google Ads */}
    <div className="mb-16">
      <h3 className="font-serif text-2xl font-semibold text-primary mb-6">Google Ads Performance</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Paid Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={adsPaid} alt="Google Ads paid campaign metrics" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Nonprofit Ad Grant Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={adsNonprofit} alt="Google Ads nonprofit grant metrics" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
      </div>
    </div>

    {/* GA4 */}
    <div className="mb-16">
      <h3 className="font-serif text-2xl font-semibold text-accent mb-6">Google Analytics 4</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Active Users Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={ga4Users} alt="GA4 active users chart" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Session Channel Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={ga4Channels} alt="GA4 session channels" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Event Count Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={ga4Events} alt="GA4 event count" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={ga4Events2} alt="GA4 event details" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
      </div>
    </div>

    {/* GBP */}
    <div>
      <h3 className="font-serif text-2xl font-semibold text-secondary mb-6">Google Business Profile</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Business Profile Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={gbpInteractions} alt="Google Business Profile interactions" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-sans">Search & Discovery</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={gbpDiscovery} alt="Google Business Profile discovery" className="w-full h-auto rounded" />
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Impact;
