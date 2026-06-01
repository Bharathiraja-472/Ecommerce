import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate database API request delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section className="bg-luxury-sand border-y border-luxury-border py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Dynamic State: Form Submitted */}
        {isSubmitted ? (
          <div className="space-y-6 animate-scale-up">
            <div className="inline-flex items-center justify-center bg-luxury-black text-white w-12 h-12 rounded-full mb-2">
              <Check className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="font-serif text-3xl tracking-wide text-luxury-black">
              Welcome to the Velvora Circle
            </h3>
            <p className="text-sm font-light text-luxury-gray max-w-md mx-auto leading-relaxed">
              Your subscription is confirmed. You will receive private previews, curated collections, and early access to our seasonal journals.
            </p>
            <div className="inline-block bg-white border border-luxury-gold/50 px-6 py-3 text-xs uppercase tracking-luxury text-luxury-gold font-medium">
              Enjoy 10% Off — Code: <span className="font-sans font-bold text-luxury-black">VELVORA10</span>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium block">
              Exclusive Access
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-luxury-black">
              Join Our Global Journal
            </h2>
            
            <p className="text-sm font-light text-luxury-gray max-w-lg mx-auto leading-relaxed">
              Subscribe to receive private seasonal invitations, exclusive styling consultations, and early access to bespoke garments.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4 flex flex-col sm:flex-row items-stretch gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-luxury-gray">
                  <Mail className="w-4 h-4 stroke-[1.2]" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  disabled={isLoading}
                  className="w-full text-sm pl-11 pr-4 py-3 bg-white border border-luxury-border/60 focus:border-luxury-black focus:ring-0 outline-none tracking-wide font-light transition-all duration-300"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="bg-luxury-black text-white text-xs uppercase tracking-luxury px-8 py-3.5 sm:py-0 font-medium hover:bg-luxury-gold transition-colors duration-300 flex items-center justify-center min-w-[140px]"
              >
                {isLoading ? (
                  <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>

            <p className="text-[10px] text-luxury-gray/40 pt-2 leading-relaxed">
              By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
