import React from 'react';

export default function CategoryCard({ category, image, count, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden aspect-[4/5] w-full bg-luxury-gray-light border border-luxury-border/30 hover:border-luxury-black/35 transition-all duration-700 cursor-pointer select-none"
    >
      {/* Category Image */}
      <img
        src={image}
        alt={`${category} category`}
        className="h-full w-full object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Luxury Backdrop Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />

      {/* Typography Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          
          <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold-light/95 block mb-1">
            {count || '12'} Collections
          </span>

          <h3 className="font-serif text-xl sm:text-2xl tracking-widest uppercase mb-2">
            {category}
          </h3>

          <div className="h-[1px] w-12 bg-luxury-gold group-hover:w-24 transition-all duration-500 mb-3" />

          <p className="text-[9px] uppercase tracking-luxury text-white/70 group-hover:text-white group-hover:opacity-100 transition-colors duration-300 flex items-center">
            Explore Collection
            <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300 font-sans">
              →
            </span>
          </p>

        </div>
      </div>

      {/* Thin elegant interior border */}
      <div className="absolute inset-4 border border-white/10 group-hover:border-white/30 transition-all duration-700 pointer-events-none" />

    </div>
  );
}
