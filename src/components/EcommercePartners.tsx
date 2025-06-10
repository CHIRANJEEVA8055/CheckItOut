
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  { name: "Amazon", logo: "/placeholder.svg", category: "General" },
  { name: "Flipkart", logo: "/placeholder.svg", category: "General" },
  { name: "Decathlon", logo: "/placeholder.svg", category: "Sports" },
  { name: "Nike", logo: "/placeholder.svg", category: "Sports" },
  { name: "Adidas", logo: "/placeholder.svg", category: "Sports" },
  { name: "Puma", logo: "/placeholder.svg", category: "Sports" },
  { name: "Ajio", logo: "/placeholder.svg", category: "Fashion" },
  { name: "Myntra", logo: "/placeholder.svg", category: "Fashion" },
  { name: "Nykaa", logo: "/placeholder.svg", category: "Beauty" },
  { name: "HealthKart", logo: "/placeholder.svg", category: "Supplements" },
  { name: "Cult.fit", logo: "/placeholder.svg", category: "Fitness" },
  { name: "Tata 1mg", logo: "/placeholder.svg", category: "Health" }
];

export const EcommercePartners = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Compare Across Platforms</h2>
          <p className="text-muted-foreground">We compare products from all major e-commerce platforms</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-12 h-12 object-contain mx-auto mb-2"
                />
                <h3 className="text-sm font-semibold text-foreground">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
