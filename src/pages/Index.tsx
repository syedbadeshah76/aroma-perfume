import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import Footer from "@/components/Footer";
import PerfumeSection from '@/components/PerfumeSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <PerfumeSection/>
      <Footer/>
    </div>
  );
};

export default Index;
