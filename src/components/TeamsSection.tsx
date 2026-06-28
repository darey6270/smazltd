import { Quote } from "lucide-react";
import cleaning from "@/assets/images/team/cleaning.jpeg";
import engineer from "@/assets/images/team/engineer.jpeg";
import manager from "@/assets/images/team/manager.jpeg";
import security from "@/assets/images/team/security.jpeg";
import technician from "@/assets/images/team/technician.jpeg";

const teams = [
  {
    name: "Manager",
    role: "Facility Managers",
    image: manager,
  },
  {
    name: "Engineers",
    role: "Engineers (Electrical & Mechanical)",
    image: engineer,
  },
  {
    name: "Technicians",
    role: "Skilled Technicians",
    image: technician,
  },
  {
    name: "Cleaning",
    role: "Cleaning Professionals",
    image: cleaning,
  },
  {
    name: "Security Personnel",
    role: "Security Personnel",
    image: security,
  },
];

const TeamsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient">Our Team</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg">
            Our workforce includes:
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="
                group
                bg-card
                rounded-2xl
                overflow-hidden
                border border-border
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
                ease-out
                relative
              "
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber/20 z-10" />

              {/* Team Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={team.image}
                  alt={team.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/20
                    to-transparent
                    opacity-80
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-foreground
                    mb-1
                    transition-colors
                    duration-300
                    group-hover:text-primary
                  "
                >
                  {team.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {team.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;