import React from 'react';
import { ShieldAlert, Eye, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information Coordinates We Acquire",
      icon: <Eye className="w-4 h-4 text-luxury-gold" />,
      content: "Velvora acquires specific parameters of data during your browse. This includes personal identifiers (full name, shipping coordinates, billing indices, email endpoints, phone coordinates) provided explicitly during register or checkout, and automated browse metadata (cookie files, IP addresses, browser variants) resolved during website interactions."
    },
    {
      title: "2. The Scope of Data Utilization",
      icon: <FileText className="w-4 h-4 text-luxury-gold" />,
      content: "We utilize acquired parameters specifically to process transactions, manage customer profiles, arrange DHL express dispatches, customize editorial updates (optional newsletter subscriptions), and perform analytical tracking to refine store performance. Velvora does not trade, rent, or lease consumer coordinates to external marketing networks."
    },
    {
      title: "3. Gateway Protection & Financial Security",
      icon: <Lock className="w-4 h-4 text-luxury-gold" />,
      content: "All transactional credit card parameters are handled directly by PCI-DSS compliant secure vaults (Stripe, Visa, Mastercard, Klarna) utilizing 256-bit SSL encryption tokens. No credit card files are registered or stored on Velvora's physical databases. Physical database coordinates are protected under tight modern cloud tokenizations."
    },
    {
      title: "4. Global Cookie Files & Tracking Regulations",
      icon: <ShieldAlert className="w-4 h-4 text-luxury-gold" />,
      content: "We employ subtle cookie files to maintain shopping bag items, remember customer sessions, and trace Google Analytics coordinates. You can configure your browser parameters to reject cookies, though this may prevent complete utilize of dynamic shopping bag drawers."
    }
  ];

  return (
    <div className="pt-[72px] bg-luxury-sand/30 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
        
        {/* Editorial Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium block">
            Velvora Regulations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-luxury-black tracking-wide uppercase font-light">
            Privacy Policy
          </h1>
          <p className="text-xs font-light text-luxury-gray max-w-md mx-auto leading-relaxed">
            Effective Date: May 30, 2026. This charter details how our atelier secures, processes, and respects your physical and digital coordinates.
          </p>
          <div className="h-[1px] w-12 bg-luxury-gold mx-auto" />
        </div>

        {/* Content Box */}
        <div className="bg-white border border-luxury-border p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="prose prose-sm text-xs sm:text-sm font-light text-luxury-gray leading-relaxed space-y-4">
            <p>
              Velvora values your patronage and is entirely committed to protecting your privacy. This privacy document describes our privacy practices in plain, transparent language. By accessing the Velvora Fashion website, you consent to the coordinate acquisitions described herein.
            </p>
          </div>

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
              If you have queries regarding your stored records or request complete deletion under GDPR/CCPA regulations, please submit an official inquiry to:
            </p>
            <span className="inline-block bg-luxury-sand/60 px-5 py-2.5 text-xs uppercase tracking-luxury text-luxury-gold font-semibold border border-luxury-border">
              privacy@velvora.com
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
