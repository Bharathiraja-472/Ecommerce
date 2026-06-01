import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal
  } = useCart();

  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1800);
  };

  const resetDrawerState = () => {
    setCheckoutComplete(false);
    setIsCartOpen(false);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      
      {/* Backdrop overlay */}
      <div
        onClick={resetDrawerState}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      {/* Drawer Container Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-left">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-luxury-border flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag className="w-5 h-5 text-luxury-black stroke-[1.2]" />
              <h2 className="font-serif text-lg tracking-wide uppercase text-luxury-black">
                Shopping Bag
              </h2>
              <span className="text-[10px] bg-luxury-gray-light text-luxury-gray border border-luxury-border px-2 py-0.5 font-bold">
                {cartItems.reduce((count, item) => count + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={resetDrawerState}
              className="text-luxury-gray hover:text-luxury-black p-1 hover:bg-luxury-gray-light transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-6 h-6 stroke-[1.2]" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {checkoutComplete ? (
              /* Success Checkout View */
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-scale-up">
                <div className="w-16 h-16 bg-luxury-black text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <ShoppingBag className="w-6 h-6 stroke-[1.2]" />
                </div>
                <h3 className="font-serif text-2xl tracking-wide">Order Placed Successfully</h3>
                <p className="text-sm font-light text-luxury-gray max-w-xs leading-relaxed">
                  Thank you for shopping with Velvora. An elegant dispatch confirmation and invoice details have been sent to your registered email.
                </p>
                <button
                  onClick={resetDrawerState}
                  className="bg-luxury-black text-white text-xs uppercase tracking-luxury py-3 px-8 font-medium hover:bg-luxury-gold transition-colors duration-300"
                >
                  Continue Browsing
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              /* Empty Bag View */
              <div className="h-full flex flex-col items-center justify-center text-center space-y-5">
                <div className="text-luxury-gray/40 border border-luxury-border border-dashed p-6 rounded-full">
                  <ShoppingBag className="w-10 h-10 stroke-[1]" />
                </div>
                <h3 className="font-serif text-xl tracking-wide">Your Bag is Empty</h3>
                <p className="text-xs font-light text-luxury-gray max-w-xs leading-relaxed">
                  Explore our luxury linen collections, tailored suits, and silk coordinates to elevate your style.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="border border-luxury-black text-luxury-black text-xs uppercase tracking-luxury py-3 px-8 font-medium hover:bg-luxury-black hover:text-white transition-colors duration-300"
                >
                  Shop New Arrivals
                </button>
              </div>
            ) : (
              /* Cart Items List */
              <div className="space-y-5 divide-y divide-luxury-border/30">
                {cartItems.map((item, idx) => (
                  <div key={item.cartId} className={`flex items-start py-4 ${idx === 0 ? 'pt-0' : ''}`}>
                    {/* Item Image */}
                    <div className="h-24 w-18 aspect-[3/4] overflow-hidden bg-luxury-gray-light border border-luxury-border/50 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    {/* Item Details */}
                    <div className="ml-4 flex-1 flex flex-col justify-between h-24">
                      <div>
                        <div className="flex justify-between text-sm">
                          <h4 className="font-serif text-sm text-luxury-black font-medium line-clamp-1">
                            {item.name}
                          </h4>
                          <span className="font-medium text-luxury-black ml-2">
                            ${item.price * item.quantity}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center space-x-3 text-[10px] uppercase tracking-wide text-luxury-gray font-light">
                          <span>Size: <strong className="text-luxury-black font-medium">{item.selectedSize}</strong></span>
                          <span className="w-[1px] h-3 bg-luxury-border/80" />
                          <span>Color: <strong className="text-luxury-black font-medium">{item.selectedColor}</strong></span>
                        </div>
                      </div>

                      {/* Quantity Toggles & Delete */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-luxury-border bg-luxury-sand text-xs">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-white text-luxury-gray hover:text-luxury-black"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 font-medium font-sans text-luxury-black text-[11px]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-white text-luxury-gray hover:text-luxury-black"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-luxury-gray hover:text-red-600 p-1 transition-colors"
                          aria-label="Remove item from bag"
                        >
                          <Trash2 className="w-3.5 h-3.5 stroke-[1.5]" />
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Summary (Only visible if items in cart) */}
          {cartItems.length > 0 && !checkoutComplete && (
            <div className="border-t border-luxury-border bg-luxury-sand/50 p-6 space-y-4">
              {/* Complimentary Shipping Meter */}
              <div className="text-[10px] uppercase tracking-wide text-luxury-black font-light pb-2 border-b border-luxury-border/30">
                {getCartTotal() >= 200 ? (
                  <p className="text-green-600 font-medium flex items-center justify-between">
                    <span>Congratulations! You qualify for free express shipping.</span>
                    <span>$0.00</span>
                  </p>
                ) : (
                  <p className="flex items-center justify-between text-luxury-gray">
                    <span>Spend <strong className="text-luxury-black font-medium">${200 - getCartTotal()}</strong> more for free shipping</span>
                    <span>+$15.00</span>
                  </p>
                )}
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-luxury font-medium text-luxury-gray">
                  Estimated Subtotal
                </span>
                <span className="text-lg font-medium text-luxury-black">
                  ${getCartTotal()}.00
                </span>
              </div>
              
              <p className="text-[10px] text-luxury-gray/50 font-light leading-relaxed">
                Taxes, customs and duties duties are included for worldwide dispatches. Complimentary signature packaging included.
              </p>

              {/* Action Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-luxury-black text-white text-xs uppercase tracking-luxury py-4 px-6 font-medium hover:bg-luxury-gold transition-colors duration-300 flex items-center justify-center group"
              >
                {isCheckingOut ? (
                  <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
