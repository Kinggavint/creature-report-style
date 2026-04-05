import heroImg from "@/assets/hero-storefront.png";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Exquisite Creatures exhibit storefront" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>
    <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
      <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-6">
        OCI Final Report • Spring 2026
      </p>
      <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Exquisite Creatures
      </h1>
      <p className="text-secondary font-serif text-2xl md:text-3xl mb-4 italic">
        Exhibit Final Report
      </p>
      <div className="gradient-divider max-w-xs mx-auto my-8" />
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        A comprehensive analysis of digital strategy, social media content, influencer marketing, and tourism outreach
        for the Exquisite Creatures exhibit in Seattle.
      </p>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#executive-summary" className="text-muted-foreground hover:text-primary transition-colors">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>
  </section>
);

export default Hero;
