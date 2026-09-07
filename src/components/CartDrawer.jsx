import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { audioSynth } from '../utils/audioHelper';

export const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'success'

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.00;
  const total = subtotal + (subtotal > 0 ? shipping : 0);

  const handleCheckout = () => {
    if (audioSynth?.playChime) audioSynth.playChime();
    setCheckoutStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#21120c]/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf5e9] text-[#3b271b] border-l border-[#9b713d]/30 p-6 flex flex-col justify-between shadow-2xl relative">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#9b713d]/20">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#9b713d]" />
                <h3 className="font-serif text-xl text-[#3b271b] font-semibold">
                  Tu Selección de Chocolates
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#746657] hover:text-[#3b271b] hover:bg-[#f3ead9] transition-colors"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          {checkoutStep === 'success' ? (
            <div className="my-auto text-center space-y-4 py-8">
              <div className="w-14 h-14 rounded-full bg-[#6f9f9a]/20 text-[#3f6f6b] border border-[#6f9f9a] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-[#3b271b] font-semibold">
                Pedido Recibido con Éxito
              </h4>
              <p className="font-sans text-xs text-[#746657] leading-relaxed max-w-xs mx-auto">
                Hemos registrado tu orden artesanal. Prepararemos tus cajas de bombones con nuestro embalaje tradicional.
              </p>
              <button
                onClick={() => {
                  onClearCart();
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="py-2.5 px-6 rounded-full bg-[#6f9f9a] hover:bg-[#3f6f6b] text-[#faf5e9] font-sans font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm mx-auto"
              >
                Volver a la Tienda
              </button>
            </div>
          ) : (
            <div className="my-4 flex-1 overflow-y-auto space-y-3 pr-1">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 text-[#746657] space-y-2">
                  <ShoppingBag className="w-10 h-10 mx-auto text-[#9b713d]/40" />
                  <p className="font-serif text-base text-[#3b271b]">Tu pedido está vacío.</p>
                  <p className="text-xs text-[#746657]">Selecciona alguna de nuestras especialidades artesanales.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-lg bg-[#f3ead9] border border-[#9b713d]/20 flex items-center gap-3.5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded object-cover border border-[#9b713d]/25"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif text-sm text-[#3b271b] truncate font-semibold">
                        {item.name}
                      </h5>
                      <span className="font-sans text-xs text-[#9b713d] font-bold block mt-0.5">
                        ${item.price.toFixed(2)}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d] hover:text-[#faf5e9] border border-[#9b713d]/30 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold text-[#3b271b] px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d] hover:text-[#faf5e9] border border-[#9b713d]/30 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-[#746657] hover:text-rose-700 transition-colors"
                      title="Eliminar producto"
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
            <div className="pt-4 border-t border-[#9b713d]/20 space-y-3">
              <div className="space-y-1.5 text-xs text-[#746657] font-sans">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#3b271b] font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío refrigerado</span>
                  <span className="text-[#3b271b] font-semibold">{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-serif text-base text-[#3b271b] font-bold pt-2 border-t border-[#9b713d]/15">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3 rounded-full bg-[#6f9f9a] hover:bg-[#3f6f6b] text-[#faf5e9] font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Confirmar Pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
