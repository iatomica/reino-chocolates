import React, { useState } from 'react';
import { CHOCOLATES_CATALOG, CATEGORIES } from '../data/chocolatesData';
import { ShoppingBag, Check } from 'lucide-react';
import { audioSynth } from '../utils/audioHelper';

export const ChocolateCatalog = ({ onAddToCart, products = CHOCOLATES_CATALOG }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
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

  return (
    <section id="catalogo" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto text-[#3b271b]">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-14">
        <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#9b713d] uppercase block">
          COLECCIÓN DE LA CASA
        </span>
        
        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#3b271b] tracking-tight">
          Nuestros Chocolates Artesanales
        </h2>
        
        <div className="w-16 h-[1px] bg-[#9b713d] mx-auto my-3" />
        
        <p className="font-sans text-sm sm:text-base text-[#746657] max-w-xl mx-auto leading-relaxed">
          Elaborados diariamente con materias primas seleccionadas, recetas europeas y empaques tradicionales de colección.
        </p>

        {/* Category Filter Tabs */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => {
                if (audioSynth?.playChime) audioSynth.playChime();
                setActiveCategory(category);
              }}
              className={`px-5 py-2 rounded-full font-sans text-xs tracking-wider transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#6f9f9a] text-[#faf5e9] font-semibold shadow-sm'
                  : 'bg-[#f3ead9] text-[#3b271b] hover:bg-[#9b713d]/15 border border-[#9b713d]/25'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Luxury Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredChocolates.map(chocolate => (
          <div
            key={chocolate.id}
            className="group bg-[#faf5e9] rounded-lg border border-[#9b713d]/25 overflow-hidden flex flex-col justify-between hover:border-[#9b713d]/60 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div>
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#21120c]">
                <img
                  src={chocolate.image}
                  alt={chocolate.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-0.5 rounded bg-[#faf5e9]/95 text-[#3b271b] text-[10px] font-sans font-bold uppercase tracking-wider border border-[#9b713d]/30">
                  {chocolate.badge}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#9b713d] font-sans font-semibold uppercase tracking-wider">
                    {chocolate.category}
                  </span>
                  <span className="font-serif text-lg font-bold text-[#3b271b] tabular-nums">
                    ${chocolate.price.toFixed(2)}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#3b271b] font-semibold leading-snug">
                  {chocolate.name}
                </h3>

                <p className="font-sans text-xs text-[#746657] leading-relaxed line-clamp-2">
                  {chocolate.description}
                </p>

                <div className="pt-2 border-t border-[#9b713d]/15 text-[11px] text-[#746657] font-sans">
                  <span className="font-semibold text-[#3b271b]">Perfil:</span> {chocolate.flavorProfile}
                </div>
              </div>
            </div>

            {/* Bottom Add to Cart Action */}
            <div className="p-6 pt-0">
              <button
                onClick={(e) => handleAdd(chocolate, e)}
                className={`w-full py-2.5 px-4 rounded-full font-sans text-xs font-semibold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                  addedId === chocolate.id
                    ? 'bg-[#3f6f6b] text-[#faf5e9]'
                    : 'bg-[#f3ead9] hover:bg-[#6f9f9a] text-[#3b271b] hover:text-[#faf5e9] border border-[#9b713d]/30'
                }`}
              >
                {addedId === chocolate.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Agregado al Pedido</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Agregar al Pedido</span>
                  </>
                )}
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
