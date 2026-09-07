import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Trash2, Plus, Minus, Sparkles, Crown, CheckCircle2, ArrowRight, Ticket } from 'lucide-react';
import { audioSynth } from '../utils/audioHelper';

export const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart, wonPrize }) => {
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'checkout' | 'success'

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = wonPrize && wonPrize.includes('25%') ? subtotal * 0.25 : 0;
  const total = Math.max(0, subtotal - discount);

  // Progress to Golden Ticket reward ($60 threshold)
  const goldenTicketProgress = Math.min(100, (subtotal / 60) * 100);

  const handleCheckout = () => {
    if (audioSynth?.playMagicMagicSparkle) audioSynth.playMagicMagicSparkle();
    setCheckoutStep('success');

    // Confetti explosion
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#ffd700', '#00a896', '#80deea', '#ffffff']
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#120A07]/80 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#120A07] text-[#FAF5EB] border-l-2 border-[#FFD700]/60 p-6 flex flex-col justify-between shadow-2xl relative">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#FFD700]/30">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#FFD700]" />
                <h3 className="font-serif text-xl text-[#FFD700] font-bold">
                  Tu Caja Mágica
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#2A160E] text-[#0DB4B9] hover:text-[#FFD700] border border-[#FFD700]/30 transition-colors"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Golden Ticket Unlock Meter */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#2A160E] border border-[#FFD700]/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-serif font-bold">
                <span className="text-[#FFD700] flex items-center gap-1">
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Medidor de Ticket Dorado</span>
                </span>
                <span className="text-[#0DB4B9]">${subtotal.toFixed(2)} / $60.00</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#120A07] overflow-hidden border border-[#FFD700]/30">
                <div
                  className="h-full bg-gradient-to-r from-[#00A896] via-[#0DB4B9] to-[#FFD700] transition-all duration-500"
                  style={{ width: `${goldenTicketProgress}%` }}
                />
              </div>
              <span className="text-[11px] text-[#FAF5EB]/80 font-sans block">
                {goldenTicketProgress >= 100
                  ? '¡Felicidades! Has desbloqueado un Ticket Dorado VIP gratis.'
                  : `Agrega $${(60 - subtotal).toFixed(2)} más para desbloquear un Ticket Dorado.`}
              </span>
            </div>
          </div>

          {/* Body Content */}
          {checkoutStep === 'success' ? (
            <div className="my-auto text-center space-y-4 py-8">
              <div className="w-16 h-16 rounded-full bg-[#00A896]/20 text-[#FFD700] border-2 border-[#FFD700] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-[#FFD700] font-bold">
                ¡Pedido Real Confirmado!
              </h4>
              <p className="font-sans text-xs text-[#FAF5EB]/90 leading-relaxed max-w-xs mx-auto">
                Tus manjares están siendo empacados con sellos de lacre dorado por los artesanos de Wonka. Recibirás tu confirmación inmediatamente.
              </p>
              <button
                onClick={() => {
                  onClearCart();
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="py-3 px-8 rounded-full bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-[#120A07] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-lg mx-auto"
              >
                Volver al Reino
              </button>
            </div>
          ) : (
            <div className="my-4 flex-1 overflow-y-auto space-y-3 pr-1">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 text-[#FAF5EB]/60 space-y-3">
                  <Sparkles className="w-12 h-12 mx-auto text-[#FFD700]/40" />
                  <p className="font-serif text-sm text-[#FAF5EB]">Tu caja mágica está vacía.</p>
                  <p className="text-xs text-[#FAF5EB]/60">Explora el catálogo para agregar delicias reales.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-[#2A160E] border border-[#FFD700]/30 flex items-center gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover border border-[#FFD700]/40"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif text-xs text-[#FAF5EB] truncate font-bold">
                        {item.name}
                      </h5>
                      <span className="font-serif text-xs text-[#FFD700] font-bold block mt-0.5">
                        ${item.price.toFixed(2)}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-1.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded bg-[#120A07] text-[#0DB4B9] hover:text-[#FFD700] border border-[#FFD700]/30"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#FAF5EB]">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded bg-[#120A07] text-[#0DB4B9] hover:text-[#FFD700] border border-[#FFD700]/30"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-rose-400 hover:text-rose-300"
                      title="Eliminar elemento"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Footer Summary */}
          {checkoutStep === 'cart' && cartItems.length > 0 && (
            <div className="pt-4 border-t border-[#FFD700]/30 space-y-3">
              {wonPrize && (
                <div className="p-2.5 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/40 text-xs text-[#FFD700] flex items-center justify-between font-serif font-bold">
                  <span>Premio Aplicado:</span>
                  <span>{wonPrize}</span>
                </div>
              )}

              <div className="space-y-1 text-xs text-[#FAF5EB]/90 font-sans">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#FFD700] font-bold">
                    <span>Descuento Fortuna</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-serif text-lg text-[#FFD700] font-bold pt-2 border-t border-[#FFD700]/30">
                  <span>Total Real</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FFD700] via-[#F4D03F] to-[#D4AF37] text-[#120A07] font-serif font-extrabold text-xs uppercase tracking-wider hover:brightness-105 shadow-xl flex items-center justify-center gap-2"
              >
                <span>Confirmar Pedido de Maravillas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
