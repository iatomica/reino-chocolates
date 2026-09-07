import React, { useState } from 'react';
import { RoyalCrest } from '../ornaments/RoyalCrest';
import { ShieldCheck, Tag, Ticket, ListOrdered, Users, Trash2, X, Plus, CheckCircle2, UserCheck, DollarSign } from 'lucide-react';

export const AdminDashboard = ({ 
  isOpen, 
  onClose, 
  user,
  products, 
  onUpdateProducts, 
  coupons, 
  onUpdateCoupons 
}) => {
  const [activeTab, setActiveTab] = useState('catalog');

  // Local state for adding a new coupon
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponDiscount, setNewCouponDiscount] = useState(15);
  const [newCouponType, setNewCouponType] = useState('percent');

  // Local state for orders
  const [adminOrders, setAdminOrders] = useState([
    { id: 'RC-94821', customer: 'Sofía Martínez', items: '1x Caja Chocolates Montaña Turquesa', total: 62.50, status: 'En Camino', date: '2026-09-06' },
    { id: 'RC-88120', customer: 'Carlos Mendoza', items: '2x Elixir Cacao Dorado', total: 48.00, status: 'Listo para Retiro', date: '2026-09-06' },
    { id: 'RC-77301', customer: 'Valentina Rossi', items: '1x Tableta Ticket Dorado Wonka', total: 32.00, status: 'En Preparación', date: '2026-09-07' }
  ]);

  if (!isOpen) return null;

  // Handle Product Price Change
  const handlePriceChange = (id, newPrice) => {
    const updated = products.map(p => p.id === id ? { ...p, price: parseFloat(newPrice) || 0 } : p);
    onUpdateProducts(updated);
  };

  // Handle Toggle Availability
  const handleToggleActive = (id) => {
    const updated = products.map(p => p.id === id ? { ...p, disabled: !p.disabled } : p);
    onUpdateProducts(updated);
  };

  // Add Coupon
  const handleAddCoupon = (e) => {
    e.preventDefault();
    if (!newCouponCode.trim()) return;
    const created = {
      code: newCouponCode.toUpperCase().trim(),
      discount: parseFloat(newCouponDiscount),
      type: newCouponType,
      active: true
    };
    onUpdateCoupons([...coupons, created]);
    setNewCouponCode('');
  };

  // Delete Coupon
  const handleDeleteCoupon = (code) => {
    onUpdateCoupons(coupons.filter(c => c.code !== code));
  };

  // Update Order Status
  const handleOrderStatusChange = (orderId, newStatus) => {
    setAdminOrders(adminOrders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#120A07]/80 backdrop-blur-md p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#FAF5EB] border-2 border-[#FFD700]/70 shadow-2xl rounded-2xl overflow-hidden text-[#120A07] my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#120A07] via-[#2A160E] to-[#120A07] p-6 text-[#FAF5EB] relative border-b border-[#FFD700]/40">
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
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-2xl font-bold text-[#FFD700]">Panel de Administración Real</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-700 text-white font-sans uppercase">
                    SISTEMA EN VIVO
                  </span>
                </div>
                <p className="text-xs text-[#FAF5EB]/80 font-sans mt-0.5">{user?.email || 'admin@reinochocolates.com'} • Rol: Administrador Master</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 border-t border-white/15 pt-4">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-serif font-bold transition-all ${
                activeTab === 'catalog'
                  ? 'bg-[#FFD700] text-[#120A07] shadow-md'
                  : 'bg-white/10 text-[#FAF5EB] hover:bg-white/20'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>Editar Precios & Catálogo</span>
            </button>

            <button
              onClick={() => setActiveTab('coupons')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-serif font-bold transition-all ${
                activeTab === 'coupons'
                  ? 'bg-[#FFD700] text-[#120A07] shadow-md'
                  : 'bg-white/10 text-[#FAF5EB] hover:bg-white/20'
              }`}
            >
              <Ticket className="w-4 h-4" />
              <span>Cupones de Descuento ({coupons.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-serif font-bold transition-all ${
                activeTab === 'orders'
                  ? 'bg-[#FFD700] text-[#120A07] shadow-md'
                  : 'bg-white/10 text-[#FAF5EB] hover:bg-white/20'
              }`}
            >
              <ListOrdered className="w-4 h-4" />
              <span>Gestionar Pedidos ({adminOrders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-serif font-bold transition-all ${
                activeTab === 'users'
                  ? 'bg-[#FFD700] text-[#120A07] shadow-md'
                  : 'bg-white/10 text-[#FAF5EB] hover:bg-white/20'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Control de Usuarios</span>
            </button>
          </div>
        </div>

        {/* Admin Body Content */}
        <div className="p-6 md:p-8 min-h-[420px]">
          
          {/* TAB 1: EDITAR PRECIOS & CATÁLOGO */}
          {activeTab === 'catalog' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#120A07]">Gestión de Catálogo y Precios</h3>
                  <p className="text-xs text-[#120A07]/70">Los cambios se aplican inmediatamente a la tienda de los clientes.</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#FFD700]/40 shadow-sm bg-white">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-[#FAF5EB] text-[#120A07] border-b border-[#FFD700]/30 font-serif text-sm">
                    <tr>
                      <th className="p-3">Producto</th>
                      <th className="p-3">Categoría</th>
                      <th className="p-3">Precio Actual ($ USD)</th>
                      <th className="p-3">Estado</th>
                      <th className="p-3 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#FFD700]/15">
                    {products.map((p) => (
                      <tr key={p.id} className={`hover:bg-[#FAF5EB]/50 transition-colors ${p.disabled ? 'opacity-50' : ''}`}>
                        <td className="p-3 font-semibold text-[#120A07] flex items-center gap-3">
                          <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-lg border border-[#FFD700]/40" />
                          <span>{p.name}</span>
                        </td>
                        <td className="p-3 text-[#120A07]/80">{p.category}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-[#120A07]">$</span>
                            <input
                              type="number"
                              step="0.50"
                              value={p.price}
                              onChange={(e) => handlePriceChange(p.id, e.target.value)}
                              className="w-24 px-2 py-1 border border-[#FFD700]/60 rounded bg-[#FAF5EB]/40 font-bold focus:outline-none focus:border-[#0DB4B9]"
                            />
                          </div>
                        </td>
                        <td className="p-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                            p.disabled ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {p.disabled ? 'Agotado' : 'Disponible'}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleToggleActive(p.id)}
                            className={`px-3 py-1 rounded text-[11px] font-bold transition-all ${
                              p.disabled 
                                ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                                : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                            }`}
                          >
                            {p.disabled ? 'Reactivar' : 'Pausar'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: CUPONES DE DESCUENTO */}
          {activeTab === 'coupons' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#120A07]">Gestor de Cupones de Descuento</h3>
                  <p className="text-xs text-[#120A07]/70">Crea promociones para la temporada o clientes VIP.</p>
                </div>
              </div>

              {/* Form Create Coupon */}
              <form onSubmit={handleAddCoupon} className="p-5 bg-white rounded-xl border border-[#FFD700]/40 shadow-sm flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#120A07] mb-1">
                    Código del Cupón
                  </label>
                  <input
                    type="text"
                    value={newCouponCode}
                    onChange={(e) => setNewCouponCode(e.target.value)}
                    placeholder="Ej: REINO30"
                    className="w-full p-2.5 rounded-lg border border-[#FFD700]/50 text-sm font-sans focus:outline-none focus:border-[#0DB4B9] uppercase font-bold"
                  />
                </div>

                <div className="w-32">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#120A07] mb-1">
                    Descuento
                  </label>
                  <input
                    type="number"
                    value={newCouponDiscount}
                    onChange={(e) => setNewCouponDiscount(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#FFD700]/50 text-sm font-sans focus:outline-none focus:border-[#0DB4B9] font-bold"
                  />
                </div>

                <div className="w-36">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#120A07] mb-1">
                    Tipo
                  </label>
                  <select
                    value={newCouponType}
                    onChange={(e) => setNewCouponType(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#FFD700]/50 text-sm font-sans focus:outline-none focus:border-[#0DB4B9]"
                  >
                    <option value="percent">% Porcentaje</option>
                    <option value="fixed">$ Fijo (USD)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 py-2.5 px-5 bg-[#FFD700] text-[#120A07] font-serif font-bold rounded-lg hover:brightness-105 transition-all shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>CREAR CUPÓN</span>
                </button>
              </form>

              {/* Coupons List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {coupons.map((c) => (
                  <div key={c.code} className="p-4 bg-white rounded-xl border border-[#FFD700]/40 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="font-mono font-bold text-sm text-[#05668D] bg-[#00A896]/10 px-2 py-1 rounded border border-[#00A896]/30">
                        {c.code}
                      </span>
                      <p className="text-xs font-serif font-bold text-[#120A07] mt-2">
                        {c.type === 'percent' ? `${c.discount}% de Descuento` : `$${c.discount} USD de Rebaja`}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDeleteCoupon(c.code)}
                      className="text-rose-600 hover:text-rose-800 p-2 text-xs font-bold"
                      title="Eliminar cupón"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: GESTIONAR PEDIDOS */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#120A07]">Gestión de Pedidos de Clientes</h3>
                  <p className="text-xs text-[#120A07]/70">Cambia el estado de envío para notificar a los usuarios.</p>
                </div>
              </div>

              <div className="space-y-4">
                {adminOrders.map((ord) => (
                  <div key={ord.id} className="p-4 bg-white rounded-xl border border-[#FFD700]/40 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#05668D]">{ord.id}</span>
                        <span className="text-xs text-[#120A07]/60">• {ord.customer}</span>
                      </div>
                      <p className="text-xs text-[#120A07]/80 mt-1">{ord.items}</p>
                      <p className="text-xs font-bold text-[#120A07] font-serif mt-1">Total: ${ord.total.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <select
                        value={ord.status}
                        onChange={(e) => handleOrderStatusChange(ord.id, e.target.value)}
                        className="p-2 text-xs rounded-lg border border-[#FFD700]/50 bg-[#FAF5EB]/50 font-bold focus:outline-none focus:border-[#0DB4B9]"
                      >
                        <option value="En Preparación">En Preparación</option>
                        <option value="Listo para Retiro">Listo para Retiro</option>
                        <option value="En Camino">En Camino</option>
                        <option value="Entregado">Entregado</option>
                        <option value="Cancelado">Cancelado</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CONTROL DE USUARIOS */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#120A07]">Usuarios Registrados</h3>
                <p className="text-xs text-[#120A07]/70">Visualiza los socios del club e inspectores del Reino.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#FFD700]/40 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-8 h-8 text-[#00A896]" />
                    <div>
                      <h4 className="font-serif font-bold text-[#120A07]">Sofía Martínez</h4>
                      <p className="text-xs text-[#120A07]/60">sofia.vip@reinochocolates.com</p>
                      <span className="text-[10px] font-bold text-[#05668D]">Socio Oro • 1,450 Puntos</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-800">VIP Activo</span>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#FFD700]/40 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
                    <div>
                      <h4 className="font-serif font-bold text-[#120A07]">Don Willy (Admin)</h4>
                      <p className="text-xs text-[#120A07]/60">admin@reinochocolates.com</p>
                      <span className="text-[10px] font-bold text-[#05668D]">Administrador Real</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-amber-100 text-amber-900">SuperAdmin</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
