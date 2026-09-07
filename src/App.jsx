import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { BrandValues } from './components/home/BrandValues';
import { StorySection } from './components/home/StorySection';
import { SpecialtiesSection } from './components/home/SpecialtiesSection';
import { ChocolateCatalog } from './components/ChocolateCatalog';
import { GiftSection } from './components/home/GiftSection';
import { HeritageSection } from './components/home/HeritageSection';
import { Footer } from './components/Footer';
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
    { code: 'REINO15', discount: 15, type: 'percent', active: true },
    { code: 'CHOCO20', discount: 20, type: 'percent', active: true }
  ]);

  // Auth User State
  const [currentUser, setCurrentUser] = useState({
    id: 'user-vip-1',
    name: 'Sofía Martínez',
    email: 'sofia.martinez@reinochocolates.com',
    role: 'user',
    vipLevel: 'Cliente Frecuente',
    points: 450,
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
      id: 'caja-seleccion-clasica',
      name: 'Caja Selección Clásica 24 Piezas',
      price: 34.00,
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
    <div className="min-h-screen bg-[#faf5e9] text-[#3b271b] selection:bg-[#9b713d] selection:text-[#faf5e9]">
      
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

      {/* User Dashboard */}
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
