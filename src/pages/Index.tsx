import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatSupport from "@/components/ChatSupport";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        {/* <PartnersSection /> */}
        <ServicesPreview />
        {/* <StatsSection /> */}
        {/* <TestimonialsSection /> */}
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Index;
