import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1400);
  };

  return (
    <div className="pt-[72px] bg-luxury-sand/30 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium block">
            Atelier Consultations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-luxury-black tracking-wide uppercase font-light">
            Contact Us
          </h1>
          <p className="text-xs font-light text-luxury-gray max-w-md mx-auto leading-relaxed">
            Schedule private showroom viewings, request custom tailoring sizing parameters, or coordinate product returns.
          </p>
          <div className="h-[1px] w-12 bg-luxury-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-luxury-border p-6 sm:p-10 shadow-sm">
          
          {/* Left Column: Contact Details (4 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:pr-8 lg:border-r border-luxury-border/60">
            
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-luxury-black tracking-wide">
                Get In Touch
              </h3>
              <p className="text-xs font-light text-luxury-gray leading-relaxed">
                We generally resolve concierge emails within 12 hours. Reach out during showroom operation hours for direct concierge consultations.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-luxury-sand text-luxury-gold p-2.5 border border-luxury-border">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="ml-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">Showroom Address</span>
                  <span className="text-xs font-light text-luxury-gray block">24 Bruton St, Mayfair, London W1J 6QQ</span>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start">
                <div className="bg-luxury-sand text-luxury-gold p-2.5 border border-luxury-border">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="ml-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">Phone Helpline</span>
                  <span className="text-xs font-light text-luxury-gray block">+44 (0) 20 7946 0958</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-luxury-sand text-luxury-gold p-2.5 border border-luxury-border">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="ml-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">General Enquiries</span>
                  <span className="text-xs font-light text-luxury-gold block">concierge@velvora.com</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="bg-luxury-sand text-luxury-gold p-2.5 border border-luxury-border">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="ml-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">Atelier Hours</span>
                  <span className="text-xs font-light text-luxury-gray block">Monday - Friday: 09:00 - 18:00 GMT</span>
                  <span className="text-xs font-light text-luxury-gray block">Saturday: 10:00 - 16:00 GMT</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Dynamic Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <h3 className="font-serif text-2xl text-luxury-black tracking-wide">
              Leave A Message
            </h3>

            {isSent ? (
              <div className="bg-luxury-sand/50 border border-luxury-gold/30 p-8 text-center space-y-4 animate-scale-up">
                <div className="w-12 h-12 bg-luxury-black text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl text-luxury-black">Inquiry Logged</h4>
                <p className="text-xs font-light text-luxury-gray max-w-sm mx-auto leading-relaxed">
                  Thank you, your message has been sent to our concierge desk. One of our bespoke hosts will email you back within 12 hours.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="bg-luxury-black text-white text-[10px] uppercase tracking-luxury py-2.5 px-6 font-medium hover:bg-luxury-gold transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Eleanora Vance"
                      disabled={isLoading}
                      className="w-full text-xs px-4 py-3 border border-luxury-border focus:border-luxury-black outline-none tracking-wide font-light bg-luxury-sand/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@luxury.com"
                      disabled={isLoading}
                      className="w-full text-xs px-4 py-3 border border-luxury-border focus:border-luxury-black outline-none tracking-wide font-light bg-luxury-sand/20"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">Subject</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Bespoke consultation / Sizing / Collaboration"
                    disabled={isLoading}
                    className="w-full text-xs px-4 py-3 border border-luxury-border focus:border-luxury-black outline-none tracking-wide font-light bg-luxury-sand/20"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-luxury text-luxury-black font-semibold block">Message Body</label>
                  <textarea
                    required
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide detailed inquiry points..."
                    disabled={isLoading}
                    className="w-full text-xs px-4 py-3 border border-luxury-border focus:border-luxury-black outline-none tracking-wide font-light bg-luxury-sand/20 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-luxury-black text-white text-xs uppercase tracking-luxury py-3.5 px-8 font-medium hover:bg-luxury-gold transition duration-300 flex items-center justify-center gap-2 group ml-auto"
                >
                  {isLoading ? (
                    <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

        {/* 3. PREMIUM MAP PLACEHOLDER (WOW FACTOR) */}
        <div className="mt-12 bg-luxury-black border border-luxury-charcoal aspect-[16/7] w-full relative overflow-hidden flex flex-col justify-center items-center text-center px-4 select-none group">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#c5a880_1px,transparent_1px),linear-gradient(to_bottom,#c5a880_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <div className="relative z-10 space-y-4 animate-fade-in">
            <div className="bg-luxury-charcoal text-luxury-gold p-3 rounded-full border border-luxury-gold/20 inline-block">
              <MapPin className="w-6 h-6 animate-pulse" />
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl text-white tracking-widest uppercase">
              London Showroom Atelier Map
            </h3>
            
            <p className="text-[10px] uppercase tracking-luxury text-luxury-gold max-w-md mx-auto">
              Bruton St, Mayfair, London, W1J — Lat 51.509865 / Lng -0.118092
            </p>
            
            <p className="text-xs font-light text-luxury-gray-light/60 max-w-xs mx-auto leading-relaxed">
              Our Mayfair atelier map is configured as private client showroom indicators. Map displays are disabled on public domains.
            </p>

            <button
              onClick={() => window.open('https://maps.google.com', '_blank')}
              className="border border-luxury-gold/50 text-luxury-gold text-[9px] uppercase tracking-luxury py-2 px-6 hover:bg-luxury-gold hover:text-white transition duration-300 inline-block font-semibold"
            >
              Open External Directions
            </button>
          </div>

          {/* Border grids to look like custom drafting canvas */}
          <div className="absolute inset-4 border border-white/5 pointer-events-none group-hover:border-white/10 transition" />
        </div>

      </div>
    </div>
  );
}
