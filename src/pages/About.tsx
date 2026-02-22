import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock,
  ArrowRight
} from "lucide-react";
import ChatSupport from "@/components/ChatSupport";
import WhyUsSection from "@/components/WhyUsSection";

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Expert Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in every project, ensuring quality outcomes that exceed expectations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honesty and transparency guide our business practices, building trust with every client partnership.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients and partners to deliver solutions that truly meet their needs.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Embracing new technologies and methods to stay ahead and provide cutting-edge solutions.",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental",
  "ISO 45001:2018 Safety",
  "LEED Certified Projects",
  "Industry Association Memberships",
  "Professional Engineering Licenses",
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Building Excellence Since 2017
            </h1>
            <p className="text-lg text-cream/80">
              SMAZ TECH & FACILITY MANAGEMENT  is a leading multi-service industrial company delivering 
              comprehensive solutions across facility management, construction, and manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2017, SMAZ TECH & FACILITY MANAGEMENT  began as a small facility management company 
                  with a vision to transform how businesses approach their operational needs. 
                  Over the decades, we've grown into a comprehensive industrial solutions provider.
                </p>
                <p>
                  Today, we serve clients across multiple industries, from commercial real estate 
                  to manufacturing, offering integrated services that span the entire lifecycle 
                  of their facilities and equipment.
                </p>
                <p>
                  Our success is built on a foundation of technical expertise, unwavering commitment 
                  to quality, and deep understanding of our clients' needs. We don't just provide 
                  services—we build lasting partnerships.
                </p>
              </div>
            </div>
            {/* <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-elegant">
                <Award className="w-16 h-16 text-amber mb-6" />
                <h3 className="text-2xl font-bold text-cream mb-4">
                  Certified Excellence
                </h3>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3 text-cream/80">
                      <div className="w-2 h-2 bg-amber rounded-full" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do and how we serve our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-lg border border-border"
              >
                <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary rounded-2xl p-8">
              <Target className="w-12 h-12 text-amber mb-4" />
              <h3 className="text-2xl font-bold text-cream mb-4">Our Mission</h3>
              <p className="text-cream/80">
                To deliver exceptional industrial solutions that empower businesses to 
                operate efficiently, sustainably, and profitably. We combine technical 
                expertise with innovative approaches to solve complex challenges.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-8">
              <Clock className="w-12 h-12 text-amber mb-4" />
              <h3 className="text-2xl font-bold text-cream mb-4">Our Vision</h3>
              <p className="text-cream/80">
                To be the most trusted partner for integrated industrial services, 
                recognized for our commitment to excellence, innovation, and 
                sustainable practices that create lasting value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUsSection />

      {/* CTA Section */}
      <section className="py-20 bg-amber/20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
            Discover how our expertise and dedication can help your business thrive.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  );
};

export default About;
