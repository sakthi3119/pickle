import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/atomic/Button';
import ProductGrid from '../components/product/ProductGrid';
import LifestyleGallery from '../components/gallery/LifestyleGallery';
import { Product } from '../components/product/ProductCard';

const Home: React.FC = () => {
  // Featured products
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Classic Dill Pickles',
      price: 12.99,
      image: '/images/products/classicdillpickle.jpg',
      tag: 'Best Seller',
      description: 'Traditional dill pickles with garlic and herbs',
    },
    {
      id: 2,
      name: 'Spicy Jalapeño Pickles',
      price: 14.99,
      image: '/images/products/chili-pickle-DCeVNVBi.jpg',
      tag: 'New',
      description: 'Hot and zesty pickles with fresh jalapeños',
    },
    {
      id: 3,
      name: 'Sweet Bread & Butter',
      price: 13.99,
      image: '/images/products/breadandbutter.jpg',
      description: 'Sweet and tangy sliced pickles',
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[420px] sm:h-[70vh] md:h-[80vh] md:min-h-[600px] bg-pickle-900">
        <div className="absolute inset-0">
          <img
            src="/images/products/garlicdill.jpg"
            alt="Artisanal Pickles"
            className="w-full h-full object-cover opacity-50"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/products/classicdillpickle.jpg';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-pickle-900/50 to-pickle-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full pb-8 md:pb-16">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Handcrafted Pickles <br />
              Made with Love
            </h1>
            <p className="text-xl text-cream-100 mb-8 max-w-2xl">
              Discover our artisanal pickles made with traditional recipes and carefully selected ingredients.
              Each jar is crafted to bring you the perfect blend of flavors.
            </p>
            <div className="flex space-x-4">
              <Link to="/shop">
                <Button
                  variant="primary"
                  size="lg"
                >
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-pickle-900"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-neutral-600">
              Our most loved pickles, crafted to perfection
            </p>
          </div>
          <ProductGrid
            products={featuredProducts}
            columns={3}
            className="mb-8"
          />
          <div className="text-center">
            <Link to="/shop">
              <Button
                variant="outline"
                size="lg"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-14 lg:py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-6">
                Our Pickle Story
              </h2>
              <div className="prose prose-lg">
                <p>
                  For three generations, our family has been perfecting the art of pickle-making.
                  Using time-honored techniques and the finest ingredients, we create pickles
                  that bring joy to every meal.
                </p>
                <p>
                  Each jar is carefully crafted in small batches, ensuring the perfect
                  balance of flavors and the satisfying crunch that pickle lovers crave.
                </p>
              </div>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-8"
                >
                  Read Our Story
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square">
              <img
                src="/images/products/mango-pickle-CifRucgB.jpg"
                alt="Pickle Making Process"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/products/classicdillpickle.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Pickle Paradise Life
            </h2>
            <p className="text-lg text-neutral-600">
              Glimpses of our pickle-making journey and community
            </p>
          </div>
          <LifestyleGallery
            images={[
              '/images/products/garlicdill.jpg',
              '/images/products/lemon-pickle-OyHya49s.jpg',
              '/images/products/Quick-Pickled-Onions-scaled.jpg',
              '/images/products/mango-pickle-CifRucgB.jpg',
              '/images/products/chili-pickle-DCeVNVBi.jpg'
            ]}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-pickle-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Join the Pickle Paradise Family
          </h2>
          <p className="text-lg text-cream-100 mb-8">
            Subscribe to our newsletter for recipes, pickle tips, and exclusive offers
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-neutral-900"
            />
            <Button variant="primary" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
