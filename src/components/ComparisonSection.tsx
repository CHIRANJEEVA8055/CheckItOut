
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Star } from "lucide-react";

const comparisonData = [
  {
    name: "PowerMax Dumbbells",
    price: "$299",
    rating: 4.8,
    pros: ["Adjustable weight", "Space-saving", "Durable"],
    cons: ["Higher price"],
    image: "/placeholder.svg"
  },
  {
    name: "IronGrip Standard Set",
    price: "$189",
    rating: 4.3,
    pros: ["Budget-friendly", "Good build quality"],
    cons: ["Fixed weights", "Takes more space"],
    image: "/placeholder.svg"
  },
  {
    name: "FlexWeight Pro",
    price: "$449",
    rating: 4.9,
    pros: ["Premium materials", "Quick adjustment", "Warranty"],
    cons: ["Expensive", "Heavy"],
    image: "/placeholder.svg"
  }
];

export const ComparisonSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Product Comparison</h2>
          <p className="text-muted-foreground">Make informed decisions with side-by-side comparisons</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {comparisonData.map((product, index) => (
            <Card key={index} className={`${index === 1 ? 'ring-2 ring-primary' : ''}`}>
              <CardHeader className="text-center">
                {index === 1 && (
                  <Badge className="self-center mb-2 bg-primary">Best Value</Badge>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg mx-auto mb-4"
                />
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {product.cons.map((con, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <XCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button className="w-full mt-4" variant={index === 1 ? "default" : "outline"}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Compare More Products
          </Button>
        </div>
      </div>
    </section>
  );
};
