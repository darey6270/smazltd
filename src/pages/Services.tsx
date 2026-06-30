import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ChatSupport from "@/components/ChatSupport";
import {
  Wind,
  Wrench,
  Droplets,
  ShieldCheck,
  Building,
  Sparkles,
  UserCheck,
  Trees,
  Trash2,
  BriefcaseBusiness,
  ClipboardList,
  Flame,
  BatteryCharging,
  Zap,
  Siren,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "HVAC Maintenance Services",
    description:
      "Our HVAC Maintenance service ensures your heating, ventilation, and air conditioning systems operate efficiently, safely, and reliably. As part of our facility management solutions, we provide routine inspections, preventive maintenance, system diagnostics, cleaning, and performance optimization to minimize downtime, reduce energy costs, and extend equipment lifespan. Our skilled technicians help maintain a comfortable indoor environment while ensuring compliance with industry standards and operational requirements.",
  },
  {
    icon: Wrench,
    title: "Electrical & Plumbing Systems Services",
    description:
      "Our Electrical and Plumbing Systems service provides comprehensive maintenance, inspection, and repair solutions to ensure the safe and efficient operation of your facility's critical infrastructure. We deliver preventive and corrective maintenance, fault diagnosis, installations, and system upgrades to minimize disruptions, enhance reliability, and extend asset life. Our experienced technicians ensure all electrical and plumbing systems meet safety standards while supporting uninterrupted business operations and occupant comfort.",
  },
  {
    icon: Droplets,
    title: "Water Treatment & Sewage System Services",
    description:
      "Our Water Treatment and Sewage System service ensures the efficient operation, maintenance, and monitoring of water supply, treatment, and wastewater management systems. We provide preventive maintenance, system inspections, quality testing, repairs, and compliance management to maintain water quality, prevent system failures, and support environmental sustainability. Our expert team helps ensure reliable performance, regulatory compliance, and a safe, hygienic environment for your facility.",
  },
  {
    icon: ShieldCheck,
    title: "CCTV & Access Control Solutions",
    description:
      "Our CCTV and Access Control Solutions provide advanced security management to protect people, assets, and facilities. We offer the installation, monitoring, maintenance, and optimization of surveillance cameras, access control systems, biometric devices, and security infrastructure. Our solutions enhance safety, improve operational control, and ensure secure access to authorized personnel while supporting a safe and well-managed environment.",
  },
  {
    icon: Building,
    title: "Lift Maintenance Services",
    description:
      "Our Lift Maintenance service ensures the safe, reliable, and efficient operation of elevators and vertical transportation systems. We provide routine inspections, preventive maintenance, repairs, fault diagnosis, and performance testing to minimize downtime and extend equipment lifespan. Our experienced technicians ensure compliance with safety regulations while delivering smooth and uninterrupted lift operations for building occupants and visitors.",
  },
  {
    icon: Sparkles,
    title: "Janitorial Services",
    description:
      "Our Janitorial Services provide professional cleaning and hygiene maintenance to ensure a clean, healthy, and well-presented environment for your facility. We deliver routine and deep cleaning of offices, common areas, restrooms, and high-traffic spaces using industry-standard practices and eco-friendly products. Our trained staff focus on sanitation, waste management, and attention to detail to enhance comfort, safety, and overall facility appearance.",
  },
  {
    icon: UserCheck,
    title: "Security Services",
    description:
      "Our Security Services provide comprehensive protection for people, property, and assets within your facility. We offer trained security personnel, access monitoring, patrol services, and incident management to deter risks and ensure a safe environment. Our approach combines vigilance, professionalism, and modern security practices to maintain order, respond to emergencies, and deliver peace of mind for occupants and stakeholders.",
  },
  {
    icon: Trees,
    title: "Landscaping & Grounds Management",
    description:
      "Our Landscaping and Grounds Management service ensures your outdoor spaces are well-maintained, functional, and visually appealing. We provide lawn care, gardening, tree and shrub maintenance, irrigation management, and seasonal upkeep tailored to your facility’s needs. Our team focuses on enhancing curb appeal, promoting healthy green spaces, and maintaining clean, safe, and sustainable outdoor environments.",
  },
  {
    icon: Trash2,
    title: "Waste Management Services",
    description:
      "Our Waste Management service provides efficient and environmentally responsible collection, segregation, and disposal of waste within your facility. We ensure compliance with regulatory standards while promoting recycling and sustainable waste practices. Through scheduled collection, proper handling, and safe disposal methods, we help maintain a clean, hygienic, and eco-friendly environment for all occupants.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real Estate Management Services",
    description:
      "Our Real Estate Management service delivers comprehensive oversight of property assets to maximize value, efficiency, and performance. We handle tenant relations, lease administration, property maintenance coordination, rent collection support, and facility optimization. Our goal is to ensure smooth day-to-day operations, enhance property value, and provide a well-managed, profitable, and sustainable real estate portfolio for owners and stakeholders.",
  },
  {
    icon: ClipboardList,
    title: "Project Management Services",
    description:
      "Our Project Management service delivers end-to-end planning, coordination, and execution of facility-related projects. We manage renovations, installations, upgrades, and fit-outs with a focus on quality, cost control, and timely delivery. From initial concept to completion, we ensure effective stakeholder communication, risk management, and compliance with industry standards guaranteeing successful project outcomes that align with client objectives.",
  },
  {
    icon: Flame,
    title: "Fire Safety System Services",
    description:
      "Our Fire Safety System service ensures the installation, inspection, maintenance, and monitoring of critical fire protection systems within your facility. We manage fire alarms, extinguishers, sprinklers, and emergency response systems to ensure full functionality and compliance with safety regulations. Our proactive approach helps detect risks early, prevent fire hazards, and safeguard lives, assets, and property at all times.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Management Services",
    description:
      "Our Energy Management service focuses on optimizing energy consumption across your facility to improve efficiency, reduce operational costs, and support sustainability goals. We conduct energy audits, monitor usage patterns, implement efficiency strategies, and recommend system upgrades. Through data-driven insights and proactive management, we help you minimize waste, enhance performance, and achieve long-term energy savings.",
  },
  {
    icon: Zap,
    title: "Generator Services",
    description:
      "Our Generator Services ensure reliable backup power solutions to keep your facility running without interruption. We provide installation, routine maintenance, load testing, fuel management, and emergency repairs for optimal performance. Our team ensures generators are always ready to deliver stable power during outages, enhancing operational continuity, safety, and peace of mind.",
  },
  {
    icon: Siren,
    title: "Emergency & Disaster Management Services",
    description:
      "Our Emergency and Disaster Management service provides structured preparedness, response, and recovery solutions to protect lives, assets, and operations during critical incidents. We develop emergency response plans, conduct risk assessments, train personnel, and coordinate rapid response actions for incidents such as fire, flooding, or system failures. Our proactive approach ensures resilience, minimizes downtime, and supports safe and efficient recovery for your facility.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal rounded-full blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--cream)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--cream)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-amber/20 text-amber rounded-full text-sm font-semibold mb-6 border border-amber/30">
              Our Services
            </span>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
              SMAZ Integrated Facility Management Limited is your trusted partner for reliable,efficient, and professional facility management solutions. We take pride in delivering excellence that keep your environment safe, functional, and productive.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-muted/30">
        <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              What We Offer
            </h2>

            <p className="text-muted-foreground text-lg">
              Explore our wide range of integrated facility and industrial
              management services tailored to meet modern operational demands.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl p-8 border border-border shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-teal/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber to-teal flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h6 className="text-2xl font-bold text-foreground mb-4 leading-snug">
                    {service.title}
                  </h6>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Ready to Work With Us?
            </h2>

            <p className="text-lg md:text-xl text-cream/80 mb-10 leading-relaxed">
              Let’s help you optimize operations, improve efficiency, and build
              a safer and more productive environment for your business.
            </p>

            <Link to="/contact">
              <Button
                variant="hero"
                size="lg"
                className="gap-2 px-8 py-6 text-lg rounded-xl"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Services;