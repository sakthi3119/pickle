import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/layout/Header';
import { useAuth } from './contexts/AuthContext';
// User pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import CartDrawer from './components/cart/CartDrawer';
import { CartProvider, useCart } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import './styles/globals.css';

// App content with routing
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { state, getItemCount, openDrawer, closeDrawer, updateQuantity, removeItem } = useCart();

  const handleCartClick = () => {
    if (state.items.length > 0) {
      openDrawer();
    } else {
      navigate('/cart');
    }
  };

  const handleProfileClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const handleCheckout = () => {
    closeDrawer();
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header
        cartItemCount={getItemCount()}
        onCartClick={handleCartClick}
        onProfileClick={handleProfileClick}
      />
      <main id="main-content">
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          

          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      
      {/* Cart Drawer */}
      <CartDrawer
        isOpen={state.isDrawerOpen}
        onClose={closeDrawer}
        items={state.items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
