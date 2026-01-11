import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
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
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Industry News & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest trends, best practices, and insights from our team of industry experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
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

              {/* Content */}
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

        {/* View All Button */}
        <div className="text-center">
          <Link to="/blog">
            <Button variant="outline" size="lg" className="group">
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
