import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Crown } from '../ornaments/Crown';

export const Hero = ({ onOpenTakeAway }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#faf5e9] overflow-hidden pt-28 pb-16">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Editorial Copy (45% visual width) */}
        <div className="lg:col-span-5 space-y-7 text-left z-10">
          
          <div className="inline-flex items-center gap-2.5">
            <Crown className="w-5 h-5 text-[#9b713d]" />
            <span className="font-sans text-[11px] font-extrabold tracking-[0.25em] text-[#9b713d] uppercase">
              CHOCOLATERÍA ARTESANAL
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#3b271b] leading-[0.98] tracking-tight">
            Pequeños placeres, <br />
            <span className="italic text-[#3f6f6b] font-serif">grandes historias.</span>
          </h1>

          <p className="font-sans text-base text-[#746657] max-w-md leading-relaxed">
            Bombones artesanales creados para convertir cada momento en algo especial. Ediciones limitadas en cajas vintage de hojalata y cacao fino de origen.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#productos"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#6f9f9a] hover:bg-[#3f6f6b] text-[#faf5e9] font-sans text-xs tracking-[0.18em] font-extrabold uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:translate-x-1"
            >
              <span>VER PRODUCTOS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenTakeAway}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#9b713d]/60 text-[#3b271b] hover:bg-[#9b713d] hover:text-[#faf5e9] font-sans text-xs tracking-[0.15em] font-bold uppercase transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-[#9b713d]" />
              <span>PEDIDO TAKE AWAY</span>
            </button>
          </div>

        </div>

        {/* Right Hero Product Photography (55% composition) */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl border border-[#9b713d]/30 group">
            <img
              src="/assets/images/hero_lata_reino.webp"
              alt="Caja Vintage El Reino de los Chocolates"
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Subtle vintage vignette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#21120c]/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>

    </section>
  );
};
