import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, ShieldCheck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function QuickView() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Sync state options when product selection changes
  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizes ? quickViewProduct.sizes[0] : 'One Size');
      setSelectedColor(quickViewProduct.colors ? quickViewProduct.colors[0] : 'Default');
      setQuantity(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedSize, selectedColor);
    setQuickViewProduct(null); // Close quick view
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 font-sans">
      
      {/* Backdrop overlay */}
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      {/* Modal Card Sheet Container */}
      <div className="relative bg-white max-w-4xl w-full shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-[85vh] animate-scale-up z-10 border border-luxury-border">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm p-1.5 border border-luxury-border rounded-full hover:bg-luxury-black hover:text-white transition-colors duration-200 text-luxury-gray"
          aria-label="Close details modal"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Left Column: Product Fashion Visual */}
        <div className="md:w-1/2 aspect-[3/4] md:aspect-auto bg-luxury-gray-light max-h-[45vh] md:max-h-full overflow-hidden">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Column: Interactive Details */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between max-h-[45vh] md:max-h-full">
          
          <div className="space-y-4">
            
            {/* Tag & Category */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-luxury text-luxury-gray font-light">
                {quickViewProduct.category} Collection
              </span>
              {quickViewProduct.tag && (
                <span className="bg-luxury-sand text-luxury-black text-[9px] uppercase tracking-wider px-2 py-0.5 border border-luxury-border font-medium">
                  {quickViewProduct.tag}
                </span>
              )}
            </div>

            {/* Product Name */}
            <h3 className="font-serif text-2xl sm:text-3xl text-luxury-black tracking-wide leading-tight">
              {quickViewProduct.name}
            </h3>

            {/* Price */}
            <p className="text-xl font-medium text-luxury-black">
              ${quickViewProduct.price}.00
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-luxury-border/60" />

            {/* Detailed Description */}
            <p className="text-xs text-luxury-gray leading-relaxed font-light">
              {quickViewProduct.description}
            </p>

            {/* Sizes Selection */}
            {quickViewProduct.sizes && (
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] uppercase tracking-luxury text-luxury-black font-semibold">
                  <span>Select Size</span>
                  <span className="text-luxury-gold tracking-wide font-light">Size Guide</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[42px] h-[36px] text-xs font-sans border flex items-center justify-center transition-all duration-300 font-medium ${
                        selectedSize === size
                          ? 'border-luxury-black bg-luxury-black text-white'
                          : 'border-luxury-border text-luxury-black hover:border-luxury-gray bg-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors Selection */}
            {quickViewProduct.colors && (
              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">
                  Colorway: <strong className="font-bold text-luxury-gold ml-1">{selectedColor}</strong>
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {quickViewProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`text-xs uppercase tracking-wider py-1.5 px-3 border transition-all duration-300 ${
                        selectedColor === color
                          ? 'border-luxury-black bg-luxury-sand font-medium text-luxury-black shadow-sm'
                          : 'border-luxury-border/60 text-luxury-gray hover:border-luxury-border bg-white'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Controls / Add To Cart */}
          <div className="space-y-4 pt-6 mt-6 border-t border-luxury-border/60">
            <div className="flex items-center gap-3">
              
              {/* Quantity Selector */}
              <div className="flex items-center border border-luxury-border bg-luxury-sand text-sm h-[48px]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 h-full hover:bg-white text-luxury-gray hover:text-luxury-black transition"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 font-medium font-sans text-luxury-black text-xs select-none">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 h-full hover:bg-white text-luxury-gray hover:text-luxury-black transition"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 h-[48px] bg-luxury-black text-white text-xs uppercase tracking-luxury font-medium hover:bg-luxury-gold transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Shopping Bag
              </button>
            </div>

            {/* Shipping & Returns Assurances */}
            <div className="grid grid-cols-2 gap-2 text-[9px] uppercase tracking-luxury text-luxury-gray/70 pt-1">
              <span className="flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-luxury-gold" />
                Complimentary Shipping
              </span>
              <span className="flex items-center">
                <RefreshCw className="w-3 h-3 mr-1.5 text-luxury-gold" />
                Complimentary Returns
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
