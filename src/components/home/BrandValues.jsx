import React from 'react';
import { CocoaIllustration } from '../ornaments/CocoaIllustration';
import { Crown } from '../ornaments/Crown';
import { GiftIcon } from '../ornaments/GiftIcon';
import { MapPin } from 'lucide-react';

const VALUES = [
  {
    icon: <CocoaIllustration className="w-8 h-8 text-[#9b713d]" />,
    title: 'Ingredientes seleccionados'
  },
  {
    icon: <Crown className="w-8 h-8 text-[#9b713d]" />,
    title: 'Recetas tradicionales'
  },
  {
    icon: <GiftIcon className="w-7 h-7 text-[#9b713d]" />,
    title: 'El regalo perfecto'
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#9b713d]" />,
    title: 'Hecho en Argentina'
  }
];

export const BrandValues = () => {
  return (
    <section className="bg-[#f3ead9] py-14 border-y border-[#9b713d]/25">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#9b713d]/20">
          {VALUES.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-6 space-y-3 group">
              <div className="transform group-hover:scale-105 transition-transform duration-500">
                {val.icon}
              </div>
              <span className="font-serif text-sm font-semibold text-[#3b271b] tracking-wide">
                {val.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
