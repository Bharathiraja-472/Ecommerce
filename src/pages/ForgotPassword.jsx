import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center px-4 bg-luxury-sand/30 font-sans">
      
      {/* Container Box */}
      <div className="w-full max-w-md bg-white border border-luxury-border p-8 sm:p-10 shadow-sm animate-scale-up">
        
        {/* Branding Signpost */}
        <div className="text-center space-y-2 mb-8">
          <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase text-luxury-black">
            Velvora
          </Link>
          <p className="text-xs uppercase tracking-luxury text-luxury-gray font-medium">
            Reset Password
          </p>
        </div>

        {/* Dynamic Success Switch */}
        {isSubmitted ? (
          <div className="space-y-6 text-center animate-scale-up">
            <div className="inline-flex items-center justify-center bg-luxury-black text-white w-12 h-12 rounded-full shadow-sm">
              <CheckCircle2 className="w-5 h-5 stroke-[1.8] text-luxury-gold" />
            </div>
            
            <h3 className="font-serif text-2xl tracking-wide text-luxury-black">
              Recovery Link Dispatched
            </h3>
            
            <p className="text-xs font-light text-luxury-gray leading-relaxed max-w-xs mx-auto">
              We have dispatched a secure authentication key and reset instructions to: <strong className="text-luxury-black font-semibold">{email}</strong>. Please check your inbox.
            </p>

            <Link
              to="/login"
              className="inline-flex items-center text-xs uppercase tracking-luxury text-luxury-gold hover:text-luxury-black font-medium pt-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign In
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            <p className="text-xs font-light text-luxury-gray text-center leading-relaxed max-w-xs mx-auto">
              Provide your registered email coordinates. We will dispatch a temporary recovery gateway to re-establish your secure credentials.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 pt-2">
              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-luxury-gray">
                    <Mail className="w-4 h-4 stroke-[1.2]" />
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@luxury.com"
                    disabled={isLoading}
                    className="w-full text-xs pl-10 pr-4 py-3 border border-luxury-border focus:border-luxury-black outline-none tracking-wide font-light bg-luxury-sand/20 disabled:opacity-50 transition"
                  />
                </div>
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-luxury-black text-white text-xs uppercase tracking-luxury font-medium hover:bg-luxury-gold transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Recovery Link
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Back Nav Link */}
            <div className="text-center pt-6 mt-6 border-t border-luxury-border/30">
              <Link
                to="/login"
                className="inline-flex items-center text-[10px] uppercase tracking-luxury text-luxury-gray hover:text-luxury-black font-semibold transition"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                Return to Login
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
