import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import SizeGuideModal from './components/SizeGuideModal';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import useUIStore from './store/uiStore';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

// Inner app that has access to router context
function AppInner() {
  const location = useLocation();
  const { activeModal, closeModal } = useUIStore();
  const isCheckoutPage = location.pathname === '/checkout';
  const isSuccessPage = location.pathname === '/order-success';
  const showHeaderFooter = !isSuccessPage;

  return (
    <div style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      {!isCheckoutPage && !isSuccessPage && <Header />}
      {isCheckoutPage && (
        // Minimal checkout header
        <header
          style={{
            background: 'rgba(15,15,26,0.95)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span className="font-display gold-text" style={{ fontSize: 20, fontWeight: 800 }}>
            STRIDENT BAREFOOT
          </span>
          <span style={{ marginLeft: 8, fontSize: 12, color: '#8888aa' }}>— Secure Checkout</span>
        </header>
      )}

      <main style={{ flex: 1, width: '100%', overflowX: 'hidden' }}>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
            <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
            <Route path="/order-success" element={<PageTransition><OrderSuccess /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      {!isSuccessPage && !isCheckoutPage && <Footer />}
      {isCheckoutPage && (
        <footer style={{ padding: '16px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: 11, color: '#666680' }}>
            © {new Date().getFullYear()} Strident Barefoot — Ridgewell Supply Co LLC. All rights reserved.
          </p>
        </footer>
      )}

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Legal Modals */}
      {activeModal === 'sizeGuide' && <SizeGuideModal onClose={closeModal} />}
      {['privacy', 'terms', 'returns', 'compliance'].includes(activeModal) && (
        <LegalModal type={activeModal} onClose={closeModal} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
