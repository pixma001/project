import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBasket, User, Search, LogOut, Package } from 'lucide-react';
import { useAuthStore, useSearchStore } from '../lib/store';

const Navbar = () => {
  const { user, profile, signOut } = useAuthStore();
  const { searchQuery, setSearchQuery } = useSearchStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBasket className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">FORSA.TN</span>
          </Link>
          
          <div className="flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/sell" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sell Item
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/my-listings"
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                >
                  <Package className="h-5 w-5" />
                  <span>My Listings</span>
                </Link>
                <span className="text-gray-600">{profile?.username}</span>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar