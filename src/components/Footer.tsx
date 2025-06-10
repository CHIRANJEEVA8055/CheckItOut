
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FitGear</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect fitness equipment and sports gear.
            </p>
            <div className="space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Gym Equipment</a></li>
              <li><a href="#" className="hover:text-white">Cardio Machines</a></li>
              <li><a href="#" className="hover:text-white">Sports Gear</a></li>
              <li><a href="#" className="hover:text-white">Supplements</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Product Compare</a></li>
              <li><a href="#" className="hover:text-white">Price Tracker</a></li>
              <li><a href="#" className="hover:text-white">Expert Reviews</a></li>
              <li><a href="#" className="hover:text-white">Buying Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Seller Support</a></li>
              <li><a href="#" className="hover:text-white">Bulk Orders</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FitGear. All rights reserved. Built for fitness enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};
