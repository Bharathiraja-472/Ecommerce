import React from 'react';
import { Mail } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Eleanora Vance",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
      bio: "Formerly designing in Paris, Eleanora founded Velvora in 2018 to establish a sanctuary of slow fashion, focusing on raw linen and organic cotton."
    },
    {
      name: "Julian Sterling",
      role: "Head of Sartorial Tailoring",
      image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600&auto=format&fit=crop",
      bio: "With over 15 years on Savile Row, Julian leads our menswear atelier, marrying classic British structures with soft Mediterranean drapes."
    },
    {
      name: "Sophia Lindqvist",
      role: "Director of Sustainable Sourcing",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop",
      bio: "Sophia manages our direct partnerships with organic flax farms in Belgium and silk cooperatives in Northern Italy, ensuring traceably pure materials."
    }
  ];

  return (
    <div className="pt-[72px] bg-luxury-sand/10 font-sans">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="relative h-[60vh] bg-luxury-black overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1600&auto=format&fit=crop')`,
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        
        <div className="relative text-center space-y-4 px-4 max-w-3xl z-10 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold-light font-medium block">
            Our Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wide uppercase font-light">
            The Velvora Atelier
          </h1>
          <p className="text-xs sm:text-sm font-light tracking-wide max-w-lg mx-auto opacity-75 leading-relaxed">
            A sanctuary of slow luxury, structured tailoring, and ethically sourced fibers, built to transcend seasonal cycles.
          </p>
        </div>
      </section>

      {/* 2. BRAND STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Narrative */}
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold block font-medium">
              Established 2018
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-luxury-black tracking-wide leading-tight">
              A Vision of Silent Luxury
            </h2>
            <div className="h-[1px] w-12 bg-luxury-gold" />
            
            <p className="text-xs sm:text-sm font-light text-luxury-gray leading-relaxed">
              Velvora was born in London out of a simple, rebellious desire: to break free from the exhausting tempo of fast-fashion grids. We set out to design garments that whisper rather than scream. Silent luxury, pure lines, and exceptional tactile comfort form the core DNA of every stitch we make.
            </p>
            <p className="text-xs sm:text-sm font-light text-luxury-gray leading-relaxed">
              Every collection starts at the source. We work directly with family-run flax fields in Flanders and clean-energy silk looms in Como. By eliminating middlemen and crafting in strictly limited batches, we guarantee both carbon-traceable operations and exceptional value for genuine couture-level garments.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="border-l border-luxury-gold/50 pl-4 py-2">
                <span className="font-serif text-2xl text-luxury-black block">100%</span>
                <span className="text-[9px] uppercase tracking-wide text-luxury-gray">Traceable Fibers</span>
              </div>
              <div className="border-l border-luxury-gold/50 pl-4 py-2">
                <span className="font-serif text-2xl text-luxury-black block">Zero</span>
                <span className="text-[9px] uppercase tracking-wide text-luxury-gray">Mass Production Waste</span>
              </div>
            </div>
          </div>

          {/* Editorial Visual Collage */}
          <div className="relative aspect-[4/5] bg-luxury-gray-light border border-luxury-border shadow-sm overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"
              alt="Model posing in linen coat"
              className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-all duration-75" />
          </div>
        </div>
      </section>

      {/* 3. SUSTAINABILITY & PHILOSOPHY GRID */}
      <section className="bg-white border-y border-luxury-border py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <Sparkles className="w-5 h-5 text-luxury-gold mx-auto" />
            <h2 className="font-serif text-3xl text-luxury-black tracking-wide">
              Atelier Philosophy
            </h2>
            <p className="text-xs font-light text-luxury-gray leading-relaxed">
              We operate at the intersection of timeless English silhouettes, Mediterranean leisure textiles, and high-integrity ecological ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Box 1 */}
            <div className="space-y-4 p-6 bg-luxury-sand/35 border border-luxury-border/40 hover:border-luxury-gold transition duration-300">
              <h3 className="font-serif text-lg text-luxury-black uppercase tracking-wider">
                Slow Fashion
              </h3>
              <p className="text-xs font-light text-luxury-gray leading-relaxed">
                Rather than introducing 52 micro-collections a year, Velvora curates three tightly-refined edits annually. Each piece is engineered with double-bonded stitching to physically endure a lifetime of wear.
              </p>
            </div>

            {/* Box 2 */}
            <div className="space-y-4 p-6 bg-luxury-sand/35 border border-luxury-border/40 hover:border-luxury-gold transition duration-300">
              <h3 className="font-serif text-lg text-luxury-black uppercase tracking-wider">
                Ethical Sourcing
              </h3>
              <p className="text-xs font-light text-luxury-gray leading-relaxed">
                We utilize only GOTS-certified organic linen, cruelty-free peace silk, and FSC-certified cellulose yarns. Our production loops utilize closed-circuit chemical filtrations, leaving zero residue.
              </p>
            </div>

            {/* Box 3 */}
            <div className="space-y-4 p-6 bg-luxury-sand/35 border border-luxury-border/40 hover:border-luxury-gold transition duration-300">
              <h3 className="font-serif text-lg text-luxury-black uppercase tracking-wider">
                Carbon Neutral
              </h3>
              <p className="text-xs font-light text-luxury-gray leading-relaxed">
                By maintaining highly localized shipping pathways and planting native deciduous forests in partnership with the UK Woodland Trust, we maintain a complete net-negative carbon balance sheet.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. ATELIER CREATIVE TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold block mb-2">
            The Creative Minds
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-black tracking-wide">
            Our Atelier Leads
          </h2>
          <div className="h-[1px] w-12 bg-luxury-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group space-y-4 bg-white border border-luxury-border/40 p-4 hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-luxury-gray-light border border-luxury-border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg text-luxury-black">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-luxury text-luxury-gold font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-xs font-light text-luxury-gray leading-relaxed mt-3 pt-3 border-t border-luxury-border/30">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
