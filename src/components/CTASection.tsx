import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--cream)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">
            Ready to Start Your{" "}
            <span className="text-gradient">Next Project?</span>
          </h2>
          <p className="text-lg text-cream/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how our comprehensive solutions can help your business 
            grow and succeed. Get a free consultation and quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="gap-2">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button variant="heroOutline" size="xl" className="gap-2">
                <Phone className="w-5 h-5" /> Call Us Now
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-cream/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber">98%</div>
              <div className="text-cream/60 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber">24/7</div>
              <div className="text-cream/60 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber">ISO</div>
              <div className="text-cream/60 text-sm">Certified Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber">Free</div>
              <div className="text-cream/60 text-sm">Initial Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
