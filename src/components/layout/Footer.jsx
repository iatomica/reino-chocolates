import React from 'react';
import { Crown } from '../ornaments/Crown';
import { ArrowRight, Share2, Globe, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-[#24140E] text-[#F4EBDD] pt-20 pb-12 px-6 md:px-12 border-t border-[#A77A42]/30">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
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
            Chocolatería artesanal argentina. Elaboración fina con recetas tradicionales y los mejores ingredientes seleccionados.
          </p>

          <div className="flex items-center gap-4 text-[#C9A66B] pt-2">
            <a href="#" className="hover:text-white transition-colors" title="Compartir"><Share2 className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors" title="Sitio Web"><Globe className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors" title="Contacto"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Links Column 1: Productos */}
        <div className="md:col-span-2 space-y-3 font-serif">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] font-semibold">Productos</h4>
          <ul className="space-y-2 text-xs text-[#FAF5EB]/80 font-sans">
            <li><a href="#productos" className="hover:text-[#C9A66B] transition-colors">Bombones Clásicos</a></li>
            <li><a href="#productos" className="hover:text-[#C9A66B] transition-colors">Con Dulce de Leche</a></li>
            <li><a href="#productos" className="hover:text-[#C9A66B] transition-colors">Surtidos Premium</a></li>
            <li><a href="#productos" className="hover:text-[#C9A66B] transition-colors">Cajas de Regalo</a></li>
          </ul>
        </div>

        {/* Links Column 2: Historia & Regalos */}
        <div className="md:col-span-2 space-y-3 font-serif">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] font-semibold">Empresa</h4>
          <ul className="space-y-2 text-xs text-[#FAF5EB]/80 font-sans">
            <li><a href="#historia" className="hover:text-[#C9A66B] transition-colors">Nuestra Historia</a></li>
            <li><a href="#regalos" className="hover:text-[#C9A66B] transition-colors">Sección Regalos</a></li>
            <li><a href="#contacto" className="hover:text-[#C9A66B] transition-colors">Contacto</a></li>
            <li><a href="#" className="hover:text-[#C9A66B] transition-colors">Locales & Tiendas</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-4 space-y-3 font-serif">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] font-semibold">Boletín de Novedades</h4>
          <p className="text-xs text-[#918477] font-sans">
            Recibe anuncios sobre nuevas ediciones limitadas y sabores de temporada.
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
        <span>© 2026 El Reino de los Chocolates. Todos los derechos reservados.</span>
        <span>Hecho con tradición en Argentina</span>
      </div>
    </footer>
  );
};
