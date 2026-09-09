import React from 'react';
import { Crown } from '../ornaments/Crown';
import { ArrowRight, Share2, Globe, Mail, MapPin, ExternalLink } from 'lucide-react';
import { STORES_DATA } from '../../data/storesData';

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-[#24140E] text-[#F4EBDD] pt-20 pb-12 px-6 md:px-12 border-t border-[#A77A42]/30">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <Crown className="w-8 h-8 text-[#C9A66B]" />
            <div>
              <span className="font-serif text-xl font-bold tracking-widest text-[#FAF5EB] block">
                EL REINO
              </span>
              <span className="font-script text-sm text-[#C9A66B] block -mt-1">
                de los Chocolates
              </span>
            </div>
          </div>

          <p className="font-sans text-xs text-[#918477] max-w-sm leading-relaxed">
            Alta chocolatería artesanal de San Carlos de Bariloche. Elaboración fina con recetas tradicionales y los mejores ingredientes seleccionados.
          </p>

          <div className="flex items-center gap-4 text-[#C9A66B] pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Instagram"><Share2 className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors" title="Sitio Web"><Globe className="w-5 h-5" /></a>
            <a href="mailto:contacto@reinochocolates.com" className="hover:text-white transition-colors" title="Contacto"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Stores Column */}
        <div className="md:col-span-4 space-y-3 font-serif">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] font-semibold flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#C9A66B]" />
            Locales en Bariloche
          </h4>
          <div className="space-y-2 font-sans">
            {STORES_DATA.map((store) => (
              <a
                key={store.id}
                href={store.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-2.5 rounded-lg bg-[#3A2418]/60 hover:bg-[#3A2418] border border-[#A77A42]/30 hover:border-[#C9A66B] transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-bold text-xs text-white group-hover:text-[#C9A66B] transition-colors block">
                      {store.name} ({store.address})
                    </span>
                    <span className="text-[11px] text-[#918477] block mt-0.5">
                      San Carlos de Bariloche • {store.schedule}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C9A66B]/70 group-hover:text-[#C9A66B] shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-4 space-y-3 font-serif">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] font-semibold">Boletín de Novedades</h4>
          <p className="text-xs text-[#918477] font-sans">
            Recibe anuncios sobre nuevas ediciones limitadas y sabores de temporada en San Carlos de Bariloche.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-1">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-4 py-2.5 rounded-full bg-[#3A2418] border border-[#A77A42]/30 text-xs text-white placeholder-[#918477] focus:outline-none focus:border-[#C9A66B] flex-1 font-sans"
            />
            <button
              type="submit"
              className="p-2.5 rounded-full bg-[#C9A66B] hover:bg-[#A77A42] text-[#24140E] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-[1440px] mx-auto pt-8 border-t border-[#A77A42]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#918477] font-sans gap-4">
        <span>© 2026 El Reino de los Chocolates - Bariloche. Todos los derechos reservados.</span>
        <span>Hecho con tradición en San Carlos de Bariloche, Argentina</span>
      </div>
    </footer>
  );
};
