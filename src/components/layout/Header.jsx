import React, { useState, useEffect } from 'react';
import { Crown } from '../ornaments/Crown';
import { RoyalCrest } from '../ornaments/RoyalCrest';
import { Search, User, ShoppingBag, Menu, X, ShieldCheck, UserCheck } from 'lucide-react';

export const Header = ({ 
  cartCount = 0, 
  onOpenCart, 
  currentUser, 
  onOpenLogin, 
  onOpenUserDashboard, 
  onOpenAdminDashboard 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#120A07]/95 text-[#FAF5EB] backdrop-blur-md shadow-xl py-3 border-b border-[#FFD700]/30'
          : 'bg-gradient-to-b from-[#120A07]/95 via-[#120A07]/60 to-transparent py-4 text-[#FAF5EB]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Desktop Left Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-serif text-xs font-semibold tracking-widest uppercase">
          <a href="#productos" className="text-[#FAF5EB] hover:text-[#FFD700] transition-colors relative group py-1">
            Chocolates Turquesa
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#alquimia" className="text-[#FAF5EB] hover:text-[#FFD700] transition-colors relative group py-1">
            Laboratorio Real
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#historia" className="text-[#FAF5EB] hover:text-[#FFD700] transition-colors relative group py-1">
            Edición Montaña
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Center Brand Logo */}
        <a href="#" className="flex flex-col items-center group">
          <Crown className="w-8 h-8 text-[#FFD700] group-hover:scale-110 transition-transform duration-300 drop-shadow" />
          <div className="text-center mt-0.5">
            <span className="font-serif text-2xl font-bold tracking-[0.18em] text-[#FFD700] block leading-none drop-shadow">
              EL REINO
            </span>
            <span className="font-sans text-[10px] text-[#0DB4B9] block font-semibold tracking-widest uppercase mt-0.5">
              de los Chocolates
            </span>
          </div>
        </a>

        {/* Desktop Right Actions & Auth */}
        <div className="hidden lg:flex items-center gap-6 font-serif text-xs font-semibold">
          
          {/* User Account / Login State */}
          {currentUser ? (
            <div className="flex items-center gap-3">
              {currentUser.role === 'admin' ? (
                <button
                  onClick={onOpenAdminDashboard}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-[#120A07] font-serif font-extrabold text-xs hover:brightness-110 transition-all shadow-md"
                >
                  <ShieldCheck className="w-4 h-4 text-[#120A07]" />
                  <span>PANEL ADMIN</span>
                </button>
              ) : (
                <button
                  onClick={onOpenUserDashboard}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#00A896]/30 border border-[#0DB4B9] text-[#FAF5EB] hover:bg-[#00A896]/60 transition-all text-xs font-serif shadow-sm"
                >
                  <UserCheck className="w-4 h-4 text-[#FFD700]" />
                  <span className="font-bold">{currentUser.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFD700] text-[#120A07] font-sans font-extrabold">
                    {currentUser.points} PTS
                  </span>
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FFD700]/80 bg-[#120A07]/40 text-[#FFD700] hover:bg-[#FFD700] hover:text-[#120A07] transition-all duration-300 font-serif text-xs tracking-wider shadow"
            >
              <User className="w-3.5 h-3.5" />
              <span>INGRESAR / LOGIN</span>
            </button>
          )}

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-2.5 rounded-full bg-[#120A07]/80 border border-[#FFD700]/50 text-[#FFD700] hover:bg-[#FFD700] hover:text-[#120A07] transition-all shadow"
            title="Ver carrito de compras"
          >
            <ShoppingBag className="w-4.5 h-4.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#FFD700] text-[#120A07] font-sans text-[11px] font-extrabold flex items-center justify-center border border-[#120A07] shadow">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          {currentUser ? (
            <button
              onClick={currentUser.role === 'admin' ? onOpenAdminDashboard : onOpenUserDashboard}
              className="px-3 py-1 rounded-full bg-[#FFD700] text-[#120A07] text-xs font-bold font-serif"
            >
              {currentUser.role === 'admin' ? 'ADMIN' : 'MI CUENTA'}
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="p-1.5 text-[#FFD700]"
              title="Ingresar"
            >
              <User className="w-5 h-5" />
            </button>
          )}

          <button onClick={onOpenCart} className="relative p-1.5 text-[#FFD700]">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FFD700] text-[#120A07] text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 text-[#FAF5EB]">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#120A07] border-b border-[#FFD700]/30 px-6 py-6 space-y-4 font-serif text-center text-[#FAF5EB] animate-fade-in">
          <a href="#productos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base text-[#FAF5EB]">Chocolates Turquesa</a>
          <a href="#alquimia" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base text-[#FAF5EB]">Laboratorio Real</a>
          <a href="#historia" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base text-[#FAF5EB]">Edición Montaña</a>
          
          <div className="pt-4 border-t border-[#FFD700]/20 flex flex-col gap-2">
            {!currentUser && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
                className="w-full py-2.5 rounded-lg bg-[#FFD700] text-[#120A07] font-serif font-bold text-xs"
              >
                INGRESAR / LOGIN
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
