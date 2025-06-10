
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, ExternalLink } from "lucide-react";

const sportsDeals = [
  {
    title: "Nike Air Zoom Pegasus",
    originalPrice: "₹12,995",
    salePrice: "₹8,995",
    discount: "31% OFF",
    platform: "Amazon",
    image: "/placeholder.svg",
    category: "Running Shoes"
  },
  {
    title: "Decathlon Domyos Dumbbells",
    originalPrice: "₹4,999",
    salePrice: "₹3,499",
    discount: "30% OFF",
    platform: "Decathlon",
    image: "/placeholder.svg",
    category: "Gym Equipment"
  },
  {
    title: "Puma Training T-Shirt",
    originalPrice: "₹2,499",
    salePrice: "₹1,249",
    discount: "50% OFF",
    platform: "Flipkart",
    image: "/placeholder.svg",
    category: "Sportswear"
  },
  {
    title: "Whey Protein 2.2kg",
    originalPrice: "₹6,999",
    salePrice: "₹4,999",
    discount: "29% OFF",
    platform: "HealthKart",
    image: "/placeholder.svg",
    category: "Supplements"
  }
];

const generalDeals = [
  {
    title: "Apple iPhone 15",
    originalPrice: "₹79,900",
    salePrice: "₹69,900",
    discount: "13% OFF",
    platform: "Amazon",
    image: "/placeholder.svg"
  },
  {
    title: "Samsung 55\" Smart TV",
    originalPrice: "₹54,999",
    salePrice: "₹39,999",
    discount: "27% OFF",
    platform: "Flipkart",
    image: "/placeholder.svg"
  },
  {
    title: "Levi's Jeans",
    originalPrice: "₹3,999",
    salePrice: "₹1,999",
    discount: "50% OFF",
    platform: "Ajio",
    image: "/placeholder.svg"
  }
];

export const DealsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Today's Best Deals</h2>
          <p className="text-muted-foreground">Curated deals from top e-commerce platforms</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sports & Fitness Deals - Main Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Sports & Fitness Deals</h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <Carousel className="w-full">
              <CarouselContent>
                {sportsDeals.map((deal, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={deal.image}
                            alt={deal.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                            {deal.discount}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-3 right-3 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="p-4">
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {deal.category}
                          </Badge>
                          <h4 className="font-semibold text-foreground mb-2">{deal.title}</h4>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold text-primary">{deal.salePrice}</span>
                              <span className="text-sm text-muted-foreground line-through">
                                {deal.originalPrice}
                              </span>
                            </div>
                            <Badge variant="outline">{deal.platform}</Badge>
                          </div>
                          <Button className="w-full" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Deal
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* General Deals - Sidebar */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Other Deals</h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="space-y-4">
              {generalDeals.map((deal, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex space-x-3">
                      <img
                        src={deal.image}
                        alt={deal.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-foreground mb-1">{deal.title}</h4>
                        <div className="flex items-center space-x-1 mb-2">
                          <span className="text-sm font-bold text-primary">{deal.salePrice}</span>
                          <span className="text-xs text-muted-foreground line-through">
                            {deal.originalPrice}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">{deal.platform}</Badge>
                          <Badge className="text-xs bg-red-500">{deal.discount}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
