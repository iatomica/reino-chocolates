import React from 'react';
import { Quote, Sparkles, Star, Crown, Feather, Award } from 'lucide-react';

const REVIEWS = [
  {
    character: 'El Sombrerero Loco',
    role: 'Maestro de la Hora del Té',
    icon: Feather,
    text: '¡Por la mantequilla del reloj! La Trufa de Orquídea Turquesa es lo más sensacional desde que inventaron las tazas de té sin fondo. Me hizo hablar en poesía dorada durante tres días seguidos.',
    rating: 5,
    tag: 'Testimonio de Maravilla'
  },
  {
    character: 'El Gato de Cheshire',
    role: 'Filósofo Invisible',
    icon: Sparkles,
    text: 'Probé el Choco-Gato de menta celeste y mi cuerpo entero desapareció en una ráfaga de cacao amargo y destellos celestiales. Mi sonrisa fue lo único que quedó para disfrutar el sabor.',
    rating: 5,
    tag: 'Aprobado por el Gato'
  },
  {
    character: 'Willy Wonka',
    role: 'Fundador de la Fábrica',
    icon: Award,
    text: 'Soberbia artesanía. El equilibrio entre los tonos turquesa, el oro comestible de 24 quilates y los aromas florales supera incluso mis salas secretas de experimentación.',
    rating: 5,
    tag: 'Sello de Garantía Wonka'
  },
  {
    character: 'La Reina de Corazones',
    role: 'Soberana del Palacio',
    icon: Crown,
    text: '¡Que le corten la cabeza... a cualquiera que ose dejar una sola gota del Elixir Dorado de Cacao! Es la única golosina digna del trono real.',
    rating: 5,
    tag: 'Decreto Real'
  }
];

export const WonderlandReviews = () => {
  return (
    <section id="resenas" className="py-24 px-4 max-w-7xl mx-auto border-t border-[#FFD700]/30">
      
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120A07] border border-[#FFD700]/50 text-[#FFD700] text-xs font-serif font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cuentos de Nuestros Visitantes</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#120A07] font-bold">
          Testimonios del País de las Maravillas
        </h2>
        <p className="font-serif text-[#120A07]/80 max-w-2xl mx-auto text-base sm:text-lg">
          Descubre lo que opinan las criaturas mágicas y los grandes maestros chocolateros sobre nuestras creaciones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REVIEWS.map((rev, idx) => {
          const IconComp = rev.icon;
          return (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between border-2 border-[#FFD700]/40 shadow-xl hover:border-[#FFD700] transition-all duration-300 relative group"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-[#05668D]/15 group-hover:text-[#D4AF37]/30 transition-colors pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FFD700]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700]" />
                    ))}
                  </div>
                  <span className="px-3 py-0.5 rounded-full bg-[#120A07] text-[#FFD700] text-[10px] font-sans font-bold uppercase tracking-wider">
                    {rev.tag}
                  </span>
                </div>

                <p className="font-serif text-sm sm:text-base text-[#120A07]/90 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#FFD700]/30 flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full bg-[#120A07] border border-[#FFD700]/50 flex items-center justify-center text-[#FFD700] shadow-inner">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#120A07] font-bold">
                    {rev.character}
                  </h4>
                  <span className="font-sans text-xs text-[#05668D] font-semibold block">
                    {rev.role}
                  </span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
