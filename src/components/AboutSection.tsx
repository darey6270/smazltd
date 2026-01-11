import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhyUsSection from "./WhyUsSection";

const highlights = [
  "ISO 9001 Certified Quality Management",
  "15+ Years of Industry Expertise",
  "Global Network of 50+ Partners",
  "24/7 Customer Support & Service",
  "Sustainable & Eco-Friendly Practices",
  "Cutting-Edge Technology Integration",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Excellence in Every{" "}
                <span className="text-gradient">Project We Deliver</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                For over 15 years, ProBuild Corp has been at the forefront of 
                facility management, construction, and electrical solutions. Our 
                commitment to quality and innovation has made us a trusted partner 
                for businesses across the globe.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Stats Cards */}
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-amber mb-2">98%</div>
                  <div className="text-muted-foreground text-sm">Client Satisfaction Rate</div>
                </div>
                <div className="bg-primary rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-cream mb-2">500+</div>
                  <div className="text-cream/70 text-sm">Projects Completed</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-primary rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-amber mb-2">200+</div>
                  <div className="text-cream/70 text-sm">Expert Team Members</div>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <div className="text-muted-foreground text-sm">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber/10 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
