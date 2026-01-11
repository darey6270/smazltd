import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ChatSupport from "@/components/ChatSupport";

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Building2
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["123 Industrial Avenue", "Business District", "Metro City, MC 12345"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+2348189613430", "+2348189613430"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["info@smazltd.com", "support@smazltd.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM", "Sunday: Closed"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-cream/80">
              Ready to start your next project? Reach out to us and let's discuss 
              how we can help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select a service...</option>
                    <option value="facility">Estate & Facility Management</option>
                    <option value="renovation">Property Renovation</option>
                    <option value="electrical">Electrical & Electronics</option>
                    <option value="manufacturing">Manufacturing & Fabrication</option>
                    <option value="repair">Repair & Reconditioning</option>
                    <option value="trading">Trading & Distribution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
                  Send Message <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-primary rounded-2xl p-8">
                <p className="text-cream/80 mb-8">
                  We're here to help with all your industrial and facility management needs. 
                  Reach out through any of the channels below.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-amber" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cream mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-cream/70 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Industrial Avenue, Metro City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Contact;
