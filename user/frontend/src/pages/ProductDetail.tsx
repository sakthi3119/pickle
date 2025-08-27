import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/atomic/Button';
import Pill from '../components/atomic/Pill';
import ProductCard from '../components/product/ProductCard';
import { Product } from '../components/product/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('500g');
  const [selectedSpice, setSelectedSpice] = useState('medium');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - replace with API call
  const product: Product = {
    id: 1,
    name: 'Classic Dill Pickles',
    price: 12.99,
    image: '/images/products/classicdillpickle.jpg',
    tag: 'Best Seller',
    description: 'Traditional dill pickles with garlic and herbs',
  };

  // Additional product images
  const productImages = [
    product.image,
    '/images/products/garlicdill.jpg',
    '/images/products/lemon-pickle-OyHya49s.jpg',
  ];

  const sizeOptions = [
    { value: '250g', label: '250g', price: product.price * 0.6 },
    { value: '500g', label: '500g', price: product.price },
    { value: '1kg', label: '1kg', price: product.price * 1.8 },
  ];

  const spiceOptions = [
    { value: 'mild', label: 'Mild', icon: '🌶️' },
    { value: 'medium', label: 'Medium', icon: '🌶️🌶️' },
    { value: 'hot', label: 'Hot', icon: '🌶️🌶️🌶️' },
  ];

  const recommendedProducts: Product[] = [
    {
      id: 2,
      name: 'Spicy Jalapeño Pickles',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1603049405392-74c0b5e8b8b8?w=400&h=400&fit=crop',
      tag: 'New',
    },
    {
      id: 3,
      name: 'Sweet Bread & Butter',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1603049405392-74c0b5e8b8b8?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Garlic Dill Spears',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1603049405392-74c0b5e8b8b8?w=400&h=400&fit=crop',
    },
  ];

  const selectedSizeData = sizeOptions.find(option => option.value === selectedSize);
  const currentPrice = selectedSizeData?.price || product.price;

  const handleAddToCart = () => {
    // Handle add to cart logic
    console.log('Added to cart:', {
      product,
      size: selectedSize,
      spice: selectedSpice,
      quantity,
    });
  };

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Product Images */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-medium"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === index
                      ? 'border-pickle-500'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            {/* Product Header */}
            <div>
              {product.tag && (
                <Pill variant="pickle" className="mb-4">
                  {product.tag}
                </Pill>
              )}
              <h1 className="font-display font-bold text-3xl lg:text-4xl text-neutral-900 mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-neutral-900">
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(currentPrice)}
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-semibold text-lg text-neutral-900 mb-3">Description</h2>
              <p className="text-neutral-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h2 className="font-semibold text-lg text-neutral-900 mb-4">Jar Size</h2>
              <div className="flex flex-wrap gap-3">
                {sizeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedSize(option.value)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors duration-200 ${
                      selectedSize === option.value
                        ? 'border-pickle-500 bg-pickle-50 text-pickle-700'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <span className="block font-medium">{option.label}</span>
                    <span className="text-sm text-neutral-600">
                      {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(option.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Spice Level Selection */}
            <div>
              <h2 className="font-semibold text-lg text-neutral-900 mb-4">Spice Level</h2>
              <div className="flex flex-wrap gap-3">
                {spiceOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedSpice(option.value)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors duration-200 ${
                      selectedSpice === option.value
                        ? 'border-pickle-500 bg-pickle-50 text-pickle-700'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <span className="block font-medium">{option.label}</span>
                    <span className="block text-lg">{option.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h2 className="font-semibold text-lg text-neutral-900 mb-4">Quantity</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border-2 border-neutral-200 flex items-center justify-center text-lg font-medium hover:border-neutral-300 transition-colors duration-200"
                >
                  -
                </button>
                <span className="text-lg font-medium w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border-2 border-neutral-200 flex items-center justify-center text-lg font-medium hover:border-neutral-300 transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              className="w-full"
            >
              Add to Cart - {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(currentPrice * quantity)}
            </Button>

            {/* Product Details */}
            <div>
              <h2 className="font-semibold text-lg text-neutral-900 mb-4">Product Details</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-neutral-600">Ingredients:</span>
                  <p className="text-neutral-900">Cucumbers, water, vinegar, salt, garlic, dill, spices</p>
                </div>
                <div>
                  <span className="text-neutral-600">Shelf Life:</span>
                  <p className="text-neutral-900">12 months unopened</p>
                </div>
                <div>
                  <span className="text-neutral-600">Storage:</span>
                  <p className="text-neutral-900">Refrigerate after opening</p>
                </div>
                <div>
                  <span className="text-neutral-600">Allergens:</span>
                  <p className="text-neutral-900">None</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <section className="mt-20">
          <h2 className="font-display font-bold text-3xl text-neutral-900 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedProducts.map((recProduct) => (
              <ProductCard key={recProduct.id} product={recProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
