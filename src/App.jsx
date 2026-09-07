import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { BrandValues } from './components/home/BrandValues';
import { StorySection } from './components/home/StorySection';
import { SpecialtiesSection } from './components/home/SpecialtiesSection';
import { ChocolateCatalog } from './components/ChocolateCatalog';
import { GiftSection } from './components/home/GiftSection';
import { HeritageSection } from './components/home/HeritageSection';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/CartDrawer';
import { LoginModal } from './components/auth/LoginModal';
import { UserDashboard } from './components/dashboard/UserDashboard';
import { AdminDashboard } from './components/dashboard/AdminDashboard';
import { CHOCOLATES_CATALOG } from './data/chocolatesData';
import './styles/tokens.css';

export function App() {
  // Global State for Products (Editable by Admin in live time)
  const [products, setProducts] = useState(CHOCOLATES_CATALOG);

  // Global State for Discount Coupons
  const [coupons, setCoupons] = useState([
    { code: 'ROYAL25', discount: 25, type: 'percent', active: true },
    { code: 'MONTAÑA20', discount: 20, type: 'percent', active: true },
    { code: 'WONKA50', discount: 50, type: 'fixed', active: true }
  ]);

  // Auth User State (null, or user object)
  const [currentUser, setCurrentUser] = useState({
    id: 'user-vip-1',
    name: 'Sofía Martínez',
    email: 'sofia.vip@reinochocolates.com',
    role: 'user',
    vipLevel: 'Socio Oro',
    points: 1450,
    joinedDate: '2024-03-15'
  });

  // Modal Visibility States
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUserDashboardOpen, setIsUserDashboardOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart State
  const [cartItems, setCartItems] = useState([
    {
      id: 'trufa-orquidea',
      name: 'Trufa de Orquídea Turquesa & Oro 24K',
      price: 18.50,
      quantity: 1,
      image: '/assets/images/caja_chocolates_montana.jpg'
    }
  ]);

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      setCartItems(prev => prev.filter(i => i.id !== id));
    } else {
      setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: newQty } : i));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleLogin = (userObj) => {
    setCurrentUser(userObj);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-brown selection:bg-brand-gold selection:text-brand-brown">
      
      {/* Navigation Header */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenUserDashboard={() => setIsUserDashboardOpen(true)}
        onOpenAdminDashboard={() => setIsAdminDashboardOpen(true)}
      />

      {/* Main Page Body */}
      <main>
        <Hero 
          onOpenTakeAway={() => {
            if (currentUser?.role === 'user') {
              setIsUserDashboardOpen(true);
            } else {
              setIsLoginOpen(true);
            }
          }} 
        />
        
        <BrandValues />
        
        <StorySection />
        
        <SpecialtiesSection onSelectCategory={() => setIsCartOpen(true)} />
        
        <ChocolateCatalog onAddToCart={handleAddToCart} products={products} />
        
        <GiftSection />
        
        <HeritageSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />

      {/* User VIP Dashboard */}
      <UserDashboard
        isOpen={isUserDashboardOpen}
        onClose={() => setIsUserDashboardOpen(false)}
        user={currentUser}
      />

      {/* Admin Dashboard */}
      <AdminDashboard
        isOpen={isAdminDashboardOpen}
        onClose={() => setIsAdminDashboardOpen(false)}
        user={currentUser}
        products={products}
        onUpdateProducts={setProducts}
        coupons={coupons}
        onUpdateCoupons={setCoupons}
      />

    </div>
  );
}

export default App;
