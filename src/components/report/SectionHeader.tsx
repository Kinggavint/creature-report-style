interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  accentColor?: string;
}

const SectionHeader = ({ id, title, subtitle, accentColor = "bg-primary" }: SectionHeaderProps) => (
  <div id={id} className="scroll-mt-20 mb-10">
    <div className="flex items-center gap-4 mb-3">
      <div className={`section-accent-bar h-10 ${accentColor}`} />
      <h2 className="font-serif text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
    {subtitle && <p className="text-muted-foreground text-lg ml-6">{subtitle}</p>}
    <div className="gradient-divider mt-6" />
  </div>
);

export default SectionHeader;
