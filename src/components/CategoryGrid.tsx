
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Running, Trophy, Bike } from "lucide-react";

const categories = [
  {
    name: "Gym Equipment",
    icon: Dumbbell,
    count: "15,000+ products",
    image: "/placeholder.svg",
    color: "bg-blue-50 text-blue-600"
  },
  {
    name: "Cardio Machines",
    icon: Running,
    count: "8,500+ products",
    image: "/placeholder.svg",
    color: "bg-green-50 text-green-600"
  },
  {
    name: "Sports Gear",
    icon: Trophy,
    count: "25,000+ products",
    image: "/placeholder.svg",
    color: "bg-purple-50 text-purple-600"
  },
  {
    name: "Cycling",
    icon: Bike,
    count: "12,000+ products",
    image: "/placeholder.svg",
    color: "bg-orange-50 text-orange-600"
  }
];

export const CategoryGrid = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">Find exactly what you need for your fitness journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
