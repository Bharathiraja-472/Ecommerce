import React from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Pass standard first option sizes and colors
    const size = product.sizes ? product.sizes[0] : 'One Size';
    const color = product.colors ? product.colors[0] : 'Default';
    addToCart(product, 1, size, color);
  };

  return (
    <div className="group relative flex flex-col justify-between h-full bg-white border border-luxury-border/30 hover:border-luxury-border transition-all duration-500 animate-fade-in">
      
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-luxury-gray-light">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Floating Custom Tag Badge */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-white text-luxury-black text-[9px] uppercase tracking-luxury font-medium px-2.5 py-1 border border-luxury-border shadow-sm">
            {product.tag}
          </span>
        )}

        {/* Hover slide-up options bar */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-4 w-full">
            
            {/* Quick View Button */}
            <button
              onClick={() => setQuickViewProduct(product)}
              className="flex-1 bg-white text-luxury-black text-[10px] uppercase tracking-luxury py-2.5 px-3 flex items-center justify-center font-medium border border-luxury-border hover:bg-luxury-black hover:text-white hover:border-luxury-black transition-all duration-300"
            >
              <Eye className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
              Quick View
            </button>

            {/* Quick Add Button */}
            <button
              onClick={handleQuickAdd}
              className="flex-1 bg-luxury-black text-white text-[10px] uppercase tracking-luxury py-2.5 px-3 flex items-center justify-center font-medium hover:bg-luxury-gold transition-colors duration-300"
            >
              <ShoppingBag className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
              Quick Add
            </button>

          </div>
        </div>

        {/* Mobile quick action overlay (taps on mobile) */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 lg:hidden">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="bg-white/90 backdrop-blur-sm text-luxury-black p-2 border border-luxury-border rounded-full hover:bg-white"
            aria-label="Quick View product"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleQuickAdd}
            className="bg-luxury-black/90 text-white p-2 rounded-full hover:bg-luxury-black"
            aria-label="Quick Add to cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="mb-2">
          <p className="text-[10px] uppercase tracking-luxury text-luxury-gray mb-1">
            {product.category}
          </p>
          <h4
            onClick={() => setQuickViewProduct(product)}
            className="font-serif text-sm text-luxury-black group-hover:text-luxury-gold transition-colors duration-300 cursor-pointer line-clamp-1"
          >
            {product.name}
          </h4>
        </div>
        <div className="flex items-center justify-between border-t border-luxury-border/30 pt-2.5 mt-auto">
          <span className="font-sans text-sm font-medium text-luxury-black">
            ${product.price}.00
          </span>
          <span className="text-[9px] uppercase tracking-wide text-luxury-gray/50">
            Complimentary Shipping
          </span>
        </div>
      </div>

    </div>
  );
}
