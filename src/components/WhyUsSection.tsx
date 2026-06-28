import { Shield, Clock, Award, Users, HeadphonesIcon, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "We are committed to delivering high-quality facility management services through established procedures, skilled personnel, regular inspections, and continuous performance monitoring. Our quality assurance approach ensures compliance with industry standards, enhances operational efficiency, promotes safety, and maintains client satisfaction. By continuously evaluating and improving our processes, we strive to provide reliable, cost-effective, and professional services that consistently meet and exceed customer expectations.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We are committed to delivering all facility management services on time through effective planning, efficient resource management and proactive monitoring. Our focus on reliability and responsiveness ensures that tasks are completed within agreed timelines, minimizing disruptions and maintaining client satisfaction.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our expert team is made up of skilled and experienced professionals dedicated to delivering high-quality facility management services. Through continuous training, teamwork, and technical expertise, we ensure efficient operations, reliable service delivery, and consistent client satisfaction.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 operational Support",
    description: "We provide reliable 24/7 support to ensure uninterrupted facility management services at all times. Our dedicated team is always available to respond quickly to emergencies and service requests, ensuring continuous operations, minimal/no downtime, and maximum client confidence.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "We have a proven track record of delivering measurable results in facility management through efficient operations, skilled teams, and structured processes. Our focus on performance monitoring, continuous improvement, and client satisfaction ensures consistent service quality, reduced downtime, and reliable value delivery.",
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
            The SMAZ{" "}
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
