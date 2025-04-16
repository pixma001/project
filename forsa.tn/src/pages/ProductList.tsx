import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Filter } from 'lucide-react';
import { useSearchStore } from '../lib/store';

interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  location: string;
  created_at: string;
  condition: string;
  category: string;
  description: string;
}

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const { setSearchQuery } = useSearchStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const category = searchParams.get('category')?.toLowerCase();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    // Update the global search state when the URL search param changes
    setSearchQuery(searchQuery);
  }, [searchQuery, setSearchQuery]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let query = supabase
          .from('products')
          .select('*')
          .eq('status', 'available')
          .order('created_at', { ascending: false });

        if (category) {
          query = query.eq('category', category);
        }

        if (searchQuery) {
          query = query.or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
        }

        const { data, error } = await query;

        if (error) throw error;
        setProducts(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, searchQuery]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}
          {searchQuery && ` matching "${searchQuery}"`}
        </h1>
        <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={product.images[0] || 'https://via.placeholder.com/400'}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
              <p className="text-blue-600 font-bold">{product.price} TND</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>{product.location}</span>
                <span>{product.condition}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">
            {searchQuery
              ? `No products found matching "${searchQuery}"`
              : category
              ? `No products found in the ${category} category`
              : 'No products found'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;