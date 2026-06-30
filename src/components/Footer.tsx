import { Building2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/Logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Facility Management", href: "#services" },
      { label: "Property Renovation", href: "#services" },
      { label: "General Contracting", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
    ],
    support: [
      { label: "Contact", href: "/contact" },
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
  
  {/* Logo Image */}
  <div className="flex-shrink-0">
    <img
      src={Logo}
      alt="SMAZ Tech & Facility Management Logo"
      className="w-20 h-16 sm:w-24 sm:h-20 object-contain"
    />
  </div>

  {/* Company Name */}
  <div className="flex flex-col justify-center">
    <span className="text-cream font-bold text-sm sm:text-lg lg:text-xl leading-tight hidden sm:block">
      SMAZ TECH & FACILITY
    </span>

    <span className="text-cream/70 text-xs sm:text-sm hidden md:block">
       MANAGEMENT
    </span>
  </div>
</Link>
            <p className="text-cream/80 transition-colors text-sm">
              SMAZ Integrated Facility Management Limited is your trusted partner for reliable,efficient, and professional facility management solutions. We take pride in delivering excellence that keep your environment safe, functional, and productive.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-cream/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-amber" />
              </div>
              <div className="text-sm">
                <div className="text-cream/60"><span className="text-amber font-semibold">RC Number</span>:9392166</div>
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
            © 2025 Smaz quantum horizon limited. All rights reserved.
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
