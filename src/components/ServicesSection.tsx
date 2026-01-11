import { Building2, Wrench, ShoppingBag, Factory, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Estate & Facility Management",
    description: "Comprehensive property and office facility management services ensuring optimal functionality and value preservation of your assets.",
    features: ["Property Maintenance", "Office Management", "Asset Optimization"],
  },
  {
    icon: Wrench,
    title: "Property Renovation",
    description: "Transform spaces with our expert renovation services. From concept to completion, we deliver excellence in every detail.",
    features: ["Interior Remodeling", "Structural Upgrades", "Modern Retrofits"],
  },
  {
    icon: ShoppingBag,
    title: "General Contractor & Merchandise",
    description: "Full-spectrum contracting services and quality merchandise solutions tailored to meet diverse industry requirements.",
    features: ["Project Management", "Supply Chain", "Quality Assurance"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Fabrication",
    description: "State-of-the-art manufacturing capabilities including assembly, fabrication, and precision engineering solutions.",
    features: ["Custom Fabrication", "Assembly Lines", "Quality Control"],
  },
  {
    icon: Globe,
    title: "Import & Export Trading",
    description: "Global trade solutions connecting you to international markets. We handle buying, selling, and distribution worldwide.",
    features: ["Global Sourcing", "Logistics", "Market Access"],
  },
  {
    icon: Zap,
    title: "Electrical & Electronics",
    description: "Complete electrical solutions from manufacturing to repair. Operating, reconditioning, and distributing electronic components.",
    features: ["Equipment Repair", "Parts Distribution", "Technical Support"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From facility management to global trade, we deliver integrated solutions 
            that drive efficiency and growth across sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
