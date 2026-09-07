import React, { useState } from 'react';
import { RoyalCrest } from '../ornaments/RoyalCrest';
import { MountainHeraldry } from '../ornaments/MountainHeraldry';
import { Package, Store, Gift, Crown, Sparkles, Truck, Wine, Ticket, X, CheckCircle, Clock, MapPin, Calendar, QrCode } from 'lucide-react';

export const UserDashboard = ({ isOpen, onClose, user }) => {
  const [activeTab, setActiveTab] = useState('orders');

  // Take Away Form State
  const [takeAwayBranch, setTakeAwayBranch] = useState('recoleta');
  const [takeAwayDate, setTakeAwayDate] = useState('2026-09-08');
  const [takeAwayTime, setTakeAwayTime] = useState('16:30');
  const [takeAwaySuccess, setTakeAwaySuccess] = useState(false);

  // Gift Card State
  const [giftAmount, setGiftAmount] = useState(50);
  const [recipientName, setRecipientName] = useState('');
  const [giftMessage, setGiftMessage] = useState('');
  const [generatedCard, setGeneratedCard] = useState(null);

  // Mock Orders State
  const [orders] = useState([
    {
      id: 'RC-94821',
      date: '2026-09-06',
      items: '1x Caja Chocolates Montaña Turquesa, 2x Trufa Orquídea Oro',
      total: '$62.50',
      status: 'En Camino',
      type: 'Delivery VIP',
      progress: 75
    },
    {
      id: 'RC-88120',
      date: '2026-08-28',
      items: '1x Tableta Ticket Dorado Wonka',
      total: '$32.00',
      status: 'Entregado',
      type: 'Take Away Recoleta',
      progress: 100
    }
  ]);

  if (!isOpen) return null;

  const handleCreateTakeAway = (e) => {
    e.preventDefault();
    setTakeAwaySuccess(true);
    setTimeout(() => {
      setTakeAwaySuccess(false);
    }, 4000);
  };

  const handleGenerateGiftCard = (e) => {
    e.preventDefault();
    const code = 'ROYAL-GIFT-' + Math.random().toString(36).substring(2, 7).toUpperCase();
    setGeneratedCard({
      code,
      amount: giftAmount,
      recipient: recipientName || 'Un Ser Querido',
      message: giftMessage || 'Un dulce regalo real para ti.'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#120A07]/80 backdrop-blur-md p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#FAF5EB] border-2 border-[#FFD700]/70 shadow-2xl rounded-2xl overflow-hidden text-[#120A07] my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#120A07] via-[#05668D] to-[#120A07] p-6 text-[#FAF5EB] relative border-b border-[#FFD700]/40">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#FFD700] hover:text-white w-9 h-9 rounded-full flex items-center justify-center bg-[#120A07]/40 border border-[#FFD700]/40 transition-colors"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#120A07]/60 border-2 border-[#FFD700] flex items-center justify-center text-[#FFD700] shadow-inner">
                <Crown className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-2xl font-bold text-white drop-shadow">{user?.name || 'Cliente VIP'}</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFD700] text-[#120A07] font-sans">
                    {user?.vipLevel || 'Socio Oro'}
                  </span>
                </div>
                <p className="text-xs text-[#FAF5EB]/80 font-sans mt-0.5">{user?.email}</p>
              </div>
            </div>

            {/* VIP Loyalty Points Badge */}
            <div className="bg-[#120A07]/60 border border-[#FFD700]/50 px-5 py-2.5 rounded-xl text-center sm:text-right">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFD700] block">Puntos Acumulados</span>
              <span className="font-serif text-2xl font-bold text-[#FFD700]">{user?.points || 1450} PTS</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 border-t border-white/15 pt-4">
            <button
              onClick={() => setActiveTab('orders')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-serif font-bold transition-all ${
                activeTab === 'orders'
                  ? 'bg-[#FFD700] text-[#120A07] shadow-md'
                  : 'bg-white/10 text-[#FAF5EB] hover:bg-white/20'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Mis Compras & Pedidos</span>
            </button>

            <button
              onClick={() => setActiveTab('takeaway')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-serif font-bold transition-all ${
                activeTab === 'takeaway'
                  ? 'bg-[#FFD700] text-[#120A07] shadow-md'
                  : 'bg-white/10 text-[#FAF5EB] hover:bg-white/20'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Pedidos Take Away</span>
            </button>

            <button
              onClick={() => setActiveTab('giftcard')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-serif font-bold transition-all ${
                activeTab === 'giftcard'
                  ? 'bg-[#FFD700] text-[#120A07] shadow-md'
                  : 'bg-white/10 text-[#FAF5EB] hover:bg-white/20'
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>Tarjetas de Regalo</span>
            </button>

            <button
              onClick={() => setActiveTab('vip')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-serif font-bold transition-all ${
                activeTab === 'vip'
                  ? 'bg-[#FFD700] text-[#120A07] shadow-md'
                  : 'bg-white/10 text-[#FAF5EB] hover:bg-white/20'
              }`}
            >
              <Crown className="w-4 h-4" />
              <span>Beneficios VIP</span>
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 min-h-[380px]">
          
          {/* TAB 1: MIS COMPRAS & PEDIDOS */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-[#120A07] flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#05668D]" />
                  <span>Historial de Pedidos Recientes</span>
                </h3>
                <span className="text-xs text-[#120A07]/60 font-sans">Actualizado en tiempo real</span>
              </div>

              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="p-5 rounded-xl bg-white border border-[#FFD700]/40 shadow-sm space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#FFD700]/20 pb-3 gap-2">
                      <div>
                        <span className="text-xs font-extrabold text-[#05668D] tracking-wider">{order.id}</span>
                        <span className="text-xs text-[#120A07]/60 ml-3">{order.date} • {order.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#120A07] font-serif text-base">{order.total}</span>
                        <span className="px-3 py-1 text-[11px] font-bold rounded-full bg-[#FFD700]/20 text-[#120A07] border border-[#FFD700]/50">
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm font-sans text-[#120A07]/80">{order.items}</p>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[11px] text-[#120A07]/75 font-semibold">
                        <span>En preparación</span>
                        <span>En camino / Listo</span>
                        <span>Entregado</span>
                      </div>
                      <div className="w-full bg-[#FAF5EB] h-2.5 rounded-full overflow-hidden border border-[#FFD700]/30">
                        <div
                          className="bg-gradient-to-r from-[#00A896] via-[#0DB4B9] to-[#FFD700] h-full rounded-full transition-all duration-500"
                          style={{ width: `${order.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PEDIDOS TAKE AWAY */}
          {activeTab === 'takeaway' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#120A07] flex items-center gap-2">
                    <Store className="w-5 h-5 text-[#05668D]" />
                    <span>Programar Retiro en Boutique (Take Away)</span>
                  </h3>
                  <p className="text-xs text-[#120A07]/70 mt-0.5">
                    Agenda tu horario ideal para retirar tus cajas de chocolate recién preparadas.
                  </p>
                </div>
                <MountainHeraldry className="w-12 h-12 text-[#FFD700] opacity-60 hidden sm:block" />
              </div>

              {takeAwaySuccess && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm font-semibold flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold">¡Reserva de Take Away Confirmada!</p>
                    <p className="text-xs text-emerald-700">Te enviamos el código QR a tu correo para retiro sin esperas.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleCreateTakeAway} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-[#FFD700]/40 shadow-sm">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#120A07] mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#05668D]" />
                    <span>Sucursal Boutique</span>
                  </label>
                  <select
                    value={takeAwayBranch}
                    onChange={(e) => setTakeAwayBranch(e.target.value)}
                    className="w-full p-3 rounded-lg border border-[#FFD700]/50 bg-[#FAF5EB]/50 text-sm font-sans focus:outline-none focus:border-[#0DB4B9]"
                  >
                    <option value="recoleta">Boutique Recoleta (Av. Alvear 1850)</option>
                    <option value="palermo">Boutique Palermo Soho (Gurruchaga 1620)</option>
                    <option value="sanisidro">Casa Central San Isidro (Quintana 420)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#120A07] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#05668D]" />
                    <span>Fecha de Retiro</span>
                  </label>
                  <input
                    type="date"
                    value={takeAwayDate}
                    onChange={(e) => setTakeAwayDate(e.target.value)}
                    className="w-full p-3 rounded-lg border border-[#FFD700]/50 bg-[#FAF5EB]/50 text-sm font-sans focus:outline-none focus:border-[#0DB4B9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#120A07] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#05668D]" />
                    <span>Banda Horaria</span>
                  </label>
                  <select
                    value={takeAwayTime}
                    onChange={(e) => setTakeAwayTime(e.target.value)}
                    className="w-full p-3 rounded-lg border border-[#FFD700]/50 bg-[#FAF5EB]/50 text-sm font-sans focus:outline-none focus:border-[#0DB4B9]"
                  >
                    <option value="11:00">11:00 hs - 13:00 hs (Turno Mañana)</option>
                    <option value="14:30">14:30 hs - 16:30 hs (Turno Tarde I)</option>
                    <option value="16:30">16:30 hs - 19:00 hs (Turno Tarde II)</option>
                    <option value="19:00">19:00 hs - 21:00 hs (Turno Noche)</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#00A896] to-[#05668D] text-white font-serif font-bold tracking-wider hover:brightness-110 transition-all shadow-md"
                  >
                    AGENDAR RETIRO EXPRÉS →
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: GIFT CARDS */}
          {activeTab === 'giftcard' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#120A07] flex items-center gap-2">
                  <Gift className="w-5 h-5 text-[#05668D]" />
                  <span>Emitir Tarjeta de Regalo Digital (Gift Card)</span>
                </h3>
                <p className="text-xs text-[#120A07]/70 mt-0.5">
                  Crea una tarjeta regalable con los distinguidos colores Turquesa, Oro y Montaña Real.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <form onSubmit={handleGenerateGiftCard} className="space-y-4 bg-white p-6 rounded-xl border border-[#FFD700]/40 shadow-sm">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#120A07] mb-1">
                      Monto del Regalo ($ USD)
                    </label>
                    <div className="flex gap-2">
                      {[25, 50, 100, 200].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setGiftAmount(amt)}
                          className={`flex-1 py-2 rounded-lg text-xs font-bold font-serif transition-all ${
                            giftAmount === amt
                              ? 'bg-[#FFD700] text-[#120A07] shadow-md border-2 border-[#FFD700]'
                              : 'bg-[#FAF5EB]/80 text-[#120A07] border border-[#FFD700]/30 hover:bg-[#FFD700]/20'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#120A07] mb-1">
                      Nombre del Destinatario
                    </label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Ej: Mateo Fernández"
                      className="w-full p-2.5 rounded-lg border border-[#FFD700]/50 text-sm font-sans focus:outline-none focus:border-[#0DB4B9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#120A07] mb-1">
                      Mensaje Personalizado
                    </label>
                    <textarea
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      placeholder="Escribe tu dedicatoria especial..."
                      rows="3"
                      className="w-full p-2.5 rounded-lg border border-[#FFD700]/50 text-sm font-sans focus:outline-none focus:border-[#0DB4B9]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FFD700] via-[#F4D03F] to-[#D4AF37] text-[#120A07] font-serif font-bold tracking-wider hover:brightness-105 shadow-md"
                  >
                    GENERAR GIFT CARD DIGITAL →
                  </button>
                </form>

                {/* Preview Gift Card */}
                <div className="flex flex-col justify-center">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#120A07] via-[#05668D] to-[#00A896] border-2 border-[#FFD700] text-[#FAF5EB] shadow-2xl overflow-hidden min-h-[220px] flex flex-col justify-between">
                    <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 opacity-25">
                      <RoyalCrest className="w-40 h-40 text-[#FFD700]" />
                    </div>

                    <div className="flex justify-between items-start z-10">
                      <div>
                        <span className="text-[10px] font-extrabold tracking-widest text-[#FFD700] uppercase block">
                          El Reino de los Chocolates
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white">GIFT CARD REAL</h4>
                      </div>
                      <span className="font-serif text-2xl font-bold text-[#FFD700]">${generatedCard ? generatedCard.amount : giftAmount}</span>
                    </div>

                    <div className="my-4 z-10">
                      <p className="text-xs text-[#FAF5EB]/70">Para:</p>
                      <p className="font-serif font-bold text-base text-[#FFD700]">
                        {generatedCard ? generatedCard.recipient : (recipientName || 'Nombre del Agasajado')}
                      </p>
                      <p className="text-xs italic text-[#FAF5EB]/90 mt-1 line-clamp-2">
                        "{generatedCard ? generatedCard.message : (giftMessage || 'Con todo nuestro afecto real.')}"
                      </p>
                    </div>

                    <div className="flex justify-between items-end text-[11px] font-mono tracking-widest text-[#FFD700] z-10 border-t border-white/20 pt-2">
                      <span>CÓDIGO: {generatedCard ? generatedCard.code : 'ROYAL-XXXX-XXXX'}</span>
                      <span className="text-[9px] uppercase font-sans text-[#FAF5EB]/60">VÁLIDO POR 1 AÑO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BENEFICIOS VIP */}
          {activeTab === 'vip' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#120A07] flex items-center gap-2">
                    <Crown className="w-5 h-5 text-[#D4AF37]" />
                    <span>Club Privado de Alquimia VIP</span>
                  </h3>
                  <p className="text-xs text-[#120A07]/70">
                    Nivel actual: <strong className="text-[#05668D] font-bold">Socio Oro (1,450 pts)</strong>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-white border border-[#FFD700]/40 shadow-sm text-center space-y-2">
                  <Truck className="w-8 h-8 mx-auto text-[#00A896]" />
                  <h4 className="font-serif font-bold text-[#120A07]">Envíos Fríos Gratis</h4>
                  <p className="text-xs text-[#120A07]/70">En todas tus compras de caja turquesa sin mínimo de compra.</p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#FFD700]/40 shadow-sm text-center space-y-2">
                  <Wine className="w-8 h-8 mx-auto text-[#D4AF37]" />
                  <h4 className="font-serif font-bold text-[#120A07]">Cata Privada Anual</h4>
                  <p className="text-xs text-[#120A07]/70">Invitación exclusiva para 2 personas en la Maison Recoleta.</p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#FFD700]/40 shadow-sm text-center space-y-2">
                  <Ticket className="w-8 h-8 mx-auto text-[#0DB4B9]" />
                  <h4 className="font-serif font-bold text-[#120A07]">Ticket Dorado Garantizado</h4>
                  <p className="text-xs text-[#120A07]/70">Acceso prioritario a las ediciones limitadas de navidad.</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
