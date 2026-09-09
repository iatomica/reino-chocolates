import React, { useState } from 'react';
import { Crown } from '../ornaments/Crown';
import { Package, Store, Gift, Award, X, CheckCircle, Clock, MapPin, Calendar } from 'lucide-react';
import { STORES_DATA } from '../../data/storesData';

export const UserDashboard = ({ isOpen, onClose, user }) => {
  const [activeTab, setActiveTab] = useState('orders');

  // Take Away Form State
  const [takeAwayBranch, setTakeAwayBranch] = useState(STORES_DATA[0].id);
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
      items: '1x Caja Selección Clásica 24 Piezas, 2x Bombones Dulce de Leche',
      total: '$56.50',
      status: 'En Preparación',
      type: 'Envío a Domicilio',
      progress: 40
    },
    {
      id: 'RC-88120',
      date: '2026-08-28',
      items: '1x Tableta Grand Cru 85% Cacao',
      total: '$18.00',
      status: 'Entregado',
      type: 'Retiro en Boutique Recoleta',
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
    const code = 'REINO-REGALO-' + Math.random().toString(36).substring(2, 7).toUpperCase();
    setGeneratedCard({
      code,
      amount: giftAmount,
      recipient: recipientName || 'Destinatario Especial',
      message: giftMessage || 'Un dulce regalo artesanal.'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#21120c]/70 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#faf5e9] border border-[#9b713d]/40 shadow-xl rounded-lg overflow-hidden text-[#3b271b] my-8">
        
        {/* Header */}
        <div className="bg-[#f3ead9] p-6 text-[#3b271b] relative border-b border-[#9b713d]/25">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#746657] hover:text-[#3b271b] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#faf5e9] transition-colors"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-[#faf5e9] border border-[#9b713d]/40 flex items-center justify-center text-[#9b713d]">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-2xl font-bold text-[#3b271b]">{user?.name || 'Cliente'}</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#6f9f9a]/20 text-[#294b48] font-sans">
                    {user?.vipLevel || 'Cliente Frecuente'}
                  </span>
                </div>
                <p className="text-xs text-[#746657] font-sans mt-0.5">{user?.email}</p>
              </div>
            </div>

            {/* Points Badge */}
            <div className="bg-[#faf5e9] border border-[#9b713d]/30 px-4 py-2 rounded text-center sm:text-right">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#746657] block">Puntos Acumulados</span>
              <span className="font-serif text-xl font-bold text-[#9b713d]">{user?.points || 450} PTS</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 border-t border-[#9b713d]/15 pt-4">
            <button
              onClick={() => setActiveTab('orders')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all ${
                activeTab === 'orders'
                  ? 'bg-[#6f9f9a] text-[#faf5e9] shadow-sm'
                  : 'bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d]/10'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Mis Pedidos</span>
            </button>

            <button
              onClick={() => setActiveTab('takeaway')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all ${
                activeTab === 'takeaway'
                  ? 'bg-[#6f9f9a] text-[#faf5e9] shadow-sm'
                  : 'bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d]/10'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Pedidos Take Away</span>
            </button>

            <button
              onClick={() => setActiveTab('giftcard')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all ${
                activeTab === 'giftcard'
                  ? 'bg-[#6f9f9a] text-[#faf5e9] shadow-sm'
                  : 'bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d]/10'
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>Tarjetas de Regalo</span>
            </button>

            <button
              onClick={() => setActiveTab('vip')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all ${
                activeTab === 'vip'
                  ? 'bg-[#6f9f9a] text-[#faf5e9] shadow-sm'
                  : 'bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d]/10'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Beneficios</span>
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 min-h-[360px]">
          
          {/* TAB 1: MIS COMPRAS & PEDIDOS */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-[#3b271b] flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#9b713d]" />
                  <span>Historial de Pedidos</span>
                </h3>
              </div>

              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="p-5 rounded-lg bg-white border border-[#9b713d]/25 shadow-sm space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#9b713d]/15 pb-3 gap-2">
                      <div>
                        <span className="text-xs font-bold text-[#3f6f6b] tracking-wider">{order.id}</span>
                        <span className="text-xs text-[#746657] ml-3">{order.date} • {order.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#3b271b] font-serif text-base">{order.total}</span>
                        <span className="px-3 py-0.5 text-[11px] font-semibold rounded bg-[#f3ead9] text-[#3b271b] border border-[#9b713d]/30">
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs font-sans text-[#746657]">{order.items}</p>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[11px] text-[#746657]">
                        <span>En preparación</span>
                        <span>Listo para retiro</span>
                        <span>Entregado</span>
                      </div>
                      <div className="w-full bg-[#f3ead9] h-2 rounded-full overflow-hidden border border-[#9b713d]/20">
                        <div
                          className="bg-[#6f9f9a] h-full rounded-full transition-all duration-500"
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
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3b271b] flex items-center gap-2">
                  <Store className="w-5 h-5 text-[#9b713d]" />
                  <span>Programar Retiro en Boutique (Take Away)</span>
                </h3>
                <p className="text-xs text-[#746657] mt-0.5">
                  Elige la sucursal y el horario para retirar tus chocolates recién empacados.
                </p>
              </div>

              {takeAwaySuccess && (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm font-medium flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  <div>
                    <p className="font-bold">¡Reserva de Take Away Confirmada!</p>
                    <p className="text-xs text-emerald-800">Te enviamos el código a tu correo para retiro sin demoras.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleCreateTakeAway} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg border border-[#9b713d]/25 shadow-sm">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b271b] mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#9b713d]" />
                    <span>Sucursal Boutique</span>
                  </label>
                  <select
                    value={takeAwayBranch}
                    onChange={(e) => setTakeAwayBranch(e.target.value)}
                    className="w-full p-2.5 rounded border border-[#9b713d]/30 bg-[#faf5e9] text-sm font-sans focus:outline-none focus:border-[#6f9f9a]"
                  >
                    {STORES_DATA.map((store) => (
                      <option key={store.id} value={store.id}>
                        {store.name} ({store.address}, Bariloche)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b271b] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#9b713d]" />
                    <span>Fecha de Retiro</span>
                  </label>
                  <input
                    type="date"
                    value={takeAwayDate}
                    onChange={(e) => setTakeAwayDate(e.target.value)}
                    className="w-full p-2.5 rounded border border-[#9b713d]/30 bg-[#faf5e9] text-sm font-sans focus:outline-none focus:border-[#6f9f9a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b271b] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#9b713d]" />
                    <span>Banda Horaria</span>
                  </label>
                  <select
                    value={takeAwayTime}
                    onChange={(e) => setTakeAwayTime(e.target.value)}
                    className="w-full p-2.5 rounded border border-[#9b713d]/30 bg-[#faf5e9] text-sm font-sans focus:outline-none focus:border-[#6f9f9a]"
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
                    className="w-full py-3 px-6 rounded-full bg-[#6f9f9a] hover:bg-[#3f6f6b] text-[#faf5e9] font-sans font-semibold text-xs tracking-wider transition-colors uppercase shadow-sm"
                  >
                    Confirmar Retiro
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: GIFT CARDS */}
          {activeTab === 'giftcard' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3b271b] flex items-center gap-2">
                  <Gift className="w-5 h-5 text-[#9b713d]" />
                  <span>Emitir Tarjeta de Regalo Digital</span>
                </h3>
                <p className="text-xs text-[#746657] mt-0.5">
                  Obsequia una tarjeta canjeable en cualquiera de nuestras boutiques o tienda online.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <form onSubmit={handleGenerateGiftCard} className="space-y-4 bg-white p-6 rounded-lg border border-[#9b713d]/25 shadow-sm">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3b271b] mb-1">
                      Monto del Regalo ($ USD)
                    </label>
                    <div className="flex gap-2">
                      {[25, 50, 100, 200].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setGiftAmount(amt)}
                          className={`flex-1 py-2 rounded text-xs font-semibold font-sans transition-all ${
                            giftAmount === amt
                              ? 'bg-[#3f6f6b] text-[#faf5e9]'
                              : 'bg-[#f3ead9] text-[#3b271b] hover:bg-[#9b713d]/20 border border-[#9b713d]/25'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3b271b] mb-1">
                      Nombre del Destinatario
                    </label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Ej: Mateo Fernández"
                      className="w-full p-2.5 rounded border border-[#9b713d]/30 text-sm font-sans focus:outline-none focus:border-[#6f9f9a]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3b271b] mb-1">
                      Dedicatoria
                    </label>
                    <textarea
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      placeholder="Escribe tu mensaje personal..."
                      rows="3"
                      className="w-full p-2.5 rounded border border-[#9b713d]/30 text-sm font-sans focus:outline-none focus:border-[#6f9f9a]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-[#9b713d] hover:bg-[#c1a06c] text-[#faf5e9] font-sans font-semibold text-xs tracking-wider transition-colors shadow-sm"
                  >
                    Generar Tarjeta de Regalo
                  </button>
                </form>

                {/* Preview Gift Card */}
                <div className="flex flex-col justify-center">
                  <div className="relative p-6 rounded-lg bg-[#3f6f6b] text-[#faf5e9] border border-[#9b713d]/50 shadow-md min-h-[220px] flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest uppercase block text-[#c1a06c]">
                          El Reino de los Chocolates
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white">TARJETA DE REGALO</h4>
                      </div>
                      <span className="font-serif text-2xl font-bold text-[#c1a06c]">${generatedCard ? generatedCard.amount : giftAmount}</span>
                    </div>

                    <div className="my-4">
                      <p className="text-xs text-[#faf5e9]/70">Para:</p>
                      <p className="font-serif font-bold text-base text-white">
                        {generatedCard ? generatedCard.recipient : (recipientName || 'Nombre del Destinatario')}
                      </p>
                      <p className="text-xs italic text-[#faf5e9]/90 mt-1 line-clamp-2">
                        "{generatedCard ? generatedCard.message : (giftMessage || 'Un obsequio de chocolates artesanales para ti.')}"
                      </p>
                    </div>

                    <div className="flex justify-between items-end text-[11px] font-mono tracking-widest text-[#c1a06c] border-t border-white/20 pt-2">
                      <span>CÓDIGO: {generatedCard ? generatedCard.code : 'REINO-XXXX-XXXX'}</span>
                      <span className="text-[9px] uppercase font-sans text-[#faf5e9]/70">VÁLIDO POR 1 AÑO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BENEFICIOS */}
          {activeTab === 'vip' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3b271b] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#9b713d]" />
                  <span>Beneficios del Club de Clientes</span>
                </h3>
                <p className="text-xs text-[#746657]">
                  Puntos disponibles: <strong className="text-[#3b271b] font-bold">{user?.points || 450} puntos</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-lg bg-white border border-[#9b713d]/25 shadow-sm text-center space-y-2">
                  <h4 className="font-serif font-bold text-[#3b271b]">Envíos Bonificados</h4>
                  <p className="text-xs text-[#746657]">Envíos refrigerados sin cargo en compras superiores a $50 USD.</p>
                </div>

                <div className="p-5 rounded-lg bg-white border border-[#9b713d]/25 shadow-sm text-center space-y-2">
                  <h4 className="font-serif font-bold text-[#3b271b]">Cata Anual</h4>
                  <p className="text-xs text-[#746657]">Invitación especial a nuestras sesiones de degustación de nuevos orígenes.</p>
                </div>

                <div className="p-5 rounded-lg bg-white border border-[#9b713d]/25 shadow-sm text-center space-y-2">
                  <h4 className="font-serif font-bold text-[#3b271b]">Ediciones Especiales</h4>
                  <p className="text-xs text-[#746657]">Reserva prioritaria para cajas de latón vintage de edición limitada.</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
