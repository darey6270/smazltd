import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" ,},
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    // { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];


  
  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary/20">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
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
      SMAZ TECH & FACILITY MANAGEMENT
    </span>

    <span className="text-cream/70 text-xs sm:text-sm hidden md:block">
      Integrated Industrial Solutions
    </span>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.href) 
                    ? "text-amber" 
                    : "text-cream/80 hover:text-amber"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-cream/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-medium transition-colors py-2 ${
                    isActive(link.href)
                      ? "text-amber"
                      : "text-cream/80 hover:text-amber"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" size="lg" className="mt-4 w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
