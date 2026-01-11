import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4">
                Contact Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let's Build{" "}
                <span className="text-gradient">Something Great</span>{" "}
                Together
              </h2>
              <p className="text-muted-foreground text-lg">
                Ready to start your next project? Get in touch with our team 
                for a consultation and free quote.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">info@probuildcorp.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                  <p className="text-muted-foreground">
                    123 Business District, Suite 500<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 transition-all">
                  <option value="">Select a service</option>
                  <option value="facility">Facility Management</option>
                  <option value="renovation">Property Renovation</option>
                  <option value="contractor">General Contracting</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="trading">Import/Export Trading</option>
                  <option value="electrical">Electrical & Electronics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button variant="hero" size="xl" className="w-full">
                Submit Request
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
