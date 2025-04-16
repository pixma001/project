import React from 'react';
import { ShoppingBasket, Users, Shield, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">About Forsa.tn</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Forsa.tn is Tunisia's trusted marketplace for buying and selling pre-owned items. 
            Our platform connects buyers and sellers across the country, making it easy to give items a second life 
            while helping people find great deals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Community</h3>
              <p className="text-gray-600">
                Join thousands of Tunisians who trust Forsa.tn for their buying and selling needs. 
                Our growing community makes transactions safe and reliable.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <Shield className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe Transactions</h3>
              <p className="text-gray-600">
                Your safety is our priority. We provide secure person-to-person transactions 
                and verify user information to ensure a trustworthy marketplace.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <Globe className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
              <p className="text-gray-600">
                We're proudly Tunisian, understanding local needs and culture. Our platform is 
                designed specifically for the Tunisian market.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <ShoppingBasket className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                List items in minutes, browse categories easily, and connect with buyers or sellers 
                through our simple, intuitive interface.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            At Forsa.tn, our mission is to create a sustainable marketplace that benefits both our community 
            and the environment. By facilitating the sale of pre-owned items, we help reduce waste while 
            creating economic opportunities for Tunisians.
          </p>

          <h2 className="text-2xl font-bold mb-4">Join Us</h2>
          <p className="text-gray-600">
            Whether you're looking to declutter your home, find great deals, or start a small business, 
            Forsa.tn is here to help. Join our community today and experience the best of Tunisia's 
            online marketplace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;