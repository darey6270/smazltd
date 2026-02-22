import { Shield, Clock, Award, Users, HeadphonesIcon, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every project meets international standards with our rigorous quality control processes.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand time is money. Our projects are completed within agreed timelines.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "200+ skilled professionals with decades of combined experience.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support to address your needs anytime.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "98% client satisfaction rate with measurable business impact.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 gradient-hero relative overflow-hidden">
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">
            The ProBuild{" "}
            <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-cream/70 text-lg">
            Partner with a company that delivers excellence at every step. 
            Here's why industry leaders choose us.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 rounded-xl bg-cream/5 border border-cream/10 backdrop-blur-sm hover:bg-cream/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-amber/20 flex items-center justify-center mb-4 group-hover:bg-amber/30 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-amber" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-cream mb-2">
                {reason.title}
              </h3>
              <p className="text-cream/60">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
