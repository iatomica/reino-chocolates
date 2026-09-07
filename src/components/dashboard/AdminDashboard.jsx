import React, { useState } from 'react';
import { ShieldCheck, Tag, Ticket, ListOrdered, Users, Trash2, X, Plus } from 'lucide-react';

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
    { id: 'RC-94821', customer: 'Sofía Martínez', items: '1x Caja Selección Clásica 24 Piezas', total: 34.00, status: 'En Preparación', date: '2026-09-06' },
    { id: 'RC-88120', customer: 'Carlos Mendoza', items: '2x Bombones con Dulce de Leche', total: 45.00, status: 'Listo para Retiro', date: '2026-09-06' },
    { id: 'RC-77301', customer: 'Valentina Rossi', items: '1x Tableta Grand Cru 85%', total: 18.00, status: 'Entregado', date: '2026-09-07' }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#21120c]/70 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#faf5e9] border border-[#9b713d]/40 shadow-xl rounded-lg overflow-hidden text-[#3b271b] my-8">
        
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
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-2xl font-bold text-[#3b271b]">Panel de Administración</h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#6f9f9a]/20 text-[#294b48] font-sans">
                    ACTIVO
                  </span>
                </div>
                <p className="text-xs text-[#746657] font-sans mt-0.5">{user?.email || 'admin@reinochocolates.com'} • Gerencia de Tienda</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 border-t border-[#9b713d]/15 pt-4">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all ${
                activeTab === 'catalog'
                  ? 'bg-[#6f9f9a] text-[#faf5e9] shadow-sm'
                  : 'bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d]/10'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>Editar Precios & Catálogo</span>
            </button>

            <button
              onClick={() => setActiveTab('coupons')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all ${
                activeTab === 'coupons'
                  ? 'bg-[#6f9f9a] text-[#faf5e9] shadow-sm'
                  : 'bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d]/10'
              }`}
            >
              <Ticket className="w-4 h-4" />
              <span>Cupones de Descuento ({coupons.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all ${
                activeTab === 'orders'
                  ? 'bg-[#6f9f9a] text-[#faf5e9] shadow-sm'
                  : 'bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d]/10'
              }`}
            >
              <ListOrdered className="w-4 h-4" />
              <span>Gestionar Pedidos ({adminOrders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all ${
                activeTab === 'users'
                  ? 'bg-[#6f9f9a] text-[#faf5e9] shadow-sm'
                  : 'bg-[#faf5e9] text-[#3b271b] hover:bg-[#9b713d]/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Clientes Registrados</span>
            </button>
          </div>
        </div>

        {/* Admin Body Content */}
        <div className="p-6 md:p-8 min-h-[400px]">
          
          {/* TAB 1: EDITAR PRECIOS & CATÁLOGO */}
          {activeTab === 'catalog' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3b271b]">Gestión de Catálogo y Precios</h3>
                <p className="text-xs text-[#746657]">Las modificaciones se reflejan en tiempo real en la tienda.</p>
              </div>

              <div className="overflow-x-auto rounded-lg border border-[#9b713d]/25 shadow-sm bg-white">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-[#f3ead9] text-[#3b271b] border-b border-[#9b713d]/20 font-serif text-sm">
                    <tr>
                      <th className="p-3">Producto</th>
                      <th className="p-3">Categoría</th>
                      <th className="p-3">Precio Actual ($ USD)</th>
                      <th className="p-3">Estado</th>
                      <th className="p-3 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#9b713d]/10">
                    {products.map((p) => (
                      <tr key={p.id} className={`hover:bg-[#faf5e9]/60 transition-colors ${p.disabled ? 'opacity-50' : ''}`}>
                        <td className="p-3 font-semibold text-[#3b271b] flex items-center gap-3">
                          <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded border border-[#9b713d]/25" />
                          <span>{p.name}</span>
                        </td>
                        <td className="p-3 text-[#746657]">{p.category}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-[#3b271b]">$</span>
                            <input
                              type="number"
                              step="0.50"
                              value={p.price}
                              onChange={(e) => handlePriceChange(p.id, e.target.value)}
                              className="w-20 px-2 py-1 border border-[#9b713d]/30 rounded bg-[#faf5e9] font-semibold focus:outline-none focus:border-[#6f9f9a]"
                            />
                          </div>
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            p.disabled ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {p.disabled ? 'Pausado' : 'Disponible'}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleToggleActive(p.id)}
                            className={`px-3 py-1 rounded text-[11px] font-semibold transition-colors ${
                              p.disabled 
                                ? 'bg-[#3f6f6b] text-white hover:bg-[#294b48]'
                                : 'bg-[#f3ead9] text-[#3b271b] hover:bg-[#9b713d]/20 border border-[#9b713d]/30'
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
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3b271b]">Gestor de Cupones de Descuento</h3>
                <p className="text-xs text-[#746657]">Crea códigos promocionales para compras online.</p>
              </div>

              {/* Form Create Coupon */}
              <form onSubmit={handleAddCoupon} className="p-5 bg-white rounded-lg border border-[#9b713d]/25 shadow-sm flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b271b] mb-1">
                    Código del Cupón
                  </label>
                  <input
                    type="text"
                    value={newCouponCode}
                    onChange={(e) => setNewCouponCode(e.target.value)}
                    placeholder="Ej: CHOCO15"
                    className="w-full p-2 rounded border border-[#9b713d]/30 text-sm font-sans focus:outline-none focus:border-[#6f9f9a] uppercase font-bold"
                  />
                </div>

                <div className="w-32">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b271b] mb-1">
                    Descuento
                  </label>
                  <input
                    type="number"
                    value={newCouponDiscount}
                    onChange={(e) => setNewCouponDiscount(e.target.value)}
                    className="w-full p-2 rounded border border-[#9b713d]/30 text-sm font-sans focus:outline-none focus:border-[#6f9f9a] font-bold"
                  />
                </div>

                <div className="w-36">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3b271b] mb-1">
                    Tipo
                  </label>
                  <select
                    value={newCouponType}
                    onChange={(e) => setNewCouponType(e.target.value)}
                    className="w-full p-2 rounded border border-[#9b713d]/30 text-sm font-sans focus:outline-none focus:border-[#6f9f9a]"
                  >
                    <option value="percent">% Porcentaje</option>
                    <option value="fixed">$ Fijo (USD)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 py-2 px-5 bg-[#6f9f9a] hover:bg-[#3f6f6b] text-[#faf5e9] font-sans font-semibold rounded text-xs transition-colors shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Crear Cupón</span>
                </button>
              </form>

              {/* Coupons List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {coupons.map((c) => (
                  <div key={c.code} className="p-4 bg-white rounded-lg border border-[#9b713d]/25 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="font-mono font-bold text-xs text-[#294b48] bg-[#6f9f9a]/15 px-2 py-0.5 rounded border border-[#6f9f9a]/30">
                        {c.code}
                      </span>
                      <p className="text-xs font-serif font-bold text-[#3b271b] mt-2">
                        {c.type === 'percent' ? `${c.discount}% de Descuento` : `$${c.discount} USD de Rebaja`}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDeleteCoupon(c.code)}
                      className="text-[#746657] hover:text-rose-700 p-2 transition-colors"
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
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3b271b]">Gestión de Pedidos de Clientes</h3>
                <p className="text-xs text-[#746657]">Actualiza el estado de las órdenes de entrega o retiro.</p>
              </div>

              <div className="space-y-3">
                {adminOrders.map((ord) => (
                  <div key={ord.id} className="p-4 bg-white rounded-lg border border-[#9b713d]/25 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#3f6f6b] text-xs">{ord.id}</span>
                        <span className="text-xs text-[#746657]">• {ord.customer}</span>
                      </div>
                      <p className="text-xs text-[#746657] mt-0.5">{ord.items}</p>
                      <p className="text-xs font-bold text-[#3b271b] font-serif mt-1">Total: ${ord.total.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <select
                        value={ord.status}
                        onChange={(e) => handleOrderStatusChange(ord.id, e.target.value)}
                        className="p-1.5 text-xs rounded border border-[#9b713d]/30 bg-[#faf5e9] font-medium focus:outline-none focus:border-[#6f9f9a]"
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
                <h3 className="font-serif text-xl font-bold text-[#3b271b]">Clientes Registrados</h3>
                <p className="text-xs text-[#746657]">Lista de cuentas activas en la plataforma.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-[#9b713d]/25 shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-[#3b271b]">Sofía Martínez</h4>
                    <p className="text-xs text-[#746657]">sofia.martinez@reinochocolates.com</p>
                    <span className="text-[10px] font-medium text-[#3f6f6b]">Cliente Frecuente • 450 Puntos</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800">Activo</span>
                </div>

                <div className="p-4 bg-white rounded-lg border border-[#9b713d]/25 shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-[#3b271b]">Gerencia de Tienda</h4>
                    <p className="text-xs text-[#746657]">admin@reinochocolates.com</p>
                    <span className="text-[10px] font-medium text-[#9b713d]">Administrador</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-100 text-amber-900">Admin</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
