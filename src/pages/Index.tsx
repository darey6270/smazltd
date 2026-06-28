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
        {/* <PartnersSection /> */}
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
