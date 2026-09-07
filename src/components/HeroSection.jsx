import React from 'react';
import { Sparkles, Crown, ArrowRight } from 'lucide-react';
import { audioSynth } from '../utils/audioHelper';

export const HeroSection = ({ onOpenWheel }) => {
  return (
    <section className="relative min-h-[92dvh] pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
      
      {/* Background Mountain Editorial Artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/caja_chocolates_montana.jpg"
          alt="Reino de Chocolates Montaña"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-105 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002320] via-[#002320]/70 to-[#002320]/40" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto z-10 text-center space-y-8">
        
        {/* Eyebrow Filigree */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-teal-950/80 border border-amber-400/40 text-amber-300 text-xs font-heading tracking-[0.25em] uppercase shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Alta Chocolatería de Maravillas</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          EL REINO DE CHOCOLATES DE ENSUEÑO
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-lg sm:text-xl text-teal-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Cajas de alta selección esculpidas en turquesa, blanco y oro puro de 24K. Inspiradas en la magia de Wonka y la fantasía de Alicia en las cumbres alpinas.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#catalogo"
            onClick={() => audioSynth.playChime()}
            className="btn-gold-minimal"
          >
            <span>Ver Colección Real</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <button
            onClick={() => {
              audioSynth.playMagicMagicSparkle();
              onOpenWheel();
            }}
            className="btn-glass-minimal"
          >
            <Crown className="w-4 h-4 text-amber-300" />
            <span>Ruleta Ticket Dorado</span>
          </button>
        </div>

        {/* Minimal Features Strip */}
        <div className="pt-16 border-t border-amber-400/20 max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <span className="font-heading text-xs text-amber-300 uppercase tracking-widest block font-bold">24K Oro Puro</span>
            <span className="text-[11px] text-teal-200/70 font-sans">Láminas Comestibles</span>
          </div>
          <div>
            <span className="font-heading text-xs text-teal-200 uppercase tracking-widest block font-bold">Florales Alpinos</span>
            <span className="text-[11px] text-teal-200/70 font-sans">Orquídea & Azahar</span>
          </div>
          <div>
            <span className="font-heading text-xs text-amber-300 uppercase tracking-widest block font-bold">Tickets Dorados</span>
            <span className="text-[11px] text-teal-200/70 font-sans">Premios Reales Wonka</span>
          </div>
        </div>

      </div>
    </section>
  );
};
