import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Handshake as HandShake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Marketplace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">
              Buy and Sell Used Items<br />with Confidence
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your trusted marketplace for second-hand treasures
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Browse Items
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-sm text-center">
          <ShieldCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
          <p className="text-gray-600">Safe and secure hand-to-hand transactions</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm text-center">
          <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Local Pickup</h3>
          <p className="text-gray-600">Meet locally for item exchange</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm text-center">
          <HandShake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trusted Community</h3>
          <p className="text-gray-600">Join our growing community of buyers and sellers</p>
        </div>
      </section>
    </div>
  );
};

export default Home;