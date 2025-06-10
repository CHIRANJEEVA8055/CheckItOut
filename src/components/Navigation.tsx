
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">CHECK.IT.OUT</h1>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search sports, fitness & gym products..."
                className="w-full pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Compare</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Reviews</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Deals</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Wishlist</a>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
              <div className="space-y-2">
                <a href="#" className="block py-2 text-gray-700">Compare</a>
                <a href="#" className="block py-2 text-gray-700">Reviews</a>
                <a href="#" className="block py-2 text-gray-700">Deals</a>
                <a href="#" className="block py-2 text-gray-700">Wishlist</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
