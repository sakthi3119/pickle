import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  onProfileClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  cartItemCount = 0,
  onCartClick,
  onProfileClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Shop', href: '/shop' },
    { label: 'Our Story', href: '/about' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Contact', href: '/contact' },
  ];

  const Logo = () => (
    <div className="flex items-center">
      <svg
        className={`transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-14 w-14'
          }`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
          fill="#22c55e"
        />
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill="#22c55e"
        />
      </svg>
      <span
        className={`ml-2 font-display font-bold transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'
          }`}
      >
        The Pickle Jar
      </span>
    </div>
  );

  const CartIcon = () => (
    <button
      onClick={onCartClick}
      className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pickle-500 focus:ring-offset-2 rounded-full"
      aria-label="Shopping cart"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      {cartItemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-pickle-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {cartItemCount > 99 ? '99+' : cartItemCount}
        </span>
      )}
    </button>
  );

  const ProfileIcon = () => (
    <button
      onClick={onProfileClick}
      className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pickle-500 focus:ring-offset-2 rounded-full"
      aria-label="User profile"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </button>
  );

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pickle-500 focus:ring-offset-2 rounded-md"
      aria-label="Toggle mobile menu"
      aria-expanded={isMobileMenuOpen}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isMobileMenuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-neutral-100'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link text-base font-medium tracking-wide transition-colors duration-200 ${location.pathname === item.href
                    ? 'text-pickle-600 border-b-2 border-pickle-600'
                    : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {user ? (
                <>
                  <button
                    onClick={() => { logout(); navigate('/'); }}
                    className="text-neutral-600 hover:text-neutral-900 font-medium"
                  >
                    Logout
                  </button>
                  <ProfileIcon />
                  <CartIcon />
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-neutral-600 hover:text-neutral-900 font-medium"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-pickle-600 text-white px-4 py-2 rounded-lg hover:bg-pickle-700 transition-colors font-medium"
                  >
                    Sign up
                  </Link>
                  <CartIcon />
                </>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                {user ? (
                  <>
                    <button
                      onClick={() => { logout(); navigate('/'); }}
                      className="text-neutral-600 hover:text-neutral-900 font-medium"
                    >
                      Logout
                    </button>
                    <ProfileIcon />
                    <CartIcon />
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-neutral-600 hover:text-neutral-900 font-medium"
                    >
                      Log in
                    </Link>
                    <CartIcon />
                  </>
                )}
              </div>
              <MobileMenuButton />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 shadow-medium">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${location.pathname === item.href
                    ? 'text-pickle-600 bg-pickle-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-neutral-200">
                <div className="flex items-center px-3 py-2">
                  <ProfileIcon />
                  <span className="ml-3 text-base font-medium text-neutral-600">
                    Account
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Header;
