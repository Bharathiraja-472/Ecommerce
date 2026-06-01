import React from 'react';
import { Scale, ShoppingBag, Globe, AlertTriangle } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      title: "1. Atelier Purchases & Accounts",
      icon: <ShoppingBag className="w-4 h-4 text-luxury-gold" />,
      content: "When constructing an account or making purchase agreements in the Velvora storefront, you guarantee that all coordinate profiles are truthful and precise. You are solely responsible for securing your personal password credentials. We reserve complete rights to restrict access, cancel purchases, or suspend profiles at our sole discretion."
    },
    {
      title: "2. Fabric Standards & Visual Disclosures",
      icon: <AlertTriangle className="w-4 h-4 text-luxury-gold" />,
      content: "Since we employ organic fibers ( mulberry silk, linen, cashmere), mild fabric irregularities and color tonal changes are natural and are characteristics of slow craftsmanship. Graphic visual displays on screens represent high-accuracy lighting; however, local screen configs may cause slight color differentials."
    },
    {
      title: "3. Global Dispatches & Custom Taxes",
      icon: <Globe className="w-4 h-4 text-luxury-gold" />,
      content: "Velvora arranges global express dispatches with customs fees and import duties pre-computed at checkout. Risk of delivery loss transfers upon dispatch to our courier partners (DHL). Delivery time frames represent best approximations and are subject to local customs clearings."
    },
    {
      title: "4. Intellectual Property & Brand Assets",
      icon: <Scale className="w-4 h-4 text-luxury-gold" />,
      content: "All physical content (logos, styling photos, product drafts, texts, software scripts) remains the exclusive proprietary property of Velvora Fashion Ltd. You are strictly forbidden from duplicate copying, distribution, or harvesting brand assets for external retail uses without explicit written consent."
    }
  ];

  return (
    <div className="pt-[72px] bg-luxury-sand/30 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        
        {/* Title Block */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium block">
            Legal Charter
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-luxury-black tracking-wide uppercase font-light">
            Terms & Conditions
          </h1>
          <p className="text-xs font-light text-luxury-gray max-w-md mx-auto leading-relaxed">
            Effective Date: May 30, 2026. This agreement outlines the contractual regulations for visiting the Velvora Atelier store.
          </p>
          <div className="h-[1px] w-12 bg-luxury-gold mx-auto" />
        </div>

        {/* Content Box */}
        <div className="bg-white border border-luxury-border p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="prose prose-sm text-xs sm:text-sm font-light text-luxury-gray leading-relaxed space-y-4">
            <p>
              Welcome to Velvora. By browsing our website or placing order coordinate sheets, you explicitly agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully before utilizing our services.
            </p>
          </div>

          {/* Key Legal Clauses */}
          <div className="space-y-6 pt-4 border-t border-luxury-border/30">
            {sections.map((sec) => (
              <div key={sec.title} className="space-y-2">
                <h3 className="font-serif text-lg text-luxury-black flex items-center gap-2.5">
                  {sec.icon}
                  {sec.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-luxury-gray leading-relaxed pl-6">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-luxury-border/30 text-center space-y-4">
            <p className="text-xs font-light text-luxury-gray leading-relaxed max-w-md mx-auto">
              This contract is governed by and construed in accordance with the laws of the United Kingdom. For comprehensive questions regarding regulatory legal clauses, reach out to our legal coordinators at:
            </p>
            <span className="inline-block bg-luxury-sand/60 px-5 py-2.5 text-xs uppercase tracking-luxury text-luxury-gold font-semibold border border-luxury-border">
              legal@velvora.com
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
