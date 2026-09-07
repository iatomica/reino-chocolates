import React from 'react';
import { Crown } from '../ornaments/Crown';
import { EngravedLandscape } from '../ornaments/EngravedLandscape';
import { DecorativeDivider } from '../ornaments/DecorativeDivider';

export const HeritageSection = () => {
  return (
    <section className="relative bg-[#21120c] text-[#faf5e9] py-28 px-6 text-center overflow-hidden border-t border-[#9b713d]/40">
      
      {/* Background Engraved Landscape Watermark */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
        <EngravedLandscape className="w-full max-w-5xl text-[#c1a06c]" />
      </div>

      <div className="max-w-[1240px] mx-auto space-y-6 relative z-10">
        
        {/* Crown Logo Center */}
        <div className="flex justify-center mb-2">
          <div className="w-16 h-16 rounded-full bg-[#3b271b] border-2 border-[#9b713d] flex items-center justify-center text-[#9b713d] shadow-lg">
            <Crown className="w-9 h-9" />
          </div>
        </div>

        <span className="font-serif text-2xl font-bold tracking-[0.25em] text-[#c1a06c] uppercase block">
          EL REINO DE LOS CHOCOLATES
        </span>

        <DecorativeDivider className="w-64 h-6 mx-auto text-[#9b713d]" />

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-white leading-tight">
          SABORES QUE VIAJAN MÁS LEJOS
        </h2>

        <p className="font-script text-2xl sm:text-3xl text-[#c1a06c] font-normal tracking-wide pt-2">
          Desde la cordillera alpina hasta su mesa real.
        </p>

      </div>

    </section>
  );
};
