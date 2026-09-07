import React, { useState } from 'react';
import { Sparkles, Wand2, Check, Crown } from 'lucide-react';
import { audioSynth } from '../utils/audioHelper';

const CHOCO_BASES = [
  { id: 'menta-turquesa', name: 'Menta Turquesa 70%', color: 'from-teal-700 to-teal-950', price: 12.00, desc: 'Cacao amargo con menta turquesa silvestre.' },
  { id: 'blanco-celeste', name: 'Chocolate Blanco Celeste', color: 'from-cyan-500 to-sky-950', price: 14.00, desc: 'Manteca de cacao pura con tono celeste.' },
  { id: 'oro-negro', name: 'Oro Negro Cacao 85%', color: 'from-stone-900 to-amber-950', price: 15.50, desc: 'Cacao salvaje intenso con notas ahumadas.' },
  { id: 'fusion-azahar', name: 'Fusión Azahar & Sal', color: 'from-amber-600 to-stone-900', price: 13.50, desc: 'Flor de azahar y sal marina fina.' }
];

const FLORAL_INFUSIONS = [
  { id: 'orquidea', name: 'Orquídea Turquesa Real', price: 4.50 },
  { id: 'violeta', name: 'Violetas de Maravillas', price: 3.50 },
  { id: 'jazmin', name: 'Jazmín Dorado Wonka', price: 4.00 },
  { id: 'rosa', name: 'Pétalos de Rosa Cacaotera', price: 3.00 }
];

const TOPPINGS = [
  { id: 'oro24k', name: 'Copos de Oro 24K Comestibles', price: 6.00 },
  { id: 'chispas-cantantes', name: 'Chispas de Azúcar Cantantes', price: 3.50 },
  { id: 'hojas-menta', name: 'Hojas de Menta Celeste', price: 2.50 },
  { id: 'cristales-caramelo', name: 'Cristales de Caramelo Dorado', price: 3.00 }
];

