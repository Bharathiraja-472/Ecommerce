import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isCartOpen, setIsCartOpen, getCartCount } = useCart();
  const { currentUser, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Track page scroll to toggle sticky overlay style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching Velvora Collections for: "${searchQuery}"`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-luxury-border py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-luxury-black hover:text-luxury-gold transition-colors duration-200"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 stroke-[1.2]" />
            </button>

            {/* Left Nav: Desktop Links */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-xs uppercase tracking-luxury text-luxury-black hover:text-luxury-gold transition-colors duration-300 font-medium py-1 group`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Center Brand Logo */}
            <div className="text-center absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
              <Link
                to="/"
                className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-light uppercase text-luxury-black select-none hover:opacity-85 transition-opacity"
              >
                Velvora
              </Link>
            </div>

            {/* Right Icons Nav */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              
              {/* Search Toggle Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-luxury-black hover:text-luxury-gold transition-colors duration-200"
                aria-label="Toggle search bar"
              >
                <Search className="w-5 h-5 stroke-[1.2]" />
              </button>

              {/* Login / Profile Navigation */}
              {currentUser ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center text-luxury-black hover:text-luxury-gold transition-colors duration-200"
                    aria-label="User profile menu"
                  >
                    <User className="w-5 h-5 stroke-[1.2]" />
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-3 w-48 bg-white border border-luxury-border shadow-md py-2 z-50 animate-scale-up">
                      <div className="px-4 py-2 border-b border-luxury-border/60 text-[9px] uppercase tracking-luxury text-luxury-gray">
                        Welcome, {currentUser.name.split(' ')[0]}
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          alert('Logged out from Atelier.');
                        }}
                        className="block w-full text-left px-4 py-2 text-[10px] uppercase tracking-luxury text-luxury-gold hover:bg-luxury-sand/40 hover:text-luxury-black transition font-semibold"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-luxury-black hover:text-luxury-gold transition-colors duration-200"
                  aria-label="Go to login page"
                >
                  <User className="w-5 h-5 stroke-[1.2]" />
                </Link>
              )}

              {/* Live Shopping Bag Drawer Toggle */}
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative text-luxury-black hover:text-luxury-gold transition-colors duration-200"
                aria-label="Open shopping cart drawer"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.2]" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-luxury-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-sans">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Sliding Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-luxury-border shadow-md py-4 px-4 sm:px-6 animate-slide-down">
            <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search premium collections (e.g. Silk, Blazer, Linen)..."
                className="w-full text-sm py-2 px-3 border border-luxury-border focus:border-luxury-gold outline-none tracking-wide font-light bg-luxury-sand/50"
                autoFocus
              />
              <button
                type="submit"
                className="ml-2 bg-luxury-black text-white px-5 py-2 text-xs uppercase tracking-luxury hover:bg-luxury-gold hover:text-white transition-colors duration-300 flex items-center font-medium"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="ml-4 text-luxury-gray hover:text-luxury-black"
              >
                <X className="w-5 h-5 stroke-[1.2]" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Fullscreen Mobile Drawer Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Sidebar panel */}
        <div
          className={`absolute top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-luxury-border pb-4 mb-6">
            <span className="font-serif tracking-[0.2em] text-lg uppercase">Velvora</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-luxury-black hover:text-luxury-gold"
            >
              <X className="w-6 h-6 stroke-[1.2]" />
            </button>
          </div>

          <nav className="flex flex-col space-y-5 flex-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm uppercase tracking-luxury flex items-center justify-between border-b border-luxury-gray-light pb-2 ${
                    isActive ? 'text-luxury-gold font-medium' : 'text-luxury-black'
                  }`}
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 text-luxury-gold" />
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-luxury-border pt-6 mt-auto">
            <p className="text-center text-[10px] uppercase tracking-luxury text-luxury-gray">
              Minimal Luxury Fashion Brand
            </p>
            <div className="mt-4 flex flex-col items-center gap-3">
              {currentUser ? (
                <>
                  <span className="text-[11px] uppercase tracking-luxury text-luxury-black font-medium">
                    Welcome, {currentUser.name}
                  </span>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                      alert('Logged out from Atelier.');
                    }}
                    className="w-full text-center border border-luxury-gold text-luxury-gold py-2.5 text-xs uppercase tracking-luxury hover:bg-luxury-gold hover:text-white transition-colors duration-300 font-medium"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="w-full text-center border border-luxury-black text-luxury-black py-2.5 text-xs uppercase tracking-luxury hover:bg-luxury-black hover:text-white transition-colors duration-300 font-medium"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
