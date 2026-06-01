import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Welcome Back to Velvora! Logged in as: ${email}`);
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center px-4 bg-luxury-sand/30 font-sans">
      
      {/* Container Box */}
      <div className="w-full max-w-md bg-white border border-luxury-border p-8 sm:p-10 shadow-sm animate-scale-up">
        
        {/* Header Branding */}
        <div className="text-center space-y-2 mb-8">
          <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase text-luxury-black">
            Velvora
          </Link>
          <p className="text-xs uppercase tracking-luxury text-luxury-gray font-medium">
            Concierge Sign In
          </p>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Address */}
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

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-baseline">
              <label className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-[9px] uppercase tracking-wide text-luxury-gold hover:text-luxury-black transition"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-luxury-gray">
                <Lock className="w-4 h-4 stroke-[1.2]" />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                disabled={isLoading}
                className="w-full text-xs pl-10 pr-4 py-3 border border-luxury-border focus:border-luxury-black outline-none tracking-wide font-light bg-luxury-sand/20 disabled:opacity-50 transition"
              />
            </div>
          </div>

          {/* Remember Me Toggle */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
              className="w-3.5 h-3.5 border-luxury-border focus:ring-0 text-luxury-black rounded-none cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="ml-2 text-[10px] uppercase tracking-luxury text-luxury-gray select-none cursor-pointer"
            >
              Remember my session
            </label>
          </div>

          {/* Sign In Trigger */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-luxury-black text-white text-xs uppercase tracking-luxury font-medium hover:bg-luxury-gold transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            {isLoading ? (
              <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Sign In
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

        </form>

        {/* Social Authentication Panels */}
        <div className="mt-8 space-y-4">
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-luxury-border/60"></div>
            <span className="flex-shrink mx-3 text-[9px] uppercase tracking-[0.2em] text-luxury-gray/50">
              Or Connect With
            </span>
            <div className="flex-grow border-t border-luxury-border/60"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            
            {/* Google UI Button */}
            <button
              type="button"
              onClick={() => alert('Signing in with Google...')}
              disabled={isLoading}
              className="flex items-center justify-center py-2.5 px-4 border border-luxury-border/80 text-luxury-black bg-white hover:bg-luxury-sand/50 text-[10px] uppercase tracking-luxury transition cursor-pointer select-none"
            >
              <svg className="w-3.5 h-3.5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              Google
            </button>

            {/* Facebook UI Button */}
            <button
              type="button"
              onClick={() => alert('Signing in with Facebook...')}
              disabled={isLoading}
              className="flex items-center justify-center py-2.5 px-4 border border-luxury-border/80 text-luxury-black bg-white hover:bg-luxury-sand/50 text-[10px] uppercase tracking-luxury transition cursor-pointer select-none"
            >
              <svg className="w-3.5 h-3.5 mr-2 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>

          </div>
        </div>

        {/* Redirect to Sign Up */}
        <div className="text-center pt-8 mt-6 border-t border-luxury-border/30">
          <p className="text-[10px] uppercase tracking-luxury text-luxury-gray">
            New to Velvora?{' '}
            <Link
              to="/signup"
              className="text-luxury-gold hover:text-luxury-black font-semibold transition"
            >
              Create Account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
