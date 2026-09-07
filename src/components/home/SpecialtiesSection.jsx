import React from 'react';
import { ArrowRight } from 'lucide-react';

const SPECIALTIES = [
  {
    id: 'bombones-clasicos',
    title: 'Bombones clásicos',
    image: '/assets/images/cat_bombones_clasicos.jpg'
  },
  {
    id: 'dulce-de-leche',
    title: 'Con dulce de leche',
    image: '/assets/images/cat_dulce_de_leche.jpg'
  },
  {
    id: 'surtidos-premium',
    title: 'Surtidos premium',
    image: '/assets/images/cat_surtidos_premium.jpg'
  },
  {
    id: 'cajas-de-regalo',
    title: 'Cajas de regalo',
    image: '/assets/images/cat_cajas_regalo.jpg'
  }
];

export const SpecialtiesSection = ({ onSelectCategory }) => {
  return (
    <section id="productos" className="relative bg-[#faf5e9] py-24 px-6 md:px-12 overflow-hidden border-t border-[#9b713d]/20">
      
      <div className="max-w-[1440px] mx-auto text-center space-y-3 mb-16 relative z-10">
        <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#9b713d] uppercase block">
          NUESTRAS ESPECIALIDADES
        </span>
        
        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#3b271b] tracking-tight">
          Un mundo de sabores
        </h2>

        <div className="w-20 h-[1px] bg-[#9b713d] mx-auto my-4" />
      </div>

      {/* 4 Specialty Cards Grid */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {SPECIALTIES.map(item => (
          <div
            key={item.id}
            onClick={() => onSelectCategory && onSelectCategory(item.title)}
            className="group cursor-pointer bg-[#f3ead9] rounded-lg overflow-hidden border border-[#9b713d]/25 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col"
          >
            {/* Image Frame with Aspect 4:3 */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#21120c]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>

            {/* Label Strip */}
            <div className="p-4 flex items-center justify-between bg-[#faf5e9] border-t border-[#9b713d]/20">
              <span className="font-serif text-sm font-semibold text-[#3b271b] group-hover:text-[#9b713d] transition-colors">
                {item.title}
              </span>
              <ArrowRight className="w-4 h-4 text-[#9b713d] transform group-hover:translate-x-1 transition-transform" />
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
