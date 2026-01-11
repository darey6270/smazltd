import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "500+",
    label: "Projects Completed",
    description: "Across multiple industries",
  },
  {
    icon: Users,
    value: "150+",
    label: "Expert Team",
    description: "Skilled professionals",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries Served",
    description: "Global presence",
  },
  {
    icon: Award,
    value: "25+",
    label: "Years Experience",
    description: "Industry expertise",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-xl bg-amber/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber/30 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-amber" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-cream mb-2">
                {stat.value}
              </div>
              <div className="text-cream font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-cream/60 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
