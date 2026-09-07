import React, { useState } from 'react';
import { RoyalCrest } from '../ornaments/RoyalCrest';
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
        name: 'Don Willy (Admin Master)',
        email: 'admin@reinochocolates.com',
        role: 'admin',
        title: 'Maestro Chocolatero & Admin Real',
        joinedDate: '2024-01-01'
      });
    } else {
      onLogin({
        id: 'user-vip-1',
        name: 'Sofía Martínez',
        email: 'sofia.vip@reinochocolates.com',
        role: 'user',
        vipLevel: 'Socio Oro',
        points: 1450,
        joinedDate: '2024-03-15'
      });
    }
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      id: selectedRole === 'admin' ? 'admin-custom' : 'user-custom',
      name: email.split('@')[0] || 'Usuario Real',
      email: email || 'usuario@reinochocolates.com',
      role: selectedRole,
      vipLevel: selectedRole === 'admin' ? 'Administrador' : 'Socio Plata',
      points: selectedRole === 'admin' ? 9999 : 250,
      joinedDate: '2026-09-07'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#120A07]/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FAF5EB] border-2 border-[#FFD700]/70 shadow-2xl rounded-2xl overflow-hidden text-[#120A07]">
        
        {/* Header Decorator */}
        <div className="bg-gradient-to-r from-[#120A07] via-[#05668D] to-[#120A07] p-6 text-center text-[#FAF5EB] relative border-b border-[#FFD700]/40">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-[#FFD700] hover:text-white transition-colors w-8 h-8 rounded-full flex items-center justify-center bg-[#120A07]/40 border border-[#FFD700]/40"
            title="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex justify-center mb-2">
            <RoyalCrest className="w-12 h-12 text-[#FFD700]" />
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-wide text-[#FFD700] drop-shadow">
            Acceso a la Casa Real
          </h2>
          <p className="text-xs text-[#FAF5EB] font-sans tracking-widest uppercase mt-1">
            Plataforma de Clientes VIP & Administración
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6">

          {/* Quick Demo Login Cards */}
          <div>
            <span className="block text-xs font-bold text-[#120A07] uppercase tracking-widest mb-3 text-center">
              Acceso Rápido de Prueba (Seleccione un Rol)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Cliente VIP */}
              <button
                onClick={() => handleDemoLogin('user')}
                className="group text-left p-4 rounded-xl border border-[#0DB4B9]/40 bg-white hover:bg-[#00A896]/10 hover:border-[#0DB4B9] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <UserCheck className="w-6 h-6 text-[#00A896]" />
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#00A896]/20 text-[#05668D]">
                      CLIENTE VIP
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-[#120A07] group-hover:text-[#05668D]">
                    Sofía Martínez
                  </h4>
                  <p className="text-xs text-[#120A07]/75 mt-1">
                    Realiza compras, agenda Take Away, regala Gift Cards y canjea puntos.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#FFD700]/30 flex items-center justify-between text-xs font-bold text-[#05668D] group-hover:translate-x-1 transition-transform">
                  <span>Ingresar como VIP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Card 2: Administrador */}
              <button
                onClick={() => handleDemoLogin('admin')}
                className="group text-left p-4 rounded-xl border border-[#FFD700]/50 bg-white hover:bg-[#FFD700]/10 hover:border-[#FFD700] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#FFD700]/30 text-[#120A07]">
                      ADMINISTRADOR
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-[#120A07] group-hover:text-[#D4AF37]">
                    Don Willy (Admin)
                  </h4>
                  <p className="text-xs text-[#120A07]/75 mt-1">
                    Modifica precios en vivo, crea cupones, gestiona pedidos y usuarios.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#FFD700]/30 flex items-center justify-between text-xs font-bold text-[#120A07] group-hover:translate-x-1 transition-transform">
                  <span>Ingresar como Admin</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-[#FFD700]/30"></div>
            <span className="flex-shrink mx-4 text-xs uppercase text-[#120A07]/60 font-bold tracking-widest">
              o con tus credenciales
            </span>
            <div className="flex-grow border-t border-[#FFD700]/30"></div>
          </div>

          {/* Form Login */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#120A07] uppercase tracking-wider mb-1">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#120A07]/40 absolute left-3 top-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@reinochocolates.com"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-[#FFD700]/50 bg-white focus:outline-none focus:border-[#0DB4B9] text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#120A07] uppercase tracking-wider mb-1">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#120A07]/40 absolute left-3 top-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-[#FFD700]/50 bg-white focus:outline-none focus:border-[#0DB4B9] text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#120A07] uppercase tracking-wider mb-1">
                Rol de Ingreso
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-xs font-bold cursor-pointer text-[#120A07]">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={selectedRole === 'user'}
                    onChange={() => setSelectedRole('user')}
                    className="accent-[#00A896]"
                  />
                  Cliente VIP
                </label>
                <label className="flex items-center gap-2 text-xs font-bold cursor-pointer text-[#120A07]">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={selectedRole === 'admin'}
                    onChange={() => setSelectedRole('admin')}
                    className="accent-[#FFD700]"
                  />
                  Administrador
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FFD700] via-[#F4D03F] to-[#D4AF37] text-[#120A07] font-serif font-extrabold tracking-wider hover:brightness-105 transition-all shadow-md mt-2"
            >
              ACCEDER A LA PLATAFORMA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
