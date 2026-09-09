import React, { useState } from 'react';
import { Crown } from './ornaments/Crown';
import { Send, Heart, MapPin, ExternalLink, Phone } from 'lucide-react';
import { audioSynth } from '../utils/audioHelper';
import { STORES_DATA } from '../data/storesData';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    if (audioSynth?.playMagicMagicSparkle) audioSynth.playMagicMagicSparkle();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer id="contacto" className="border-t border-[#9b713d]/40 bg-[#21120c] text-[#faf5e9] pt-20 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3b271b] border border-[#9b713d] flex items-center justify-center text-[#9b713d]">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl text-[#c1a06c] font-bold tracking-widest block leading-none">
                EL REINO
              </span>
              <span className="font-script text-xs text-[#faf5e9]/80 block font-normal">
                de los Chocolates
              </span>
            </div>
          </div>

          <p className="font-sans text-xs text-[#faf5e9]/75 max-w-sm leading-relaxed font-normal">
            Alta chocolatería artesanal de San Carlos de Bariloche. Elaboración tradicional patagónica, cajas de regalo vintage grabadas en pan de oro y cacao fino de aroma.
          </p>

          <div className="pt-1 text-xs text-[#c1a06c] font-serif font-bold">
            100% Cacao Fino de Origen & Edición Limitada
          </div>
        </div>

        {/* Bariloche Stores Column */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-sans text-xs text-[#c1a06c] uppercase tracking-[0.14em] font-bold flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#c1a06c]" />
            Locales en Bariloche
          </h4>
          <div className="space-y-2.5">
            {STORES_DATA.map((store) => (
              <a
                key={store.id}
                href={store.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-2.5 rounded-lg bg-[#3b271b]/60 hover:bg-[#3b271b] border border-[#9b713d]/30 hover:border-[#c1a06c] transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs text-white group-hover:text-[#c1a06c] transition-colors">
                        {store.name}
                      </span>
                      {store.isFlagship && (
                        <span className="px-1.5 py-0.2 text-[9px] bg-[#9b713d] text-white rounded font-serif font-bold">
                          Principal
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#faf5e9]/80 mt-0.5 font-sans">
                      {store.address} • {store.city}
                    </p>
                    <p className="text-[10px] text-[#c1a06c]/90 mt-0.5">
                      {store.schedule}
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#c1a06c]/70 group-hover:text-[#c1a06c] shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-sans text-xs text-[#c1a06c] uppercase tracking-[0.14em] font-bold">
            Boletín Informativo Real
          </h4>
          <p className="text-xs text-[#faf5e9]/80 font-sans leading-relaxed">
            Suscríbete para recibir notificaciones sobre nuevos lanzamientos de temporada y promociones exclusivas.
          </p>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu.correo@reinochocolates.com"
              className="px-4 py-2.5 rounded-full bg-[#3b271b] border border-[#9b713d]/40 text-xs text-[#faf5e9] placeholder-[#faf5e9]/40 focus:border-[#c1a06c] focus:outline-none flex-1 font-sans"
            />
            <button
              type="submit"
              className="p-3 rounded-full bg-[#9b713d] text-[#faf5e9] hover:bg-[#c1a06c] transition-colors shadow"
              title="Suscribirse"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {subscribed && (
            <span className="text-xs text-[#c1a06c] block font-serif animate-fade-in">
              Suscripción registrada correctamente en nuestro libro real.
            </span>
          )}
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1440px] mx-auto pt-8 border-t border-[#9b713d]/20 text-center text-xs text-[#faf5e9]/60 font-sans flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© 2026 El Reino de los Chocolates - Bariloche, Río Negro. Todos los derechos reservados.</span>
        <span className="flex items-center gap-1">
          Hecho con <Heart className="w-3.5 h-3.5 text-[#9b713d] fill-[#9b713d]" /> en San Carlos de Bariloche, Argentina
        </span>
      </div>
    </footer>
  );
};
