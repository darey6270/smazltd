import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MissionSection from  "@/components/MissionSection";
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock,
  ArrowRight
} from "lucide-react";
import ChatSupport from "@/components/ChatSupport";
import WhyUsSection from "@/components/WhyUsSection";

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Expert Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Excellence drives everything we do. We are committed to delivering high-quality facility management services through skilled teams, efficient processes, and continuous improvement. Our focus on professionalism, reliability, safety, and client satisfaction ensures we consistently exceed expectations and provide outstanding value in every service we deliver.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Integrity is a fundamental principle that guides every aspect of our operations. We conduct our business with honesty, transparency, accountability, and professionalism, ensuring that we consistently uphold the trust placed in us by our clients, employees, and stakeholders. We are committed to ethical practices, compliance with regulations, and delivering our services with fairness and responsibility, fostering long-term relationships built on confidence and mutual respect.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "At SMAZ Limited, we believe that successful facility management is built on strong collaboration. We work closely with our clients, stakeholders, suppliers, and team members to ensure seamless service delivery and effective problem-solving. Through open communication, mutual respect, and a shared commitment to excellence, we foster productive partnerships that enhance operational efficiency, support client objectives, and deliver sustainable value.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "we embrace innovation to improve facility management services through modern technologies, efficient processes, and smart solutions. Our commitment to continuous improvement and creative problem-solving helps us enhance service quality, reduce operational costs, and deliver more effective and sustainable outcomes for our clients.",
  },
   {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Clients are at the center of everything we do",
  },
  {
    icon: Users,
    title: "Professionalism",
    description: "We deliver services with competence and excellence",
  },
  {
    icon: TrendingUp,
    title: "Reliability",
    description: "We uphold honesty and transparency",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental",
  "ISO 45001:2018 Safety",
  "LEED Certified Projects",
  "Industry Association Memberships",
  "Professional Engineering Licenses",
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Building Excellence Since 2017
            </h1>
            <p className="text-lg text-cream/80">
              SMAZ TECH & FACILITY MANAGEMENT  is a leading multi-service industrial company delivering 
              comprehensive solutions across facility management, construction, and manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
{/* Story Section */}
<section className="py-20 relative overflow-hidden">
  <div className="section-container">
    <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
      
      {/* Left Content */}
      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-amber/10 text-amber text-sm font-semibold mb-5">
          Who We Are
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          About Us
        </h2>

        <div className="space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            Founded in 2020, SMAZ Integrated Facility Management began as a
            small but ambitious facility management company with a clear vision:
            to redefine how businesses manage and maintain their operational
            environments.
          </p>

          <p>
            Over the years, we have grown into a trusted provider of integrated
            facility management solutions, supporting clients across multiple
            industries. Our services are designed to cover the full spectrum of
            facility needs, ensuring smooth, safe, and efficient operations.
          </p>

          <p>
            At SMAZ Integrated Facility Management, we believe in building
            lasting partnerships founded on trust, professionalism, and
            performance. Our journey continues with a commitment to innovation,
            excellence, and continuous improvement.
          </p>
        </div>

        {/* Certifications */}
        {/* <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-muted/40 border border-border rounded-xl px-4 py-3"
            >
              <div className="w-3 h-3 rounded-full bg-amber flex-shrink-0" />
              <span className="text-sm text-foreground font-medium">
                {cert}
              </span>
            </div>
          ))}
        </div> */}


      </div>

      {/* Right Image */}
      <div className="relative w-full">
        
        {/* Background Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-teal/20 rounded-full blur-3xl" />

        {/* Main Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
          <img
            src="https://images.unsplash.com/photo-1581092919535-7146ff1a590b?q=80&w=1200&auto=format&fit=crop"
            alt="Facility Management"
            className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Overlay Card */}
          <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-border rounded-2xl p-4 sm:p-5 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              Trusted Facility Experts
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivering reliable integrated facility management solutions with
              professionalism, innovation, and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```


      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do and how we serve our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-lg border border-border"
              >
                <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />
  

      <WhyUsSection />

      {/* CTA Section */}
      <section className="py-20 bg-amber/20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
            Discover how our expertise and dedication can help your business thrive.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  );
};

export default About;
