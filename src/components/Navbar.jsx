import React, { useState } from 'react';
import { ShoppingBag, Volume2, VolumeX, Sparkles, Crown } from 'lucide-react';
import { audioSynth } from '../utils/audioHelper';

export const Navbar = ({ cartCount, onOpenCart, onOpenWheel }) => {
  const [isMuted, setIsMuted] = useState(true);

  const handleAudioToggle = () => {
    const muted = audioSynth.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-amber-400/60 bg-teal-950 flex items-center justify-center text-amber-300 group-hover:border-amber-300 transition-colors">
            <Crown className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <span className="font-display text-lg md:text-xl font-bold text-white tracking-widest block leading-none">
              REINO DE CHOCOLATES
            </span>
            <span className="font-sans text-[9px] tracking-[0.25em] text-amber-300 uppercase font-semibold">
              Wonders of Wonka & Alice
            </span>
          </div>
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 font-heading text-xs tracking-[0.15em] text-teal-100/90 font-bold uppercase">
          <a href="#catalogo" className="hover:text-amber-300 transition-colors">
            Colección
          </a>
          <a href="#alquimia" className="hover:text-amber-300 transition-colors">
            Alquimia
          </a>
          <button
            onClick={onOpenWheel}
            className="hover:text-amber-300 transition-colors text-amber-300 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Ruleta Ticket Dorado
          </button>
          <a href="#resenas" className="hover:text-amber-300 transition-colors">
            Cuentos
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleAudioToggle}
            title={isMuted ? "Activar Armonía Mágica" : "Silenciar"}
            className="p-2 text-teal-200 hover:text-amber-300 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />}
          </button>

          <button
            onClick={onOpenCart}
            className="btn-gold-minimal py-2.5 px-5 text-[11px] flex items-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Caja Mágica</span>
            {cartCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-stone-950 text-amber-300 font-bold text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
