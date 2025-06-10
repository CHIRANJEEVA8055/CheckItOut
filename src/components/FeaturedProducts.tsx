
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "PowerMax Adjustable Dumbbells",
    price: "$299",
    originalPrice: "$399",
    rating: 4.8,
    reviews: 2340,
    image: "/placeholder.svg",
    badge: "Best Seller",
    discount: "25% OFF"
  },
  {
    id: 2,
    name: "TreadFit Pro 3000",
    price: "$1,299",
    originalPrice: "$1,699",
    rating: 4.6,
    reviews: 1890,
    image: "/placeholder.svg",
    badge: "Editor's Choice",
    discount: "24% OFF"
  },
  {
    id: 3,
    name: "FlexForm Yoga Mat Premium",
    price: "$79",
    originalPrice: "$99",
    rating: 4.9,
    reviews: 5670,
    image: "/placeholder.svg",
    badge: "Top Rated",
    discount: "20% OFF"
  },
  {
    id: 4,
    name: "StrengthCore Home Gym",
    price: "$899",
    originalPrice: "$1,199",
    rating: 4.7,
    reviews: 1230,
    image: "/placeholder.svg",
    badge: "New Launch",
    discount: "25% OFF"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-muted-foreground">Hand-picked gear that fitness enthusiasts love</p>
          </div>
          <Button variant="outline">
            <TrendingUp className="mr-2 h-4 w-4" />
            View All Trending
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {product.badge}
                  </Badge>
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                    {product.discount}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-foreground">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="sm">
                    Compare Prices
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
