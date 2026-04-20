import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import CoverageSection from "@/components/CoverageSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <CoverageSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}
