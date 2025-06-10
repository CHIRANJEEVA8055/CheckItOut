
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Award } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Compare Sports & Fitness
            <span className="text-primary block">Products Across Platforms</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find the best deals on sports gear, fitness equipment, and supplements 
            from Amazon, Flipkart, Decathlon, Nike, Adidas, Puma and more.
          </p>
          <Button size="lg" className="mr-4">
            <Search className="mr-2 h-5 w-5" />
            Start Comparing
          </Button>
          <Button variant="outline" size="lg">
            View Deals
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">50,000+</h3>
              <p className="text-muted-foreground">Products Compared</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Award className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">15+</h3>
              <p className="text-muted-foreground">E-commerce Partners</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Search className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Trusted Brands</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
