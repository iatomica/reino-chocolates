import React, { useState, useEffect } from 'react';
import { Crown } from '../ornaments/Crown';
import { User, ShoppingBag, Menu, X, ShieldCheck, UserCheck } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf5e9] text-[#3b271b] shadow-sm py-3 border-b border-[#9b713d]/20'
          : 'bg-[#faf5e9]/90 backdrop-blur-sm py-4 text-[#3b271b] border-b border-[#9b713d]/15'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Desktop Left Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-serif text-sm tracking-wide text-[#3b271b]">
          <a href="#productos" className="hover:text-[#9b713d] transition-colors py-1">
            Productos
          </a>
          <a href="#historia" className="hover:text-[#9b713d] transition-colors py-1">
            Nuestra Historia
          </a>
        </nav>

        {/* Center Brand Logo */}
        <a href="#" className="flex flex-col items-center group">
          <Crown className="w-6 h-6 text-[#9b713d] group-hover:scale-105 transition-transform duration-300" />
          <div className="text-center mt-1">
            <span className="font-serif text-2xl font-bold tracking-[0.16em] text-[#3b271b] block leading-none">
              EL REINO
            </span>
            <span className="font-script text-base text-[#9b713d] block font-normal -mt-1">
              de los Chocolates
            </span>
          </div>
        </a>

        {/* Desktop Right Actions & Auth */}
        <div className="hidden lg:flex items-center gap-7 font-serif text-sm">
          <nav className="flex items-center gap-7 text-[#3b271b]">
            <a href="#regalos" className="hover:text-[#9b713d] transition-colors">
              Regalos
            </a>
            <a href="#contacto" className="hover:text-[#9b713d] transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-4 pl-4 border-l border-[#9b713d]/25">
            {/* User Account / Login State */}
            {currentUser ? (
              <div className="flex items-center gap-2">
                {currentUser.role === 'admin' ? (
                  <button
                    onClick={onOpenAdminDashboard}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#9b713d] text-[#faf5e9] font-sans text-xs font-semibold hover:bg-[#c1a06c] transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Panel Admin</span>
                  </button>
                ) : (
                  <button
                    onClick={onOpenUserDashboard}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3ead9] border border-[#9b713d]/30 text-[#3b271b] hover:border-[#9b713d] transition-all text-xs font-sans"
                  >
                    <UserCheck className="w-3.5 h-3.5 text-[#9b713d]" />
                    <span className="font-medium">{currentUser.name}</span>
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#9b713d]/60 text-[#3b271b] hover:bg-[#9b713d] hover:text-[#faf5e9] transition-all font-sans text-xs font-semibold"
              >
                <User className="w-3.5 h-3.5" />
                <span>Ingresar</span>
              </button>
            )}

            {/* Cart Icon */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full text-[#3b271b] hover:text-[#9b713d] transition-colors"
              title="Ver carrito de compras"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#9b713d] text-[#faf5e9] font-sans text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          {currentUser ? (
            <button
              onClick={currentUser.role === 'admin' ? onOpenAdminDashboard : onOpenUserDashboard}
              className="px-3 py-1 rounded-full bg-[#9b713d] text-[#faf5e9] text-xs font-sans font-semibold"
            >
              {currentUser.role === 'admin' ? 'Admin' : 'Mi Cuenta'}
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="p-1.5 text-[#3b271b]"
              title="Ingresar"
            >
              <User className="w-5 h-5" />
            </button>
          )}

          <button onClick={onOpenCart} className="relative p-1.5 text-[#3b271b]">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#9b713d] text-[#faf5e9] text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 text-[#3b271b]">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf5e9] border-b border-[#9b713d]/20 px-6 py-6 space-y-4 font-serif text-center text-[#3b271b]">
          <a href="#productos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base text-[#3b271b]">Productos</a>
          <a href="#historia" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base text-[#3b271b]">Nuestra Historia</a>
          <a href="#regalos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base text-[#3b271b]">Regalos</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base text-[#3b271b]">Contacto</a>
          
          {!currentUser && (
            <div className="pt-4 border-t border-[#9b713d]/20">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
                className="w-full py-2.5 rounded-full bg-[#9b713d] text-[#faf5e9] font-sans font-semibold text-xs uppercase tracking-wider"
              >
                INGRESAR / LOGIN
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
