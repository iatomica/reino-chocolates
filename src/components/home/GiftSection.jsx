import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GiftIcon } from '../ornaments/GiftIcon';

export const GiftSection = () => {
  return (
    <section id="regalos" className="relative bg-[#f3ead9] py-24 px-6 md:px-12 border-t border-[#9b713d]/20 overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Premium Packaging Photography (60% composition) */}
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#9b713d]/30 group">
            <img
              src="/assets/images/regalo_caja_lujo.jpg"
              alt="Caja de regalo artesanal El Reino de los Chocolates"
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Column: Editorial Copy (40% composition) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2">
            <GiftIcon className="w-6 h-6 text-[#9b713d]" />
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#9b713d] uppercase">
              EL REGALO IMPERIAL
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#3b271b] leading-[1.05] tracking-tight">
            Un regalo que <br />
            <span className="italic text-[#3f6f6b]">deja huella</span>
          </h2>

          <div className="w-16 h-[1px] bg-[#9b713d]" />

          <p className="font-sans text-sm sm:text-base text-[#746657] leading-relaxed">
            Diseñamos cajas de regalo envueltas a mano con listones de seda y sellos de lacre en bronce. Regalar un chocolate de la Casa Real es entregar un gesto inolvidable de distinción y buen gusto.
          </p>

          <div className="pt-2">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9b713d] hover:bg-[#c1a06c] text-[#faf5e9] font-sans text-xs tracking-[0.18em] font-extrabold uppercase transition-all duration-300 shadow-md"
            >
              <span>DESCUBRIR REGALOS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
