import React, { useState } from 'react';
import { Crown } from '../ornaments/Crown';
import { UserCheck, ShieldCheck, X, ArrowRight, Lock, Mail } from 'lucide-react';

export const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('user');

  if (!isOpen) return null;

  const handleDemoLogin = (role) => {
    if (role === 'admin') {
      onLogin({
        id: 'admin-1',
        name: 'Administración General',
        email: 'admin@reinochocolates.com',
        role: 'admin',
        title: 'Gerencia de Tienda',
        joinedDate: '2024-01-01'
      });
    } else {
      onLogin({
        id: 'user-vip-1',
        name: 'Sofía Martínez',
        email: 'sofia.martinez@reinochocolates.com',
        role: 'user',
        vipLevel: 'Cliente Frecuente',
        points: 450,
        joinedDate: '2024-03-15'
      });
    }
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      id: selectedRole === 'admin' ? 'admin-custom' : 'user-custom',
      name: email.split('@')[0] || 'Cliente',
      email: email || 'cliente@reinochocolates.com',
      role: selectedRole,
      vipLevel: selectedRole === 'admin' ? 'Administrador' : 'Cliente Frecuente',
      points: selectedRole === 'admin' ? 9999 : 100,
      joinedDate: '2026-09-07'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#21120c]/70 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#faf5e9] border border-[#9b713d]/40 shadow-xl rounded-lg overflow-hidden text-[#3b271b]">
        
        {/* Header */}
        <div className="bg-[#f3ead9] p-6 text-center text-[#3b271b] relative border-b border-[#9b713d]/25">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-[#746657] hover:text-[#3b271b] transition-colors w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#faf5e9]"
            title="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex justify-center mb-1">
            <Crown className="w-8 h-8 text-[#9b713d]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#3b271b]">
            Acceso a Clientes & Administración
          </h2>
          <p className="text-xs text-[#746657] font-sans tracking-wide mt-1">
            Gestión de pedidos, compras y catálogo
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6">

          {/* Quick Demo Login Cards */}
          <div>
            <span className="block text-xs font-semibold text-[#746657] uppercase tracking-wider mb-3 text-center">
              Acceso Rápido de Prueba
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Cliente */}
              <button
                onClick={() => handleDemoLogin('user')}
                className="group text-left p-4 rounded-lg border border-[#9b713d]/30 bg-white hover:bg-[#f3ead9] hover:border-[#9b713d] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <UserCheck className="w-5 h-5 text-[#3f6f6b]" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#6f9f9a]/15 text-[#294b48]">
                      CLIENTE
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-[#3b271b] group-hover:text-[#3f6f6b]">
                    Sofía Martínez
                  </h4>
                  <p className="text-xs text-[#746657] mt-1">
                    Historial de pedidos, reservas Take Away y tarjetas de regalo.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#9b713d]/20 flex items-center justify-between text-xs font-semibold text-[#3f6f6b]">
                  <span>Ingresar como Cliente</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Card 2: Administrador */}
              <button
                onClick={() => handleDemoLogin('admin')}
                className="group text-left p-4 rounded-lg border border-[#9b713d]/30 bg-white hover:bg-[#f3ead9] hover:border-[#9b713d] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#9b713d]" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#9b713d]/20 text-[#432719]">
                      ADMINISTRADOR
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-[#3b271b] group-hover:text-[#9b713d]">
                    Gerencia de Tienda
                  </h4>
                  <p className="text-xs text-[#746657] mt-1">
                    Gestión de precios, cupones de descuento y pedidos.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#9b713d]/20 flex items-center justify-between text-xs font-semibold text-[#9b713d]">
                  <span>Ingresar como Admin</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-[#9b713d]/20"></div>
            <span className="flex-shrink mx-4 text-xs uppercase text-[#746657] font-medium tracking-wider">
              o con tu cuenta
            </span>
            <div className="flex-grow border-t border-[#9b713d]/20"></div>
          </div>

          {/* Form Login */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#3b271b] uppercase tracking-wider mb-1">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#746657] absolute left-3 top-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@reinochocolates.com"
                  className="w-full pl-9 pr-4 py-2 rounded border border-[#9b713d]/30 bg-white focus:outline-none focus:border-[#6f9f9a] text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3b271b] uppercase tracking-wider mb-1">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#746657] absolute left-3 top-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-4 py-2 rounded border border-[#9b713d]/30 bg-white focus:outline-none focus:border-[#6f9f9a] text-sm font-sans"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-[#6f9f9a] hover:bg-[#3f6f6b] text-[#faf5e9] font-sans font-semibold tracking-wider transition-colors shadow-sm mt-2 text-xs uppercase"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
