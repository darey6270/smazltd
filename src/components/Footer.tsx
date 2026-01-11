import { Building2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Facility Management", href: "#services" },
      { label: "Property Renovation", href: "#services" },
      { label: "General Contracting", href: "#services" },
      { label: "Manufacturing", href: "#services" },
      { label: "Import & Export", href: "#services" },
      { label: "Electrical Solutions", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Our Blog", href: "/blog" },
    ],
    support: [
      { label: "Contact", href: "#contact" },
      { label: "FAQ", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-cream">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
                        <div className="w-24 h-20 rounded-lg gradient-accent flex items-center justify-center">
                          <span className="text-accent-foreground font-bold text-xl">SMAZ</span>
                        </div>
                        <div className="flex flex-col item-center justify-between">
                        <span className="text-cream font-bold text-xl hidden sm:block">Smaz quantum </span>
                        <span className="text-cream font-bold text-xl hidden sm:block">horizon limited</span>
                        </div>
              </Link>
            <p className="text-cream/60 text-sm">
              Your trusted partner in facility management, construction, 
              and electrical solutions. Building excellence since 2009.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-cream/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-amber" />
              </div>
              <div className="text-sm">
                <div className="text-cream/60">ISO 9001 Certified</div>
                <div className="text-amber font-semibold">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-cream mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-amber transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-cream mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-cream/60 hover:text-amber transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-cream mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-amber transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © {currentYear} Smaz quantum horizon limited (SQH Limited). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-cream/60 hover:text-amber transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-cream/60 hover:text-amber transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-cream/60 hover:text-amber transition-colors text-sm">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
