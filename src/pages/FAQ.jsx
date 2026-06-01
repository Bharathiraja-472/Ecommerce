import React, { useState } from 'react';
import { faqs } from '../data/products';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    if (openFaqId === id) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(id);
    }
  };

  // Group FAQs by category
  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="pt-[72px] bg-luxury-sand/30 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        
        {/* Title Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium block">
            Customer Concierge
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-luxury-black tracking-wide uppercase font-light">
            Questions & Answers
          </h1>
          <p className="text-xs font-light text-luxury-gray max-w-md mx-auto leading-relaxed">
            Find immediate answers regarding bespoke dispatches, secure payment gateways, linen care, and return pickups.
          </p>
          <div className="h-[1px] w-12 bg-luxury-gold mx-auto" />
        </div>

        {/* Accordions Matrix */}
        <div className="space-y-12">
          {categories.map((catName) => (
            <div key={catName} className="space-y-4">
              
              {/* Category Subheading */}
              <h3 className="font-serif text-xl text-luxury-black uppercase tracking-wider border-b border-luxury-border/60 pb-2">
                {catName}
              </h3>

              <div className="space-y-3">
                {faqs
                  .filter((faq) => faq.category === catName)
                  .map((faq) => {
                    const isOpen = openFaqId === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className="bg-white border border-luxury-border hover:border-luxury-gray/40 transition duration-300 shadow-sm"
                      >
                        {/* Accordion Toggle Header */}
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 select-none focus:outline-none"
                        >
                          <span className="font-serif text-sm sm:text-base text-luxury-black tracking-wide font-medium">
                            {faq.question}
                          </span>
                          <span className="text-luxury-gold flex-shrink-0">
                            {isOpen ? (
                              <Minus className="w-4 h-4 stroke-[1.8] rotate-180 transition-transform duration-300" />
                            ) : (
                              <Plus className="w-4 h-4 stroke-[1.8] transition-transform duration-300" />
                            )}
                          </span>
                        </button>

                        {/* Accordion Collapsible Body */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen ? 'max-h-[300px] border-t border-luxury-border/30' : 'max-h-0'
                          }`}
                        >
                          <div className="p-5 text-xs sm:text-sm font-light text-luxury-gray leading-relaxed bg-luxury-sand/10">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

            </div>
          ))}
        </div>

        {/* Unresolved footer info */}
        <div className="mt-16 text-center border-t border-luxury-border/40 pt-10 space-y-4">
          <HelpCircle className="w-6 h-6 text-luxury-gold mx-auto" />
          <h4 className="font-serif text-lg text-luxury-black">Still Have Questions?</h4>
          <p className="text-xs font-light text-luxury-gray max-w-sm mx-auto leading-relaxed">
            Our luxury concierge team is available 24/7. Reach out via email or connect with Mayfair studio directly.
          </p>
          <span className="inline-block bg-luxury-black text-white px-6 py-3 text-xs uppercase tracking-luxury hover:bg-luxury-gold transition duration-300 font-semibold cursor-pointer">
            Contact Concierge
          </span>
        </div>

      </div>
    </div>
  );
}
