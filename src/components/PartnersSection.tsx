const partners = [
  "Schneider Electric",
  "Siemens",
  "ABB",
  "Honeywell",
  "GE",
  "Johnson Controls",
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Trusted by Industry Leaders
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 px-6 rounded-lg bg-background/50 border border-border/50 hover:border-amber/30 transition-colors duration-300"
            >
              <span className="text-foreground/60 font-semibold text-sm md:text-base whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
