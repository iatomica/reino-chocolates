import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Crown, Sparkles, Trophy, X } from 'lucide-react';
import { audioSynth } from '../utils/audioHelper';

const PRIZES = [
  'Ticket Dorado VIP Wonka',
  'Trufa de Orquídea Turquesa Gratis',
  '25% Descuento Real en tu Caja',
  'Envío Mágico de Maravilla Gratis',
  'Taza de Chocolate Real de Regalo',
  'Elixir Dorado de la Suerte'
];

export const GoldenTicketWheel = ({ isOpen, onClose, onWinPrize }) => {
  const [spinning, setSpinning] = useState(false);
  const [wonPrize, setWonPrize] = useState(null);
  const [rotation, setRotation] = useState(0);

  if (!isOpen) return null;

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setWonPrize(null);
    if (audioSynth?.playMagicMagicSparkle) audioSynth.playMagicMagicSparkle();

    const extraRounds = 5 + Math.floor(Math.random() * 3);
    const randomIndex = Math.floor(Math.random() * PRIZES.length);
    const degreesPerSegment = 360 / PRIZES.length;
    const targetDegree = extraRounds * 360 + (PRIZES.length - randomIndex) * degreesPerSegment - degreesPerSegment / 2;

    setRotation(targetDegree);

    setTimeout(() => {
      const prize = PRIZES[randomIndex];
      setWonPrize(prize);
      setSpinning(false);
      if (audioSynth?.playChime) audioSynth.playChime();
      onWinPrize(prize);

      // Trigger Confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#00a896', '#80deea', '#ffffff']
      });
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120A07]/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#120A07] text-[#FAF5EB] p-6 sm:p-8 max-w-lg w-full rounded-2xl border-2 border-[#FFD700]/70 relative text-center space-y-6 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#2A160E] text-[#0DB4B9] hover:text-[#FFD700] border border-[#FFD700]/30 transition-colors"
          title="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A160E] text-[#FFD700] border border-[#FFD700]/40 text-xs font-serif font-bold">
          <Crown className="w-4 h-4" />
          <span>Sorteo Real del Ticket Dorado</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#FFD700] font-bold">
          Gira la Ruleta de la Fortuna
        </h3>

        {/* Wheel Graphic */}
        <div className="relative w-64 h-64 mx-auto my-6 flex items-center justify-center">
          
          {/* Wheel Pointer SVG */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-[#FFD700] filter drop-shadow-md">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <polygon points="10,20 0,0 20,0" />
            </svg>
          </div>

          <div
            className="w-full h-full rounded-full border-4 border-[#FFD700] shadow-2xl relative overflow-hidden transition-transform duration-[4000ms] cubic-bezier(0.15, 0.9, 0.2, 1)"
            style={{
              transform: `rotate(${rotation}deg)`,
              background: 'conic-gradient(#00a896 0deg 60deg, #180e09 60deg 120deg, #d4af37 120deg 180deg, #05668d 180deg 240deg, #120a07 240deg 300deg, #ffd700 300deg 360deg)'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Sparkles className="w-16 h-16 text-white/30" />
            </div>
          </div>

          <div className="absolute w-16 h-16 rounded-full bg-[#120A07] border-2 border-[#FFD700] shadow-inner flex items-center justify-center z-10">
            <Trophy className="w-6 h-6 text-[#FFD700]" />
          </div>
        </div>

        {wonPrize ? (
          <div className="p-4 rounded-xl bg-[#00A896]/20 border border-[#FFD700]/60 space-y-2 animate-bounce">
            <span className="font-serif text-xs text-[#FFD700] block uppercase font-bold tracking-widest">
              ¡Felicidades, Alquimista!
            </span>
            <p className="font-serif text-lg text-white font-bold">{wonPrize}</p>
            <p className="text-xs text-[#FAF5EB]/80 font-sans">Premio desbloqueado y aplicado a tu pedido.</p>
          </div>
        ) : (
          <button
            onClick={handleSpin}
            disabled={spinning}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FFD700] via-[#F4D03F] to-[#D4AF37] text-[#120A07] font-serif font-extrabold text-xs uppercase tracking-wider hover:brightness-105 shadow-xl"
          >
            {spinning ? 'Girando la Fortuna...' : 'Girar Ruleta Mágica'}
          </button>
        )}

      </div>
    </div>
  );
};
