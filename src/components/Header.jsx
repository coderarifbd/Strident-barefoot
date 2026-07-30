import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Footprints } from 'lucide-react';
import useCartStore from '../store/cartStore';
import useUIStore from '../store/uiStore';

export default function Header() {
  const { openCart, getItemCount } = useCartStore();
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const itemCount = useCartStore((s) => s.getItemCount());
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Philosophy', to: '/#philosophy' },
    { label: 'Size Guide', action: () => useUIStore.getState().openModal('sizeGuide') },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div
        className="announcement-bar overflow-hidden relative flex items-center"
        style={{ paddingTop: 14, paddingBottom: 14 }}
      >
        <div className="marquee-inner text-xs font-semibold tracking-wider flex items-center" style={{ color: '#e8b86d' }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-10 px-10">
              <span className="inline-flex items-center gap-2"><span>🚚</span> Free Shipping on Orders Over $75</span>
              <span className="opacity-40 select-none" style={{ fontSize: '11px', transform: 'translateY(-1px)' }}>|</span>
              <span className="inline-flex items-center gap-2"><span>🛡️</span> 30-Day Happy Feet Guarantee</span>
              <span className="opacity-40 select-none" style={{ fontSize: '11px', transform: 'translateY(-1px)' }}>|</span>
              <span className="inline-flex items-center gap-2"><span>🌿</span> Real Barefoot Comfort & Wide Toe Room</span>
              <span className="opacity-40 select-none" style={{ fontSize: '11px', transform: 'translateY(-1px)' }}>|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <header
        style={{
          background: 'rgba(10, 11, 18, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: 'linear-gradient(135deg, #f5d08c, #e8b86d, #c9963a)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(232, 184, 109, 0.3)',
                }}
              >
                <Footprints size={22} color="#0b0c16" strokeWidth={2.5} />
              </div>
              <div>
                <span
                  className="font-brand"
                  style={{ fontSize: 24, letterSpacing: '1.5px', lineHeight: 1 }}
                >
                  <span className="gold-text">STRIDENT</span>
                </span>
                <div style={{ fontSize: 10, color: '#8e8eb4', letterSpacing: '3px', fontWeight: 700, textTransform: 'uppercase', marginTop: 1 }}>
                  BAREFOOT
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.to ? (
                  <Link key={link.label} to={link.to} className="nav-link">
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className="nav-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCart}
                style={{
                  position: 'relative',
                  background: 'rgba(232,184,109,0.1)',
                  border: '1px solid rgba(232,184,109,0.25)',
                  borderRadius: 10,
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  cursor: 'pointer',
                  color: '#e8b86d',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <ShoppingBag size={18} />
                <span className="hidden sm:inline">Cart</span>
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      key={itemCount}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      style={{
                        position: 'absolute',
                        top: -8,
                        right: -8,
                        background: 'linear-gradient(135deg, #e8b86d, #c9963a)',
                        color: '#1a1a2e',
                        borderRadius: '50%',
                        width: 20,
                        height: 20,
                        fontSize: 11,
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  padding: 8,
                  color: '#f0f0f5',
                  cursor: 'pointer',
                }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'rgba(15,15,26,0.98)',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                overflow: 'hidden',
              }}
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.to ? (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="nav-link text-base"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => { link.action(); closeMobileMenu(); }}
                      className="nav-link text-base text-left"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      {link.label}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
