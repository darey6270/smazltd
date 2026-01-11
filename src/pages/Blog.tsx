import { ArrowRight, Calendar, User, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ChatSupport from "@/components/ChatSupport";

const allPosts = [
  {
    id: 1,
    slug: "modern-facility-management-trends-2024",
    title: "Modern Facility Management Trends Shaping 2024",
    excerpt: "Discover the latest innovations in facility management, from IoT integration to sustainable practices that are transforming how businesses operate.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    author: "James Mitchell",
    date: "January 5, 2024",
    readTime: "5 min read",
    category: "Facility Management"
  },
  {
    id: 2,
    slug: "electrical-safety-standards-commercial-buildings",
    title: "Essential Electrical Safety Standards for Commercial Buildings",
    excerpt: "A comprehensive guide to electrical safety compliance and best practices for maintaining safe commercial and industrial environments.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
    author: "Sarah Chen",
    date: "December 28, 2023",
    readTime: "7 min read",
    category: "Electrical Systems"
  },
  {
    id: 3,
    slug: "sustainable-renovation-practices",
    title: "Sustainable Renovation Practices for Modern Offices",
    excerpt: "How eco-friendly renovation strategies can reduce costs, improve employee wellbeing, and contribute to your company's sustainability goals.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    author: "Michael Torres",
    date: "December 15, 2023",
    readTime: "6 min read",
    category: "Renovation"
  },
  {
    id: 4,
    slug: "electronics-manufacturing-quality-control",
    title: "Quality Control in Electronics Manufacturing",
    excerpt: "Best practices for ensuring product quality and reliability in electronics manufacturing, from component selection to final testing.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    author: "David Park",
    date: "December 10, 2023",
    readTime: "8 min read",
    category: "Manufacturing"
  },
  {
    id: 5,
    slug: "property-maintenance-winter-checklist",
    title: "Essential Property Maintenance Winter Checklist",
    excerpt: "Prepare your commercial property for winter with this comprehensive maintenance checklist covering HVAC, plumbing, and structural concerns.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    author: "Emily Watson",
    date: "November 28, 2023",
    readTime: "4 min read",
    category: "Property Management"
  },
  {
    id: 6,
    slug: "smart-building-automation-guide",
    title: "Complete Guide to Smart Building Automation",
    excerpt: "Explore how smart building technologies can optimize energy usage, enhance security, and improve occupant comfort in commercial spaces.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    author: "James Mitchell",
    date: "November 15, 2023",
    readTime: "10 min read",
    category: "Technology"
  }
];

const categories = ["All", "Facility Management", "Electrical Systems", "Renovation", "Manufacturing", "Property Management", "Technology"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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


         <section className="pt-32 pb-16 bg-primary">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-amber/20 text-amber rounded-full text-sm font-semibold mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber mb-6">
              Industry Insights & News
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Expert perspectives on facility management, electrical systems, renovation, and more.
            </p>

            <p className="text-lg text-cream/80">
              Ready to start your next project? Reach out to us and let's discuss 
              how we can help your business succeed.
            </p>
          </div>
        </div>
      </section>   
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-full border-border"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Blog;
