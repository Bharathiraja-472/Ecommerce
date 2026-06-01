import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Pinterest', url: 'https://pinterest.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Journal', url: '#' }
  ];

  return (
    <footer className="bg-luxury-black text-white pt-16 pb-8 font-sans border-t border-luxury-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-luxury-charcoal">
          
          {/* Brand Intro Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-white">Velvora</h3>
            <p className="text-xs text-luxury-gray-light/60 leading-relaxed font-light">
              Crafting premium minimalist silhouettes since 2018. We believe in slow fashion, organic materials, and refined tailoring designed to endure a lifetime.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-luxury text-luxury-gold hover:text-white transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury font-medium text-luxury-gold mb-5">Collections</h4>
            <ul className="space-y-3 text-xs text-luxury-gray-light/75 font-light">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition duration-300">
                  Women's Silk & Knitwear
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white hover:underline transition duration-300">
                  Men's Sartorial Tailoring
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white hover:underline transition duration-300">
                  Organic Cotton Junior
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white hover:underline transition duration-300">
                  Fine Leather Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support Column */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury font-medium text-luxury-gold mb-5">Customer Care</h4>
            <ul className="space-y-3 text-xs text-luxury-gray-light/75 font-light">
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white hover:underline transition duration-300">
                  Delivery & FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white hover:underline transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white hover:underline transition duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Showrooms Column */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury font-medium text-luxury-gold mb-5">Showrooms</h4>
            <ul className="space-y-3 text-xs text-luxury-gray-light/75 font-light leading-relaxed">
              <li>
                <span className="block text-white font-medium">Mayfair Atelier</span>
                <span className="opacity-60">24 Bruton St, London W1J 6QQ</span>
              </li>
              <li>
                <span className="block text-white font-medium">SoHo Gallery</span>
                <span className="opacity-60">72 Mercer St, New York, NY 10012</span>
              </li>
              <li className="pt-2">
                <span className="text-luxury-gold block">concierge@velvora.com</span>
                <span className="opacity-60">+44 (0) 20 7946 0958</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-luxury text-luxury-gray-light/40">
          <p>© {currentYear} Velvora Fashion. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
            <span>Designed in London</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
