import React from 'react';
import { HorseIllustration } from '../ornaments/HorseIllustration';
import { ArrowRight } from 'lucide-react';

export const StorySection = () => {
  return (
    <section id="historia" className="relative grid grid-cols-1 lg:grid-cols-2 bg-[#294b48] text-[#faf5e9] overflow-hidden">
      
      {/* Left Column: Close-up Product Photography */}
      <div className="relative min-h-[440px] lg:min-h-[600px]">
        <img
          src="/assets/images/bombones_naranja.jpg"
          alt="Caja de chocolates artesanal con detalles dorados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#294b48]/30 pointer-events-none" />
      </div>

      {/* Right Column: Vintage Muted Teal Section (#3f6f6b) */}
      <div className="relative bg-[#3f6f6b] p-10 md:p-16 lg:p-20 flex flex-col justify-center space-y-6 overflow-hidden">
        
        {/* Background Subtle Horse Engraving (Low Opacity) */}
        <div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none text-[#faf5e9]">
          <HorseIllustration className="w-96 h-96" />
        </div>

        {/* Eyebrow Label */}
        <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#c1a06c] uppercase block">
          NUESTRA ESENCIA
        </span>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
          Tradición que <br />
          <span className="italic text-[#c1a06c]">se saborea</span>
        </h2>

        {/* Thin Gold Separator */}
        <div className="w-16 h-[1px] bg-[#c1a06c]" />

        {/* Body Copy */}
        <p className="font-sans text-sm sm:text-base text-[#faf5e9]/90 max-w-lg leading-relaxed font-normal">
          Desde nuestros orígenes conservamos la pasión por la chocolatería europea tradicional. Seleccionamos el mejor cacao y lo combinamos con recetas centenarias para convertir cada bocado en un momento de verdadero deleite.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <a
            href="#catalogo"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#faf5e9]/40 hover:border-[#c1a06c] hover:bg-[#294b48] text-[#faf5e9] hover:text-[#c1a06c] font-sans text-xs tracking-[0.18em] font-extrabold uppercase transition-all duration-300"
          >
            <span>CONOCÉ NUESTRA HISTORIA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </section>
  );
};
