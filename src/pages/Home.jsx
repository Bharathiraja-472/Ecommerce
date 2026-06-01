import React, { useState, useEffect } from 'react';
import { products, reviews } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Newsletter from '../components/Newsletter';
import { ChevronLeft, ChevronRight, Star, ArrowDown } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [isTabLoading, setIsTabLoading] = useState(false);
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);

  // Filter products by active tab
  const filteredProducts = activeTab === 'All'
    ? products.slice(0, 8)
    : products.filter(p => p.category.toLowerCase() === activeTab.toLowerCase()).slice(0, 8);

  // Trigger loading animation on tab change to wow the user
  const handleTabChange = (tabName) => {
    setIsTabLoading(true);
    setActiveTab(tabName);
    setTimeout(() => {
      setIsTabLoading(false);
    }, 600); // Elegant short delay
  };

  // Auto transition reviews
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIdx((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(reviewInterval);
  }, []);

  // Category listing
  const categories = [
    {
      name: "Women",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      count: 24
    },
    {
      name: "Men",
      image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop",
      count: 18
    },
    {
      name: "Kids",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=800&auto=format&fit=crop",
      count: 12
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
      count: 15
    }
  ];

  return (
    <div className="pt-[72px] bg-luxury-sand/30 font-sans">
      
      {/* 1. HERO BANNER */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-luxury-black">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1600&auto=format&fit=crop')`,
          backgroundPosition: '50% 20%'
        }} />
        
        {/* Softening black luxury overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl space-y-6 animate-slide-up">
            
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-luxury-gold-light font-medium block">
              Summer '26 Vol. I
            </span>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-wider uppercase font-light leading-none">
              The Art of Linen
            </h1>

            <p className="text-xs sm:text-sm font-light tracking-wide max-w-lg mx-auto opacity-80 leading-relaxed">
              Premium washed European flax linens and fluid mulberry silks, meticulously engineered to withstand seasons and drape beautifully.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => handleTabChange('Women')}
                className="bg-white text-luxury-black text-xs uppercase tracking-luxury py-3.5 px-8 font-medium hover:bg-luxury-black hover:text-white hover:border-luxury-black border border-white transition-all duration-300 min-w-[170px]"
              >
                Shop Women's
              </button>
              <button
                onClick={() => handleTabChange('Men')}
                className="border border-white bg-transparent text-white text-xs uppercase tracking-luxury py-3.5 px-8 font-medium hover:bg-white hover:text-luxury-black transition-all duration-300 min-w-[170px]"
              >
                Shop Men's
              </button>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 text-white/50 select-none animate-bounce">
          <span className="text-[9px] uppercase tracking-luxury">Scroll Down</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold block mb-2">
            Curated Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-black tracking-wide">
            Explore Collections
          </h2>
          <div className="h-[1px] w-12 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.name}
              category={cat.name}
              image={cat.image}
              count={cat.count}
              onClick={() => handleTabChange(cat.name)}
            />
          ))}
        </div>
      </section>

      {/* 3. TRENDING PRODUCTS (FILTERABLE WITH SKELETON WOW FACTOR) */}
      <section className="bg-white border-y border-luxury-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold block mb-2">
                Highly Requested
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-luxury-black tracking-wide">
                Trending Silhouettes
              </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 md:mt-0 border-b border-luxury-border md:border-none pb-2 md:pb-0">
              {['All', 'Women', 'Men', 'Kids', 'Accessories'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`text-xs uppercase tracking-luxury pb-1 font-medium transition-colors relative ${
                    activeTab === tab ? 'text-luxury-black' : 'text-luxury-gray hover:text-luxury-black'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold animate-fade-in" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Tab Panel */}
          {isTabLoading ? (
            /* Skeleton Loading Grid (Wow Factor) */
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="space-y-4 animate-pulse">
                  <div className="aspect-[3/4] bg-luxury-gray-light border border-luxury-border/30" />
                  <div className="h-3 w-1/4 bg-luxury-gray-light" />
                  <div className="h-4 w-3/4 bg-luxury-gray-light" />
                  <div className="h-3 w-1/3 bg-luxury-gray-light" />
                </div>
              ))}
            </div>
          ) : (
            /* Actual Product Grid */
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold block mb-2">
            The Autumn Edit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-black tracking-wide">
            New Arrivals
          </h2>
          <div className="h-[1px] w-12 bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Shows new products */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter(p => p.tag === 'New').slice(0, 4).map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIAL SECTION */}
      <section className="bg-luxury-black text-white py-24 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
          <div className="flex justify-center mb-6">
            {[...Array(reviews[currentReviewIdx].rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-luxury-gold fill-luxury-gold mx-0.5" />
            ))}
          </div>

          <div className="h-48 flex items-center justify-center">
            <blockquote className="animate-scale-up key={currentReviewIdx}">
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl italic tracking-wide leading-relaxed font-light text-luxury-gold-light">
                "{reviews[currentReviewIdx].comment}"
              </p>
              <footer className="mt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white font-medium">
                  {reviews[currentReviewIdx].name}
                </p>
                <p className="text-[10px] uppercase tracking-luxury text-luxury-gray-light/50 mt-1">
                  {reviews[currentReviewIdx].role}
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Testimonial Selectors */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <button
              onClick={() => setCurrentReviewIdx((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="text-white/40 hover:text-white p-1 hover:bg-luxury-charcoal transition-colors rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.2]" />
            </button>
            <div className="flex space-x-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReviewIdx(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentReviewIdx === idx ? 'bg-luxury-gold w-4' : 'bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentReviewIdx((prev) => (prev + 1) % reviews.length)}
              className="text-white/40 hover:text-white p-1 hover:bg-luxury-charcoal transition-colors rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.2]" />
            </button>
          </div>

        </div>
        
        {/* Soft abstract brand label in the backdrop */}
        <div className="absolute -bottom-10 -right-10 text-white/5 font-serif text-[12rem] tracking-widest font-light leading-none select-none pointer-events-none uppercase">
          VLV
        </div>
      </section>

      {/* 6. NEWSLETTER SUBSCRIPTION */}
      <Newsletter />

    </div>
  );
}
