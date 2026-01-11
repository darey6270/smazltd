import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChatSupport from "@/components/ChatSupport";

const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}> = {
  "modern-facility-management-trends-2024": {
    title: "Modern Facility Management Trends Shaping 2024",
    excerpt: "Discover the latest innovations in facility management, from IoT integration to sustainable practices that are transforming how businesses operate.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
    author: "James Mitchell",
    authorRole: "Senior Facility Manager",
    date: "January 5, 2024",
    readTime: "5 min read",
    category: "Facility Management",
    content: [
      "The facility management industry is undergoing a significant transformation as we enter 2024. With technological advancements and changing workplace dynamics, facility managers must adapt to new trends that promise to reshape how we maintain and operate commercial spaces.",
      "## IoT and Smart Building Integration",
      "The Internet of Things (IoT) has become a cornerstone of modern facility management. Smart sensors now monitor everything from occupancy levels to air quality, providing real-time data that enables proactive maintenance and energy optimization. Buildings equipped with IoT technology can reduce energy consumption by up to 30% while improving occupant comfort.",
      "## Sustainability and Green Practices",
      "Environmental sustainability is no longer optional—it's a business imperative. Facilities are implementing comprehensive green initiatives, from renewable energy sources to waste reduction programs. LEED certification and similar standards are becoming the baseline expectation for commercial properties.",
      "## Predictive Maintenance",
      "Gone are the days of reactive maintenance. Advanced analytics and machine learning now enable facility managers to predict equipment failures before they occur. This shift from preventive to predictive maintenance reduces downtime, extends equipment lifespan, and significantly cuts maintenance costs.",
      "## Hybrid Workplace Support",
      "The hybrid work model has fundamentally changed space utilization patterns. Facility managers must now create flexible environments that support both in-person collaboration and remote work integration. This includes implementing hot-desking systems, creating collaboration zones, and ensuring robust technology infrastructure.",
      "## Conclusion",
      "As these trends continue to evolve, facility managers who embrace innovation will be best positioned to create efficient, sustainable, and people-centric environments. The key is to remain adaptable and continuously invest in both technology and talent."
    ]
  },
  "electrical-safety-standards-commercial-buildings": {
    title: "Essential Electrical Safety Standards for Commercial Buildings",
    excerpt: "A comprehensive guide to electrical safety compliance and best practices for maintaining safe commercial and industrial environments.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=600&fit=crop",
    author: "Sarah Chen",
    authorRole: "Electrical Systems Engineer",
    date: "December 28, 2023",
    readTime: "7 min read",
    category: "Electrical Systems",
    content: [
      "Electrical safety in commercial buildings is not just a regulatory requirement—it's a fundamental aspect of protecting lives and property. This guide covers the essential standards and best practices that every facility manager and building owner should understand.",
      "## Understanding NEC Requirements",
      "The National Electrical Code (NEC) sets the foundation for electrical safety in the United States. Compliance with NEC requirements ensures that electrical installations meet minimum safety standards. Key areas include proper grounding, circuit protection, and conductor sizing.",
      "## Regular Inspection Protocols",
      "Establishing a routine inspection schedule is crucial for maintaining electrical safety. Inspections should cover panel boxes, wiring conditions, grounding systems, and emergency lighting. Documentation of all inspections creates an audit trail and helps identify recurring issues.",
      "## Arc Flash Prevention",
      "Arc flash incidents can cause severe injuries and significant property damage. Prevention strategies include proper labeling of electrical equipment, maintaining appropriate working distances, and ensuring workers use appropriate personal protective equipment (PPE).",
      "## Emergency Preparedness",
      "Every commercial building should have a comprehensive electrical emergency plan. This includes clear shutdown procedures, emergency contact information, and regular drills. Backup power systems should be tested monthly to ensure reliability during outages.",
      "## Training and Certification",
      "Only qualified personnel should perform electrical work. Investing in ongoing training ensures that maintenance staff stay current with evolving codes and best practices. Certification programs provide standardized validation of electrical competency."
    ]
  },
  "sustainable-renovation-practices": {
    title: "Sustainable Renovation Practices for Modern Offices",
    excerpt: "How eco-friendly renovation strategies can reduce costs, improve employee wellbeing, and contribute to your company's sustainability goals.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=600&fit=crop",
    author: "Michael Torres",
    authorRole: "Project Manager",
    date: "December 15, 2023",
    readTime: "6 min read",
    category: "Renovation",
    content: [
      "Sustainable renovation is transforming how businesses approach office improvements. Beyond environmental benefits, green renovation practices deliver tangible returns through reduced operating costs and improved employee satisfaction.",
      "## Material Selection",
      "Choosing sustainable materials is the foundation of any green renovation project. Look for recycled content, low-VOC paints and finishes, and materials with transparent supply chains. Bamboo, reclaimed wood, and recycled metal are excellent alternatives to conventional options.",
      "## Energy Efficiency Upgrades",
      "Renovation projects provide ideal opportunities to improve energy efficiency. LED lighting retrofits, smart HVAC controls, and improved insulation can dramatically reduce energy consumption. Many utilities offer rebates that offset upgrade costs.",
      "## Water Conservation",
      "Water-efficient fixtures and systems should be standard in any renovation. Low-flow faucets, dual-flush toilets, and sensor-activated fixtures reduce water usage without sacrificing functionality. Greywater recycling systems offer additional savings for larger facilities.",
      "## Waste Management",
      "Construction waste represents a significant environmental impact. Developing a comprehensive waste management plan that prioritizes recycling and material reuse can divert up to 90% of renovation waste from landfills.",
      "## Biophilic Design",
      "Incorporating natural elements into office design improves both sustainability and employee wellbeing. Living walls, natural lighting optimization, and indoor plants create healthier work environments while connecting occupants with nature."
    ]
  }
};

const defaultPost = {
  title: "Article Coming Soon",
  excerpt: "This article is currently being written by our team of experts.",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
  author: "Editorial Team",
  authorRole: "Content Team",
  date: "Coming Soon",
  readTime: "5 min read",
  category: "General",
  content: [
    "This article is currently being developed. Please check back soon for the full content.",
    "In the meantime, explore our other articles for insights on facility management, electrical systems, and renovation practices."
  ]
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] || defaultPost : defaultPost;

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
      
      <main className="pt-20">
        {/* Hero */}
        <section className="relative">
          <div className="aspect-[21/9] max-h-[500px] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32 z-10">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
                {post.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>
                    <strong className="text-foreground">{post.author}</strong>
                    <span className="hidden sm:inline"> · {post.authorRole}</span>
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_auto] gap-12">
                {/* Article Content */}
                <article className="prose prose-lg max-w-none">
                  {post.content.map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                          {paragraph.replace("## ", "")}
                        </h2>
                      );
                    }
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </article>

                {/* Share Sidebar */}
                <aside className="lg:sticky lg:top-24 lg:self-start">
                  <div className="flex lg:flex-col gap-4 p-4 bg-muted/50 rounded-xl">
                    <span className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </span>
                    <div className="flex lg:flex-col gap-3">
                      <button className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors">
                        <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </button>
                      <button className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors">
                        <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </button>
                      <button className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors">
                        <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </button>
                    </div>
                  </div>
                </aside>
              </div>

              {/* CTA */}
              <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need Expert Assistance?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Our team of professionals is ready to help with your facility management, renovation, or electrical needs.
                </p>
                <Link to="/#contact">
                  <Button variant="hero" size="lg">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  );
};

export default BlogPost;