export const AlquimiaLab = ({ onAddToCart }) => {
  const [selectedBase, setSelectedBase] = useState(CHOCO_BASES[0]);
  const [selectedInfusion, setSelectedInfusion] = useState(FLORAL_INFUSIONS[0]);
  const [selectedToppings, setSelectedToppings] = useState([TOPPINGS[0]]);
  const [customName, setCustomName] = useState('Lingote de Maravillas');
  const [createdSuccess, setCreatedSuccess] = useState(false);

  const toggleTopping = (topping) => {
    audioSynth.playChime();
    if (selectedToppings.find(t => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter(t => t.id !== topping.id));
    } else {
      if (selectedToppings.length < 3) {
        setSelectedToppings([...selectedToppings, topping]);
      }
    }
  };

  const totalPrice = selectedBase.price + selectedInfusion.price + selectedToppings.reduce((acc, t) => acc + t.price, 0);

  const handleCraft = () => {
    audioSynth.playMagicMagicSparkle();
    const customItem = {
      id: `custom-${Date.now()}`,
      name: customName || 'Lingote Mágico Personalizado',
      category: 'Creación Alquímica',
      price: totalPrice,
      rating: 5.0,
      image: '/assets/images/caja_chocolates_montana.jpg',
      description: `Base: ${selectedBase.name} | Infusión: ${selectedInfusion.name} | Coberturas: ${selectedToppings.map(t => t.name).join(', ')}`,
      badge: 'Obra Maestra Alquímica',
      ingredients: [selectedBase.name, selectedInfusion.name, ...selectedToppings.map(t => t.name)],
      flavorProfile: 'Personalizado en la Alquimia de Maravillas'
    };

    onAddToCart(customItem);
    setCreatedSuccess(true);
    setTimeout(() => setCreatedSuccess(false), 3000);
  };

  return (
    <section id="alquimia" className="py-24 px-6 max-w-7xl mx-auto border-t border-amber-400/20">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-heading">
          <Wand2 className="w-3.5 h-3.5" />
          <span>ESTUDIO DE ALQUIMIA CACAOTERA</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
          FORJA TU PROPIO LINGOTE DE ORO & TURQUESA
        </h2>
        <p className="font-serif text-teal-100/80 max-w-2xl mx-auto text-base sm:text-lg">
          Selecciona bases cacaoteras puras, infusiones florales vivas y destellos de oro comestible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side Configurator */}
        <div className="lg:col-span-7 space-y-8 glass-panel-modern p-6 sm:p-8">
          
          {/* Step 1 */}
          <div className="space-y-3">
            <label className="font-heading text-xs text-amber-300 uppercase tracking-widest block font-bold">
              1. Base de Cacao Fino:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CHOCO_BASES.map(base => (
                <button
                  key={base.id}
                  onClick={() => {
                    audioSynth.playChime();
                    setSelectedBase(base);
                  }}
                  className={`p-4 rounded-lg text-left border transition-all ${
                    selectedBase.id === base.id
                      ? 'border-amber-400 bg-amber-400/15 text-white font-bold'
                      : 'border-amber-400/15 bg-stone-950/60 text-teal-100/70 hover:border-amber-400/40'
                  }`}
                >
                  <div className="font-heading text-xs text-white font-bold">{base.name}</div>
                  <div className="text-[11px] text-teal-200/70">{base.desc}</div>
                  <div className="mt-2 font-heading text-xs text-amber-300 font-bold tabular-nums">+${base.price.toFixed(2)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <label className="font-heading text-xs text-amber-300 uppercase tracking-widest block font-bold">
              2. Infusión Floral Real:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {FLORAL_INFUSIONS.map(inf => (
                <button
                  key={inf.id}
                  onClick={() => {
                    audioSynth.playChime();
                    setSelectedInfusion(inf);
                  }}
                  className={`p-3 rounded text-center border transition-all text-xs ${
                    selectedInfusion.id === inf.id
                      ? 'border-amber-400 bg-amber-400/20 text-amber-300 font-bold'
                      : 'border-amber-400/15 bg-stone-950/60 text-teal-200/80 hover:border-amber-400/40'
                  }`}
                >
                  <div>{inf.name}</div>
                  <div className="text-[10px] text-amber-300 font-bold mt-1 tabular-nums">+${inf.price.toFixed(2)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <label className="font-heading text-xs text-amber-300 uppercase tracking-widest block font-bold">
              3. Coberturas Doradas (Máx 3):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TOPPINGS.map(top => {
                const isSelected = selectedToppings.some(t => t.id === top.id);
                return (
                  <button
                    key={top.id}
                    onClick={() => toggleTopping(top)}
                    className={`p-3 rounded text-left border transition-all flex items-center justify-between text-xs ${
                      isSelected
                        ? 'border-amber-400 bg-amber-400/20 text-white font-bold'
                        : 'border-amber-400/15 bg-stone-950/60 text-teal-200/80 hover:border-amber-400/40'
                    }`}
                  >
                    <span>{top.name}</span>
                    <span className="text-amber-300 font-bold tabular-nums">+${top.price.toFixed(2)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-2">
            <label className="font-heading text-xs text-amber-300 uppercase tracking-widest block font-bold">
              Bautiza tu Lingote:
            </label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Ej: Lingote de las Cumbres"
              className="w-full px-4 py-2.5 rounded bg-stone-950 border border-amber-400/30 text-teal-100 text-sm focus:border-amber-400 focus:outline-none font-serif"
            />
          </div>

        </div>

        {/* Right Side Live Preview */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="glass-panel-modern p-6 text-center space-y-6 border-amber-400/40">
            
            <span className="font-heading text-xs text-amber-300 uppercase tracking-widest block font-bold">
              Previsualización Alquímica
            </span>

            <div className={`relative h-56 rounded-lg p-6 bg-gradient-to-br ${selectedBase.color} border border-amber-400/60 shadow-2xl flex flex-col justify-between overflow-hidden`}>
              <div className="text-left">
                <span className="font-heading text-[10px] text-amber-300 uppercase tracking-widest block">
                  {selectedInfusion.name}
                </span>
                <h4 className="font-display text-xl text-white font-bold">
                  {customName || 'Lingote Mágico'}
                </h4>
              </div>

              <div className="flex flex-wrap gap-1">
                {selectedToppings.map(top => (
                  <span key={top.id} className="px-2 py-0.5 rounded bg-stone-950/80 text-[10px] text-amber-300 border border-amber-400/30">
                    ✨ {top.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-amber-400/20 flex items-center justify-between">
              <span className="font-heading text-2xl text-amber-300 font-bold tabular-nums">
                ${totalPrice.toFixed(2)}
              </span>

              <button
                onClick={handleCraft}
                className="btn-gold-minimal"
              >
                {createdSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Forjado con Éxito!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Forjar Lingote</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
