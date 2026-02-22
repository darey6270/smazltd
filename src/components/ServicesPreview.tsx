import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Wrench, Zap, ArrowRight } from "lucide-react";

const featuredServices = [
  {
    icon: Building2,
    title: "Estate & Facility Management",
    description: "Comprehensive property and office facility management services ensuring optimal functionality.",
  },
  {
    icon: Wrench,
    title: "Property Management",
    description: "Full-scale renovation and general contracting for commercial and industrial properties.",
  },
  {
    icon: Zap,
    title: "Electrical & Electronics",
    description: "Manufacturing, assembly, and distribution of electrical components and systems.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Core{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Delivering excellence across multiple industries with our comprehensive service portfolio.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div
              key={service.title}
              className="service-card group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="hero" size="lg" className="gap-2">
              View All Services <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
