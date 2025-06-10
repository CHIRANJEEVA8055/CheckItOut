
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ComparisonSection } from "@/components/ComparisonSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <ComparisonSection />
      <Footer />
    </div>
  );
};

export default Index;
