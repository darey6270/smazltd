import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CEO, TechCorp Industries",
    content: "ProBuild Corp transformed our manufacturing facility with exceptional attention to detail. Their team delivered on time and exceeded our quality expectations.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Operations Director, Global Logistics",
    content: "Outstanding facility management services. They've reduced our operational costs by 30% while improving overall building performance.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Managing Partner, Estate Holdings",
    content: "We've worked with ProBuild on multiple renovation projects. Their professionalism and expertise make them our go-to contractor for all our properties.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our{" "}
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what industry leaders have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
