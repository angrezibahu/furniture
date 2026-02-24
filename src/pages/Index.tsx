import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustpilotStrip from "@/components/TrustpilotStrip";
import BedroomHero from "@/components/BedroomHero";
import FinanceBanner from "@/components/FinanceBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <AnnouncementBar />
      <Header />
      <TrustBar />
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <TrustpilotStrip />
      <BedroomHero />
      <FinanceBanner />
      <Footer />
    </div>
  );
};

export default Index;
