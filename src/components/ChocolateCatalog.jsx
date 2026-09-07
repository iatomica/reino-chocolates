import React, { useState } from 'react';
import { CHOCOLATES_CATALOG, CATEGORIES } from '../data/chocolatesData';
import { ShoppingBag, Star, Sparkles, Check } from 'lucide-react';
import { audioSynth } from '../utils/audioHelper';

export const ChocolateCatalog = ({ onAddToCart, products = CHOCOLATES_CATALOG }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedChocolate, setSelectedChocolate] = useState(products[0] || CHOCOLATES_CATALOG[0]);
  const [addedId, setAddedId] = useState(null);

  const activeProducts = products.filter(p => !p.disabled);
  const filteredChocolates = activeCategory === 'Todos'
    ? activeProducts
    : activeProducts.filter(c => c.category === activeCategory);

  const handleAdd = (chocolate, e) => {
    e.stopPropagation();
    if (audioSynth?.playChime) audioSynth.playChime();
    onAddToCart(chocolate);
    setAddedId(chocolate.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const currentSelected = activeProducts.find(p => p.id === selectedChocolate?.id) || filteredChocolates[0] || activeProducts[0];

  return (
    <section id="catalogo" className="py-24 px-6 max-w-7xl mx-auto text-[#120A07]">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <span className="font-sans text-[11px] font-extrabold tracking-[0.25em] text-[#05668D] uppercase block">
          CATÁLOGO EXCLUSIVO EDICIÓN MONTAÑA
        </span>
        
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#120A07] font-bold tracking-tight">
          Cajas Turquesa & Bombones en Oro 24K
        </h2>
        
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto my-3 rounded-full" />
        
        <p className="font-serif text-[#120A07]/80 max-w-2xl mx-auto text-base sm:text-lg font-normal">
          Cada pieza es formulada a mano con cacao fino de origen alpino, infusiones de orquídeas turquesas y copos de oro puro.
        </p>

        {/* Category Filter Pills */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => {
                if (audioSynth?.playChime) audioSynth.playChime();
                setActiveCategory(category);
              }}
              className={`px-6 py-2.5 rounded-full font-serif text-xs font-bold tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-[#120A07] shadow-lg scale-105'
                  : 'bg-white text-[#120A07]/80 border border-[#FFD700]/50 hover:border-[#FFD700] hover:text-[#05668D]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Minimalist List + Active Preview Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Minimalist Item List */}
        <div className="lg:col-span-7 space-y-3">
          {filteredChocolates.map(chocolate => {
            const isSelected = currentSelected?.id === chocolate.id;
            return (
              <div
                key={chocolate.id}
                onClick={() => {
                  if (audioSynth?.playChime) audioSynth.playChime();
                  setSelectedChocolate(chocolate);
                }}
                className={`py-5 px-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between gap-4 group border ${
                  isSelected 
                    ? 'bg-white border-[#FFD700] shadow-xl border-l-8 border-l-[#FFD700] scale-[1.01]' 
                    : 'bg-white/80 border-[#FFD700]/30 hover:bg-white hover:border-[#FFD700]'
                }`}
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full bg-[#120A07] text-[#FFD700]">
                      {chocolate.badge}
                    </span>
                    <div className="flex items-center gap-1 text-[#D4AF37] text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                      <span>{chocolate.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-lg text-[#120A07] font-bold group-hover:text-[#05668D] transition-colors truncate">
                    {chocolate.name}
                  </h3>
                  
                  <p className="font-sans text-xs text-[#120A07]/75 line-clamp-1 max-w-md">
                    {chocolate.description}
                  </p>
                </div>

                <div className="flex items-center gap-5 shrink-0">
                  <span className="font-serif text-xl text-[#120A07] font-extrabold tabular-nums">
                    ${chocolate.price.toFixed(2)}
                  </span>

                  <button
                    onClick={(e) => handleAdd(chocolate, e)}
                    className={`p-3 rounded-full transition-all shadow-md ${
                      addedId === chocolate.id 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-gradient-to-r from-[#00A896] to-[#05668D] text-white hover:brightness-110'
                    }`}
                    title="Agregar a la caja"
                  >
                    {addedId === chocolate.id ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Item Editorial Preview */}
        {currentSelected && (
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white p-7 rounded-3xl border-2 border-[#FFD700]/60 shadow-2xl space-y-6 text-left">
              
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#FFD700]/40 shadow-lg group">
                <img
                  src={currentSelected.image}
                  alt={currentSelected.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#120A07]/90 text-[#FFD700] text-[10px] font-sans font-extrabold uppercase tracking-widest border border-[#FFD700]/40">
                  {currentSelected.category}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#120A07] font-bold">
                  {currentSelected.name}
                </h3>
                
                <p className="font-sans text-sm text-[#120A07]/85 leading-relaxed">
                  {currentSelected.description}
                </p>
              </div>

              <div className="space-y-1 pt-3 border-t border-[#FFD700]/30">
                <span className="font-sans text-xs font-bold text-[#05668D] uppercase tracking-widest block">
                  Perfil de Sabor:
                </span>
                <p className="text-xs text-[#120A07]/90 font-serif italic">
                  "{currentSelected.flavorProfile}"
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-sans text-xs font-bold text-[#00A896] uppercase tracking-widest block">
                  Ingredientes Nobles:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentSelected.ingredients?.map((ing, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#FFD700]/40 text-[11px] font-bold text-[#120A07]">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#FFD700]/40 flex items-center justify-between">
                <span className="font-serif text-3xl text-[#120A07] font-extrabold tabular-nums">
                  ${currentSelected.price.toFixed(2)}
                </span>

                <button
                  onClick={(e) => handleAdd(currentSelected, e)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFD700] via-[#F4D03F] to-[#D4AF37] text-[#120A07] font-serif font-extrabold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-xl"
                >
                  <Sparkles className="w-4 h-4 text-[#120A07]" />
                  <span>AGREGAR A LA CAJA</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

    </section>
  );
};
