import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { MapPin, Phone, Clock, Tag, AlertCircle } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  location: string;
  condition: string;
  category: string;
  created_at: string;
  seller_id: string;
  seller: {
    username: string;
    phone_number: string;
  };
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            seller:profiles(username, phone_number)
          `)
          .eq('id', id)
          .single();

        if (error) throw error;
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleCall = () => {
    if (product?.seller.phone_number) {
      window.location.href = `tel:${product.seller.phone_number}`;
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error || 'Product not found'}</p>
      </div>
    );
  }

  const formattedDate = new Date(product.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Images */}
      <div className="space-y-4">
        <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.images[selectedImage] || 'https://via.placeholder.com/600'}
            alt={product.title}
            className="w-full h-[400px] object-cover"
          />
        </div>
        {product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} - Image ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-2xl font-bold text-blue-600">{product.price} TND</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span>{product.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Tag className="h-5 w-5" />
            <span>{product.category}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <AlertCircle className="h-5 w-5" />
            <span>Condition: {product.condition}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-5 w-5" />
            <span>{formattedDate}</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Seller Information</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900">{product.seller.username}</p>
              {product.seller.phone_number ? (
                <p className="text-gray-600">{product.seller.phone_number}</p>
              ) : (
                <p className="text-gray-500 italic">No phone number provided</p>
              )}
            </div>
            
            {product.seller.phone_number && (
              <button
                onClick={handleCall}
                className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Seller</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;