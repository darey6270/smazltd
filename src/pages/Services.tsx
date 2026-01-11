import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ChatSupport from "@/components/ChatSupport";
import { 
  Building2, 
  Wrench, 
  Zap, 
  Factory, 
  Package, 
  Settings,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Estate & Office Facility Management",
    description: "Comprehensive property management solutions for commercial estates, office buildings, and mixed-use developments.",
    features: [
      "24/7 Building Operations",
      "Preventive Maintenance Programs",
      "Energy Management Systems",
      "Tenant Relations & Support",
      "Compliance & Safety Audits",
      "Vendor Management"
    ],
  },
  {
    icon: Wrench,
    title: "Property Renovation & Contracting",
    description: "Full-scale renovation and general contracting services for commercial, industrial, and residential properties.",
    features: [
      "Complete Building Renovations",
      "Interior Fit-outs",
      "Structural Modifications",
      "MEP Upgrades",
      "Project Management",
      "Cost Estimation & Budgeting"
    ],
  },
  {
    icon: Zap,
    title: "Electrical & Electronics",
    description: "Manufacturing, assembly, and distribution of electrical and electronic components and systems.",
    features: [
      "Custom Manufacturing",
      "Component Assembly",
      "Quality Testing",
      "Import & Export Services",
      "Distribution Networks",
      "Technical Support"
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Fabrication",
    description: "Industrial manufacturing and precision fabrication services for diverse industry sectors.",
    features: [
      "Custom Fabrication",
      "Precision Manufacturing",
      "Material Processing",
      "Quality Assurance",
      "Prototyping Services",
      "Mass Production"
    ],
  },
  {
    icon: Settings,
    title: "Repair & Reconditioning",
    description: "Expert repair, maintenance, and reconditioning services to extend equipment lifespan.",
    features: [
      "Equipment Diagnostics",
      "Preventive Maintenance",
      "Component Replacement",
      "Performance Optimization",
      "Warranty Services",
      "Emergency Repairs"
    ],
  },
  {
    icon: Package,
    title: "Trading & Distribution",
    description: "Global trading operations including buying, selling, importing, and exporting of industrial goods.",
    features: [
      "Global Sourcing",
      "Import/Export Services",
      "Wholesale Distribution",
      "Inventory Management",
      "Logistics Coordination",
      "Market Analysis"
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

        {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--cream)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--cream)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-amber/20 text-amber rounded-full text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Comprehensive Industrial Solutions
            </h1>
            <p className="text-lg text-cream/80">
              From facility management to manufacturing, we deliver end-to-end solutions 
              that drive efficiency and excellence across all your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber/20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your business grow and succeed.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="gap-2">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Services;
