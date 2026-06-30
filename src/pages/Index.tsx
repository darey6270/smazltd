import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatSupport from "@/components/ChatSupport";
import TeamsSection from "@/components/TeamsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
  
{/* Company Overview Section */}
<section className="relative pt-32 pb-20 bg-primary overflow-hidden">
  
  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-amber/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl" />

  {/* Grid Overlay */}
  <div
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

  <div className="section-container relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      
      {/* Badge */}
      <span className="inline-flex items-center px-5 py-2.5 bg-amber/20 border border-amber/30 text-amber rounded-full text-sm sm:text-base font-semibold mb-8 shadow-md">
        Company Overview
      </span>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed sm:leading-loose font-medium max-w-3xl mx-auto">
        <span className="text-amber font-semibold">SMAZ Integrated Facility Management Limited </span> is a dynamic and professional
        facility management company committed to delivering
        <span className="text-amber font-semibold">
          {" "}high-quality, reliable, and cost-effective solutions{" "}
        </span>
        across Nigeria.
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />
        We specialize in integrated facility management services that ensure the smooth operation,safety, and sustainability of residential, commercial, and industrial properties. Our solutions are tailored to meet the specific needs of each client, ensuring efficiency and long-term value.
      </p>
    </div>
  </div>
</section>


        <ServicesPreview />
        {/* <StatsSection /> */}
        <TeamsSection />
        {/* <BlogSection /> */}
        <CTASection />
      </main>
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Index;
