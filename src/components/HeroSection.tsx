import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Wrench, Zap } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen gradient-hero flex items-center pt-20 overflow-hidden">
    {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 animate-fade-in">
              <Zap className="w-4 h-4 text-amber" />
              <span className="text-cream text-sm font-medium">Your Trusted Industry Partner</span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream leading-tight animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              Building Tomorrow's{" "}
              <span className="text-gradient">Infrastructure</span>{" "}
              Today
            </h1>

            <p 
              className="text-lg text-cream/70 max-w-xl animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Comprehensive solutions in facility management, property renovation, 
              electrical manufacturing, and global trade. We transform visions into reality 
              with precision and excellence.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <Link to="/services">
                <Button variant="hero" size="xl">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-cream/10 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div>
                <div className="text-3xl font-bold text-amber">500+</div>
                <div className="text-cream/60 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber">25+</div>
                <div className="text-cream/60 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber">50+</div>
                <div className="text-cream/60 text-sm">Global Partners</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div 
            className="relative hidden lg:block animate-slide-in-right"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-teal/20 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-cream font-semibold text-lg">Facility Management</h3>
                    <p className="text-cream/60 text-sm">Complete property solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-teal/20 flex items-center justify-center">
                    <Wrench className="w-7 h-7 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-cream font-semibold text-lg">General Contracting</h3>
                    <p className="text-cream/60 text-sm">End-to-end project delivery</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-amber/20 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-amber" />
                  </div>
                  <div>
                    <h3 className="text-cream font-semibold text-lg">Electrical Solutions</h3>
                    <p className="text-cream/60 text-sm">Manufacturing & distribution</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-amber text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse-glow">
                ISO Certified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-amber rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
