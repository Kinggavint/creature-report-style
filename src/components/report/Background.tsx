import SectionHeader from "./SectionHeader";
import collageImg from "@/assets/exhibit-collage.png";
import exhibit1 from "@/assets/exhibit-1.png";
import exhibit2 from "@/assets/exhibit-2.png";

const Background = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <SectionHeader id="background" title="Background" accentColor="bg-accent" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div className="space-y-4 text-foreground/90 leading-relaxed">
        <p>
          The <strong className="text-primary">Exquisite Creatures</strong> exhibit is a traveling exhibition
          hosted at the Orlando Science Center, featuring an extraordinary collection of rare specimens
          from the natural world. The exhibit showcases preserved insects, marine life, and other
          organisms renowned for their remarkable beauty, symmetry, and biological complexity.
        </p>
        <p>
          As part of the Orlando Community Impact (OCI) program at UCF's Rosen College of Hospitality
          Management, our team was tasked with developing a comprehensive digital and community engagement
          strategy to maximize the exhibit's visibility, attract diverse audiences, and create lasting
          institutional value for the Orlando Science Center.
        </p>
        <p>
          The project was structured into four distinct workstreams — Digital Infrastructure, Tourism &
          Transit, Content & Social Media, and Community Engagement — each contributing specialized
          expertise toward a unified goal of elevating the exhibit's presence across digital and
          physical touchpoints.
        </p>
      </div>
      <div className="space-y-4">
        <div className="rounded-lg overflow-hidden border border-border">
          <img src={collageImg} alt="Exquisite Creatures exhibit collage" className="w-full h-auto" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden border border-border">
            <img src={exhibit1} alt="Exhibit specimen 1" className="w-full h-auto" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <img src={exhibit2} alt="Exhibit specimen 2" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Background;
